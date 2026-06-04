# DOCUMENTO PARA GOOGLE STITCH — PANTALLA POR PANTALLA
# MARKETPLACE AGRÍCOLA AGROBOT LATAM

## Versión

- **Documento:** Guía estricta pantalla por pantalla para Google Stitch.
- **Base:** Documento Maestro V3.1 corregido sin resumir + Documento Técnico Operativo por etapas y sprints.
- **Objetivo:** Evitar que Stitch se disperse, obligándolo a diseñar una pantalla a la vez, con rutas, componentes, acciones y navegación coherente.
- **Alcance visual:** Marketplace agrícola tipo Yelp + funcionalidad tipo MercadoLibre.

---

# 1. REGLA PRINCIPAL ANTI-DISPERSIÓN PARA GOOGLE STITCH

Usar este documento de forma secuencial. No pedirle a Stitch “diseña todo el marketplace” en un solo prompt. Se debe trabajar **pantalla por pantalla**, siguiendo el ID de pantalla.

## Instrucción fija antes de cada pantalla

```text
No inventes pantallas adicionales. No cambies el flujo. No omitas componentes. Diseña solamente la pantalla solicitada. Mantén el sistema visual de AgroBot Latam: marketplace agrícola tipo Yelp en diseño y MercadoLibre en funcionalidad. Usa la ruta, el rol, las acciones y la navegación indicada. Debe ser responsive desktop-first y coherente con las pantallas anteriores.
```

## Roles vigentes obligatorios

1. Usuario visitante.
2. Comprador agrícola.
3. Productor agrícola.
4. Vendedor agrícola.
5. Dueño de finca agrícola.
6. Proveedor de insumos agrícolas.
7. Proveedor de maquinaria agrícola.
8. Agrónomo o asesor técnico.
9. Transportista agrícola.
10. Administrador general.
11. Cooperativa agrícola.
12. Laboratorio agrícola.
13. Certificador agrícola.
14. Inspector de calidad.

---

# 2. SISTEMA VISUAL GLOBAL QUE DEBE MANTENERSE EN TODAS LAS PANTALLAS

## 2.1. Inspiración tipo Yelp

1. Buscador principal por necesidad y ubicación.
2. Cards con foto, rating, reseñas, ubicación, distancia y CTA.
3. Vista de resultados con mapa lateral cuando aplique.
4. Perfiles públicos con portada, logo, galería, reseñas, badges, mapa y contacto.
5. Énfasis en reputación, ubicación y confianza local.

## 2.2. Funcionalidad tipo MercadoLibre

1. Publicaciones por categoría con ficha técnica.
2. Catálogo por vendedor, tienda, productor o proveedor.
3. Preguntas y respuestas antes de cotizar.
4. Cotización como flujo principal B2B.
5. Compra directa/carrito opcional para productos estándar.
6. Publicaciones destacadas, ofertas, promociones y reputación.
7. Paneles de vendedor/productor/proveedor con leads, cotizaciones y estadísticas.

## 2.3. Tokens de diseño

- **Color principal:** verde agrícola.
- **Color secundario:** verde oscuro.
- **Acento comercial:** amarillo/naranja para ofertas.
- **Verificación:** azul o verde.
- **Pendiente:** amarillo.
- **Error/rechazo:** rojo suave.
- **Fondo:** blanco y gris claro.
- **Cards:** borde suave, sombra ligera, radio medio.
- **Tipografía:** sans-serif moderna, legible y profesional.
- **Mobile:** CTA fijo inferior cuando la acción principal sea cotizar, WhatsApp, guardar o publicar.

---

# 3. ORDEN OBLIGATORIO DE GENERACIÓN DE PANTALLAS

## ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **P001** — `/` — Homepage marketplace agrícola
- **P002** — `/buscar` — Pantalla de búsqueda inicial
- **P003** — `/buscar/resultados` — Resultados con lista y mapa tipo Yelp
- **P004** — `/categorias` — Índice de categorías agrícolas
- **P005** — `/categorias/:slug` — Landing de categoría agrícola
- **P006** — `/ofertas` — Ofertas y promociones
- **P007** — `/radar` — Landing pública Radar Agrícola
- **P008** — `/planes` — Planes y monetización
- **P009** — `/ayuda` — Centro de ayuda
- **P010** — `/blog` — Blog agrícola
- **P011** — `/blog/:slug` — Detalle de artículo
- **P012** — `/directorio` — Directorio agrícola tipo Yelp
- **P013** — `/tiendas/:slug` — Perfil público de tienda o vendedor
- **P014** — `/productores/:slug` — Perfil público de productor agrícola
- **P015** — `/proveedores/:slug` — Perfil público de proveedor
- **P016** — `/anuncios/:id` — Detalle genérico de publicación
- **P017** — `/productos-agricolas/:id` — Detalle de producto agrícola o cosecha
- **P018** — `/fincas-agricolas/:id` — Detalle de finca, lote o predio agrícola
- **P019** — `/insumos-agricolas/:id` — Detalle de insumo agrícola
- **P020** — `/maquinaria-agricola/:id` — Detalle de maquinaria agrícola
- **P021** — `/servicios-agronomicos/:id` — Detalle de servicio agronómico
- **P022** — `/transporte-agricola/:id` — Detalle de servicio de transporte agrícola
- **P023** — `/laboratorios/:slug` — Perfil público de laboratorio agrícola
- **P024** — `/certificadores/:slug` — Perfil público de certificador agrícola
- **P025** — `/inspectores/:slug` — Perfil público de inspector de calidad
- **P026** — `/preguntas/:anuncioId` — Preguntas y respuestas de publicación
- **P027** — `/cotizar/:id` — Solicitud de cotización
- **P028** — `/contacto-whatsapp/:id` — Confirmación de contacto WhatsApp
- **P029** — `/favoritos-publico` — Favoritos para visitante
- **P030** — `/comparador` — Comparador agrícola
## ETAPA 02 — Autenticación, registro y onboarding por rol
- **P031** — `/login` — Inicio de sesión
- **P032** — `/registro` — Registro de usuario
- **P033** — `/recuperar-contrasena` — Recuperar contraseña
- **P034** — `/verificar-cuenta` — Verificación de cuenta
- **P035** — `/onboarding/rol` — Selección de rol vigente
- **P036** — `/onboarding/perfil` — Datos base del perfil
- **P037** — `/onboarding/ubicacion` — Ubicación y cobertura
- **P038** — `/onboarding/documentos` — Documentos y verificación inicial
- **P039** — `/onboarding/completo` — Onboarding completado
## ETAPA 03 — Flujo de publicación guiada
- **P040** — `/publicar` — Seleccionar tipo de publicación
- **P041** — `/publicar/producto-agricola` — Formulario publicar producto o cosecha
- **P042** — `/publicar/finca` — Formulario publicar finca o predio
- **P043** — `/publicar/insumo` — Formulario publicar insumo agrícola
- **P044** — `/publicar/maquinaria` — Formulario publicar maquinaria agrícola
- **P045** — `/publicar/servicio-agronomico` — Formulario publicar servicio agronómico
- **P046** — `/publicar/transporte` — Formulario publicar transporte agrícola
- **P047** — `/publicar/laboratorio` — Formulario publicar servicio de laboratorio
- **P048** — `/publicar/certificacion` — Formulario publicar certificación agrícola
- **P049** — `/publicar/inspeccion` — Formulario publicar inspección de calidad
- **P050** — `/publicar/multimedia` — Carga de fotos, videos y documentos
- **P051** — `/publicar/vista-previa` — Vista previa de publicación
- **P052** — `/publicar/enviado` — Publicación enviada a revisión
## ETAPA 04 — Backoffice comprador agrícola
- **P053** — `/app/comprador` — Dashboard comprador agrícola
- **P054** — `/app/comprador/perfil` — Perfil comprador
- **P055** — `/app/comprador/busquedas` — Mis búsquedas guardadas
- **P056** — `/app/comprador/favoritos` — Mis favoritos
- **P057** — `/app/comprador/cotizaciones` — Cotizaciones enviadas
- **P058** — `/app/comprador/cotizaciones/:id` — Detalle de cotización enviada
- **P059** — `/app/comprador/radar` — Radar del comprador
- **P060** — `/app/comprador/radar/nuevo` — Crear alerta Radar comprador
- **P061** — `/app/comprador/comparador` — Comparador guardado comprador
- **P062** — `/app/comprador/contactos` — Contactos realizados
- **P063** — `/app/comprador/notificaciones` — Notificaciones comprador
- **P064** — `/app/comprador/configuracion` — Configuración comprador
## ETAPA 05 — Backoffice productor agrícola
- **P065** — `/app/productor` — Dashboard productor
- **P066** — `/app/productor/perfil` — Perfil productor
- **P067** — `/app/productor/publicaciones` — Mis publicaciones de productor
- **P068** — `/app/productor/inventario` — Inventario de cosechas
- **P069** — `/app/productor/leads` — Leads recibidos
- **P070** — `/app/productor/cotizaciones` — Cotizaciones recibidas
- **P071** — `/app/productor/documentos` — Documentos y certificaciones
- **P072** — `/app/productor/promociones` — Promociones del productor
- **P073** — `/app/productor/analitica` — Analítica del productor
- **P074** — `/app/productor/reputacion` — Reputación del productor
- **P075** — `/app/productor/configuracion` — Configuración productor
## ETAPA 06 — Backoffice vendedor agrícola
- **P076** — `/app/vendedor` — Dashboard vendedor
- **P077** — `/app/vendedor/perfil` — Perfil vendedor
- **P078** — `/app/vendedor/catalogo` — Catálogo del vendedor
- **P079** — `/app/vendedor/publicaciones` — Publicaciones del vendedor
- **P080** — `/app/vendedor/cotizaciones` — Cotizaciones del vendedor
- **P081** — `/app/vendedor/leads` — Leads del vendedor
- **P082** — `/app/vendedor/ordenes` — Órdenes y pagos opcionales
- **P083** — `/app/vendedor/ofertas` — Ofertas y promociones
- **P084** — `/app/vendedor/tienda-gbp` — Tienda y presencia local GBP
- **P085** — `/app/vendedor/analitica` — Analítica vendedor
- **P086** — `/app/vendedor/reputacion` — Reputación vendedor
- **P087** — `/app/vendedor/configuracion` — Configuración vendedor
## ETAPA 07 — Backoffice dueño de finca agrícola
- **P088** — `/app/dueno-finca` — Dashboard dueño de finca
- **P089** — `/app/dueno-finca/perfil` — Perfil dueño de finca
- **P090** — `/app/dueno-finca/predios` — Mis fincas y predios
- **P091** — `/app/dueno-finca/formulario-predio` — Formulario de predio
- **P092** — `/app/dueno-finca/visitas` — Solicitudes de visita
- **P093** — `/app/dueno-finca/leads` — Leads de finca
- **P094** — `/app/dueno-finca/documentos` — Documentos del predio
- **P095** — `/app/dueno-finca/analitica` — Analítica de predios
- **P096** — `/app/dueno-finca/configuracion` — Configuración propietario
## ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **P097** — `/app/proveedor-insumos` — Dashboard proveedor de insumos
- **P098** — `/app/proveedor-insumos/perfil` — Perfil proveedor de insumos
- **P099** — `/app/proveedor-insumos/catalogo` — Catálogo de insumos
- **P100** — `/app/proveedor-insumos/producto` — Formulario de insumo
- **P101** — `/app/proveedor-insumos/inventario` — Inventario y precios
- **P102** — `/app/proveedor-insumos/cotizaciones` — Cotizaciones recibidas
- **P103** — `/app/proveedor-insumos/ofertas` — Promociones de insumos
- **P104** — `/app/proveedor-insumos/tienda-gbp` — Tienda y GBP
- **P105** — `/app/proveedor-insumos/analitica` — Analítica proveedor
- **P106** — `/app/proveedor-insumos/reputacion` — Reputación proveedor
- **P107** — `/app/proveedor-insumos/configuracion` — Configuración proveedor
## ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **P108** — `/app/proveedor-maquinaria` — Dashboard proveedor de maquinaria
- **P109** — `/app/proveedor-maquinaria/perfil` — Perfil proveedor de maquinaria
- **P110** — `/app/proveedor-maquinaria/catalogo` — Catálogo de maquinaria
- **P111** — `/app/proveedor-maquinaria/equipo` — Formulario maquinaria
- **P112** — `/app/proveedor-maquinaria/alquileres` — Calendario de alquileres
- **P113** — `/app/proveedor-maquinaria/cotizaciones` — Cotizaciones maquinaria
- **P114** — `/app/proveedor-maquinaria/inspecciones` — Solicitudes de inspección
- **P115** — `/app/proveedor-maquinaria/ofertas` — Promociones maquinaria
- **P116** — `/app/proveedor-maquinaria/analitica` — Analítica maquinaria
- **P117** — `/app/proveedor-maquinaria/reputacion` — Reputación maquinaria
- **P118** — `/app/proveedor-maquinaria/configuracion` — Configuración maquinaria
## ETAPA 10 — Backoffice agrónomo o asesor técnico
- **P119** — `/app/asesor-agricola` — Dashboard asesor agrícola
- **P120** — `/app/asesor-agricola/perfil` — Perfil asesor agrícola
- **P121** — `/app/asesor-agricola/servicios` — Servicios ofrecidos
- **P122** — `/app/asesor-agricola/servicio` — Formulario servicio
- **P123** — `/app/asesor-agricola/agenda` — Agenda del asesor
- **P124** — `/app/asesor-agricola/solicitudes` — Solicitudes recibidas
- **P125** — `/app/asesor-agricola/clientes` — Clientes atendidos
- **P126** — `/app/asesor-agricola/documentos` — Documentos profesionales
- **P127** — `/app/asesor-agricola/analitica` — Analítica asesor
- **P128** — `/app/asesor-agricola/reputacion` — Reputación asesor
- **P129** — `/app/asesor-agricola/configuracion` — Configuración asesor
## ETAPA 11 — Backoffice transportista agrícola
- **P130** — `/app/transportista` — Dashboard transportista agrícola
- **P131** — `/app/transportista/perfil` — Perfil transportista agrícola
- **P132** — `/app/transportista/vehiculos` — Vehículos registrados
- **P133** — `/app/transportista/vehiculo` — Formulario vehículo
- **P134** — `/app/transportista/rutas` — Rutas frecuentes
- **P135** — `/app/transportista/cotizaciones` — Cotizaciones transporte
- **P136** — `/app/transportista/viajes` — Viajes realizados
- **P137** — `/app/transportista/documentos` — Documentos vehículo
- **P138** — `/app/transportista/analitica` — Analítica transporte
- **P139** — `/app/transportista/reputacion` — Reputación transporte
- **P140** — `/app/transportista/configuracion` — Configuración transportista
## ETAPA 12 — Backoffice cooperativa agrícola
- **P141** — `/app/cooperativa` — Dashboard cooperativa agrícola
- **P142** — `/app/cooperativa/perfil` — Perfil cooperativa agrícola
- **P143** — `/app/cooperativa/miembros` — Miembros productores
- **P144** — `/app/cooperativa/publicaciones-colectivas` — Publicaciones colectivas
- **P145** — `/app/cooperativa/inventario-colectivo` — Inventario consolidado
- **P146** — `/app/cooperativa/cotizaciones` — Cotizaciones cooperativa
- **P147** — `/app/cooperativa/compradores` — Compradores y leads
- **P148** — `/app/cooperativa/documentos` — Documentos cooperativa
- **P149** — `/app/cooperativa/reportes` — Reportes cooperativa
- **P150** — `/app/cooperativa/configuracion` — Configuración cooperativa
## ETAPA 13 — Backoffice laboratorio agrícola
- **P151** — `/app/laboratorio` — Dashboard laboratorio agrícola
- **P152** — `/app/laboratorio/perfil` — Perfil laboratorio agrícola
- **P153** — `/app/laboratorio/servicios` — Servicios de laboratorio
- **P154** — `/app/laboratorio/servicio` — Formulario servicio laboratorio
- **P155** — `/app/laboratorio/muestras` — Solicitudes de muestras
- **P156** — `/app/laboratorio/resultados` — Resultados y documentos
- **P157** — `/app/laboratorio/cotizaciones` — Cotizaciones laboratorio
- **P158** — `/app/laboratorio/agenda` — Agenda laboratorio
- **P159** — `/app/laboratorio/analitica` — Analítica laboratorio
- **P160** — `/app/laboratorio/reputacion` — Reputación laboratorio
- **P161** — `/app/laboratorio/configuracion` — Configuración laboratorio
## ETAPA 14 — Backoffice certificador agrícola
- **P162** — `/app/certificador` — Dashboard certificador agrícola
- **P163** — `/app/certificador/perfil` — Perfil certificador agrícola
- **P164** — `/app/certificador/servicios` — Servicios de certificación
- **P165** — `/app/certificador/servicio` — Formulario certificación
- **P166** — `/app/certificador/solicitudes` — Solicitudes de certificación
- **P167** — `/app/certificador/auditorias` — Agenda de auditorías
- **P168** — `/app/certificador/certificados` — Certificados y documentos
- **P169** — `/app/certificador/cotizaciones` — Cotizaciones certificación
- **P170** — `/app/certificador/analitica` — Analítica certificador
- **P171** — `/app/certificador/reputacion` — Reputación certificador
- **P172** — `/app/certificador/configuracion` — Configuración certificador
## ETAPA 15 — Backoffice inspector de calidad
- **P173** — `/app/inspector-calidad` — Dashboard inspector de calidad
- **P174** — `/app/inspector-calidad/perfil` — Perfil inspector de calidad
- **P175** — `/app/inspector-calidad/servicios` — Servicios de inspección
- **P176** — `/app/inspector-calidad/solicitudes` — Solicitudes de inspección
- **P177** — `/app/inspector-calidad/agenda` — Agenda de inspecciones
- **P178** — `/app/inspector-calidad/reportes` — Reportes de inspección
- **P179** — `/app/inspector-calidad/documentos` — Documentos inspector
- **P180** — `/app/inspector-calidad/cotizaciones` — Cotizaciones inspección
- **P181** — `/app/inspector-calidad/reputacion` — Reputación inspector
- **P182** — `/app/inspector-calidad/configuracion` — Configuración inspector
## ETAPA 16 — Backoffice administrador general completo
- **P183** — `/app/admin` — Dashboard administrador
- **P184** — `/app/admin/usuarios` — Gestión de usuarios vigentes
- **P185** — `/app/admin/roles-permisos` — Roles y permisos
- **P186** — `/app/admin/categorias` — Categorías y subcategorías
- **P187** — `/app/admin/publicaciones` — Publicaciones y moderación
- **P188** — `/app/admin/tablas-nativas` — Tablas nativas Odoo espejo
- **P189** — `/app/admin/tablas-propias` — Tablas propias marketplace
- **P190** — `/app/admin/fur` — Centro FUR
- **P191** — `/app/admin/fur/usuarios` — FUR Usuarios
- **P192** — `/app/admin/fur/productos` — FUR Productos
- **P193** — `/app/admin/fur/tiendas` — FUR Tiendas
- **P194** — `/app/admin/fur/categorias` — FUR Categorías
- **P195** — `/app/admin/fur/modulos` — FUR Módulos nativos y propios
- **P196** — `/app/admin/fur/gbp` — FUR GBP de tiendas
- **P197** — `/app/admin/fur/ofertas` — FUR Ofertas y promociones
- **P198** — `/app/admin/fur/sprints` — FUR Sprints
- **P199** — `/app/admin/fur/mapa-sitio` — FUR Mapa del sitio
- **P200** — `/app/admin/fur/frontend-vscode` — FUR Estructura VS Code Frontend
- **P201** — `/app/admin/fur/backend-vscode` — FUR Estructura VS Code Backend
- **P202** — `/app/admin/fur/librerias-node` — FUR Librerías Node.js
- **P203** — `/app/admin/modulos-nativos` — Módulos nativos Odoo espejo
- **P204** — `/app/admin/modulos-propios` — Módulos propios marketplace
- **P205** — `/app/admin/leads` — Leads y oportunidades
- **P206** — `/app/admin/cotizaciones` — Cotizaciones globales
- **P207** — `/app/admin/radar` — Radar Agrícola admin
- **P208** — `/app/admin/pagos-planes` — Pagos y planes
- **P209** — `/app/admin/ofertas` — Ofertas y promociones admin
- **P210** — `/app/admin/gbp` — GBP y SEO local
- **P211** — `/app/admin/blog-seo` — Blog y SEO
- **P212** — `/app/admin/reportes` — Reportes y analítica
- **P213** — `/app/admin/soporte` — Soporte y tickets
- **P214** — `/app/admin/notificaciones` — Notificaciones globales
- **P215** — `/app/admin/configuracion` — Configuración general
- **P216** — `/app/admin/auditoria` — Auditoría y trazabilidad
- **P217** — `/app/admin/import-export` — Importación y exportación
## ETAPA 17 — Pantallas transversales, estados UI y responsive
- **P218** — `/app/notificaciones` — Centro global de notificaciones
- **P219** — `/app/soporte` — Soporte autenticado
- **P220** — `/app/documentos` — Gestor documental transversal
- **P221** — `/app/mensajes` — Mensajes y conversaciones
- **P222** — `/app/estado-vacio` — Estado vacío estándar
- **P223** — `/app/estado-cargando` — Estado cargando estándar
- **P224** — `/app/estado-error` — Estado error estándar
- **P225** — `/mobile/home` — Mobile homepage
- **P226** — `/mobile/resultados` — Mobile resultados
- **P227** — `/mobile/detalle` — Mobile detalle anuncio
- **P228** — `/mobile/dashboard` — Mobile dashboard por rol

---

# 4. PANTALLA POR PANTALLA — PROMPTS DETALLADOS PARA STITCH

## P001. Homepage marketplace agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/`
- **Rol principal:** Usuario visitante
- **Objetivo:** Presentar el marketplace agrícola completo, con buscador central tipo Yelp y acceso comercial tipo MercadoLibre.

### Componentes obligatorios
- Header sticky con logo AgroBot Latam, menú Categorías, Ofertas, Radar, Publicar, Ayuda, Ingresar
- Hero con buscador doble: ¿Qué producto, finca, insumo o servicio buscas? + ¿Dónde?
- Accesos rápidos por categorías agrícolas
- Cards destacadas de cosechas, fincas, insumos, maquinaria, servicios, laboratorios, certificadores e inspectores
- Sección de tiendas/productores destacados con rating
- Mapa o bloque de zonas agrícolas populares
- Bloque "Cómo funciona" en 3 pasos
- Bloque Radar Agrícola
- Footer completo

### Acciones obligatorias
- Buscar
- Ver categoría
- Publicar anuncio
- Activar Radar
- Ingresar/registrarse
- Contactar por WhatsApp

