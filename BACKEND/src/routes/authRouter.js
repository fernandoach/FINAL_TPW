import { Router } from 'express'
import { createConnection } from '../config/dbConfig.js'
import { loginValidation } from '../validations/loginValidation.js'

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
         SELECT email, password 
         FROM users
         WHERE email = '${email}';
      `
      const queryResult = await connection.query(query)

      const users = queryResult[0]

      if(users.length === 0) {
         return res.status(400).json('Usuario y/o contrase;a invalidos')
      }

      //validar contrase;a... 
      
      return res.json(`Iniciando sesión con: ${email}, ${password}`)
   } catch (error) {
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
