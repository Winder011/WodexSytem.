// Mapa de rutas del sitio. Hoy todo vive en la página de inicio (`anchor`), pero
// cada sección ya tiene su ruta futura reservada (`path`). Cuando se agregue un
// router, basta con crear la página y marcarla como `indexed` para que entre al
// sitemap. vite.config.js lee este archivo, así que no debe importar nada de React.
export const ROUTES = [
  { key: 'inicio', label: 'Inicio', path: '/', anchor: 'inicio', indexed: true },
  { key: 'servicios', label: 'Servicios', path: '/servicios', anchor: 'servicios' },
  {
    key: 'desarrollo-web',
    label: 'Desarrollo Web',
    path: '/desarrollo-web',
    anchor: 'desarrollo-web',
  },
  { key: 'marketing', label: 'Marketing', path: '/marketing', anchor: 'servicios' },
  { key: 'publicidad', label: 'Publicidad', path: '/publicidad', anchor: 'servicios' },
  { key: 'software', label: 'Software', path: '/software', anchor: 'servicios' },
  { key: 'proyectos', label: 'Proyectos', path: '/proyectos', anchor: 'proyectos' },
  { key: 'nosotros', label: 'Nosotros', path: '/nosotros', anchor: 'inicio' },
  { key: 'contacto', label: 'Contacto', path: '/contacto', anchor: 'contacto' },
]

const byKey = Object.fromEntries(ROUTES.map((route) => [route.key, route]))

export const NAV_KEYS = ['inicio', 'servicios', 'desarrollo-web', 'proyectos', 'contacto']
export const NAV = NAV_KEYS.map((key) => byKey[key])

// Mientras el sitio sea de una sola página, los enlaces internos apuntan al ancla.
export const hrefFor = (key) => `#${byKey[key].anchor}`
