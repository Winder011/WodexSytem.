import { useState } from 'react'
import Header from './components/Header'
import Brand from './components/Brand'

import Contact from './components/Contact'

const services = [
    ['01', 'Software a medida', 'Sistemas y aplicaciones diseñados alrededor de los procesos reales de tu empresa.'],
    ['02', 'Automatización', 'Reducimos tareas repetitivas, tiempos perdidos y errores que frenan la operación.'],
    ['03', 'Inteligencia Artificial', 'Implementamos IA práctica donde puede aportar valor al trabajo diario.'],
    ['04', 'Integraciones', 'Conectamos plataformas, APIs, CRM, WhatsApp, bases de datos y equipos.'],
    ['05', 'Dashboards & Data', 'Convertimos información operativa en claridad para decidir con confianza.'],
    ['06', 'Infraestructura digital', 'Preparamos soluciones sólidas, seguras y listas para acompañar tu crecimiento.'],
]

const process = [
    ['01', 'Entendemos', 'Conocemos tu negocio, el problema y lo que realmente debe cambiar.'],
    ['02', 'Diseñamos', 'Definimos una solución clara antes de empezar a construir.'],
    ['03', 'Construimos', 'Convertimos la estrategia en un sistema, automatización o integración real.'],
    ['04', 'Evolucionamos', 'Medimos, mejoramos y escalamos cuando la operación lo necesita.'],
]

