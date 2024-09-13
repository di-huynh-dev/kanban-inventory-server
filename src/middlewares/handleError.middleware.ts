import { NextFunction, Request, Response } from 'express'
import { ErrorResponse } from '../core/error.response'
import { StatusCodes } from 'http-status-codes'

const handleErrorMiddleware = (error: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
  const status = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
  return res.status(status).json({
    status: 'error',
    code: status,
    message: error.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined, // Chỉ hiển thị stack trace trong môi trường phát triển
  })
}

const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const error: any = new Error('Not Found')
  error.status = 404
  next(error)
}

export { handleErrorMiddleware, notFoundMiddleware }
