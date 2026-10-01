import { useEffect } from 'react'

// Un solo IntersectionObserver para todos los elementos con [data-reveal].
// Sin JS (o con reduced motion) el contenido queda visible: la clase
// `reveal-ready` en <html> es lo que habilita el estado inicial oculto.
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return undefined

    const root = document.documentElement
    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
}
