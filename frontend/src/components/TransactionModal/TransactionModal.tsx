import { useMemoizedFn } from 'ahooks';
import { isEmpty } from 'lodash-es';
import React from 'react';
import { useAppSelector, useCreateTransactionMutation } from '../../store';
import { PaymentInput } from '../Payment';
import { LookupUserInput, UsersHash } from './LookupUserInput';

export interface TransactionModalProps {
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TransactionModal = React.forwardRef<
  HTMLDivElement,
  TransactionModalProps
>((props, ref) => {
  const { showModal } = props;
  const user = useAppSelector((state) => state.user);
  const [value, setValue] = React.useState(0);
  const [note, setNote] = React.useState('');
  const [selectedUsers, setSelectedUsers] = React.useState<UsersHash>({});
  const [receiverError, setReceiverError] = React.useState(false);
  const [valueError, setValueError] = React.useState(false);
  const [createTransaction] = useCreateTransactionMutation();

  const validate = useMemoizedFn((value, receivers): boolean => {
    let res = true;
    if (value === 0) {
      res = false;
      setValueError(true);
      setTimeout(() => setValueError(false), 1000);
    }

    if (isEmpty(receivers)) {
      res = false;
      setReceiverError(true);
    }
    return res;
  });

  const handleSubmit =
    (isRequest: boolean) => async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!validate(value, selectedUsers)) return;

      try {
        for (const receiver of Object.values(selectedUsers)) {
          await createTransaction({
            senderId: isRequest ? receiver.cashTag : user.cashTag,
            receiverId: isRequest ? user.cashTag : receiver.cashTag,
            value,
            note,
          }).unwrap();
        }
        showModal(false);
      } catch (err) {
        console.debug('DEBUG: transaction failure:', JSON.stringify(err, null, 2));
      }
    };

  if (!user) return null;
  return (
    <div ref={ref} className='content theme-white theme-bg pad'>
      <div onClick={() => showModal(false)} className='sqc-close-button ember-view'>
        <i className='sqc-close-button-icon'></i>
      </div>
      <div className='payment-initiator ember-view'>
        <div className='fixed-display-amount-wrapper'>
          <PaymentInput setValue={setValue} hasError={valueError} />
        </div>

        <LookupUserInput
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
          hasError={receiverError}
          setHasError={setReceiverError}
        />

        <div className='field static-label-field note-field ember-view'>
          <label>For:</label>
          <input
            type='text'
            placeholder='Dinner, Rent, etc.'
            className='ember-text-field ember-view'
            value={note}
            onChange={(e) => {
              e.preventDefault();
              setNote(e.target.value);
            }}
          />
        </div>

        <div className='cta button-group'>
          <button
            className='start-payment-button request'
            onClick={handleSubmit(true)}
          >
            Request
          </button>
          <button
            className='start-payment-button send'
            onClick={handleSubmit(false)}
          >
            Pay
          </button>
        </div>
      </div>
      <div className='spinner-container ember-view'></div>
    </div>
  );
});

export default TransactionModal;
