import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/v1'
import { handleErrorMiddleware, notFoundMiddleware } from './middlewares/handleError.middleware'
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()

dotenv.config()
// middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//init db
require('./config/mongodb')

// routes
app.use('/v1', routes)

// Handle 404 Not Found errors
app.use(notFoundMiddleware)

// Handle all other errors
app.use(handleErrorMiddleware)

module.exports = app