### Navegación siguiente permitida
- `/buscar/resultados`
- `/categorias`
- `/publicar`
- `/radar`
- `/login`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P001: Homepage marketplace agrícola.
Ruta frontend: /.
Rol principal: Usuario visitante.
Objetivo de la pantalla: Presentar el marketplace agrícola completo, con buscador central tipo Yelp y acceso comercial tipo MercadoLibre..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Header sticky con logo AgroBot Latam, menú Categorías, Ofertas, Radar, Publicar, Ayuda, Ingresar; Hero con buscador doble: ¿Qué producto, finca, insumo o servicio buscas? + ¿Dónde?; Accesos rápidos por categorías agrícolas; Cards destacadas de cosechas, fincas, insumos, maquinaria, servicios, laboratorios, certificadores e inspectores; Sección de tiendas/productores destacados con rating; Mapa o bloque de zonas agrícolas populares; Bloque "Cómo funciona" en 3 pasos; Bloque Radar Agrícola; Footer completo.
Acciones obligatorias: Buscar; Ver categoría; Publicar anuncio; Activar Radar; Ingresar/registrarse; Contactar por WhatsApp.
Navegación siguiente permitida: /buscar/resultados; /categorias; /publicar; /radar; /login.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P002. Pantalla de búsqueda inicial

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/buscar`
- **Rol principal:** Usuario visitante
- **Objetivo:** Guiar al usuario para construir una búsqueda precisa antes de mostrar resultados.

### Componentes obligatorios
- Header
- Buscador grande con autocompletado
- Campo ubicación
- Sugerencias recientes
- Categorías frecuentes
- Chips de filtros populares
- CTA para activar Radar si no encuentra resultados

### Acciones obligatorias
- Escribir búsqueda
- Elegir categoría
- Elegir ubicación
- Ejecutar búsqueda
- Guardar búsqueda

### Navegación siguiente permitida
- `/buscar/resultados`
- `/radar`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P002: Pantalla de búsqueda inicial.
Ruta frontend: /buscar.
Rol principal: Usuario visitante.
Objetivo de la pantalla: Guiar al usuario para construir una búsqueda precisa antes de mostrar resultados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Header; Buscador grande con autocompletado; Campo ubicación; Sugerencias recientes; Categorías frecuentes; Chips de filtros populares; CTA para activar Radar si no encuentra resultados.
Acciones obligatorias: Escribir búsqueda; Elegir categoría; Elegir ubicación; Ejecutar búsqueda; Guardar búsqueda.
Navegación siguiente permitida: /buscar/resultados; /radar.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P003. Resultados con lista y mapa tipo Yelp

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/buscar/resultados`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar publicaciones y perfiles con lógica de directorio local y marketplace, combinando lista, mapa y filtros.

### Componentes obligatorios
- Header compacto
- Panel izquierdo de filtros
- Lista de cards con foto, rating, verificación, precio, ubicación, disponibilidad y CTA
- Mapa lateral con pins
- Ordenamiento
- Paginación
- CTA flotante WhatsApp/Radar

### Acciones obligatorias
- Filtrar
- Ordenar
- Ver detalle
- Guardar favorito
- Comparar
- Cotizar
- Contactar WhatsApp
- Activar alerta

### Navegación siguiente permitida
- `/anuncios/:id`
- `/comparador`
- `/cotizar/:id`
- `/radar`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P003: Resultados con lista y mapa tipo Yelp.
Ruta frontend: /buscar/resultados.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar publicaciones y perfiles con lógica de directorio local y marketplace, combinando lista, mapa y filtros..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Header compacto; Panel izquierdo de filtros; Lista de cards con foto, rating, verificación, precio, ubicación, disponibilidad y CTA; Mapa lateral con pins; Ordenamiento; Paginación; CTA flotante WhatsApp/Radar.
Acciones obligatorias: Filtrar; Ordenar; Ver detalle; Guardar favorito; Comparar; Cotizar; Contactar WhatsApp; Activar alerta.
Navegación siguiente permitida: /anuncios/:id; /comparador; /cotizar/:id; /radar.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P004. Índice de categorías agrícolas

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/categorias`
- **Rol principal:** Usuario visitante
- **Objetivo:** Mostrar todas las categorías principales y subcategorías del marketplace agrícola.

### Componentes obligatorios
- Grid de categorías
- Íconos agrícolas
- Contador de publicaciones por categoría
- Subcategorías visibles
- CTA buscar en categoría
- Bloques destacados por temporada

### Acciones obligatorias
- Entrar a categoría
- Ver subcategoría
- Buscar
- Publicar en categoría

### Navegación siguiente permitida
- `/categorias/:slug`
- `/publicar`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P004: Índice de categorías agrícolas.
Ruta frontend: /categorias.
Rol principal: Usuario visitante.
Objetivo de la pantalla: Mostrar todas las categorías principales y subcategorías del marketplace agrícola..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Grid de categorías; Íconos agrícolas; Contador de publicaciones por categoría; Subcategorías visibles; CTA buscar en categoría; Bloques destacados por temporada.
Acciones obligatorias: Entrar a categoría; Ver subcategoría; Buscar; Publicar en categoría.
Navegación siguiente permitida: /categorias/:slug; /publicar.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P005. Landing de categoría agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/categorias/:slug`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Presentar una categoría con filtros, destacados, subcategorías y resultados.

### Componentes obligatorios
- Hero de categoría
- Descripción SEO
- Subcategorías
- Filtros específicos
- Cards de publicaciones
- Tiendas/proveedores relacionados
- Preguntas frecuentes
- CTA Radar

### Acciones obligatorias
- Filtrar
- Ver detalle
- Cotizar
- Guardar
- Activar Radar

### Navegación siguiente permitida
- `/buscar/resultados`
- `/anuncios/:id`
- `/radar`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P005: Landing de categoría agrícola.
Ruta frontend: /categorias/:slug.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Presentar una categoría con filtros, destacados, subcategorías y resultados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Hero de categoría; Descripción SEO; Subcategorías; Filtros específicos; Cards de publicaciones; Tiendas/proveedores relacionados; Preguntas frecuentes; CTA Radar.
Acciones obligatorias: Filtrar; Ver detalle; Cotizar; Guardar; Activar Radar.
Navegación siguiente permitida: /buscar/resultados; /anuncios/:id; /radar.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P006. Ofertas y promociones

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/ofertas`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar publicaciones promocionadas, descuentos, publicaciones destacadas y campañas comerciales.

### Componentes obligatorios
- Header
- Banner de ofertas
- Filtros por categoría
- Cards con etiqueta oferta
- Cuenta regresiva opcional
- Bloque promociones de tiendas
- CTA cotizar

### Acciones obligatorias
- Ver oferta
- Cotizar
- Guardar
- Compartir
- Ir a tienda

### Navegación siguiente permitida
- `/anuncios/:id`
- `/tiendas/:slug`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P006: Ofertas y promociones.
Ruta frontend: /ofertas.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar publicaciones promocionadas, descuentos, publicaciones destacadas y campañas comerciales..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Header; Banner de ofertas; Filtros por categoría; Cards con etiqueta oferta; Cuenta regresiva opcional; Bloque promociones de tiendas; CTA cotizar.
Acciones obligatorias: Ver oferta; Cotizar; Guardar; Compartir; Ir a tienda.
Navegación siguiente permitida: /anuncios/:id; /tiendas/:slug.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P007. Landing pública Radar Agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/radar`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Explicar el Radar Agrícola y permitir crear una alerta de búsqueda.

### Componentes obligatorios
- Hero Radar
- Explicación en pasos
- Formulario rápido: categoría, producto, ubicación, precio, volumen
- Beneficios
- Ejemplos de alertas
- Planes si aplica

### Acciones obligatorias
- Crear alerta
- Ingresar para guardar
- Ver planes
- Contactar soporte

### Navegación siguiente permitida
- `/radar/crear`
- `/login`
- `/planes`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P007: Landing pública Radar Agrícola.
Ruta frontend: /radar.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Explicar el Radar Agrícola y permitir crear una alerta de búsqueda..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Hero Radar; Explicación en pasos; Formulario rápido: categoría, producto, ubicación, precio, volumen; Beneficios; Ejemplos de alertas; Planes si aplica.
Acciones obligatorias: Crear alerta; Ingresar para guardar; Ver planes; Contactar soporte.
Navegación siguiente permitida: /radar/crear; /login; /planes.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P008. Planes y monetización

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/planes`
- **Rol principal:** Usuario visitante / Vendedor / Proveedor
- **Objetivo:** Comparar planes gratuitos y pagos para publicar, destacar, activar Radar o acceder a funcionalidades avanzadas.

### Componentes obligatorios
- Cards de planes
- Tabla comparativa
- Beneficios por rol
- Preguntas frecuentes
- CTA contratar
- Garantías y soporte

### Acciones obligatorias
- Seleccionar plan
- Registrarse
- Solicitar asesor comercial

### Navegación siguiente permitida
- `/registro`
- `/checkout-plan`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P008: Planes y monetización.
Ruta frontend: /planes.
Rol principal: Usuario visitante / Vendedor / Proveedor.
Objetivo de la pantalla: Comparar planes gratuitos y pagos para publicar, destacar, activar Radar o acceder a funcionalidades avanzadas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Cards de planes; Tabla comparativa; Beneficios por rol; Preguntas frecuentes; CTA contratar; Garantías y soporte.
Acciones obligatorias: Seleccionar plan; Registrarse; Solicitar asesor comercial.
Navegación siguiente permitida: /registro; /checkout-plan.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P009. Centro de ayuda

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/ayuda`
- **Rol principal:** Usuario visitante / Todos los roles
- **Objetivo:** Centralizar guías de uso, preguntas frecuentes y acceso a soporte.

### Componentes obligatorios
- Buscador de ayuda
- Categorías de ayuda
- Artículos destacados
- Guías por rol
- CTA abrir ticket
- CTA WhatsApp soporte

### Acciones obligatorias
- Buscar ayuda
- Abrir artículo
- Crear ticket
- Contactar WhatsApp

### Navegación siguiente permitida
- `/ayuda/:slug`
- `/soporte/ticket`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P009: Centro de ayuda.
Ruta frontend: /ayuda.
Rol principal: Usuario visitante / Todos los roles.
Objetivo de la pantalla: Centralizar guías de uso, preguntas frecuentes y acceso a soporte..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Buscador de ayuda; Categorías de ayuda; Artículos destacados; Guías por rol; CTA abrir ticket; CTA WhatsApp soporte.
Acciones obligatorias: Buscar ayuda; Abrir artículo; Crear ticket; Contactar WhatsApp.
Navegación siguiente permitida: /ayuda/:slug; /soporte/ticket.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P010. Blog agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/blog`
- **Rol principal:** Usuario visitante
- **Objetivo:** Mostrar contenido educativo y SEO sobre mercado agrícola, productos, fincas, insumos y servicios.

### Componentes obligatorios
- Hero blog
- Categorías de artículos
- Listado de posts
- Posts destacados
- Newsletter
- Tags

### Acciones obligatorias
- Leer artículo
- Filtrar por tema
- Compartir

### Navegación siguiente permitida
- `/blog/:slug`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P010: Blog agrícola.
Ruta frontend: /blog.
Rol principal: Usuario visitante.
Objetivo de la pantalla: Mostrar contenido educativo y SEO sobre mercado agrícola, productos, fincas, insumos y servicios..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Hero blog; Categorías de artículos; Listado de posts; Posts destacados; Newsletter; Tags.
Acciones obligatorias: Leer artículo; Filtrar por tema; Compartir.
Navegación siguiente permitida: /blog/:slug.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P011. Detalle de artículo

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/blog/:slug`
- **Rol principal:** Usuario visitante
- **Objetivo:** Mostrar una entrada de blog con estructura legible, CTA comerciales y enlaces internos.

### Componentes obligatorios
- Título
- Imagen principal
- Autor/fecha
- Contenido
- Tabla de contenido
- Artículos relacionados
- CTA publicar/buscar/Radar

### Acciones obligatorias
- Compartir
- Ir a categoría
- Activar Radar

### Navegación siguiente permitida
- `/categorias/:slug`
- `/radar`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P011: Detalle de artículo.
Ruta frontend: /blog/:slug.
Rol principal: Usuario visitante.
Objetivo de la pantalla: Mostrar una entrada de blog con estructura legible, CTA comerciales y enlaces internos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Título; Imagen principal; Autor/fecha; Contenido; Tabla de contenido; Artículos relacionados; CTA publicar/buscar/Radar.
Acciones obligatorias: Compartir; Ir a categoría; Activar Radar.
Navegación siguiente permitida: /categorias/:slug; /radar.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P012. Directorio agrícola tipo Yelp

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/directorio`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar perfiles públicos de tiendas, productores, proveedores, laboratorios, certificadores e inspectores.

### Componentes obligatorios
- Buscador por nombre/servicio
- Filtro por rol
- Filtro por ubicación
- Cards con rating y verificación
- Mapa lateral
- CTA visitar perfil

### Acciones obligatorias
- Filtrar
- Ver perfil
- Contactar
- Guardar

### Navegación siguiente permitida
- `/tiendas/:slug`
- `/productores/:slug`
- `/proveedores/:slug`
- `/laboratorios/:slug`
- `/certificadores/:slug`
- `/inspectores/:slug`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P012: Directorio agrícola tipo Yelp.
Ruta frontend: /directorio.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar perfiles públicos de tiendas, productores, proveedores, laboratorios, certificadores e inspectores..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Buscador por nombre/servicio; Filtro por rol; Filtro por ubicación; Cards con rating y verificación; Mapa lateral; CTA visitar perfil.
Acciones obligatorias: Filtrar; Ver perfil; Contactar; Guardar.
Navegación siguiente permitida: /tiendas/:slug; /productores/:slug; /proveedores/:slug; /laboratorios/:slug; /certificadores/:slug; /inspectores/:slug.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P013. Perfil público de tienda o vendedor

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/tiendas/:slug`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar perfil público tipo Yelp/MercadoLibre con reputación, catálogo y contacto.

### Componentes obligatorios
- Portada
- Logo
- Nombre
- Rating
- Badges
- Datos de contacto
- Tabs: publicaciones, ofertas, reseñas, preguntas, ubicación, documentos
- Galería
- Mapa
- CTA WhatsApp/Cotizar

### Acciones obligatorias
- Ver publicación
- Cotizar
- Preguntar
- Guardar tienda
- Compartir
- Reportar

### Navegación siguiente permitida
- `/anuncios/:id`
- `/cotizar/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P013: Perfil público de tienda o vendedor.
Ruta frontend: /tiendas/:slug.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar perfil público tipo Yelp/MercadoLibre con reputación, catálogo y contacto..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Portada; Logo; Nombre; Rating; Badges; Datos de contacto; Tabs: publicaciones, ofertas, reseñas, preguntas, ubicación, documentos; Galería; Mapa; CTA WhatsApp/Cotizar.
Acciones obligatorias: Ver publicación; Cotizar; Preguntar; Guardar tienda; Compartir; Reportar.
Navegación siguiente permitida: /anuncios/:id; /cotizar/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P014. Perfil público de productor agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/productores/:slug`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar información del productor, cosechas disponibles, certificaciones, ubicación y reputación.

### Componentes obligatorios
- Portada agrícola
- Datos del productor
- Cosechas disponibles
- Certificaciones
- Reseñas
- Mapa de zona aproximada
- CTA cotizar/WhatsApp

### Acciones obligatorias
- Ver cosecha
- Cotizar
- Contactar
- Guardar
- Reportar

### Navegación siguiente permitida
- `/productos-agricolas/:id`
- `/cotizar/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P014: Perfil público de productor agrícola.
Ruta frontend: /productores/:slug.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar información del productor, cosechas disponibles, certificaciones, ubicación y reputación..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Portada agrícola; Datos del productor; Cosechas disponibles; Certificaciones; Reseñas; Mapa de zona aproximada; CTA cotizar/WhatsApp.
Acciones obligatorias: Ver cosecha; Cotizar; Contactar; Guardar; Reportar.
Navegación siguiente permitida: /productos-agricolas/:id; /cotizar/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P015. Perfil público de proveedor

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/proveedores/:slug`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar catálogo de proveedor de insumos o maquinaria con reputación, productos y condiciones comerciales.

### Componentes obligatorios
- Portada
- Logo
- Rating
- Catálogo
- Ofertas
- Reseñas
- Ubicación
- Preguntas
- CTA cotizar

### Acciones obligatorias
- Ver producto
- Cotizar
- Preguntar
- Guardar proveedor

### Navegación siguiente permitida
- `/insumos-agricolas/:id`
- `/maquinaria-agricola/:id`
- `/cotizar/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P015: Perfil público de proveedor.
Ruta frontend: /proveedores/:slug.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar catálogo de proveedor de insumos o maquinaria con reputación, productos y condiciones comerciales..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Portada; Logo; Rating; Catálogo; Ofertas; Reseñas; Ubicación; Preguntas; CTA cotizar.
Acciones obligatorias: Ver producto; Cotizar; Preguntar; Guardar proveedor.
Navegación siguiente permitida: /insumos-agricolas/:id; /maquinaria-agricola/:id; /cotizar/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P016. Detalle genérico de publicación

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/anuncios/:id`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Plantilla base para cualquier publicación del marketplace.

### Componentes obligatorios
- Galería
- Título
- Precio
- Unidad
- Ubicación
- Vendedor
- Rating
- Ficha técnica
- Descripción
- Preguntas
- Anuncios similares
- CTA fijo cotizar/WhatsApp

### Acciones obligatorias
- Cotizar
- Preguntar
- Guardar
- Comparar
- Compartir
- Reportar

### Navegación siguiente permitida
- `/cotizar/:id`
- `/comparador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P016: Detalle genérico de publicación.
Ruta frontend: /anuncios/:id.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Plantilla base para cualquier publicación del marketplace..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Galería; Título; Precio; Unidad; Ubicación; Vendedor; Rating; Ficha técnica; Descripción; Preguntas; Anuncios similares; CTA fijo cotizar/WhatsApp.
Acciones obligatorias: Cotizar; Preguntar; Guardar; Comparar; Compartir; Reportar.
Navegación siguiente permitida: /cotizar/:id; /comparador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P017. Detalle de producto agrícola o cosecha

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/productos-agricolas/:id`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar cosecha o producto agrícola con volumen, calidad, fecha de cosecha y condiciones de entrega.

### Componentes obligatorios
- Galería
- Precio por unidad
- Volumen disponible
- Calidad/calibre
- Certificaciones
- Fecha de cosecha
- Empaque
- Productor
- Mapa
- Cotización
- Transporte sugerido

### Acciones obligatorias
- Solicitar cotización
- Contactar productor
- Solicitar transporte
- Guardar
- Comparar

### Navegación siguiente permitida
- `/cotizar/:id`
- `/transporte-agricola/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P017: Detalle de producto agrícola o cosecha.
Ruta frontend: /productos-agricolas/:id.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar cosecha o producto agrícola con volumen, calidad, fecha de cosecha y condiciones de entrega..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Galería; Precio por unidad; Volumen disponible; Calidad/calibre; Certificaciones; Fecha de cosecha; Empaque; Productor; Mapa; Cotización; Transporte sugerido.
Acciones obligatorias: Solicitar cotización; Contactar productor; Solicitar transporte; Guardar; Comparar.
Navegación siguiente permitida: /cotizar/:id; /transporte-agricola/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P018. Detalle de finca, lote o predio agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/fincas-agricolas/:id`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar predio agrícola con área, agua, riego, acceso, infraestructura, documentos y visita.

### Componentes obligatorios
- Galería
- Precio venta/arriendo
- Área
- Uso actual
- Agua/riego/drenaje
- Infraestructura
- Documentos
- Mapa
- Propietario
- CTA visita/cotización

### Acciones obligatorias
- Agendar visita
- Cotizar
- Contactar propietario
- Guardar
- Compartir

### Navegación siguiente permitida
- `/cotizar/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P018: Detalle de finca, lote o predio agrícola.
Ruta frontend: /fincas-agricolas/:id.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar predio agrícola con área, agua, riego, acceso, infraestructura, documentos y visita..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Galería; Precio venta/arriendo; Área; Uso actual; Agua/riego/drenaje; Infraestructura; Documentos; Mapa; Propietario; CTA visita/cotización.
Acciones obligatorias: Agendar visita; Cotizar; Contactar propietario; Guardar; Compartir.
Navegación siguiente permitida: /cotizar/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P019. Detalle de insumo agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/insumos-agricolas/:id`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar insumo con ficha técnica, uso recomendado, inventario, precio y proveedor.

### Componentes obligatorios
- Imagen
- Precio
- Presentación
- Marca
- Ficha técnica
- Hoja de seguridad
- Cultivos recomendados
- Inventario
- Proveedor
- Preguntas
- Cotizar

### Acciones obligatorias
- Cotizar
- Preguntar
- Guardar
- Comparar
- Ir a proveedor

### Navegación siguiente permitida
- `/cotizar/:id`
- `/proveedores/:slug`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P019: Detalle de insumo agrícola.
Ruta frontend: /insumos-agricolas/:id.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar insumo con ficha técnica, uso recomendado, inventario, precio y proveedor..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Imagen; Precio; Presentación; Marca; Ficha técnica; Hoja de seguridad; Cultivos recomendados; Inventario; Proveedor; Preguntas; Cotizar.
Acciones obligatorias: Cotizar; Preguntar; Guardar; Comparar; Ir a proveedor.
Navegación siguiente permitida: /cotizar/:id; /proveedores/:slug.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P020. Detalle de maquinaria agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/maquinaria-agricola/:id`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar equipo nuevo, usado o en alquiler con ficha técnica, estado, precio y cotización.

### Componentes obligatorios
- Galería
- Precio venta/alquiler
- Marca/modelo/año
- Estado
- Horas de uso
- Capacidad
- Ficha técnica
- Proveedor
- Inspección
- Cotizar

### Acciones obligatorias
- Cotizar
- Solicitar inspección
- Contactar proveedor
- Guardar
- Comparar

### Navegación siguiente permitida
- `/cotizar/:id`
- `/inspectores/:slug`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P020: Detalle de maquinaria agrícola.
Ruta frontend: /maquinaria-agricola/:id.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar equipo nuevo, usado o en alquiler con ficha técnica, estado, precio y cotización..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Galería; Precio venta/alquiler; Marca/modelo/año; Estado; Horas de uso; Capacidad; Ficha técnica; Proveedor; Inspección; Cotizar.
Acciones obligatorias: Cotizar; Solicitar inspección; Contactar proveedor; Guardar; Comparar.
Navegación siguiente permitida: /cotizar/:id; /inspectores/:slug.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P021. Detalle de servicio agronómico

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/servicios-agronomicos/:id`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar servicio técnico con especialidad, cobertura, agenda, documentos y reseñas.

### Componentes obligatorios
- Perfil del asesor
- Servicio
- Tarifa
- Cobertura
- Agenda
- Certificaciones
- Reseñas
- CTA solicitar visita

### Acciones obligatorias
- Solicitar servicio
- Cotizar
- Contactar WhatsApp
- Guardar asesor

### Navegación siguiente permitida
- `/cotizar/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P021: Detalle de servicio agronómico.
Ruta frontend: /servicios-agronomicos/:id.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar servicio técnico con especialidad, cobertura, agenda, documentos y reseñas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Perfil del asesor; Servicio; Tarifa; Cobertura; Agenda; Certificaciones; Reseñas; CTA solicitar visita.
Acciones obligatorias: Solicitar servicio; Cotizar; Contactar WhatsApp; Guardar asesor.
Navegación siguiente permitida: /cotizar/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P022. Detalle de servicio de transporte agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/transporte-agricola/:id`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar servicio logístico, rutas, capacidad, condiciones de conservación y cotización.

### Componentes obligatorios
- Vehículo
- Rutas
- Capacidad
- Tipo de carga
- Refrigerado/carga seca
- Documentos
- Rating
- CTA cotizar ruta

### Acciones obligatorias
- Cotizar transporte
- Contactar
- Guardar
- Ver rutas

### Navegación siguiente permitida
- `/cotizar/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P022: Detalle de servicio de transporte agrícola.
Ruta frontend: /transporte-agricola/:id.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar servicio logístico, rutas, capacidad, condiciones de conservación y cotización..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Vehículo; Rutas; Capacidad; Tipo de carga; Refrigerado/carga seca; Documentos; Rating; CTA cotizar ruta.
Acciones obligatorias: Cotizar transporte; Contactar; Guardar; Ver rutas.
Navegación siguiente permitida: /cotizar/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P023. Perfil público de laboratorio agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/laboratorios/:slug`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar servicios de análisis de suelo, foliar, agua y calidad.

### Componentes obligatorios
- Portada
- Servicios
- Acreditaciones
- Muestras
- Tiempos de entrega
- Reseñas
- CTA solicitar análisis

