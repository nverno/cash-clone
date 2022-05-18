import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { skipToken, useGetUserByCashTagQuery } from '../../store';
import PaymentHeader from './PaymentHeader';
import PaymentInput from './PaymentInput';
import PaymentNote from './PaymentNote';
import PaymentPageForm from './PaymentPageForm';
import PaymentFooter from './PaymentFooter';
import { useTheme } from '../../hooks';

export interface PaymentPageProps {}

export const PaymentPage: FC<PaymentPageProps> = () => {
  const { cashTag } = useParams<{ cashTag: string }>();
  const { data: user, isLoading } = useGetUserByCashTagQuery(
    !cashTag?.length ? skipToken : cashTag,
  );
  const [value, setValue] = React.useState(0);
  const [note, setNote] = React.useState('');
  const [instructions, setInstructions] = React.useState('');

  useTheme(['theme-white'], ['theme-light-gray', 'theme-green']);

  if (isLoading || !user) return null;
  return (
    <div className='full-height application-cash'>
      <div className='cookie-banner'></div>
      <div className='profile-page layout-payment flex-container flex-v full-height current-step-initiate-payment'>
        <PaymentHeader user={user} />

        <main className='profile-content-main flex-fill flex-container flex-v'>
          <div className='payment-flow-step profile-card-step flex-container flex-fill'>
            <div className='blocker-content-section'>
              <div className='amount-container flex-container '>
                <PaymentInput setValue={setValue} />

                <PaymentNote note={note} setNote={setNote} />
              </div>

              <div className='instructions-and-controls'>
                <p className='instructions text-red-400'>{instructions}</p>
              </div>

              <PaymentPageForm
                value={value}
                note={note}
                sendTo={user}
                setInstructions={setInstructions}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Positioned below the initial visible area */}
      <PaymentFooter />

      <div className='modal-manager'>
        <div className='modal-overlay '></div>
      </div>
    </div>
  );
};

export default PaymentPage;
