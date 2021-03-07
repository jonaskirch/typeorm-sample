import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';

export default async function (
  error: Error,
  req: Request,
  resp: Response,
  next: NextFunction,
) {
  if (error instanceof AppError) {
    return resp.status(error.statusCode).json({ error: error.message });
  }

  console.log(error.message);

  return resp.status(500).json({
    error: 'Internal server error',
  });
}
