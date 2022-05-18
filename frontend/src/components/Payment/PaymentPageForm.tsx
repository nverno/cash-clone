import { useMemoizedFn } from 'ahooks';
import classnames from 'classnames';
import React, { FC } from 'react';
import { useOutsideClick } from '../../hooks';
import {
  Transaction,
  useAppSelector,
  useCreateTransactionMutation,
  useLogoutMutation,
  User,
} from '../../store';
import { formatCashTag, formatName } from '../../utils';
import { UserAvatar } from '../User';

export interface PaymentPageFormProps {
  value: number;
  note: string;
  sendTo: User;
  setInstructions: React.Dispatch<React.SetStateAction<string>>;
}

const PaymentPageForm: FC<PaymentPageFormProps> = (props) => {
  const { value, note, sendTo, setInstructions } = props;
  const [show, setShow] = React.useState(false);
  const $menu = React.useRef(null);
  useOutsideClick($menu, () => setShow(false));

  const loggedIn = useAppSelector((state) => state.auth.token);
  const user = useAppSelector((state) => state.user);
  const [createTransaction] = useCreateTransactionMutation();
  const [logout] = useLogoutMutation();

  const sendTransaction = useMemoizedFn(async (data: Transaction) => {
    try {
      await createTransaction(data).unwrap();
    } catch (err) {
      console.error('transaction failure:', JSON.stringify(err, null, 2));
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.cashTag === sendTo.cashTag) {
      setInstructions("You can't pay yourself!");
      return;
    }
    try {
      await sendTransaction({
        senderId: user.cashTag,
        receiverId: sendTo.cashTag,
        value,
        note,
      });
    } catch (err) {
      console.error('transaction failure:', JSON.stringify(err, null, 2));
    }
  };

  if (!(loggedIn && sendTo)) return null;
  return (
    <form className='form blocker-form ' onSubmit={handleSubmit}>
      <div className='current-customer-panel'>
        <div
          ref={$menu}
          className={classnames(
            'current-customer-menu theme-white theme-bg flex-container flex-v',
            {
              show,
            },
          )}
        >
          <div className='flex-fill'>
            <div className='sqc-close-button'>
              <i className='sqc-close-button-icon'></i>
            </div>
            <UserAvatar user={user} fontSize={27} />

            <h3 className='display-name'>{formatName(user)}</h3>
            <p className='card theme-color'> </p>
          </div>
          <nav>
            <a
              className='logout'
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              Sign Out
            </a>
          </nav>
        </div>
        <div>
          <div
            className='field display-current-customer button--round flex-container flex-h'
            onClick={() => setShow(true)}
          >
            <UserAvatar user={user} fontSize={14} />
            <p className='from-field truncate-text'>From {formatCashTag(user)}</p>
          </div>
        </div>
      </div>

      <div className='cta submit-button-component submit-button-with-spinner'>
        <button
          type='submit'
          aria-label='pay'
          className='button theme-button button--round'
        >
          pay
        </button>
        <div className='spinner-container'></div>
      </div>
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
        href='#'
        className='show-qr-action'
      >
        Already have Cash App? <strong>Pay in the app</strong>
      </a>
    </form>
  );
};

export default PaymentPageForm;
