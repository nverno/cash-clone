import { Request, Response } from 'express';
import { User } from '@prisma/client';
import { CreateUserDto, LoginUserDto } from '@dtos';
import { RequestWithUser } from '@interfaces';
import { AuthService } from '@services';
import { catchAsync } from '@utils';

export class AuthController {
  public authService = new AuthService();

  public signUp = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const userData: CreateUserDto = req.body;
      const signUpUserData: User = await this.authService.signup(userData);
      res.status(201).json(signUpUserData);
    },
  );

  public logIn = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const userData: LoginUserDto = req.body;
      if (!(userData.password || userData.code)) {
        await this.authService.generateLoginCode(userData);
        res.status(200).json({ message: 'Sent login code' });
      } else {
        const { token, user } = await this.authService.login(userData);
        const cookie = this.authService.createCookie(token);
        res.setHeader('Set-Cookie', [cookie]);
        res.status(200).json({ token, user });
      }
    },
  );

  public logOut = catchAsync(
    async (req: RequestWithUser, res: Response): Promise<void> => {
      const userData: User = req.user;
      const logOutUserData: User = await this.authService.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json(logOutUserData);
    },
  );

  // testing
  public getLoginCode = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const { phoneOrEmail } = req.query;
      const code = await this.authService.getLoginCode({
        phoneOrEmail: String(phoneOrEmail),
      });
      res.status(200).json(code);
    },
  );
}

export default AuthController;
