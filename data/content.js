/**
 * Contenido del portafolio.
 * Cada texto es un objeto { es: '...', en: '...' } para poder mostrarlo
 * en el idioma activo. Edita estos datos para actualizar tus textos sin
 * tocar el HTML.
 */
export const services = [
  {
    number: '01',
    name: { es: 'Desarrollo Web', en: 'Web Development' },
    description: {
      es: 'Desarrollo de landing pages y sitios web modernos, rápidos y responsivos, diseñados para fortalecer tu presencia digital y convertir visitantes en clientes.',
      en: 'Development of modern, fast, responsive landing pages and websites, designed to strengthen your digital presence and convert visitors into customers.',
    },
  },
  {
    number: '02',
    name: { es: 'Experiencias Interactivas', en: 'Interactive Experiences' },
    description: {
      es: 'Creación de aplicaciones interactivas en 2D y 3D utilizando Unity, ideales para educación, entretenimiento, simulaciones y proyectos personalizados.',
      en: 'Creation of interactive 2D and 3D applications using Unity, ideal for education, entertainment, simulations, and custom projects.',
    },
  },
  {
    number: '03',
    name: { es: 'Soluciones AR & VR', en: 'AR & VR Solutions' },
    description: {
      es: 'Desarrollo de experiencias inmersivas en Realidad Virtual y Realidad Aumentada para capacitación, exhibiciones, marketing y visualización de productos.',
      en: 'Development of immersive Virtual Reality and Augmented Reality experiences for training, exhibitions, marketing, and product visualization.',
    },
  },
  {
    number: '04',
    name: { es: 'Modelado 3D', en: '3D Modeling' },
    description: {
      es: 'Spots publicitarios, modelado de props, escenarios y activos optimizados para videojuegos, aplicaciones en tiempo real y experiencias inmersivas.',
      en: 'Advertising spots, prop and environment modeling, and optimized assets for video games, real-time applications, and immersive experiences.',
    },
  },
  {
    number: '05',
    name: { es: 'Software a Medida', en: 'Custom Software' },
    description: {
      es: 'Desarrollo de aplicaciones y herramientas a medida que automatizan procesos, optimizan operaciones y resuelven necesidades específicas de tu negocio.',
      en: "Development of custom applications and tools that automate processes, optimize operations, and solve your business's specific needs.",
    },
  },
]

