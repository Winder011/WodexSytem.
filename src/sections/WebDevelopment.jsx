import { ArrowUpRight, Check } from 'lucide-react'
import { AUDIENCES, WEB_SERVICES, WEB_STANDARDS } from '../data/content'
import { useOpenContact } from '../lib/contact'

export default function WebDevelopment() {
  const openContact = useOpenContact()

  return (
    <section id="desarrollo-web" className="section web-dev" aria-labelledby="webdev-title">
      <div className="web-dev__glow" aria-hidden="true" />
      <div className="container">
        <div className="web-dev__top">
          <div data-reveal>
            <p className="eyebrow">Desarrollo web</p>
            <h2 id="webdev-title">
              Tu negocio merece una <em className="accent-serif">presencia digital</em> profesional.
            </h2>
          </div>
          <div className="web-dev__intro" data-reveal>
            <p>
              Creamos sitios que explican lo que haces, generan confianza y facilitan que te
              contacten. Con la misma ingeniería que usamos para construir software.
            </p>
            <button
              type="button"
              className="button button--primary button--lg"
              onClick={() => openContact('Página web')}
            >
              Quiero mi página web <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="web-dev__audience" data-reveal>
          <p className="web-dev__audience-label">Pensado para</p>
          <ul>
            {AUDIENCES.map((audience) => (
              <li key={audience} className="tag">
                {audience}
              </li>
            ))}
          </ul>
        </div>

        <div className="web-dev__body">
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

          <aside className="web-dev__standards" aria-labelledby="standards-title" data-reveal>
            <div className="devices" aria-hidden="true">
              <div className="devices__laptop">
                <div className="devices__screen">
                  <i className="w-60" />
                  <i className="w-90 tall" />
                  <i className="w-40" />
                  <div className="devices__grid">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="devices__phone">
                <i className="w-60" />
                <i className="w-90 tall" />
                <span />
                <span />
              </div>
            </div>
            <h3 id="standards-title">Lo que cuidamos en cada sitio</h3>
            <ul className="check-list">
              {WEB_STANDARDS.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
