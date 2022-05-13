import React, { FC } from 'react';
import { formatBalance } from '../../utils';
import { DefaultProps } from '../../App';
import MyCard from './MyCard';
import BankDepositCard from '../BankAccount/BankDepositCard';

export interface MyCashProps extends DefaultProps {}

export const MyCash: FC<MyCashProps> = (props) => {
  const { user } = props;
  return (
    <section className='flex-container flex-fill layout-mycash'>
      <div className='balance-content'>
        <h1 className='balance-amount'>{formatBalance(user)}</h1>
        <h2 className='balance-subtitle'>Cash Card</h2>

        <MyCard {...props} />

        <p className='physical-card-upsell'>
          Get a card in the mail using the mobile&nbsp;app
        </p>
        <button className='button button--white--with-border cash-out disabled'>
          Cash Out
        </button>
        <button className='button button--white--with-border add-cash hide'>
          Add Cash
        </button>

        <div className='dda-display clickable'>
          <h3 className='account-module-header'>Direct Deposit</h3>
          {user.accounts?.map((account) => (
            <BankDepositCard account={account} />
          ))}
        </div>
      </div>

      <div className='limits-overview'>
        <h3 className='account-module-header'>CASH LIMITS</h3>
        <div className='limit-types flex-container'>
          <div className='limit-type-section flex-v-center'>
            <h4 className='limit-type-title'>Send</h4>
            <p className='limit-type-text'>$2,500 per Week</p>
          </div>
          <div className='limit-type-section flex-v-center'>
            <h4 className='limit-type-title'>Receive</h4>
            <p className='limit-type-text'>Unlimited</p>
          </div>
          <div className='limit-type-section flex-v-center'>
            <h4 className='limit-type-title'>Add Cash</h4>
            <p className='limit-type-text'>$2,500 per Week</p>
          </div>
          <div className='limit-type-section flex-v-center'>
            <h4 className='limit-type-title'>Cash Out</h4>
            <p className='limit-type-text'>$25,000 per Week</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCash;
