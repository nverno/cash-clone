import { Card, BankAccount, UserSettings } from '.';

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  username?: string;
  cashTag: string;
  email: string[];
  pinNumber?: string;
  phoneNumber?: string[];
  balance: number;
  card: Card;
  accounts?: BankAccount[];
  settings: UserSettings;
}
