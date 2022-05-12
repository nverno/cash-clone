import { Account } from "./Account";

export interface User {
  firstName: string,
  lastName: string,
  username?: string,
  cashTag: string,
  email: string,
  phoneNumber: string,
  account: Account
}
