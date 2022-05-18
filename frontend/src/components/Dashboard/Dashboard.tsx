import React, { FC } from 'react';
import Sidebar from './Sidebar';
import { Outlet, useOutletContext } from 'react-router';
import { DefaultProps } from '../../App';
import { TransactionModal } from '../TransactionModal';

export interface DashboardProps extends DefaultProps {}

export type ContextType = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>> | null;
};

export const useSetShowModal = () => useOutletContext<ContextType>();

export const Dashboard: FC<DashboardProps> = (props) => {
  const [showTransactionModal, setShowTransactionModal] = React.useState(false);
  React.useLayoutEffect(() => {
    document.body.classList.add('theme-light-gray');
    document.body.classList.remove('theme-green');
  }, []);

  return (
    <div className='full-height application-cash'>
      {showTransactionModal && (
        <div className='full-screen-payment-sheet show'>
          <TransactionModal showModal={setShowTransactionModal} />
        </div>
      )}
      <div className='account-new'>
        <div className='layout-account-new flex-container'>
          <Sidebar showModal={setShowTransactionModal} {...props} />
          <section className='yield-content flex-fill flex-v theme-bg theme-light-gray'>
            <Outlet context={{ setShowModal: setShowTransactionModal }} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
