import { Request, Response } from 'express';
import { User } from '@prisma/client';
import { CreateUserDto, SearchQueryDto } from '@dtos';
import { UserService } from '@services';
import { catchAsync } from '@utils';
import { TQuery } from '@/interfaces';

export class UsersController {
  public userService = new UserService();

  public getUsers = catchAsync(
    async (req: TQuery<SearchQueryDto>, res: Response): Promise<void> => {
      const { match, query } = req.query;
      if (match === 'exact') {
        res
          .status(200)
          .json(
            await this.userService.findUser(
              { identifier: query },
              /* include= */ false,
            ),
          );
      } else {
        res.status(200).json(await this.userService.findUsers(req.query));
      }
    },
  );

  public getUserById = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const userId = String(req.params.id);
      const user = await this.userService.findUserById(userId);
      res.status(200).json(user);
    },
  );

  public getUserByCashTag = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const cashTag = String(req.params.cashTag);
      const user = await this.userService.findUserByCashTag(cashTag);
      res.status(200).json(user);
    },
  );

  public createUser = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const userData: CreateUserDto = req.body;
      const createUserData = await this.userService.createUser(userData);
      res.status(201).json(createUserData);
    },
  );

  public updateUser = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const userId = String(req.params.id);
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
      const userId = String(req.params.id);
      const deleteUserData: User = await this.userService.deleteUser(userId);
      res.status(200).json(deleteUserData);
    },
  );
}

export default UsersController;