### Acciones obligatorias
- Solicitar análisis
- Cotizar
- Contactar
- Guardar

### Navegación siguiente permitida
- `/cotizar/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P023: Perfil público de laboratorio agrícola.
Ruta frontend: /laboratorios/:slug.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar servicios de análisis de suelo, foliar, agua y calidad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Portada; Servicios; Acreditaciones; Muestras; Tiempos de entrega; Reseñas; CTA solicitar análisis.
Acciones obligatorias: Solicitar análisis; Cotizar; Contactar; Guardar.
Navegación siguiente permitida: /cotizar/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P024. Perfil público de certificador agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/certificadores/:slug`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar servicios de certificación, normas, auditorías y documentos emitidos.

### Componentes obligatorios
- Portada
- Tipos de certificación
- Normas
- Cobertura
- Agenda
- Reseñas
- CTA solicitar certificación

### Acciones obligatorias
- Solicitar certificación
- Cotizar
- Contactar

### Navegación siguiente permitida
- `/cotizar/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P024: Perfil público de certificador agrícola.
Ruta frontend: /certificadores/:slug.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar servicios de certificación, normas, auditorías y documentos emitidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Portada; Tipos de certificación; Normas; Cobertura; Agenda; Reseñas; CTA solicitar certificación.
Acciones obligatorias: Solicitar certificación; Cotizar; Contactar.
Navegación siguiente permitida: /cotizar/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P025. Perfil público de inspector de calidad

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/inspectores/:slug`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar servicios de inspección, calidad, empaque, calibre y reportes.

### Componentes obligatorios
- Portada
- Servicios de inspección
- Especialidades
- Cobertura
- Agenda
- Reportes ejemplo
- Reseñas
- CTA solicitar inspección

### Acciones obligatorias
- Solicitar inspección
- Cotizar
- Contactar

### Navegación siguiente permitida
- `/cotizar/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P025: Perfil público de inspector de calidad.
Ruta frontend: /inspectores/:slug.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar servicios de inspección, calidad, empaque, calibre y reportes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Portada; Servicios de inspección; Especialidades; Cobertura; Agenda; Reportes ejemplo; Reseñas; CTA solicitar inspección.
Acciones obligatorias: Solicitar inspección; Cotizar; Contactar.
Navegación siguiente permitida: /cotizar/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P026. Preguntas y respuestas de publicación

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/preguntas/:anuncioId`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Permitir preguntas públicas antes de cotizar, similar a marketplace.

### Componentes obligatorios
- Lista de preguntas
- Formulario pregunta
- Estado pendiente/respondida
- Aviso de login si no autenticado
- Respuestas del vendedor

### Acciones obligatorias
- Preguntar
- Responder si es dueño
- Reportar pregunta

### Navegación siguiente permitida
- `/login`
- `/anuncios/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P026: Preguntas y respuestas de publicación.
Ruta frontend: /preguntas/:anuncioId.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Permitir preguntas públicas antes de cotizar, similar a marketplace..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Lista de preguntas; Formulario pregunta; Estado pendiente/respondida; Aviso de login si no autenticado; Respuestas del vendedor.
Acciones obligatorias: Preguntar; Responder si es dueño; Reportar pregunta.
Navegación siguiente permitida: /login; /anuncios/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P027. Solicitud de cotización

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/cotizar/:id`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Recolectar cantidad, unidad, fecha, lugar de entrega, observaciones y enviar solicitud comercial.

### Componentes obligatorios
- Resumen de publicación
- Formulario cantidad/unidad
- Fecha requerida
- Lugar de entrega
- Observaciones
- Adjuntos
- Datos de contacto
- Confirmación

### Acciones obligatorias
- Enviar cotización
- Guardar borrador
- Cancelar
- Contactar WhatsApp

### Navegación siguiente permitida
- `/app/comprador/cotizaciones`
- `/login`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P027: Solicitud de cotización.
Ruta frontend: /cotizar/:id.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Recolectar cantidad, unidad, fecha, lugar de entrega, observaciones y enviar solicitud comercial..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Resumen de publicación; Formulario cantidad/unidad; Fecha requerida; Lugar de entrega; Observaciones; Adjuntos; Datos de contacto; Confirmación.
Acciones obligatorias: Enviar cotización; Guardar borrador; Cancelar; Contactar WhatsApp.
Navegación siguiente permitida: /app/comprador/cotizaciones; /login.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P028. Confirmación de contacto WhatsApp

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/contacto-whatsapp/:id`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Mostrar transición controlada antes de abrir WhatsApp y registrar intención de contacto.

### Componentes obligatorios
- Resumen del anuncio
- Mensaje prellenado visible
- Aviso de registro de lead
- Botón abrir WhatsApp
- Alternativa cotizar formal

### Acciones obligatorias
- Abrir WhatsApp
- Cotizar formalmente
- Volver

### Navegación siguiente permitida
- `/cotizar/:id`
- `/anuncios/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P028: Confirmación de contacto WhatsApp.
Ruta frontend: /contacto-whatsapp/:id.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Mostrar transición controlada antes de abrir WhatsApp y registrar intención de contacto..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Resumen del anuncio; Mensaje prellenado visible; Aviso de registro de lead; Botón abrir WhatsApp; Alternativa cotizar formal.
Acciones obligatorias: Abrir WhatsApp; Cotizar formalmente; Volver.
Navegación siguiente permitida: /cotizar/:id; /anuncios/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P029. Favoritos para visitante

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/favoritos-publico`
- **Rol principal:** Usuario visitante
- **Objetivo:** Invitar al visitante a iniciar sesión para guardar favoritos.

### Componentes obligatorios
- Lista temporal si existe
- Mensaje de beneficio
- CTA crear cuenta
- CTA ingresar

### Acciones obligatorias
- Registrarse
- Ingresar
- Volver a resultados

### Navegación siguiente permitida
- `/registro`
- `/login`
- `/buscar/resultados`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P029: Favoritos para visitante.
Ruta frontend: /favoritos-publico.
Rol principal: Usuario visitante.
Objetivo de la pantalla: Invitar al visitante a iniciar sesión para guardar favoritos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Lista temporal si existe; Mensaje de beneficio; CTA crear cuenta; CTA ingresar.
Acciones obligatorias: Registrarse; Ingresar; Volver a resultados.
Navegación siguiente permitida: /registro; /login; /buscar/resultados.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P030. Comparador agrícola

- **Etapa:** ETAPA 01 — Sitio público, marketplace y flujo tipo Yelp/MercadoLibre
- **Ruta:** `/comparador`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Comparar productos, fincas, insumos, maquinaria, servicios o transporte.

### Componentes obligatorios
- Tabla comparativa
- Columnas por anuncio
- Atributos dinámicos
- Rating
- Precio
- Ubicación
- CTA cotizar cada opción
- Eliminar del comparador

### Acciones obligatorias
- Cotizar
- Eliminar
- Guardar lista
- Compartir

### Navegación siguiente permitida
- `/cotizar/:id`
- `/buscar/resultados`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P030: Comparador agrícola.
Ruta frontend: /comparador.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Comparar productos, fincas, insumos, maquinaria, servicios o transporte..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Tabla comparativa; Columnas por anuncio; Atributos dinámicos; Rating; Precio; Ubicación; CTA cotizar cada opción; Eliminar del comparador.
Acciones obligatorias: Cotizar; Eliminar; Guardar lista; Compartir.
Navegación siguiente permitida: /cotizar/:id; /buscar/resultados.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P031. Inicio de sesión

- **Etapa:** ETAPA 02 — Autenticación, registro y onboarding por rol
- **Ruta:** `/login`
- **Rol principal:** Todos los roles
- **Objetivo:** Permitir acceso seguro al sistema.

### Componentes obligatorios
- Card centrada
- Email/teléfono
- Contraseña
- Recordarme
- Recuperar contraseña
- Acceso Google opcional
- CTA registro
- Imagen lateral agrícola

### Acciones obligatorias
- Ingresar
- Recuperar contraseña
- Crear cuenta

### Navegación siguiente permitida
- `/app`
- `/recuperar-contrasena`
- `/registro`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P031: Inicio de sesión.
Ruta frontend: /login.
Rol principal: Todos los roles.
Objetivo de la pantalla: Permitir acceso seguro al sistema..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Card centrada; Email/teléfono; Contraseña; Recordarme; Recuperar contraseña; Acceso Google opcional; CTA registro; Imagen lateral agrícola.
Acciones obligatorias: Ingresar; Recuperar contraseña; Crear cuenta.
Navegación siguiente permitida: /app; /recuperar-contrasena; /registro.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P032. Registro de usuario

- **Etapa:** ETAPA 02 — Autenticación, registro y onboarding por rol
- **Ruta:** `/registro`
- **Rol principal:** Usuario visitante
- **Objetivo:** Crear cuenta inicial antes de elegir rol y completar onboarding.

### Componentes obligatorios
- Formulario nombre
- Correo
- Teléfono/WhatsApp
- Contraseña
- Aceptación legal
- CTA continuar

### Acciones obligatorias
- Crear cuenta
- Ir a login

### Navegación siguiente permitida
- `/onboarding/rol`
- `/login`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P032: Registro de usuario.
Ruta frontend: /registro.
Rol principal: Usuario visitante.
Objetivo de la pantalla: Crear cuenta inicial antes de elegir rol y completar onboarding..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario nombre; Correo; Teléfono/WhatsApp; Contraseña; Aceptación legal; CTA continuar.
Acciones obligatorias: Crear cuenta; Ir a login.
Navegación siguiente permitida: /onboarding/rol; /login.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P033. Recuperar contraseña

- **Etapa:** ETAPA 02 — Autenticación, registro y onboarding por rol
- **Ruta:** `/recuperar-contrasena`
- **Rol principal:** Todos los roles
- **Objetivo:** Permitir solicitar enlace o código para recuperar acceso.

### Componentes obligatorios
- Campo correo/teléfono
- Instrucciones
- CTA enviar
- Volver al login

### Acciones obligatorias
- Enviar recuperación
- Volver

### Navegación siguiente permitida
- `/login`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P033: Recuperar contraseña.
Ruta frontend: /recuperar-contrasena.
Rol principal: Todos los roles.
Objetivo de la pantalla: Permitir solicitar enlace o código para recuperar acceso..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Campo correo/teléfono; Instrucciones; CTA enviar; Volver al login.
Acciones obligatorias: Enviar recuperación; Volver.
Navegación siguiente permitida: /login.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P034. Verificación de cuenta

- **Etapa:** ETAPA 02 — Autenticación, registro y onboarding por rol
- **Ruta:** `/verificar-cuenta`
- **Rol principal:** Todos los roles
- **Objetivo:** Verificar correo, teléfono o WhatsApp.

### Componentes obligatorios
- Código de verificación
- Estado del envío
- Reenviar código
- CTA verificar

### Acciones obligatorias
- Verificar
- Reenviar
- Cambiar contacto

### Navegación siguiente permitida
- `/onboarding/rol`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P034: Verificación de cuenta.
Ruta frontend: /verificar-cuenta.
Rol principal: Todos los roles.
Objetivo de la pantalla: Verificar correo, teléfono o WhatsApp..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Código de verificación; Estado del envío; Reenviar código; CTA verificar.
Acciones obligatorias: Verificar; Reenviar; Cambiar contacto.
Navegación siguiente permitida: /onboarding/rol.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P035. Selección de rol vigente

- **Etapa:** ETAPA 02 — Autenticación, registro y onboarding por rol
- **Ruta:** `/onboarding/rol`
- **Rol principal:** Usuario registrado
- **Objetivo:** Permitir seleccionar solo uno de los roles vigentes aprobados.

### Componentes obligatorios
- Grid de roles vigentes
- Descripción breve de cada rol
- Advertencia de que el rol define el backoffice
- CTA continuar

### Acciones obligatorias
- Seleccionar rol
- Continuar

### Navegación siguiente permitida
- `/onboarding/perfil`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P035: Selección de rol vigente.
Ruta frontend: /onboarding/rol.
Rol principal: Usuario registrado.
Objetivo de la pantalla: Permitir seleccionar solo uno de los roles vigentes aprobados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Grid de roles vigentes; Descripción breve de cada rol; Advertencia de que el rol define el backoffice; CTA continuar.
Acciones obligatorias: Seleccionar rol; Continuar.
Navegación siguiente permitida: /onboarding/perfil.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P036. Datos base del perfil

- **Etapa:** ETAPA 02 — Autenticación, registro y onboarding por rol
- **Ruta:** `/onboarding/perfil`
- **Rol principal:** Usuario registrado
- **Objetivo:** Capturar datos personales o comerciales básicos según rol.

### Componentes obligatorios
- Formulario dinámico
- Nombre visible
- Tipo de documento/empresa
- Teléfono
- WhatsApp
- Correo
- Logo/foto
- Descripción

### Acciones obligatorias
- Guardar y continuar
- Volver

### Navegación siguiente permitida
- `/onboarding/ubicacion`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P036: Datos base del perfil.
Ruta frontend: /onboarding/perfil.
Rol principal: Usuario registrado.
Objetivo de la pantalla: Capturar datos personales o comerciales básicos según rol..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario dinámico; Nombre visible; Tipo de documento/empresa; Teléfono; WhatsApp; Correo; Logo/foto; Descripción.
Acciones obligatorias: Guardar y continuar; Volver.
Navegación siguiente permitida: /onboarding/ubicacion.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P037. Ubicación y cobertura

- **Etapa:** ETAPA 02 — Autenticación, registro y onboarding por rol
- **Ruta:** `/onboarding/ubicacion`
- **Rol principal:** Usuario registrado
- **Objetivo:** Configurar ubicación principal y zonas de operación.

### Componentes obligatorios
- País
- Departamento
- Municipio
- Vereda/zona
- Mapa
- Radio de cobertura
- Dirección aproximada

### Acciones obligatorias
- Guardar ubicación
- Continuar

### Navegación siguiente permitida
- `/onboarding/documentos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P037: Ubicación y cobertura.
Ruta frontend: /onboarding/ubicacion.
Rol principal: Usuario registrado.
Objetivo de la pantalla: Configurar ubicación principal y zonas de operación..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: País; Departamento; Municipio; Vereda/zona; Mapa; Radio de cobertura; Dirección aproximada.
Acciones obligatorias: Guardar ubicación; Continuar.
Navegación siguiente permitida: /onboarding/documentos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P038. Documentos y verificación inicial

- **Etapa:** ETAPA 02 — Autenticación, registro y onboarding por rol
- **Ruta:** `/onboarding/documentos`
- **Rol principal:** Usuario registrado
- **Objetivo:** Cargar documentos requeridos por rol, sin bloquear navegación si quedan pendientes.

### Componentes obligatorios
- Lista de documentos por rol
- Uploader
- Estados pendiente/aprobado/rechazado
- Aviso de privacidad
- CTA finalizar

### Acciones obligatorias
- Subir documento
- Omitir por ahora
- Finalizar

### Navegación siguiente permitida
- `/onboarding/completo`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P038: Documentos y verificación inicial.
Ruta frontend: /onboarding/documentos.
Rol principal: Usuario registrado.
Objetivo de la pantalla: Cargar documentos requeridos por rol, sin bloquear navegación si quedan pendientes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Lista de documentos por rol; Uploader; Estados pendiente/aprobado/rechazado; Aviso de privacidad; CTA finalizar.
Acciones obligatorias: Subir documento; Omitir por ahora; Finalizar.
Navegación siguiente permitida: /onboarding/completo.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P039. Onboarding completado

- **Etapa:** ETAPA 02 — Autenticación, registro y onboarding por rol
- **Ruta:** `/onboarding/completo`
- **Rol principal:** Usuario registrado
- **Objetivo:** Confirmar cuenta lista y enviar al dashboard correspondiente.

### Componentes obligatorios
- Mensaje de bienvenida
- Resumen del perfil
- Próximos pasos por rol
- CTA ir al panel
- CTA publicar o buscar

### Acciones obligatorias
- Ir a mi panel
- Publicar
- Buscar

### Navegación siguiente permitida
- `/app/:rol`
- `/publicar`
- `/buscar`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P039: Onboarding completado.
Ruta frontend: /onboarding/completo.
Rol principal: Usuario registrado.
Objetivo de la pantalla: Confirmar cuenta lista y enviar al dashboard correspondiente..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Mensaje de bienvenida; Resumen del perfil; Próximos pasos por rol; CTA ir al panel; CTA publicar o buscar.
Acciones obligatorias: Ir a mi panel; Publicar; Buscar.
Navegación siguiente permitida: /app/:rol; /publicar; /buscar.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P040. Seleccionar tipo de publicación

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar`
- **Rol principal:** Roles publicadores
- **Objetivo:** Iniciar publicación guiada seleccionando tipo de anuncio agrícola.

### Componentes obligatorios
- Cards: cosecha/producto, finca, insumo, maquinaria, servicio agronómico, transporte, laboratorio, certificación, inspección
- Explicación por tipo
- Requisitos por tipo
- CTA continuar

### Acciones obligatorias
- Seleccionar tipo
- Continuar

### Navegación siguiente permitida
- `/publicar/producto-agricola`
- `/publicar/finca`
- `/publicar/insumo`
- `/publicar/maquinaria`
- `/publicar/servicio-agronomico`
- `/publicar/transporte`
- `/publicar/laboratorio`
- `/publicar/certificacion`
- `/publicar/inspeccion`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P040: Seleccionar tipo de publicación.
Ruta frontend: /publicar.
Rol principal: Roles publicadores.
Objetivo de la pantalla: Iniciar publicación guiada seleccionando tipo de anuncio agrícola..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Cards: cosecha/producto, finca, insumo, maquinaria, servicio agronómico, transporte, laboratorio, certificación, inspección; Explicación por tipo; Requisitos por tipo; CTA continuar.
Acciones obligatorias: Seleccionar tipo; Continuar.
Navegación siguiente permitida: /publicar/producto-agricola; /publicar/finca; /publicar/insumo; /publicar/maquinaria; /publicar/servicio-agronomico; /publicar/transporte; /publicar/laboratorio; /publicar/certificacion; /publicar/inspeccion.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P041. Formulario publicar producto o cosecha

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/producto-agricola`
- **Rol principal:** Productor agrícola / Vendedor agrícola / Cooperativa agrícola
- **Objetivo:** Crear publicación de producto agrícola o cosecha disponible.

### Componentes obligatorios
- Wizard pasos
- Datos básicos
- Cultivo/variedad
- Volumen
- Unidad
- Calidad/calibre
- Precio
- Fecha cosecha
- Ubicación
- Certificaciones

### Acciones obligatorias
- Guardar borrador
- Continuar a multimedia
- Cancelar

### Navegación siguiente permitida
- `/publicar/multimedia`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P041: Formulario publicar producto o cosecha.
Ruta frontend: /publicar/producto-agricola.
Rol principal: Productor agrícola / Vendedor agrícola / Cooperativa agrícola.
Objetivo de la pantalla: Crear publicación de producto agrícola o cosecha disponible..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Wizard pasos; Datos básicos; Cultivo/variedad; Volumen; Unidad; Calidad/calibre; Precio; Fecha cosecha; Ubicación; Certificaciones.
Acciones obligatorias: Guardar borrador; Continuar a multimedia; Cancelar.
Navegación siguiente permitida: /publicar/multimedia.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P042. Formulario publicar finca o predio

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/finca`
- **Rol principal:** Dueño de finca agrícola / Productor agrícola / Cooperativa agrícola
- **Objetivo:** Crear publicación de finca, lote o predio agrícola.

### Componentes obligatorios
- Datos del predio
- Tipo operación venta/arriendo/alianza
- Área
- Ubicación
- Agua/riego/drenaje
- Infraestructura
- Precio
- Documentos

### Acciones obligatorias
- Guardar borrador
- Continuar a multimedia

### Navegación siguiente permitida
- `/publicar/multimedia`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P042: Formulario publicar finca o predio.
Ruta frontend: /publicar/finca.
Rol principal: Dueño de finca agrícola / Productor agrícola / Cooperativa agrícola.
Objetivo de la pantalla: Crear publicación de finca, lote o predio agrícola..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Datos del predio; Tipo operación venta/arriendo/alianza; Área; Ubicación; Agua/riego/drenaje; Infraestructura; Precio; Documentos.
Acciones obligatorias: Guardar borrador; Continuar a multimedia.
Navegación siguiente permitida: /publicar/multimedia.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P043. Formulario publicar insumo agrícola

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/insumo`
- **Rol principal:** Proveedor de insumos agrícolas / Vendedor agrícola
- **Objetivo:** Crear publicación de insumo agrícola con ficha técnica e inventario.

### Componentes obligatorios
- Datos producto
- Marca
- Presentación
- Unidad
- Uso recomendado
- Cultivos recomendados
- Inventario
- Precio
- Ficha técnica
- Hoja seguridad

### Acciones obligatorias
- Guardar borrador
- Continuar a multimedia

### Navegación siguiente permitida
- `/publicar/multimedia`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P043: Formulario publicar insumo agrícola.
Ruta frontend: /publicar/insumo.
Rol principal: Proveedor de insumos agrícolas / Vendedor agrícola.
Objetivo de la pantalla: Crear publicación de insumo agrícola con ficha técnica e inventario..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Datos producto; Marca; Presentación; Unidad; Uso recomendado; Cultivos recomendados; Inventario; Precio; Ficha técnica; Hoja seguridad.
Acciones obligatorias: Guardar borrador; Continuar a multimedia.
Navegación siguiente permitida: /publicar/multimedia.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P044. Formulario publicar maquinaria agrícola

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/maquinaria`
- **Rol principal:** Proveedor de maquinaria agrícola / Vendedor agrícola
- **Objetivo:** Crear publicación de maquinaria, equipo, herramienta o repuesto.

### Componentes obligatorios
- Tipo equipo
- Marca
- Modelo
- Año
- Estado
- Horas uso
- Venta/alquiler
- Precio
- Ficha técnica
- Ubicación

### Acciones obligatorias
- Guardar borrador
- Continuar a multimedia

### Navegación siguiente permitida
- `/publicar/multimedia`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P044: Formulario publicar maquinaria agrícola.
Ruta frontend: /publicar/maquinaria.
Rol principal: Proveedor de maquinaria agrícola / Vendedor agrícola.
Objetivo de la pantalla: Crear publicación de maquinaria, equipo, herramienta o repuesto..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Tipo equipo; Marca; Modelo; Año; Estado; Horas uso; Venta/alquiler; Precio; Ficha técnica; Ubicación.
Acciones obligatorias: Guardar borrador; Continuar a multimedia.
Navegación siguiente permitida: /publicar/multimedia.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P045. Formulario publicar servicio agronómico

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/servicio-agronomico`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Crear servicio profesional con cobertura y agenda.

### Componentes obligatorios
- Nombre servicio
- Especialidad
- Descripción
- Tarifa
- Cobertura
- Disponibilidad
- Documentos profesionales
- Certificaciones

### Acciones obligatorias
- Guardar borrador
- Continuar a multimedia

### Navegación siguiente permitida
- `/publicar/multimedia`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P045: Formulario publicar servicio agronómico.
Ruta frontend: /publicar/servicio-agronomico.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Crear servicio profesional con cobertura y agenda..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Nombre servicio; Especialidad; Descripción; Tarifa; Cobertura; Disponibilidad; Documentos profesionales; Certificaciones.
Acciones obligatorias: Guardar borrador; Continuar a multimedia.
Navegación siguiente permitida: /publicar/multimedia.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P046. Formulario publicar transporte agrícola

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/transporte`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Crear servicio de transporte agrícola con rutas, vehículo y capacidad.

### Componentes obligatorios
- Tipo vehículo
- Capacidad
- Tipo carga
- Rutas
- Tarifa
- Disponibilidad
- Documentos vehículo
- Condiciones conservación

### Acciones obligatorias
- Guardar borrador
- Continuar a multimedia

### Navegación siguiente permitida
- `/publicar/multimedia`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P046: Formulario publicar transporte agrícola.
Ruta frontend: /publicar/transporte.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Crear servicio de transporte agrícola con rutas, vehículo y capacidad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Tipo vehículo; Capacidad; Tipo carga; Rutas; Tarifa; Disponibilidad; Documentos vehículo; Condiciones conservación.
Acciones obligatorias: Guardar borrador; Continuar a multimedia.
Navegación siguiente permitida: /publicar/multimedia.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P047. Formulario publicar servicio de laboratorio

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/laboratorio`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Crear publicación de análisis de suelo, agua, foliar o calidad.

