import { Request, Response, NextFunction } from 'express';
import { getIsoString } from '../helpers/time';

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const currentTime = getIsoString(new Date());
  const method = req.method;
  const path = req.path;
  const query = JSON.stringify(req.query);
  const body = JSON.stringify(req.body);
  console.log(
    `[${currentTime}] ${method} ${path} || query: ${query} || body: ${body}`
  );
  next();
}
