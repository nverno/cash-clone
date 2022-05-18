import { Router } from 'express';
import { TransactionsController } from '@controllers';
import { CreateTransactionDto } from '@dtos';
import { Routes } from '@interfaces';
import { validationMiddleware } from '@middlewares';
import { uuidRe } from '@utils';

const userId = uuidRe('userId');

export class TransactionsRoute implements Routes {
  public path = '/transactions';
  public router = Router();
  public transactionsController = new TransactionsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // FIXME: get user from session
    this.router.get(
      `${this.path}/${userId}`,
      this.transactionsController.getTransactions,
    );

    this.router.post(
      `${this.path}`,
      validationMiddleware(CreateTransactionDto, 'body'),
      this.transactionsController.createTransaction,
    );
  }
}

export default TransactionsRoute;
