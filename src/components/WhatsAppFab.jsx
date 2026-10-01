import { WhatsAppIcon } from './icons'
import { whatsappUrl } from '../lib/whatsapp'

const href = whatsappUrl()

export default function WhatsAppFab() {
  return (
    <a className="whatsapp-fab" href={href} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon />
      <span className="whatsapp-fab__label">Hablar con un ingeniero</span>
      <span className="sr-only"> (abre WhatsApp en una pestaña nueva)</span>
    </a>
  )
}
