import { createConnection } from '../config/dbConfig.js'
import { vendedorValidation } from '../models/joi/vendedorValidation.js'

export const sellersEditarController = async (req, res) => {
  try {
    const idVendedor = req.params.idVendedor
    const { firstname, lastname, gender, role, birthday, email, phone } = req.body

    // Validar datos con Joi
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

    // Verificar si el vendedor existe
    const [existing] = await connection.query(
      'SELECT * FROM users WHERE idUser = ? AND role = "V"',
      [idVendedor]
    )

    if (existing.length === 0) {
      return res.status(404).json({ error: 'Vendedor no encontrado.' })
    }

    // Actualizar datos del vendedor
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

    return res.json({ message: `Vendedor con ID ${idVendedor} actualizado correctamente.` })
  } catch (error) {
    if (error.details) {
      return res.status(400).json({ error: error.details[0].message })
    }
    return res.status(500).json({ error: error.message })
  }
}