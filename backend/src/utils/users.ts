import { CreateUserDto } from '@/dtos';
import { HttpException } from '@/exceptions';
import { Prisma } from '@prisma/client';

// relations to include in user object (to logged in user)
export const userInclude: Prisma.UserInclude = {
  loginCode: {},
  settings: {},
  accounts: {},
  email: { select: { email: true } },
  phoneNumber: { select: { phoneNumber: true } },
  addresses: {},
  card: {},
};

// fields not to return
export const userIgnoredFields: Prisma.UserSelect = {
  password: true,
  pinNumber: true,
};

// fields to return in public user queries
export const userSelectPublic: Prisma.UserSelect = {
  id: true,
  cashTag: true,
  name: true,
  username: true,
  //  email: { select: { email: true } },
};

// XXX: allow people with same names
export const createCashTag = (data: Partial<CreateUserDto>): string => {
  if (!data.name) throw new HttpException(400, "Missing user's name");

  return `${data.name.replace(' ', '')}`;
};
