const jwt = require('jsonwebtoken')
require('dotenv').config()

export const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    throw new Error('Access token is invalid or has expired.')
  }
}

export const verifyRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
  } catch (error) {
    throw new Error('Refresh token is invalid or has expired.')
  }
}
