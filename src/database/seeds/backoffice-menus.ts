import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { mpBackofficeMenusTable } from '#database/schemas/backoffice.js'

type MenuItem = { roleName: string; label: string; icon: string; path: string; sortOrder: number }

const MENUS: MenuItem[] = [
  // buyer — Comprador agrícola
  { roleName: 'buyer', label: 'Inicio', icon: 'home', path: '/app/buyer', sortOrder: 1 },
  { roleName: 'buyer', label: 'Mis compras', icon: 'shopping-cart', path: '/app/buyer/orders', sortOrder: 2 },
  { roleName: 'buyer', label: 'Mis cotizaciones', icon: 'file-text', path: '/app/buyer/quotes', sortOrder: 3 },
  { roleName: 'buyer', label: 'Mis favoritos', icon: 'heart', path: '/app/buyer/favorites', sortOrder: 4 },
  { roleName: 'buyer', label: 'Radar Agrícola', icon: 'radio', path: '/app/buyer/radar', sortOrder: 5 },
  { roleName: 'buyer', label: 'Mi perfil', icon: 'user', path: '/app/buyer/profile', sortOrder: 6 },

  // producer — Productor agrícola
  { roleName: 'producer', label: 'Inicio', icon: 'home', path: '/app/producer', sortOrder: 1 },
  { roleName: 'producer', label: 'Mi tienda', icon: 'store', path: '/app/producer/store', sortOrder: 2 },
  { roleName: 'producer', label: 'Mis publicaciones', icon: 'list', path: '/app/producer/listings', sortOrder: 3 },
  { roleName: 'producer', label: 'Mis cosechas', icon: 'leaf', path: '/app/producer/harvests', sortOrder: 4 },
  { roleName: 'producer', label: 'Pedidos recibidos', icon: 'package', path: '/app/producer/orders', sortOrder: 5 },
  { roleName: 'producer', label: 'Leads y contactos', icon: 'users', path: '/app/producer/leads', sortOrder: 6 },
  { roleName: 'producer', label: 'Mi perfil', icon: 'user', path: '/app/producer/profile', sortOrder: 7 },

  // seller — Vendedor agrícola
  { roleName: 'seller', label: 'Inicio', icon: 'home', path: '/app/seller', sortOrder: 1 },
  { roleName: 'seller', label: 'Mi tienda', icon: 'store', path: '/app/seller/store', sortOrder: 2 },
  { roleName: 'seller', label: 'Mis publicaciones', icon: 'list', path: '/app/seller/listings', sortOrder: 3 },
  { roleName: 'seller', label: 'Pedidos recibidos', icon: 'package', path: '/app/seller/orders', sortOrder: 4 },
  { roleName: 'seller', label: 'Leads y contactos', icon: 'users', path: '/app/seller/leads', sortOrder: 5 },
  { roleName: 'seller', label: 'Mi perfil', icon: 'user', path: '/app/seller/profile', sortOrder: 6 },

  // farm_owner — Dueño de finca
  { roleName: 'farm_owner', label: 'Inicio', icon: 'home', path: '/app/farm-owner', sortOrder: 1 },
  { roleName: 'farm_owner', label: 'Mi finca', icon: 'map-pin', path: '/app/farm-owner/farm', sortOrder: 2 },
  { roleName: 'farm_owner', label: 'Mis publicaciones', icon: 'list', path: '/app/farm-owner/listings', sortOrder: 3 },
  { roleName: 'farm_owner', label: 'Leads y contactos', icon: 'users', path: '/app/farm-owner/leads', sortOrder: 4 },
  { roleName: 'farm_owner', label: 'Mi perfil', icon: 'user', path: '/app/farm-owner/profile', sortOrder: 5 },

  // input_supplier — Proveedor de insumos
  { roleName: 'input_supplier', label: 'Inicio', icon: 'home', path: '/app/input-supplier', sortOrder: 1 },
  { roleName: 'input_supplier', label: 'Mi tienda', icon: 'store', path: '/app/input-supplier/store', sortOrder: 2 },
  { roleName: 'input_supplier', label: 'Mi catálogo', icon: 'box', path: '/app/input-supplier/catalog', sortOrder: 3 },
  { roleName: 'input_supplier', label: 'Mis publicaciones', icon: 'list', path: '/app/input-supplier/listings', sortOrder: 4 },
  { roleName: 'input_supplier', label: 'Pedidos recibidos', icon: 'package', path: '/app/input-supplier/orders', sortOrder: 5 },
  { roleName: 'input_supplier', label: 'Mi perfil', icon: 'user', path: '/app/input-supplier/profile', sortOrder: 6 },

  // machinery_supplier — Proveedor de maquinaria
  { roleName: 'machinery_supplier', label: 'Inicio', icon: 'home', path: '/app/machinery-supplier', sortOrder: 1 },
  { roleName: 'machinery_supplier', label: 'Mi tienda', icon: 'store', path: '/app/machinery-supplier/store', sortOrder: 2 },
  { roleName: 'machinery_supplier', label: 'Mi catálogo', icon: 'tool', path: '/app/machinery-supplier/catalog', sortOrder: 3 },
  { roleName: 'machinery_supplier', label: 'Mis publicaciones', icon: 'list', path: '/app/machinery-supplier/listings', sortOrder: 4 },
  { roleName: 'machinery_supplier', label: 'Pedidos recibidos', icon: 'package', path: '/app/machinery-supplier/orders', sortOrder: 5 },
  { roleName: 'machinery_supplier', label: 'Mi perfil', icon: 'user', path: '/app/machinery-supplier/profile', sortOrder: 6 },

  // agronomist — Agrónomo / asesor técnico
  { roleName: 'agronomist', label: 'Inicio', icon: 'home', path: '/app/agronomist', sortOrder: 1 },
  { roleName: 'agronomist', label: 'Mis servicios', icon: 'clipboard', path: '/app/agronomist/services', sortOrder: 2 },
  { roleName: 'agronomist', label: 'Mis clientes', icon: 'users', path: '/app/agronomist/clients', sortOrder: 3 },
  { roleName: 'agronomist', label: 'Mi disponibilidad', icon: 'calendar', path: '/app/agronomist/availability', sortOrder: 4 },
  { roleName: 'agronomist', label: 'Mi perfil', icon: 'user', path: '/app/agronomist/profile', sortOrder: 5 },

  // transporter — Transportista agrícola
  { roleName: 'transporter', label: 'Inicio', icon: 'home', path: '/app/transporter', sortOrder: 1 },
  { roleName: 'transporter', label: 'Mis rutas', icon: 'map', path: '/app/transporter/routes', sortOrder: 2 },
  { roleName: 'transporter', label: 'Mis vehículos', icon: 'truck', path: '/app/transporter/vehicles', sortOrder: 3 },
  { roleName: 'transporter', label: 'Mis viajes', icon: 'navigation', path: '/app/transporter/trips', sortOrder: 4 },
  { roleName: 'transporter', label: 'Mi perfil', icon: 'user', path: '/app/transporter/profile', sortOrder: 5 },

  // admin — Administrador general
  { roleName: 'admin', label: 'Panel general', icon: 'layout-dashboard', path: '/app/admin', sortOrder: 1 },
  { roleName: 'admin', label: 'Usuarios', icon: 'users', path: '/app/admin/users', sortOrder: 2 },
  { roleName: 'admin', label: 'Roles y permisos', icon: 'shield', path: '/app/admin/roles', sortOrder: 3 },
  { roleName: 'admin', label: 'Publicaciones', icon: 'list', path: '/app/admin/listings', sortOrder: 4 },
  { roleName: 'admin', label: 'Categorías', icon: 'tag', path: '/app/admin/categories', sortOrder: 5 },
  { roleName: 'admin', label: 'Pagos', icon: 'credit-card', path: '/app/admin/payments', sortOrder: 6 },
  { roleName: 'admin', label: 'Reportes', icon: 'bar-chart', path: '/app/admin/reports', sortOrder: 7 },
  { roleName: 'admin', label: 'Configuración', icon: 'settings', path: '/app/admin/settings', sortOrder: 8 },

  // cooperative — Cooperativa agrícola
  { roleName: 'cooperative', label: 'Inicio', icon: 'home', path: '/app/cooperative', sortOrder: 1 },
  { roleName: 'cooperative', label: 'Mi cooperativa', icon: 'building', path: '/app/cooperative/profile', sortOrder: 2 },
  { roleName: 'cooperative', label: 'Mis miembros', icon: 'users', path: '/app/cooperative/members', sortOrder: 3 },
  { roleName: 'cooperative', label: 'Mis productos', icon: 'box', path: '/app/cooperative/products', sortOrder: 4 },
  { roleName: 'cooperative', label: 'Leads y contactos', icon: 'phone', path: '/app/cooperative/leads', sortOrder: 5 },

  // laboratory — Laboratorio agrícola
  { roleName: 'laboratory', label: 'Inicio', icon: 'home', path: '/app/laboratory', sortOrder: 1 },
  { roleName: 'laboratory', label: 'Mis servicios', icon: 'flask-conical', path: '/app/laboratory/services', sortOrder: 2 },
  { roleName: 'laboratory', label: 'Mis análisis', icon: 'clipboard-list', path: '/app/laboratory/analyses', sortOrder: 3 },
  { roleName: 'laboratory', label: 'Mis clientes', icon: 'users', path: '/app/laboratory/clients', sortOrder: 4 },
  { roleName: 'laboratory', label: 'Mi perfil', icon: 'user', path: '/app/laboratory/profile', sortOrder: 5 },

  // certifier — Certificador agrícola
  { roleName: 'certifier', label: 'Inicio', icon: 'home', path: '/app/certifier', sortOrder: 1 },
  { roleName: 'certifier', label: 'Mis certificaciones', icon: 'award', path: '/app/certifier/certifications', sortOrder: 2 },
  { roleName: 'certifier', label: 'Mis clientes', icon: 'users', path: '/app/certifier/clients', sortOrder: 3 },
  { roleName: 'certifier', label: 'Mi perfil', icon: 'user', path: '/app/certifier/profile', sortOrder: 4 },

  // quality_inspector — Inspector de calidad
  { roleName: 'quality_inspector', label: 'Inicio', icon: 'home', path: '/app/quality-inspector', sortOrder: 1 },
  { roleName: 'quality_inspector', label: 'Mis inspecciones', icon: 'check-square', path: '/app/quality-inspector/inspections', sortOrder: 2 },
  { roleName: 'quality_inspector', label: 'Mis clientes', icon: 'users', path: '/app/quality-inspector/clients', sortOrder: 3 },
  { roleName: 'quality_inspector', label: 'Mi perfil', icon: 'user', path: '/app/quality-inspector/profile', sortOrder: 4 },
]

async function seed() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME ?? 'agro_db',
  })

  const db = drizzle(pool, { mode: 'default' })

  console.log('Seeding backoffice menus...')

  await db.delete(mpBackofficeMenusTable)
  await db.insert(mpBackofficeMenusTable).values(MENUS)

  console.log(`✓ ${MENUS.length} menu items seeded across 13 roles`)

  await pool.end()
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
