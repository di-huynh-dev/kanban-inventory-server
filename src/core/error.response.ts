import { StatusCodes } from 'http-status-codes'

class ErrorResponse extends Error {
  constructor(message: string, statusCode = StatusCodes.INTERNAL_SERVER_ERROR) {
    super(message)
    this.statusCode = statusCode
  }

  public statusCode: StatusCodes
}

class BadRequestError extends ErrorResponse {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST)
  }
}

class UnAuthorizedError extends ErrorResponse {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED)
  }
}

class NotFoundError extends ErrorResponse {
  constructor(message: string) {
    super(message, StatusCodes.NOT_FOUND)
  }
}

class ForbiddenError extends ErrorResponse {
  constructor(message: string) {
    super(message, StatusCodes.FORBIDDEN)
  }
}

export { ErrorResponse, BadRequestError, UnAuthorizedError, NotFoundError, ForbiddenError }
