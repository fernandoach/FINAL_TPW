import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_DATABASE || 'tiendamotos',
  waitForConnections: true,
  connectionLimit: process.env.DB_CONNECTION_LIMIT || 10, // n de con maximas
  queueLimit: 0
})

async function createConnection () {
  try {
    const connection = await pool.getConnection()
    return connection
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      throw new Error('La base de datos no responde.')
    }
    throw error
  }
}

export { createConnection }
