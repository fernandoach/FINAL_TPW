import { Router } from 'express'
import { createConnection } from '../config/dbConfig.js'
import { vendedorValidation } from '../validation/vendedorValidation.js'
import { hashPassword } from '../Utils/hashPassword.js' 

const vendedoresRouter = Router()

// Registrar vendedor
vendedoresRouter.post('/', async (req, res) => {
   try {
      const { firstname, lastname, gender, role, birthday, email, phone, password, repassword } = req.body
      await vendedorValidation.validateAsync({ firstname, lastname, gender, role, birthday, email, phone, password, repassword })

      const connection = await createConnection()

      const checkQuery = `
         SELECT email 
         FROM users
         WHERE email = '${email}';
      `
      const checkResult = await connection.query(checkQuery)
      const vendedores = checkResult[0]

      if (vendedores.length > 0) {
         return res.status(400).json('El correo ya se encuentra registrado.')
      }

      const hashedPassword = await hashPassword(password)

      const insertQuery = `
         INSERT INTO users (firstname, lastname, gender, role, birthday, email, phone, password, createdAt, updatedAt)
         VALUES ('${firstname}', '${lastname}', '${gender}', '${role}', '${birthday}', '${email}', '${phone}', '${hashedPassword}', NOW(), NOW());
      `
      await connection.query(insertQuery)

      return res.json(`Vendedor ${firstname} ${lastname} registrado correctamente.`)

   } catch (error) {
      if (error.details) {
         return res.status(400).json({ error: error.details[0].message })
      } else {
         return res.status(400).json(error.message)
      }
   }
})

vendedoresRouter.get('/', async (req, res) => {
  try {
    const connection = await createConnection()
    const search = req.query.search

    let query = `
      SELECT idUser, firstname, lastname, gender, role, birthday, email, phone, createdAt, updatedAt
      FROM users
      WHERE role = 'V'
    `
    if (search) {
      query += `
        AND (
          firstname LIKE '%${search}%' OR
          lastname LIKE '%${search}%' OR
          gender LIKE '%${search}%' OR
          role LIKE '%${search}%' OR
          birthday LIKE '%${search}%' OR
          email LIKE '%${search}%' OR
          phone LIKE '%${search}%'
        )
      `
    }

    const [vendedores] = await connection.query(query)

    if (vendedores.length === 0) {
      return res.status(404).json({ message: 'No se encontraron vendedores.' })
    }
    return res.json(vendedores)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
})



// Ver detalles de un vendedor
vendedoresRouter.get('/:idVendedor', async (req, res) => {
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


// Editar vendedor
vendedoresRouter.put('/:idVendedor', async (req, res) => {
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
      `SELECT * FROM users WHERE idUser = ?`,
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


// Eliminar vendedor
vendedoresRouter.delete('/:idVendedor', async (req, res) => {
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


export { vendedoresRouter }
