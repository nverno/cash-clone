import { hash } from 'bcrypt';
import { User } from '@prisma/client';
import { CreateUserDto, LoginUserDto } from '@dtos';
import { HttpException } from '@exceptions';
import { isEmpty } from '@utils';
import prisma from '@/client';
import { capitalize } from 'lodash';

export class UserService {
  public users = prisma.user;
  public emails = prisma.email;
  public phones = prisma.phoneNumber;

  public async checkNewEmail({ email }: Partial<CreateUserDto>): Promise<void> {
    if (!email) return;
    const res = await this.emails.findUnique({ where: { email } });
    if (res) {
      throw new HttpException(409, `You're email ${email} already exists`);
    }
  }

  public async checkNewPhone({
    phoneNumber,
  }: Partial<CreateUserDto>): Promise<void> {
    if (!phoneNumber) return;
    const res = await this.phones.findUnique({ where: { phoneNumber } });
    if (res) {
      throw new HttpException(
        409,
        `You're phone number ${phoneNumber} already exists`,
      );
    }
  }

  public async checkNewUserData(data: CreateUserDto): Promise<void> {
    await this.checkNewEmail(data);
    await this.checkNewPhone(data);
  }

  /** XXX: allow people with same names */
  private createCashTag(data: Partial<CreateUserDto>): string {
    if (!(data.firstName && data.lastName))
      throw new HttpException(400, 'Missing first/last name');

    return `$${capitalize(data.firstName)}${capitalize(data.lastName)}`;
  }

  /** Lookup user by email/phone number */
  public async findUser(data: Partial<LoginUserDto>): Promise<User> {
    if (isEmpty(data)) throw new HttpException(400, 'Missing login data');
    const { email, phoneNumber } = data;
    const user = email
      ? await this.emails.findUnique({
          where: { email },
          include: { user: {} },
        })
      : await this.phones.findUnique({
          where: { phoneNumber },
          include: { user: {} },
        });
    if (!user) throw new HttpException(409, `Email/phone number not found`);
    return user.user;
  }

  public async findAllUser(): Promise<User[]> {
    const allUser: User[] = await this.users.findMany();
    return allUser;
  }

  public async findUserById(userId: string): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, 'Missing userId');

    const findUser: User = await this.users.findUnique({
      where: { id: userId },
    });
    if (!findUser) throw new HttpException(409, 'User not found');

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'Missing user data');
    try {
      await this.checkNewUserData(userData);
    } catch {
      throw new HttpException(
        409,
        `An account with this email or phone number already exists`,
      );
    }
    const { email, phoneNumber, password, ...data } = userData;

    const hashedPassword = await hash(password, 10);
    return this.users.create({
      data: {
        ...data,
        password: hashedPassword,
        cashTag: this.createCashTag(data),
        email: { create: { email } },
        phoneNumber: { create: { phoneNumber } },
        settings: { create: {} },
      },
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
