import { capitalize } from 'lodash-es';
import { User, BankAccount, Card } from '../store';

export const formatName = (user: User) => {
  return `${capitalize(user.firstName)} ${capitalize(user.lastName)}`;
};

export const formatBalance = (user: User) => {
  return `$${user.balance === 0 ? '0.00' : user.balance}`;
};

export const formatUsername = (user: User) => {
  return user?.username ?? formatName(user);
};

export const formatPhoneNumber = (user: User) => {
  const areaCode = user.phoneNumber.slice(0, 3);
  const num = user.phoneNumber.slice(3);
  return `(${areaCode}) ${num.slice(0, 3)}-${num.slice(3)}`;
};

export const formatInitial = (user: User) => {
  return user.firstName[0].toLocaleUpperCase();
};

export const formatCreditCard = (card: Card) => {
  return card.cardNumber.slice(12);
};

export const formatRoutingNumber = (account: BankAccount) => {
  return `${account.routingNumber}`;
};

export const formatAccountNumber = (account: BankAccount) => {
  return `${account.accountNumber.slice(0, 2)} · · · · · ·`;
};
