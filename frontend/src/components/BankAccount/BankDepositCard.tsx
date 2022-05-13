import React, { FC } from 'react';
import { BankAccount } from '../../store';
import { formatAccountNumber, formatRoutingNumber } from '../../utils';

export interface BankDepositCardProps {
  account: BankAccount;
}

export const BankDepositCard: FC<BankDepositCardProps> = (props) => {
  const { account } = props;
  return (
    <div className='dda-numbers'>
      <span>
        <p className='dda-number'>{formatRoutingNumber(account)}</p>
        <h4 className='account-module-header'>Routing</h4>
      </span>
      <span>
        <p className='dda-number'>{formatAccountNumber(account)}</p>
        <h4 className='account-module-header'>Account</h4>
      </span>
    </div>
  );
};

export default BankDepositCard;
