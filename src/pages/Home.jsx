import ContactSection from '../sections/ContactSection'
import Hero from '../sections/Hero'
import Process from '../sections/Process'
import Projects from '../sections/Projects'
import Quality from '../sections/Quality'
import Services from '../sections/Services'
import WebDevelopment from '../sections/WebDevelopment'

// Página de inicio. Cada sección es independiente, así que una futura página
// /desarrollo-web o /proyectos puede reutilizarlas sin cambios.
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WebDevelopment />
      <Quality />
      <Process />
      <Projects />
      <ContactSection />
    </>
  )
}
