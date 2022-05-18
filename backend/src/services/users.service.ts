import { hash } from 'bcrypt';
import { Email, PhoneNumber, Prisma, User } from '@prisma/client';
import { CreateUserDto, LoginUserDto, SearchQueryDto } from '@dtos';
import { HttpException } from '@exceptions';
import {
  createCashTag,
  cleanSms,
  isEmpty,
  isSmsNumber,
  generateCard,
  generateAccount,
  generateAddress,
  cleanQuery,
  userInclude,
  userSelectPublic,
} from '@utils';
import prisma from '@/client';
import { isEmail } from 'class-validator';
import { FindUserOptions, UserResult } from '@interfaces';

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
      throw new HttpException(409, `Phone number ${phoneNumber} already exists`);
  }

  public async checkNewUserData(data: CreateUserDto): Promise<void> {
    if (data.phoneNumber) data.phoneNumber = cleanSms(data.phoneNumber);
    await this.checkNewEmail(data);
    await this.checkNewPhone(data);
  }

  /** Lookup user by email, phone number, or cashtag */
  public async lookupUser(
    data: Partial<LoginUserDto>,
    opts: FindUserOptions,
  ): Promise<UserResult> {
    if (isEmpty(data)) throw new HttpException(400, 'Missing user identifier');
    const { identifier } = data;

    if (isEmail(identifier)) {
      const res = await this.emails.findUnique({
        where: { email: identifier },
        include: { user: opts },
      });
      return res.user;
    }

    if (isSmsNumber(identifier)) {
      const res = await this.phones.findUnique({
        where: { phoneNumber: identifier },
        include: { user: opts },
      });
      return res.user;
    }

    return this.users.findUnique(
      cleanQuery({
        where: { cashTag: identifier },
        select: opts.select,
        include: opts.include,
      }) as Prisma.UserFindUniqueArgs,
    );
  }

  /** Lookup user by email/phone number/cashtag */
  public async findUser(
    data: Partial<LoginUserDto>,
    include = true,
  ): Promise<UserResult> {
    const opts: FindUserOptions = include
      ? { include: userInclude }
      : { select: userSelectPublic };
    return this.lookupUser(data, opts) as unknown as User;
  }

  public async findAllUser(include = false): Promise<UserResult[]> {
    return include
      ? this.users.findMany({ include: userInclude })
      : this.users.findMany({ select: userSelectPublic });
  }

  // create search clause based on matching type + search field
  private buildSearch(field: string, params: SearchQueryDto) {
    let { take = 5, match = 'prefix', query } = params;
    take = Number(take);
    const isNested = ['email', 'phoneNumber'].indexOf(field) !== -1;

    if (match === 'relevance') {
      const orderBy = {
        _relevance: {
          fields: field === 'cashTag' ? ['cashTag', 'name'] : [field],
          search: query,
          sort: 'desc',
        },
      };

      return isNested
        ? {
            take,
            include: { user: { select: userSelectPublic } },
            orderBy,
          }
        : {
            take,
            select: { ...userSelectPublic, email: { select: { email: true } } },
            orderBy,
          };
    }

    const searchKey =
      match === 'contains'
        ? 'contains'
        : match === 'prefix'
        ? 'startsWith'
        : 'endsWith';
    return cleanQuery({
      take,
      where: { [field]: { [searchKey]: query, mode: 'insensitive' } },
      include: isNested ? { user: { select: userSelectPublic } } : undefined,
      select: field === 'cashTag' ? userSelectPublic : undefined,
    });
  }

  private convertToUserResult(
    arr: { [k: string]: any; user: Partial<User> }[],
  ): UserResult[] {
    const users = {};
    arr.forEach(({ user, email, phoneNumber }) => {
      if (!(user.id in users))
        users[user.id] = { ...user, email: [], phoneNumber: [] };
      const cur = users[user.id];
      email && cur.email.push({ email });
      phoneNumber && cur.phoneNumber.push({ phoneNumber });
    });
    return Object.values(users);
  }

  // Search for users
  public async findUsers(params?: SearchQueryDto): Promise<UserResult[]> {
    if (isEmpty(params)) return this.findAllUser();
    const { query } = params;

    if (/^[0-9]+$/.test(query)) {
      const res = await this.phones.findMany(
        this.buildSearch('phoneNumber', params) as any,
      );
      return this.convertToUserResult(res as any);
    }

    let notEmail = false;
    if ((notEmail = query[0] === '$')) params.query = params.query.slice(1);

    const res = await this.users.findMany(
      this.buildSearch('cashTag', params) as any,
    );
    if (notEmail || res?.length) return res;

    const emails = await this.emails.findMany(
      this.buildSearch('email', params) as any,
    );
    return this.convertToUserResult(emails as any);
  }

  // XXX: remove and use cashTag as Id in db?
  public async findUserById(userId: string): Promise<UserResult> {
    if (isEmpty(userId)) throw new HttpException(400, 'Missing userId');

    try {
      const findUser: User = await this.users.findUnique({
        where: { id: userId },
        include: userInclude,
      });
      return findUser;
    } catch (_err) {
      throw new HttpException(409, 'User not found');
    }
  }

  public async findUserByCashTag(cashTag: string): Promise<UserResult> {
    if (isEmpty(cashTag)) throw new HttpException(400, 'Missing cashTag');
    try {
      const user: Partial<User> = await this.users.findUnique({
        where: { cashTag },
        select: userSelectPublic,
      });
      return user;
    } catch (_err) {
      throw new HttpException(409, 'User not found');
    }
  }

  public async createUser(userData: CreateUserDto): Promise<UserResult> {
    if (isEmpty(userData)) throw new HttpException(400, 'Missing user data');
    await this.checkNewUserData(userData);
    const { email, phoneNumber, password, ...data } = userData;

    const hashedPassword = await hash(password, 10);
    return this.users.create({
      data: {
        ...data,
        password: hashedPassword,
        cashTag: createCashTag(data),
        email: { create: { email } },
        phoneNumber: { create: { phoneNumber: cleanSms(phoneNumber) } },
        settings: { create: {} },
        card: { create: generateCard() },
        accounts: { create: generateAccount() },
        addresses: { create: generateAddress() },
      },
      include: userInclude,
    });
  }

  public async updateUser(userId: string, userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'Missing user data');

    const findUser: User = await this.users.findUnique({
      where: { id: userId },
    });
    if (!findUser) throw new HttpException(409, 'User not found');

    const hashedPassword = userData.password
      ? await hash(userData.password, 10)
      : undefined;
    return this.users.update({
      where: { id: userId },
      data: { ...userData, password: hashedPassword },
      include: userInclude,
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
