import { Mail, MapPin } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import { WhatsAppIcon } from '../components/icons'
import { SITE } from '../config/site'
import { whatsappUrl } from '../lib/whatsapp'

export default function ContactSection() {
  return (
    <section id="contacto" className="section contact" aria-labelledby="contact-title">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container contact__layout">
        <div className="contact__intro">
          <p className="eyebrow" data-reveal>
            Contacto
          </p>
          <h2 id="contact-title" data-reveal>
            Hablemos de tu <em className="accent-serif">proyecto.</em>
          </h2>
          <p className="contact__lede" data-reveal>
            Cuéntanos qué quieres crear, mejorar o automatizar. Te respondemos con preguntas
            concretas y una propuesta clara.
          </p>

          <ul className="contact-options" data-reveal>
            <li className="contact-option">
              <span className="contact-option__icon">
                <Mail aria-hidden="true" />
              </span>
              <div>
                <h3>Por correo</h3>
                <p>Completa el formulario y recibimos tu mensaje directamente.</p>
              </div>
            </li>
            <li className="contact-option contact-option--whatsapp">
              <span className="contact-option__icon">
                <WhatsAppIcon />
              </span>
              <div>
                <h3>Por WhatsApp</h3>
                <p>
                  Escríbenos al{' '}
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                    {SITE.whatsapp.display}
                  </a>{' '}
                  o usa el botón del formulario para enviar tus datos.
                </p>
              </div>
            </li>
            <li className="contact-option">
              <span className="contact-option__icon">
                <MapPin aria-hidden="true" />
              </span>
              <div>
                <h3>Costa Rica</h3>
                <p>Trabajamos con negocios de todo el país, de forma remota o presencial.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact__panel" data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
