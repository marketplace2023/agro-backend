import bcrypt from 'bcrypt'

export async function hash(plainText: string) {
  return bcrypt.hash(plainText, 10)
}

export async function check(plainText: string, hashedText: string) {
  return bcrypt.compare(plainText, hashedText)
}
