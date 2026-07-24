/**
 * project-cards.js
 * Reemplaza la lógica de <ProjectCard> + <ProjectsSection>: todas las
 * tarjetas quedan "pegadas" (sticky) una encima de otra y se van
 * encogiendo ligeramente a medida que avanza el scroll DENTRO de la
 * sección de proyectos completa (no cada una por separado).
 *
 * Es el mismo enfoque que usa Framer Motion en el proyecto de referencia:
 * 1. Se mide un progreso de scroll único (0 a 1) para toda la sección.
 * 2. Cada tarjeta interpola su escala sobre un tramo distinto de ese
 *    progreso: la tarjeta i "empieza" a encogerse en i/total y termina en 1.
 */
export function initProjectCards(sectionSelector, listSelector) {
  const section = document.querySelector(sectionSelector)
  const cards = document.querySelectorAll(`${listSelector} .project-card`)
  if (!section || !cards.length) return

  const total = cards.length

  const cardsConfig = Array.from(cards).map((card, index) => ({
    card,
    targetScale: 1 - (total - 1 - index) * 0.03,
    rangeStart: index / total,
  }))

  let ticking = false

  const update = () => {
    const rect = section.getBoundingClientRect()
    const vh = window.innerHeight

    // Progreso 0: la sección empieza a tocar el borde superior de la pantalla.
    // Progreso 1: el final de la sección llega al borde inferior de la pantalla.
    const distance = rect.height - vh
    let progress = distance > 0 ? -rect.top / distance : 0
    progress = Math.min(1, Math.max(0, progress))

    cardsConfig.forEach(({ card, targetScale, rangeStart }) => {
      if (targetScale >= 1) return // la última tarjeta no se encoge

      let cardProgress = (progress - rangeStart) / (1 - rangeStart)
      cardProgress = Math.min(1, Math.max(0, cardProgress))

      const scale = 1 - (1 - targetScale) * cardProgress
      card.style.transform = `scale(${scale})`
    })

    ticking = false
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    },
    { passive: true },
  )
  window.addEventListener('resize', update)

  update()
}
