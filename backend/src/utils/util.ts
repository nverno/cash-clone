import { NextFunction, Request, Response } from 'express';

/**
 * This value is Empty Check
 *
 * @function isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} True & false
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (
    value !== null &&
    typeof value === 'object' &&
    !Object.keys(value).length
  ) {
    return true;
  } else {
    return false;
  }
};

export const catchAsync = (fn) =>
  function (req: Request, res: Response, next: NextFunction) {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };

export const uuidRe = (param: string) => `:${param}([A-Fa-f0-9-]{36})`;

export const idsToArray = (ids: { id: true }[], fn = Number): any[] =>
  ids.map(({ id }) => fn(id));

export const idsToHash = (
  ids: { id: string | number }[],
): { [_: string | number]: true } =>
  ids.reduce((acc, x) => ({ ...acc, [x.id]: true }), {});
