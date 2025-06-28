export interface Tool {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const TOOLS: Tool[] = [
  // IDEs & Editores
  {
    title: 'VS Code',
    description: 'Editor de código',
    image: '/vscode.png',
    link: 'https://code.visualstudio.com/',
  },
  {
    title: 'Cursor AI',
    description: 'IDE com IA',
    image: '/cursor.png',
    link: 'https://cursor.sh/',
  },
  // Design & UI
  {
    title: 'Figma',
    description: 'Design & Prototipação',
    image: '/figma.png',
    link: 'https://www.figma.com/',
  },
  // Frontend
  {
    title: 'React',
    description: 'Framework Frontend',
    image: '/reactjs.png',
    link: 'https://reactjs.org/',
  },
  {
    title: 'Next.js',
    description: 'Framework React',
    image: '/nextjs.png',
    link: 'https://nextjs.org/',
  },
  {
    title: 'TypeScript',
    description: 'Superset JavaScript',
    image: '/typescript.png',
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'Tailwind CSS',
    description: 'Framework CSS',
    image: '/tailwindcss.png',
    link: 'https://tailwindcss.com/',
  },
  {
    title: 'Shadcn/UI',
    description: 'Component Library',
    image: '/shadcn.png',
    link: 'https://ui.shadcn.com/',
  },
  {
    title: 'Tamagui',
    description: 'UI Kit Universal',
    image: '/tamagui.png',
    link: 'https://tamagui.dev/',
  },
  {
    title: 'Chakra UI',
    description: 'Component Library',
    image: '/chakraui.png',
    link: 'https://chakra-ui.com/',
  },
  {
    title: 'Styled Components',
    description: 'CSS-in-JS',
    image: '/styledcomponents.png',
    link: 'https://styled-components.com/',
  },
  // Backend
  {
    title: 'Node.js',
    description: 'Runtime JavaScript',
    image: '/nodejs.png',
    link: 'https://nodejs.org/',
  },
  {
    title: 'NestJS',
    description: 'Framework Node.js',
    image: '/nestjs.png',
    link: 'https://nestjs.com/',
  },
  {
    title: 'Fastify',
    description: 'Web Framework',
    image: '/fastify.png',
    link: 'https://www.fastify.io/',
  },
  // Databases
  {
    title: 'PostgreSQL',
    description: 'Banco Relacional',
    image: '/postgresql.png',
    link: 'https://www.postgresql.org/',
  },
  {
    title: 'MongoDB',
    description: 'Banco NoSQL',
    image: '/mongodb.png',
    link: 'https://www.mongodb.com/',
  },
  // DevOps
  {
    title: 'Docker',
    description: 'Containerização',
    image: '/docker.png',
    link: 'https://www.docker.com/',
  },
  {
    title: 'Git',
    description: 'Versionamento',
    image: '/git.png',
    link: 'https://git-scm.com/',
  },
  {
    title: 'GitHub',
    description: 'Plataforma Git',
    image: '/github.png',
    link: 'https://github.com/',
  },
  // Testing
  {
    title: 'Jest',
    description: 'Framework de Testes',
    image: '/jest.png',
    link: 'https://jestjs.io/',
  },
];
