// utils/ApiError.ts
export class ApiError extends Error {
    statusCode: number;
    isOperational: boolean;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = true;
  
      // Capture the stack trace (for debugging purposes)
      Error.captureStackTrace(this, this.constructor);
    }
  }
  