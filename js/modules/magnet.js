/**
 * magnet.js
 * Reemplaza al componente <Magnet> original: el retrato del hero
 * "sigue" ligeramente el cursor cuando este se acerca.
 */
export function initMagnet(wrapperSelector, { padding = 150, strength = 3 } = {}) {
  const wrapper = document.querySelector(wrapperSelector)
  if (!wrapper) return

  const inner = wrapper.querySelector('.hero__portrait-magnet')
  if (!inner) return

  wrapper.style.padding = `${padding}px`
  wrapper.style.margin = `-${padding}px`

  let active = false

  const setTransform = (x, y, transition) => {
    inner.style.transition = transition
    inner.style.transform = `translate3d(${x}px, ${y}px, 0)`
    inner.style.willChange = 'transform'
  }

  wrapper.addEventListener('mousemove', (e) => {
    const rect = inner.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = (e.clientX - centerX) / strength
    const distY = (e.clientY - centerY) / strength

    active = true
    setTransform(distX, distY, 'transform 0.3s ease-out')
  })

  wrapper.addEventListener('mouseleave', () => {
    active = false
    setTransform(0, 0, 'transform 0.6s ease-in-out')
  })
}
