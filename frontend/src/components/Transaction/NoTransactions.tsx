import React, { FC } from 'react';

export interface NoTransactionsProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoTransactions: FC<NoTransactionsProps> = (props) => {
  const { setShowModal } = props;

  return (
    <div className='activity-no-results flex-container flex-v-center'>
      <div className='inline-svg ember-view'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 84 84'>
          <path d='M80 42c0 20.949-17.051 38-38 38S4 62.949 4 42 21.051 4 42 4s38 17.051 38 38zm4 0C84 18.842 65.158 0 42 0S0 18.842 0 42s18.842 42 42 42 42-18.842 42-42z'></path>
          <path d='M40 22V46.865l1.075.56 16 8.348 1.85-3.546-16-8.348L44 45.652V22h-4z'></path>
        </svg>
      </div>
      <h3 className='title'>No Activity Yet</h3>
      <a onClick={() => setShowModal(true)} className='initiate-payment'>
        Create a Payment
      </a>
    </div>
  );
};

export default NoTransactions;
