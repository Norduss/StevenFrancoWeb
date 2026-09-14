# Steven Franco — Portafolio de Ingeniería Multimedia

Sitio personal para presentar servicios, proyectos de desarrollo web, videojuegos, experiencias VR y producción 3D. Está construido con HTML, CSS y JavaScript mediante módulos ES nativos, sin framework, compilación ni backend. Bootstrap 5.3.3 aporta estilos y utilidades; la tipografía es Kanit, cargada desde Google Fonts.

La identidad visual utiliza fondo oscuro, acentos verdes, títulos con degradado, botones redondeados y navegación fija con efecto de vidrio. La página principal y las fichas de proyecto comparten los mismos estilos.

## Ejecutar localmente

Sirve la carpeta raíz por HTTP. Abrir `index.html` directamente con `file://` impide cargar correctamente los módulos JavaScript.

Con Python instalado, desde la raíz:

```powershell
python -m http.server 5500
```

Según la instalación, usa `py` en Windows o `python3` en lugar de `python`. Abre `http://localhost:5500`. Detén el servidor con `Ctrl+C`.

También puedes usar Live Server de VS Code o, si tienes Node.js y npm, `npx serve .` y abrir la dirección que indique la terminal. Este último comando puede descargar la herramienta la primera vez.

No hay `package.json`, dependencias npm del sitio, variables de entorno ni comando de build. Se necesita conexión para cargar Bootstrap, Google Fonts y los videos de YouTube.

## Estructura

```text
StevenFrancoWeb/
├── index.html                  # Inicio
├── proyecto.html               # Plantilla compartida para detalles
├── README.md
├── assets/
│   ├── cv/CV.pdf               # CV enlazado desde ambas páginas
│   ├── img/
│   │   ├── Favicon/Favicon.png
│   │   └── projects/           # Portadas, capturas y miniaturas reales
│   └── video/showreel.mp4      # Video local del ShowReel
├── css/
│   ├── base.css               # Reset, variables y tipografía
│   ├── layout.css             # Estructura y títulos de sección
│   ├── components.css         # Botones y utilidades visuales
│   └── sections.css           # Secciones, fichas y adaptación responsive
├── data/
│   ├── content.js             # Servicios, proyectos y marquesina
│   └── i18n.js                # Traducciones de interfaz ES/EN
└── js/
    ├── main.js                # Inicialización y render del inicio
    ├── project-page.js        # Detalle según slug e idioma
    └── modules/
        ├── animated-text.js   # Iluminación de letras al desplazar
        ├── fade-in.js         # Aparición mediante IntersectionObserver
        ├── i18n.js            # Selección y persistencia del idioma
        ├── magnet.js          # Movimiento del retrato con el cursor
        ├── marquee.js         # Dos filas de imágenes con parallax
        ├── project-cards.js   # Escalado de tarjetas apiladas
        ├── showreel.js        # Carga y visibilidad del video local
        └── slugify.js         # Generación de identificadores de URL
```

## Páginas y navegación

`index.html` presenta, en orden: portada (`#hero`), marquesina (`#marquee`), Sobre mí (`#about`), ShowReel (`#showreel`), Servicios (`#price`), Proyectos (`#projects`) y Contacto (`#contact`). La navegación incluye accesos a Sobre mí, Servicios, Proyectos, Contacto, CV y el selector ES/EN.

Los servicios y las tarjetas se generan desde `data/content.js`. El botón «Ver Proyecto» abre una ficha interna, no el enlace externo del proyecto.

`proyecto.html?slug=protokol` es un ejemplo de ficha. `js/project-page.js` busca el proyecto por su nombre normalizado y muestra portada, descripción, rol, tecnologías, contribuciones, resultados y video cuando esos datos existen. El enlace externo aparece si `link` tiene un valor distinto de `#`. Las fichas incluyen navegación anterior/siguiente circular según el orden del arreglo y un enlace de regreso a los proyectos. Un slug ausente o desconocido muestra «Proyecto no encontrado».

El título del documento de cada ficha se actualiza con el nombre visible del proyecto. El año del pie de página se calcula automáticamente en ambas páginas.

## Contenido e idiomas

| Contenido | Archivo donde editarlo |
| --- | --- |
| Servicios, proyectos y miniaturas de la marquesina | `data/content.js` |
| Navegación, saludo, Sobre mí, botones, etiquetas y ShowReel | `data/i18n.js` |
| Estructura del inicio, retrato y enlace al ShowReel | `index.html` |
| Contacto, redes, CV, favicon y metadatos iniciales | Ambos HTML |
| Ruta de reproducción del ShowReel | `js/modules/showreel.js` |
| Colores, degradados y fuentes | `css/base.css` |

Los textos traducibles de los datos usan objetos `{ es: 'Texto', en: 'Text' }`. Los valores simples, como nombres propios y tecnologías, se muestran sin traducir. Los renderizadores de contenido recurren al español si falta la variante solicitada.

El idioma se elige primero desde `localStorage` con la clave `portfolio-lang`; si no hay una preferencia válida, se usan las dos primeras letras del idioma del navegador. Si no corresponden a `es` o `en`, se usa español. La selección se comparte entre ambas páginas y actualiza el atributo `lang` del documento. El botón muestra el idioma al que se puede cambiar.

