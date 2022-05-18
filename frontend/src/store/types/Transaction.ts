import { User } from './User';

export const TransactionStatus = {
  success: 'success',
  pending: 'pending',
  failed: 'failed',
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TransactionStatus =
  typeof TransactionStatus[keyof typeof TransactionStatus];

export interface Transaction {
  senderId: string; // cashtag of sender
  receiverId: string; // cashtag of receiver
  value: number;
  note?: string;
  id?: string;
  createdAt?: Date;
  status?: keyof typeof TransactionStatus;
  sender?: Pick<User, 'name' | 'cashTag'>;
  receiver?: Pick<User, 'name' | 'cashTag'>;
  refunded?: boolean;
}
