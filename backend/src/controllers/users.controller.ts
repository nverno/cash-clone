import { Request, Response } from 'express';
import { User } from '@prisma/client';
import { CreateUserDto } from '@dtos';
import { UserService } from '@services';
import { catchAsync } from '@utils';

export class UsersController {
  public userService = new UserService();

  public getUsers = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      res.status(200).json(await this.userService.findAllUser());
    },
  );

  public getUserById = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const userId = Number(req.params.id);
      const user: User = await this.userService.findUserById(userId);
      res.status(200).json(user);
    },
  );

  public createUser = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const userData: CreateUserDto = req.body;
      const createUserData: User = await this.userService.createUser(userData);
      res.status(201).json(createUserData);
    },
  );

  public updateUser = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const userId = Number(req.params.id);
      const userData: CreateUserDto = req.body;
      const updateUserData: User = await this.userService.updateUser(
        userId,
        userData,
      );
      res.status(200).json(updateUserData);
    },
  );

  public deleteUser = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const userId = Number(req.params.id);
      const deleteUserData: User = await this.userService.deleteUser(userId);
      res.status(200).json(deleteUserData);
    },
  );
}

export default UsersController;
