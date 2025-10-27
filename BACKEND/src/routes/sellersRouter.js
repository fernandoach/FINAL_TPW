import { Router } from 'express'
import { createConnection } from '../config/dbConfig.js'
import { vendedorValidation } from '../models/joi/vendedorValidation.js'
import { sellersRegisterController } from '../controllers/sellersRegisterController.js'
import { sellerListarController } from '../controllers/sellersListarController.js'

const sellersRouter = Router()

// Registrar vendedor
sellersRouter.post('/', sellersRegisterController)

// TODO: MODULARIZAR
// listar y buscar vendedores
sellersRouter.get('/', sellerListarController)

// TODO: MODULARIZAR
// Ver detalles de un vendedor
sellersRouter.get('/:idVendedor', async (req, res) => {
  try {
    const idVendedor = req.params.idVendedor
    const connection = await createConnection()

    const [vendedor] = await connection.query(
      `SELECT idUser, firstname, lastname, gender, role, birthday, email, phone, createdAt, updatedAt
       FROM users
       WHERE idUser = ? AND role = 'V'`,
      [idVendedor]
    )

    if (vendedor.length === 0) {
      return res.status(404).json({ error: 'Vendedor no encontrado.' })
    }

    return res.json(vendedor[0])
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})

// TODO: MODULARIZAR
// Editar vendedor
sellersRouter.put('/:idVendedor', async (req, res) => {
  try {
    const idVendedor = req.params.idVendedor
    const { firstname, lastname, gender, role, birthday, email, phone } = req.body

    await vendedorValidation.validateAsync({
      firstname,
      lastname,
      gender,
      role,
      birthday,
      email,
      phone,
      password: 'Temporal123_',
      repassword: 'Temporal123_'
    })

    const connection = await createConnection()

    const [existing] = await connection.query(
      'SELECT * FROM users WHERE idUser = ?',
      [idVendedor]
    )

    if (existing.length === 0) {
      return res.status(404).json({ error: 'Vendedor no encontrado.' })
    }

    const updateQuery = `
      UPDATE users
      SET
        firstname = ?,
        lastname = ?,
        gender = ?,
        role = ?,
        birthday = ?,
        email = ?,
        phone = ?,
        updatedAt = NOW()
      WHERE idUser = ?;
    `

    await connection.query(updateQuery, [
      firstname,
      lastname,
      gender,
      role,
      birthday,
      email,
      phone,
      idVendedor
    ])

    return res.json(`Vendedor con ID ${idVendedor} actualizado correctamente.`)
  } catch (error) {
    if (error.details) {
      return res.status(400).json({ error: error.details[0].message })
    } else {
      return res.status(400).json({ error: error.message })
    }
  }
})

// TODO: MODULARIZAR
// Eliminar vendedor
sellersRouter.delete('/:idVendedor', async (req, res) => {
  try {
    const idVendedor = req.params.idVendedor
    const connection = await createConnection()

    const [existing] = await connection.query(
      'SELECT * FROM users WHERE idUser = ? AND role = ?',
      [idVendedor, 'V']
    )

    if (existing.length === 0) {
      return res.status(404).json({ error: 'Vendedor no encontrado.' })
    }

    const [result] = await connection.query(
      'DELETE FROM users WHERE idUser = ?',
      [idVendedor]
    )

    if (result.affectedRows > 0) {
      return res.json({ message: `Vendedor con ID ${idVendedor} eliminado correctamente.` })
    } else {
      return res.status(400).json({ error: 'No se pudo eliminar el vendedor.' })
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export { sellersRouter }
