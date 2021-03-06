import { capitalize } from 'lodash-es';
import { User, BankAccount, Card } from '../store';

export const formatName = (user: Partial<User>) => {
  return user?.name?.split(' ').map(capitalize).join(' ');
};

export const formatDollars = (n: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `$${formatter.format(n ?? 0)}`;
};

export const formatBalance = (user: Partial<User>) => {
  return formatDollars(user.balance);
};

export const formatCashTag = (user: Partial<User>) => {
  return `$${user.cashTag}`;
};

export const formatUsername = (user: Partial<User>) => {
  return user?.username ?? formatName(user);
};

export const formatInitial = (user: Partial<User>) => {
  return user?.name[0].toLocaleUpperCase();
};

export const formatCreditCard = (show: boolean, card?: Card) => {
  const parts = new Array<string>(4).fill('••••');
  if (!card) return parts;
  if (!show) parts[3] = card.cardNumber.slice(12);
  else {
    for (let i = 0; i < 4; i++) parts[i] = card.cardNumber.slice(4 * i, 4 * i + 4);
  }
  return parts;
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
  if (!user.phoneNumber?.length) return null;
  const phoneNumber = user.phoneNumber[0].phoneNumber;
  const areaCode = phoneNumber.slice(0, 3);
  const num = phoneNumber.slice(3);
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
  let res = code?.length ? code + ' ' : '';
  res += area.length === 3 ? '(' + area + ')' : area;
  if (a.length) res += ' ' + a;
  if (b.length) res += '-' + b;
  return res;
};
