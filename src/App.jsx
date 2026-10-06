import Footer from './components/Footer'
import Header from './components/Header'
import WhatsAppFab from './components/WhatsAppFab'
import { useReveal } from './hooks/useReveal'
import Home from './pages/Home'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Home />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
