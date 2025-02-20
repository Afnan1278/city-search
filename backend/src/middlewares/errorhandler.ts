// middlewares/errorHandler.ts
import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../utils/ApiError';

export const errorHandler = (
  err: ApiError | Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
): any => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err); 
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error. Please try again later.',
  });
};