Para añadir un texto fijo, agrega la clave a ambos diccionarios de `data/i18n.js` y usa `data-i18n="tu_clave"` en el elemento. Este mecanismo sustituye su contenido textual; no traduce atributos ni conserva HTML anidado. Los títulos y descripciones de los `<head>` se editan por separado. El párrafo animado de Sobre mí se toma de `about_text`, por lo que editar únicamente su `data-text` en el HTML no cambia el texto final.

### Servicios y marquesina

Cada servicio contiene `number`, `name` y `description`. Los dos últimos son bilingües. El orden del arreglo determina el orden visual; la numeración se mantiene manualmente.

`marqueeImages` contiene rutas de imágenes. El módulo divide la lista en dos filas, repite cada mitad tres veces y las desplaza en sentidos opuestos con el scroll. Usa imágenes de proyectos existentes; actualmente no depende de imágenes de relleno externas. Sus imágenes tienen `alt` vacío porque la marquesina es decorativa.

## Proyectos

El catálogo actual es:

| Número | Proyecto | Slug |
| --- | --- | --- |
| 01 | PROTOKOL | `protokol` |
| 02 | Caficultor VR | `caficultor-vr` |
| 03 | Molassault | `molassault` |
| 04 | Molassault Web | `molassault-web` |
| 05 | OccupancyHub | `occupancyhub` |
| 06 | Spot Publicitario - Pony Malta | `spot-publicitario-pony-malta` |

