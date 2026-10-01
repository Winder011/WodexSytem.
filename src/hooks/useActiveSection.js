import { useEffect, useState } from 'react'

// Devuelve el id de la sección de <main> que ocupa la franja central de la
// pantalla, para marcar el enlace activo del menú con aria-current. Se observan
// todas las secciones (no solo las del menú) para que el resaltado no quede
// "pegado" en un enlace mientras se recorre una sección que no está en el menú.
export function useActiveSection() {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    if (!sections.length || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}
