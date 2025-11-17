import { Router } from 'express'
import { vendedorValidation } from '../models/joi/vendedorValidation.js'
import { usersAddNewUser } from '../services/users/usersAddNewUser.js'
import { hashPassword } from '../utils/hashPassword.js'

const usersRouter = Router()

usersRouter.get('/', (req, res) => {
  const search = req.query.search
  if (search) {
    return res.json(`Buscando usuario con '${search}' `)
  }
  return res.json('Listando todos los usuarios...')
})

usersRouter.post('/', async (req, res) => {
  const { firstname, lastname, gender, birthday, email, phone, password, repassword } = req.body

  try {
    await vendedorValidation.validateAsync({ firstname, lastname, gender, role: 'C', birthday, email, phone, password, repassword })

    const hashedPassword = await hashPassword(password)

    await usersAddNewUser(firstname, lastname, gender, 'C', birthday, email, phone, hashedPassword)

    return res.json({ message: `Usuario ${email} registrado con éxito...` })
  } catch (error) {
    console.log(error)
    if (error.details) {
      return res.status(400).json({ mensaje: error.details[0].message })
    }
    return res.status(500).json({ mensaje: 'Error al registrar el usuario', error: error.message })
  }
})

usersRouter.put('/:idUser', (req, res) => {
  const idUser = req.params.idUser
  const { firstname, lastname, gender, birthday, email, phone } = req.body

  return res.json(`Editando el usuario de id: ${idUser}, con los datos: ${firstname}, ${lastname}, ${gender}, ${birthday}, ${email}, ${phone}`)
})

usersRouter.delete('/:idUser', (req, res) => {
  const idUser = req.params.idUser
  return res.json(`Eliminando el usuario de id: ${idUser}`)
})

usersRouter.get('/:idUser', (req, res) => {
  const idUser = req.params.idUser

  return res.json(`Viendo detalles del usuario de id ${idUser}`)
})

export { usersRouter }
