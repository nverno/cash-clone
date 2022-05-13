import { BankAccount } from './BankAccount';

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  username?: string;
  pinNumber?: string;
  cashTag: string;
  email: string;
  phoneNumber: string;
  balance: number;
  cardNumber: string;
  cardActivated?: boolean;
  accounts?: BankAccount[];
}
