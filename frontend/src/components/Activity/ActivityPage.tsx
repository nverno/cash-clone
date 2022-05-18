import React, { FC } from 'react';
import { DefaultProps } from '../../App';
import ActivityHeader from './ActivityHeader';
import { Transactions } from '../Transaction';
import { useSetShowModal } from '../Dashboard';

export interface ActivityPageProps extends DefaultProps {}

export const ActivityPage: FC<ActivityPageProps> = (props) => {
  const { setShowModal } = useSetShowModal();
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <section className='activity-history'>
      <ActivityHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        {...props}
      />

      <Transactions searchTerm={searchTerm} setShowModal={setShowModal} {...props} />
    </section>
  );
};

export default ActivityPage;
