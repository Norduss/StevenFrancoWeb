import { projects } from '../data/content.js'
import { translations } from '../data/i18n.js'
import { initFadeIn } from './modules/fade-in.js'
import { slugify } from './modules/slugify.js'
import { initI18n } from './modules/i18n.js'

const container = document.querySelector('#projectDetail')

/** Devuelve el texto en el idioma activo; si el campo es un string simple
 *  (no bilingüe, como los nombres de proyecto), lo devuelve tal cual. */
function t(field, lang) {
  if (field && typeof field === 'object' && !Array.isArray(field)) return field[lang] ?? field.es
  return field
}

function findProjectBySlug(slug) {
  return projects.find((p) => slugify(p.name) === slug)
}

function renderNotFound(lang) {
  const dict = translations[lang]
  container.innerHTML = `
    <a href="index.html#projects" class="project-detail__back">${dict.project_back}</a>
    <h1 class="project-detail__name">${dict.project_not_found_title}</h1>
    <p class="project-detail__subtitle">${dict.project_not_found_text}</p>`
}

/** Arma el bloque "2025 - Nebuly Studios" a partir del año y el estudio/cliente. */
function buildYearStudioTag(project, lang) {
  const parts = [project.year, t(project.studio, lang)].filter(Boolean)
  return parts.length ? parts.join(' - ') : ''
}

function render(lang) {
  const dict = translations[lang]
  const params = new URLSearchParams(window.location.search)
  const slug = params.get('slug')
  const project = findProjectBySlug(slug)

  if (!project) {
    renderNotFound(lang)
    return
  }

  const index = projects.indexOf(project)
  const prevProject = projects[(index - 1 + projects.length) % projects.length]
  const nextProject = projects[(index + 1) % projects.length]

  document.title = `${project.name} — Steven Franco`

  const heroImg = project.heroImage || project.images?.[project.images.length - 1] || ''
  const yearStudioTag = buildYearStudioTag(project, lang)
  const descriptionText = t(project.descriptionText, lang)
  const roleText = t(project.roleText, lang)
  const hasInfoCards = Boolean(descriptionText || roleText)
  const hasTech = Boolean(project.technologies && project.technologies.length)
  const contributions = project.contributions ? t(project.contributions, lang) : []
  const results = project.results ? t(project.results, lang) : []
  const hasLists = Boolean((contributions && contributions.length) || (results && results.length))
  const hasVideo = Boolean(project.videoId)

  container.innerHTML = `
    <a href="index.html#projects" class="project-detail__back">${dict.project_back}</a>

    <div class="project-detail__hero">
      <div class="project-detail__intro fade-in" data-y="20">
        <span class="project-detail__badge">${t(project.category, lang) || ''}</span>
        <h1 class="project-detail__name">${project.name}</h1>
        ${t(project.subtitle, lang) ? `<p class="project-detail__subtitle">${t(project.subtitle, lang)}</p>` : ''}
        <div class="project-detail__tags">
          ${yearStudioTag ? `<span class="tag-pill">${yearStudioTag}</span>` : ''}
          ${t(project.role, lang) ? `<span class="tag-pill">${t(project.role, lang)}</span>` : ''}
        </div>

        ${
          project.link && project.link !== '#'
            ? `<a href="${project.link}" target="_blank" rel="noopener" class="btn btn-outline project-detail__live-link">${dict.project_visit_site}</a>`
            : ''
        }
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
              descriptionText
                ? `<div class="info-card fade-in" data-y="20">
                    <span class="info-card__label">${dict.project_description_label}</span>
                    ${t(project.descriptionTitle, lang) ? `<h3 class="info-card__title">${t(project.descriptionTitle, lang)}</h3>` : ''}
                    <p class="info-card__text">${descriptionText}</p>
                  </div>`
                : ''
            }
            ${
              roleText
                ? `<div class="info-card fade-in" data-y="20" data-delay="0.1">
                    <span class="info-card__label">${dict.project_role_label}</span>
                    ${t(project.roleTitle, lang) ? `<h3 class="info-card__title">${t(project.roleTitle, lang)}</h3>` : ''}
                    <p class="info-card__text">${roleText}</p>
                  </div>`
                : ''
            }
          </div>`
        : ''
    }

    ${
      hasTech
        ? `<section class="project-detail__section">
            <h2 class="project-detail__section-title fade-in" data-y="20">${dict.project_tech_title}</h2>
            <div class="tag-pill-list fade-in" data-y="20" data-delay="0.1">
              ${project.technologies.map((tech) => `<span class="tag-pill tag-pill--accent">${tech}</span>`).join('')}
            </div>
          </section>`
        : ''
    }

    ${
      hasLists
        ? `<div class="project-detail__lists-grid">
            ${
              contributions && contributions.length
                ? `<div class="list-card fade-in" data-y="20">
                    <h3 class="list-card__title">${dict.project_contributions_title}</h3>
                    <ul class="list-card__list">
                      ${contributions.map((c) => `<li>${c}</li>`).join('')}
                    </ul>
                  </div>`
                : ''
            }
            ${
              results && results.length
                ? `<div class="list-card fade-in" data-y="20" data-delay="0.1">
                    <h3 class="list-card__title">${dict.project_results_title}</h3>
                    <ul class="list-card__list">
                      ${results.map((r) => `<li>${r}</li>`).join('')}
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
            <h2 class="project-detail__section-title fade-in" data-y="20">${dict.project_video_title}</h2>
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
        <span class="project-nav-link__label">${dict.project_prev}</span>
        <span class="project-nav-link__name">${prevProject.name}</span>
      </a>
      <a href="proyecto.html?slug=${slugify(nextProject.name)}" class="project-nav-link project-nav-link--next">
        <span class="project-nav-link__label">${dict.project_next}</span>
        <span class="project-nav-link__name">${nextProject.name}</span>
      </a>
    </div>`

  initFadeIn()
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear()
  initI18n(render)
})
