import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Brand from './Brand'

const links = [['#soluciones', 'Soluciones'], ['#proceso', 'Cómo trabajamos'], ['#experiencia', 'Experiencia'], ['#contacto', 'Contacto']]

export default function Header({ onContact }) {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)
    return <header className="header-wrap"><div className="header shell"><Brand /><nav id="mobile-navigation" className={open ? 'nav-open' : ''} aria-label="Navegación principal">{links.map(([href, label]) => <a href={href} key={href} onClick={close}>{label}</a>)}</nav><button className="header-contact" onClick={() => { close(); onContact() }}>Iniciar proyecto</button><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}<span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span></button></div></header>
}
