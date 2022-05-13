import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { User } from '@prisma/client';
import { SECRET_KEY } from '@config';
import { CreateUserDto, LoginUserDto } from '@dtos';
import { HttpException } from '@exceptions';
import { DataStoredInToken, TokenData } from '@interfaces';
import { isEmpty } from '@utils';
import UserService from './users.service';

export class AuthService {
  public userService = new UserService();

  public async signup(userData: CreateUserDto): Promise<User> {
    return this.userService.createUser(userData);
  }

  /** Users can login by email or phone number */
  public async login(
    userData: LoginUserDto,
  ): Promise<{ cookie: string; user: User }> {
    if (isEmpty(userData)) throw new HttpException(400, 'Missing login data');
    const { email, phoneNumber, password } = userData;

    const user: User = await this.userService.findUser({ email, phoneNumber });
    const isPasswordMatching: boolean = await compare(password, user.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Invalid password');

    const tokenData = this.createToken(user);
    const cookie = this.createCookie(tokenData);

    return { cookie, user };
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'Missing logout data');

    const user: User = await this.userService.findUser(userData);
    if (!user) throw new HttpException(409, 'User data not found');

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
