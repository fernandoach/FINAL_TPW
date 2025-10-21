import { Router } from 'express'
import { createConnection } from '../config/dbConfig.js'
import { loginValidation } from '../validations/loginValidation.js'
import bcrypt from 'bcrypt'

const authRouter = Router()

authRouter.post('/login', async (req, res) => {
   try {
      const { email, password } = req.body

      // validar datos
      await loginValidation.validateAsync({email, password})

      // crear conexion con db
      const connection = await createConnection()

      // validar que el correo exista y traer datos
      const query = `
         SELECT idUser, email, password 
         FROM users
         WHERE email = '${email}';
      `
      const queryResult = await connection.query(query)

      const users = queryResult[0]

      if(users.length === 0) {
         return res.status(400).json('Usuario y/o contrase;a invalidos')
      }

      //validar contrase;a... 
      const confirmPassword = await bcrypt.compare(password, users[0].password)

      if(!confirmPassword){
         return res.status(400).json('Usuario y/o contrase;a invalidos')
      }

      // generar token jwt
      const payload = {
         idUser: users[0].idUser
      }
      const secretKey = process.env.JWT_SECRET_KEY
      const options = {
         algorithm: 'HS256', 
         expiresIn: '2h'
      }

      const token = jwt.sign(payload, secretKey, options)

      // guardar cookie
      const cookieName = 'accessToken'
      const cookieOptions = {
         httpOnly: true,
         secure: process.env.ENVIRONMENT === 'production',
         sameSite: 'Strict',
         maxAge: 2 * 60 * 60 * 1000
      }
      
      res.cookie(cookieName, token, cookieOptions)

      return res.json(`Inició sesión con: ${email}`)
   } catch (error) {
      console.log(error)
      if(error.details){
         return res.status(400).json({error: error.details[0].message})
      }else{
         return res.status(400).json(error)
      }
   }
})

authRouter.post('/logout', (req, res) => {
   return res.json('Cerrando sesión del usuario...')
})

authRouter.put('/changePassword', (req, res) => {
   const { oldPassword, newPassword, confirmPassword } = req.body
   return res.json(`Cambiando contraseña: antigua(${oldPassword}), nueva(${newPassword}), confirmar(${confirmPassword})`)
})

export { authRouter }
