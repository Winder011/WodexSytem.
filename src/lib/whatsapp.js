import { SITE } from '../config/site'

// Arma el mensaje con los datos que la persona ya escribió; los campos vacíos se omiten.
export function buildWhatsAppMessage({ name, company, projectType, message } = {}) {
  const greeting = name?.trim()
    ? `Hola, soy ${name.trim()}. Me interesa conocer los servicios de Wodex System.`
    : 'Hola, me interesa conocer los servicios de Wodex System.'

  const details = [
    projectType && `Proyecto: ${projectType}`,
    company?.trim() && `Empresa: ${company.trim()}`,
    message?.trim() && `Mensaje: ${message.trim()}`,
  ].filter(Boolean)

  return [greeting, ...details].join('\n')
}

export function whatsappUrl(fields) {
  const text = encodeURIComponent(buildWhatsAppMessage(fields))
  return `https://wa.me/${SITE.whatsapp.number}?text=${text}`
}
