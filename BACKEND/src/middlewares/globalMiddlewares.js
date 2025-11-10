import { json, urlencoded } from 'express'

import cors from 'cors'
import cookieParser from 'cookie-parser'

function globalMiddlewares (server) {
  server.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }))
  server.use(json())
  server.use(urlencoded({ extended: true }))
  server.use(cookieParser())
}

export { globalMiddlewares }
