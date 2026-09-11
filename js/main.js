import { services, projects, marqueeImages } from '../data/content.js'
import { initFadeIn } from './modules/fade-in.js'
import { initMagnet } from './modules/magnet.js'
import { initMarquee } from './modules/marquee.js'
import { initAnimatedText } from './modules/animated-text.js'
import { initProjectCards } from './modules/project-cards.js'
import { slugify } from './modules/slugify.js'
import { initI18n } from './modules/i18n.js'
import { translations } from '../data/i18n.js'

/** Devuelve el texto en el idioma activo; si el campo es un string simple
 *  (no bilingüe, como los nombres de proyecto), lo devuelve tal cual. */
function t(field, lang) {
  if (field && typeof field === 'object' && !Array.isArray(field)) return field[lang] ?? field.es
  return field
}

function projectTitle(project, lang) {
  return t(project.title ?? project.name, lang)
}

/* ---------- Render: Services ---------- */
function renderServices(lang) {
  const list = document.querySelector('#servicesList')
  if (!list) return

  list.innerHTML = services
    .map(
      (s, i) => `
      <div class="service-item fade-in" data-y="30" data-delay="${(i * 0.1).toFixed(2)}">
        <span class="service-item__number">${s.number}</span>
        <div class="service-item__body">
          <h3 class="service-item__name">${t(s.name, lang)}</h3>
          <p class="service-item__desc">${t(s.description, lang)}</p>
        </div>
      </div>`,
    )
    .join('')
}

/* ---------- Render: Projects ---------- */
function renderProjects(lang) {
  const list = document.querySelector('#projectsList')
  if (!list) return

  const liveProjectLabel = translations[lang].live_project

  list.innerHTML = projects
    .map(
      (p, index) => `
      <div class="project-card-sticky">
        <article class="project-card" style="top:${index * 28}px">
          <div class="project-card__top">
            <div class="project-card__id">
              <span class="project-card__number">${p.number}</span>
              <div class="project-card__meta">
                <span class="project-card__category">${t(p.category, lang)}</span>
                <h3 class="project-card__name">${projectTitle(p, lang)}</h3>
              </div>
            </div>
            <a href="proyecto.html?slug=${slugify(p.name)}" class="btn btn-outline">${liveProjectLabel}</a>
          </div>
          <div class="project-card__images">
            <div class="project-card__col">
              <img src="${p.images[0]}" alt="${projectTitle(p, lang)} preview 1" loading="lazy">
              <img src="${p.images[1]}" alt="${projectTitle(p, lang)} preview 2" loading="lazy">
            </div>
            <div class="project-card__wide">
              <img src="${p.images[2]}" alt="${projectTitle(p, lang)} preview 3" loading="lazy">
            </div>
          </div>
        </article>
      </div>`,
    )
    .join('')
}

/* ---------- Refrescar el texto animado del About en el idioma activo ---------- */
function refreshAboutText(lang) {
  const el = document.querySelector('#aboutText')
  if (!el) return
  el.dataset.text = translations[lang].about_text
  initAnimatedText('#aboutText')
}

/* ---------- Vuelve a pintar TODO lo que depende del idioma ---------- */
function renderLocalizedContent(lang) {
  renderServices(lang)
  renderProjects(lang)
  refreshAboutText(lang)

  initProjectCards('#projects', '#projectsList')

  // Vuelve a evaluar los elementos .fade-in recién pintados
  initFadeIn()
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear()

  // Estas no dependen del idioma, se inicializan una sola vez
  initMagnet('#heroPortrait', { padding: 150, strength: 3 })
  initMarquee('#marquee', marqueeImages)

  // initI18n detecta/aplica el idioma y llama a renderLocalizedContent
  // cada vez que carga la página o alguien toca el botón ES/EN
  initI18n(renderLocalizedContent)
})
