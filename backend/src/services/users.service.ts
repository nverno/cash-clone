import { hash } from 'bcrypt';
import {
  BankAccount,
  Card,
  Email,
  MailingAddress,
  PhoneNumber,
  Prisma,
  User,
  VerificationCode,
} from '@prisma/client';
import { CreateUserDto, LoginUserDto } from '@dtos';
import { HttpException } from '@exceptions';
import { cleanSms, isEmpty, isSmsNumber } from '@utils';
import prisma from '@/client';
import { capitalize } from 'lodash';
import { isEmail } from 'class-validator';
import faker from '@faker-js/faker';

const generateCard = (card?: Partial<Card>) => ({
  cardNumber:
    card?.cardNumber ?? faker.finance.creditCardNumber('################'),
  cardActivated: card?.cardActivated ?? true, // faker.datatype.boolean(),
});

const generateAccount = (acct?: Partial<BankAccount>) => {
  return {
    name: acct?.name ?? 'Bank of America', // faker.company.companyName(),
    accountNumber: acct?.accountNumber ?? faker.finance.account(),
    routingNumber: acct?.routingNumber ?? faker.finance.routingNumber(),
  };
};

const generateAddress = (addr?: MailingAddress) => {
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

export class UserService {
  public users = prisma.user;
  public emails = prisma.email;
  public phones = prisma.phoneNumber;

  public async checkNewEmail({ email }: Partial<CreateUserDto>): Promise<void> {
    if (!email) return;
    let res: Email;
    try {
      res = await this.emails.findUnique({ where: { email } });
    } catch {}
    if (res) throw new HttpException(409, `Email ${email} already exists`);
  }

  public async checkNewPhone({
    phoneNumber,
  }: Partial<CreateUserDto>): Promise<void> {
    if (!phoneNumber) return;
    let res: PhoneNumber;
    try {
      res = await this.phones.findUnique({ where: { phoneNumber } });
    } catch {}
    if (res)
      throw new HttpException(
        409,
        `Phone number ${phoneNumber} already exists`,
      );
  }

  public async checkNewUserData(data: CreateUserDto): Promise<void> {
    if (data.phoneNumber) data.phoneNumber = cleanSms(data.phoneNumber);
    await this.checkNewEmail(data);
    await this.checkNewPhone(data);
  }

  /** XXX: allow people with same names */
  private createCashTag(data: Partial<CreateUserDto>): string {
    if (!(data.firstName && data.lastName))
      throw new HttpException(400, 'Missing first/last name');

    return `$${capitalize(data.firstName)}${capitalize(data.lastName)}`;
  }

  // relations to include in user object
  private userInclude: Prisma.UserInclude = {
    loginCode: {},
    settings: {},
    accounts: {},
    email: {},
    phoneNumber: {},
    addresses: {},
    card: {},
  };

  /** Lookup user by email/phone number */
  public async findUser(data: Partial<LoginUserDto>): Promise<
    User & {
      loginCode: VerificationCode;
    }
  > {
    if (isEmpty(data)) throw new HttpException(400, 'Missing login data');
    const { phoneOrEmail } = data;
    const user: any = isEmail(phoneOrEmail)
      ? await this.emails.findUnique({
          where: { email: phoneOrEmail },
          include: { user: { include: this.userInclude } },
        })
      : isSmsNumber(phoneOrEmail)
      ? await this.phones.findUnique({
          where: { phoneNumber: cleanSms(phoneOrEmail) },
          include: { user: { include: this.userInclude } },
        })
      : undefined;
    if (!user) throw new HttpException(409, `Email/phone number not found`);
    return user.user;
  }

  public async findAllUser(): Promise<User[]> {
    const allUser: User[] = await this.users.findMany({
      include: this.userInclude,
    });
    return allUser;
  }

  public async findUserById(userId: string): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, 'Missing userId');

    try {
      const findUser: User = await this.users.findUnique({
        where: { id: userId },
        include: this.userInclude,
      });
      return findUser;
    } catch (_err) {
      throw new HttpException(409, 'User not found');
    }
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'Missing user data');
    // try {
    await this.checkNewUserData(userData);
    // } catch {
    //   throw new HttpException(
    //     409,
    //     'An account with this email or phone number already exists',
    //   );
    // }

    const { email, phoneNumber, password, ...data } = userData;
    const hashedPassword = await hash(password, 10);
    return this.users.create({
      data: {
        ...data,
        password: hashedPassword,
        cashTag: this.createCashTag(data),
        email: { create: { email } },
        phoneNumber: { create: { phoneNumber: cleanSms(phoneNumber) } },
        settings: { create: {} },
        card: { create: generateCard() },
        accounts: { create: generateAccount() },
        addresses: { create: generateAddress() },
      },
      include: this.userInclude,
    });
  }

  public async updateUser(
    userId: string,
    userData: CreateUserDto,
  ): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'Missing user data');

    const findUser: User = await this.users.findUnique({
      where: { id: userId },
    });
    if (!findUser) throw new HttpException(409, 'User not found');

    const hashedPassword = await hash(userData.password, 10);
    return this.users.update({
      where: { id: userId },
      data: { ...userData, password: hashedPassword },
      include: this.userInclude,
    });
  }

  public async deleteUser(userId: string): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, 'Missing user Id');

    const findUser: User = await this.users.findUnique({
      where: { id: userId },
    });
    if (!findUser) throw new HttpException(409, 'User not found');

    return this.users.delete({ where: { id: userId } });
  }
}

export default UserService;
