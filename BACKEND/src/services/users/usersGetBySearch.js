import { createConnection } from '../../config/dbConfig.js'

async function usersGetBySearch (search) {
  try {
    const connection = await createConnection()

    let query = `
    SELECT idUser, firstname, lastname, gender, role, birthday, email, phone, createdAt, updatedAt
    FROM users
    WHERE role = 'S'
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
    return vendedores
  } catch (error) {
    throw new Error(error)
  }
}

export { usersGetBySearch }
