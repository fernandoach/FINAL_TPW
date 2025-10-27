const cookieName = 'accessToken'

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'Strict',
  maxAge: 2 * 60 * 60 * 1000
}

export { cookieName, cookieOptions }