### Componentes obligatorios
- Servicio
- Tipo análisis
- Tiempo entrega
- Método
- Acreditación
- Precio referencial
- Cobertura
- Requisitos de muestra

### Acciones obligatorias
- Guardar borrador
- Continuar a multimedia

### Navegación siguiente permitida
- `/publicar/multimedia`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P047: Formulario publicar servicio de laboratorio.
Ruta frontend: /publicar/laboratorio.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Crear publicación de análisis de suelo, agua, foliar o calidad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Servicio; Tipo análisis; Tiempo entrega; Método; Acreditación; Precio referencial; Cobertura; Requisitos de muestra.
Acciones obligatorias: Guardar borrador; Continuar a multimedia.
Navegación siguiente permitida: /publicar/multimedia.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P048. Formulario publicar certificación agrícola

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/certificacion`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Crear publicación de servicio de certificación o auditoría.

### Componentes obligatorios
- Tipo certificación
- Norma
- Alcance
- Requisitos
- Duración
- Precio referencial
- Cobertura
- Documentos

### Acciones obligatorias
- Guardar borrador
- Continuar a multimedia

### Navegación siguiente permitida
- `/publicar/multimedia`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P048: Formulario publicar certificación agrícola.
Ruta frontend: /publicar/certificacion.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Crear publicación de servicio de certificación o auditoría..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Tipo certificación; Norma; Alcance; Requisitos; Duración; Precio referencial; Cobertura; Documentos.
Acciones obligatorias: Guardar borrador; Continuar a multimedia.
Navegación siguiente permitida: /publicar/multimedia.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P049. Formulario publicar inspección de calidad

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/inspeccion`
- **Rol principal:** Inspector de calidad
- **Objetivo:** Crear publicación de servicio de inspección, calidad, empaque o calibre.

### Componentes obligatorios
- Tipo inspección
- Cultivos atendidos
- Lugar de servicio
- Tarifa
- Cobertura
- Formato de reporte
- Disponibilidad

### Acciones obligatorias
- Guardar borrador
- Continuar a multimedia

### Navegación siguiente permitida
- `/publicar/multimedia`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P049: Formulario publicar inspección de calidad.
Ruta frontend: /publicar/inspeccion.
Rol principal: Inspector de calidad.
Objetivo de la pantalla: Crear publicación de servicio de inspección, calidad, empaque o calibre..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Tipo inspección; Cultivos atendidos; Lugar de servicio; Tarifa; Cobertura; Formato de reporte; Disponibilidad.
Acciones obligatorias: Guardar borrador; Continuar a multimedia.
Navegación siguiente permitida: /publicar/multimedia.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P050. Carga de fotos, videos y documentos

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/multimedia`
- **Rol principal:** Roles publicadores
- **Objetivo:** Subir recursos visuales y documentales para cualquier publicación.

### Componentes obligatorios
- Uploader de imágenes
- Uploader videos
- Uploader documentos
- Ordenar galería
- Marcar imagen principal
- Validaciones

### Acciones obligatorias
- Subir
- Eliminar
- Reordenar
- Continuar a vista previa

### Navegación siguiente permitida
- `/publicar/vista-previa`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P050: Carga de fotos, videos y documentos.
Ruta frontend: /publicar/multimedia.
Rol principal: Roles publicadores.
Objetivo de la pantalla: Subir recursos visuales y documentales para cualquier publicación..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Uploader de imágenes; Uploader videos; Uploader documentos; Ordenar galería; Marcar imagen principal; Validaciones.
Acciones obligatorias: Subir; Eliminar; Reordenar; Continuar a vista previa.
Navegación siguiente permitida: /publicar/vista-previa.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P051. Vista previa de publicación

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/vista-previa`
- **Rol principal:** Roles publicadores
- **Objetivo:** Revisar cómo se verá la publicación antes de enviarla.

### Componentes obligatorios
- Preview tipo detalle público
- Checklist de campos
- Errores pendientes
- Botones editar/enviar

### Acciones obligatorias
- Editar
- Enviar a revisión
- Guardar borrador

### Navegación siguiente permitida
- `/publicar/enviado`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P051: Vista previa de publicación.
Ruta frontend: /publicar/vista-previa.
Rol principal: Roles publicadores.
Objetivo de la pantalla: Revisar cómo se verá la publicación antes de enviarla..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Preview tipo detalle público; Checklist de campos; Errores pendientes; Botones editar/enviar.
Acciones obligatorias: Editar; Enviar a revisión; Guardar borrador.
Navegación siguiente permitida: /publicar/enviado.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P052. Publicación enviada a revisión

- **Etapa:** ETAPA 03 — Flujo de publicación guiada
- **Ruta:** `/publicar/enviado`
- **Rol principal:** Roles publicadores
- **Objetivo:** Confirmar envío y explicar próximos pasos.

### Componentes obligatorios
- Mensaje éxito
- Estado en revisión
- Tiempo estimado
- CTA ver mis anuncios
- CTA crear otra publicación

### Acciones obligatorias
- Ver mis anuncios
- Crear otra

### Navegación siguiente permitida
- `/app/:rol/publicaciones`
- `/publicar`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P052: Publicación enviada a revisión.
Ruta frontend: /publicar/enviado.
Rol principal: Roles publicadores.
Objetivo de la pantalla: Confirmar envío y explicar próximos pasos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Mensaje éxito; Estado en revisión; Tiempo estimado; CTA ver mis anuncios; CTA crear otra publicación.
Acciones obligatorias: Ver mis anuncios; Crear otra.
Navegación siguiente permitida: /app/:rol/publicaciones; /publicar.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P053. Dashboard comprador agrícola

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Centralizar búsquedas, favoritos, cotizaciones, Radar y recomendaciones del comprador.

### Componentes obligatorios
- Sidebar comprador
- Header con buscador
- KPIs: cotizaciones, favoritos, alertas, contactos
- Recomendaciones
- Últimas oportunidades
- Accesos rápidos
- Notificaciones

### Acciones obligatorias
- Buscar
- Crear alerta
- Ver cotizaciones
- Ver favoritos
- Comparar

### Navegación siguiente permitida
- `/app/comprador/busquedas`
- `/app/comprador/cotizaciones`
- `/app/comprador/favoritos`
- `/app/comprador/radar`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P053: Dashboard comprador agrícola.
Ruta frontend: /app/comprador.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Centralizar búsquedas, favoritos, cotizaciones, Radar y recomendaciones del comprador..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar comprador; Header con buscador; KPIs: cotizaciones, favoritos, alertas, contactos; Recomendaciones; Últimas oportunidades; Accesos rápidos; Notificaciones.
Acciones obligatorias: Buscar; Crear alerta; Ver cotizaciones; Ver favoritos; Comparar.
Navegación siguiente permitida: /app/comprador/busquedas; /app/comprador/cotizaciones; /app/comprador/favoritos; /app/comprador/radar.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P054. Perfil comprador

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador/perfil`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Gestionar datos personales, empresa opcional y preferencias agrícolas.

### Componentes obligatorios
- Formulario perfil
- Preferencias de compra
- Ubicación
- WhatsApp
- Documentos opcionales

### Acciones obligatorias
- Editar
- Guardar
- Ver perfil público si aplica

### Navegación siguiente permitida
- `/app/comprador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P054: Perfil comprador.
Ruta frontend: /app/comprador/perfil.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Gestionar datos personales, empresa opcional y preferencias agrícolas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Preferencias de compra; Ubicación; WhatsApp; Documentos opcionales.
Acciones obligatorias: Editar; Guardar; Ver perfil público si aplica.
Navegación siguiente permitida: /app/comprador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P055. Mis búsquedas guardadas

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador/busquedas`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Listar búsquedas guardadas y convertirlas en alertas Radar.

### Componentes obligatorios
- Tabla búsquedas
- Filtros
- Última ejecución
- Resultados nuevos
- Acciones

### Acciones obligatorias
- Ejecutar
- Editar
- Convertir en Radar
- Eliminar

### Navegación siguiente permitida
- `/buscar/resultados`
- `/app/comprador/radar`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P055: Mis búsquedas guardadas.
Ruta frontend: /app/comprador/busquedas.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Listar búsquedas guardadas y convertirlas en alertas Radar..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Tabla búsquedas; Filtros; Última ejecución; Resultados nuevos; Acciones.
Acciones obligatorias: Ejecutar; Editar; Convertir en Radar; Eliminar.
Navegación siguiente permitida: /buscar/resultados; /app/comprador/radar.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P056. Mis favoritos

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador/favoritos`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Organizar publicaciones, proveedores y perfiles guardados.

### Componentes obligatorios
- Tabs por tipo
- Cards favoritas
- Listas
- Acciones comparar/cotizar/eliminar

### Acciones obligatorias
- Cotizar
- Comparar
- Eliminar
- Compartir lista

### Navegación siguiente permitida
- `/comparador`
- `/cotizar/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P056: Mis favoritos.
Ruta frontend: /app/comprador/favoritos.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Organizar publicaciones, proveedores y perfiles guardados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Tabs por tipo; Cards favoritas; Listas; Acciones comparar/cotizar/eliminar.
Acciones obligatorias: Cotizar; Comparar; Eliminar; Compartir lista.
Navegación siguiente permitida: /comparador; /cotizar/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P057. Cotizaciones enviadas

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador/cotizaciones`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Gestionar solicitudes de cotización enviadas.

### Componentes obligatorios
- Tabla cotizaciones
- Estados
- Filtros
- Resumen proveedor/publicación
- Acciones

### Acciones obligatorias
- Ver detalle
- Cancelar
- Duplicar
- Contactar

### Navegación siguiente permitida
- `/app/comprador/cotizaciones/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P057: Cotizaciones enviadas.
Ruta frontend: /app/comprador/cotizaciones.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Gestionar solicitudes de cotización enviadas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Tabla cotizaciones; Estados; Filtros; Resumen proveedor/publicación; Acciones.
Acciones obligatorias: Ver detalle; Cancelar; Duplicar; Contactar.
Navegación siguiente permitida: /app/comprador/cotizaciones/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P058. Detalle de cotización enviada

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador/cotizaciones/:id`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Ver conversación, respuesta, negociación y documentos de una cotización.

### Componentes obligatorios
- Timeline
- Resumen solicitud
- Respuesta proveedor
- Mensajes
- Adjuntos
- Acciones aceptar/rechazar

### Acciones obligatorias
- Aceptar
- Rechazar
- Responder
- Abrir WhatsApp

### Navegación siguiente permitida
- `/app/comprador/cotizaciones`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P058: Detalle de cotización enviada.
Ruta frontend: /app/comprador/cotizaciones/:id.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Ver conversación, respuesta, negociación y documentos de una cotización..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Timeline; Resumen solicitud; Respuesta proveedor; Mensajes; Adjuntos; Acciones aceptar/rechazar.
Acciones obligatorias: Aceptar; Rechazar; Responder; Abrir WhatsApp.
Navegación siguiente permitida: /app/comprador/cotizaciones.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P059. Radar del comprador

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador/radar`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Gestionar alertas inteligentes del comprador.

### Componentes obligatorios
- KPIs alertas
- Tabla alertas
- Coincidencias
- Estados
- Botón nueva alerta

### Acciones obligatorias
- Crear
- Editar
- Pausar
- Renovar
- Ver coincidencias

### Navegación siguiente permitida
- `/app/comprador/radar/nuevo`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P059: Radar del comprador.
Ruta frontend: /app/comprador/radar.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Gestionar alertas inteligentes del comprador..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: KPIs alertas; Tabla alertas; Coincidencias; Estados; Botón nueva alerta.
Acciones obligatorias: Crear; Editar; Pausar; Renovar; Ver coincidencias.
Navegación siguiente permitida: /app/comprador/radar/nuevo.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P060. Crear alerta Radar comprador

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador/radar/nuevo`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Crear alerta de oportunidad agrícola con criterios detallados.

### Componentes obligatorios
- Wizard categoría
- Producto/cultivo
- Ubicación
- Precio
- Volumen
- Certificación
- Canal notificación

### Acciones obligatorias
- Guardar alerta
- Cancelar

### Navegación siguiente permitida
- `/app/comprador/radar`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P060: Crear alerta Radar comprador.
Ruta frontend: /app/comprador/radar/nuevo.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Crear alerta de oportunidad agrícola con criterios detallados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Wizard categoría; Producto/cultivo; Ubicación; Precio; Volumen; Certificación; Canal notificación.
Acciones obligatorias: Guardar alerta; Cancelar.
Navegación siguiente permitida: /app/comprador/radar.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P061. Comparador guardado comprador

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador/comparador`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Mostrar comparaciones guardadas por el comprador.

### Componentes obligatorios
- Listas comparativas
- Tabla atributos
- Acciones cotizar/compartir

### Acciones obligatorias
- Abrir comparación
- Eliminar
- Cotizar

### Navegación siguiente permitida
- `/comparador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P061: Comparador guardado comprador.
Ruta frontend: /app/comprador/comparador.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Mostrar comparaciones guardadas por el comprador..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Listas comparativas; Tabla atributos; Acciones cotizar/compartir.
Acciones obligatorias: Abrir comparación; Eliminar; Cotizar.
Navegación siguiente permitida: /comparador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P062. Contactos realizados

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador/contactos`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Ver historial de contactos por WhatsApp y formularios.

### Componentes obligatorios
- Tabla contactos
- Anuncio
- Proveedor
- Fecha
- Canal
- Estado

### Acciones obligatorias
- Ver anuncio
- Recontactar
- Crear nota

### Navegación siguiente permitida
- `/anuncios/:id`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P062: Contactos realizados.
Ruta frontend: /app/comprador/contactos.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Ver historial de contactos por WhatsApp y formularios..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Tabla contactos; Anuncio; Proveedor; Fecha; Canal; Estado.
Acciones obligatorias: Ver anuncio; Recontactar; Crear nota.
Navegación siguiente permitida: /anuncios/:id.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P063. Notificaciones comprador

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador/notificaciones`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Mostrar alertas, respuestas, cambios de estado y recomendaciones.

### Componentes obligatorios
- Lista notificaciones
- Filtros
- Marcar leído
- Acciones contextuales

### Acciones obligatorias
- Abrir
- Marcar leído
- Eliminar

### Navegación siguiente permitida
- `/app/comprador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P063: Notificaciones comprador.
Ruta frontend: /app/comprador/notificaciones.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Mostrar alertas, respuestas, cambios de estado y recomendaciones..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Lista notificaciones; Filtros; Marcar leído; Acciones contextuales.
Acciones obligatorias: Abrir; Marcar leído; Eliminar.
Navegación siguiente permitida: /app/comprador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P064. Configuración comprador

- **Etapa:** ETAPA 04 — Backoffice comprador agrícola
- **Ruta:** `/app/comprador/configuracion`
- **Rol principal:** Comprador agrícola
- **Objetivo:** Configurar seguridad, notificaciones y privacidad.

### Componentes obligatorios
- Tabs seguridad
- Notificaciones
- Privacidad
- Preferencias

### Acciones obligatorias
- Guardar cambios
- Cambiar contraseña

### Navegación siguiente permitida
- `/app/comprador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P064: Configuración comprador.
Ruta frontend: /app/comprador/configuracion.
Rol principal: Comprador agrícola.
Objetivo de la pantalla: Configurar seguridad, notificaciones y privacidad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Tabs seguridad; Notificaciones; Privacidad; Preferencias.
Acciones obligatorias: Guardar cambios; Cambiar contraseña.
Navegación siguiente permitida: /app/comprador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P065. Dashboard productor

- **Etapa:** ETAPA 05 — Backoffice productor agrícola
- **Ruta:** `/app/productor`
- **Rol principal:** Productor agrícola
- **Objetivo:** Centralizar operación del rol productor con KPIs, registros recientes y accesos rápidos.

### Componentes obligatorios
- Sidebar específico de productor
- Header con buscador interno y notificaciones
- KPIs del rol
- Accesos rápidos
- Tabla de registros recientes
- Alertas y estados
- Panel de ayuda

### Acciones obligatorias
- Ver registros
- Crear nuevo
- Filtrar
- Abrir detalle
- Exportar si aplica

### Navegación siguiente permitida
- `/app/productor/publicaciones`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P065: Dashboard productor.
Ruta frontend: /app/productor.
Rol principal: Productor agrícola.
Objetivo de la pantalla: Centralizar operación del rol productor con KPIs, registros recientes y accesos rápidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar específico de productor; Header con buscador interno y notificaciones; KPIs del rol; Accesos rápidos; Tabla de registros recientes; Alertas y estados; Panel de ayuda.
Acciones obligatorias: Ver registros; Crear nuevo; Filtrar; Abrir detalle; Exportar si aplica.
Navegación siguiente permitida: /app/productor/publicaciones.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P066. Perfil productor

- **Etapa:** ETAPA 05 — Backoffice productor agrícola
- **Ruta:** `/app/productor/perfil`
- **Rol principal:** Productor agrícola
- **Objetivo:** Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de productor.

### Componentes obligatorios
- Formulario perfil
- Logo/foto
- Descripción
- Ubicación
- Zonas de cobertura
- WhatsApp
- Documentos
- Vista previa pública

### Acciones obligatorias
- Guardar
- Subir documento
- Ver perfil público

### Navegación siguiente permitida
- `/app/productor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P066: Perfil productor.
Ruta frontend: /app/productor/perfil.
Rol principal: Productor agrícola.
Objetivo de la pantalla: Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de productor..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Logo/foto; Descripción; Ubicación; Zonas de cobertura; WhatsApp; Documentos; Vista previa pública.
Acciones obligatorias: Guardar; Subir documento; Ver perfil público.
Navegación siguiente permitida: /app/productor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P067. Mis publicaciones de productor

- **Etapa:** ETAPA 05 — Backoffice productor agrícola
- **Ruta:** `/app/productor/publicaciones`
- **Rol principal:** Productor agrícola
- **Objetivo:** Gestionar productos, cosechas y fincas publicadas por el productor.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/productor/publicaciones/:id`
- `/app/productor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P067: Mis publicaciones de productor.
Ruta frontend: /app/productor/publicaciones.
Rol principal: Productor agrícola.
Objetivo de la pantalla: Gestionar productos, cosechas y fincas publicadas por el productor..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/productor/publicaciones/:id; /app/productor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P068. Inventario de cosechas

- **Etapa:** ETAPA 05 — Backoffice productor agrícola
- **Ruta:** `/app/productor/inventario`
- **Rol principal:** Productor agrícola
- **Objetivo:** Gestionar cosechas, volúmenes, disponibilidad y fechas de cosecha.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/productor/inventario/:id`
- `/app/productor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P068: Inventario de cosechas.
Ruta frontend: /app/productor/inventario.
Rol principal: Productor agrícola.
Objetivo de la pantalla: Gestionar cosechas, volúmenes, disponibilidad y fechas de cosecha..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/productor/inventario/:id; /app/productor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P069. Leads recibidos

- **Etapa:** ETAPA 05 — Backoffice productor agrícola
- **Ruta:** `/app/productor/leads`
- **Rol principal:** Productor agrícola
- **Objetivo:** Gestionar interesados generados por publicaciones y WhatsApp.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/productor/leads/:id`
- `/app/productor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P069: Leads recibidos.
Ruta frontend: /app/productor/leads.
Rol principal: Productor agrícola.
Objetivo de la pantalla: Gestionar interesados generados por publicaciones y WhatsApp..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/productor/leads/:id; /app/productor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P070. Cotizaciones recibidas

- **Etapa:** ETAPA 05 — Backoffice productor agrícola
- **Ruta:** `/app/productor/cotizaciones`
- **Rol principal:** Productor agrícola
- **Objetivo:** Responder solicitudes de compra o negociación.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/productor/cotizaciones/:id`
- `/app/productor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P070: Cotizaciones recibidas.
Ruta frontend: /app/productor/cotizaciones.
Rol principal: Productor agrícola.
Objetivo de la pantalla: Responder solicitudes de compra o negociación..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/productor/cotizaciones/:id; /app/productor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P071. Documentos y certificaciones

- **Etapa:** ETAPA 05 — Backoffice productor agrícola
- **Ruta:** `/app/productor/documentos`
- **Rol principal:** Productor agrícola
- **Objetivo:** Administrar certificados, documentos de finca y soportes.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/productor/documentos/:id`
- `/app/productor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P071: Documentos y certificaciones.
Ruta frontend: /app/productor/documentos.
Rol principal: Productor agrícola.
Objetivo de la pantalla: Administrar certificados, documentos de finca y soportes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/productor/documentos/:id; /app/productor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P072. Promociones del productor

- **Etapa:** ETAPA 05 — Backoffice productor agrícola
- **Ruta:** `/app/productor/promociones`
- **Rol principal:** Productor agrícola
- **Objetivo:** Gestionar publicaciones destacadas y ofertas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/productor/promociones/:id`
- `/app/productor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P072: Promociones del productor.
Ruta frontend: /app/productor/promociones.
Rol principal: Productor agrícola.
Objetivo de la pantalla: Gestionar publicaciones destacadas y ofertas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/productor/promociones/:id; /app/productor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P073. Analítica del productor

- **Etapa:** ETAPA 05 — Backoffice productor agrícola
- **Ruta:** `/app/productor/analitica`
- **Rol principal:** Productor agrícola
- **Objetivo:** Ver visitas, favoritos, leads y conversión.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/productor/analitica/:id`
- `/app/productor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P073: Analítica del productor.
Ruta frontend: /app/productor/analitica.
Rol principal: Productor agrícola.
Objetivo de la pantalla: Ver visitas, favoritos, leads y conversión..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/productor/analitica/:id; /app/productor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P074. Reputación del productor

- **Etapa:** ETAPA 05 — Backoffice productor agrícola
- **Ruta:** `/app/productor/reputacion`
- **Rol principal:** Productor agrícola
- **Objetivo:** Ver reseñas, calificaciones y badges.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/productor/reputacion/:id`
- `/app/productor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P074: Reputación del productor.
Ruta frontend: /app/productor/reputacion.
Rol principal: Productor agrícola.
Objetivo de la pantalla: Ver reseñas, calificaciones y badges..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/productor/reputacion/:id; /app/productor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P075. Configuración productor

- **Etapa:** ETAPA 05 — Backoffice productor agrícola
- **Ruta:** `/app/productor/configuracion`
- **Rol principal:** Productor agrícola
- **Objetivo:** Editar preferencias, seguridad y notificaciones.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/productor/configuracion/:id`
- `/app/productor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P075: Configuración productor.
Ruta frontend: /app/productor/configuracion.
Rol principal: Productor agrícola.
Objetivo de la pantalla: Editar preferencias, seguridad y notificaciones..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/productor/configuracion/:id; /app/productor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P076. Dashboard vendedor

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Centralizar operación del rol vendedor con KPIs, registros recientes y accesos rápidos.

### Componentes obligatorios
- Sidebar específico de vendedor
- Header con buscador interno y notificaciones
- KPIs del rol
- Accesos rápidos
- Tabla de registros recientes
- Alertas y estados
- Panel de ayuda

### Acciones obligatorias
- Ver registros
- Crear nuevo
- Filtrar
- Abrir detalle
- Exportar si aplica

### Navegación siguiente permitida
- `/app/vendedor/catalogo`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P076: Dashboard vendedor.
Ruta frontend: /app/vendedor.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Centralizar operación del rol vendedor con KPIs, registros recientes y accesos rápidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar específico de vendedor; Header con buscador interno y notificaciones; KPIs del rol; Accesos rápidos; Tabla de registros recientes; Alertas y estados; Panel de ayuda.
Acciones obligatorias: Ver registros; Crear nuevo; Filtrar; Abrir detalle; Exportar si aplica.
Navegación siguiente permitida: /app/vendedor/catalogo.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P077. Perfil vendedor

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor/perfil`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de vendedor.

