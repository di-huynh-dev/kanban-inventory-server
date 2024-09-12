import { NextFunction, Request, Response } from 'express'

const handleErrorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500
  return res.status(status).json({
    status: 'error',
    code: status,
    stack: error.stack,
    message: error.message || 'Internal Server Error',
  })
}

const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const error: any = new Error('Not Found')
  error.status = 404
  next(error)
}

export { handleErrorMiddleware, notFoundMiddleware }
