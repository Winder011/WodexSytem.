import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Brand from './Brand'
import { NAV } from '../config/routes'
import { useActiveSection } from '../hooks/useActiveSection'
import { whatsappUrl } from '../lib/whatsapp'

const engineerHref = whatsappUrl()

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()
  const toggleRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1180px)')
    const onResize = () => desktop.matches && setOpen(false)

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    desktop.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      desktop.removeEventListener('change', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      ref={headerRef}
      className="site-header"
      data-scrolled={scrolled || undefined}
      data-open={open || undefined}
    >
      <div className="site-header__bar container">
        <Brand onNavigate={close} />

        <nav id="site-nav" className="site-nav" aria-label="Navegación principal">
          <ul>
            {NAV.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${item.anchor}`}
                  aria-current={active === item.anchor ? 'location' : undefined}
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="button button--primary site-nav__cta"
            href={engineerHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Hablemos de tu proyecto <ArrowUpRight aria-hidden="true" />
            <span className="sr-only"> (abre WhatsApp en una pestaña nueva)</span>
          </a>
        </nav>

        <a
          className="button button--primary site-header__cta"
          href={engineerHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablemos de tu proyecto <ArrowUpRight aria-hidden="true" />
          <span className="sr-only"> (abre WhatsApp en una pestaña nueva)</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </div>
    </header>
  )
}
