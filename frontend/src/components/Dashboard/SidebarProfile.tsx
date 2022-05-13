import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { DefaultProps } from '../../App';

export interface SidebarProfileProps extends DefaultProps {}

const SidebarProfile: FC<SidebarProfileProps> = (props) => {
  const { user } = props;
  return (
    <div className='customer-info'>
      <div className='customer-profile-simple'>
        <i style={{ backgroundColor: '#FB60C4' }} className='customer-avatar '>
          <div className='initial-placeholder'>
            {user.firstName[0].toLocaleUpperCase()}
          </div>
        </i>
        <h3 className='display-name display-name-with-icon'>
          <span className='name truncate-text'>{`${user.firstName} ${user.lastName}`}</span>
        </h3>
        <h4 className='cashtag'>
          <Link
            onClick={() => console.debug('DEBUG: todo:')}
            to='#' // {user.cashTag}
          >
            {user.cashTag}
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default SidebarProfile;
