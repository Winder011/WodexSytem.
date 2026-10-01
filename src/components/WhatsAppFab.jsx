import { WhatsAppIcon } from './icons'
import { whatsappUrl } from '../lib/whatsapp'

const href = whatsappUrl()

export default function WhatsAppFab() {
  return (
    <a className="whatsapp-fab" href={href} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon />
      <span className="whatsapp-fab__label">Hablar por WhatsApp</span>
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  )
}
