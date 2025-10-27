import { createConnection } from '../../config/dbConfig.js'

async function usersGetCredentialsByEmail (email) {
  try {
    const connection = await createConnection()

    const query = `
      SELECT idUser, email, password 
      FROM users
      WHERE email = '${email}';
    `
    const queryResult = await connection.query(query)
    return queryResult
  } catch (error) {
    throw new Error(error)
  }
}

export { usersGetCredentialsByEmail }
