import { Router } from 'express';
import { Routes } from '@interfaces';
import { validationMiddleware } from '@middlewares';
import { UsersController, TransactionsController } from '@/controllers';
import { SearchQueryDto } from '@/dtos/search.dto';

export class SearchRoute implements Routes {
  public path = '/search';
  public router = Router();
  public usersController = new UsersController();
  public transactionsController = new TransactionsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}/users`,
      validationMiddleware(SearchQueryDto, 'query'),
      this.usersController.getUsers,
    );

    // this.router.get(
    //   `${this.path}/transactions`,
    //   validationMiddleware(SearchQueryDto, 'query'),
    //   this.transactionsController.getTransactions,
    // );
  }
}

export default SearchRoute;
