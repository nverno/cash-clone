import React, { FC } from 'react';
import { useMemoizedFn } from 'ahooks';
import { Button } from 'antd';
import classnames from 'classnames';
import { isEmpty } from 'lodash-es';
import { isEmail } from 'class-validator';
import { formatPhoneNumber, isPhoneNumber } from '../../utils';

export interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  const [stepTitle, setStepTitle] = React.useState('Sign in to Cash App');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [text, setText] = React.useState('');
  const [showSubmit, setShowSubmit] = React.useState(false);
  const [isInvalid, setIsInvalid] = React.useState(false);

  /**
   * Format phone numbers (not comprehensive)
   * '+' can precede country code, allow '-' and '()' interspersed
   */
  const handleChange = useMemoizedFn(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let txt = e.target.value.replaceAll(/[+ \t()-]/g, '');

      if (isEmpty(txt)) {
        setStepTitle('Sign in to Cash App');
      } else if (isEmail(txt)) {
        !showSubmit && setShowSubmit(true);
      } else if (txt.length > 4 && /^[0-9]+$/.test(txt)) {
        txt = txt.slice(0, txt[0] === '1' ? 11 : 10);
        if (isPhoneNumber(txt)) !showSubmit && setShowSubmit(true);
        else showSubmit && setShowSubmit(false);
        txt = formatPhoneNumber(txt);
      } else {
        showSubmit && setShowSubmit(false);
      }
      setIsInvalid(false);
      setText(txt);
    },
  );

  const handleEnter = useMemoizedFn(
    async (e: React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();
      try {
        if (!showSubmit) throw new Error('invalid');
        await handleSubmit();
      } catch (err) {
        console.error(err.message);
        setStepTitle('Invalid email address of SMS number');
        setIsInvalid(true);
      }
    },
  );

  const handleSubmit = useMemoizedFn(async () => {
    setIsSubmitting(true);
    try {
      /* const txt = undefined; */
      console.debug('DEBUG: phoneOrEmail:', text);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <div className='!h-[100vh] application-cash'>
      <section className='!h-full layout-login flex-container pad'>
        <div className='login-container flex-container flex-v-center flex-fill'>
          <h1 className='step-title flex-static'>{stepTitle}</h1>
          <form className='w-full'>
            <div
              className={classnames('field fk-field-container', {
                'is-invalid': isInvalid,
              })}
            >
              <input
                type='text'
                id='phoneOrNumber'
                name='phoneOrNumber'
                aria-label='Email or Mobile Number'
                autoComplete='off'
                spellCheck='false'
                autoCapitalize='none'
                className='!rounded mb-[16px] text-center ember-text-field text-black'
                placeholder='Email or Mobile Number'
                onChange={handleChange}
                value={text}
              />
            </div>

            <div
              className={classnames('alias-submit fade-in immediate', {
                show: showSubmit,
              })}
            >
              <div className='cta submit-button-component submit-button-with-spinner'>
                <Button
                  htmlType='submit'
                  onSubmit={handleSubmit}
                  onClick={handleEnter}
                  loading={isSubmitting}
                  aria-label='Request Sign In Code'
                  className='button theme-button button--round theme-button'
                >
                  Request Sign In Code
                </Button>
                <div className='spinner-container'></div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
