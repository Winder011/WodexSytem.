import {
  Blocks,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Globe,
  LayoutTemplate,
  Megaphone,
  MousePointerClick,
  Search,
  ShoppingBag,
  Store,
  UserRoundCheck,
  Workflow,
} from 'lucide-react'

export const PILLARS = [
  {
    key: 'presencia',
    label: 'Presencia digital',
    title: 'Que te encuentren y confíen en ti.',
    text: 'Sitios rápidos y bien diseñados que presentan tu negocio con la seriedad que merece.',
    icon: Globe,
    items: ['Desarrollo web', 'Landing pages', 'Tiendas online', 'Catálogos digitales'],
    projectType: 'Página web',
  },
  {
    key: 'crecimiento',
    label: 'Crecimiento',
    title: 'Que lleguen más personas correctas.',
    text: 'Campañas y posicionamiento para atraer visitas con intención real de comprar o contratar.',
    icon: ChartNoAxesCombined,
    items: ['Marketing digital', 'Publicidad digital', 'SEO', 'Estrategia digital'],
    projectType: 'Marketing y publicidad',
  },
  {
    key: 'tecnologia',
    label: 'Tecnología',
    title: 'Que tu operación funcione sola.',
    text: 'Software a la medida de tus procesos, para dejar atrás hojas sueltas y tareas repetidas.',
    icon: Code2,
    items: ['Software personalizado', 'Automatización', 'Integraciones', 'Sistemas empresariales'],
    projectType: 'Software a medida',
  },
]

export const PROBLEMS = [
  ['No tienes página web.', 'Un sitio profesional, rápido y fácil de encontrar en Google.'],
  [
    'Dependes solo de redes sociales.',
    'Un canal propio que controlas, sin depender de un algoritmo.',
  ],
  [
    'Tus clientes no encuentran la información.',
    'Servicios, horarios, precios y contacto claros en un solo lugar.',
  ],
  [
    'Falta confianza o presencia profesional.',
    'Una imagen cuidada que respalda la calidad de tu trabajo.',
  ],
  ['Se pierden oportunidades.', 'Formularios y WhatsApp conectados para responder a tiempo.'],
]

export const AUDIENCES = [
  'Pequeños negocios',
  'Emprendedores',
  'Restaurantes',
  'Tiendas',
  'Profesionales',
  'Empresas',
  'Negocios sin página web',
]

export const WEB_SERVICES = [
  {
    title: 'Landing pages',
    text: 'Una página enfocada en una oferta y una acción.',
    icon: MousePointerClick,
  },
  {
    title: 'Sitios corporativos',
    text: 'Tu empresa, tus servicios y tu equipo, bien presentados.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Catálogos',
    text: 'Productos ordenados y fáciles de consultar o pedir.',
    icon: LayoutTemplate,
  },
  {
    title: 'Tiendas online',
    text: 'Vende en línea con pagos y pedidos organizados.',
    icon: ShoppingBag,
  },
  { title: 'Sistemas web', text: 'Reservas, cotizaciones o paneles para tu equipo.', icon: Blocks },
  { title: 'Sitios personalizados', text: 'Cuando tu idea no cabe en una plantilla.', icon: Store },
]

export const WEB_STANDARDS = [
  'Diseño adaptado a móvil, tablet y escritorio',
  'Carga rápida y buenas prácticas de SEO',
  'Botón de WhatsApp y formularios de contacto',
  'Analítica para medir visitas y contactos',
]

export const FUNNEL = [
  {
    label: 'Publicidad',
    text: 'Campañas en Meta y Google dirigidas a tu cliente.',
    icon: Megaphone,
  },
  { label: 'Tráfico', text: 'Visitas desde anuncios, búsquedas y redes.', icon: Search },
  { label: 'Sitio web', text: 'Una página clara que responde dudas.', icon: Globe },
  {
    label: 'Conversión',
    text: 'Formulario, WhatsApp o compra en un clic.',
    icon: MousePointerClick,
  },
  { label: 'Cliente', text: 'Una oportunidad que llega a tu equipo.', icon: UserRoundCheck },
]

export const PROCESS = [
  ['Descubrimos', 'Conversamos sobre tu negocio, tus clientes y lo que quieres lograr.'],
  ['Diseñamos', 'Definimos estructura, mensajes y una propuesta visual que puedes revisar.'],
  ['Desarrollamos', 'Construimos con avances visibles para que veas el progreso.'],
  ['Lanzamos', 'Publicamos, probamos en todos los dispositivos y conectamos tus canales.'],
  ['Hacemos crecer', 'Medimos, ajustamos y sumamos mejoras cuando tu negocio lo pide.'],
]

export const CASE_STUDY = {
  name: 'Asset Hub',
  kind: 'Sistema web para gestión de activos empresariales',
  steps: [
    [
      'Problema',
      'El control de equipos, movimientos y mantenimientos estaba disperso y era difícil de consultar.',
    ],
    [
      'Solución',
      'Una plataforma central para registrar activos, su ubicación, responsables, infraestructura y mantenimiento.',
    ],
    [
      'Resultado',
      'Información operativa en un solo lugar, con historial de cada activo y consultas más rápidas.',
    ],
  ],
  stack: ['Aplicación web', 'Base de datos', 'Panel administrativo', 'Reportes'],
}

export const CONNECTED = [
  { label: 'Web', icon: Globe },
  { label: 'Marketing', icon: Megaphone },
  { label: 'Software', icon: Code2 },
  { label: 'Automatización', icon: Workflow },
]

export const PRINCIPLES = [
  ['Hablamos claro', 'Sin tecnicismos innecesarios ni propuestas infladas.'],
  ['Pensamos en tu operación', 'Diseñamos a partir de cómo trabaja tu negocio.'],
  ['Seguimos contigo', 'Después del lanzamiento, ajustamos y mejoramos.'],
  ['Equipo en Costa Rica', 'Mismo horario, mismo idioma, trato directo.'],
]
