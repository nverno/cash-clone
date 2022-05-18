import { Request } from 'express';

export interface TQuery<T> extends Omit<Request, 'query'> {
  query: T;
}
