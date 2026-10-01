import { ArrowUpRight, Clock, Cpu, MapPin } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import { WhatsAppIcon } from '../components/icons'
import { whatsappUrl } from '../lib/whatsapp'

const engineerHref = whatsappUrl()

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
            Atención directa con un ingeniero.{' '}
            <span className="text-muted">Sin intermediarios.</span>
          </h2>
          <p className="contact__lede" data-reveal>
            Respondemos tus mensajes en menos de 24 horas.
          </p>

          <div className="engineer-card" data-reveal>
            <div className="engineer-card__head">
              <span className="engineer-card__avatar" aria-hidden="true">
                <Cpu />
              </span>
              <div>
                <p className="engineer-card__title">Equipo de ingeniería Wodex</p>
                <p className="engineer-card__meta">
                  Quien te responde es quien diseña y construye tu proyecto.
                </p>
              </div>
            </div>
            <a
              className="button button--whatsapp-solid button--lg engineer-card__cta"
              href={engineerHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Hablar con un ingeniero <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (abre WhatsApp en una pestaña nueva)</span>
            </a>
            <ul className="engineer-card__facts">
              <li>
                <Clock aria-hidden="true" /> Respuesta en menos de 24 h
              </li>
              <li>
                <MapPin aria-hidden="true" /> Costa Rica
              </li>
            </ul>
          </div>
        </div>

        <div className="contact__panel" data-reveal>
          <h3 className="contact__panel-title">¿Prefieres escribirnos?</h3>
          <p className="contact__panel-copy">
            Envía los detalles por correo o continúa la conversación por WhatsApp.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
