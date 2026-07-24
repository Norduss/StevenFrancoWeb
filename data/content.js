/**
 * Contenido del portafolio.
 * Edita estos datos para actualizar los textos sin tocar el HTML.
 */
export const services = [
  {
    number: '01',
    name: 'Desarrollo Web',
    description:
      'Desarrollo de landing pages y sitios web modernos, rápidos y responsivos, diseñados para fortalecer tu presencia digital y convertir visitantes en clientes.',
  },
  {
    number: '02',
    name: 'Experiencias Interactivas',
    description:
      'Creación de aplicaciones interactivas en 2D y 3D utilizando Unity, ideales para educación, entretenimiento, simulaciones y proyectos personalizados.',
  },
  {
    number: '03',
    name: 'Soluciones AR & VR',
    description:
      'Desarrollo de experiencias inmersivas en Realidad Virtual y Realidad Aumentada para capacitación, exhibiciones, marketing y visualización de productos.',
  },
  {
    number: '04',
    name: 'Modelado 3D',
    description:
      'Spots publicitarios, modelado de props, escenarios y activos optimizados para videojuegos, aplicaciones en tiempo real y experiencias inmersivas.',
  },
  {
    number: '05',
    name: 'Software a Medida',
    description:
      'Desarrollo de aplicaciones y herramientas a medida que automatizan procesos, optimizan operaciones y resuelven necesidades específicas de tu negocio.',
  },
]

