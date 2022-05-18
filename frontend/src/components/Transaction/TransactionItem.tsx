import classnames from 'classnames';
import { capitalize } from 'lodash-es';
import moment from 'moment';
import React, { FC } from 'react';
import { Transaction, useAppSelector } from '../../store';
import { formatBalance, formatName } from '../../utils';
import { UserAvatar } from '../User';

export interface TransactionItemProps {
  transaction: Transaction;
}

const FailedIcon = () => (
  <div
    title='alert icon'
    className='inline-svg inline-history-icon inline-history-icon--alert ember-view'
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='12'
      viewBox='0 0 16 12'
    >
      <g fill='#999' fillRule='evenodd'>
        <path d='M7.845 2.227L3.377 9.79c-.166.28-.205.21.126.21h8.994c.335 0 .293.073.126-.21L8.155 2.227c-.173-.292-.137-.292-.31 0zm-.86-.508c.56-.95 1.472-.946 2.03 0l4.47 7.562c.56.95.121 1.719-.988 1.719H3.503c-1.106 0-1.546-.773-.987-1.719L6.984 1.72z'></path>
        <path d='M7.5 8h1v1h-1zM7.5 4.5h1V7h-1z'></path>
      </g>
    </svg>
  </div>
);

const TransactionItem: FC<TransactionItemProps> = (props) => {
  const { transaction } = props;
  const user = useAppSelector((state) => state.user);
  if (!(transaction && user)) return null;

  const { sender, receiver, createdAt, value, status } = transaction;
  const other = sender.cashTag === user.cashTag ? receiver : sender;
  return (
    <div className='activity-list-content flex-container flex-h'>
      <UserAvatar user={other} fontSize={16} />
      <div className='title-and-subtitle'>
        <div className='title truncate-text'>{formatName(other)}</div>

        <div className='subtitle truncate-text'>
          {status === 'failed' && <FailedIcon />}
          {capitalize(status)}
        </div>
      </div>

      <div className='date'>{moment(createdAt).fromNow()}</div>
      <div className='action-amount'>
        <span
          className={classnames('amount', {
            'amount-treatment-strikethrough': status === 'failed',
          })}
        >
          {formatBalance({ balance: value })}
        </span>
      </div>
    </div>
  );
};

export default TransactionItem;
