import { Router } from 'express';
import { AuthController } from '@controllers';
import { CreateUserDto } from '@dtos';
import { Routes } from '@interfaces';
import { authMiddleware, validationMiddleware } from '@middlewares';

export class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}signup`,
      validationMiddleware(CreateUserDto, 'body'),
      this.authController.signUp,
    );
    this.router.post(
      `${this.path}login`,
      validationMiddleware(CreateUserDto, 'body'),
      this.authController.logIn,
    );
    this.router.post(
      `${this.path}logout`,
      authMiddleware,
      this.authController.logOut,
    );
  }
}

export default AuthRoute;
