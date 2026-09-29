import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, Layers3, Route, Workflow } from 'lucide-react'
import Header from './components/Header'
import Brand from './components/Brand'
import Contact from './components/Contact'

const solutions = [
  { title: 'Sistemas para operaciones complejas', problem: 'Cuando la información vive en hojas, chats y herramientas aisladas.', solution: 'Diseñamos una plataforma a la medida de su flujo real.', benefit: 'Más control para decidir y operar sin improvisar.' },
  { title: 'Automatización e integraciones', problem: 'Cuando tareas repetitivas frenan al equipo y generan errores.', solution: 'Conectamos herramientas y automatizamos pasos críticos.', benefit: 'Menos trabajo manual; más tiempo para lo que mueve el negocio.' },
  { title: 'Productos y aplicaciones web', problem: 'Cuando una idea necesita convertirse en una herramienta útil.', solution: 'Construimos experiencias web claras, robustas y escalables.', benefit: 'Una solución lista para crecer con la operación.' },
  { title: 'IA aplicada al negocio', problem: 'Cuando hay datos y procesos, pero falta velocidad para usarlos.', solution: 'Integramos inteligencia artificial donde aporta valor concreto.', benefit: 'Mejor información y respuestas más ágiles para el equipo.' },
]

const process = [
  ['Escuchar el contexto', 'Entendemos la operación, las personas y el punto exacto de fricción.'],
  ['Definir la prioridad', 'Convertimos el reto en un alcance claro antes de escribir una línea de código.'],
  ['Construir con propósito', 'Diseñamos y desarrollamos una herramienta útil para el día a día.'],
  ['Acompañar la evolución', 'La solución puede crecer cuando cambian las necesidades del negocio.'],
]

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)

  return <div className="site-shell">
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <Header onContact={openContact} />
    <main id="contenido">
      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-terrain" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="location-note">Software creado desde Costa Rica para empresas que necesitan avanzar.</p>
            <h1 id="hero-title">Convertimos operaciones difíciles de manejar en <em>software que da claridad.</em></h1>
            <p className="hero-description">Wodex diseña sistemas, automatizaciones e integraciones para empresas que ya superaron las soluciones genéricas y necesitan una herramienta que responda a su forma real de trabajar.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={openContact}>Hablemos de su operación <ArrowUpRight aria-hidden="true" /></button>
              <a className="text-link" href="#soluciones">Ver cómo ayudamos <ArrowDown aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-map" aria-label="Del proceso disperso a una operación conectada">
            <div className="map-head"><span>Del proceso disperso</span><ArrowRight aria-hidden="true" /><strong>a una operación conectada</strong></div>
            <div className="map-flow">
              <div><Route aria-hidden="true" /><span>Procesos</span></div><i aria-hidden="true" />
              <div><Layers3 aria-hidden="true" /><span>Información</span></div><i aria-hidden="true" />
              <div className="map-result"><Workflow aria-hidden="true" /><span>Decisiones claras</span></div>
            </div>
            <p>La tecnología debe hacer visible lo que hoy cuesta coordinar.</p>
          </div>
        </div>
        <div className="shell hero-footer"><span>Ingeniería digital con visión local y estándar global.</span><a href="#proceso">Nuestro proceso <ArrowRight aria-hidden="true" /></a></div>
      </section>

      <section id="soluciones" className="section services" aria-labelledby="services-title">
        <div className="shell heading-layout"><div><h2 id="services-title">Tecnología que se adapta a la forma en que su negocio <em>realmente opera.</em></h2></div><p>Partimos de un problema concreto. El resultado es una herramienta que reduce fricción, ordena información y deja a su equipo trabajar mejor.</p></div>
        <div className="shell service-list">{solutions.map((service, index) => <article className="service-item" key={service.title}>
          <span className="service-index">0{index + 1}</span><div><h3>{service.title}</h3><p className="service-problem">{service.problem}</p></div><div className="service-outcome"><p><strong>Qué hacemos</strong>{service.solution}</p><p><strong>Para qué sirve</strong>{service.benefit}</p></div><button onClick={openContact} aria-label={`Conversar sobre ${service.title}`}><ArrowUpRight aria-hidden="true" /></button>
        </article>)}</div>
      </section>

      <section className="section proposition" aria-labelledby="proposition-title"><div className="shell proposition-layout"><p className="proposition-aside">Una herramienta propia no es un lujo cuando los procesos de su empresa ya son únicos.</p><h2 id="proposition-title">Su negocio no debería adaptarse al software.<br /><em>El software debería adaptarse a su negocio.</em></h2></div></section>

      <section id="proceso" className="section process" aria-labelledby="process-title"><div className="shell heading-layout"><div><h2 id="process-title">Una forma más clara de convertir un reto operativo en una <em>solución útil.</em></h2></div><p>No prometemos respuestas antes de entender el contexto. Cada etapa existe para tomar mejores decisiones y evitar construir de más.</p></div><ol className="shell process-list">{process.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

      <section id="experiencia" className="section proof" aria-labelledby="proof-title"><div className="shell proof-layout"><div><h2 id="proof-title">Construimos con empresas que necesitan que su operación <em>funcione mejor.</em></h2><p>La confianza se gana entendiendo el trabajo real, no imponiendo una plantilla. Por eso diseñamos soluciones alrededor de la operación de cada cliente.</p></div><article className="client-proof"><div className="client-logo"><img src="/img/jsm.png" alt="JSM Servicentros" /></div><div><p className="client-status"><Check aria-hidden="true" /> Cliente Wodex</p><h3>JSM Servicentros</h3><p>Actualmente desarrollamos soluciones para optimizar su control tecnológico y operativo.</p></div></article></div><div className="shell project-note"><span>Proyecto en desarrollo</span><h3>Asset Hub</h3><p>Una solución de Wodex para centralizar el control de activos tecnológicos, movimientos, mantenimiento, infraestructura e información operativa.</p></div></section>

      <section className="section readiness" aria-labelledby="readiness-title"><div className="shell readiness-layout"><div><h2 id="readiness-title">Antes de iniciar, hacemos las preguntas que protegen su inversión.</h2><p>Objetivo, usuarios, proceso actual y prioridad: una primera conversación nos permite saber si somos el equipo correcto para el reto.</p></div><ul><li><Check aria-hidden="true" /> Alcance pensado para necesidades reales.</li><li><Check aria-hidden="true" /> Sin promesas de resultados que no podamos validar.</li><li><Check aria-hidden="true" /> Comunicación directa durante el proceso.</li></ul></div></section>

      <section id="contacto" className="section final-cta" aria-labelledby="contact-title"><div className="shell"><p>¿Hay un proceso que ya no debería depender de trabajo manual?</p><h2 id="contact-title">Conversemos sobre lo que necesita <em>mejorar.</em></h2><button className="button button-primary" onClick={openContact}>Iniciar una conversación <ArrowRight aria-hidden="true" /></button><small>Sin compromiso. Empezamos por entender su contexto.</small></div></section>
    </main>
    <footer className="shell footer"><Brand /><div className="footer-links"><a href="#soluciones">Soluciones</a><a href="#proceso">Proceso</a><a href="#experiencia">Experiencia</a><button onClick={openContact}>Contacto</button><a href="https://www.instagram.com/wodexsystem?stkn=MWhkYjN3dmhydw==" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight aria-hidden="true" /></a></div><p>© {new Date().getFullYear()} Wodex System · Costa Rica</p></footer>
    <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
  </div>
}
