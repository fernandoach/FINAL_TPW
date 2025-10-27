import { usersAddNewUser } from '../services/users/usersAddNewUser.js'
import { usersGetCredentialsByEmail } from '../services/users/usersGetCredentialsByEmail.js'
import { hashPassword } from '../utils/hashPassword.js'
import { vendedorValidation } from '../models/joi/vendedorValidation.js'

async function sellersRegisterController (req, res) {
  try {
    const { firstname, lastname, gender, birthday, email, phone, password, repassword } = req.body
    await vendedorValidation.validateAsync({ firstname, lastname, gender, role: 'S', birthday, email, phone, password, repassword })

    // validar que el correo no exista
    const checkResult = await usersGetCredentialsByEmail(email)
    const vendedores = checkResult[0]
    if (vendedores.length > 0) {
      return res.status(400).json('El correo ya se encuentra registrado.')
    }

    // crear registro
    const hashedPassword = await hashPassword(password)
    await usersAddNewUser(firstname, lastname, gender, 'S', birthday, email, phone, hashedPassword)

    return res.json({ message: `Usuario ${email} registrado con éxito...` })
  } catch (error) {
    if (error.details) {
      return res.status(400).json({ error: error.details[0].message })
    } else {
      return res.status(400).json({ error: error.message })
    }
  }
}

export { sellersRegisterController }
