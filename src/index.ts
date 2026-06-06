import 'dotenv/config'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { env } from '#env.js'
import { httpLogger } from '#modules/shared/middleware.js'
import authRoutes from '#modules/auth/routes.js'
import { userRoutes } from '#modules/users/routes.js'
import { roleRoutes } from '#modules/roles/routes.js'
import { backofficeRoutes } from '#modules/backoffice/routes.js'
import { categoryRoutes } from '#modules/categories/routes.js'
import { productRoutes } from '#modules/products/routes.js'
import { storeRoutes } from '#modules/stores/routes.js'
import { listingRoutes } from '#modules/listings/routes.js'
import { searchRoutes } from '#modules/search/routes.js'
import { seoRoutes } from '#modules/seo/routes.js'
import { interactionRoutes } from '#modules/interactions/routes.js'
import { quoteRoutes } from '#modules/quotes/routes.js'
import { leadRoutes } from '#modules/leads/routes.js'
import { reputationRoutes } from '#modules/reputation/routes.js'
import { radarRoutes } from '#modules/radar/routes.js'
import { adminRoutes } from '#modules/admin/routes.js'
import { supportRoutes } from '#modules/support/routes.js'
import { blogRoutes } from '#modules/blog/routes.js'

const app = new Hono()

app.use(
  '*',
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposeHeaders: ['Set-Cookie'],
  }),
)

app.use('*', httpLogger)

app.route('/auth', authRoutes)
app.route('/users', userRoutes)
app.route('/roles', roleRoutes)
app.route('/backoffice', backofficeRoutes)
app.route('/categories', categoryRoutes)
app.route('/products', productRoutes)
app.route('/stores', storeRoutes)
app.route('/listings', listingRoutes)
app.route('/search', searchRoutes)
app.route('/seo', seoRoutes)
app.route('/', interactionRoutes)
app.route('/quotes', quoteRoutes)
app.route('/leads', leadRoutes)
app.route('/reputation', reputationRoutes)
app.route('/radar', radarRoutes)
app.route('/admin', adminRoutes)
app.route('/support', supportRoutes)
app.route('/blog', blogRoutes)

app.get('/', (c) => c.json({ status: 'ok', service: 'agro-backend' }))

serve({ fetch: app.fetch, port: env.PORT }, (info) => {
  console.log(`Server running on http://localhost:${info.port}`)
})
