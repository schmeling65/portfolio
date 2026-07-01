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
      period: '2021',
      title: 'Software Engineer - Internship',
      company: 'IT-Designers',
      summary:
        'Built a prototype of the E-prescription based on Hyperledger-Fabric Blockchain, including Front- and Backend.',
      highlights: [
        'Designed the complete application using VueJS, ExpressJS, Hyperledger-Fabric Blockchain',
        'Crafted self-explaining layouts and accessible UI with reuseable compontents.', 
        'Shipped everything as a standalone cross-plattform executable with build-in verification using NeutralinoJS',
      ],
      tech: ['TypeScript', 'VueJS', 'ExpressJS', 'Node', 'Vite', 'Hyperledger-Fabric', 'Blockchain', 'NeutralinoJS'],
    },
    {
      period: '2024',
      title: 'Frontend Architect',
      company: 'Nova Launch',
      summary:
        'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      highlights: [
        'Implemented a component-based design system with reusable cards, buttons, and hero sections',
        'Built content-driven project pages, archive views, and client-side navigation enhancements',
        'Added cross-browser polish and performance tuning with image optimization and lazy loading',
      ],
      tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Node', 'Vite'],
    },
    {
      period: '2023',
      title: 'UI Engineer',
      company: 'Orbital Creative',
      summary:
        'Created an interactive product showcase with a clean visual system and accessible component library.',
      highlights: [
        'Built a flexible project card system for content updates without code changes',
        'Improved brand consistency with typography, color, and motion guidelines',
        'Added testing and quality checks for cross-device UI fidelity',
      ],
      tech: ['Astro', 'Tailwind CSS', 'JavaScript', 'Node', 'Vitest'],
    },
  ],
  featuredProjects: [
    {
      title: 'Lumen Studio Website',
      period: '2025',
      summary: 'Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.',
      solution: 'Designed a modular component system with Astro and Tailwind CSS, ensuring consistent brand experience across all breakpoints.',
      impact: 'Achieved sub-1s page load metrics and 95+ Lighthouse scores through optimized asset delivery and lazy loading strategies.',
      image: 'astro-01.webp',
      imageAlt: 'Lumen Studio website showcase',
      techCategories: [
        {
          category: 'Frontend',
          items: ['TypeScript', 'Astro', 'Tailwind CSS', 'Responsive Design'],
        },
        {
          category: 'Performance',
          items: ['Asset Optimization', 'Lazy Loading', 'Image CDN'],
        },
      ],
    },
    {
      title: 'Nova Launch Marketing Platform',
      period: '2024',
      summary: 'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      solution: 'Implemented a content-driven architecture with reusable card components and dynamic project pages, enabling non-technical content updates.',
      impact: 'Reduced content update time by 80% through intuitive component-based structure; enabled marketing team independence.',
      image: 'astro-02.jpeg',
      imageAlt: 'Nova Launch platform interface',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Astro', 'TypeScript', 'Tailwind CSS'],
        },
        {
          category: 'Developer Experience',
          items: ['Vite', 'ESLint', 'Automated Testing'],
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