### Componentes obligatorios
- Formulario perfil
- Logo/foto
- Descripción
- Ubicación
- Zonas de cobertura
- WhatsApp
- Documentos
- Vista previa pública

### Acciones obligatorias
- Guardar
- Subir documento
- Ver perfil público

### Navegación siguiente permitida
- `/app/vendedor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P077: Perfil vendedor.
Ruta frontend: /app/vendedor/perfil.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de vendedor..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Logo/foto; Descripción; Ubicación; Zonas de cobertura; WhatsApp; Documentos; Vista previa pública.
Acciones obligatorias: Guardar; Subir documento; Ver perfil público.
Navegación siguiente permitida: /app/vendedor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P078. Catálogo del vendedor

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor/catalogo`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Gestionar productos y servicios del vendedor agrícola.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/vendedor/catalogo/:id`
- `/app/vendedor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P078: Catálogo del vendedor.
Ruta frontend: /app/vendedor/catalogo.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Gestionar productos y servicios del vendedor agrícola..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/vendedor/catalogo/:id; /app/vendedor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P079. Publicaciones del vendedor

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor/publicaciones`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Listar y administrar anuncios publicados, pausados o rechazados.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/vendedor/publicaciones/:id`
- `/app/vendedor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P079: Publicaciones del vendedor.
Ruta frontend: /app/vendedor/publicaciones.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Listar y administrar anuncios publicados, pausados o rechazados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/vendedor/publicaciones/:id; /app/vendedor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P080. Cotizaciones del vendedor

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor/cotizaciones`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Responder cotizaciones y negociar.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/vendedor/cotizaciones/:id`
- `/app/vendedor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P080: Cotizaciones del vendedor.
Ruta frontend: /app/vendedor/cotizaciones.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Responder cotizaciones y negociar..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/vendedor/cotizaciones/:id; /app/vendedor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P081. Leads del vendedor

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor/leads`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Gestionar oportunidades comerciales.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/vendedor/leads/:id`
- `/app/vendedor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P081: Leads del vendedor.
Ruta frontend: /app/vendedor/leads.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Gestionar oportunidades comerciales..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/vendedor/leads/:id; /app/vendedor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P082. Órdenes y pagos opcionales

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor/ordenes`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Ver compras directas o servicios contratados cuando aplique.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/vendedor/ordenes/:id`
- `/app/vendedor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P082: Órdenes y pagos opcionales.
Ruta frontend: /app/vendedor/ordenes.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Ver compras directas o servicios contratados cuando aplique..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/vendedor/ordenes/:id; /app/vendedor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P083. Ofertas y promociones

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor/ofertas`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Gestionar descuentos y campañas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/vendedor/ofertas/:id`
- `/app/vendedor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P083: Ofertas y promociones.
Ruta frontend: /app/vendedor/ofertas.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Gestionar descuentos y campañas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/vendedor/ofertas/:id; /app/vendedor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P084. Tienda y presencia local GBP

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor/tienda-gbp`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Configurar perfil público, datos locales, fotos y SEO local.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/vendedor/tienda-gbp/:id`
- `/app/vendedor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P084: Tienda y presencia local GBP.
Ruta frontend: /app/vendedor/tienda-gbp.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Configurar perfil público, datos locales, fotos y SEO local..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/vendedor/tienda-gbp/:id; /app/vendedor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P085. Analítica vendedor

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor/analitica`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Medir ventas, leads y visitas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/vendedor/analitica/:id`
- `/app/vendedor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P085: Analítica vendedor.
Ruta frontend: /app/vendedor/analitica.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Medir ventas, leads y visitas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/vendedor/analitica/:id; /app/vendedor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P086. Reputación vendedor

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor/reputacion`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Gestionar reseñas y calificación.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/vendedor/reputacion/:id`
- `/app/vendedor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P086: Reputación vendedor.
Ruta frontend: /app/vendedor/reputacion.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Gestionar reseñas y calificación..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/vendedor/reputacion/:id; /app/vendedor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P087. Configuración vendedor

- **Etapa:** ETAPA 06 — Backoffice vendedor agrícola
- **Ruta:** `/app/vendedor/configuracion`
- **Rol principal:** Vendedor agrícola
- **Objetivo:** Preferencias y seguridad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/vendedor/configuracion/:id`
- `/app/vendedor`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P087: Configuración vendedor.
Ruta frontend: /app/vendedor/configuracion.
Rol principal: Vendedor agrícola.
Objetivo de la pantalla: Preferencias y seguridad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/vendedor/configuracion/:id; /app/vendedor.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P088. Dashboard dueño de finca

- **Etapa:** ETAPA 07 — Backoffice dueño de finca agrícola
- **Ruta:** `/app/dueno-finca`
- **Rol principal:** Dueño de finca agrícola
- **Objetivo:** Centralizar operación del rol dueño de finca con KPIs, registros recientes y accesos rápidos.

### Componentes obligatorios
- Sidebar específico de dueño de finca
- Header con buscador interno y notificaciones
- KPIs del rol
- Accesos rápidos
- Tabla de registros recientes
- Alertas y estados
- Panel de ayuda

### Acciones obligatorias
- Ver registros
- Crear nuevo
- Filtrar
- Abrir detalle
- Exportar si aplica

### Navegación siguiente permitida
- `/app/dueno-finca/predios`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P088: Dashboard dueño de finca.
Ruta frontend: /app/dueno-finca.
Rol principal: Dueño de finca agrícola.
Objetivo de la pantalla: Centralizar operación del rol dueño de finca con KPIs, registros recientes y accesos rápidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar específico de dueño de finca; Header con buscador interno y notificaciones; KPIs del rol; Accesos rápidos; Tabla de registros recientes; Alertas y estados; Panel de ayuda.
Acciones obligatorias: Ver registros; Crear nuevo; Filtrar; Abrir detalle; Exportar si aplica.
Navegación siguiente permitida: /app/dueno-finca/predios.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P089. Perfil dueño de finca

- **Etapa:** ETAPA 07 — Backoffice dueño de finca agrícola
- **Ruta:** `/app/dueno-finca/perfil`
- **Rol principal:** Dueño de finca agrícola
- **Objetivo:** Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de dueño de finca.

### Componentes obligatorios
- Formulario perfil
- Logo/foto
- Descripción
- Ubicación
- Zonas de cobertura
- WhatsApp
- Documentos
- Vista previa pública

### Acciones obligatorias
- Guardar
- Subir documento
- Ver perfil público

### Navegación siguiente permitida
- `/app/dueno-finca`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P089: Perfil dueño de finca.
Ruta frontend: /app/dueno-finca/perfil.
Rol principal: Dueño de finca agrícola.
Objetivo de la pantalla: Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de dueño de finca..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Logo/foto; Descripción; Ubicación; Zonas de cobertura; WhatsApp; Documentos; Vista previa pública.
Acciones obligatorias: Guardar; Subir documento; Ver perfil público.
Navegación siguiente permitida: /app/dueno-finca.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P090. Mis fincas y predios

- **Etapa:** ETAPA 07 — Backoffice dueño de finca agrícola
- **Ruta:** `/app/dueno-finca/predios`
- **Rol principal:** Dueño de finca agrícola
- **Objetivo:** Gestionar fincas, lotes y predios agrícolas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/dueno-finca/predios/:id`
- `/app/dueno-finca`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P090: Mis fincas y predios.
Ruta frontend: /app/dueno-finca/predios.
Rol principal: Dueño de finca agrícola.
Objetivo de la pantalla: Gestionar fincas, lotes y predios agrícolas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/dueno-finca/predios/:id; /app/dueno-finca.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P091. Formulario de predio

- **Etapa:** ETAPA 07 — Backoffice dueño de finca agrícola
- **Ruta:** `/app/dueno-finca/formulario-predio`
- **Rol principal:** Dueño de finca agrícola
- **Objetivo:** Crear o editar publicación de finca/predio.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/dueno-finca/formulario-predio/:id`
- `/app/dueno-finca`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P091: Formulario de predio.
Ruta frontend: /app/dueno-finca/formulario-predio.
Rol principal: Dueño de finca agrícola.
Objetivo de la pantalla: Crear o editar publicación de finca/predio..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/dueno-finca/formulario-predio/:id; /app/dueno-finca.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P092. Solicitudes de visita

- **Etapa:** ETAPA 07 — Backoffice dueño de finca agrícola
- **Ruta:** `/app/dueno-finca/visitas`
- **Rol principal:** Dueño de finca agrícola
- **Objetivo:** Gestionar agendamientos e interesados.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/dueno-finca/visitas/:id`
- `/app/dueno-finca`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P092: Solicitudes de visita.
Ruta frontend: /app/dueno-finca/visitas.
Rol principal: Dueño de finca agrícola.
Objetivo de la pantalla: Gestionar agendamientos e interesados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/dueno-finca/visitas/:id; /app/dueno-finca.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P093. Leads de finca

- **Etapa:** ETAPA 07 — Backoffice dueño de finca agrícola
- **Ruta:** `/app/dueno-finca/leads`
- **Rol principal:** Dueño de finca agrícola
- **Objetivo:** Ver interesados por predio.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/dueno-finca/leads/:id`
- `/app/dueno-finca`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P093: Leads de finca.
Ruta frontend: /app/dueno-finca/leads.
Rol principal: Dueño de finca agrícola.
Objetivo de la pantalla: Ver interesados por predio..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/dueno-finca/leads/:id; /app/dueno-finca.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P094. Documentos del predio

- **Etapa:** ETAPA 07 — Backoffice dueño de finca agrícola
- **Ruta:** `/app/dueno-finca/documentos`
- **Rol principal:** Dueño de finca agrícola
- **Objetivo:** Gestionar títulos, planos y soportes.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/dueno-finca/documentos/:id`
- `/app/dueno-finca`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P094: Documentos del predio.
Ruta frontend: /app/dueno-finca/documentos.
Rol principal: Dueño de finca agrícola.
Objetivo de la pantalla: Gestionar títulos, planos y soportes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/dueno-finca/documentos/:id; /app/dueno-finca.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P095. Analítica de predios

- **Etapa:** ETAPA 07 — Backoffice dueño de finca agrícola
- **Ruta:** `/app/dueno-finca/analitica`
- **Rol principal:** Dueño de finca agrícola
- **Objetivo:** Ver visitas, contactos y favoritos.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/dueno-finca/analitica/:id`
- `/app/dueno-finca`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P095: Analítica de predios.
Ruta frontend: /app/dueno-finca/analitica.
Rol principal: Dueño de finca agrícola.
Objetivo de la pantalla: Ver visitas, contactos y favoritos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/dueno-finca/analitica/:id; /app/dueno-finca.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P096. Configuración propietario

- **Etapa:** ETAPA 07 — Backoffice dueño de finca agrícola
- **Ruta:** `/app/dueno-finca/configuracion`
- **Rol principal:** Dueño de finca agrícola
- **Objetivo:** Preferencias y seguridad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/dueno-finca/configuracion/:id`
- `/app/dueno-finca`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P096: Configuración propietario.
Ruta frontend: /app/dueno-finca/configuracion.
Rol principal: Dueño de finca agrícola.
Objetivo de la pantalla: Preferencias y seguridad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/dueno-finca/configuracion/:id; /app/dueno-finca.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P097. Dashboard proveedor de insumos

- **Etapa:** ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **Ruta:** `/app/proveedor-insumos`
- **Rol principal:** Proveedor de insumos agrícolas
- **Objetivo:** Centralizar operación del rol proveedor de insumos con KPIs, registros recientes y accesos rápidos.

### Componentes obligatorios
- Sidebar específico de proveedor de insumos
- Header con buscador interno y notificaciones
- KPIs del rol
- Accesos rápidos
- Tabla de registros recientes
- Alertas y estados
- Panel de ayuda

### Acciones obligatorias
- Ver registros
- Crear nuevo
- Filtrar
- Abrir detalle
- Exportar si aplica

### Navegación siguiente permitida
- `/app/proveedor-insumos/catalogo`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P097: Dashboard proveedor de insumos.
Ruta frontend: /app/proveedor-insumos.
Rol principal: Proveedor de insumos agrícolas.
Objetivo de la pantalla: Centralizar operación del rol proveedor de insumos con KPIs, registros recientes y accesos rápidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar específico de proveedor de insumos; Header con buscador interno y notificaciones; KPIs del rol; Accesos rápidos; Tabla de registros recientes; Alertas y estados; Panel de ayuda.
Acciones obligatorias: Ver registros; Crear nuevo; Filtrar; Abrir detalle; Exportar si aplica.
Navegación siguiente permitida: /app/proveedor-insumos/catalogo.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P098. Perfil proveedor de insumos

- **Etapa:** ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **Ruta:** `/app/proveedor-insumos/perfil`
- **Rol principal:** Proveedor de insumos agrícolas
- **Objetivo:** Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de proveedor de insumos.

### Componentes obligatorios
- Formulario perfil
- Logo/foto
- Descripción
- Ubicación
- Zonas de cobertura
- WhatsApp
- Documentos
- Vista previa pública

### Acciones obligatorias
- Guardar
- Subir documento
- Ver perfil público

### Navegación siguiente permitida
- `/app/proveedor-insumos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P098: Perfil proveedor de insumos.
Ruta frontend: /app/proveedor-insumos/perfil.
Rol principal: Proveedor de insumos agrícolas.
Objetivo de la pantalla: Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de proveedor de insumos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Logo/foto; Descripción; Ubicación; Zonas de cobertura; WhatsApp; Documentos; Vista previa pública.
Acciones obligatorias: Guardar; Subir documento; Ver perfil público.
Navegación siguiente permitida: /app/proveedor-insumos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P099. Catálogo de insumos

- **Etapa:** ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **Ruta:** `/app/proveedor-insumos/catalogo`
- **Rol principal:** Proveedor de insumos agrícolas
- **Objetivo:** Listar semillas, fertilizantes, agroquímicos y otros insumos.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-insumos/catalogo/:id`
- `/app/proveedor-insumos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P099: Catálogo de insumos.
Ruta frontend: /app/proveedor-insumos/catalogo.
Rol principal: Proveedor de insumos agrícolas.
Objetivo de la pantalla: Listar semillas, fertilizantes, agroquímicos y otros insumos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-insumos/catalogo/:id; /app/proveedor-insumos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P100. Formulario de insumo

- **Etapa:** ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **Ruta:** `/app/proveedor-insumos/producto`
- **Rol principal:** Proveedor de insumos agrícolas
- **Objetivo:** Crear o editar ficha de insumo.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-insumos/producto/:id`
- `/app/proveedor-insumos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P100: Formulario de insumo.
Ruta frontend: /app/proveedor-insumos/producto.
Rol principal: Proveedor de insumos agrícolas.
Objetivo de la pantalla: Crear o editar ficha de insumo..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-insumos/producto/:id; /app/proveedor-insumos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P101. Inventario y precios

- **Etapa:** ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **Ruta:** `/app/proveedor-insumos/inventario`
- **Rol principal:** Proveedor de insumos agrícolas
- **Objetivo:** Gestionar stock, precios unitarios y mayoristas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-insumos/inventario/:id`
- `/app/proveedor-insumos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P101: Inventario y precios.
Ruta frontend: /app/proveedor-insumos/inventario.
Rol principal: Proveedor de insumos agrícolas.
Objetivo de la pantalla: Gestionar stock, precios unitarios y mayoristas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-insumos/inventario/:id; /app/proveedor-insumos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P102. Cotizaciones recibidas

- **Etapa:** ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **Ruta:** `/app/proveedor-insumos/cotizaciones`
- **Rol principal:** Proveedor de insumos agrícolas
- **Objetivo:** Responder cotizaciones de compradores.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-insumos/cotizaciones/:id`
- `/app/proveedor-insumos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P102: Cotizaciones recibidas.
Ruta frontend: /app/proveedor-insumos/cotizaciones.
Rol principal: Proveedor de insumos agrícolas.
Objetivo de la pantalla: Responder cotizaciones de compradores..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-insumos/cotizaciones/:id; /app/proveedor-insumos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P103. Promociones de insumos

- **Etapa:** ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **Ruta:** `/app/proveedor-insumos/ofertas`
- **Rol principal:** Proveedor de insumos agrícolas
- **Objetivo:** Crear ofertas y publicaciones destacadas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-insumos/ofertas/:id`
- `/app/proveedor-insumos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P103: Promociones de insumos.
Ruta frontend: /app/proveedor-insumos/ofertas.
Rol principal: Proveedor de insumos agrícolas.
Objetivo de la pantalla: Crear ofertas y publicaciones destacadas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-insumos/ofertas/:id; /app/proveedor-insumos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P104. Tienda y GBP

- **Etapa:** ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **Ruta:** `/app/proveedor-insumos/tienda-gbp`
- **Rol principal:** Proveedor de insumos agrícolas
- **Objetivo:** Configurar perfil público y presencia local.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-insumos/tienda-gbp/:id`
- `/app/proveedor-insumos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P104: Tienda y GBP.
Ruta frontend: /app/proveedor-insumos/tienda-gbp.
Rol principal: Proveedor de insumos agrícolas.
Objetivo de la pantalla: Configurar perfil público y presencia local..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-insumos/tienda-gbp/:id; /app/proveedor-insumos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P105. Analítica proveedor

- **Etapa:** ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **Ruta:** `/app/proveedor-insumos/analitica`
- **Rol principal:** Proveedor de insumos agrícolas
- **Objetivo:** Medir visitas, leads y conversión.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-insumos/analitica/:id`
- `/app/proveedor-insumos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P105: Analítica proveedor.
Ruta frontend: /app/proveedor-insumos/analitica.
Rol principal: Proveedor de insumos agrícolas.
Objetivo de la pantalla: Medir visitas, leads y conversión..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-insumos/analitica/:id; /app/proveedor-insumos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P106. Reputación proveedor

- **Etapa:** ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **Ruta:** `/app/proveedor-insumos/reputacion`
- **Rol principal:** Proveedor de insumos agrícolas
- **Objetivo:** Gestionar reseñas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-insumos/reputacion/:id`
- `/app/proveedor-insumos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P106: Reputación proveedor.
Ruta frontend: /app/proveedor-insumos/reputacion.
Rol principal: Proveedor de insumos agrícolas.
Objetivo de la pantalla: Gestionar reseñas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-insumos/reputacion/:id; /app/proveedor-insumos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P107. Configuración proveedor

- **Etapa:** ETAPA 08 — Backoffice proveedor de insumos agrícolas
- **Ruta:** `/app/proveedor-insumos/configuracion`
- **Rol principal:** Proveedor de insumos agrícolas
- **Objetivo:** Preferencias y seguridad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-insumos/configuracion/:id`
- `/app/proveedor-insumos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P107: Configuración proveedor.
Ruta frontend: /app/proveedor-insumos/configuracion.
Rol principal: Proveedor de insumos agrícolas.
Objetivo de la pantalla: Preferencias y seguridad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-insumos/configuracion/:id; /app/proveedor-insumos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P108. Dashboard proveedor de maquinaria

- **Etapa:** ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **Ruta:** `/app/proveedor-maquinaria`
- **Rol principal:** Proveedor de maquinaria agrícola
- **Objetivo:** Centralizar operación del rol proveedor de maquinaria con KPIs, registros recientes y accesos rápidos.

### Componentes obligatorios
- Sidebar específico de proveedor de maquinaria
- Header con buscador interno y notificaciones
- KPIs del rol
- Accesos rápidos
- Tabla de registros recientes
- Alertas y estados
- Panel de ayuda

### Acciones obligatorias
- Ver registros
- Crear nuevo
- Filtrar
- Abrir detalle
- Exportar si aplica

### Navegación siguiente permitida
- `/app/proveedor-maquinaria/catalogo`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P108: Dashboard proveedor de maquinaria.
Ruta frontend: /app/proveedor-maquinaria.
Rol principal: Proveedor de maquinaria agrícola.
Objetivo de la pantalla: Centralizar operación del rol proveedor de maquinaria con KPIs, registros recientes y accesos rápidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar específico de proveedor de maquinaria; Header con buscador interno y notificaciones; KPIs del rol; Accesos rápidos; Tabla de registros recientes; Alertas y estados; Panel de ayuda.
Acciones obligatorias: Ver registros; Crear nuevo; Filtrar; Abrir detalle; Exportar si aplica.
Navegación siguiente permitida: /app/proveedor-maquinaria/catalogo.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P109. Perfil proveedor de maquinaria

- **Etapa:** ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **Ruta:** `/app/proveedor-maquinaria/perfil`
- **Rol principal:** Proveedor de maquinaria agrícola
- **Objetivo:** Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de proveedor de maquinaria.

### Componentes obligatorios
- Formulario perfil
- Logo/foto
- Descripción
- Ubicación
- Zonas de cobertura
- WhatsApp
- Documentos
- Vista previa pública

### Acciones obligatorias
- Guardar
- Subir documento
- Ver perfil público

### Navegación siguiente permitida
- `/app/proveedor-maquinaria`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P109: Perfil proveedor de maquinaria.
Ruta frontend: /app/proveedor-maquinaria/perfil.
Rol principal: Proveedor de maquinaria agrícola.
Objetivo de la pantalla: Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de proveedor de maquinaria..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Logo/foto; Descripción; Ubicación; Zonas de cobertura; WhatsApp; Documentos; Vista previa pública.
Acciones obligatorias: Guardar; Subir documento; Ver perfil público.
Navegación siguiente permitida: /app/proveedor-maquinaria.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P110. Catálogo de maquinaria

- **Etapa:** ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **Ruta:** `/app/proveedor-maquinaria/catalogo`
- **Rol principal:** Proveedor de maquinaria agrícola
- **Objetivo:** Gestionar maquinaria nueva, usada, alquiler y repuestos.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-maquinaria/catalogo/:id`
- `/app/proveedor-maquinaria`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P110: Catálogo de maquinaria.
Ruta frontend: /app/proveedor-maquinaria/catalogo.
Rol principal: Proveedor de maquinaria agrícola.
Objetivo de la pantalla: Gestionar maquinaria nueva, usada, alquiler y repuestos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-maquinaria/catalogo/:id; /app/proveedor-maquinaria.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P111. Formulario maquinaria

- **Etapa:** ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **Ruta:** `/app/proveedor-maquinaria/equipo`
- **Rol principal:** Proveedor de maquinaria agrícola
- **Objetivo:** Crear o editar equipo agrícola.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-maquinaria/equipo/:id`
- `/app/proveedor-maquinaria`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P111: Formulario maquinaria.
Ruta frontend: /app/proveedor-maquinaria/equipo.
Rol principal: Proveedor de maquinaria agrícola.
Objetivo de la pantalla: Crear o editar equipo agrícola..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-maquinaria/equipo/:id; /app/proveedor-maquinaria.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P112. Calendario de alquileres

- **Etapa:** ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **Ruta:** `/app/proveedor-maquinaria/alquileres`
- **Rol principal:** Proveedor de maquinaria agrícola
- **Objetivo:** Gestionar disponibilidad de alquiler.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-maquinaria/alquileres/:id`
- `/app/proveedor-maquinaria`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P112: Calendario de alquileres.
Ruta frontend: /app/proveedor-maquinaria/alquileres.
Rol principal: Proveedor de maquinaria agrícola.
Objetivo de la pantalla: Gestionar disponibilidad de alquiler..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-maquinaria/alquileres/:id; /app/proveedor-maquinaria.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P113. Cotizaciones maquinaria

