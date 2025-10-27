import { Router } from 'express'
import { loginController } from '../controllers/loginController.js'

const authRouter = Router()

authRouter.post('/login', loginController)

authRouter.post('/logout', (req, res) => {
  return res.json('Cerrando sesión del usuario...')
})

authRouter.put('/changePassword', (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.body
  return res.json(`Cambiando contraseña: antigua(${oldPassword}), nueva(${newPassword}), confirmar(${confirmPassword})`)
})

export { authRouter }
