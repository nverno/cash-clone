import prisma from '@/client';
import { CreateTransactionDto, SearchQueryDto } from '@/dtos';
import { HttpException } from '@/exceptions';
import { Debug, isEmpty, transactionInclude } from '@/utils';
import { Prisma, Transaction, TransactionStatus } from '@prisma/client';
const debug = Debug('transaction'); // eslint-disable-line

export class TransactionsService {
  public transactions = prisma.transaction;
  public users = prisma.user;

  private async checkData(data: CreateTransactionDto): Promise<void> {
    const { senderId, receiverId, value } = data;

    if (senderId === receiverId)
      throw new HttpException(400, "senderId cant't be the same as receiverId");

    // check sender has sufficient balance to cover transaction
    const sender = await this.users.findUnique({
      where: { cashTag: senderId },
    });
    if (sender.balance < value)
      throw new HttpException(400, `sender balance insufficient`);
  }

  public async createTransaction(data: CreateTransactionDto): Promise<Transaction> {
    if (isEmpty(data)) throw new HttpException(400, 'Missing transaction data');
    await this.checkData(data);
    const { senderId, receiverId, value, ...rest } = data;

    // update user balances
    await this.users.update({
      where: { cashTag: senderId },
      data: { balance: { decrement: value } },
    });

    await this.users.update({
      where: { cashTag: receiverId },
      data: { balance: { increment: value } },
    });

    return this.transactions.create({
      data: {
        ...rest,
        value,
        status: TransactionStatus.success,
        sender: { connect: { cashTag: senderId } },
        receiver: { connect: { cashTag: receiverId } },
      },
    });
  }

  private buildSearch(
    userId: string,
    params?: Partial<SearchQueryDto>,
  ): Prisma.TransactionWhereInput {
    if (isEmpty(params))
      return { OR: [{ senderId: userId }, { receiverId: userId }] };

    const { query, match: _ } = params;
    const num = parseFloat(query);

    if (num) {
      return {
        OR: [{ senderId: userId }, { receiverId: userId }],
        value: { lte: num },
      };
    } else {
      return {
        OR: [
          {
            senderId: userId,
            OR: [
              {
                note: { contains: query, mode: 'insensitive' },
              },
              {
                receiver: {
                  name: {
                    contains: query,
                    mode: 'insensitive',
                  },
                },
              },
            ],
          },
          {
            receiverId: userId,
            OR: [
              {
                note: { contains: query, mode: 'insensitive' },
              },
              {
                sender: {
                  name: {
                    contains: query,
                    mode: 'insensitive',
                  },
                },
              },
            ],
          },
        ],
      };
    }
  }

  // get transactions for current user
  public async getTransactions(
    userId: string,
    params?: Partial<SearchQueryDto>,
  ): Promise<Transaction[]> {
    const where = this.buildSearch(userId, params);
    const { take = undefined } = params;
    debug(JSON.stringify(where, null, 2));

    return this.transactions.findMany({
      where,
      take,
      orderBy: { createdAt: 'desc' },
      include: transactionInclude,
    });
  }
}

export default TransactionsService;
