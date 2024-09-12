const jwt = require('jsonwebtoken')
require('dotenv').config()

export const generateAccessToken = (payload: any) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  })
}

export const generateRefreshToken = (payload: any) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
  })
}
