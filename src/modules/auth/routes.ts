import { Hono } from 'hono'

export const authRoutes = new Hono()

authRoutes.get('/', (c) => c.json({ module: 'auth' }))
