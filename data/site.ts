/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://example.com',
  meta: {
    title: 'Markus Rumpel | Full-stack and Software engineer',
    description:
      'Portfolio: Creating reliable products with a heart of useability.',
  },
  hero: {
    name: 'Markus Rumpel',
    role: 'Full-stack & Software engineer',
    tagline: 'From experimentation to execution; fresh concepts, accessible design, and systems that evolve.',
    contact: 'Contact me via',
    avatarSrc: '/profilimg.png',
    avatarAlt: 'Markus Rumpel',
  },
  about: {
    paragraphs: [
      'I build digital worlds with a strong focus on games, content experiences, and intuitive useability. I love working on new ideas and techniques, constantly experimenting and integrating them into my projects — and I\'m equally driven to help push them forward. My philosophy is simple: Problems exist to be solved, and multitasking feels as natural as breathing.',
      'I believe long-lasting products come from clear, maintainable code, thoughtful design, and a relentless desire to explore new fields and improve. I create systems that are efficient, scalable, and impactful — solutions that elevate the experience for players and developers alike.',
      {
        heading: 'Focus areas',
        bullets: [
          'Web front- and backend development on a modular base',
          'Game Development in- and outside of games',
          'User friendly and visually appealing UI',
        ],
      },
      {
        heading: 'Technologies',
        techItems: ['TypeScript', 'Lua', 'Node / Vite', 'Game Tech', 'C# '],
      },
    ],
  },
  experiences: [
    {
      period: '2022 - now',
      title: 'Platform Administrator & Developer',
      company: 'Siedelwood',
      summary:
        'Responsible for administration, development, and continuous maintenance of the Siedelwood ecosystem, including Discord infrastructure, website frontend/backend, and custom applications and libraries for game integrations.',
      highlights: [
        'Maintained and expanded the Siedelwood Discord platform with automated moderation tools, custom bots, and community-driven features',
        'Developed and updated the website frontend and backend, including WordPress-based modules, PHP logic, and SQL-driven data structures', 
        'Built and maintained game-related applications and Lua-based libraries to support gameplay features and server functionality',
        'Implemented reusable UI components and optimized frontend structures using HTML, CSS, JavaScript, and TypeScript',
        'Ensured stable platform operations through continuous monitoring, debugging, and performance improvements across all systems'
      ],
      tech: ['Javascript/Typescript', 'PHP', 'HTML + CSS', 'SQL', 'Wordpress', 'Lua', 'Discord']
    },
    {
      period: '2021 - 2022',
      title: 'Fullstack Software Developer',
      company: 'IT-Designers',
      summary:
        'Built a modular, blockchain-backed prototype for the German e-prescription system using Hyperledger Fabric, delivered as a complete end-to-end application including verification workflows.',
      highlights: [
        'Designed and implemented a Hyperledger Fabric architecture enabling secure storage and validation of electronic prescriptions',
        'Developed a modular ExpressJS backend with reusable services and clearly separated API layers', 
        'Created a VueJS and NeutralinoJS desktop application featuring a component-driven UI for doctors and pharmacies, and patients',
        'Built reusable frontend components to ensure maintainability and consistent UX across all user roles',
        'Integrated full blockchain-based verification and delivered a functional prototype as a cohesive application'
      ],
      tech: ['Hyperledger Fabric', 'ExpressJS', 'VueJS', 'NeutralinoJS', 'Node.js'],
    },
    {
      period: '2020 - now',
      title: 'Game Content Creator',
      company: 'The Settlers 5 Multiplayer Community',
      summary:
        'Creation of custom game content for the Siedler 5 ecosystem, including advanced mods, unique maps, and extended gameplay features.',
      highlights: [
      'Designed and developed custom mods introducing new mechanics, balance adjustments, and extended gameplay functionality',
      'Created high-quality maps with unique layouts, scripted events, and optimized player flow',
      'Built custom Lua scripts to enhance game logic, trigger dynamic scenarios, and support mod functionality',
      'Collaborated with community creators to refine content, improve visual and gameplay consistency, and expand the available mod library',
      'Produced creative in-game assets and variations to enrich the single- and multiplayer experience and support long-term community engagement'
      ],
      tech: [ 'Lua', 'Custom S5 Modding Tools', 'S5 Map Editor', 'Game Scripting', 'Level design'],
    },



    {
      period: '2016 - 2025',
      title: 'Work during Studies',
      company: 'Hochschule Esslingen - Projects',
      summary:
        'Development of different software solutions during my studies in all kinds of environments and technologies.',
      highlights: [
        'Built of a university-internal classifieds platform using the MEVN stack',
        'Designed a multi-service architectures with isolated frontend, backend, and database modules using but not limited to VueJS, Python, MongoDB and Docker (Kubernetes cluster)',
        'Research Project: Creation of a fully scripted Siedler 5 map including custom mechanics, Lua logic, debugging workflows, and extensive documentation',
        'Bachelor Thesis: Research and implementation of automated software testing strategies, applied to the university\'s website.',
        'Created a complete .Net application including architecture design and testing.'
      ],
      tech: ['Typescript', 'NodeJS', 'C#', 'Software Architecture', 'Fullstack', 'Testing']
    },
    {
      period: '',
      title: 'Personal projects',
      company: '',
      summary:
        'Development of personal projects using all kinds of technolgy and methods.',
      highlights: [
        'Built a static input overlay used for streaming show keyboard input in real time',
        'Created a private cheat Tool for COD MW3 (2011) using memory manipulation and reverse engineering',
        'Prototyping a RPG-Game from scratch comparable to RPG Maker'
      ],
      tech: ['C#', 'IDA', 'Typescript', 'NodeJS', 'Reverse Engineering']
    }


/*
  {
    period: '2021',
    title: 'MEVN Classifieds Application',
    company: 'Hochschule Esslingen - Team Project',
    summary:
      'Development of a university-internal classifieds platform using the MEVN stack, featuring modular components, secure data handling, and a clean user experience.',
    highlights: [
      'Built a full MEVN application with MongoDB persistence, ExpressJS API, VueJS frontend, and NodeJS runtime',
      'Implemented reusable Vue components and a modular frontend architecture',
      'Designed REST endpoints for listing creation, search, user management, and moderation workflows',
      'Integrated proper authentication and validation'
    ],
    tech: ['MongoDB', 'ExpressJS', 'VueJS', 'NodeJS']
  },

  {
    period: '2022 - 2023',
    title: 'Modular Fullstack Techstack & Kubernetes Deployment',
    company: 'Hochschule Esslingen - Duo Project',
    summary:
      'Creation of a modular fullstack ecosystem combining VueJS, Python services, MongoDB storage, and Docker-based containerization deployed in Kubernetes.',
    highlights: [
      'Designed a multi-service architecture with isolated frontend, backend, and database modules',
      'Implemented Python microservices with REST interfaces and containerized them via Docker',
      'Deployed the full stack into a Kubernetes cluster with automated scaling and monitoring'
    ],
    tech: ['VueJS', 'Python', 'MongoDB', 'Docker', 'Kubernetes']
  },

  {
    period: '2023 - 2024',
    title: 'Game Development - The Settlers 5 Custom Map & Documentation',
    company: 'Hochschule Esslingen - Research Project',
    summary:
      'Creation of a fully scripted Siedler 5 map including custom mechanics, Lua logic, debugging workflows, and extensive documentation.',
    highlights: [
      'Developed a custom S5 map with unique gameplay events, triggers, and balancing',
      'Implemented Lua scripts for game logic, scenario progression, and dynamic interactions',
      'Used the S5 Map Editor and Lua Debugger for iterative testing and refinement',
      'Produced a complete technical documentation covering design, scripting, debugging, and testing'
    ],
    tech: ['Lua', 'S5 Map Editor', 'Lua Debugger', 'Game Scripting', 'Testing']
  },

  {
    period: '2024 - 2025',
    title: 'Bachelor Thesis - Software Testing Automation',
    company: 'Hochschule Esslingen - Bachelor Thesis',
    summary:
      'Research and implementation of automated software testing strategies, applied to the university\'s website.',
    highlights: [
      'Analyzed modern testing methodologies and automation strategies',
      'Built automated test suites using Selenium and Playwright',
      'Evaluated reliability, maintainability, and performance of both frameworks',
      'Applied tests to real-world scenarios on the university website'
    ],
    tech: ['Selenium', 'Playwright', 'Software Testing', 'Automation']
  },

  {
    period: '2023',
    title: 'Java REST API Application',
    company: 'Hochschule - OEM Integration Project',
    summary:
      'Development of a Java-based REST API in combination with webservers (JSP, Jax Rs, Quarkus) and persistance storage.',
    highlights: [
      'Implemented REST endpoints with Java and created custom an OEM library',
      'Designed a layered architecture with clear separation of concerns',
      'Integrated custom logic and ensured stable communication flows',
      'Added validation, error handling, and documentation'
    ],
    tech: ['Java', 'REST API', 'OEM Integration', 'Jax', 'Quarkus', 'JSP']
  },

  {
    period: '2023 - 2024',
    title: 'C# Full Software Architecture Project',
    company: 'Hochschule Esslingen - Advanced Software Engineering',
    summary:
      'Creation of a complete C# application including architecture design and testing.',
    highlights: [
      'Designed a full software architecture',
      'Implemented unit tests to make sure all layers of the application work accordingly',
      'Built reusable code and ensured long-term maintainability',
      'Documented architecture decisions and testing strategies'
    ],
    tech: ['C#', 'Software Architecture', 'Testing', 'Documentation']
  },

  {
    period: '2018 - 2022',
    title: 'Private Reverse-Engineered Cheat Tool',
    company: 'Private Project',
    summary:
      'Development of a private C# cheat tool created through reverse engineering, focusing on memory inspection, offsets, and memory manipulation.',
    highlights: [
      'Performed reverse engineering to extract required game data and memory offsets',
      'Built a C# application for manipulating game state on multiple layers',
      'Implemented safety checks, UI elements, and modular features',
      'Used debugging tools and memory scanners for analysis'
    ],
    tech: ['C#', 'Reverse Engineering', 'Memory Analysis', 'IDA (Interactive Disassembler)']
  },

  {
    period: '2023',
    title: 'C# Static Input Overlay for Streaming',
    company: 'Private Project',
    summary:
      'Creation of a static input overlay used in Twitch streams to visualize inputs in real time.',
    highlights: [
      'Developed a lightweight C# application for real-time input visualization',
      'Designed a clean and minimalistic UI suitable for streaming overlays',
      'Optimized rendering for low-latency input feedback',
      'Used during personal Twitch streams for viewer interaction'
    ],
    tech: ['C#', 'UI Development', 'Input Tracking']
  }
    */
  ],

  featuredProjects: [
    {
      title: 'The Settlers 5 - Hard campaigns',
      period: '2022 - 2021',
      summary: 'Reworked the campaigns to a higher difficulty introducing new mechanics and level design patterns.',
      solution: 'Redesigned and re-scripted maps with the mapeditor, lua-codeeditor and ensuring consistency by testing with the LuaDebugger.',
      impact: 'Achieved a rise of difficulty in other maps and general gameplay which also lead to an increased number of new game mechanics.',
      image: 'basegamehardcampaign1.jpg',
      imageAlt: 'Hard Base game camapaign',
      techCategories: [
        {
          category: 'Game Engineering',
          items: ['Lua', 'XML', 'Level-/Mapeditor Tools', ]
        },
        {category: 'Methods',
          items: ['OOP', 'Agile Development', 'Design Thinking', 'Feature Driven Development']
        }
      ]
    },
    {
      title: 'Fullstack prototype - the german e-prescription',
      period: '2021 - 2022',
      summary: 'Built a prototype for the German e-prescription system with front-, backend, remote storage and executable application.',

      solution: 'Designed a modular system with VueJS, ExpressJS, Hyperledger Fabric Blockchain and NeutralinoJS, ensuring consistent experience across all levels of software.',
      impact: 'Achieved a fully working prototype that shows a potential implementation of the german e-prescription.',
      image: 'hyperledger_fabric_logo.webp',
      imageAlt: 'Fullstack prototype - the german e-prescription',
      techCategories: [
        {
          category: 'Frontend',
          items: ['TypeScript', 'VueJS', 'NeutralinoJS'],
        },
        {
          category: 'Backend',
          items: ['ExpressJS', 'Hyperledger Fabric Blockchain', 'Docker', 'Bash/Shell'],
        },
      ],
    },
    {
      title: 'Siedelwood plattform',
      period: '2022 - now',
      summary: 'Delivered a plattform for the games The Settlers 5 and 6 offering content, customer support and a place to come together.',
      solution: 'Implemented a PHP-based content architecture with dynamically generated project pages, enabling seamless content updates without developer involvement.',
      impact: 'Enabled content updates by users outside of the platform and empowered the S5 and S6 community to independently maintain and expand project content, strengthening collaboration and accelerating feature delivery across the genre.',
      image: 'siedelwood-logo-dark-1.webp',
      imageAlt: 'Siedelwood plattform',
      techCategories: [
        {
          category: 'Website',
          items: ['PHP', 'Wordpress', 'HTML + CSS + JS'],
        },
        {
          category: 'Plattform and Content',
          items: ['Discord', 'C#', 'Lua', 'Typescript'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'Design system rollout', role: 'Frontend', techStack: 'Astro, CSS, Storybook' },
    { date: '2024', project: 'Checkout reliability', role: 'Full-stack', techStack: 'TypeScript, Postgres, Redis' },
    { date: '2024', project: 'Auth hardening', role: 'Backend', techStack: 'OAuth2, JWT, rate limits' },
    { date: '2023', project: 'Analytics pipeline', role: 'Data', techStack: 'SQL, dbt, warehouse' },
    { date: '2023', project: 'Mobile web refresh', role: 'Frontend', techStack: 'HTML, CSS, a11y audits' },
  ],
  contact: {
    email: 'markusrumpel2@gmail.com',
    github: 'https://github.com/schmeling65',
    steam: 'https://steamcommunity.com/id/schmeling65/',
    discord: "https://discord.com/users/360470770012520448"
    },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