// NOTA: estas imágenes son placeholders temporales para que veas el diseño
// funcionando de inmediato. Reemplaza cada ruta por tus propias fotos/renders
// guardados en assets/img/projects/.
export const projects = [
  {
    number: '01',
    category: 'Proyecto VR',
    name: 'Caficultor VR',
    link: '#',
    // Textos cortos que salen arriba, junto al título, en la página de detalle
    subtitle: 'Experiencia inmersiva para Meta Quest sobre buenas prácticas del proceso del café.',
    year: '2025',
    studio: 'Nebuly Studios',
    role: 'Ingeniero Multimedia — Desarrollo VR',

    // Imagen grande de la página de detalle (arriba, junto al título)
    heroImage: 'assets/img/projects/portada_caficultorVR.jpg',

    // Las dos tarjetas de la sección de arriba
    descriptionTitle: 'Aprendizaje inmersivo del café',
    descriptionText:
      'Caficultor VR es una experiencia educativa para Meta Quest que enseña de forma inmersiva las buenas prácticas del cultivo y proceso del café colombiano, guiada por Remegio, nuestro guía campesino.',
    roleTitle: 'Desarrollo VR en Unity',
    roleText:
      'Trabajé en el desarrollo de las mecánicas de interacción del café, la programación en C#, la integración de audio, animaciones dentro del proyecto y realicé el modelo 3D de remegio y las plantas del café.',

    // Sección "Tecnologías Utilizadas" (deja el array vacío [] para ocultar la sección)
    technologies: ['Unity', 'XR Interaction Toolkit', 'Blender', 'Meta Quest', 'C#', 'Adobe Suite'],

    // Las dos listas de abajo (deja el array vacío [] para ocultar alguna)
    contributions: [
      'Mecánicas VR con XR Interaction Toolkit.',
      'Flujo de usuario de las diferentes etapas del café.',
      'Integración de audio y animaciones.',
      'Programación en C#.',
      'Colaboración en personaje guía Remegio.',
    ],
    results: [
      'Experiencia funcional para Meta Quest.',
      'Aprendizaje inmersivo.',
      'Proyecto destacado en Nebuly Studios.',
    ],

    // ID del video de YouTube (la parte después de "v=" en la URL, ej: youtube.com/watch?v=ESTE_ID)
    // Déjalo como '' para que la sección de video no aparezca.
    videoId: 'sbnh2iOobCI',

    // Estas 3 imágenes son las que se ven en la tarjeta apilada de la Home (index.html)
    images: [
      'assets/img/projects/RemegioVR.jpg',
      'assets/img/projects/Remegiocultivo.jpg',
      'assets/img/projects/portada_caficultorVR.jpg',
    ],
  },
  {
  number: '02',
  category: 'Proyecto Universitario',
  name: 'Molassault',
  link: '#',

  subtitle:
    'Aventura narrativa en tercera persona ambientada en un desastre inspirado en la inundación de melaza de Boston de 1919.',
  year: '2026',
  studio: 'Proyecto académico',
  role: 'Dirección Artística — Programación de Mecánicas y Escenarios',

  heroImage: 'assets/img/projects/MolassaultMain.jpg',

  descriptionTitle: 'Un rescate entre las ruinas de una ciudad devastada',
  descriptionText:
    'En Molassault, el jugador controla a Nico, quien debe atravesar una ciudad industrial devastada para rescatar a su mejor amigo Tomi, mientras descubre la verdad detrás del desastre. El juego combina exploración, parkour, puzles ambientales y recolección de pistas, con una dificultad que crece de forma gradual hasta un enfrentamiento final contra el antagonista.',

  roleTitle: 'Dirección artística y programación de mecánicas',
  roleText:
    'Definí la identidad visual del juego —paleta de tonos oscuros, ámbar y verdosos— manteniendo coherencia entre personajes, escenarios e interfaz. Además programé mecánicas básicas de gameplay y construí los escenarios industriales y urbanos donde se desarrolla la historia. Además, trabajé en estrecha colaboración con el equipo de desarrollo para asegurar que la interfaz respondiera adecuadamente a las mecánicas del juego y ofreciera una navegación eficiente, contribuyendo a mejorar la experiencia del usuario y la calidad final del proyecto.',

  technologies: ['Unity', 'C#', 'GitHub', 'Illustrator'],

  contributions: [
    'Dirección artística y paleta de color del juego.',
    'Construcción de escenarios industriales y urbanos.',
    'Programación de mecánicas básicas de gameplay.',
    'Colaboración en control de versiones con GitHub.',
  ],
  results: [
    'Videojuego funcional con narrativa, exploración y combate integrados.',
    'Identidad visual coherente inspirada en un hecho histórico real.',
    'Curva de dificultad equilibrada a lo largo de los niveles.',
  ],

  videoId: '',

  images: [
    'assets/img/projects/CreditosMola.jpg',
    'assets/img/projects/MenuMola.jpg',
    'assets/img/projects/MolassaultMain.jpg',
  ],
},
{
  number: '03',
  category: 'Proyecto Universitario',
  name: 'Molassault Web',
  link: 'https://molassault-game-website.vercel.app/',

  subtitle:
    'Sitio de documentación del desarrollo de Molassault: historia, mundo, mecánicas y bitácora semana a semana.',
  year: '2026',
  studio: 'Nebuly Studios',
  role: 'Desarrollo Web',

  heroImage: 'assets/img/projects/MolassaultHome.jpg',

  descriptionTitle: 'Un making-of interactivo del desarrollo de Molassault',
  descriptionText:
    'Sitio web documental sobre el proceso creativo de Molassault, un videojuego narrativo en tercera persona donde Nico debe rescatar a su amigo Tomi tras el colapso de un tanque industrial de melaza. Reúne la historia del juego, sus tres escenarios, las mecánicas de gameplay, una bitácora de 11 semanas de desarrollo, galería de concept art y el equipo detrás del proyecto.',

  roleTitle: 'Estructura, secciones y presentación visual del sitio',
  roleText:
    'Como desarrollador de la interfaz de usuario de Molassault, fui responsable del diseño e implementación de los elementos visuales y de interacción de la web, asegurando una experiencia intuitiva, funcional y alineada con la identidad del proyecto. Mi trabajo incluyó la creación e integración de menús, botones y paneles, contribuyendo a una navegación clara y una experiencia de usuario óptima.',

  technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel'],

  contributions: [
    'Estructura y maquetación de las secciones (historia, mundo, gameplay, avances, galería, equipo).',
    'Sistema de bitácora semanal con 11 semanas de avances documentados.',
    'Galería multimedia con concept art y diseño de personajes.',
    'Despliegue del sitio en Vercel.',
  ],
  results: [
    'Documentación completa y navegable de todo el proceso de desarrollo.',
    'Sitio publicado y accesible en línea.',
    'Identidad visual coherente con la marca de Molassault.',
  ],

  videoId: '',

  images: [
    'assets/img/projects/MolaWebEXP.jpg',
    'assets/img/projects/MolassaultEquipo.jpg',
    'assets/img/projects/MolassaultHome.jpg',
  ],
},
{
 number: '04',
category: 'Proyecto Universitario',
name: 'OccupancyHub',
link: '#',

subtitle:
  'Sistema inteligente para monitorear la ocupación de espacios universitarios mediante visión por computadora.',

year: '2026',

role: 'Desarrollador Full Stack — Visión por Computadora',

heroImage: 'assets/img/projects/MonitorOcupHome.jpg',

descriptionTitle: 'Monitoreo inteligente de ocupación',

descriptionText:
  'OccupancyHub es un sistema web desarrollado para monitorear el nivel de ocupación de espacios universitarios mediante visión por computadora. La aplicación analiza imágenes capturadas periódicamente, detecta la cantidad de personas utilizando YOLOv8 y clasifica automáticamente el estado del espacio como vacío, parcialmente lleno o lleno. El objetivo es brindar información en tiempo real que facilite la gestión de los espacios y reduzca la necesidad de inspecciones manuales.',

roleTitle: 'Mi participación',

roleText:
  'Participé en el desarrollo tanto del backend como del frontend del sistema. Implementé la integración del modelo YOLOv8 para la detección de personas, desarrollé la API en Flask encargada del procesamiento de imágenes y colaboré en la construcción del dashboard web para visualizar el estado de ocupación, el historial de análisis y los reportes del sistema.',

technologies: [
  'Python',
  'Flask',
  'YOLOv8',
  'OpenCV',
  'JavaScript',
  'HTML',
  'CSS'
],

contributions: [
  'Integración del modelo YOLOv8 para la detección automática de personas.',
  'Desarrollo de la API REST en Flask para el procesamiento y análisis de imágenes.',
  'Implementación del dashboard interactivo con actualización automática e historial de reportes.'
],

results: [
  'Clasificación automática del nivel de ocupación de un espacio universitario mediante análisis de imágenes.',
  'Dashboard web con visualización en tiempo real, registro histórico de análisis y consulta de reportes.'
],

videoId: '',

images: [
  'assets/img/projects/MonitorExample.jpg',
  'assets/img/projects/MonitorOcupRep.jpg',
  'assets/img/projects/MonitorOcupHome.jpg',
],
},
{
  number: '05',
  category: 'Proyecto Universitario',
  name: 'Spot Publicitario - Pony Malta',
  link: '#',

  subtitle:
    'Proyecto universitario enfocado en la producción de un spot publicitario 3D para Pony Malta, desarrollado completamente en Blender.',

  year: '2026',

  role: '3D Generalist — Conceptualización, Modelado, Animación y Render',

  heroImage: 'assets/img/projects/Pony90.jpg',

  descriptionTitle: 'Spot publicitario universitario para Pony Malta',

  descriptionText:
    'Como parte de un proyecto universitario, se desarrolló un spot publicitario en 3D inspirado en las campañas audiovisuales de productos comerciales. El objetivo fue aplicar un flujo de trabajo completo de producción utilizando Blender, desde la conceptualización de la idea hasta la entrega del video final. El proyecto se centró en transmitir una presentación atractiva del producto mediante modelado 3D, materiales realistas, iluminación cinematográfica, animación y composición audiovisual.',

  roleTitle: 'Mi participación',

  roleText:
    'Desarrollé el proyecto de forma integral, asumiendo el rol de 3D Generalist. Participé en la conceptualización de la idea, la elaboración del storyboard, el modelado del producto y de los elementos de la escena, la creación de materiales y texturas, la iluminación, la animación del producto y de las cámaras, el renderizado en Blender y la postproducción en Adobe After Effects y Adobe Premiere Pro. Este proyecto me permitió aplicar un flujo de trabajo similar al utilizado en la producción de comerciales 3D dentro de un contexto académico.',

  technologies: [
    'Blender',
    'Adobe Substance 3D Painter',
    'Adobe After Effects',
    'Adobe Premiere Pro',
    'Adobe Illustrator',
  ],

  contributions: [
    'Desarrollo del concepto creativo y storyboard.',
    'Modelado 3D del producto y de la escena.',
    'Creación de materiales y texturizado.',
    'Iluminación con enfoque cinematográfico.',
    'Animación del producto y de las cámaras.',
    'Renderizado de la animación en Blender.',
    'Composición, motion graphics, edición y corrección de color.',
  ],

  results: [
    'Producción de un spot publicitario 3D como proyecto académico.',
    'Aplicación de un flujo de trabajo completo de producción audiovisual utilizando Blender y Adobe Creative Cloud.',
  ],

  videoId: 'b_RUNvkM1zs',

  images: [
    'assets/img/projects/Pony60.jpg',
    'assets/img/projects/Pony01.jpg',
    'assets/img/projects/Pony90.jpg',
  ],
},
]

// NOTA: reemplaza estas rutas por miniaturas de tus propios proyectos
// (guárdalas en assets/img/hero/).
export const marqueeImages = [
  'assets/img/projects/MolassaultHome.jpg',
  'assets/img/projects/CaficultorRemegio.jpg',
  'assets/img/projects/MonitorOcupHome.jpg',
  'assets/img/projects/MolaGP.jpg',
  'assets/img/projects/GaleriaMultimedia.jpg',
  'assets/img/projects/MolassaultMain.jpg',
  'assets/img/projects/MonitorOcupRep.jpg',
  'assets/img/projects/Pony.jpg',
  'assets/img/projects/CasinoLoop.jpg',
  'assets/img/projects/Caficultor1.jpg',
]
