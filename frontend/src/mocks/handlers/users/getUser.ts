import { User } from '../../../store';

export const fakeUser: User = {
  name: 'Fake User',
  username: 'Fake User',
  cashTag: '$FakeUser',
  phoneNumber: ['1234567890'],
  email: ['fake.user@gggmail.com'],
  balance: 0,
  card: {
    cardNumber: '0000000000000000',
    cardActivated: false,
  },
  accounts: [
    {
      name: 'Bank of America',
      accountNumber: '12345678',
      routingNumber: '123456789',
    },
  ],
  settings: {
    allowPay: true,
    privacy: 'all',
  },
};
