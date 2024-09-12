import { BadRequestError, UnAuthorizedError } from '../core/error.response'
import { getInfoData } from '../utils'
import { generateAccessToken, generateRefreshToken } from '../utils/generateToken'
import { verifyRefreshToken } from '../utils/verifyToken'

const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const saltRounds = 10

class AuthService {
  static async login(email: string, password: string, res: any) {
    const user = await userModel.findOne({ email })
    if (user) {
      const isMatchPassword = await bcrypt.compare(password, user.password)

      if (!isMatchPassword) {
        throw new UnAuthorizedError('Email/password không hợp lệ!')
      } else {
        const payload = {
          email: user.email,
          name: user.name,
        }
        const accessToken = generateAccessToken(payload)
        const refreshToken = generateRefreshToken(payload)

        // Lưu refreshToken vào database
        user.refreshToken = refreshToken
        await user.save()

        res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          sameSite: 'Strict',
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return {
          ...payload,
          accessToken,
          refreshToken,
        }
      }
    } else {
      throw new UnAuthorizedError('Email/password không hợp lệ!')
    }
  }

  static async register(name: string, email: string, password: string) {
    //Check existed email
    const isExisted = await userModel.findOne({ email })

    if (isExisted) {
      throw new BadRequestError('Error:Account already exists')
    }

    //Generate hash password
    const hashedPassword = bcrypt.hashSync(password, saltRounds)

    //Create new user
    const newUser = await userModel.create({ name, email, password: hashedPassword })

    //Return user
    return getInfoData({
      fields: ['_id', 'name', 'email', 'createdAt', 'updatedAt'],
      object: newUser,
    })
  }

  static async refreshToken(req: any) {
    const { refreshToken } = req.cookies
    if (!refreshToken) {
      throw new UnAuthorizedError('No refresh token provided')
    }

    const payload = verifyRefreshToken(refreshToken)

    const user = await userModel.findOne({ email: payload.email })

    if (!user || user.refreshToken !== refreshToken) {
      throw new UnAuthorizedError('Invalid refresh token')
    }

    const accessToken = generateAccessToken({
      email: user.email,
      name: user.name,
    })

    return {
      accessToken,
    }
  }
}

module.exports = AuthService
