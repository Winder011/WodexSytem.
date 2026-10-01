import { useCallback, useState } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import WhatsAppFab from './components/WhatsAppFab'
import { useReveal } from './hooks/useReveal'
import { ContactContext } from './lib/contact'
import Home from './pages/Home'

export default function App() {
  const [contact, setContact] = useState({ open: false, projectType: '' })
  const openContact = useCallback((projectType = '') => setContact({ open: true, projectType }), [])
  const closeContact = useCallback(() => setContact((current) => ({ ...current, open: false })), [])

  useReveal()

  return (
    <ContactContext.Provider value={openContact}>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Home />
      </main>
      <Footer />
      <WhatsAppFab />
      <Contact open={contact.open} projectType={contact.projectType} onClose={closeContact} />
    </ContactContext.Provider>
  )
}