export default function App() {
    const [contactOpen, setContactOpen] = useState(false)
    const openContact = () => setContactOpen(true)
    const closeContact = () => setContactOpen(false)

    return <div className="site-shell">
        <Header onContact={openContact} />
        <main>
            <section id="inicio" className="hero" aria-labelledby="hero-title">
                <div className="hero-orbit" aria-hidden="true" />
                <div className="shell hero-grid">
                    <div className="hero-copy reveal">
                        <p className="eyebrow"><span />Wodex Systems / Digital Engineering</p>
                        <h1 id="hero-title">Impulsado por ideas <em>genuinas.</em></h1>
                        <p className="hero-lede">Construimos soluciones tecnológicas a la medida de tu negocio.</p>
                        <p className="hero-description">Desarrollamos software, automatizamos procesos e integramos inteligencia artificial para convertir necesidades reales en soluciones digitales que funcionan.</p>
                        <div className="hero-actions">
                            <button className="button button-primary" onClick={openContact}>Cuéntanos tu idea <span aria-hidden="true">↗</span></button>
                            <a className="button button-quiet" href="#soluciones">Explorar soluciones <span aria-hidden="true">↓</span></a>
                        </div>
                    </div>
                    <div className="hero-mark reveal reveal-delay" aria-label="Wodex: de una idea a una solución operativa">
                        <div className="mark-line mark-line-a" /><div className="mark-line mark-line-b" />
                        <div className="mark-card mark-card-top"><small>INPUT</small><strong>Una idea</strong><span>Proceso · necesidad · oportunidad</span></div>
                        <div className="mark-card mark-card-center"><img src="/img/_logo.png" alt="" /><small>WODEX</small><strong>Ingeniería aplicada</strong></div>
                        <div className="mark-card mark-card-bottom"><small>OUTPUT</small><strong>Algo que funciona</strong><span>Sistema · automatización · control</span></div>
                    </div>
                </div>
                <div className="shell hero-footer"><span>Ideas genuinas. Soluciones a la medida.</span><span>San José, Costa Rica <i /></span></div>
            </section>

            <section id="soluciones" className="section services" aria-labelledby="services-title">
                <div className="shell section-heading"><p className="eyebrow"><span />Lo que hacemos</p><h2 id="services-title">Convertimos problemas <em>en sistemas.</em></h2><p>No vendemos tecnología por tecnología. Construimos herramientas que devuelven tiempo, control y capacidad de crecimiento a tu equipo.</p></div>
                <div className="shell service-list">{services.map(([number, title, text]) => <article className="service-item" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><b aria-hidden="true">↗</b></article>)}</div>
            </section>

            <section className="section principle" aria-labelledby="principle-title"><div className="shell principle-layout"><p className="eyebrow"><span />La diferencia Wodex</p><div><h2 id="principle-title">Tu negocio no debería adaptarse al software.</h2><p className="principle-statement">La tecnología debe adaptarse a tu negocio.</p></div><div className="principle-note"><p><strong>Primero entendemos. Después construimos.</strong></p><p>Cada empresa opera distinto. Por eso no creemos en soluciones de catálogo para problemas únicos: escuchamos el proceso, encontramos la fricción y diseñamos desde ahí.</p></div></div></section>

            <section id="asset-hub" className="section asset" aria-labelledby="asset-title"><div className="shell asset-layout"><div className="asset-copy"><p className="eyebrow"><span />Producto Wodex / Caso real</p><p className="asset-kicker">Una muestra de lo que podemos construir.</p><h2 id="asset-title">Asset <em>Hub.</em></h2><p className="asset-tagline">Control inteligente de tus activos tecnológicos.</p><p>Una plataforma propia para centralizar, controlar y visualizar el estado de los activos tecnológicos de una organización: equipos, movimientos, mantenimientos, ubicaciones, responsables e indicadores operativos.</p><a className="text-link" href="#contacto" onClick={(e) => { e.preventDefault(); openContact() }}>Conocer el producto <span>↗</span></a></div><div className="asset-screen" aria-label="Vista conceptual del dashboard de Asset Hub"><div className="screen-top"><span>ASSET HUB</span><i /><i /><i /></div><div className="screen-body"><aside><b>AH</b><span /><span /><span /><span /></aside><div className="screen-main"><div className="screen-title"><div><small>Resumen operativo</small><strong>Activos tecnológicos</strong></div><button>+ Registrar activo</button></div><div className="metric-row"><Metric value="1,248" label="Activos registrados" /><Metric value="91%" label="En operación" /><Metric value="18" label="Mantenimientos" /></div><div className="chart"><div className="chart-label">Movimientos de activos</div><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div></div><div className="asset-table"><span>Equipo</span><span>Ubicación</span><span>Estado</span><b>MacBook Pro 14</b><b>San José</b><em>Operativo</em><b>Monitor Dell 27</b><b>Heredia</b><em>Asignado</em></div></div></div></div></div></section>

            <section id="proceso" className="section process" aria-labelledby="process-title"><div className="shell"><div className="section-heading process-heading"><p className="eyebrow"><span />Cómo lo hacemos</p><h2 id="process-title">De una conversación a una solución que <em>evoluciona.</em></h2></div><ol className="process-list">{process.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>

            <section className="idea-section"><div className="shell idea-layout"><p className="eyebrow"><span />Tu idea puede ser la siguiente</p><div><h2>¿Tienes una idea?</h2><p>No importa si está en una libreta, una conversación o en un proceso que todavía haces manualmente. Podemos convertirla en una solución digital real.</p></div><button className="button button-light" onClick={openContact}>Cuéntanos tu idea <span>↗</span></button></div></section>

            <section id="contacto" className="section final-cta" aria-labelledby="contact-title"><div className="shell"><p className="eyebrow"><span />Empecemos</p><h2 id="contact-title">Tu próximo sistema puede empezar con una <em>conversación.</em></h2><p>Cuéntanos qué quieres mejorar, automatizar o construir.</p><button className="button button-primary" onClick={openContact}>Empezar proyecto <span>→</span></button></div></section>
        </main>
        <footer className="shell footer"><Brand compact /><p>© {new Date().getFullYear()} Wodex Systems. Ideas genuinas, construidas para necesidades reales.</p><a href="https://instagram.com/wodexsystem" target="_blank" rel="noreferrer">Instagram ↗</a></footer>
        <Contact open={contactOpen} onClose={closeContact} />
    </div>
}
function Metric({ value, label }) { return <div><strong>{value}</strong><span>{label}</span></div> }