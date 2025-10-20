import express from 'express'
import { globalMiddlewares } from './middlewares/globalMiddlewares.js'
import { dotenvConfig } from './config/dotenvConfig.js'
import { administradoresRouter } from './routes/admitradoresRouter.js'
import { vendedoresRouter } from './routes/VendedoresRouter.js'
import { clientesRouter } from './routes/clientesRouter.js'
import { authRouter } from './routes/authRouter.js'

const server = express()

//configs
dotenvConfig()

//middlewares
globalMiddlewares(server)

//routes
server.use ('/administradores', administradoresRouter)
server.use ('/vendedores', vendedoresRouter)
server.use ('/clientes', clientesRouter)
server.use ('/', authRouter)
server.use ('/motos', motosRouter)

//Rutas

server.get('/', (req, res) =>{
    return res.json('HOLA MUNDO...')
})

//Server on listen
const port = process.env.API_PORT || 3000
const domain = process.env.API_DOMAIN || 'localhost'
const protocol = process.env.API_PROTOCOL || 'http'

server.listen(3000, () =>{
    console.log(`Servidor ejecutandose en: ${protocol}://${domain}:${port}`)
})