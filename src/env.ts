import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
  DB_HOST: z.string().min(1),
  DB_PORT: z.coerce.number().default(3306),
  DB_USER: z.string().min(1),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string().min(1),
  JWT_SECRET: z.string().min(32),
  JWT_PASSWORD_RESET_SECRET: z.string().min(32),
  FRONTEND_URL: z.string().url(),
  MAIL_HOST: z.string().min(1),
  MAIL_PORT: z.coerce.number().default(587),
  MAIL_SECURE: z.string().transform((v) => v === 'true').default(false),
  MAIL_USER: z.string().min(1),
  MAIL_PASSWORD: z.string().min(1),
  MAIL_FROM: z.string().min(1),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.error('Invalid environment variables:')
  console.error(parsed.error.flatten().fieldErrors)
  process.exit(1)
}

export const env = parsed.data
export type Env = typeof env
