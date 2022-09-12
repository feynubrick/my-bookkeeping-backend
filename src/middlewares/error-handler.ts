import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../helpers/errors';
import * as STATUS_CODE from '../helpers/constants/http-status-code';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode = STATUS_CODE.INTERNAL_SERVER_ERROR_500;
  if (err instanceof CustomError) {
    statusCode = err.statusCode;
  }

  res.status(statusCode).send(err.message);
}
