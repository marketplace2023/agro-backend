import 'dotenv/config'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { env } from '#env.js'
import { httpLogger } from '#modules/shared/middleware.js'
import { authRoutes } from '#modules/auth/routes.js'
import { userRoutes } from '#modules/users/routes.js'

const app = new Hono()

app.use('*', httpLogger)

app.route('/auth', authRoutes)
app.route('/users', userRoutes)

app.get('/', (c) => c.json({ status: 'ok', service: 'agro-backend' }))

serve({ fetch: app.fetch, port: env.PORT }, (info) => {
  console.log(`Server running on http://localhost:${info.port}`)
})
