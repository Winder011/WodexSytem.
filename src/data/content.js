import {
  Blocks,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Gauge,
  Globe,
  Layers,
  LayoutTemplate,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  ScanEye,
  ShieldCheck,
  ShoppingBag,
  Store,
} from 'lucide-react'
import jsmLogo from '../assets/clients/jsm.webp'

export const PILLARS = [
  {
    key: 'web',
    label: 'Desarrollo web',
    title: 'Presencia digital que representa tu empresa.',
    text: 'Desarrollamos experiencias digitales alineadas con la identidad y los objetivos de tu empresa.',
    icon: Globe,
    items: ['Sitios corporativos', 'Landing pages', 'Tiendas online', 'Sistemas web'],
    projectType: 'Página web',
  },
  {
    key: 'marketing',
    label: 'Marketing digital',
    title: 'Que te encuentren las personas correctas.',
    text: 'Posicionamiento y campañas medibles, conectadas a tu sitio y a tus objetivos.',
    icon: ChartNoAxesCombined,
    items: ['SEO', 'Publicidad digital', 'Estrategia digital', 'Analítica'],
    projectType: 'Marketing digital',
  },
  {
    key: 'software',
    label: 'Software a medida',
    title: 'Herramientas que siguen tus procesos.',
    text: 'Software diseñado alrededor de cómo opera tu empresa.',
    icon: Code2,
    items: ['Software personalizado', 'Automatización', 'Integraciones', 'Sistemas empresariales'],
    projectType: 'Software a medida',
  },
]

// Disciplinas que orbitan alrededor de Wodex en el hero.
export const ORBIT = [
  { label: 'Web', icon: Globe },
  { label: 'Marketing', icon: ChartNoAxesCombined },
  { label: 'Software', icon: Code2 },
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

export const QUALITY = [
  { label: 'Diseño', text: 'Identidad propia', icon: Palette },
  { label: 'UX', text: 'Recorridos claros', icon: ScanEye },
  { label: 'Rendimiento', text: 'Carga inmediata', icon: Gauge },
  { label: 'Seguridad', text: 'Buenas prácticas', icon: ShieldCheck },
  { label: 'Responsive', text: 'Todo dispositivo', icon: MonitorSmartphone },
  { label: 'Escalabilidad', text: 'Listo para crecer', icon: Layers },
]

export const PROCESS = [
  ['Descubrimos', 'Entendemos tu empresa, tus usuarios y el objetivo del proyecto.'],
  ['Diseñamos', 'Definimos estructura y propuesta visual.'],
  ['Desarrollamos', 'Construimos con avances visibles y pruebas en cada etapa.'],
  ['Lanzamos', 'Publicamos tu proyecto y seguimos contigo en futuras mejoras y mantenimiento.'],
]

// Empresas que confían en Wodex (sección Clientes Wodex).
export const CLIENTS = [
  {
    name: 'JSM Servicentros',
    tagline: 'Soluciones para su control tecnológico y operativo.',
    description:
      'Desarrollamos Asset Hub para centralizar la gestión de activos de JSM Servicentros, facilitando el control de equipos, mantenimientos y operaciones desde una plataforma web.',
    logo: jsmLogo,
    logoWidth: 280,
    logoHeight: 151,
  },
]
