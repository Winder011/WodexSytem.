import { SITE } from '../config/site'

const ENGINEER_MESSAGE =
  'Hola, me gustaría hablar con un ingeniero de Wodex System sobre un proyecto'

// Arma el mensaje con los datos que la persona ya escribió; los campos vacíos se omiten.
// Sin datos, se usa el mensaje directo para hablar con un ingeniero.
export function buildWhatsAppMessage({ name, company, projectType, message } = {}) {
  const details = [
    projectType && `Proyecto: ${projectType}`,
    company?.trim() && `Empresa: ${company.trim()}`,
    message?.trim() && `Mensaje: ${message.trim()}`,
  ].filter(Boolean)

  if (!name?.trim() && !details.length) return ENGINEER_MESSAGE

  const greeting = name?.trim()
    ? `Hola, soy ${name.trim()}. Me interesa conocer los servicios de Wodex System.`
    : 'Hola, me interesa conocer los servicios de Wodex System.'

  return [greeting, ...details].join('\n')
}

export function whatsappUrl(fields) {
  const text = encodeURIComponent(buildWhatsAppMessage(fields))
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`
}
