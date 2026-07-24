import { projects } from '../data/content.js'
import { initFadeIn } from './modules/fade-in.js'
import { slugify } from './modules/slugify.js'

const container = document.querySelector('#projectDetail')

function findProjectBySlug(slug) {
  return projects.find((p) => slugify(p.name) === slug)
}

function renderNotFound() {
  container.innerHTML = `
    <a href="index.html#projects" class="project-detail__back">&larr; Volver a proyectos</a>
    <h1 class="project-detail__name">Proyecto no encontrado</h1>
    <p class="project-detail__subtitle">
      No encontramos ese proyecto. Revisa el enlace o vuelve a la sección de proyectos.
    </p>`
}

/** Arma el bloque "2025 - Nebuly Studios" a partir del año y el estudio/cliente. */
function buildYearStudioTag(project) {
  const parts = [project.year, project.studio].filter(Boolean)
  return parts.length ? parts.join(' - ') : ''
}

function render() {
  const params = new URLSearchParams(window.location.search)
  const slug = params.get('slug')
  const project = findProjectBySlug(slug)

  if (!project) {
    renderNotFound()
    return
  }

  const index = projects.indexOf(project)
  const prevProject = projects[(index - 1 + projects.length) % projects.length]
  const nextProject = projects[(index + 1) % projects.length]

  document.title = `${project.name} — Steven Franco`

  const heroImg = project.heroImage || project.images?.[project.images.length - 1] || ''
  const yearStudioTag = buildYearStudioTag(project)
  const hasInfoCards = Boolean(project.descriptionText || project.roleText)
  const hasTech = Boolean(project.technologies && project.technologies.length)
  const hasLists = Boolean(
    (project.contributions && project.contributions.length) ||
      (project.results && project.results.length),
  )
  const hasVideo = Boolean(project.videoId)

  container.innerHTML = `
    <a href="index.html#projects" class="project-detail__back">&larr; Volver a proyectos</a>

    <div class="project-detail__hero">
      <div class="project-detail__intro fade-in" data-y="20">
        <span class="project-detail__badge">${project.category || ''}</span>
        <h1 class="project-detail__name">${project.name}</h1>
        ${project.subtitle ? `<p class="project-detail__subtitle">${project.subtitle}</p>` : ''}
        <div class="project-detail__tags">
          ${yearStudioTag ? `<span class="tag-pill">${yearStudioTag}</span>` : ''}
          ${project.role ? `<span class="tag-pill">${project.role}</span>` : ''}
        </div>
      </div>

      ${
        heroImg
          ? `<div class="project-detail__hero-image fade-in" data-delay="0.15" data-x="40">
               <img src="${heroImg}" alt="${project.name}">
             </div>`
          : ''
      }
    </div>

    ${
      hasInfoCards
        ? `<div class="project-detail__info-grid">
            ${
              project.descriptionText
                ? `<div class="info-card fade-in" data-y="20">
                    <span class="info-card__label">Descripción General</span>
                    ${project.descriptionTitle ? `<h3 class="info-card__title">${project.descriptionTitle}</h3>` : ''}
                    <p class="info-card__text">${project.descriptionText}</p>
                  </div>`
                : ''
            }
            ${
              project.roleText
                ? `<div class="info-card fade-in" data-y="20" data-delay="0.1">
                    <span class="info-card__label">Mi Rol</span>
                    ${project.roleTitle ? `<h3 class="info-card__title">${project.roleTitle}</h3>` : ''}
                    <p class="info-card__text">${project.roleText}</p>
                  </div>`
                : ''
            }
          </div>`
        : ''
    }

    ${
      hasTech
        ? `<section class="project-detail__section">
            <h2 class="project-detail__section-title fade-in" data-y="20">Tecnologías Utilizadas</h2>
            <div class="tag-pill-list fade-in" data-y="20" data-delay="0.1">
              ${project.technologies.map((t) => `<span class="tag-pill tag-pill--accent">${t}</span>`).join('')}
            </div>
          </section>`
        : ''
    }

    ${
      hasLists
        ? `<div class="project-detail__lists-grid">
            ${
              project.contributions && project.contributions.length
                ? `<div class="list-card fade-in" data-y="20">
                    <h3 class="list-card__title">Contribuciones Principales</h3>
                    <ul class="list-card__list">
                      ${project.contributions.map((c) => `<li>${c}</li>`).join('')}
                    </ul>
                  </div>`
                : ''
            }
            ${
              project.results && project.results.length
                ? `<div class="list-card fade-in" data-y="20" data-delay="0.1">
                    <h3 class="list-card__title">Resultados y Aprendizajes</h3>
                    <ul class="list-card__list">
                      ${project.results.map((r) => `<li>${r}</li>`).join('')}
                    </ul>
                  </div>`
                : ''
            }
          </div>`
        : ''
    }

    ${
      hasVideo
        ? `<section class="project-detail__section">
            <h2 class="project-detail__section-title fade-in" data-y="20">Video</h2>
            <div class="project-detail__video-wrap fade-in" data-y="20" data-delay="0.1">
              <iframe
                class="project-detail__video"
                src="https://www.youtube.com/embed/${project.videoId}"
                title="${project.name}"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </section>`
        : ''
    }

    <div class="project-detail__nav">
      <a href="proyecto.html?slug=${slugify(prevProject.name)}" class="project-nav-link project-nav-link--prev">
        <span class="project-nav-link__label">&larr; Anterior</span>
        <span class="project-nav-link__name">${prevProject.name}</span>
      </a>
      <a href="proyecto.html?slug=${slugify(nextProject.name)}" class="project-nav-link project-nav-link--next">
        <span class="project-nav-link__label">Siguiente &rarr;</span>
        <span class="project-nav-link__name">${nextProject.name}</span>
      </a>
    </div>`

  initFadeIn()
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear()
  render()
})
