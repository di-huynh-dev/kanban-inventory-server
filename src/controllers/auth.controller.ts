import { NextFunction, Request, Response } from 'express'
import { CreatedResponse, SuccessResponse } from '../core/success.response'
const authService = require('../services/auth.service')

class AuthController {
  login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body
      new SuccessResponse('Login successfully!', 200, await authService.login(email, password, res)).send(res)
    } catch (error) {
      next(error)
    }
  }

  loginWithGoogle = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name, email } = req.body
      new SuccessResponse('Login successfully!', 200, await authService.loginWithGoogle(name, email, res)).send(res)
    } catch (error) {
      next(error)
    }
  }

  register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name, email, password } = req.body
      new CreatedResponse('Register successfully!', 201, await authService.register(name, email, password)).send(res)
    } catch (error) {
      next(error)
    }
  }

  refresh = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      new CreatedResponse('Refresh token successfully!', 201, await authService.refreshToken(req)).send(res)
    } catch (error) {
      next(error)
    }
  }
}

export default new AuthController()
