import { useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Sparkles } from 'lucide-react'
import Brand from './components/Brand'
import Contact from './components/Contact'
import Header from './components/Header'

const solutions = [
  ['Software a medida', 'Sistemas que nacen de los procesos reales de tu empresa, no de una plantilla.'],
  ['Automatización', 'Menos trabajo repetitivo. Más tiempo para las decisiones que mueven tu operación.'],
  ['Inteligencia Artificial', 'IA aplicada donde aporta velocidad, contexto y eficiencia medible.'],
  ['Integraciones', 'Conectamos las herramientas que ya utilizas para que la información fluya.'],
  ['Dashboards', 'Datos claros para entender la operación y actuar con confianza.'],
  ['Sistemas empresariales', 'Herramientas robustas y claras para operaciones complejas que necesitan crecer.'],
]

const process = [
  ['01', 'Entendemos', 'Escuchamos la operación, a las personas y la fricción que hay que resolver.'],
  ['02', 'Definimos', 'Traducimos el reto en una solución clara y prioridades compartidas.'],
  ['03', 'Construimos', 'Desarrollamos con foco en que la herramienta funcione cada día.'],
  ['04', 'Evolucionamos', 'La solución acompaña a tu operación cuando aparecen nuevas necesidades.'],
]

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header onContact={() => setContactOpen(true)} />
      <main id="contenido">
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <div className="hero-topography" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div className="shell hero-grid">
            <div className="hero-copy reveal">
              <p className="hero-eyebrow">Costa Rica · Tecnología con propósito</p>
              <h1 id="hero-title">Ingeniería local <em>con impacto global.</em></h1>
              <p className="hero-lede">Soluciones a tu medida.</p>
              <p className="hero-description">Desarrollamos software, automatizamos procesos e integramos inteligencia artificial para convertir necesidades reales en soluciones digitales.</p>
              <div className="hero-actions">
                <button className="button button-primary" type="button" onClick={() => setContactOpen(true)}>Cuéntanos tu idea <ArrowUpRight /></button>
                <a className="button button-quiet" href="#soluciones">Explorar soluciones <ArrowDownRight /></a>
              </div>
            </div>
            <aside className="hero-signal reveal reveal-delay" aria-label="Nuestra forma de trabajar">
              <span className="signal-orbit orbit-one" aria-hidden="true" /><span className="signal-orbit orbit-two" aria-hidden="true" />
              <div className="signal-core"><img src="/img/_logo.png" alt="" /><span>Wodex System</span></div>
              <p>Procesos claros.<br />Tecnología que avanza.</p>
            </aside>
          </div>
          <div className="shell hero-footer"><span>Wodex System · Costa Rica</span><span>Software · Automatización · IA</span></div>
        </section>

        <section id="soluciones" className="section services" aria-labelledby="services-title">
          <div className="shell section-heading"><h2 id="services-title">Tecnología que responde a cómo trabaja <em>tu negocio.</em></h2><p>Construimos con una visión práctica: resolver el trabajo de hoy y dejar una base más fuerte para el mañana.</p></div>
          <div className="shell service-list">{solutions.map(([title, text], index) => <article className="service-item" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight aria-hidden="true" /></article>)}</div>
        </section>

        <section className="section value-section" aria-labelledby="value-title"><div className="shell value-layout"><p>Una herramienta debe liberar a tu equipo.</p><h2 id="value-title">No solo creamos software. Construimos herramientas que devuelven <em>tiempo</em>, <em>control</em> y capacidad de crecimiento.</h2></div></section>

        <section id="proceso" className="section process" aria-labelledby="process-title"><div className="shell"><div className="section-heading process-heading"><h2 id="process-title">De una conversación a una solución que <em>evoluciona.</em></h2><p>No creemos en soluciones genéricas para problemas únicos. El proceso nos permite tomar buenas decisiones antes y durante la construcción.</p></div><ol className="process-list">{process.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>

        <section className="section statement" aria-labelledby="statement-title"><div className="shell statement-layout"><div><h2 id="statement-title">Tu negocio no debería adaptarse al software.</h2><p>El software debe adaptarse a tu negocio.</p></div><div className="statement-mark"><Sparkles aria-hidden="true" /><span>Los procesos propios merecen soluciones propias.</span></div></div></section>

        <section id="experiencia" className="section trust" aria-labelledby="trust-title"><div className="shell trust-layout"><div><h2 id="trust-title">Construimos para empresas <em>reales.</em></h2><p className="trust-intro">JSM Servicentros confía en Wodex System. Una relación construida sobre soluciones tecnológicas a la medida.</p></div><div className="client-proof"><div className="client-logo"><img src="/img/jsm.png" alt="JSM Servicentros" /></div><div><p className="client-status"><Check aria-hidden="true" /> Cliente Wodex</p><h3>JSM Servicentros</h3><p>Actualmente desarrollamos soluciones para optimizar el control tecnológico y operativo.</p></div></div></div><div className="shell evidence"><div><p>Capacidad demostrable</p><h3>Asset Hub</h3></div><p>Una solución desarrollada por Wodex System para centralizar el control de activos tecnológicos, movimientos, mantenimiento, infraestructura e información operativa. Una muestra de nuestra capacidad para construir herramientas internas a la medida.</p></div></section>

        <section id="contacto" className="section final-cta" aria-labelledby="contact-title"><div className="shell"><h2 id="contact-title">Cuéntanos qué quieres <em>construir.</em></h2><p>Empecemos por el problema, el proceso o la oportunidad que quieres mejorar.</p><button className="button button-primary" type="button" onClick={() => setContactOpen(true)}>Iniciar proyecto <ArrowRight /></button></div></section>
      </main>
      <footer className="shell footer"><Brand /><div className="footer-links"><a href="#soluciones">Soluciones</a><a href="#proceso">Cómo trabajamos</a><a href="#experiencia">Experiencia</a><button type="button" onClick={() => setContactOpen(true)}>Contacto</button><a className="instagram-link" href="https://www.instagram.com/wodexsystem?stkn=MWhkYjN3dmhydw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Wodex System"><InstagramIcon /></a></div><p>© {new Date().getFullYear()} Wodex System · Costa Rica</p></footer>
      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}

function InstagramIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg> }
