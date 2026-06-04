import { userId } from '#database/entities/users.js'
import { z } from 'zod'

export const authUser = z.object({
  id: userId,
  email: z.string().email(),
  name: z.string().min(1).max(100),
  password: z.string().min(1),
})

export type AuthUser = z.infer<typeof authUser>

export const authUserWithoutPassword = authUser.omit({ password: true })

export type AuthUserWithoutPassword = z.infer<typeof authUserWithoutPassword>
