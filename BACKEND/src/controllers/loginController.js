import { loginValidation } from '../models/joi/loginValidation.js'
import bcrypt from 'bcrypt'
import { usersGetCredentialsByEmail } from '../services/users/usersGetCredentialsByEmail.js'
import { generateJWT } from '../utils/generateJWT.js'
import { cookieName, cookieOptions } from '../config/cookieConfig.js'

async function loginController (req, res) {
  try {
    const { email, password } = req.body

    // validar datos
    await loginValidation.validateAsync({ email, password })

    // validar que el correo exista y traer datos
    const queryResult = await usersGetCredentialsByEmail(email)
    const users = queryResult[0]
    if (users.length === 0) {
      return res.status(400).json({ message: 'Usuario y/o contraseña invalidos' })
    }

    // validar contrase;a...
    const confirmPassword = await bcrypt.compare(password, users[0].password)
    if (!confirmPassword) {
      return res.status(400).json({ message: 'Usuario y/o contraseña invalidos' })
    }

    // generar token jwt
    const token = generateJWT(users[0].idUser)

    // guardar cookie
    res.cookie(cookieName, token, cookieOptions)

    return res.json({ message: 'Inició sesión con exito' })
  } catch (error) {
    return res.status(400).json({ message: 'Usuario y/o contraseña invalidos' })
  }
};

export { loginController }
