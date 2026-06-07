import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { eq } from 'drizzle-orm'
import { mpHelpCategoriesTable, mpHelpArticlesTable } from '#database/schemas/help.js'

const CATEGORIES = [
  {
    name: 'Mi Cuenta',
    slug: 'mi-cuenta',
    description: 'Gestiona tu perfil, seguridad y preferencias de usuario.',
    imageUrl: '/farm-bg.png',
    icon: 'user',
    sortOrder: 1,
  },
  {
    name: 'Publicaciones y Anuncios',
    slug: 'publicaciones',
    description: 'Cómo crear, editar y gestionar tus publicaciones en el marketplace.',
    imageUrl: '/bg-cafe.png',
    icon: 'package',
    sortOrder: 2,
  },
  {
    name: 'Compradores',
    slug: 'compradores',
    description: 'Guías para buscar productos, enviar cotizaciones y contactar vendedores.',
    imageUrl: '/farm-bg.png',
    icon: 'shopping-cart',
    sortOrder: 3,
  },
  {
    name: 'Pagos y Planes',
    slug: 'pagos-planes',
    description: 'Información sobre métodos de pago, planes premium y facturación.',
    imageUrl: '/bg-cafe.png',
    icon: 'credit-card',
    sortOrder: 4,
  },
  {
    name: 'Radar Agrícola',
    slug: 'radar-agricola',
    description: 'Cómo configurar alertas de precios y oportunidades con el Radar.',
    imageUrl: '/farm-bg.png',
    icon: 'radar',
    sortOrder: 5,
  },
  {
    name: 'Seguridad y Privacidad',
    slug: 'seguridad',
    description: 'Protege tu cuenta, reporta usuarios y conoce nuestras políticas.',
    imageUrl: '/bg-cafe.png',
    icon: 'shield-check',
    sortOrder: 6,
  },
]

type ArticleSeed = {
  categorySlug: string
  title: string
  slug: string
  excerpt: string
  content: string
  type: 'faq' | 'guide' | 'tutorial' | 'policy' | 'announcement'
  isFeatured: boolean
  sortOrder: number
}

