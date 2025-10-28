import jwt from 'jsonwebtoken'

function generateJWT (idUser) {
  const payload = {
    idUser
  }
  const secretKey = process.env.JWT_SECRET_KEY
  const options = {
    algorithm: 'HS256',
    expiresIn: '2h'
  }
  const token = jwt.sign(payload, secretKey, options)
  return token
}

export { generateJWT }
