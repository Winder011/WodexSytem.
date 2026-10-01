import Brand from './Brand'
import { InstagramIcon, WhatsAppIcon } from './icons'
import { hrefFor } from '../config/routes'
import { SITE } from '../config/site'
import { PILLARS } from '../data/content'
import { whatsappUrl } from '../lib/whatsapp'

const company = ['desarrollo-web', 'proyectos', 'contacto']
const companyLabels = {
  'desarrollo-web': 'Desarrollo web',
  proyectos: 'Proyectos',
  contacto: 'Contacto',
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Brand />
          <p>{SITE.tagline}</p>
          <p className="site-footer__place">
            Desarrollo web, software y soluciones digitales desde Costa Rica.
          </p>
        </div>

        <nav aria-label="Soluciones">
          <h2 className="site-footer__title">Soluciones</h2>
          <ul>
            {PILLARS.map((pillar) => (
              <li key={pillar.key}>
                <a href={hrefFor('servicios')}>{pillar.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Empresa">
          <h2 className="site-footer__title">Empresa</h2>
          <ul>
            {company.map((key) => (
              <li key={key}>
                <a href={hrefFor(key)}>{companyLabels[key]}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="site-footer__title">Contacto</h2>
          <ul className="site-footer__contact">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Hablar con un ingeniero
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon /> @wodexsystem
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__base">
        <p>
          © {new Date().getFullYear()} {SITE.name} · {SITE.country}
        </p>
      </div>
    </footer>
  )
}
