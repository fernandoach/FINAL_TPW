import { json } from 'express'
import { urlencoded } from 'express'
import cors from 'cors'


function globalMiddlewares(server){
   server.use(json())
   server.use(urlencoded({ extended: true }))
   server.use(cors())

}


export { globalMiddlewares }