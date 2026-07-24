/**
 * marquee.js
 * Reemplaza al <MarqueeSection>: dos filas de imágenes que se desplazan
 * en direcciones opuestas según la posición de scroll (efecto parallax).
 */
export function initMarquee(sectionSelector, images) {
  const section = document.querySelector(sectionSelector)
  if (!section) return

  const row1El = section.querySelector('[data-marquee-row="1"]')
  const row2El = section.querySelector('[data-marquee-row="2"]')
  if (!row1El || !row2El) return

  const mid = Math.ceil(images.length / 2)
  const row1Images = images.slice(0, mid)
  const row2Images = images.slice(mid)

  const buildTile = (src) => {
    const img = document.createElement('img')
    img.src = src
    img.alt = ''
    img.loading = 'lazy'
    img.className = 'marquee__tile'
    return img
  }

  const fillRow = (el, imgs) => {
    // Se repite 3 veces la lista para que el desplazamiento se vea continuo
    const repeated = [...imgs, ...imgs, ...imgs]
    repeated.forEach((src) => el.appendChild(buildTile(src)))
  }

  fillRow(row1El, row1Images)
  fillRow(row2El, row2Images)

  let ticking = false

  const update = () => {
    const sectionTop = section.offsetTop
    const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3

    row1El.style.transform = `translateX(${offset - 200}px)`
    row2El.style.transform = `translateX(${-(offset - 200)}px)`
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
