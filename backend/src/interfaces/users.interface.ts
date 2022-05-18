import { Prisma, User } from '@prisma/client';

export type FindUserOptions =
  | {
      select?: Prisma.UserSelect;
      include?: never;
    }
  | {
      select?: never;
      include?: Prisma.UserInclude;
    };

export type UserResult =
  | Partial<User>
  | Partial<
      User & {
        [k in keyof Prisma.UserInclude]?: any;
      }
    >;
