import { StatusCodes } from 'http-status-codes'

class SuccessResponse {
  constructor(messagge: string, statusCode = StatusCodes.OK, metadata: {}) {
    this.messagge = messagge
    this.statusCode = statusCode
    this.metadata = metadata
  }
  public messagge: string
  public statusCode: StatusCodes
  public metadata: {}

  public send(res: any, header = {}) {
    return res.status(this.statusCode).json({
      messagge: this.messagge,
      statusCode: this.statusCode,
      metadata: this.metadata,
    })
  }
}

class CreatedResponse extends SuccessResponse {
  constructor(messagge: string, statusCode = StatusCodes.CREATED, metadata: {}) {
    super(messagge, statusCode, metadata)
  }
}

export { SuccessResponse, CreatedResponse }