- **Etapa:** ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **Ruta:** `/app/proveedor-maquinaria/cotizaciones`
- **Rol principal:** Proveedor de maquinaria agrícola
- **Objetivo:** Responder solicitudes de compra o alquiler.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-maquinaria/cotizaciones/:id`
- `/app/proveedor-maquinaria`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P113: Cotizaciones maquinaria.
Ruta frontend: /app/proveedor-maquinaria/cotizaciones.
Rol principal: Proveedor de maquinaria agrícola.
Objetivo de la pantalla: Responder solicitudes de compra o alquiler..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-maquinaria/cotizaciones/:id; /app/proveedor-maquinaria.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P114. Solicitudes de inspección

- **Etapa:** ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **Ruta:** `/app/proveedor-maquinaria/inspecciones`
- **Rol principal:** Proveedor de maquinaria agrícola
- **Objetivo:** Gestionar inspecciones de equipos.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-maquinaria/inspecciones/:id`
- `/app/proveedor-maquinaria`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P114: Solicitudes de inspección.
Ruta frontend: /app/proveedor-maquinaria/inspecciones.
Rol principal: Proveedor de maquinaria agrícola.
Objetivo de la pantalla: Gestionar inspecciones de equipos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-maquinaria/inspecciones/:id; /app/proveedor-maquinaria.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P115. Promociones maquinaria

- **Etapa:** ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **Ruta:** `/app/proveedor-maquinaria/ofertas`
- **Rol principal:** Proveedor de maquinaria agrícola
- **Objetivo:** Crear campañas y destacados.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-maquinaria/ofertas/:id`
- `/app/proveedor-maquinaria`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P115: Promociones maquinaria.
Ruta frontend: /app/proveedor-maquinaria/ofertas.
Rol principal: Proveedor de maquinaria agrícola.
Objetivo de la pantalla: Crear campañas y destacados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-maquinaria/ofertas/:id; /app/proveedor-maquinaria.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P116. Analítica maquinaria

- **Etapa:** ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **Ruta:** `/app/proveedor-maquinaria/analitica`
- **Rol principal:** Proveedor de maquinaria agrícola
- **Objetivo:** Ver rendimiento de publicaciones.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-maquinaria/analitica/:id`
- `/app/proveedor-maquinaria`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P116: Analítica maquinaria.
Ruta frontend: /app/proveedor-maquinaria/analitica.
Rol principal: Proveedor de maquinaria agrícola.
Objetivo de la pantalla: Ver rendimiento de publicaciones..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-maquinaria/analitica/:id; /app/proveedor-maquinaria.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P117. Reputación maquinaria

- **Etapa:** ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **Ruta:** `/app/proveedor-maquinaria/reputacion`
- **Rol principal:** Proveedor de maquinaria agrícola
- **Objetivo:** Ver reseñas y calificaciones.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-maquinaria/reputacion/:id`
- `/app/proveedor-maquinaria`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P117: Reputación maquinaria.
Ruta frontend: /app/proveedor-maquinaria/reputacion.
Rol principal: Proveedor de maquinaria agrícola.
Objetivo de la pantalla: Ver reseñas y calificaciones..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-maquinaria/reputacion/:id; /app/proveedor-maquinaria.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P118. Configuración maquinaria

- **Etapa:** ETAPA 09 — Backoffice proveedor de maquinaria agrícola
- **Ruta:** `/app/proveedor-maquinaria/configuracion`
- **Rol principal:** Proveedor de maquinaria agrícola
- **Objetivo:** Preferencias y seguridad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/proveedor-maquinaria/configuracion/:id`
- `/app/proveedor-maquinaria`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P118: Configuración maquinaria.
Ruta frontend: /app/proveedor-maquinaria/configuracion.
Rol principal: Proveedor de maquinaria agrícola.
Objetivo de la pantalla: Preferencias y seguridad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/proveedor-maquinaria/configuracion/:id; /app/proveedor-maquinaria.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P119. Dashboard asesor agrícola

- **Etapa:** ETAPA 10 — Backoffice agrónomo o asesor técnico
- **Ruta:** `/app/asesor-agricola`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Centralizar operación del rol asesor agrícola con KPIs, registros recientes y accesos rápidos.

### Componentes obligatorios
- Sidebar específico de asesor agrícola
- Header con buscador interno y notificaciones
- KPIs del rol
- Accesos rápidos
- Tabla de registros recientes
- Alertas y estados
- Panel de ayuda

### Acciones obligatorias
- Ver registros
- Crear nuevo
- Filtrar
- Abrir detalle
- Exportar si aplica

### Navegación siguiente permitida
- `/app/asesor-agricola/servicios`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P119: Dashboard asesor agrícola.
Ruta frontend: /app/asesor-agricola.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Centralizar operación del rol asesor agrícola con KPIs, registros recientes y accesos rápidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar específico de asesor agrícola; Header con buscador interno y notificaciones; KPIs del rol; Accesos rápidos; Tabla de registros recientes; Alertas y estados; Panel de ayuda.
Acciones obligatorias: Ver registros; Crear nuevo; Filtrar; Abrir detalle; Exportar si aplica.
Navegación siguiente permitida: /app/asesor-agricola/servicios.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P120. Perfil asesor agrícola

- **Etapa:** ETAPA 10 — Backoffice agrónomo o asesor técnico
- **Ruta:** `/app/asesor-agricola/perfil`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de asesor agrícola.

### Componentes obligatorios
- Formulario perfil
- Logo/foto
- Descripción
- Ubicación
- Zonas de cobertura
- WhatsApp
- Documentos
- Vista previa pública

### Acciones obligatorias
- Guardar
- Subir documento
- Ver perfil público

### Navegación siguiente permitida
- `/app/asesor-agricola`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P120: Perfil asesor agrícola.
Ruta frontend: /app/asesor-agricola/perfil.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de asesor agrícola..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Logo/foto; Descripción; Ubicación; Zonas de cobertura; WhatsApp; Documentos; Vista previa pública.
Acciones obligatorias: Guardar; Subir documento; Ver perfil público.
Navegación siguiente permitida: /app/asesor-agricola.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P121. Servicios ofrecidos

- **Etapa:** ETAPA 10 — Backoffice agrónomo o asesor técnico
- **Ruta:** `/app/asesor-agricola/servicios`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Listar servicios agronómicos.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/asesor-agricola/servicios/:id`
- `/app/asesor-agricola`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P121: Servicios ofrecidos.
Ruta frontend: /app/asesor-agricola/servicios.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Listar servicios agronómicos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/asesor-agricola/servicios/:id; /app/asesor-agricola.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P122. Formulario servicio

- **Etapa:** ETAPA 10 — Backoffice agrónomo o asesor técnico
- **Ruta:** `/app/asesor-agricola/servicio`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Crear o editar servicio técnico.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/asesor-agricola/servicio/:id`
- `/app/asesor-agricola`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P122: Formulario servicio.
Ruta frontend: /app/asesor-agricola/servicio.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Crear o editar servicio técnico..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/asesor-agricola/servicio/:id; /app/asesor-agricola.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P123. Agenda del asesor

- **Etapa:** ETAPA 10 — Backoffice agrónomo o asesor técnico
- **Ruta:** `/app/asesor-agricola/agenda`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Gestionar disponibilidad y citas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/asesor-agricola/agenda/:id`
- `/app/asesor-agricola`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P123: Agenda del asesor.
Ruta frontend: /app/asesor-agricola/agenda.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Gestionar disponibilidad y citas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/asesor-agricola/agenda/:id; /app/asesor-agricola.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P124. Solicitudes recibidas

- **Etapa:** ETAPA 10 — Backoffice agrónomo o asesor técnico
- **Ruta:** `/app/asesor-agricola/solicitudes`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Gestionar solicitudes de visita técnica.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/asesor-agricola/solicitudes/:id`
- `/app/asesor-agricola`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P124: Solicitudes recibidas.
Ruta frontend: /app/asesor-agricola/solicitudes.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Gestionar solicitudes de visita técnica..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/asesor-agricola/solicitudes/:id; /app/asesor-agricola.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P125. Clientes atendidos

- **Etapa:** ETAPA 10 — Backoffice agrónomo o asesor técnico
- **Ruta:** `/app/asesor-agricola/clientes`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Ver historial de clientes.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/asesor-agricola/clientes/:id`
- `/app/asesor-agricola`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P125: Clientes atendidos.
Ruta frontend: /app/asesor-agricola/clientes.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Ver historial de clientes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/asesor-agricola/clientes/:id; /app/asesor-agricola.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P126. Documentos profesionales

- **Etapa:** ETAPA 10 — Backoffice agrónomo o asesor técnico
- **Ruta:** `/app/asesor-agricola/documentos`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Gestionar títulos, certificaciones y soportes.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/asesor-agricola/documentos/:id`
- `/app/asesor-agricola`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P126: Documentos profesionales.
Ruta frontend: /app/asesor-agricola/documentos.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Gestionar títulos, certificaciones y soportes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/asesor-agricola/documentos/:id; /app/asesor-agricola.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P127. Analítica asesor

- **Etapa:** ETAPA 10 — Backoffice agrónomo o asesor técnico
- **Ruta:** `/app/asesor-agricola/analitica`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Ver solicitudes, conversión y reseñas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/asesor-agricola/analitica/:id`
- `/app/asesor-agricola`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P127: Analítica asesor.
Ruta frontend: /app/asesor-agricola/analitica.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Ver solicitudes, conversión y reseñas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/asesor-agricola/analitica/:id; /app/asesor-agricola.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P128. Reputación asesor

- **Etapa:** ETAPA 10 — Backoffice agrónomo o asesor técnico
- **Ruta:** `/app/asesor-agricola/reputacion`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Gestionar calificaciones.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/asesor-agricola/reputacion/:id`
- `/app/asesor-agricola`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P128: Reputación asesor.
Ruta frontend: /app/asesor-agricola/reputacion.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Gestionar calificaciones..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/asesor-agricola/reputacion/:id; /app/asesor-agricola.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P129. Configuración asesor

- **Etapa:** ETAPA 10 — Backoffice agrónomo o asesor técnico
- **Ruta:** `/app/asesor-agricola/configuracion`
- **Rol principal:** Agrónomo o asesor técnico
- **Objetivo:** Preferencias y seguridad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/asesor-agricola/configuracion/:id`
- `/app/asesor-agricola`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P129: Configuración asesor.
Ruta frontend: /app/asesor-agricola/configuracion.
Rol principal: Agrónomo o asesor técnico.
Objetivo de la pantalla: Preferencias y seguridad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/asesor-agricola/configuracion/:id; /app/asesor-agricola.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P130. Dashboard transportista agrícola

- **Etapa:** ETAPA 11 — Backoffice transportista agrícola
- **Ruta:** `/app/transportista`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Centralizar operación del rol transportista agrícola con KPIs, registros recientes y accesos rápidos.

### Componentes obligatorios
- Sidebar específico de transportista agrícola
- Header con buscador interno y notificaciones
- KPIs del rol
- Accesos rápidos
- Tabla de registros recientes
- Alertas y estados
- Panel de ayuda

### Acciones obligatorias
- Ver registros
- Crear nuevo
- Filtrar
- Abrir detalle
- Exportar si aplica

### Navegación siguiente permitida
- `/app/transportista/vehiculos`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P130: Dashboard transportista agrícola.
Ruta frontend: /app/transportista.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Centralizar operación del rol transportista agrícola con KPIs, registros recientes y accesos rápidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar específico de transportista agrícola; Header con buscador interno y notificaciones; KPIs del rol; Accesos rápidos; Tabla de registros recientes; Alertas y estados; Panel de ayuda.
Acciones obligatorias: Ver registros; Crear nuevo; Filtrar; Abrir detalle; Exportar si aplica.
Navegación siguiente permitida: /app/transportista/vehiculos.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P131. Perfil transportista agrícola

- **Etapa:** ETAPA 11 — Backoffice transportista agrícola
- **Ruta:** `/app/transportista/perfil`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de transportista agrícola.

### Componentes obligatorios
- Formulario perfil
- Logo/foto
- Descripción
- Ubicación
- Zonas de cobertura
- WhatsApp
- Documentos
- Vista previa pública

### Acciones obligatorias
- Guardar
- Subir documento
- Ver perfil público

### Navegación siguiente permitida
- `/app/transportista`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P131: Perfil transportista agrícola.
Ruta frontend: /app/transportista/perfil.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de transportista agrícola..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Logo/foto; Descripción; Ubicación; Zonas de cobertura; WhatsApp; Documentos; Vista previa pública.
Acciones obligatorias: Guardar; Subir documento; Ver perfil público.
Navegación siguiente permitida: /app/transportista.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P132. Vehículos registrados

- **Etapa:** ETAPA 11 — Backoffice transportista agrícola
- **Ruta:** `/app/transportista/vehiculos`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Gestionar vehículos y capacidad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/transportista/vehiculos/:id`
- `/app/transportista`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P132: Vehículos registrados.
Ruta frontend: /app/transportista/vehiculos.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Gestionar vehículos y capacidad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/transportista/vehiculos/:id; /app/transportista.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P133. Formulario vehículo

- **Etapa:** ETAPA 11 — Backoffice transportista agrícola
- **Ruta:** `/app/transportista/vehiculo`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Crear o editar vehículo.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/transportista/vehiculo/:id`
- `/app/transportista`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P133: Formulario vehículo.
Ruta frontend: /app/transportista/vehiculo.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Crear o editar vehículo..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/transportista/vehiculo/:id; /app/transportista.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P134. Rutas frecuentes

- **Etapa:** ETAPA 11 — Backoffice transportista agrícola
- **Ruta:** `/app/transportista/rutas`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Gestionar rutas y tarifas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/transportista/rutas/:id`
- `/app/transportista`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P134: Rutas frecuentes.
Ruta frontend: /app/transportista/rutas.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Gestionar rutas y tarifas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/transportista/rutas/:id; /app/transportista.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P135. Cotizaciones transporte

- **Etapa:** ETAPA 11 — Backoffice transportista agrícola
- **Ruta:** `/app/transportista/cotizaciones`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Responder solicitudes de transporte.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/transportista/cotizaciones/:id`
- `/app/transportista`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P135: Cotizaciones transporte.
Ruta frontend: /app/transportista/cotizaciones.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Responder solicitudes de transporte..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/transportista/cotizaciones/:id; /app/transportista.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P136. Viajes realizados

- **Etapa:** ETAPA 11 — Backoffice transportista agrícola
- **Ruta:** `/app/transportista/viajes`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Controlar historial de viajes.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/transportista/viajes/:id`
- `/app/transportista`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P136: Viajes realizados.
Ruta frontend: /app/transportista/viajes.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Controlar historial de viajes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/transportista/viajes/:id; /app/transportista.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P137. Documentos vehículo

- **Etapa:** ETAPA 11 — Backoffice transportista agrícola
- **Ruta:** `/app/transportista/documentos`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Gestionar documentos y permisos.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/transportista/documentos/:id`
- `/app/transportista`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P137: Documentos vehículo.
Ruta frontend: /app/transportista/documentos.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Gestionar documentos y permisos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/transportista/documentos/:id; /app/transportista.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P138. Analítica transporte

- **Etapa:** ETAPA 11 — Backoffice transportista agrícola
- **Ruta:** `/app/transportista/analitica`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Medir solicitudes y viajes.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/transportista/analitica/:id`
- `/app/transportista`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P138: Analítica transporte.
Ruta frontend: /app/transportista/analitica.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Medir solicitudes y viajes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/transportista/analitica/:id; /app/transportista.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P139. Reputación transporte

- **Etapa:** ETAPA 11 — Backoffice transportista agrícola
- **Ruta:** `/app/transportista/reputacion`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Gestionar reseñas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/transportista/reputacion/:id`
- `/app/transportista`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P139: Reputación transporte.
Ruta frontend: /app/transportista/reputacion.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Gestionar reseñas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/transportista/reputacion/:id; /app/transportista.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P140. Configuración transportista

- **Etapa:** ETAPA 11 — Backoffice transportista agrícola
- **Ruta:** `/app/transportista/configuracion`
- **Rol principal:** Transportista agrícola
- **Objetivo:** Preferencias y seguridad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/transportista/configuracion/:id`
- `/app/transportista`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P140: Configuración transportista.
Ruta frontend: /app/transportista/configuracion.
Rol principal: Transportista agrícola.
Objetivo de la pantalla: Preferencias y seguridad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/transportista/configuracion/:id; /app/transportista.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P141. Dashboard cooperativa agrícola

- **Etapa:** ETAPA 12 — Backoffice cooperativa agrícola
- **Ruta:** `/app/cooperativa`
- **Rol principal:** Cooperativa agrícola
- **Objetivo:** Centralizar operación del rol cooperativa agrícola con KPIs, registros recientes y accesos rápidos.

### Componentes obligatorios
- Sidebar específico de cooperativa agrícola
- Header con buscador interno y notificaciones
- KPIs del rol
- Accesos rápidos
- Tabla de registros recientes
- Alertas y estados
- Panel de ayuda

### Acciones obligatorias
- Ver registros
- Crear nuevo
- Filtrar
- Abrir detalle
- Exportar si aplica

### Navegación siguiente permitida
- `/app/cooperativa/miembros`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P141: Dashboard cooperativa agrícola.
Ruta frontend: /app/cooperativa.
Rol principal: Cooperativa agrícola.
Objetivo de la pantalla: Centralizar operación del rol cooperativa agrícola con KPIs, registros recientes y accesos rápidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar específico de cooperativa agrícola; Header con buscador interno y notificaciones; KPIs del rol; Accesos rápidos; Tabla de registros recientes; Alertas y estados; Panel de ayuda.
Acciones obligatorias: Ver registros; Crear nuevo; Filtrar; Abrir detalle; Exportar si aplica.
Navegación siguiente permitida: /app/cooperativa/miembros.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P142. Perfil cooperativa agrícola

- **Etapa:** ETAPA 12 — Backoffice cooperativa agrícola
- **Ruta:** `/app/cooperativa/perfil`
- **Rol principal:** Cooperativa agrícola
- **Objetivo:** Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de cooperativa agrícola.

### Componentes obligatorios
- Formulario perfil
- Logo/foto
- Descripción
- Ubicación
- Zonas de cobertura
- WhatsApp
- Documentos
- Vista previa pública

### Acciones obligatorias
- Guardar
- Subir documento
- Ver perfil público

### Navegación siguiente permitida
- `/app/cooperativa`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P142: Perfil cooperativa agrícola.
Ruta frontend: /app/cooperativa/perfil.
Rol principal: Cooperativa agrícola.
Objetivo de la pantalla: Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de cooperativa agrícola..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Logo/foto; Descripción; Ubicación; Zonas de cobertura; WhatsApp; Documentos; Vista previa pública.
Acciones obligatorias: Guardar; Subir documento; Ver perfil público.
Navegación siguiente permitida: /app/cooperativa.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P143. Miembros productores

- **Etapa:** ETAPA 12 — Backoffice cooperativa agrícola
- **Ruta:** `/app/cooperativa/miembros`
- **Rol principal:** Cooperativa agrícola
- **Objetivo:** Gestionar productores asociados.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/cooperativa/miembros/:id`
- `/app/cooperativa`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P143: Miembros productores.
Ruta frontend: /app/cooperativa/miembros.
Rol principal: Cooperativa agrícola.
Objetivo de la pantalla: Gestionar productores asociados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/cooperativa/miembros/:id; /app/cooperativa.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P144. Publicaciones colectivas

- **Etapa:** ETAPA 12 — Backoffice cooperativa agrícola
- **Ruta:** `/app/cooperativa/publicaciones-colectivas`
- **Rol principal:** Cooperativa agrícola
- **Objetivo:** Administrar ofertas conjuntas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/cooperativa/publicaciones-colectivas/:id`
- `/app/cooperativa`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P144: Publicaciones colectivas.
Ruta frontend: /app/cooperativa/publicaciones-colectivas.
Rol principal: Cooperativa agrícola.
Objetivo de la pantalla: Administrar ofertas conjuntas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/cooperativa/publicaciones-colectivas/:id; /app/cooperativa.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P145. Inventario consolidado

- **Etapa:** ETAPA 12 — Backoffice cooperativa agrícola
- **Ruta:** `/app/cooperativa/inventario-colectivo`
- **Rol principal:** Cooperativa agrícola
- **Objetivo:** Consolidar volúmenes de cosechas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/cooperativa/inventario-colectivo/:id`
- `/app/cooperativa`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P145: Inventario consolidado.
Ruta frontend: /app/cooperativa/inventario-colectivo.
Rol principal: Cooperativa agrícola.
Objetivo de la pantalla: Consolidar volúmenes de cosechas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/cooperativa/inventario-colectivo/:id; /app/cooperativa.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P146. Cotizaciones cooperativa

- **Etapa:** ETAPA 12 — Backoffice cooperativa agrícola
- **Ruta:** `/app/cooperativa/cotizaciones`
- **Rol principal:** Cooperativa agrícola
- **Objetivo:** Gestionar solicitudes colectivas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/cooperativa/cotizaciones/:id`
- `/app/cooperativa`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P146: Cotizaciones cooperativa.
Ruta frontend: /app/cooperativa/cotizaciones.
Rol principal: Cooperativa agrícola.
Objetivo de la pantalla: Gestionar solicitudes colectivas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/cooperativa/cotizaciones/:id; /app/cooperativa.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P147. Compradores y leads

- **Etapa:** ETAPA 12 — Backoffice cooperativa agrícola
- **Ruta:** `/app/cooperativa/compradores`
- **Rol principal:** Cooperativa agrícola
- **Objetivo:** Gestionar compradores interesados.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/cooperativa/compradores/:id`
- `/app/cooperativa`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P147: Compradores y leads.
Ruta frontend: /app/cooperativa/compradores.
Rol principal: Cooperativa agrícola.
Objetivo de la pantalla: Gestionar compradores interesados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/cooperativa/compradores/:id; /app/cooperativa.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P148. Documentos cooperativa

- **Etapa:** ETAPA 12 — Backoffice cooperativa agrícola
- **Ruta:** `/app/cooperativa/documentos`
- **Rol principal:** Cooperativa agrícola
- **Objetivo:** Gestionar soportes y certificaciones.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/cooperativa/documentos/:id`
- `/app/cooperativa`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P148: Documentos cooperativa.
Ruta frontend: /app/cooperativa/documentos.
Rol principal: Cooperativa agrícola.
Objetivo de la pantalla: Gestionar soportes y certificaciones..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/cooperativa/documentos/:id; /app/cooperativa.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P149. Reportes cooperativa

- **Etapa:** ETAPA 12 — Backoffice cooperativa agrícola
- **Ruta:** `/app/cooperativa/reportes`
- **Rol principal:** Cooperativa agrícola
- **Objetivo:** Ver rendimiento colectivo.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/cooperativa/reportes/:id`
- `/app/cooperativa`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P149: Reportes cooperativa.
Ruta frontend: /app/cooperativa/reportes.
Rol principal: Cooperativa agrícola.
Objetivo de la pantalla: Ver rendimiento colectivo..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/cooperativa/reportes/:id; /app/cooperativa.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P150. Configuración cooperativa

- **Etapa:** ETAPA 12 — Backoffice cooperativa agrícola
- **Ruta:** `/app/cooperativa/configuracion`
- **Rol principal:** Cooperativa agrícola
- **Objetivo:** Preferencias y seguridad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/cooperativa/configuracion/:id`
- `/app/cooperativa`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P150: Configuración cooperativa.
Ruta frontend: /app/cooperativa/configuracion.
Rol principal: Cooperativa agrícola.
Objetivo de la pantalla: Preferencias y seguridad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/cooperativa/configuracion/:id; /app/cooperativa.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P151. Dashboard laboratorio agrícola