// NOTA: name se mantiene igual en ambos idiomas a propósito (es el título
// de la pieza / el link de la página de detalle se arma con este valor,
// así que si lo traduces la URL cambiaría entre idiomas).
export const projects = [
  {
    number: '01',
    category: { es: 'Proyecto VR', en: 'VR Project' },
    name: 'Caficultor VR',
    link: '#',

    subtitle: {
      es: 'Experiencia inmersiva para Meta Quest sobre buenas prácticas del proceso del café.',
      en: 'Immersive Meta Quest experience about best practices in the coffee-growing process.',
    },
    year: '2025',
    studio: 'Nebuly Studios',
    role: { es: 'Ingeniero Multimedia — Desarrollo VR', en: 'Multimedia Engineer — VR Development' },

    heroImage: 'assets/img/projects/portada_caficultorVR.jpg',

    descriptionTitle: { es: 'Aprendizaje inmersivo del café', en: 'Immersive coffee learning' },
    descriptionText: {
      es: 'Caficultor VR es una experiencia educativa para Meta Quest que enseña de forma inmersiva las buenas prácticas del cultivo y proceso del café colombiano, guiada por Remegio, nuestro guía campesino.',
      en: 'Caficultor VR is an educational Meta Quest experience that immersively teaches best practices for growing and processing Colombian coffee, guided by Remegio, our farmer guide character.',
    },
    roleTitle: { es: 'Desarrollo VR en Unity', en: 'VR Development in Unity' },
    roleText: {
      es: 'Trabajé en el desarrollo de las mecánicas de interacción del café, la programación en C#, la integración de audio, animaciones dentro del proyecto y realicé el modelo 3D de remegio y las plantas del café.',
      en: 'I worked on developing the coffee interaction mechanics, C# programming, and integrating audio and animations into the project, and I created the 3D model of Remegio and the coffee plants.',
    },

    technologies: ['Unity', 'XR Interaction Toolkit', 'Blender', 'Meta Quest', 'C#', 'Adobe Suite'],

    contributions: {
      es: [
        'Mecánicas VR con XR Interaction Toolkit.',
        'Flujo de usuario de las diferentes etapas del café.',
        'Integración de audio y animaciones.',
        'Programación en C#.',
        'Colaboración en personaje guía Remegio.',
      ],
      en: [
        'VR mechanics with XR Interaction Toolkit.',
        'User flow across the different stages of coffee processing.',
        'Audio and animation integration.',
        'C# programming.',
        'Collaboration on the Remegio guide character.',
      ],
    },
    results: {
      es: [
        'Experiencia funcional para Meta Quest.',
        'Aprendizaje inmersivo.',
        'Proyecto destacado en Nebuly Studios.',
      ],
      en: [
        'Fully functional Meta Quest experience.',
        'Immersive learning.',
        'Featured project at Nebuly Studios.',
      ],
    },

    videoId: 'sbnh2iOobCI',

    images: [
      'assets/img/projects/RemegioVR.jpg',
      'assets/img/projects/Remegiocultivo.jpg',
      'assets/img/projects/portada_caficultorVR.jpg',
    ],
  },
  {
    number: '02',
    category: { es: 'Proyecto Universitario', en: 'University Project' },
    name: 'Molassault',
    link: '#',

    subtitle: {
      es: 'Aventura narrativa en tercera persona ambientada en un desastre inspirado en la inundación de melaza de Boston de 1919.',
      en: 'Third-person narrative adventure set in a disaster inspired by the 1919 Boston Molasses Flood.',
    },
    year: '2026',
    studio: { es: 'Proyecto académico', en: 'Academic project' },
    role: {
      es: 'Dirección Artística — Programación de Mecánicas y Escenarios',
      en: 'Art Direction — Mechanics & Level Programming',
    },

    heroImage: 'assets/img/projects/MolassaultMain.jpg',

    descriptionTitle: {
      es: 'Un rescate entre las ruinas de una ciudad devastada',
      en: 'A rescue amid the ruins of a devastated city',
    },
    descriptionText: {
      es: 'En Molassault, el jugador controla a Nico, quien debe atravesar una ciudad industrial devastada para rescatar a su mejor amigo Tomi, mientras descubre la verdad detrás del desastre. El juego combina exploración, parkour, puzles ambientales y recolección de pistas, con una dificultad que crece de forma gradual hasta un enfrentamiento final contra el antagonista.',
      en: "In Molassault, the player controls Nico, who must make his way through a devastated industrial city to rescue his best friend Tomi, uncovering the truth behind the disaster along the way. The game blends exploration, parkour, environmental puzzles, and clue collecting, with difficulty that ramps up gradually toward a final confrontation with the antagonist.",
    },

    roleTitle: {
      es: 'Dirección artística y programación de mecánicas',
      en: 'Art direction and mechanics programming',
    },
    roleText: {
      es: 'Definí la identidad visual del juego —paleta de tonos oscuros, ámbar y verdosos— manteniendo coherencia entre personajes, escenarios e interfaz. Además programé mecánicas básicas de gameplay y construí los escenarios industriales y urbanos donde se desarrolla la historia. Además, trabajé en estrecha colaboración con el equipo de desarrollo para asegurar que la interfaz respondiera adecuadamente a las mecánicas del juego y ofreciera una navegación eficiente, contribuyendo a mejorar la experiencia del usuario y la calidad final del proyecto.',
      en: "I defined the game's visual identity — a palette of dark, amber, and greenish tones — keeping characters, environments, and interface consistent with one another. I also programmed basic gameplay mechanics and built the industrial and urban environments where the story unfolds. I worked closely with the development team to make sure the interface responded properly to the game's mechanics and offered smooth navigation, helping improve both the user experience and the final quality of the project.",
    },

    technologies: ['Unity', 'C#', 'GitHub', 'Illustrator'],

    contributions: {
      es: [
        'Dirección artística y paleta de color del juego.',
        'Construcción de escenarios industriales y urbanos.',
        'Programación de mecánicas básicas de gameplay.',
        'Colaboración en control de versiones con GitHub.',
      ],
      en: [
        'Art direction and color palette for the game.',
        'Building of industrial and urban environments.',
        'Programming of basic gameplay mechanics.',
        'Collaboration on version control with GitHub.',
      ],
    },
    results: {
      es: [
        'Videojuego funcional con narrativa, exploración y combate integrados.',
        'Identidad visual coherente inspirada en un hecho histórico real.',
        'Curva de dificultad equilibrada a lo largo de los niveles.',
      ],
      en: [
        'Fully functional game combining narrative, exploration, and combat.',
        'Cohesive visual identity inspired by a real historical event.',
        'Balanced difficulty curve across the levels.',
      ],
    },

    videoId: '',

    images: [
      'assets/img/projects/CreditosMola.jpg',
      'assets/img/projects/MenuMola.jpg',
      'assets/img/projects/MolassaultMain.jpg',
    ],
  },
  {
    number: '03',
    category: { es: 'Proyecto Universitario', en: 'University Project' },
    name: 'Molassault Web',
    link: 'https://molassault-game-website.vercel.app/',

    subtitle: {
      es: 'Sitio de documentación del desarrollo de Molassault: historia, mundo, mecánicas y bitácora semana a semana.',
      en: "Development documentation site for Molassault: story, world, mechanics, and a week-by-week devlog.",
    },
    year: '2026',
    studio: 'Nebuly Studios',
    role: { es: 'Desarrollo Web', en: 'Web Development' },

    heroImage: 'assets/img/projects/MolassaultHome.jpg',

    descriptionTitle: {
      es: 'Un making-of interactivo del desarrollo de Molassault',
      en: "An interactive making-of for Molassault's development",
    },
    descriptionText: {
      es: 'Sitio web documental sobre el proceso creativo de Molassault, un videojuego narrativo en tercera persona donde Nico debe rescatar a su amigo Tomi tras el colapso de un tanque industrial de melaza. Reúne la historia del juego, sus tres escenarios, las mecánicas de gameplay, una bitácora de 11 semanas de desarrollo, galería de concept art y el equipo detrás del proyecto.',
      en: "A documentary website about the creative process behind Molassault, a third-person narrative game where Nico must rescue his friend Tomi after the collapse of an industrial molasses tank. It brings together the game's story, its three environments, the gameplay mechanics, an 11-week development devlog, a concept art gallery, and the team behind the project.",
    },

    roleTitle: {
      es: 'Estructura, secciones y presentación visual del sitio',
      en: 'Site structure, sections, and visual presentation',
    },
    roleText: {
      es: 'Como desarrollador de la interfaz de usuario de Molassault, fui responsable del diseño e implementación de los elementos visuales y de interacción de la web, asegurando una experiencia intuitiva, funcional y alineada con la identidad del proyecto. Mi trabajo incluyó la creación e integración de menús, botones y paneles, contribuyendo a una navegación clara y una experiencia de usuario óptima.',
      en: "As the UI developer for Molassault, I was responsible for designing and implementing the site's visual and interactive elements, ensuring an intuitive, functional experience aligned with the project's identity. My work included creating and integrating menus, buttons, and panels, contributing to clear navigation and a strong overall user experience.",
    },

    technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel'],

    contributions: {
      es: [
        'Estructura y maquetación de las secciones (historia, mundo, gameplay, avances, galería, equipo).',
        'Sistema de bitácora semanal con 11 semanas de avances documentados.',
        'Galería multimedia con concept art y diseño de personajes.',
        'Despliegue del sitio en Vercel.',
      ],
      en: [
        'Structure and layout of the sections (story, world, gameplay, progress, gallery, team).',
        'Weekly devlog system with 11 weeks of documented progress.',
        'Multimedia gallery with concept art and character design.',
        'Site deployment on Vercel.',
      ],
    },
    results: {
      es: [
        'Documentación completa y navegable de todo el proceso de desarrollo.',
        'Sitio publicado y accesible en línea.',
        'Identidad visual coherente con la marca de Molassault.',
      ],
      en: [
        'Complete, easy-to-navigate documentation of the entire development process.',
        'Site published and live online.',
        'Visual identity consistent with the Molassault brand.',
      ],
    },

    videoId: '',

    images: [
      'assets/img/projects/MolaWebEXP.jpg',
      'assets/img/projects/MolassaultEquipo.jpg',
      'assets/img/projects/MolassaultHome.jpg',
    ],
  },
  {
    number: '04',
    category: { es: 'Proyecto Universitario', en: 'University Project' },
    name: 'OccupancyHub',
    link: '#',

    subtitle: {
      es: 'Sistema inteligente para monitorear la ocupación de espacios universitarios mediante visión por computadora.',
      en: 'Smart system for monitoring university space occupancy using computer vision.',
    },
    year: '2026',

    role: { es: 'Desarrollador Full Stack — Visión por Computadora', en: 'Full Stack Developer — Computer Vision' },

    heroImage: 'assets/img/projects/MonitorOcupHome.jpg',

    descriptionTitle: { es: 'Monitoreo inteligente de ocupación', en: 'Smart occupancy monitoring' },
    descriptionText: {
      es: 'OccupancyHub es un sistema web desarrollado para monitorear el nivel de ocupación de espacios universitarios mediante visión por computadora. La aplicación analiza imágenes capturadas periódicamente, detecta la cantidad de personas utilizando YOLOv8 y clasifica automáticamente el estado del espacio como vacío, parcialmente lleno o lleno. El objetivo es brindar información en tiempo real que facilite la gestión de los espacios y reduzca la necesidad de inspecciones manuales.',
      en: 'OccupancyHub is a web system built to monitor occupancy levels in university spaces using computer vision. The application analyzes periodically captured images, detects the number of people using YOLOv8, and automatically classifies the space as empty, partially full, or full. The goal is to provide real-time information that makes space management easier and reduces the need for manual inspections.',
    },

    roleTitle: { es: 'Mi participación', en: 'My contribution' },
    roleText: {
      es: 'Participé en el desarrollo tanto del backend como del frontend del sistema. Implementé la integración del modelo YOLOv8 para la detección de personas, desarrollé la API en Flask encargada del procesamiento de imágenes y colaboré en la construcción del dashboard web para visualizar el estado de ocupación, el historial de análisis y los reportes del sistema.',
      en: 'I worked on both the backend and frontend of the system. I implemented the YOLOv8 model integration for people detection, developed the Flask API in charge of image processing, and collaborated on building the web dashboard to display occupancy status, analysis history, and system reports.',
    },

    technologies: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'JavaScript', 'HTML', 'CSS'],

    contributions: {
      es: [
        'Integración del modelo YOLOv8 para la detección automática de personas.',
        'Desarrollo de la API REST en Flask para el procesamiento y análisis de imágenes.',
        'Implementación del dashboard interactivo con actualización automática e historial de reportes.',
      ],
      en: [
        'YOLOv8 model integration for automatic people detection.',
        'Development of the Flask REST API for image processing and analysis.',
        'Implementation of the interactive dashboard with auto-refresh and report history.',
      ],
    },
    results: {
      es: [
        'Clasificación automática del nivel de ocupación de un espacio universitario mediante análisis de imágenes.',
        'Dashboard web con visualización en tiempo real, registro histórico de análisis y consulta de reportes.',
      ],
      en: [
        "Automatic classification of a university space's occupancy level through image analysis.",
        'Web dashboard with real-time visualization, historical analysis logs, and report lookup.',
      ],
    },

    videoId: '',

    images: [
      'assets/img/projects/MonitorExample.jpg',
      'assets/img/projects/MonitorOcupRep.jpg',
      'assets/img/projects/MonitorOcupHome.jpg',
    ],
  },
  {
    number: '05',
    category: { es: 'Proyecto Universitario', en: 'University Project' },
    name: 'Spot Publicitario - Pony Malta',
    title: { es: 'Spot Publicitario - Pony Malta', en: 'Pony Malta Advertising Spot' },
    link: '#',

    subtitle: {
      es: 'Proyecto universitario enfocado en la producción de un spot publicitario 3D para Pony Malta, desarrollado completamente en Blender.',
      en: 'University project focused on producing a 3D advertising spot for Pony Malta, developed entirely in Blender.',
    },
    year: '2026',

    role: {
      es: '3D Generalist — Conceptualización, Modelado, Animación y Render',
      en: '3D Generalist — Concept, Modeling, Animation & Rendering',
    },

    heroImage: 'assets/img/projects/Pony90.jpg',

    descriptionTitle: {
      es: 'Spot publicitario universitario para Pony Malta',
      en: 'University advertising spot for Pony Malta',
    },
    descriptionText: {
      es: 'Como parte de un proyecto universitario, se desarrolló un spot publicitario en 3D inspirado en las campañas audiovisuales de productos comerciales. El objetivo fue aplicar un flujo de trabajo completo de producción utilizando Blender, desde la conceptualización de la idea hasta la entrega del video final. El proyecto se centró en transmitir una presentación atractiva del producto mediante modelado 3D, materiales realistas, iluminación cinematográfica, animación y composición audiovisual.',
      en: 'As part of a university project, a 3D advertising spot was produced, inspired by audiovisual campaigns for commercial products. The goal was to apply a complete production workflow in Blender, from the initial concept all the way to the final video delivery. The project focused on presenting the product in an appealing way through 3D modeling, realistic materials, cinematic lighting, animation, and audiovisual composition.',
    },

    roleTitle: { es: 'Mi participación', en: 'My contribution' },
    roleText: {
      es: 'Desarrollé el proyecto de forma integral, asumiendo el rol de 3D Generalist. Participé en la conceptualización de la idea, la elaboración del storyboard, el modelado del producto y de los elementos de la escena, la creación de materiales y texturas, la iluminación, la animación del producto y de las cámaras, el renderizado en Blender y la postproducción en Adobe After Effects y Adobe Premiere Pro. Este proyecto me permitió aplicar un flujo de trabajo similar al utilizado en la producción de comerciales 3D dentro de un contexto académico.',
      en: 'I developed the project end to end, taking on the role of 3D Generalist. I handled the concept development, storyboarding, product and scene modeling, material and texture creation, lighting, product and camera animation, rendering in Blender, and post-production in Adobe After Effects and Adobe Premiere Pro. This project let me apply a workflow similar to that used in professional 3D commercial production, within an academic context.',
    },

    technologies: [
      'Blender',
      'Adobe Substance 3D Painter',
      'Adobe After Effects',
      'Adobe Premiere Pro',
      'Adobe Illustrator',
    ],

    contributions: {
      es: [
        'Desarrollo del concepto creativo y storyboard.',
        'Modelado 3D del producto y de la escena.',
        'Creación de materiales y texturizado.',
        'Iluminación con enfoque cinematográfico.',
        'Animación del producto y de las cámaras.',
        'Renderizado de la animación en Blender.',
        'Composición, motion graphics, edición y corrección de color.',
      ],
      en: [
        'Creative concept development and storyboarding.',
        '3D modeling of the product and the scene.',
        'Material creation and texturing.',
        'Cinematic lighting.',
        'Product and camera animation.',
        'Rendering of the animation in Blender.',
        'Compositing, motion graphics, editing, and color correction.',
      ],
    },
    results: {
      es: [
        'Producción de un spot publicitario 3D como proyecto académico.',
        'Aplicación de un flujo de trabajo completo de producción audiovisual utilizando Blender y Adobe Creative Cloud.',
      ],
      en: [
        'Production of a 3D advertising spot as an academic project.',
        'Application of a complete audiovisual production workflow using Blender and Adobe Creative Cloud.',
      ],
    },

    videoId: 'b_RUNvkM1zs',

    images: [
      'assets/img/projects/Pony60.jpg',
      'assets/img/projects/Pony01.jpg',
      'assets/img/projects/Pony90.jpg',
    ],
  },
]

// NOTA: reemplaza estas rutas por miniaturas de tus propios proyectos.
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
