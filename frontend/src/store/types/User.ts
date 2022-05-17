import { Card, BankAccount, UserSettings } from '.';

export interface PhoneNumber {
  phoneNumber: string;
  userId?: string;
}
export interface UserEmail {
  email: string;
  userId?: string;
}

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  username?: string;
  cashTag: string;
  balance: number;
  pinNumber?: string;
  email: UserEmail[];
  phoneNumber?: PhoneNumber[];
  card: Card;
  accounts?: BankAccount[];
  settings: UserSettings;
  roles?: string[];
}
