import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { DefaultProps } from '../../App';
import { formatCashTag, formatInitial, formatName } from '../../utils';

export interface SidebarProfileProps extends DefaultProps {}

const SidebarProfile: FC<SidebarProfileProps> = (props) => {
  const { user } = props;
  if (!user) return null;
  return (
    <div className='customer-info'>
      <div className='customer-profile-simple'>
        <i style={{ backgroundColor: '#FB60C4' }} className='customer-avatar '>
          <div className='initial-placeholder'>
            {user?.name && formatInitial(user)}
          </div>
        </i>
        <h3 className='display-name display-name-with-icon'>
          <span className='name truncate-text'>{`${formatName(user)}`}</span>
        </h3>
        <h4 className='cashtag'>
          <Link to={`/${formatCashTag(user)}`}>{formatCashTag(user)}</Link>
        </h4>
      </div>
    </div>
  );
};

export default SidebarProfile;
