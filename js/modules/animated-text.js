/**
 * animated-text.js
 * Reemplaza al componente <AnimatedText>: cada letra del párrafo de
 * "About me" se ilumina progresivamente a medida que la sección
 * pasa por el centro de la pantalla durante el scroll.
 */
export function initAnimatedText(selector) {
  const el = document.querySelector(selector)
  if (!el) return

  const text = el.dataset.text || el.textContent
  el.textContent = ''

  const chars = text.split('').map((char) => {
    const wrap = document.createElement('span')
    wrap.className = 'char'

    const ghost = document.createElement('span')
    ghost.className = 'char__ghost'
    ghost.textContent = char === ' ' ? '\u00A0' : char

    const fill = document.createElement('span')
    fill.className = 'char__fill'
    fill.textContent = char === ' ' ? '\u00A0' : char
    fill.setAttribute('aria-hidden', 'true')

    wrap.append(ghost, fill)
    el.appendChild(wrap)
    return fill
  })

  let ticking = false

  const update = () => {
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight

    // progress 0 -> el texto empieza a aparecer (top llega al 50% del viewport)
    // progress 1 -> el texto termina de aparecer (bottom llega al 20% del viewport)
    const start = vh * 0.8
    const end = vh * 0.5
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - (end - (rect.bottom - rect.top)))))

    const total = chars.length
    chars.forEach((fill, i) => {
      const charStart = i / total
      const charEnd = charStart + 1 / total
      let charProgress = (progress - charStart) / (charEnd - charStart)
      charProgress = Math.min(1, Math.max(0, charProgress))
      fill.style.opacity = String(0.2 + charProgress * 0.8)
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

  update()
}
