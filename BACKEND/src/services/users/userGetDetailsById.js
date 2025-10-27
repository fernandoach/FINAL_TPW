import { createConnection } from '../../config/dbConfig.js'

async function userGetDetailsById (idUser) {
  try {
    const connection = await createConnection()
    const [vendedor] = await connection.query(
      `SELECT idUser, firstname, lastname, gender, role, birthday, email, phone, createdAt, updatedAt
       FROM users
       WHERE idUser = ?`,
      [idUser]
    )
    return vendedor
  } catch (error) {
    throw new Error(error)
  }
}

export { userGetDetailsById }
