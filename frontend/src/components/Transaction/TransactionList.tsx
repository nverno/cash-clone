import React, { FC } from 'react';
import { Transaction } from '../../store';
import TransactionItem from './TransactionItem';

export interface TransactionListProps {
  transactions: Transaction[];
  handleClick: (n: number) => (e: React.MouseEvent) => void;
}

const TransactionList: FC<TransactionListProps> = (props) => {
  const { transactions, handleClick } = props;

  return (
    <div className='activity-list-component ember-view'>
      <h2 className='account-module-header activity-title activity-column'>
        {transactions?.length ? `${transactions.length} ` : ''}Transactions
      </h2>
      <ul className='activity-list'>
        {transactions?.length === 0 ? (
          <div className='empty-message-section activity-column'>
            <p className='empty-message'>No results found.</p>
          </div>
        ) : (
          transactions.map((tx, idx) => (
            <li
              key={tx.id}
              className='activity-list-item ember-view'
              onClick={handleClick(idx)}
            >
              <TransactionItem key={tx.id} transaction={tx} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
