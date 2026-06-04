import jwt from 'jsonwebtoken'
import { authUserWithoutPassword, type AuthUserWithoutPassword } from '#database/entities/auth.js'

export async function sign<Payload extends string | Buffer | object>(
  payload: Payload,
  secret: string,
  options: jwt.SignOptions = {},
) {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, secret, options, (error, token) => {
      if (error) reject(error)
      else resolve(token as string)
    })
  })
}

export async function verify<Payload>(token: string, secret: string, options?: jwt.VerifyOptions) {
  return new Promise<Payload>((resolve, reject) => {
    jwt.verify(token, secret, options, (error, payload) => {
      if (error) reject(error)
      else resolve(payload as Payload)
    })
  })
}

export async function signAuthUser(
  user: AuthUserWithoutPassword,
  secret: string,
  options: jwt.SignOptions = {},
) {
  return sign(user, secret, options)
}

export async function verifyAuthUser(token: string, secret: string, options?: jwt.VerifyOptions) {
  const payload = await verify<AuthUserWithoutPassword>(token, secret, options)
  return authUserWithoutPassword.parse(payload)
}
