import express from 'express'
import { globalMiddlewares } from './middlewares/globalMiddlewares.js'
import { dotenvConfig } from './config/dotenvConfig.js'
import { administradoresRouter } from './routes/admitradoresRouter.js'
import { usersRouter } from './routes/clientesRouter.js'
import { authRouter } from './routes/authRouter.js'
import motosRouter from './routes/motosRouter.js'
import { sellersRouter } from './routes/sellersRouter.js'
import { vendedoresRouter } from './routes/vendedoresRouter.js'


const server = express()

// configs
dotenvConfig()

// middlewares
globalMiddlewares(server)

// routes
server.use('/', authRouter)
server.use('/sellers', sellersRouter)
server.use('/admins', administradoresRouter)
server.use('/users', usersRouter)
server.use('/motorcycles', motosRouter)
server.use('/vendedores', vendedoresRouter)

// Rutas

server.get('/', (req, res) => {
  return res.json('HOLA MUNDO...')
})

// Server on listen
const port = process.env.API_PORT || 3000
const domain = process.env.API_DOMAIN || 'localhost'
const protocol = process.env.API_PROTOCOL || 'http'

server.listen(3000, () => {
  console.log(`Servidor ejecutandose en: ${protocol}://${domain}:${port}`)
})
