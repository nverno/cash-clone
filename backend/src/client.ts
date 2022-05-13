import { PrismaClient } from '@prisma/client';

export type RejectSettings = {
  findUnique: true;
  findFirst: true;
};

// Better to use single instance:
// https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#re-using-a-single-prismaclient-instance
const prisma = new PrismaClient({
  // https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#examples-3
  rejectOnNotFound: {
    findUnique: true,
    findFirst: true,
  },
});

export default prisma;
