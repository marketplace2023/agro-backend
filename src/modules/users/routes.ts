import { Hono } from 'hono'

export const userRoutes = new Hono()

userRoutes.get('/', (c) => c.json({ module: 'users' }))
