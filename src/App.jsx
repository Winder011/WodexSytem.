import { useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Sparkles } from 'lucide-react'
import Header from './components/Header'
import Brand from './components/Brand'
import Contact from './components/Contact'

const solutions = [
    ['Software a medida', 'Construimos sistemas alrededor de los procesos reales de tu empresa.'],
    ['Automatización', 'Eliminamos tareas repetitivas para que tu equipo pueda enfocarse en lo que realmente importa.'],
    ['Inteligencia Artificial', 'Integramos IA donde puede aportar velocidad, información y eficiencia.'],
    ['Integraciones', 'Conectamos las herramientas que tu empresa ya utiliza para que la operación fluya.'],
    ['Dashboards', 'Convertimos datos dispersos en información que puedes entender y utilizar.'],
    ['Sistemas empresariales', 'Ordenamos operaciones complejas en herramientas claras, útiles y preparadas para crecer.'],
]

const process = [
    ['01', 'Entendemos', 'Escuchamos la operación, las personas y la fricció que hay que resolver.'],
    ['02', 'Definimos', 'Traducimos el reto en una solución clara, con prioridades compartidas.'],
    ['03', 'Construimos', 'Desarrollamos con foco en que la herramienta funcione en el día a día.'],
    ['04', 'Evolucionamos', 'La solución acompaña a tu operación cuando aparecen nuevas necesidades.'],
]

export default function App() {
    const [contactOpen, setContactOpen] = useState(false)
    const openContact = () => setContactOpen(true)

    return <div className="site-shell">
        <Header onContact={openContact} />
        <main>
            <section id="inicio" className="hero" aria-labelledby="hero-title">
                <div className="hero-glow" aria-hidden="true" />
                <div className="shell hero-grid">
                    <div className="hero-copy reveal">
                        <h1 id="hero-title">Ingeniería desde Costa Rica <em>con estándar e impacto global.</em></h1>
                        <p className="hero-lede">Soluciones a tu medida.</p>
                        <p className="hero-description">Desarrollamos software, automatizamos procesos e integramos inteligencia artificial para convertir necesidades reales en soluciones digitales.</p>
                        <div className="hero-actions">
                            <button className="button button-primary" onClick={openContact}>Cuéntanos tu idea <ArrowUpRight /></button>
                            <a className="button button-quiet" href="#soluciones">Explorar soluciones <ArrowDownRight /></a>
                        </div>
                    </div>
                </div>
                <div className="shell hero-footer"><span>Wodex Costa Rica</span><span></span></div>
            </section>

            <section id="soluciones" className="section services" aria-labelledby="services-title">
                <div className="shell section-heading">
                    <div><p className="section-kicker">SOLUCIONES</p><h2 id="services-title">Tecnología que responde a cómo trabaja <em>tu negocio.</em></h2></div>
                    
                </div>
                <div className="shell service-list">{solutions.map(([title, text], index) => <article className="service-item" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight aria-hidden="true" /></article>)}</div>
            </section>

            <section className="section value-section" aria-labelledby="value-title"><div className="shell value-layout"><p className="section-kicker">Una herramienta debe liberar a tu equipo</p><h2 id="value-title">No solo creamos software.<br />Construimos herramientas que devuelven <em>tiempo</em>, <em>control</em> y <em>capacidad de crecimiento</em> a tu equipo.</h2></div></section>

            <section id="proceso" className="section process" aria-labelledby="process-title"><div className="shell"><div className="section-heading process-heading"><div><p className="section-kicker">CÓMO TRABAJAMOS</p><h2 id="process-title">De una conversación a una solución que <em>evoluciona.</em></h2></div><p>No creemos en soluciones genéricas para problemas únicos. El proceso nos permite tomar buenas decisiones antes y durante la construcción.</p></div><ol className="process-list">{process.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>

            <section className="section statement" aria-labelledby="statement-title"><div className="shell statement-layout"><p className="section-kicker">Nuestra filosofía</p><div><h2 id="statement-title">Tu negocio no debería adaptarse al software.</h2><p>El software debe adaptarse a tu negocio.</p></div><div className="statement-mark"><Sparkles aria-hidden="true" /><span>Procesos propios merecen soluciones propias.</span></div></div></section>

            <section id="experiencia" className="section trust" aria-labelledby="trust-title"><div className="shell trust-layout"><div><p className="section-kicker">CONFIANZA</p><h2 id="trust-title">Construimos para empresas <em>reales.</em></h2><p className="trust-intro">JSM Servicentros confía en Wodex System. Una relación real, construida sobre soluciones tecnológicas a la medida.</p></div><div className="client-proof"><div className="client-logo"><img src="/img/jsm.png" alt="JSM Servicentros" /></div><div><p className="client-status"><Check aria-hidden="true" /> Cliente Wodex</p><h3>JSM Servicentros</h3><p>Actualmente desarrollamos soluciones para optimizar el control tecnológico y operativo.</p></div></div></div><div className="shell evidence"><div><p className="section-kicker">EVIDENCIA DE DESARROLLO</p><h3>Asset Hub</h3></div><p>Una solución desarrollada por Wodex System para centralizar el control de activos tecnológicos, movimientos, mantenimiento, infraestructura e información operativa. Es una muestra de nuestra capacidad de construir herramientas internas a la medida.</p></div></section>

            <section id="contacto" className="section final-cta" aria-labelledby="contact-title"><div className="shell"><p className="section-kicker">¿Tienes una idea?</p><h2 id="contact-title">Cuéntanos qué quieres <em>construir.</em></h2><p>Empecemos por el problema, el proceso o la oportunidad que quieres mejorar.</p><button className="button button-primary" onClick={openContact}>Iniciar proyecto <ArrowRight /></button></div></section>
        </main>
        <footer className="shell footer"><Brand /><div className="footer-links"><a href="#soluciones">Soluciones</a><a href="#proceso">Cómo trabajamos</a><a href="#experiencia">Experiencia</a><button onClick={openContact}>Contacto</button><a className="instagram-link" href="https://www.instagram.com/wodexsystem?stkn=MWhkYjN3dmhydw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Wodex System"><InstagramIcon /></a></div><p>© {new Date().getFullYear()} Costa Rica</p></footer>
        <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
}

function InstagramIcon() {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>
}
