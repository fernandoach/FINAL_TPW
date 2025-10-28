import bcrypt from 'bcrypt'

async function hashPassword (password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 12)
    return hashedPassword
  } catch (error) {
    throw new Error('No se puede hashear la contraseña.')
  }
}

export { hashPassword }
