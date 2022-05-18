import seedrandom from 'seedrandom';
import prisma from '../client';
import { faker } from '@faker-js/faker';
import Debug from 'debug';

// const { DEBUG = 'seed:*' } = process.env;
// eslint-disable-next-line
const debug = Debug('seed');
Debug.enable(process.env.DEBUG || 'seed');

const NUM_USER = 500;
const NUM_EMAIL = 2;
const NUM_ADDR = 3;
const NUM_PHONES = 2;
const NUM_ACCOUNT = 2;

const SEED = 1647142082296;
const useSeededRNG = true;
const seedDate = new Date(SEED);
const randomTimestampSeed = seedDate.toISOString();

let rng = seedrandom();
if (useSeededRNG) {
  rng = seedrandom(randomTimestampSeed);
  // setRandom(rng);
  faker.seed(SEED);
}

const randomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  return Math.floor(rng() * (Math.floor(max) - min + 1)) + min;
};

const maptimes = (n: number, fn) =>
  Array.from({ length: n }, (x, i) => i).map((i) => fn(i));

// address to connect to user
const generateAddress = (n: number) => {
  return maptimes(randomInt(0, n), () => {
    const state = faker.address.stateAbbr();
    return {
      address: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state,
      zip: faker.address.zipCodeByState(state),
      unit: Math.random() < 0.5 ? faker.address.buildingNumber() : undefined,
    };
  });
};

const generatePhoneNumber = (n: number) => {
  return maptimes(randomInt(0, n), () => ({
    phoneNumber: faker.phone.phoneNumber('1##########'),
  }));
};

const generateCard = () => ({
  cardNumber: faker.finance.creditCardNumber('################'),
  cardActivated: faker.datatype.boolean(),
});

const generateAccount = (n: number) => {
  return maptimes(randomInt(0, n), () => ({
    name: 'Bank of America', // faker.company.companyName(),
    accountNumber: faker.finance.account(),
    routingNumber: faker.finance.routingNumber(),
  }));
};

const generateUser = (user) => {
  const name = user.name ?? faker.name.findName();
  // const firstName = user.firstName ?? faker.name.firstName();
  // const lastName = user.lastName ?? faker.name.lastName();
  return {
    name,
    cashTag: user.cashTag ?? `${name.replace(' ', '')}`,
    password: user.password ?? faker.internet.password(),
    balance: user.balance ?? 1000 * Math.random(),
    pinNumber:
      user.pinNumber ?? faker.random.numeric(4, { allowLeadingZeros: true }),
    email: {
      create: user.email
        ? { email: user.email }
        : maptimes(randomInt(1, NUM_EMAIL), () => ({
            email: faker.internet.email(),
          })),
    },
    settings: user.settings ? undefined : {},
    addresses: user.addresses ? undefined : { create: generateAddress(NUM_ADDR) },
    phoneNumber: user.phoneNumber
      ? undefined
      : { create: generatePhoneNumber(NUM_PHONES) },
    card: user.card ? undefined : { create: generateCard() },
    accounts: user.accounts ? undefined : { create: generateAccount(NUM_ACCOUNT) },
  };
};

const createUsers = async () => {
  await prisma.user.upsert({
    where: { cashTag: 'CashAdmin' },
    update: {},
    create: generateUser({
      name: 'Cash Money',
      cashTag: 'CashMoney',
      email: 'cashappclone1@gmail.com',
      // asdf
      password: '$2b$10$mRT1ATkjY.tME6Lp1Itig.XANUQV3e3kWG8Uw7YMRiS9snv7jqZg2',
      pinNumber: '1234',
    }),
  });

  return Promise.all(
    maptimes(NUM_USER, async () => {
      const user = generateUser({});
      return prisma.user.upsert({
        where: { cashTag: user.cashTag },
        update: {},
        create: user,
      });
    }),
  );
};

async function main() {
  await createUsers();
  debug(`created ${NUM_USER} dummy users`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
