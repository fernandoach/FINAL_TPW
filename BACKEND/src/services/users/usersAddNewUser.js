import { createConnection } from '../../config/dbConfig.js'

async function usersAddNewUser (firstname, lastname, gender, role, birthday, email, phone, hashedPassword) {
  try {
    const connection = await createConnection()

    const insertQuery = `
      INSERT INTO users
        (firstname, lastname, gender, role, birthday, email, phone, password, createdAt, updatedAt)
      VALUES 
        ('${firstname}', '${lastname}', '${gender}', '${role}', '${birthday}', '${email}', '${phone}', '${hashedPassword}', NOW(), NOW());
      `
    const registred = await connection.query(insertQuery)
    return registred
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY' && error.message.includes('email')) {
      throw new Error('El correo ya esta en uso')
    }
    if (error.code === 'ER_DUP_ENTRY' && error.message.includes('phone')) {
      throw new Error('El telefono ya esta en uso')
    }
    throw new Error(error)
  }
}

export { usersAddNewUser }
