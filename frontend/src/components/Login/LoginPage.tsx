import React, { FC } from 'react';
import { useMemoizedFn } from 'ahooks';
import classnames from 'classnames';
import { isEmail } from 'class-validator';
import { formatPhoneNumber, isPhoneNumber } from '../../utils';
import { useLoginMutation, useRequestLoginCodeMutation } from '../../store';
import { useTheme } from '../../hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import TestLogin from './TestLogin';

export interface LoginPageProps {}

const steps = [
  {
    title: () => <>Sign in to Cash App</>,
    invalid: () => <>Weird</>,
    placeholder: 'Email or Mobile Number',
    buttonText: 'Request Sign In Code',
  },
  {
    title: (email: string) => (
      <>
        Cool! We sent a code to <span className='wrap-together'>{email}</span>
      </>
    ),
    invalid: (email: string) => (
      <>That doesn't look like the code we sent to {email}</>
    ),
    placeholder: 'Confirmation Code',
    buttonText: 'Sign In',
  },
];

const cleanPhoneOrEmail = (txt: string) => txt.replaceAll(/[+ \t()-]/g, '');

export const LoginPage: FC<LoginPageProps> = () => {
  const [stepNum, setStepNum] = React.useState(0);
  const [email, setEmail] = React.useState('');
  const [code, setCode] = React.useState('');
  // eslint-disable-next-line
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSubmit, setShowSubmit] = React.useState(false);
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [requestLoginCode] = useRequestLoginCodeMutation();
  const [loginPhoneOrEmail] = useLoginMutation();
  const location = useLocation();
  const navigate = useNavigate();

  useTheme(['theme-green'], ['theme-white', 'theme-light-gray']);

  /**
   * Format phone numbers (not comprehensive)
   * '+' can precede country code, allow '-' and '()' interspersed
   */
  const handleChange = useMemoizedFn((e: React.ChangeEvent<HTMLInputElement>) => {
    let txt = cleanPhoneOrEmail(e.target.value);

    if (isEmail(txt)) {
      !showSubmit && setShowSubmit(true);
    } else if (txt.length > 4 && /^[0-9]+$/.test(txt)) {
      txt = txt.slice(0, txt[0] === '1' ? 11 : 10);
      if (isPhoneNumber(txt)) !showSubmit && setShowSubmit(true);
      else showSubmit && setShowSubmit(false);
      txt = formatPhoneNumber(txt);
    } else {
      showSubmit && setShowSubmit(false);
    }
    isInvalid && setIsInvalid(false);
    setEmail(txt);
  });

  const handleChangeCode = useMemoizedFn(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const txt = e.target.value.replaceAll('-', '').slice(0, 12);
      let res = '';
      for (let i = 0; i < txt.length; i += 3) {
        if (res.length) res += '-';
        res += txt.slice(i, i + 3);
      }
      setCode(res);
    },
  );

  const handleSubmit = useMemoizedFn(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (stepNum === 1 && !showSubmit) throw new Error('invalid');
      await handleLogin();
    } catch (err) {
      console.error(err.message);
      setIsInvalid(true);
    }
  });

  const handleLogin = useMemoizedFn(async () => {
    setIsSubmitting(true);
    try {
      if (stepNum === 0) {
        await requestLoginCode({
          identifier: cleanPhoneOrEmail(email),
        }).unwrap();
      } else {
        if (!code?.length) throw new Error('missing code');
        await loginPhoneOrEmail({
          identifier: cleanPhoneOrEmail(email),
          code: code.replaceAll('-', ''),
        }).unwrap();
        navigate(location.state?.from?.pathname || '/account/activity');
      }
      setStepNum(stepNum + 1);
      isInvalid && setIsInvalid(false);
    } catch (err) {
      console.error(err.message);
      !isInvalid && setIsInvalid(true);
    } finally {
      setIsSubmitting(false);
    }
  });

  const PhoneOrEmailInput = () => (
    <div
      className={classnames('field fk-field-container', {
        'is-invalid': isInvalid,
      })}
    >
      <input
        type='text'
        id='phoneOrNumber'
        name='phoneOrNumber'
        aria-label={steps[stepNum].placeholder}
        autoComplete='off'
        spellCheck='false'
        autoCapitalize='none'
        autoFocus
        className='!rounded mb-[16px] text-center ember-text-field text-black'
        placeholder={steps[stepNum].placeholder}
        onChange={handleChange}
        value={email}
      />
    </div>
  );

  const CodeInput = () => (
    <div className='field-container'>
      <div className='field'>
        <div className='field fk-field-container'>
          <input
            type='tel'
            id='code'
            name='code'
            aria-label={steps[stepNum].placeholder}
            autoComplete='off'
            spellCheck='false'
            autoCapitalize='off'
            autoFocus
            // pattern='\d*'
            className='!rounded mb-[16px] text-center ember-text-field text-black'
            placeholder={steps[stepNum].placeholder}
            onChange={handleChangeCode}
            value={code}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className='!h-[100vh] application-cash'>
      <section className='!h-full layout-login flex-container pad'>
        <div className='w-full pt-[40px]'>
          <TestLogin setInput={setEmail} />
        </div>
        <div className='login-container flex-container flex-v-center flex-fill'>
          <h1 className='step-title flex-static'>
            {isInvalid ? steps[stepNum].invalid(email) : steps[stepNum].title(email)}
          </h1>
          <form className='w-full login-form' onSubmit={handleSubmit}>
            {stepNum === 0 ? <PhoneOrEmailInput /> : <CodeInput />}

            <div
              className={classnames('alias-submit fade-in immediate mt-[14px]', {
                show: stepNum > 0 || showSubmit,
              })}
            >
              <div className='cta submit-button-component submit-button-with-spinner'>
                <button
                  type='submit'
                  // loading={isSubmitting}
                  aria-label={steps[stepNum].buttonText}
                  className='button theme-button button--round theme-button'
                >
                  {steps[stepNum].buttonText}
                </button>
                <div className='spinner-container'></div>
              </div>
            </div>
          </form>

          {stepNum > 0 && (
            <a href='#' className='login-help-link fade-in immediate show'>
              Help
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
