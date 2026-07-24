/**
 * slugify.js
 * Convierte un texto (ej: "Molassault Web") en un "slug" apto para URL
 * (ej: "molassault-web"). Se usa para armar el link de cada proyecto sin
 * tener que escribir manualmente un id para cada uno en content.js.
 */
export function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quita tildes (á -> a)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // quita símbolos raros
    .replace(/\s+/g, '-') // espacios -> guiones
    .replace(/-+/g, '-') // varios guiones seguidos -> uno solo
}
