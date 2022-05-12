import { capitalize } from "lodash-es";
import { User } from "../store";

export const formatName = (user: User) => {
  return `${capitalize(user.firstName)} ${capitalize(user.lastName)}`
};

export const formatBalance = (user: User) => {
  return `$${user.account.balance === 0 ? '0.00' : user.account.balance}`
}

export const formatUsername = (user: User) => {
  return user?.username ?? formatName(user);
}

export const formatPhoneNumber = (user: User) => {
  const areaCode = user.phoneNumber.slice(0, 3);
  const num = user.phoneNumber.slice(3);
  return `(${areaCode}) ${num.slice(0, 3)}-${num.slice(3)}`
}

export const formatInitial = (user: User) => {
  return user.firstName[0].toLocaleUpperCase();
}

export const formatCreditCard = (user: User) => {
  return user.account.cardNumber.slice(12);
}

export const formatRoutingNumber = (user: User) => {
  return `${user.account.routingNumber}`;
}

export const formatAccountNumber = (user: User) => {
  return `${user.account.accountNumber.slice(0, 2)} · · · · · ·`;
}
