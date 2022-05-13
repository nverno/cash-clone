import React, { FC } from 'react';
import { DefaultProps } from '../../App';
import ActivityHeader from './ActivityHeader';

export interface ActivityProps extends DefaultProps {}

export const Activity: FC<ActivityProps> = (props) => {
  return (
    <section className='activity-history'>
      <ActivityHeader {...props} />
    </section>
  );
};

export default Activity;
