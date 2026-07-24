/**
 * fade-in.js
 * Reemplaza al componente <FadeIn> de Framer Motion del proyecto original.
 * Cualquier elemento con la clase "fade-in" y atributos data-* se anima
 * al entrar en el viewport, una sola vez.
 *
 * Atributos soportados (todos opcionales):
 *   data-delay    -> segundos de retraso antes de animar (ej: "0.3")
 *   data-duration -> duración de la transición en segundos (ej: "0.8")
 *   data-x        -> desplazamiento horizontal inicial en px (ej: "-80")
 *   data-y        -> desplazamiento vertical inicial en px (ej: "40")
 */
export function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in')

  elements.forEach((el) => {
    const delay = el.dataset.delay || '0'
    const duration = el.dataset.duration || '0.7'
    const x = el.dataset.x ? `${el.dataset.x}px` : '0px'
    const y = el.dataset.y !== undefined ? `${el.dataset.y}px` : '30px'

    el.style.setProperty('--fade-delay', `${delay}s`)
    el.style.setProperty('--fade-duration', `${duration}s`)
    el.style.setProperty('--fade-x', x)
    el.style.setProperty('--fade-y', y)
  })

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0, rootMargin: '0px 0px -50px 0px' },
  )

  elements.forEach((el) => observer.observe(el))
}
