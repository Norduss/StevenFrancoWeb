import { services, projects, marqueeImages } from '../data/content.js'
import { initFadeIn } from './modules/fade-in.js'
import { initMagnet } from './modules/magnet.js'
import { initMarquee } from './modules/marquee.js'
import { initAnimatedText } from './modules/animated-text.js'
import { initProjectCards } from './modules/project-cards.js'
import { slugify } from './modules/slugify.js'

/* ---------- Render: Services ---------- */
function renderServices() {
  const list = document.querySelector('#servicesList')
  if (!list) return

  list.innerHTML = services
    .map(
      (s, i) => `
      <div class="service-item fade-in" data-y="30" data-delay="${(i * 0.1).toFixed(2)}">
        <span class="service-item__number">${s.number}</span>
        <div class="service-item__body">
          <h3 class="service-item__name">${s.name}</h3>
          <p class="service-item__desc">${s.description}</p>
        </div>
      </div>`,
    )
    .join('')
}

/* ---------- Render: Projects ---------- */
function renderProjects() {
  const list = document.querySelector('#projectsList')
  if (!list) return

  list.innerHTML = projects
    .map(
      (p, index) => `
      <div class="project-card-sticky">
        <article class="project-card" style="top:${index * 28}px">
          <div class="project-card__top">
            <div class="project-card__id">
              <span class="project-card__number">${p.number}</span>
              <div class="project-card__meta">
                <span class="project-card__category">${p.category}</span>
                <h3 class="project-card__name">${p.name}</h3>
              </div>
            </div>
            <a href="proyecto.html?slug=${slugify(p.name)}" class="btn btn-outline">Ver Proyecto</a>
          </div>
          <div class="project-card__images">
            <div class="project-card__col">
              <img src="${p.images[0]}" alt="${p.name} preview 1" loading="lazy">
              <img src="${p.images[1]}" alt="${p.name} preview 2" loading="lazy">
            </div>
            <div class="project-card__wide">
              <img src="${p.images[2]}" alt="${p.name} preview 3" loading="lazy">
            </div>
          </div>
        </article>
      </div>`,
    )
    .join('')
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderServices()
  renderProjects()

  initFadeIn()
  initMagnet('#heroPortrait', { padding: 150, strength: 3 })
  initMarquee('#marquee', marqueeImages)
  initAnimatedText('#aboutText')
  initProjectCards('#projects', '#projectsList')

  // Vuelve a evaluar los nuevos elementos fade-in que se acaban de renderizar
  initFadeIn()
})