- **Etapa:** ETAPA 13 — Backoffice laboratorio agrícola
- **Ruta:** `/app/laboratorio`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Centralizar operación del rol laboratorio agrícola con KPIs, registros recientes y accesos rápidos.

### Componentes obligatorios
- Sidebar específico de laboratorio agrícola
- Header con buscador interno y notificaciones
- KPIs del rol
- Accesos rápidos
- Tabla de registros recientes
- Alertas y estados
- Panel de ayuda

### Acciones obligatorias
- Ver registros
- Crear nuevo
- Filtrar
- Abrir detalle
- Exportar si aplica

### Navegación siguiente permitida
- `/app/laboratorio/servicios`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P151: Dashboard laboratorio agrícola.
Ruta frontend: /app/laboratorio.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Centralizar operación del rol laboratorio agrícola con KPIs, registros recientes y accesos rápidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar específico de laboratorio agrícola; Header con buscador interno y notificaciones; KPIs del rol; Accesos rápidos; Tabla de registros recientes; Alertas y estados; Panel de ayuda.
Acciones obligatorias: Ver registros; Crear nuevo; Filtrar; Abrir detalle; Exportar si aplica.
Navegación siguiente permitida: /app/laboratorio/servicios.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P152. Perfil laboratorio agrícola

- **Etapa:** ETAPA 13 — Backoffice laboratorio agrícola
- **Ruta:** `/app/laboratorio/perfil`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de laboratorio agrícola.

### Componentes obligatorios
- Formulario perfil
- Logo/foto
- Descripción
- Ubicación
- Zonas de cobertura
- WhatsApp
- Documentos
- Vista previa pública

### Acciones obligatorias
- Guardar
- Subir documento
- Ver perfil público

### Navegación siguiente permitida
- `/app/laboratorio`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P152: Perfil laboratorio agrícola.
Ruta frontend: /app/laboratorio/perfil.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de laboratorio agrícola..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Logo/foto; Descripción; Ubicación; Zonas de cobertura; WhatsApp; Documentos; Vista previa pública.
Acciones obligatorias: Guardar; Subir documento; Ver perfil público.
Navegación siguiente permitida: /app/laboratorio.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P153. Servicios de laboratorio

- **Etapa:** ETAPA 13 — Backoffice laboratorio agrícola
- **Ruta:** `/app/laboratorio/servicios`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Gestionar análisis ofrecidos.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/laboratorio/servicios/:id`
- `/app/laboratorio`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P153: Servicios de laboratorio.
Ruta frontend: /app/laboratorio/servicios.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Gestionar análisis ofrecidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/laboratorio/servicios/:id; /app/laboratorio.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P154. Formulario servicio laboratorio

- **Etapa:** ETAPA 13 — Backoffice laboratorio agrícola
- **Ruta:** `/app/laboratorio/servicio`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Crear o editar análisis.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/laboratorio/servicio/:id`
- `/app/laboratorio`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P154: Formulario servicio laboratorio.
Ruta frontend: /app/laboratorio/servicio.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Crear o editar análisis..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/laboratorio/servicio/:id; /app/laboratorio.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P155. Solicitudes de muestras

- **Etapa:** ETAPA 13 — Backoffice laboratorio agrícola
- **Ruta:** `/app/laboratorio/muestras`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Gestionar recepción y estados de muestras.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/laboratorio/muestras/:id`
- `/app/laboratorio`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P155: Solicitudes de muestras.
Ruta frontend: /app/laboratorio/muestras.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Gestionar recepción y estados de muestras..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/laboratorio/muestras/:id; /app/laboratorio.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P156. Resultados y documentos

- **Etapa:** ETAPA 13 — Backoffice laboratorio agrícola
- **Ruta:** `/app/laboratorio/resultados`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Cargar resultados de laboratorio.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/laboratorio/resultados/:id`
- `/app/laboratorio`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P156: Resultados y documentos.
Ruta frontend: /app/laboratorio/resultados.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Cargar resultados de laboratorio..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/laboratorio/resultados/:id; /app/laboratorio.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P157. Cotizaciones laboratorio

- **Etapa:** ETAPA 13 — Backoffice laboratorio agrícola
- **Ruta:** `/app/laboratorio/cotizaciones`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Responder solicitudes.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/laboratorio/cotizaciones/:id`
- `/app/laboratorio`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P157: Cotizaciones laboratorio.
Ruta frontend: /app/laboratorio/cotizaciones.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Responder solicitudes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/laboratorio/cotizaciones/:id; /app/laboratorio.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P158. Agenda laboratorio

- **Etapa:** ETAPA 13 — Backoffice laboratorio agrícola
- **Ruta:** `/app/laboratorio/agenda`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Gestionar disponibilidad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/laboratorio/agenda/:id`
- `/app/laboratorio`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P158: Agenda laboratorio.
Ruta frontend: /app/laboratorio/agenda.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Gestionar disponibilidad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/laboratorio/agenda/:id; /app/laboratorio.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P159. Analítica laboratorio

- **Etapa:** ETAPA 13 — Backoffice laboratorio agrícola
- **Ruta:** `/app/laboratorio/analitica`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Medir solicitudes y conversión.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/laboratorio/analitica/:id`
- `/app/laboratorio`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P159: Analítica laboratorio.
Ruta frontend: /app/laboratorio/analitica.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Medir solicitudes y conversión..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/laboratorio/analitica/:id; /app/laboratorio.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P160. Reputación laboratorio

- **Etapa:** ETAPA 13 — Backoffice laboratorio agrícola
- **Ruta:** `/app/laboratorio/reputacion`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Gestionar reseñas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/laboratorio/reputacion/:id`
- `/app/laboratorio`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P160: Reputación laboratorio.
Ruta frontend: /app/laboratorio/reputacion.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Gestionar reseñas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/laboratorio/reputacion/:id; /app/laboratorio.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P161. Configuración laboratorio

- **Etapa:** ETAPA 13 — Backoffice laboratorio agrícola
- **Ruta:** `/app/laboratorio/configuracion`
- **Rol principal:** Laboratorio agrícola
- **Objetivo:** Preferencias y seguridad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/laboratorio/configuracion/:id`
- `/app/laboratorio`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P161: Configuración laboratorio.
Ruta frontend: /app/laboratorio/configuracion.
Rol principal: Laboratorio agrícola.
Objetivo de la pantalla: Preferencias y seguridad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/laboratorio/configuracion/:id; /app/laboratorio.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P162. Dashboard certificador agrícola

- **Etapa:** ETAPA 14 — Backoffice certificador agrícola
- **Ruta:** `/app/certificador`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Centralizar operación del rol certificador agrícola con KPIs, registros recientes y accesos rápidos.

### Componentes obligatorios
- Sidebar específico de certificador agrícola
- Header con buscador interno y notificaciones
- KPIs del rol
- Accesos rápidos
- Tabla de registros recientes
- Alertas y estados
- Panel de ayuda

### Acciones obligatorias
- Ver registros
- Crear nuevo
- Filtrar
- Abrir detalle
- Exportar si aplica

### Navegación siguiente permitida
- `/app/certificador/servicios`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P162: Dashboard certificador agrícola.
Ruta frontend: /app/certificador.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Centralizar operación del rol certificador agrícola con KPIs, registros recientes y accesos rápidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar específico de certificador agrícola; Header con buscador interno y notificaciones; KPIs del rol; Accesos rápidos; Tabla de registros recientes; Alertas y estados; Panel de ayuda.
Acciones obligatorias: Ver registros; Crear nuevo; Filtrar; Abrir detalle; Exportar si aplica.
Navegación siguiente permitida: /app/certificador/servicios.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P163. Perfil certificador agrícola

- **Etapa:** ETAPA 14 — Backoffice certificador agrícola
- **Ruta:** `/app/certificador/perfil`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de certificador agrícola.

### Componentes obligatorios
- Formulario perfil
- Logo/foto
- Descripción
- Ubicación
- Zonas de cobertura
- WhatsApp
- Documentos
- Vista previa pública

### Acciones obligatorias
- Guardar
- Subir documento
- Ver perfil público

### Navegación siguiente permitida
- `/app/certificador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P163: Perfil certificador agrícola.
Ruta frontend: /app/certificador/perfil.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de certificador agrícola..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Logo/foto; Descripción; Ubicación; Zonas de cobertura; WhatsApp; Documentos; Vista previa pública.
Acciones obligatorias: Guardar; Subir documento; Ver perfil público.
Navegación siguiente permitida: /app/certificador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P164. Servicios de certificación

- **Etapa:** ETAPA 14 — Backoffice certificador agrícola
- **Ruta:** `/app/certificador/servicios`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Gestionar certificaciones ofrecidas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/certificador/servicios/:id`
- `/app/certificador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P164: Servicios de certificación.
Ruta frontend: /app/certificador/servicios.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Gestionar certificaciones ofrecidas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/certificador/servicios/:id; /app/certificador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P165. Formulario certificación

- **Etapa:** ETAPA 14 — Backoffice certificador agrícola
- **Ruta:** `/app/certificador/servicio`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Crear o editar servicio de certificación.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/certificador/servicio/:id`
- `/app/certificador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P165: Formulario certificación.
Ruta frontend: /app/certificador/servicio.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Crear o editar servicio de certificación..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/certificador/servicio/:id; /app/certificador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P166. Solicitudes de certificación

- **Etapa:** ETAPA 14 — Backoffice certificador agrícola
- **Ruta:** `/app/certificador/solicitudes`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Gestionar solicitudes y estados.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/certificador/solicitudes/:id`
- `/app/certificador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P166: Solicitudes de certificación.
Ruta frontend: /app/certificador/solicitudes.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Gestionar solicitudes y estados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/certificador/solicitudes/:id; /app/certificador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P167. Agenda de auditorías

- **Etapa:** ETAPA 14 — Backoffice certificador agrícola
- **Ruta:** `/app/certificador/auditorias`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Planificar auditorías y visitas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/certificador/auditorias/:id`
- `/app/certificador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P167: Agenda de auditorías.
Ruta frontend: /app/certificador/auditorias.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Planificar auditorías y visitas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/certificador/auditorias/:id; /app/certificador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P168. Certificados y documentos

- **Etapa:** ETAPA 14 — Backoffice certificador agrícola
- **Ruta:** `/app/certificador/certificados`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Emitir o cargar certificados.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/certificador/certificados/:id`
- `/app/certificador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P168: Certificados y documentos.
Ruta frontend: /app/certificador/certificados.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Emitir o cargar certificados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/certificador/certificados/:id; /app/certificador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P169. Cotizaciones certificación

- **Etapa:** ETAPA 14 — Backoffice certificador agrícola
- **Ruta:** `/app/certificador/cotizaciones`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Responder solicitudes.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/certificador/cotizaciones/:id`
- `/app/certificador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P169: Cotizaciones certificación.
Ruta frontend: /app/certificador/cotizaciones.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Responder solicitudes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/certificador/cotizaciones/:id; /app/certificador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P170. Analítica certificador

- **Etapa:** ETAPA 14 — Backoffice certificador agrícola
- **Ruta:** `/app/certificador/analitica`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Medir solicitudes y conversión.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/certificador/analitica/:id`
- `/app/certificador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P170: Analítica certificador.
Ruta frontend: /app/certificador/analitica.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Medir solicitudes y conversión..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/certificador/analitica/:id; /app/certificador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P171. Reputación certificador

- **Etapa:** ETAPA 14 — Backoffice certificador agrícola
- **Ruta:** `/app/certificador/reputacion`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Gestionar reseñas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/certificador/reputacion/:id`
- `/app/certificador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P171: Reputación certificador.
Ruta frontend: /app/certificador/reputacion.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Gestionar reseñas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/certificador/reputacion/:id; /app/certificador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P172. Configuración certificador

- **Etapa:** ETAPA 14 — Backoffice certificador agrícola
- **Ruta:** `/app/certificador/configuracion`
- **Rol principal:** Certificador agrícola
- **Objetivo:** Preferencias y seguridad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/certificador/configuracion/:id`
- `/app/certificador`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P172: Configuración certificador.
Ruta frontend: /app/certificador/configuracion.
Rol principal: Certificador agrícola.
Objetivo de la pantalla: Preferencias y seguridad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/certificador/configuracion/:id; /app/certificador.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P173. Dashboard inspector de calidad

- **Etapa:** ETAPA 15 — Backoffice inspector de calidad
- **Ruta:** `/app/inspector-calidad`
- **Rol principal:** Inspector de calidad
- **Objetivo:** Centralizar operación del rol inspector de calidad con KPIs, registros recientes y accesos rápidos.

### Componentes obligatorios
- Sidebar específico de inspector de calidad
- Header con buscador interno y notificaciones
- KPIs del rol
- Accesos rápidos
- Tabla de registros recientes
- Alertas y estados
- Panel de ayuda

### Acciones obligatorias
- Ver registros
- Crear nuevo
- Filtrar
- Abrir detalle
- Exportar si aplica

### Navegación siguiente permitida
- `/app/inspector-calidad/servicios`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P173: Dashboard inspector de calidad.
Ruta frontend: /app/inspector-calidad.
Rol principal: Inspector de calidad.
Objetivo de la pantalla: Centralizar operación del rol inspector de calidad con KPIs, registros recientes y accesos rápidos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar específico de inspector de calidad; Header con buscador interno y notificaciones; KPIs del rol; Accesos rápidos; Tabla de registros recientes; Alertas y estados; Panel de ayuda.
Acciones obligatorias: Ver registros; Crear nuevo; Filtrar; Abrir detalle; Exportar si aplica.
Navegación siguiente permitida: /app/inspector-calidad/servicios.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P174. Perfil inspector de calidad

- **Etapa:** ETAPA 15 — Backoffice inspector de calidad
- **Ruta:** `/app/inspector-calidad/perfil`
- **Rol principal:** Inspector de calidad
- **Objetivo:** Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de inspector de calidad.

### Componentes obligatorios
- Formulario perfil
- Logo/foto
- Descripción
- Ubicación
- Zonas de cobertura
- WhatsApp
- Documentos
- Vista previa pública

### Acciones obligatorias
- Guardar
- Subir documento
- Ver perfil público

### Navegación siguiente permitida
- `/app/inspector-calidad`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P174: Perfil inspector de calidad.
Ruta frontend: /app/inspector-calidad/perfil.
Rol principal: Inspector de calidad.
Objetivo de la pantalla: Editar datos públicos, ubicación, contacto, WhatsApp, documentos y reputación de inspector de calidad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Formulario perfil; Logo/foto; Descripción; Ubicación; Zonas de cobertura; WhatsApp; Documentos; Vista previa pública.
Acciones obligatorias: Guardar; Subir documento; Ver perfil público.
Navegación siguiente permitida: /app/inspector-calidad.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P175. Servicios de inspección

- **Etapa:** ETAPA 15 — Backoffice inspector de calidad
- **Ruta:** `/app/inspector-calidad/servicios`
- **Rol principal:** Inspector de calidad
- **Objetivo:** Gestionar servicios de calidad, calibre y empaque.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/inspector-calidad/servicios/:id`
- `/app/inspector-calidad`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P175: Servicios de inspección.
Ruta frontend: /app/inspector-calidad/servicios.
Rol principal: Inspector de calidad.
Objetivo de la pantalla: Gestionar servicios de calidad, calibre y empaque..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/inspector-calidad/servicios/:id; /app/inspector-calidad.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P176. Solicitudes de inspección

- **Etapa:** ETAPA 15 — Backoffice inspector de calidad
- **Ruta:** `/app/inspector-calidad/solicitudes`
- **Rol principal:** Inspector de calidad
- **Objetivo:** Gestionar solicitudes recibidas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/inspector-calidad/solicitudes/:id`
- `/app/inspector-calidad`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P176: Solicitudes de inspección.
Ruta frontend: /app/inspector-calidad/solicitudes.
Rol principal: Inspector de calidad.
Objetivo de la pantalla: Gestionar solicitudes recibidas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/inspector-calidad/solicitudes/:id; /app/inspector-calidad.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P177. Agenda de inspecciones

- **Etapa:** ETAPA 15 — Backoffice inspector de calidad
- **Ruta:** `/app/inspector-calidad/agenda`
- **Rol principal:** Inspector de calidad
- **Objetivo:** Planificar visitas e inspecciones.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/inspector-calidad/agenda/:id`
- `/app/inspector-calidad`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P177: Agenda de inspecciones.
Ruta frontend: /app/inspector-calidad/agenda.
Rol principal: Inspector de calidad.
Objetivo de la pantalla: Planificar visitas e inspecciones..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/inspector-calidad/agenda/:id; /app/inspector-calidad.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P178. Reportes de inspección

- **Etapa:** ETAPA 15 — Backoffice inspector de calidad
- **Ruta:** `/app/inspector-calidad/reportes`
- **Rol principal:** Inspector de calidad
- **Objetivo:** Crear y cargar reportes de calidad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/inspector-calidad/reportes/:id`
- `/app/inspector-calidad`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P178: Reportes de inspección.
Ruta frontend: /app/inspector-calidad/reportes.
Rol principal: Inspector de calidad.
Objetivo de la pantalla: Crear y cargar reportes de calidad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/inspector-calidad/reportes/:id; /app/inspector-calidad.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P179. Documentos inspector

- **Etapa:** ETAPA 15 — Backoffice inspector de calidad
- **Ruta:** `/app/inspector-calidad/documentos`
- **Rol principal:** Inspector de calidad
- **Objetivo:** Gestionar soportes profesionales.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/inspector-calidad/documentos/:id`
- `/app/inspector-calidad`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P179: Documentos inspector.
Ruta frontend: /app/inspector-calidad/documentos.
Rol principal: Inspector de calidad.
Objetivo de la pantalla: Gestionar soportes profesionales..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/inspector-calidad/documentos/:id; /app/inspector-calidad.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P180. Cotizaciones inspección

- **Etapa:** ETAPA 15 — Backoffice inspector de calidad
- **Ruta:** `/app/inspector-calidad/cotizaciones`
- **Rol principal:** Inspector de calidad
- **Objetivo:** Responder solicitudes.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/inspector-calidad/cotizaciones/:id`
- `/app/inspector-calidad`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P180: Cotizaciones inspección.
Ruta frontend: /app/inspector-calidad/cotizaciones.
Rol principal: Inspector de calidad.
Objetivo de la pantalla: Responder solicitudes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/inspector-calidad/cotizaciones/:id; /app/inspector-calidad.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P181. Reputación inspector

- **Etapa:** ETAPA 15 — Backoffice inspector de calidad
- **Ruta:** `/app/inspector-calidad/reputacion`
- **Rol principal:** Inspector de calidad
- **Objetivo:** Gestionar reseñas.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/inspector-calidad/reputacion/:id`
- `/app/inspector-calidad`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P181: Reputación inspector.
Ruta frontend: /app/inspector-calidad/reputacion.
Rol principal: Inspector de calidad.
Objetivo de la pantalla: Gestionar reseñas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/inspector-calidad/reputacion/:id; /app/inspector-calidad.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P182. Configuración inspector

- **Etapa:** ETAPA 15 — Backoffice inspector de calidad
- **Ruta:** `/app/inspector-calidad/configuracion`
- **Rol principal:** Inspector de calidad
- **Objetivo:** Preferencias y seguridad.

### Componentes obligatorios
- Sidebar del rol
- Header interno
- Filtros
- Tabla o cards de registros
- Estados visibles
- Acciones CRUD
- Botón crear/editar
- Detalle lateral o modal
- Paginación
- Exportar cuando aplique

### Acciones obligatorias
- Crear
- Ver detalle
- Editar
- Pausar/activar si aplica
- Eliminar si aplica
- Exportar
- Filtrar

