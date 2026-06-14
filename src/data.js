export const PROFILE = {
  name: { first: 'Hongxiang', last: 'Chen' },
  tagline: 'Programador · Diseñador Visual · Diseñador de IA · Diseñador de Marca',
  bio: 'Diseño y construyo en la intersección de tecnología, identidad de marca e inteligencia artificial. Basado en España, creo experiencias digitales que combinan precisión técnica con impacto visual — desde sistemas de marca generativos hasta aplicaciones web interactivas.',
  email: 'xiang655@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hongxiang-chen/',
  github: 'https://github.com/danichen655',
  location: 'España',
  roles: ['Programador', 'Diseñador Visual', 'Diseñador de IA', 'Diseñador de Marca'],
  stats: [
    { value: '24+', label: 'Proyectos' },
    { value: '5+',  label: 'Años' },
    { value: '4',   label: 'Disciplinas' },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: 'Sistema de Identidad con IA',
    category: 'IA · Diseño de Marca',
    year: '2026',
    description: 'Sistema de identidad generativa que produce variaciones de marca infinitas manteniendo coherencia visual. Construido con modelos de difusión propios y pipelines de renderizado en tiempo real.',
    gradient: 'linear-gradient(145deg, #0c0020 0%, #2d006e 55%, #5e00d4 100%)',
    tags: ['IA Generativa', 'Diseño de Marca', 'Python', 'React'],
    featured: true,
  },
  {
    id: 2,
    title: 'Framework de Lenguaje Visual',
    category: 'Sistemas de Diseño',
    year: '2026',
    description: 'Sistema de diseño integral para startups tecnológicas que equilibra el pensamiento sistemático con una identidad visual expresiva en todos los puntos de contacto.',
    gradient: 'linear-gradient(145deg, #081400 0%, #1a3d00 55%, #367000 100%)',
    tags: ['Sistemas de Diseño', 'Figma', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Interfaz Neural con IA',
    category: 'IA · Programación',
    year: '2023',
    description: 'Interfaz impulsada por IA que adapta su lenguaje visual según los patrones de comportamiento del usuario, creando una experiencia de diseño viva y reactiva.',
    gradient: 'linear-gradient(145deg, #000f1a 0%, #00304e 55%, #005c91 100%)',
    tags: ['React', 'Machine Learning', 'Diseño de Interacción'],
  },
  {
    id: 4,
    title: 'Identidad de Marca en Movimiento',
    category: 'Diseño Visual · Motion',
    year: '2023',
    description: 'Sistema de identidad cinética con más de 200 plantillas de animación y principios de movimiento propios para una empresa de medios global.',
    gradient: 'linear-gradient(145deg, #1a0008 0%, #4d0018 55%, #92002e 100%)',
    tags: ['After Effects', 'Marca', 'Motion Design'],
  },
  {
    id: 5,
    title: 'Plataforma de Visualización de Datos',
    category: 'Programación · Visual',
    year: '2023',
    description: 'Dashboard de visualización en tiempo real que procesa millones de datos con renderizado WebGL personalizado y filtros interactivos.',
    gradient: 'linear-gradient(145deg, #0e0a00 0%, #2e2200 55%, #5c4400 100%)',
    tags: ['D3.js', 'WebGL', 'React', 'Python'],
  },
  {
    id: 6,
    title: 'Especimen Tipográfico & Editorial',
    category: 'Tipografía · Editorial',
    year: '2022',
    description: 'Especimen tipográfico interactivo explorando la tecnología de fuentes variables, publicado como experiencia web. Destacado en varias publicaciones de diseño.',
    gradient: 'linear-gradient(145deg, #0e0e0e 0%, #222222 55%, #3a3a3a 100%)',
    tags: ['Tipografía', 'CSS', 'Web Interactiva'],
  },
];

export const TIMELINE = [
  {
    year: '2017',
    type: 'education',
    title: 'ESO y Bachillerato',
    org: 'IES Sanchez Caton',
    location: 'Galicia',
    description: 'Ciencias y tecnología.',
  },
  {
    year: '2018 – 2023',
    type: 'education',
    title: 'Ingeniería Informática',
    org: 'Universidad Complutense de Madrid',
    location: 'Madrid',
    description: 'Itinerario de computación: Inteligencia Artificial, Algoritmos, Estructuras de datos, Programación declarativa y concurrente.',
  },
  {
    year: 'Sept. 2022 – Actualidad',
    type: 'work',
    title: 'Data Engineer',
    org: 'NTT DATA',
    location: 'Madrid',
    description: 'Ingesta y tratamiento de datos para BBVA (ETL). Migración del Framework Shifu basado en Scala. Migración de front Python 2.7 → 3.7. Nuevas funcionalidades en Java.',
  },
]

export const SKILLS = [
  {
    category: 'Programación',
    icon: '⟨/⟩',
    items: ['Python', 'Java', 'C / C++', 'Scala', 'Haskell', 'Prolog', 'PySpark'],
  },
  {
    category: 'Datos & Cloud',
    icon: '◈',
    items: ['MySQL', 'Pandas / NumPy', 'Docker', 'GCP / GAE', 'ETL', 'Git / Bitbucket'],
  },
  {
    category: 'Inteligencia Artificial',
    icon: '∿',
    items: ['Machine Learning', 'Deep Learning', 'PLN', 'Algoritmos Genéticos', 'Sistemas de Recomendación', 'Búsqueda en estados'],
  },
  {
    category: 'Idiomas',
    icon: '◉',
    items: ['Español (Nativo)', 'Chino (Nativo)', 'Inglés (Medio)'],
  },
];
