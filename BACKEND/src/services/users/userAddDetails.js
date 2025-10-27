import { createConnection } from '../../config/dbConfig.js'

async function userAddDetails (idVendedor) {
  try {
    const connection = await createConnection()
    const [vendedor] = await connection.query(
      `SELECT idUser, firstname, lastname, gender, role, birthday, email, phone, createdAt, updatedAt
       FROM users
       WHERE idUser = ? AND role = 'S'`,
      [idVendedor]
    )
    return vendedor
  } catch (error) {
    console.error('Error al obtener vendedor por ID:', error.message)
    throw new Error('No se pudo obtener la información del vendedor.')
  }
}

export { userAddDetails }