### Navegación siguiente permitida
- `/app/inspector-calidad/configuracion/:id`
- `/app/inspector-calidad`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P182: Configuración inspector.
Ruta frontend: /app/inspector-calidad/configuracion.
Rol principal: Inspector de calidad.
Objetivo de la pantalla: Preferencias y seguridad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar del rol; Header interno; Filtros; Tabla o cards de registros; Estados visibles; Acciones CRUD; Botón crear/editar; Detalle lateral o modal; Paginación; Exportar cuando aplique.
Acciones obligatorias: Crear; Ver detalle; Editar; Pausar/activar si aplica; Eliminar si aplica; Exportar; Filtrar.
Navegación siguiente permitida: /app/inspector-calidad/configuracion/:id; /app/inspector-calidad.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P183. Dashboard administrador

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin`
- **Rol principal:** Administrador general
- **Objetivo:** Ver estado general de plataforma con KPIs, usuarios, publicaciones, pagos, leads y alertas.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P183: Dashboard administrador.
Ruta frontend: /app/admin.
Rol principal: Administrador general.
Objetivo de la pantalla: Ver estado general de plataforma con KPIs, usuarios, publicaciones, pagos, leads y alertas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P184. Gestión de usuarios vigentes

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/usuarios`
- **Rol principal:** Administrador general
- **Objetivo:** Administrar únicamente los roles vigentes aprobados y sus estados.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P184: Gestión de usuarios vigentes.
Ruta frontend: /app/admin/usuarios.
Rol principal: Administrador general.
Objetivo de la pantalla: Administrar únicamente los roles vigentes aprobados y sus estados..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P185. Roles y permisos

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/roles-permisos`
- **Rol principal:** Administrador general
- **Objetivo:** Configurar permisos CRUD, módulos visibles, rutas y accesos por rol.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P185: Roles y permisos.
Ruta frontend: /app/admin/roles-permisos.
Rol principal: Administrador general.
Objetivo de la pantalla: Configurar permisos CRUD, módulos visibles, rutas y accesos por rol..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P186. Categorías y subcategorías

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/categorias`
- **Rol principal:** Administrador general
- **Objetivo:** Administrar taxonomía agrícola completa.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P186: Categorías y subcategorías.
Ruta frontend: /app/admin/categorias.
Rol principal: Administrador general.
Objetivo de la pantalla: Administrar taxonomía agrícola completa..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P187. Publicaciones y moderación

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/publicaciones`
- **Rol principal:** Administrador general
- **Objetivo:** Revisar, aprobar, rechazar, bloquear y destacar publicaciones.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P187: Publicaciones y moderación.
Ruta frontend: /app/admin/publicaciones.
Rol principal: Administrador general.
Objetivo de la pantalla: Revisar, aprobar, rechazar, bloquear y destacar publicaciones..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P188. Tablas nativas Odoo espejo

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/tablas-nativas`
- **Rol principal:** Administrador general
- **Objetivo:** Visualizar y administrar catálogo de tablas espejo provenientes de Odoo sin integración electrónica.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P188: Tablas nativas Odoo espejo.
Ruta frontend: /app/admin/tablas-nativas.
Rol principal: Administrador general.
Objetivo de la pantalla: Visualizar y administrar catálogo de tablas espejo provenientes de Odoo sin integración electrónica..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P189. Tablas propias marketplace

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/tablas-propias`
- **Rol principal:** Administrador general
- **Objetivo:** Administrar definición documental de tablas propias del marketplace.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P189: Tablas propias marketplace.
Ruta frontend: /app/admin/tablas-propias.
Rol principal: Administrador general.
Objetivo de la pantalla: Administrar definición documental de tablas propias del marketplace..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P190. Centro FUR

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur`
- **Rol principal:** Administrador general
- **Objetivo:** Acceder a todas las FUR rectoras del proyecto.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P190: Centro FUR.
Ruta frontend: /app/admin/fur.
Rol principal: Administrador general.
Objetivo de la pantalla: Acceder a todas las FUR rectoras del proyecto..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P191. FUR Usuarios

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/usuarios`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar ficha única de usuarios y roles vigentes.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P191: FUR Usuarios.
Ruta frontend: /app/admin/fur/usuarios.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar ficha única de usuarios y roles vigentes..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P192. FUR Productos

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/productos`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar ficha de productos, cosechas, insumos y maquinaria.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P192: FUR Productos.
Ruta frontend: /app/admin/fur/productos.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar ficha de productos, cosechas, insumos y maquinaria..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P193. FUR Tiendas

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/tiendas`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar ficha de tiendas/perfiles públicos.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P193: FUR Tiendas.
Ruta frontend: /app/admin/fur/tiendas.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar ficha de tiendas/perfiles públicos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P194. FUR Categorías

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/categorias`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar ficha de categorías y subcategorías.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P194: FUR Categorías.
Ruta frontend: /app/admin/fur/categorias.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar ficha de categorías y subcategorías..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P195. FUR Módulos nativos y propios

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/modulos`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar módulos funcionales nativos y propios.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P195: FUR Módulos nativos y propios.
Ruta frontend: /app/admin/fur/modulos.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar módulos funcionales nativos y propios..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P196. FUR GBP de tiendas

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/gbp`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar presencia local y datos tipo Google Business Profile.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P196: FUR GBP de tiendas.
Ruta frontend: /app/admin/fur/gbp.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar presencia local y datos tipo Google Business Profile..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P197. FUR Ofertas y promociones

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/ofertas`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar promociones, destacados y campañas.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P197: FUR Ofertas y promociones.
Ruta frontend: /app/admin/fur/ofertas.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar promociones, destacados y campañas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P198. FUR Sprints

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/sprints`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar ficha de sprints del proyecto.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P198: FUR Sprints.
Ruta frontend: /app/admin/fur/sprints.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar ficha de sprints del proyecto..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P199. FUR Mapa del sitio

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/mapa-sitio`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar rutas públicas, privadas y SEO.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P199: FUR Mapa del sitio.
Ruta frontend: /app/admin/fur/mapa-sitio.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar rutas públicas, privadas y SEO..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P200. FUR Estructura VS Code Frontend

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/frontend-vscode`
- **Rol principal:** Administrador general
- **Objetivo:** Documentar carpetas y componentes frontend.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P200: FUR Estructura VS Code Frontend.
Ruta frontend: /app/admin/fur/frontend-vscode.
Rol principal: Administrador general.
Objetivo de la pantalla: Documentar carpetas y componentes frontend..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P201. FUR Estructura VS Code Backend

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/backend-vscode`
- **Rol principal:** Administrador general
- **Objetivo:** Documentar módulos, controladores, servicios y entidades backend.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P201: FUR Estructura VS Code Backend.
Ruta frontend: /app/admin/fur/backend-vscode.
Rol principal: Administrador general.
Objetivo de la pantalla: Documentar módulos, controladores, servicios y entidades backend..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P202. FUR Librerías Node.js

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/fur/librerias-node`
- **Rol principal:** Administrador general
- **Objetivo:** Documentar librerías NestJS/Node usadas en el proyecto.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P202: FUR Librerías Node.js.
Ruta frontend: /app/admin/fur/librerias-node.
Rol principal: Administrador general.
Objetivo de la pantalla: Documentar librerías NestJS/Node usadas en el proyecto..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P203. Módulos nativos Odoo espejo

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/modulos-nativos`
- **Rol principal:** Administrador general
- **Objetivo:** Listar módulos Odoo usados como referencia espejo.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P203: Módulos nativos Odoo espejo.
Ruta frontend: /app/admin/modulos-nativos.
Rol principal: Administrador general.
Objetivo de la pantalla: Listar módulos Odoo usados como referencia espejo..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P204. Módulos propios marketplace

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/modulos-propios`
- **Rol principal:** Administrador general
- **Objetivo:** Listar módulos construidos para lógica propia del marketplace.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P204: Módulos propios marketplace.
Ruta frontend: /app/admin/modulos-propios.
Rol principal: Administrador general.
Objetivo de la pantalla: Listar módulos construidos para lógica propia del marketplace..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P205. Leads y oportunidades

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/leads`
- **Rol principal:** Administrador general
- **Objetivo:** Administrar leads globales.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P205: Leads y oportunidades.
Ruta frontend: /app/admin/leads.
Rol principal: Administrador general.
Objetivo de la pantalla: Administrar leads globales..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P206. Cotizaciones globales

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/cotizaciones`
- **Rol principal:** Administrador general
- **Objetivo:** Supervisar cotizaciones por categoría y estado.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P206: Cotizaciones globales.
Ruta frontend: /app/admin/cotizaciones.
Rol principal: Administrador general.
Objetivo de la pantalla: Supervisar cotizaciones por categoría y estado..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P207. Radar Agrícola admin

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/radar`
- **Rol principal:** Administrador general
- **Objetivo:** Administrar alertas, coincidencias y planes Radar.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P207: Radar Agrícola admin.
Ruta frontend: /app/admin/radar.
Rol principal: Administrador general.
Objetivo de la pantalla: Administrar alertas, coincidencias y planes Radar..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P208. Pagos y planes

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/pagos-planes`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar monetización, planes, pagos y vencimientos.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P208: Pagos y planes.
Ruta frontend: /app/admin/pagos-planes.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar monetización, planes, pagos y vencimientos..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P209. Ofertas y promociones admin

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/ofertas`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar campañas y publicaciones destacadas.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P209: Ofertas y promociones admin.
Ruta frontend: /app/admin/ofertas.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar campañas y publicaciones destacadas..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P210. GBP y SEO local

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/gbp`
- **Rol principal:** Administrador general
- **Objetivo:** Administrar perfiles locales y visibilidad.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P210: GBP y SEO local.
Ruta frontend: /app/admin/gbp.
Rol principal: Administrador general.
Objetivo de la pantalla: Administrar perfiles locales y visibilidad..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P211. Blog y SEO

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/blog-seo`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar artículos, sitemap, metadatos y páginas SEO.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P211: Blog y SEO.
Ruta frontend: /app/admin/blog-seo.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar artículos, sitemap, metadatos y páginas SEO..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P212. Reportes y analítica

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/reportes`
- **Rol principal:** Administrador general
- **Objetivo:** Ver métricas por usuarios, publicaciones, categorías y monetización.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P212: Reportes y analítica.
Ruta frontend: /app/admin/reportes.
Rol principal: Administrador general.
Objetivo de la pantalla: Ver métricas por usuarios, publicaciones, categorías y monetización..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P213. Soporte y tickets

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/soporte`
- **Rol principal:** Administrador general
- **Objetivo:** Gestionar tickets, incidencias y ayuda.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P213: Soporte y tickets.
Ruta frontend: /app/admin/soporte.
Rol principal: Administrador general.
Objetivo de la pantalla: Gestionar tickets, incidencias y ayuda..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P214. Notificaciones globales

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/notificaciones`
- **Rol principal:** Administrador general
- **Objetivo:** Crear y monitorear notificaciones.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P214: Notificaciones globales.
Ruta frontend: /app/admin/notificaciones.
Rol principal: Administrador general.
Objetivo de la pantalla: Crear y monitorear notificaciones..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P215. Configuración general

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/configuracion`
- **Rol principal:** Administrador general
- **Objetivo:** Configurar plataforma, moneda, unidades, país, colores, integraciones y parámetros.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P215: Configuración general.
Ruta frontend: /app/admin/configuracion.
Rol principal: Administrador general.
Objetivo de la pantalla: Configurar plataforma, moneda, unidades, país, colores, integraciones y parámetros..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P216. Auditoría y trazabilidad

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/auditoria`
- **Rol principal:** Administrador general
- **Objetivo:** Revisar bitácora de acciones.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P216: Auditoría y trazabilidad.
Ruta frontend: /app/admin/auditoria.
Rol principal: Administrador general.
Objetivo de la pantalla: Revisar bitácora de acciones..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P217. Importación y exportación

- **Etapa:** ETAPA 16 — Backoffice administrador general completo
- **Ruta:** `/app/admin/import-export`
- **Rol principal:** Administrador general
- **Objetivo:** Cargar y exportar datos CSV/Excel.

### Componentes obligatorios
- Sidebar admin completo
- Header admin
- Breadcrumbs
- Filtros avanzados
- Tabla de registros
- Acciones masivas
- Detalle/edición
- Estados
- Exportación
- Auditoría

### Acciones obligatorias
- Crear
- Editar
- Ver detalle
- Aprobar/Rechazar si aplica
- Exportar
- Filtrar
- Auditar

### Navegación siguiente permitida
- `/app/admin`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P217: Importación y exportación.
Ruta frontend: /app/admin/import-export.
Rol principal: Administrador general.
Objetivo de la pantalla: Cargar y exportar datos CSV/Excel..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Sidebar admin completo; Header admin; Breadcrumbs; Filtros avanzados; Tabla de registros; Acciones masivas; Detalle/edición; Estados; Exportación; Auditoría.
Acciones obligatorias: Crear; Editar; Ver detalle; Aprobar/Rechazar si aplica; Exportar; Filtrar; Auditar.
Navegación siguiente permitida: /app/admin.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P218. Centro global de notificaciones

- **Etapa:** ETAPA 17 — Pantallas transversales, estados UI y responsive
- **Ruta:** `/app/notificaciones`
- **Rol principal:** Todos los roles
- **Objetivo:** Mostrar notificaciones agrupadas por sistema, cotización, Radar, publicación, pago y soporte.

### Componentes obligatorios
- Layout responsive
- Header compacto
- Estados visuales
- Acciones principales visibles
- Accesibilidad
- Consistencia visual

### Acciones obligatorias
- Navegar
- Reintentar
- Abrir detalle
- Guardar
- Contactar si aplica

### Navegación siguiente permitida
- `/`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P218: Centro global de notificaciones.
Ruta frontend: /app/notificaciones.
Rol principal: Todos los roles.
Objetivo de la pantalla: Mostrar notificaciones agrupadas por sistema, cotización, Radar, publicación, pago y soporte..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Layout responsive; Header compacto; Estados visuales; Acciones principales visibles; Accesibilidad; Consistencia visual.
Acciones obligatorias: Navegar; Reintentar; Abrir detalle; Guardar; Contactar si aplica.
Navegación siguiente permitida: /.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P219. Soporte autenticado

- **Etapa:** ETAPA 17 — Pantallas transversales, estados UI y responsive
- **Ruta:** `/app/soporte`
- **Rol principal:** Todos los roles
- **Objetivo:** Permitir crear tickets, ver historial y contactar soporte.

### Componentes obligatorios
- Layout responsive
- Header compacto
- Estados visuales
- Acciones principales visibles
- Accesibilidad
- Consistencia visual

### Acciones obligatorias
- Navegar
- Reintentar
- Abrir detalle
- Guardar
- Contactar si aplica

### Navegación siguiente permitida
- `/`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P219: Soporte autenticado.
Ruta frontend: /app/soporte.
Rol principal: Todos los roles.
Objetivo de la pantalla: Permitir crear tickets, ver historial y contactar soporte..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Layout responsive; Header compacto; Estados visuales; Acciones principales visibles; Accesibilidad; Consistencia visual.
Acciones obligatorias: Navegar; Reintentar; Abrir detalle; Guardar; Contactar si aplica.
Navegación siguiente permitida: /.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P220. Gestor documental transversal

- **Etapa:** ETAPA 17 — Pantallas transversales, estados UI y responsive
- **Ruta:** `/app/documentos`
- **Rol principal:** Todos los roles
- **Objetivo:** Gestionar documentos asociados a perfil, publicación, cotización o verificación.

### Componentes obligatorios
- Layout responsive
- Header compacto
- Estados visuales
- Acciones principales visibles
- Accesibilidad
- Consistencia visual

### Acciones obligatorias
- Navegar
- Reintentar
- Abrir detalle
- Guardar
- Contactar si aplica

### Navegación siguiente permitida
- `/`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P220: Gestor documental transversal.
Ruta frontend: /app/documentos.
Rol principal: Todos los roles.
Objetivo de la pantalla: Gestionar documentos asociados a perfil, publicación, cotización o verificación..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Layout responsive; Header compacto; Estados visuales; Acciones principales visibles; Accesibilidad; Consistencia visual.
Acciones obligatorias: Navegar; Reintentar; Abrir detalle; Guardar; Contactar si aplica.
Navegación siguiente permitida: /.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P221. Mensajes y conversaciones

- **Etapa:** ETAPA 17 — Pantallas transversales, estados UI y responsive
- **Ruta:** `/app/mensajes`
- **Rol principal:** Todos los roles
- **Objetivo:** Mostrar conversaciones internas y referencias a WhatsApp.

### Componentes obligatorios
- Layout responsive
- Header compacto
- Estados visuales
- Acciones principales visibles
- Accesibilidad
- Consistencia visual

### Acciones obligatorias
- Navegar
- Reintentar
- Abrir detalle
- Guardar
- Contactar si aplica

### Navegación siguiente permitida
- `/`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P221: Mensajes y conversaciones.
Ruta frontend: /app/mensajes.
Rol principal: Todos los roles.
Objetivo de la pantalla: Mostrar conversaciones internas y referencias a WhatsApp..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Layout responsive; Header compacto; Estados visuales; Acciones principales visibles; Accesibilidad; Consistencia visual.
Acciones obligatorias: Navegar; Reintentar; Abrir detalle; Guardar; Contactar si aplica.
Navegación siguiente permitida: /.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P222. Estado vacío estándar

- **Etapa:** ETAPA 17 — Pantallas transversales, estados UI y responsive
- **Ruta:** `/app/estado-vacio`
- **Rol principal:** Todos los roles
- **Objetivo:** Definir cómo se ven módulos sin registros.

### Componentes obligatorios
- Layout responsive
- Header compacto
- Estados visuales
- Acciones principales visibles
- Accesibilidad
- Consistencia visual

### Acciones obligatorias
- Navegar
- Reintentar
- Abrir detalle
- Guardar
- Contactar si aplica

### Navegación siguiente permitida
- `/`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P222: Estado vacío estándar.
Ruta frontend: /app/estado-vacio.
Rol principal: Todos los roles.
Objetivo de la pantalla: Definir cómo se ven módulos sin registros..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Layout responsive; Header compacto; Estados visuales; Acciones principales visibles; Accesibilidad; Consistencia visual.
Acciones obligatorias: Navegar; Reintentar; Abrir detalle; Guardar; Contactar si aplica.
Navegación siguiente permitida: /.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P223. Estado cargando estándar

- **Etapa:** ETAPA 17 — Pantallas transversales, estados UI y responsive
- **Ruta:** `/app/estado-cargando`
- **Rol principal:** Todos los roles
- **Objetivo:** Definir skeletons y spinners.

### Componentes obligatorios
- Layout responsive
- Header compacto
- Estados visuales
- Acciones principales visibles
- Accesibilidad
- Consistencia visual

### Acciones obligatorias
- Navegar
- Reintentar
- Abrir detalle
- Guardar
- Contactar si aplica

### Navegación siguiente permitida
- `/`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P223: Estado cargando estándar.
Ruta frontend: /app/estado-cargando.
Rol principal: Todos los roles.
Objetivo de la pantalla: Definir skeletons y spinners..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Layout responsive; Header compacto; Estados visuales; Acciones principales visibles; Accesibilidad; Consistencia visual.
Acciones obligatorias: Navegar; Reintentar; Abrir detalle; Guardar; Contactar si aplica.
Navegación siguiente permitida: /.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P224. Estado error estándar

- **Etapa:** ETAPA 17 — Pantallas transversales, estados UI y responsive
- **Ruta:** `/app/estado-error`
- **Rol principal:** Todos los roles
- **Objetivo:** Definir mensajes de error y recuperación.

### Componentes obligatorios
- Layout responsive
- Header compacto
- Estados visuales
- Acciones principales visibles
- Accesibilidad
- Consistencia visual

### Acciones obligatorias
- Navegar
- Reintentar
- Abrir detalle
- Guardar
- Contactar si aplica

### Navegación siguiente permitida
- `/`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P224: Estado error estándar.
Ruta frontend: /app/estado-error.
Rol principal: Todos los roles.
Objetivo de la pantalla: Definir mensajes de error y recuperación..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Layout responsive; Header compacto; Estados visuales; Acciones principales visibles; Accesibilidad; Consistencia visual.
Acciones obligatorias: Navegar; Reintentar; Abrir detalle; Guardar; Contactar si aplica.
Navegación siguiente permitida: /.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P225. Mobile homepage

- **Etapa:** ETAPA 17 — Pantallas transversales, estados UI y responsive
- **Ruta:** `/mobile/home`
- **Rol principal:** Usuario visitante
- **Objetivo:** Adaptación mobile de home con buscador, categorías y CTA.

### Componentes obligatorios
- Layout responsive
- Header compacto
- Estados visuales
- Acciones principales visibles
- Accesibilidad
- Consistencia visual

### Acciones obligatorias
- Navegar
- Reintentar
- Abrir detalle
- Guardar
- Contactar si aplica

### Navegación siguiente permitida
- `/`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P225: Mobile homepage.
Ruta frontend: /mobile/home.
Rol principal: Usuario visitante.
Objetivo de la pantalla: Adaptación mobile de home con buscador, categorías y CTA..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Layout responsive; Header compacto; Estados visuales; Acciones principales visibles; Accesibilidad; Consistencia visual.
Acciones obligatorias: Navegar; Reintentar; Abrir detalle; Guardar; Contactar si aplica.
Navegación siguiente permitida: /.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P226. Mobile resultados

- **Etapa:** ETAPA 17 — Pantallas transversales, estados UI y responsive
- **Ruta:** `/mobile/resultados`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Adaptación mobile de resultados con toggle lista/mapa.

### Componentes obligatorios
- Layout responsive
- Header compacto
- Estados visuales
- Acciones principales visibles
- Accesibilidad
- Consistencia visual

### Acciones obligatorias
- Navegar
- Reintentar
- Abrir detalle
- Guardar
- Contactar si aplica

### Navegación siguiente permitida
- `/`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P226: Mobile resultados.
Ruta frontend: /mobile/resultados.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Adaptación mobile de resultados con toggle lista/mapa..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Layout responsive; Header compacto; Estados visuales; Acciones principales visibles; Accesibilidad; Consistencia visual.
Acciones obligatorias: Navegar; Reintentar; Abrir detalle; Guardar; Contactar si aplica.
Navegación siguiente permitida: /.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P227. Mobile detalle anuncio

- **Etapa:** ETAPA 17 — Pantallas transversales, estados UI y responsive
- **Ruta:** `/mobile/detalle`
- **Rol principal:** Usuario visitante / Comprador agrícola
- **Objetivo:** Adaptación mobile del detalle con CTA fijo inferior.

### Componentes obligatorios
- Layout responsive
- Header compacto
- Estados visuales
- Acciones principales visibles
- Accesibilidad
- Consistencia visual

### Acciones obligatorias
- Navegar
- Reintentar
- Abrir detalle
- Guardar
- Contactar si aplica

### Navegación siguiente permitida
- `/`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P227: Mobile detalle anuncio.
Ruta frontend: /mobile/detalle.
Rol principal: Usuario visitante / Comprador agrícola.
Objetivo de la pantalla: Adaptación mobile del detalle con CTA fijo inferior..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Layout responsive; Header compacto; Estados visuales; Acciones principales visibles; Accesibilidad; Consistencia visual.
Acciones obligatorias: Navegar; Reintentar; Abrir detalle; Guardar; Contactar si aplica.
Navegación siguiente permitida: /.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

## P228. Mobile dashboard por rol

- **Etapa:** ETAPA 17 — Pantallas transversales, estados UI y responsive
- **Ruta:** `/mobile/dashboard`
- **Rol principal:** Todos los roles
- **Objetivo:** Adaptación mobile de dashboard con menú inferior o drawer.

### Componentes obligatorios
- Layout responsive
- Header compacto
- Estados visuales
- Acciones principales visibles
- Accesibilidad
- Consistencia visual

### Acciones obligatorias
- Navegar
- Reintentar
- Abrir detalle
- Guardar
- Contactar si aplica

### Navegación siguiente permitida
- `/`

### Criterio de aceptación visual
La pantalla debe verse coherente con el sistema visual global, estar conectada a la ruta indicada y mostrar estados vacíos, cargando y error cuando aplique.

### Prompt exacto para Google Stitch

```text
Diseña solamente la pantalla P228: Mobile dashboard por rol.
Ruta frontend: /mobile/dashboard.
Rol principal: Todos los roles.
Objetivo de la pantalla: Adaptación mobile de dashboard con menú inferior o drawer..
Mantén el diseño de AgroBot Latam como marketplace agrícola tipo Yelp en su lógica visual y tipo MercadoLibre en su lógica funcional. No copies logos ni marcas externas.
Componentes obligatorios: Layout responsive; Header compacto; Estados visuales; Acciones principales visibles; Accesibilidad; Consistencia visual.
Acciones obligatorias: Navegar; Reintentar; Abrir detalle; Guardar; Contactar si aplica.
Navegación siguiente permitida: /.
Diseña desktop-first con adaptación mobile. Usa paleta verde agrícola, blanco, gris claro, acentos naranja/amarillo para ofertas, badges verdes/azules para verificación y rojo suave para errores. No agregues pantallas no solicitadas. No cambies el rol ni la ruta. No omitas estados visuales.
```

---

# 5. CHECKLIST FINAL PARA VALIDAR QUE STITCH NO OMITIÓ PANTALLAS

Antes de aceptar el diseño generado, verificar:

- [ ] El homepage existe y funciona como marketplace tipo Yelp + MercadoLibre.
- [ ] Existe búsqueda con resultados y mapa.
- [ ] Existen categorías y subcategorías agrícolas.
- [ ] Existen detalles para producto/cosecha, finca, insumo, maquinaria, servicio agronómico, transporte, laboratorio, certificador e inspector.
- [ ] Existe flujo de cotización.
- [ ] Existe flujo de WhatsApp.
- [ ] Existe flujo de favoritos y comparador.
- [ ] Existe autenticación completa.
- [ ] Existe onboarding por roles vigentes.
- [ ] Existe flujo de publicación por cada tipo permitido.
- [ ] Existe dashboard para comprador agrícola.
- [ ] Existe dashboard para productor agrícola.
- [ ] Existe dashboard para vendedor agrícola.
- [ ] Existe dashboard para dueño de finca agrícola.
- [ ] Existe dashboard para proveedor de insumos agrícolas.
- [ ] Existe dashboard para proveedor de maquinaria agrícola.
- [ ] Existe dashboard para agrónomo o asesor técnico.
- [ ] Existe dashboard para transportista agrícola.
- [ ] Existe dashboard para cooperativa agrícola.
- [ ] Existe dashboard para laboratorio agrícola.
- [ ] Existe dashboard para certificador agrícola.
- [ ] Existe dashboard para inspector de calidad.
- [ ] Existe backoffice administrador general completo.
- [ ] Existen pantallas FUR solicitadas.
- [ ] Existen pantallas de tablas nativas Odoo espejo y tablas propias.
- [ ] Existen pantallas de módulos nativos y propios.
- [ ] Existen pantallas de librerías Node.js.
- [ ] Existen estados vacío, cargando y error.
- [ ] Existe adaptación mobile de home, resultados, detalle y dashboard.

---

# 6. FORMA CORRECTA DE TRABAJAR CON STITCH

1. Pegar el prompt de la pantalla P001 solamente.
2. Revisar si respeta ruta, rol, componentes y acciones.
3. Pedir ajustes si faltó algo.
4. Continuar con P002.
5. No pedir pantallas por lote de más de 3, porque Stitch puede dispersarse.
6. Para dashboards, generar primero el dashboard principal del rol y luego sus subpantallas CRUD.
7. Para administrador, generar cada pantalla FUR y cada tabla por separado.

## Prompt de control para correcciones

```text
Corrige la pantalla anterior sin cambiar la ruta ni el rol. Te faltó incluir los componentes obligatorios indicados en el documento. Mantén el sistema visual AgroBot Latam, tipo Yelp + MercadoLibre, y no agregues módulos fuera de alcance.
```