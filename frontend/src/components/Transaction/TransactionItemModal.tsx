import React from 'react';
import moment from 'moment';
import { Transaction, useAppSelector } from '../../store';
import { formatCashTag, formatDollars, formatName } from '../../utils';
import { UserAvatar } from '../User';

export interface TransactionItemModalProps {
  transaction: Transaction;
}

const Refunded = () => (
  <p className='receipt-status '>
    <div
      className='inline-svg receipt-status-icon error ember-view'
      style={{
        backgroundColor: 'rgb(248, 64, 73)',
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path fill='#FFF' d='M7 11h10v2H7z' fillRule='evenodd'></path>
      </svg>
    </div>
    For your protection, this payment was refunded
  </p>
);

const ReceiptTable = ({
  value,
  id,
  receiver,
  sender,
}: Partial<Transaction>) => (
  <dl className='receipt-table'>
    <dt className='receipt-label'>Amount</dt>
    <dd className='receipt-value'>{formatDollars(value)}</dd>
    <dt className='receipt-label'>Identifier</dt>
    <dd className='receipt-value'>#{id}</dd>
    <dt className='receipt-label'>To</dt>
    <dd className='receipt-value'>{formatName(receiver)}</dd>
    <dt className='receipt-label'>From</dt>
    <dd className='receipt-value'>{formatName(sender)}</dd>
  </dl>
);

const TransactionItemModal = React.forwardRef<
  HTMLDivElement,
  TransactionItemModalProps
>((props, ref) => {
  const { transaction } = props;
  const user = useAppSelector((state) => state.user);
  if (!(transaction && user)) return null;

  const { sender, receiver, note, createdAt, value, refunded } = transaction;
  const other = sender.cashTag === user.cashTag ? receiver : sender;
  const dir = other.cashTag === sender.cashTag ? 'from' : 'to';
  return (
    <div className='modal-scroller fade-in show actionable ember-view'>
      <div className='modal-window flex-container flex-v activity-receipt-modal small ember-view'>
        <div ref={ref} className='modal-window-content content'>
          <div className='receipt-card ember-view'>
            <div className='receipt-card-wrapper'>
              <div className='customer-profile-simple ember-view'>
                <UserAvatar user={other} fontSize={30} />

                <div className='profile-name'>
                  <h3 className='display-name display-name-with-icon ember-view'>
                    <span className='name '>{formatName(other)}</span>
                  </h3>
                  <div className='cashtag'>
                    Payment {dir} {formatCashTag(other)}
                  </div>
                </div>
              </div>

              <div className='receipt-amount'>
                <h1 className='display-amount amount-treatment-faded'>
                  {formatDollars(value)}
                </h1>
                <ul className='detail-view-content'>
                  <li className='detail-view-content-item'>
                    {note && `For ${note}`}
                  </li>
                  <li className='detail-view-content-item'>
                    {moment(createdAt).fromNow()}
                  </li>
                </ul>
              </div>

              {refunded && <Refunded />}

              <ReceiptTable {...transaction} />
            </div>
          </div>
        </div>

        <div className='modal-dialog-action-bar empty '></div>
        <div className='spinner-container ember-view'></div>
      </div>

      <div className='sqc-close-button ember-view'>
        <i className='sqc-close-button-icon'></i>
      </div>
    </div>
  );
});

export default TransactionItemModal;
