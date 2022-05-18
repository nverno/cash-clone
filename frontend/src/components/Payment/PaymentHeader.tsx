import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../store';
import Logo from '../../images/logo.svg?component';
import { formatCashTag, formatName } from '../../utils';
import { UserAvatar } from '../User';

export interface PaymentHeaderProps {
  user: User;
}

const PaymentHeader: FC<PaymentHeaderProps> = (props) => {
  const { user } = props;
  if (!user) return null;
  return (
    <header className='payment-header'>
      <div className='profile-banner'>
        <div className='profile-nav flex-container flex-h'>
          <Link
            to='/'
            rel='noopener noreferrer'
            // target='_blank'
            className='logo-container flex-container flex-h'
          >
            <div className='logo inline-svg fill-white'>
              <Logo />
            </div>
            <span className='logo-text'>Cash App</span>
          </Link>

          <a
            href='https://itunes.apple.com/us/app/square-cash/id711923939?pt=302818&amp;mt=8&amp;ct=cash-web'
            rel='noopener noreferrer'
            target='_blank'
            className='about-button'
          >
            {' '}
            Get the App
          </a>
        </div>
        <div className='profile-nav-spacer'></div>
      </div>
      <div className='customer-profile-simple'>
        <UserAvatar user={user} fontSize={47} />

        <div className='profile-name'>
          <h3 className='display-name display-name-with-icon'>
            <span className='name '>{formatName(user)}</span>
          </h3>
          <p className='cashtag'>Pay {formatCashTag(user)}</p>
        </div>
      </div>
    </header>
  );
};

export default PaymentHeader;
