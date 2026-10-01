import About from '../sections/About'
import ContactSection from '../sections/ContactSection'
import Growth from '../sections/Growth'
import Hero from '../sections/Hero'
import Problems from '../sections/Problems'
import Process from '../sections/Process'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import WebDevelopment from '../sections/WebDevelopment'

// Página de inicio. Cada sección es independiente, así que una futura página
// /desarrollo-web o /proyectos puede reutilizarlas sin cambios.
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Problems />
      <WebDevelopment />
      <Growth />
      <Process />
      <Projects />
      <About />
      <ContactSection />
    </>
  )
}
