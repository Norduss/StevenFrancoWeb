# Jack — 3D Creator | Portafolio

Portafolio web personal construido con **HTML + CSS + JavaScript puro** (sin frameworks, sin build tools) y **Bootstrap** como apoyo de grid/utilidades. Recreado a partir de un diseño de referencia hecho en Next.js + Tailwind + Framer Motion, conservando el mismo look & feel: fondo oscuro, títulos con degradado, botón con relieve en gradiente, marquesina infinita, texto animado letra por letra, retrato con efecto imán y tarjetas de proyecto apiladas al hacer scroll.

## Estructura del proyecto

```
jack-portfolio/
├── index.html              ← página principal
├── README.md
│
├── assets/
│   └── img/
│       ├── hero/            ← foto de perfil, miniaturas de la marquesina
│       ├── projects/        ← imágenes de cada proyecto
│       └── decor/           ← iconos decorativos de la sección About
│
├── css/
│   ├── base.css              ← variables, reset, tipografía
│   ├── layout.css            ← estructura general
│   ├── components.css        ← botones, animación fade-in
│   └── sections.css          ← estilos de cada sección (hero, marquee, about, services, projects, footer)
│
├── js/
│   ├── main.js                ← punto de entrada, inicializa todo
│   └── modules/
│       ├── fade-in.js         ← animación de aparición al hacer scroll
│       ├── magnet.js          ← efecto imán del retrato
│       ├── marquee.js         ← marquesina infinita con parallax
│       ├── animated-text.js   ← texto letra por letra
│       └── project-cards.js   ← tarjetas de proyecto apiladas
│
└── data/
    └── content.js             ← textos y rutas de imágenes (servicios, proyectos, marquesina)
```

## Cómo editar el contenido

**No necesitas tocar el HTML** para cambiar tus proyectos o servicios: todo el contenido vive en `data/content.js`. Ahí puedes:
- Cambiar los textos de cada servicio.
- Agregar, quitar o editar proyectos (nombre, categoría, link, imágenes).
- Cambiar las miniaturas de la marquesina.

Las imágenes actuales son **placeholders** (`placehold.co`) para que el sitio se vea completo desde ya. Reemplázalas por tus propias fotos/renders:
1. Guarda tus imágenes en `assets/img/projects/`, `assets/img/hero/`, etc.
2. En `data/content.js`, cambia las URLs por las rutas locales, por ejemplo: `'assets/img/projects/mi-proyecto-1.jpg'`.

También reemplaza:
- El retrato del hero (`index.html`, sección `<div class="hero__portrait">`).
- Los 4 iconos decorativos de la sección About (`about__decor`).
- El correo y links de redes del footer.

## Cómo correr el proyecto localmente

No abras `index.html` con doble clic (los módulos de JavaScript no cargarán por restricciones del navegador con `file://`). Usa un servidor local:

**Opción 1 — VS Code:** instala la extensión "Live Server" y haz clic en "Go Live".

**Opción 2 — Terminal (si tienes Node o Python instalado):**
```bash
# Con Node
npx serve .

# Con Python 3
python3 -m http.server 5500
```
Luego abre `http://localhost:5500` (o el puerto que indique) en tu navegador.

## Publicar el sitio

Como es HTML/CSS/JS estático, puedes subirlo gratis a:
- **GitHub Pages**
- **Netlify** (arrastra la carpeta directamente en netlify.com/drop)
- **Vercel**

No requiere build ni configuración adicional.

## Notas técnicas
- El JavaScript usa **ES Modules nativos** (`type="module"`), por eso `import`/`export` funcionan sin necesidad de Vite ni webpack — pero por lo mismo, el sitio debe verse siempre a través de un servidor local, no abriendo el archivo directamente.
- Las animaciones respetan `prefers-reduced-motion` (accesibilidad).
- Bootstrap se usa vía CDN. Si necesitas trabajar sin internet, descarga los archivos siguiendo la Opción 2 explicada anteriormente en el chat y colócalos en `css/vendor/` y `js/vendor/`.
