import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { mpSettingsTable } from '#database/schemas/admin.js'

const DEFAULT_SETTINGS = [
  { key: 'platform_name', value: 'Marketplace Agro', description: 'Nombre de la plataforma', isPublic: true },
  { key: 'platform_tagline', value: 'El mercado agrícola de Colombia', description: 'Tagline público', isPublic: true },
  { key: 'contact_email', value: 'soporte@marketplaceagro.co', description: 'Email de soporte', isPublic: true },
  { key: 'maintenance_mode', value: 'false', description: 'Modo mantenimiento (true/false)', isPublic: true },
  { key: 'max_free_listings', value: '5', description: 'Máximo de publicaciones activas en plan gratuito', isPublic: false },
  { key: 'max_radar_alerts', value: '10', description: 'Máximo de alertas Radar por usuario', isPublic: false },
  { key: 'listing_auto_expire_days', value: '90', description: 'Días antes de expirar una publicación automáticamente', isPublic: false },
  { key: 'review_auto_publish', value: 'false', description: 'Publicar reseñas sin aprobación manual', isPublic: false },
  { key: 'require_listing_moderation', value: 'true', description: 'Publicaciones requieren aprobación admin', isPublic: false },
  { key: 'whatsapp_message_template', value: 'Hola, vi tu publicación en Marketplace Agro y me interesa. ¿Podemos hablar?', description: 'Mensaje prellenado para WhatsApp', isPublic: true },
  { key: 'frontend_url', value: 'https://marketplaceagro.co', description: 'URL del frontend', isPublic: false },
  { key: 'max_media_per_listing', value: '10', description: 'Máximo de fotos por publicación', isPublic: false },
  { key: 'max_store_media', value: '20', description: 'Máximo de fotos en galería de tienda', isPublic: false },
  { key: 'quote_expiry_days', value: '7', description: 'Días de validez por defecto para cotizaciones', isPublic: false },
  { key: 'featured_listing_duration_days', value: '30', description: 'Días de duración de una publicación destacada', isPublic: false },
] as const

async function seed() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME ?? 'agro_db',
  })

  const db = drizzle(pool, { mode: 'default' })

  console.log('Seeding default settings...')

  for (const setting of DEFAULT_SETTINGS) {
    await db
      .insert(mpSettingsTable)
      .values(setting)
      .onDuplicateKeyUpdate({ set: { description: setting.description, isPublic: setting.isPublic } })
  }

  console.log(`✓ ${DEFAULT_SETTINGS.length} settings seeded`)

  await pool.end()
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
