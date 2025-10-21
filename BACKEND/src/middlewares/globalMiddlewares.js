import { json } from 'express'
import { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

function globalMiddlewares(server){
   server.use(json())
   server.use(urlencoded({ extended: true }))
   server.use(cors())
   server.use(cookieParser())
}


export { globalMiddlewares }