PROTOKOL incluye la participación en Brackeys Game Jam 2026.2, los aportes de Steven en diseño de juego, modelos 3D adicionales y estilo visual, y el botón «Jugar en itch.io». Su ficha usa `ProtokolCover.png`, `ProtokolBunker.png` y `ProtokolGameplay.png`, obtenidas de la página del juego: [PROTOKOL en itch.io](https://jcheesee.itch.io/protokol).

### Añadir o modificar un proyecto

1. Guarda sus imágenes en `assets/img/projects/`.
2. Añade un objeto al arreglo `projects` de `data/content.js`, tomando una entrada existente como referencia.
3. Completa los textos en español e inglés y conserva un `name` único y estable.
4. Coloca la entrada en el orden deseado y actualiza los valores `number` manualmente.
5. Comprueba su tarjeta, ficha, enlace externo y navegación en ambos idiomas.

| Campo | Uso y formato |
| --- | --- |
| `number` | Número visible, por ejemplo `'01'`. |
| `name` | Nombre estable; determina el slug y debe generar una URL única. |
| `title` | Nombre visible opcional, admite `{ es, en }` sin cambiar la URL. |
| `category` | Categoría bilingüe de tarjeta y ficha. |
| `images` | Tres rutas: las dos primeras van en la columna izquierda y la tercera en la imagen derecha de la tarjeta; en móvil se apilan. El render del inicio espera las tres. |
| `heroImage` | Portada de la ficha; si se omite, se usa la última imagen de `images`. |
| `link` | URL externa. Si falta, está vacía o es `'#'`, no se muestra el botón externo. |
| `linkLabel` | Texto bilingüe opcional del botón externo; por defecto, «Visitar sitio». |
| `subtitle` | Introducción bilingüe opcional de la ficha. |
| `year`, `studio` | Año y estudio/evento; se unen en una etiqueta cuando existen. `studio` admite traducción. |
| `role` | Rol bilingüe opcional mostrado en una etiqueta. |
| `descriptionTitle`, `descriptionText` | Título y descripción bilingües. La tarjeta se muestra si existe el texto. |
| `roleTitle`, `roleText` | Título y explicación bilingües del aporte personal. La tarjeta se muestra si existe el texto. |
| `technologies` | Arreglo de cadenas; se omite la sección si está vacío o no existe. |
| `contributions`, `results` | Objetos `{ es: ['...'], en: ['...'] }`; las listas vacías o ausentes no se muestran. |
| `videoId` | Solo el identificador de YouTube, no la URL completa. Vacío o ausente oculta la sección. |

`slugify.js` elimina tildes y símbolos, convierte a minúsculas y sustituye espacios por guiones. Cambiar `name` cambia la URL y puede romper enlaces compartidos; usa `title` para cambiar solo la presentación. No se necesita crear otro archivo HTML por proyecto ni configurar rutas dinámicas en el servidor.

Los datos son contenido editorial del repositorio y se insertan mediante plantillas HTML. No hay editor administrativo ni tratamiento de entradas de usuarios; no conectes contenido no confiable directamente a estos renderizadores.

## ShowReel

El archivo `assets/video/showreel.mp4` ya está incluido en el espacio de trabajo. El reproductor está después de Sobre mí y antes de Servicios, conserva los estilos del sitio y se adapta al ancho disponible en un marco 16:9. `object-fit: contain` evita recortar videos con otra proporción.

La sección comienza oculta. `initShowreel()` asigna la ruta al video y la revela al recibir `loadedmetadata`; ante un evento `error`, vuelve a ocultarla. Si el archivo falta, el navegador puede registrar un 404 y la sección no aparece. Cargar metadatos no sustituye comprobar la reproducción completa del archivo.

El video tiene controles nativos, `playsinline`, precarga de metadatos y un enlace «Abrir video». No tiene reproducción automática. Cambiar de idioma actualiza los textos sin reconstruir el reproductor ni reiniciar su reproducción.

Para reemplazarlo, conserva el nombre y la ruta `assets/video/showreel.mp4`. Si cambias la ubicación, actualiza tanto `video.src` en `js/modules/showreel.js` como el `href` del enlace en `index.html`. Usa un archivo compatible con los navegadores de destino y comprueba imagen y audio antes de publicar. La integración actual es para un archivo de video directo; no acepta una página de YouTube como `src`.

## Estilos y animaciones

Los estilos se cargan después de Bootstrap, en este orden: `base.css`, `layout.css`, `components.css`, `sections.css`. Las variables de `:root` centralizan colores, tipografías y degradados. Los estilos responsive usan principalmente los puntos de corte de 576, 768 y 992 píxeles, con ajustes adicionales para navegación y móvil.

- `.fade-in` activa una aparición al entrar en pantalla. Admite `data-delay` y `data-duration` en segundos, y `data-x` y `data-y` en píxeles.
- El retrato tiene preparado un efecto de seguimiento del cursor mediante `initMagnet()`.
- El texto de Sobre mí cambia la opacidad de sus letras según el desplazamiento.
- Las tarjetas usan `position: sticky` y se reducen según el progreso de scroll de toda la sección.
- La marquesina responde al desplazamiento de la página; no es una animación temporal automática.

No agregues `overflow: hidden`, `auto` o `scroll` a `body`, `main` u otros ancestros de las tarjetas sin revisar su efecto sobre `position: sticky`. El recorte horizontal se aplica con `overflow-x: clip` en secciones concretas.

`base.css` reduce las duraciones de animaciones y transiciones CSS cuando se solicita `prefers-reduced-motion`. Los efectos JavaScript de scroll y cursor no consultan esa preferencia, así que el soporte de movimiento reducido es parcial.

## Publicación y dependencias externas

Publica la raíz como sitio estático, incluyendo `index.html`, `proyecto.html`, `css/`, `js/`, `data/` y los archivos de `assets/`. No se genera una carpeta `dist` ni se necesita un servidor de aplicación. El repositorio no incluye configuración específica de despliegue.

El alojamiento debe servir archivos HTML, CSS, JavaScript, imágenes, PDF y MP4 con tipos de contenido adecuados, y mantener la consulta `?slug=...` al abrir `proyecto.html`. Conserva las mayúsculas y minúsculas de las rutas: servidores sensibles a ellas pueden fallar aunque el archivo funcione en Windows.

El ShowReel se aloja junto al sitio y consume transferencia de ese alojamiento. Comprueba que el archivo se haya incluido en la publicación y que pueda reproducirse y adelantarse en el servidor final.

Ambos HTML cargan Bootstrap CSS y JS desde jsDelivr y Kanit desde Google Fonts. Las fichas con `videoId` cargan un iframe de YouTube de forma diferida. Para servir estilos y fuentes sin conexión, descarga esos recursos, ajusta las referencias en ambos HTML y conserva las licencias correspondientes; los videos de YouTube y los enlaces externos seguirán requiriendo conexión.

## Verificación manual

No hay una suite automatizada de pruebas, linter ni configuración de integración continua en el repositorio. Para revisar cambios:

1. Sirve la raíz por HTTP y comprueba el inicio en escritorio y móvil, sin desbordamiento horizontal ni errores de módulos en consola.
2. Cambia ES/EN, recarga y abre una ficha para verificar la persistencia del idioma.
3. Revisa las seis tarjetas, sus imágenes, las fichas y la navegación anterior/siguiente. Prueba también `proyecto.html?slug=no-existe`.
4. Reproduce el ShowReel, comprueba audio, controles, pantalla completa y enlace directo. Cambia de idioma durante la reproducción.
5. Comprueba los videos de YouTube de Caficultor VR y Pony Malta, y los enlaces externos de los proyectos.
6. Revisa CV, redes y WhatsApp desde ambas páginas, además de navegación con teclado y presentación móvil.
7. Repite las comprobaciones de archivos y video en la URL publicada, donde pueden cambiar la sensibilidad a mayúsculas y el comportamiento de entrega multimedia.

## Pendientes conocidos

- El `<img>` del retrato en `index.html` todavía no tiene `src` ni `alt`; el contenedor y el efecto imán están preparados, pero falta configurar la imagen.
- El WhatsApp de `proyecto.html` conserva el número de ejemplo `573000000000`; no coincide con el del inicio. Los contactos están duplicados en los HTML y deben mantenerse sincronizados.
- Existen reglas `.about__decor` en CSS, pero el HTML actual no incluye esos elementos decorativos. No son recursos faltantes de la página actual.
- El contenido dinámico y varios elementos con `.fade-in` dependen de JavaScript. No hay una versión alternativa completa para navegadores con JavaScript desactivado.