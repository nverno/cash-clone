import classnames from 'classnames';
import React, { FC } from 'react';
import { useOutsideClick } from '../../hooks';
import { useAppSelector, useGetTransactionsQuery } from '../../store';
import TransactionList from './TransactionList';
import TransactionItemModal from './TransactionItemModal';
import NoTransactions from './NoTransactions';

export interface TransactionsProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: string;
}

export const Transactions: FC<TransactionsProps> = (props) => {
  const { setShowModal, searchTerm } = props;
  const [selected, setSelected] = React.useState(-1);
  const $modal = React.useRef(null);
  const userId = useAppSelector((state) => state.auth?.userId);
  const { data: allTransactions, isLoading } = useGetTransactionsQuery({ userId });

  useOutsideClick($modal, () => setSelected(-1));

  const handleClick = (idx: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setSelected(idx);
  };

  if (isLoading) return null;

  const term = searchTerm.toLocaleLowerCase();
  const num = parseInt(searchTerm);

  const transactions = !searchTerm?.length
    ? allTransactions
    : allTransactions.filter((x) => {
        if (num) return x.value <= num;
        return (
          x.note.toLocaleLowerCase().indexOf(term) !== -1 ||
          x.receiver.name.toLocaleLowerCase().indexOf(term) !== -1 ||
          x.sender.name.toLocaleLowerCase().indexOf(term) !== -1
        );
      });

  return (
    <div className='vertical-scroll-container activity-list-container flex-fill ember-view'>
      <div className='activity-list-sections ember-view'>
        {!allTransactions?.length ? (
          <NoTransactions setShowModal={setShowModal} />
        ) : (
          <TransactionList transactions={transactions} handleClick={handleClick} />
        )}
      </div>

      <div className='modal-manager ember-view'>
        <div
          className={classnames('modal-overlay', { show: selected !== -1 })}
        ></div>
        {selected !== -1 && (
          <TransactionItemModal ref={$modal} transaction={transactions[selected]} />
        )}
      </div>
    </div>
  );
};

export default Transactions;
