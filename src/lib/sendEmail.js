// Envío del formulario por correo mediante Web3Forms. La access key es pública por
// diseño (solo identifica el buzón de destino), así que puede vivir en el cliente;
// no hay credenciales SMTP ni claves privadas en el navegador.
const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export const emailConfigured = Boolean(ACCESS_KEY)

export async function sendContactEmail(fields) {
  if (!ACCESS_KEY) {
    throw new Error('missing-access-key')
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `Nuevo proyecto: ${fields.projectType} — ${fields.name}`,
      from_name: 'Sitio web Wodex System',
      name: fields.name,
      email: fields.email,
      empresa: fields.company || '—',
      whatsapp: fields.phone || '—',
      tipo_de_proyecto: fields.projectType,
      message: fields.message,
      botcheck: fields.botcheck,
    }),
  })

  const result = await response.json().catch(() => ({}))
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'send-failed')
  }
}
