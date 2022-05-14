import React, { FC } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';
import { DefaultProps } from '../../App';

export interface DashboardProps extends DefaultProps {}

export const Dashboard: FC<DashboardProps> = (props) => {
  return (
    <div className='account-new'>
      <div className='layout-account-new flex-container'>
        <Sidebar {...props} />
        <section className='yield-content flex-fill flex-v theme-bg theme-light-gray'>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
