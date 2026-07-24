import { translations } from '../../data/i18n.js'

const STORAGE_KEY = 'portfolio-lang'

/**
 * Decide qué idioma mostrar la primera vez que alguien entra:
 * 1. Si ya eligió uno antes (guardado en localStorage), usa ese — y esta
 *    elección se comparte entre index.html y proyecto.html.
 * 2. Si no, revisa el idioma configurado en su navegador.
 * 3. Si no reconoce ninguno de los dos, usa español por defecto.
 */
function detectInitialLang() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && translations[saved]) return saved

  const browserLang = (navigator.language || 'es').slice(0, 2).toLowerCase()
  return translations[browserLang] ? browserLang : 'es'
}

/** Traduce todos los textos fijos del HTML que tengan data-i18n="clave". */
function applyStaticTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n
    const text = translations[lang]?.[key]
    if (text) el.textContent = text
  })
}

/**
 * Inicializa el sistema de idiomas en la página actual.
 * @param {(lang: string) => void} onChange - se llama al cargar la página
 *   y cada vez que se toca el botón de idioma, para que el script de cada
 *   página (main.js o project-page.js) repinte su contenido dinámico.
 */
export function initI18n(onChange) {
  let currentLang = detectInitialLang()

  const toggleBtn = document.getElementById('langToggle')

  const render = () => {
    document.documentElement.lang = currentLang
    localStorage.setItem(STORAGE_KEY, currentLang)
    applyStaticTranslations(currentLang)
    if (toggleBtn) {
      // El botón muestra el idioma AL QUE se puede cambiar, no el actual
      toggleBtn.textContent = currentLang === 'es' ? 'EN' : 'ES'
    }
    onChange(currentLang)
  }

  render()

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es'
      render()
    })
  }
}
