import faker from '@faker-js/faker';
import { BankAccount, Card, MailingAddress } from '@prisma/client';

export const generateCard = (card?: Partial<Card>) => ({
  cardNumber: card?.cardNumber ?? faker.finance.creditCardNumber('################'),
  cardActivated: card?.cardActivated ?? true, // faker.datatype.boolean(),
});

export const generateAccount = (acct?: Partial<BankAccount>) => {
  return {
    name: acct?.name ?? 'Bank of America', // faker.company.companyName(),
    accountNumber: acct?.accountNumber ?? faker.finance.account(),
    routingNumber: acct?.routingNumber ?? faker.finance.routingNumber(),
  };
};

export const generateAddress = (addr?: MailingAddress) => {
  if (addr) return addr;
  const state = faker.address.stateAbbr();
  return {
    address: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state,
    zip: faker.address.zipCodeByState(state),
    unit: Math.random() < 0.5 ? faker.address.buildingNumber() : undefined,
  };
};
