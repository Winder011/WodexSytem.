import { ArrowUpRight } from 'lucide-react'
import { WEB_SERVICES } from '../data/content'
import { whatsappUrl } from '../lib/whatsapp'

const webHref = whatsappUrl({ projectType: 'Página web' })

export default function WebDevelopment() {
  return (
    <section id="desarrollo-web" className="section web-dev" aria-labelledby="webdev-title">
      <div className="web-dev__glow" aria-hidden="true" />
      <div className="container">
        <div className="web-dev__top">
          <div data-reveal>
            <p className="eyebrow">Desarrollo web</p>
            <h2 id="webdev-title">
              Tu empresa merece una <em className="accent-serif">presencia digital</em> profesional.
            </h2>
          </div>
          <div className="web-dev__intro" data-reveal>
            <p>
              Sitios y plataformas que explican lo que haces, generan confianza y facilitan que te
              contacten. Con la misma ingeniería que usamos para construir software.
            </p>
            <a
              className="button button--primary button--lg"
              href={webHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero mi página web <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (abre WhatsApp en una pestaña nueva)</span>
            </a>
          </div>
        </div>

        <ul className="web-services">
          {WEB_SERVICES.map(({ title, text, icon: Icon }, index) => (
            <li
              key={title}
              className="web-service"
              data-reveal
              style={{ '--delay': `${(index % 3) * 70}ms` }}
            >
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
