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

/**
 * Phone numbers
 */
export const formatUserPhoneNumber = (user: User) => {
  const areaCode = user.phoneNumber.slice(0, 3);
  const num = user.phoneNumber.slice(3);
  return `(${areaCode}) ${num.slice(0, 3)}-${num.slice(3)}`;
};

// not worrying about country codes, eg. '+41'
// 12345678900 => [1, 234, 567, 8900]
// 2345678900  => ['', 234, 567, 8900]
// 12345       => [1, 234, 5, '']
export const splitPhoneNumber = (input: string): string[] => {
  const res = new Array<string>(4);
  if (input[0] === '1') {
    res[0] = input[0];
    input = input.slice(1);
  }

  for (let i = 1, b = 0, e = 3; i <= 3; i++, b += 3, e += i === 3 ? 4 : 3)
    res[i] = input.slice(b, e);

  return res;
};

// 12345678900 => 1 (234) 567-8900
// 123456789   => 1 (234) 567-89
// 23456       => (234) 56
export const formatPhoneNumber = (input: string): string => {
  const [code, area, a, b] = splitPhoneNumber(input);
  let res = code.length ? code + ' ' : '';
  if (area.length === 3) res += '(' + area + ')';
  if (a.length) res += ' ' + a;
  if (b.length) res += '-' + b;
  return res;
};
