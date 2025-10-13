import { Router } from 'express'

const authRouter = Router()

authRouter.post('/login', (req, res) => {
   const { email, password } = req.body
   return res.json(`Iniciando sesión con: ${email}, ${password}`)
})

authRouter.post('/logout', (req, res) => {
   return res.json('Cerrando sesión del usuario...')
})

authRouter.put('/changePassword', (req, res) => {
   const { oldPassword, newPassword, confirmPassword } = req.body
   return res.json(`Cambiando contraseña: antigua(${oldPassword}), nueva(${newPassword}), confirmar(${confirmPassword})`)
})

export { authRouter }
