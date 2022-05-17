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
  faker.seed(seedDate.getTime());
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

const createUsers = async () => {
  return Promise.all(
    maptimes(NUM_USER, async () => {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const cashTag = `$${firstName}${lastName}`;
      return prisma.user.upsert({
        where: { cashTag },
        update: {},
        create: {
          firstName,
          lastName,
          cashTag,
          password: faker.internet.password(),
          balance: 1000 * Math.random(),
          pinNumber: faker.random.numeric(4, { allowLeadingZeros: true }),
          email: {
            create: maptimes(randomInt(1, NUM_EMAIL), () => ({
              email: faker.internet.email(),
            })),
          },
          settings: {},
          addresses: { create: generateAddress(NUM_ADDR) },
          phoneNumber: { create: generatePhoneNumber(NUM_PHONES) },
          card: { create: generateCard() },
          accounts: { create: generateAccount(NUM_ACCOUNT) },
        },
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
