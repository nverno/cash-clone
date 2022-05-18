import { CreateTransactionDto, SearchQueryDto } from '@/dtos';
import { TQuery } from '@/interfaces';
import { TransactionsService } from '@/services';
import { catchAsync, cleanQuery } from '@/utils';
import { Request, Response } from 'express';

export class TransactionsController {
  public transactionsService = new TransactionsService();

  public getTransactions = catchAsync(
    async (req: TQuery<SearchQueryDto>, res: Response): Promise<void> => {
      const { userId } = req.params;
      const { query, take } = req.query;
      res.status(200).json(
        await this.transactionsService.getTransactions(
          userId,
          cleanQuery({
            take: take ? Number(take) : undefined,
            query: query?.length ? query : undefined,
          }),
        ),
      );
    },
  );

  public createTransaction = catchAsync(
    async (req: Request, res: Response): Promise<void> => {
      const data: CreateTransactionDto = req.body;
      res.status(200).json(await this.transactionsService.createTransaction(data));
    },
  );
}

export default TransactionsController;
