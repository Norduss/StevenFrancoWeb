/** Mantiene oculta la sección hasta que haya un video reproducible. */
export function initShowreel() {
  const section = document.querySelector('#showreel')
  const video = document.querySelector('#showreelVideo')
  if (!section || !video) return

  video.addEventListener('loadedmetadata', () => {
    section.hidden = false
  })
  video.addEventListener('error', () => {
    section.hidden = true
  })
  video.src = 'assets/video/showreel.mp4'
}
