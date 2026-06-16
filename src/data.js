export const PROFILE = {
  name: { first: 'Hongxiang', last: 'Chen' },
  bio: {
    es: 'Diseño y construyo en la intersección de tecnología, identidad de marca e inteligencia artificial. Basado en España, creo experiencias digitales que combinan precisión técnica con impacto visual — desde sistemas de marca generativos hasta aplicaciones web interactivas.',
    zh: '我在技术、品牌设计与人工智能的交汇处进行设计与构建。坐落于西班牙，我打造融合技术精准度与视觉冲击力的数字体验——从生成式品牌系统到交互式网络应用。',
  },
  email: 'xiang655@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hongxiang-chen/',
  github: 'https://github.com/danichen655',
  location: { es: 'España', zh: '西班牙' },
  roles: {
    es: ['Programador', 'Diseñador Visual', 'Diseñador de IA', 'Diseñador de Marca'],
    zh: ['程序员', '视觉设计师', 'AI设计师', '品牌设计师'],
  },
  stats: [
    { value: '24+', label: { es: 'Proyectos',  zh: '项目'   } },
    { value: '5+',  label: { es: 'Años',        zh: '年经验' } },
    { value: '4',   label: { es: 'Disciplinas', zh: '领域'   } },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title:    { es: 'Sistema de Identidad con IA',        zh: 'AI身份识别系统'  },
    category: { es: 'IA · Diseño de Marca',               zh: 'AI · 品牌设计'   },
    year: '2026',
    description: {
      es: 'Sistema de identidad generativa que produce variaciones de marca infinitas manteniendo coherencia visual. Construido con modelos de difusión propios y pipelines de renderizado en tiempo real.',
      zh: '生成式身份识别系统，在保持视觉一致性的同时产生无限品牌变体。基于自有扩散模型和实时渲染管道构建。',
    },
    gradient: 'linear-gradient(145deg, #0c0020 0%, #2d006e 55%, #5e00d4 100%)',
    tags: ['IA Generativa', 'Diseño de Marca', 'Python', 'React'],
    featured: true,
  },
  {
    id: 2,
    title:    { es: 'Framework de Lenguaje Visual',       zh: '视觉语言框架'    },
    category: { es: 'Sistemas de Diseño',                 zh: '设计系统'        },
    year: '2026',
    description: {
      es: 'Sistema de diseño integral para startups tecnológicas que equilibra el pensamiento sistemático con una identidad visual expresiva en todos los puntos de contacto.',
      zh: '面向科技初创企业的综合设计系统，在所有接触点上平衡系统性思维与富有表现力的视觉身份。',
    },
    gradient: 'linear-gradient(145deg, #081400 0%, #1a3d00 55%, #367000 100%)',
    tags: ['Sistemas de Diseño', 'Figma', 'TypeScript'],
  },
  {
    id: 3,
    title:    { es: 'Interfaz Neural con IA',             zh: 'AI神经界面'      },
    category: { es: 'IA · Programación',                  zh: 'AI · 编程'       },
    year: '2023',
    description: {
      es: 'Interfaz impulsada por IA que adapta su lenguaje visual según los patrones de comportamiento del usuario, creando una experiencia de diseño viva y reactiva.',
      zh: 'AI驱动的界面，根据用户行为模式调整其视觉语言，创造出动态响应的设计体验。',
    },
    gradient: 'linear-gradient(145deg, #000f1a 0%, #00304e 55%, #005c91 100%)',
    tags: ['React', 'Machine Learning', 'Diseño de Interacción'],
  },
  {
    id: 4,
    title:    { es: 'Identidad de Marca en Movimiento',  zh: '动态品牌标识'    },
    category: { es: 'Diseño Visual · Motion',            zh: '视觉设计 · 动效' },
    year: '2023',
    description: {
      es: 'Sistema de identidad cinética con más de 200 plantillas de animación y principios de movimiento propios para una empresa de medios global.',
      zh: '动态识别系统，拥有200余个动画模板和为全球媒体公司定制的运动原则。',
    },
    gradient: 'linear-gradient(145deg, #1a0008 0%, #4d0018 55%, #92002e 100%)',
    tags: ['After Effects', 'Marca', 'Motion Design'],
  },
  {
    id: 5,
    title:    { es: 'Plataforma de Visualización de Datos', zh: '数据可视化平台' },
    category: { es: 'Programación · Visual',              zh: '编程 · 视觉'     },
    year: '2023',
    description: {
      es: 'Dashboard de visualización en tiempo real que procesa millones de datos con renderizado WebGL personalizado y filtros interactivos.',
      zh: '实时可视化仪表板，通过自定义WebGL渲染和交互式过滤器处理数百万数据点。',
    },
    gradient: 'linear-gradient(145deg, #0e0a00 0%, #2e2200 55%, #5c4400 100%)',
    tags: ['D3.js', 'WebGL', 'React', 'Python'],
  },
  {
    id: 6,
    title:    { es: 'Especimen Tipográfico & Editorial',  zh: '排版与编辑标本'  },
    category: { es: 'Tipografía · Editorial',            zh: '排版 · 编辑'     },
    year: '2022',
    description: {
      es: 'Especimen tipográfico interactivo explorando la tecnología de fuentes variables, publicado como experiencia web. Destacado en varias publicaciones de diseño.',
      zh: '探索可变字体技术的交互式排版标本，作为网络体验发布，获多家设计媒体推荐。',
    },
    gradient: 'linear-gradient(145deg, #0e0e0e 0%, #222222 55%, #3a3a3a 100%)',
    tags: ['Tipografía', 'CSS', 'Web Interactiva'],
  },
];

