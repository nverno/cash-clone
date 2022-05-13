import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { HttpException } from '@exceptions';
import { DataStoredInToken, RequestWithUser } from '@interfaces';
import prisma from '@/client';

export const authMiddleware = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  try {
    const Authorization =
      req.cookies['Authorization'] ||
      (req.header('Authorization')
        ? req.header('Authorization').split('Bearer ')[1]
        : null);

    if (Authorization) {
      const secretKey: string = SECRET_KEY;
      const verificationResponse = (await verify(
        Authorization,
        secretKey,
      )) as DataStoredInToken;
      const userId = verificationResponse.id;

      const users = prisma.user;
      const findUser = await users.findUnique({
        where: { id: String(userId) },
      });

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default authMiddleware;
