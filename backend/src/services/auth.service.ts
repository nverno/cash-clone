import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { User, VerificationCode } from '@prisma/client';
import { CreateUserDto, LoginUserDto } from '@dtos';
import { HttpException } from '@exceptions';
import { DataStoredInToken, TokenData } from '@interfaces';
import { Debug, sendEmail, sendSMS, isEmpty, isSmsNumber } from '@utils'; // eslint-disable-line
import UserService from './users.service';
import prisma from '@/client';
import { SECRET_KEY, SMS_ENABLED, MAILER_ENABLED } from '@config'; // eslint-disable-line
import { isEmail } from 'class-validator';
const debug = Debug('auth'); // eslint-disable-line

export class AuthService {
  public users = prisma.user;
  public codes = prisma.verificationCode;
  public userService = new UserService();

  public async signup(userData: CreateUserDto): Promise<User> {
    return this.userService.createUser(userData);
  }

  // Generate login code for user
  public async generateLoginCode(
    userData: Pick<LoginUserDto, 'phoneOrEmail'>,
  ): Promise<void> {
    if (isEmpty(userData)) throw new HttpException(400, 'Missing login data');
    const { phoneOrEmail } = userData;
    const user: User = await this.userService.findUser({ phoneOrEmail });
    const code = String(Math.floor(Math.random() * 1e6)).padStart(6, '0');
    await this.codes.upsert({
      where: { userId: user.id },
      update: { code },
      create: { code, user: { connect: { id: user.id } } },
    });

    // Send code
    if (isEmail(phoneOrEmail)) {
      if (MAILER_ENABLED) {
        debug('skipping sending email');
        // await sendEmail({ email: phoneOrEmail, code });
      } else
        throw new HttpException(
          500,
          `Contact by email not currently supported`,
        );
    } else if (isSmsNumber(phoneOrEmail)) {
      if (SMS_ENABLED) {
        await sendSMS({ phoneNo: phoneOrEmail, code });
        debug('sent sms');
      } else
        throw new HttpException(500, 'Contact by SMS not currently supported');
    } else
      throw new HttpException(
        500,
        `Unrecognized phoneOrEmail: ${phoneOrEmail}`,
      );

    debug('generated login code:', code);
  }

  private async getUser(userData: LoginUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'Missing login data');
    const { phoneOrEmail } = userData;
    return this.userService.findUser({ phoneOrEmail });
  }

  // testing
  public async getLoginCode(userData: LoginUserDto): Promise<VerificationCode> {
    const user = await this.getUser(userData);
    return this.codes.findUnique({ where: { userId: user.id } });
  }

  // Check that given login code is valid for user
  public async checkLoginCode(userData: LoginUserDto): Promise<User> {
    if (isEmpty(userData) || !userData.code)
      throw new HttpException(400, 'Missing login data');
    const { phoneOrEmail, code } = userData;
    const user = await this.userService.findUser({ phoneOrEmail });
    if (user.loginCode.code !== code)
      throw new HttpException(400, 'Invalid login code');
    return user;
  }

  /** Users can login by email or phone number */
  public async login(
    userData: LoginUserDto,
  ): Promise<{ token: TokenData; user: User }> {
    if (isEmpty(userData) || !(userData.password || userData.code))
      throw new HttpException(400, 'Missing login data');

    const { phoneOrEmail, password, code } = userData;
    const user = await this.userService.findUser({ phoneOrEmail });

    if (password) {
      const isPasswordMatching: boolean = await compare(
        password,
        user.password,
      );
      if (!isPasswordMatching) throw new HttpException(400, 'Invalid password');
    } else if (!user?.loginCode?.code.length || user.loginCode.code !== code) {
      throw new HttpException(400, `Invalid login code: ${code}`);
    } else {
      // reset user login code
      await this.codes.update({
        where: { userId: user.id },
        data: { code: '' },
      });
    }
    delete user.loginCode;

    const tokenData = this.createToken(user);
    // const cookie = this.createCookie(tokenData);

    debug(`tokenData = ${tokenData}, user = ${JSON.stringify(user, null, 2)}`);
    return { token: tokenData, user };
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'Missing logout data');

    // XXX: should blacklist the JWT token
    const user: User = await this.userService.findUserById(userData.id);
    if (!user) throw new HttpException(400, 'User data not found');

    return user;
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: user.id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return {
      expiresIn,
      token: sign(dataStoredInToken, secretKey, { expiresIn }),
    };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