export const TIMELINE = [
  {
    year: '2017',
    type: 'education',
    title:       { es: 'ESO y Bachillerato',    zh: '中学与高中'     },
    org: 'IES Sanchez Caton',
    location:    { es: 'Galicia',               zh: '加利西亚'       },
    description: { es: 'Ciencias y tecnología.', zh: '理科与技术方向。' },
  },
  {
    year: '2018 – 2023',
    type: 'education',
    title:    { es: 'Ingeniería Informática',   zh: '计算机工程学士' },
    org: 'Universidad Complutense de Madrid',
    location: { es: 'Madrid',                  zh: '马德里'         },
    description: {
      es: 'Itinerario de computación: Inteligencia Artificial, Algoritmos, Estructuras de datos, Programación declarativa y concurrente.',
      zh: '计算方向：人工智能、算法、数据结构、声明式编程与并发编程。',
    },
  },
  {
    year: 'Sept. 2022 – Actualidad',
    type: 'work',
    title:    { es: 'Data Engineer', zh: '数据工程师' },
    org: 'NTT DATA',
    location: { es: 'Madrid', zh: '马德里' },
    description: {
      es: [
        'Ingesta y tratamiento de datos con herramientas propias de **BBVA** (**ETL**)',
        'Migración del **Framework Shifu** para realizar ingestas basado en **Scala**',
        'Migración de front de **Python 2.7** a **Python 3.7**',
        'Desarrollo de nuevas funcionalidades para back con **Java**',
        'Investigación de posibles conflictos entre dependencias de **Maven**',
      ],
      zh: [
        '使用**BBVA**专有工具进行数据采集和处理（**ETL**）',
        '迁移基于**Scala**的**Shifu框架**用于数据采集',
        '将前端从**Python 2.7**迁移至**Python 3.7**',
        '使用**Java**开发新的后端功能',
        '调查**Maven**依赖项之间的潜在冲突',
      ],
    },
  },
  {
    year: 'Oct. 2024 – Sept. 2025',
    type: 'education',
    title:    { es: 'Máster Big Data, Data Science & IA', zh: '大数据、数据科学与AI硕士' },
    org: 'Universidad Complutense de Madrid',
    location: { es: 'Madrid', zh: '马德里' },
    grade: { value: '9.4', tfm: '10' },
    description: {
      es: [
        'Análisis y procesamiento de grandes volúmenes de datos con **Hadoop**, **Spark** y arquitecturas **Big Data**',
        'Modelado predictivo, **Machine Learning** y **Deep Learning** orientado a entornos empresariales',
        'Procesamiento de lenguaje natural (**NLP**) y modelos de **IA generativa**',
        'Visualización avanzada con **Tableau** y **Python** (Matplotlib, Seaborn)',
        'Bases de datos **SQL**, **MongoDB** y gestión con **Linux** y **Git**',
        'TFM (**10/10**): Pipeline **end-to-end** automatizado y parametrizable en **Databricks** y **Azure** para buscar cualquier tipo de oferta laboral, con extracción, transformación y análisis de datos de **LinkedIn** España. Arquitectura **Lakehouse** con visualización en **Power BI**',
      ],
      zh: [
        '使用**Hadoop**、**Spark**和**大数据**架构进行大规模数据分析与处理',
        '面向企业环境的预测建模、**机器学习**和**深度学习**',
        '自然语言处理（**NLP**）和**生成式AI**模型',
        '使用**Tableau**和**Python**（Matplotlib、Seaborn）进行高级数据可视化',
        '**SQL**、**MongoDB**数据库及**Linux**和**Git**管理',
        '毕设（**10/10**）：在**Databricks**和**Azure**上构建自动化且可参数化的**端到端**数据管道，用于检索任意类型职位信息，涵盖西班牙**LinkedIn**数据的抽取、转换与分析。**Lakehouse**架构，**Power BI**可视化',
      ],
    },
  },
]

export const SKILLS = [
  {
    category: { es: 'Programación',          zh: '编程'      },
    icon: '⟨/⟩',
    items: {
      es: ['Python', 'Java', 'C / C++', 'Scala', 'Haskell', 'Prolog', 'PySpark'],
      zh: ['Python', 'Java', 'C / C++', 'Scala', 'Haskell', 'Prolog', 'PySpark'],
    },
  },
  {
    category: { es: 'Datos & Cloud',          zh: '数据与云'  },
    icon: '◈',
    items: {
      es: ['MySQL', 'Pandas / NumPy', 'Docker', 'GCP / GAE', 'ETL', 'Git / Bitbucket'],
      zh: ['MySQL', 'Pandas / NumPy', 'Docker', 'GCP / GAE', 'ETL', 'Git / Bitbucket'],
    },
  },
  {
    category: { es: 'Inteligencia Artificial', zh: '人工智能' },
    icon: '∿',
    items: {
      es: ['Machine Learning', 'Deep Learning', 'PLN', 'Algoritmos Genéticos', 'Sistemas de Recomendación', 'Búsqueda en estados'],
      zh: ['机器学习', '深度学习', '自然语言处理', '遗传算法', '推荐系统', '状态空间搜索'],
    },
  },
  {
    category: { es: 'Idiomas',               zh: '语言能力'  },
    icon: '◉',
    items: {
      es: ['Español (Nativo)', 'Chino (Nativo)', 'Inglés (Medio)'],
      zh: ['西班牙语（母语）', '中文（母语）', '英语（中级）'],
    },
  },
];