const ARTICLES: ArticleSeed[] = [
  // Mi Cuenta
  {
    categorySlug: 'mi-cuenta',
    title: '¿Cómo cambiar mi contraseña?',
    slug: 'cambiar-contrasena',
    excerpt: 'Pasos para actualizar tu contraseña desde la configuración de tu cuenta.',
    content: `<h2>Cambiar tu contraseña</h2>
<p>Puedes cambiar tu contraseña en cualquier momento desde la sección de configuración de tu cuenta.</p>
<ol>
  <li>Ingresa a tu cuenta y ve a <strong>Configuración &gt; Seguridad</strong>.</li>
  <li>Haz clic en <strong>Cambiar contraseña</strong>.</li>
  <li>Escribe tu contraseña actual y la nueva contraseña (mínimo 8 caracteres).</li>
  <li>Confirma la nueva contraseña y haz clic en <strong>Guardar</strong>.</li>
</ol>
<p>Si olvidaste tu contraseña actual, usa la opción <strong>¿Olvidaste tu contraseña?</strong> en la pantalla de inicio de sesión.</p>`,
    type: 'faq',
    isFeatured: true,
    sortOrder: 1,
  },
  {
    categorySlug: 'mi-cuenta',
    title: '¿Cómo verificar mi cuenta como productor?',
    slug: 'verificar-cuenta-productor',
    excerpt: 'El proceso de verificación de cuenta para productores agrícolas y qué documentos necesitas.',
    content: `<h2>Verificación de cuenta productor</h2>
<p>La verificación de productor te permite acceder a funcionalidades exclusivas como el Panel Productor, subir lotes de cosecha y recibir el sello de verificación TierraMarket.</p>
<h2>Documentos requeridos</h2>
<ul>
  <li>Documento de identidad vigente (cédula o pasaporte).</li>
  <li>Registro de actividad agrícola o constancia de productor.</li>
  <li>Foto del predio o finca (opcional pero recomendada).</li>
</ul>
<h2>Proceso de verificación</h2>
<ol>
  <li>Ve a <strong>Panel Productor &gt; Documentos</strong>.</li>
  <li>Sube los documentos requeridos en formato PDF o JPG.</li>
  <li>Nuestro equipo revisará tu solicitud en un plazo de 2 a 5 días hábiles.</li>
  <li>Recibirás una notificación por correo con el resultado.</li>
</ol>`,
    type: 'guide',
    isFeatured: true,
    sortOrder: 2,
  },
  {
    categorySlug: 'mi-cuenta',
    title: '¿Cómo actualizar mi información de perfil?',
    slug: 'actualizar-perfil',
    excerpt: 'Guía para editar tu nombre, foto, teléfono y datos de contacto.',
    content: `<h2>Editar tu perfil</h2>
<p>Mantener tu perfil actualizado mejora la confianza de los compradores y vendedores que interactúan contigo.</p>
<ol>
  <li>Accede a tu panel y haz clic en tu nombre de usuario.</li>
  <li>Selecciona <strong>Editar perfil</strong>.</li>
  <li>Actualiza los campos que deseas modificar: nombre, foto de perfil, teléfono, descripción.</li>
  <li>Haz clic en <strong>Guardar cambios</strong>.</li>
</ol>
<blockquote>Un perfil completo con foto y descripción recibe hasta un 60% más de consultas.</blockquote>`,
    type: 'faq',
    isFeatured: false,
    sortOrder: 3,
  },

  // Publicaciones
  {
    categorySlug: 'publicaciones',
    title: '¿Cómo publicar mi primera cosecha?',
    slug: 'primera-publicacion-cosecha',
    excerpt: 'Tutorial paso a paso para crear tu primera publicación de cosecha o producto agrícola.',
    content: `<h2>Pasos para crear una publicación</h2>
<p>Publicar en TierraMarket es sencillo. Sigue estos pasos para que tu cosecha llegue a miles de compradores.</p>
<ol>
  <li>Ve a <strong>Panel Productor &gt; Publicaciones</strong> y haz clic en <strong>Nueva publicación</strong>.</li>
  <li>Selecciona la categoría del producto (ej. Cereales, Frutas, Hortalizas).</li>
  <li>Completa el título, descripción, precio y disponibilidad.</li>
  <li>Sube al menos 3 fotos de calidad del producto o lote.</li>
  <li>Define la cantidad disponible y la unidad de medida (kg, toneladas, unidades).</li>
  <li>Haz clic en <strong>Publicar</strong>. Tu anuncio será visible de inmediato.</li>
</ol>
<h2>Consejos para una buena publicación</h2>
<ul>
  <li>Usa fotos tomadas con buena luz natural.</li>
  <li>Describe el estado de madurez, lugar de origen y métodos de cultivo.</li>
  <li>Especifica condiciones de entrega (retiro en finca, flete incluido, etc.).</li>
</ul>`,
    type: 'tutorial',
    isFeatured: true,
    sortOrder: 1,
  },
  {
    categorySlug: 'publicaciones',
    title: '¿Por qué mi publicación fue rechazada?',
    slug: 'publicacion-rechazada',
    excerpt: 'Razones comunes por las que una publicación puede ser rechazada y cómo resolverlas.',
    content: `<h2>Motivos de rechazo</h2>
<p>Nuestro equipo de moderación revisa todas las publicaciones antes de que sean visibles. Las causas más comunes de rechazo son:</p>
<ul>
  <li><strong>Fotos de baja calidad o inapropiadas</strong>: usa imágenes claras del producto real.</li>
  <li><strong>Descripción incompleta</strong>: incluye siempre cantidad, precio y condición del producto.</li>
  <li><strong>Categoría incorrecta</strong>: el producto no corresponde a la categoría seleccionada.</li>
  <li><strong>Precio fuera de rango</strong>: el precio es inusualmente alto o bajo para el producto.</li>
  <li><strong>Producto no permitido</strong>: consulta nuestra lista de productos no aceptados.</li>
</ul>
<h2>¿Cómo corregirlo?</h2>
<p>Recibirás un correo con el motivo específico. Edita tu publicación corrigiendo los puntos señalados y vuelve a enviarla para revisión.</p>`,
    type: 'faq',
    isFeatured: false,
    sortOrder: 2,
  },

  // Compradores
  {
    categorySlug: 'compradores',
    title: '¿Cómo funciona el sistema de cotizaciones?',
    slug: 'sistema-cotizaciones',
    excerpt: 'Entiende el proceso de cotización entre compradores y vendedores en TierraMarket.',
    content: `<h2>El proceso de cotización</h2>
<p>TierraMarket facilita la negociación entre compradores y vendedores a través de un sistema de cotizaciones seguro.</p>
<h2>Como comprador</h2>
<ol>
  <li>Encuentra el producto que te interesa y haz clic en <strong>Solicitar cotización</strong>.</li>
  <li>Especifica la cantidad deseada, condiciones de entrega y cualquier requerimiento especial.</li>
  <li>El vendedor recibirá tu solicitud y responderá en un plazo de 24 a 48 horas.</li>
  <li>Puedes negociar precio y condiciones directamente en el hilo de la cotización.</li>
  <li>Una vez acordado, confirma la cotización para iniciar el proceso de compra.</li>
</ol>
<h2>Protección del comprador</h2>
<p>Todas las transacciones están respaldadas por nuestra Garantía TierraMarket. Si el producto no coincide con lo descrito, tienes hasta 48 horas después de la entrega para reportar el problema.</p>`,
    type: 'guide',
    isFeatured: true,
    sortOrder: 1,
  },
  {
    categorySlug: 'compradores',
    title: '¿Cómo usar la búsqueda avanzada?',
    slug: 'busqueda-avanzada',
    excerpt: 'Filtra por precio, ubicación, tipo de producto y más para encontrar lo que necesitas.',
    content: `<h2>Filtros de búsqueda disponibles</h2>
<p>La búsqueda avanzada de TierraMarket te permite afinar tus resultados con múltiples criterios:</p>
<ul>
  <li><strong>Categoría y subcategoría</strong>: desde cereales hasta maquinaria.</li>
  <li><strong>Precio mínimo y máximo</strong>: define tu rango de presupuesto.</li>
  <li><strong>Ubicación</strong>: filtra por estado, municipio o radio de distancia.</li>
  <li><strong>Disponibilidad</strong>: productos disponibles ahora o bajo pedido.</li>
  <li><strong>Certificaciones</strong>: orgánico, fitosanitario, etc.</li>
  <li><strong>Vendedor verificado</strong>: muestra solo proveedores con sello de verificación.</li>
</ul>
<h2>Guardar búsquedas</h2>
<p>Activa el <strong>Radar</strong> para recibir notificaciones automáticas cuando aparezcan nuevos productos que coincidan con tus criterios.</p>`,
    type: 'tutorial',
    isFeatured: false,
    sortOrder: 2,
  },

  // Pagos y Planes
  {
    categorySlug: 'pagos-planes',
    title: 'Métodos de pago aceptados en la plataforma',
    slug: 'metodos-de-pago',
    excerpt: 'Conoce todos los métodos de pago disponibles para compradores y vendedores.',
    content: `<h2>Métodos de pago disponibles</h2>
<p>TierraMarket acepta los siguientes métodos de pago para transacciones entre usuarios:</p>
<ul>
  <li><strong>Transferencia bancaria</strong>: disponible para todos los bancos nacionales.</li>
  <li><strong>Pago móvil</strong>: Zelle, Pago móvil interbancario.</li>
  <li><strong>Divisas</strong>: dólares en efectivo o transferencia internacional (USDT).</li>
  <li><strong>Criptomonedas</strong>: USDT (Tether) y USDC en redes TRC20 y ERC20.</li>
</ul>
<h2>Planes premium</h2>
<p>Los planes de suscripción premium se pagan mensualmente y pueden abonarse con cualquiera de los métodos anteriores. Para activar tu plan, ve a <strong>Configuración &gt; Planes y Facturación</strong>.</p>`,
    type: 'faq',
    isFeatured: true,
    sortOrder: 1,
  },

  // Radar
  {
    categorySlug: 'radar-agricola',
    title: '¿Cómo funciona el Radar Premium para productores?',
    slug: 'radar-premium-productores',
    excerpt: 'Configura alertas inteligentes para recibir notificaciones sobre demanda, precios y oportunidades.',
    content: `<h2>¿Qué es el Radar TierraMarket?</h2>
<p>El Radar es una herramienta de alertas inteligentes que monitorea el mercado en tiempo real y te notifica cuando hay oportunidades que coinciden con tus intereses.</p>
<h2>Configurar una alerta</h2>
<ol>
  <li>Ve a <strong>Radar &gt; Nueva alerta</strong>.</li>
  <li>Selecciona el tipo de producto que te interesa (ej. maíz, soya, tractores).</li>
  <li>Define el rango de precio máximo que pagarías.</li>
  <li>Especifica la ubicación o radio de búsqueda.</li>
  <li>Elige la frecuencia de notificación: inmediata, diaria o semanal.</li>
</ol>
<h2>Alertas de precio</h2>
<p>El Radar Premium monitorea los precios del mercado y te avisa cuando un producto que sigues baja a tu precio objetivo.</p>`,
    type: 'guide',
    isFeatured: true,
    sortOrder: 1,
  },

  // Seguridad
  {
    categorySlug: 'seguridad',
    title: 'Guía de seguridad para transacciones de maquinaria',
    slug: 'seguridad-transacciones-maquinaria',
    excerpt: 'Consejos esenciales para realizar transacciones seguras al comprar o vender maquinaria agrícola.',
    content: `<h2>Antes de acordar una transacción</h2>
<ul>
  <li>Verifica que el vendedor tenga el <strong>sello de verificación TierraMarket</strong>.</li>
  <li>Revisa el historial de reputación y comentarios de otros compradores.</li>
  <li>Solicita fotos adicionales o una videollamada para ver el equipo en funcionamiento.</li>
  <li>Pide la documentación del equipo: serial, año, historial de mantenimiento.</li>
</ul>
<h2>Durante la transacción</h2>
<ul>
  <li>Nunca realices pagos fuera de la plataforma sin antes inspeccionar el equipo.</li>
  <li>Utiliza el sistema de cotizaciones de TierraMarket para tener respaldo de todos los acuerdos.</li>
  <li>Si es posible, visita el equipo en persona o envía a un técnico de confianza.</li>
</ul>
<h2>¿Encontraste algo sospechoso?</h2>
<p>Usa el botón <strong>Reportar</strong> en cualquier publicación o perfil. Nuestro equipo investigará el caso en menos de 24 horas.</p>`,
    type: 'guide',
    isFeatured: true,
    sortOrder: 1,
  },
  {
    categorySlug: 'seguridad',
    title: '¿Qué es el Sello de Verificación TierraMarket?',
    slug: 'sello-verificacion',
    excerpt: 'Todo sobre el proceso de verificación y los beneficios de obtener el sello oficial.',
    content: `<h2>El Sello de Verificación</h2>
<p>El Sello de Verificación TierraMarket es un distintivo que identifica a los usuarios que han completado nuestro proceso de verificación de identidad y actividad comercial.</p>
<h2>Beneficios</h2>
<ul>
  <li>Mayor visibilidad en los resultados de búsqueda.</li>
  <li>Icono de verificación visible en tu perfil y publicaciones.</li>
  <li>Acceso a funciones exclusivas de usuarios verificados.</li>
  <li>Mayor confianza de compradores y vendedores.</li>
</ul>
<h2>¿Cómo obtenerlo?</h2>
<p>Ve a <strong>Configuración &gt; Verificación de cuenta</strong> y sigue los pasos del proceso. La verificación suele completarse en 2-5 días hábiles.</p>`,
    type: 'faq',
    isFeatured: false,
    sortOrder: 2,
  },
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

  console.log('Seeding help categories...')

  const categoryIdMap: Record<string, number> = {}

  for (const cat of CATEGORIES) {
    await db
      .insert(mpHelpCategoriesTable)
      .values(cat)
      .onDuplicateKeyUpdate({
        set: {
          name: cat.name,
          description: cat.description,
          imageUrl: cat.imageUrl,
          icon: cat.icon,
          sortOrder: cat.sortOrder,
        },
      })

    const [row] = await db
      .select({ id: mpHelpCategoriesTable.id })
      .from(mpHelpCategoriesTable)
      .where(eq(mpHelpCategoriesTable.slug, cat.slug))
      .limit(1)

    if (row) categoryIdMap[cat.slug] = row.id
  }

  console.log(`✓ ${CATEGORIES.length} help categories seeded`)
  console.log('Seeding help articles...')

  for (const art of ARTICLES) {
    const categoryId = categoryIdMap[art.categorySlug]
    if (!categoryId) {
      console.warn(`⚠ Category slug "${art.categorySlug}" not found, skipping "${art.title}"`)
      continue
    }

    const { categorySlug: _, ...articleData } = art
    await db
      .insert(mpHelpArticlesTable)
      .values({ ...articleData, categoryId })
      .onDuplicateKeyUpdate({
        set: {
          title: art.title,
          excerpt: art.excerpt,
          content: art.content,
          type: art.type,
          isFeatured: art.isFeatured,
          sortOrder: art.sortOrder,
          categoryId,
        },
      })
  }

  console.log(`✓ ${ARTICLES.length} help articles seeded`)
  await pool.end()
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
