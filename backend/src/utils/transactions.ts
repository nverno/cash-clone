import { Prisma } from '@prisma/client';

export const transactionInclude: Prisma.TransactionInclude = {
  sender: {
    select: { name: true, cashTag: true },
  },
  receiver: {
    select: { name: true, cashTag: true },
  },
};
