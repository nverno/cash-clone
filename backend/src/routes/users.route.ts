import { Router } from 'express';
import { UsersController } from '@controllers';
import { CreateUserDto } from '@dtos';
import { Routes } from '@interfaces';
import { validationMiddleware } from '@middlewares';
import { uuidRe } from '@utils';

const userId = uuidRe('id');

export class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUsers);
    this.router.get(`${this.path}/${userId}`, this.usersController.getUserById);

    this.router.post(
      `${this.path}`,
      validationMiddleware(CreateUserDto, 'body'),
      this.usersController.createUser,
    );

    this.router.put(
      `${this.path}/${userId}`,
      validationMiddleware(CreateUserDto, 'body', true),
      this.usersController.updateUser,
    );

    this.router.delete(
      `${this.path}/${userId}`,
      this.usersController.deleteUser,
    );
  }
}

export default UsersRoute;
