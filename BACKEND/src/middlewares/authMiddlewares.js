import jwt from 'jsonwebtoken'
import { createConnection } from '../config/dbConfig.js'

const authMiddlewareVeterinaryAdmin = async (req, res, next) => {
  // obtener cookie
  const cookie = req.cookies.accessToken
  if (!cookie) {
    return res.status(400).json('Sin autorización')
  }

  const secretKey = process.env.JWT_SECRET_KEY
  const options = {
    algorithm: 'HS256',
    expiresIn: '2h'
  }
  const verifyToken = jwt.verify(cookie, secretKey, options)
  // validar id usuario y rol
  const idUser = verifyToken.idUser
  // obtener usuario ()
  const query = `
    SELECT idUser, role
    FROM users
    WHERE idUser = ${idUser};
  `
  const connection = await createConnection()

  const queryResult = await connection.query(query)
  const userData = queryResult[0][0]
  const validateRole = ['V', 'A'].includes(userData.role)
  if (!validateRole) {
    return res.status(400).json('Sin autorización')
  }
  next()
}

const authMiddlewareAdmin = async (req, res, next) => {
  // obtener cookie
  const cookie = req.cookies.accessToken
  if (!cookie) {
    return res.status(400).json('Sin autorización')
  }

  const secretKey = process.env.JWT_SECRET_KEY
  const options = {
    algorithm: 'HS256',
    expiresIn: '2h'
  }
  const verifyToken = jwt.verify(cookie, secretKey, options)
  // validar id usuario y rol
  const idUser = verifyToken.idUser
  // obtener usuario ()
  const query = `
    SELECT idUser, role
    FROM users
    WHERE idUser = ${idUser};
  `
  const connection = await createConnection()

  const queryResult = await connection.query(query)
  const userData = queryResult[0][0]
  const validateRole = ['A'].includes(userData.role)
  if (!validateRole) {
    return res.status(400).json('Sin autorización')
  }
  next()
}

export { authMiddlewareAdmin, authMiddlewareVeterinaryAdmin }
