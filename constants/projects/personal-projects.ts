import { ProjectType } from '.';

export const PERSONAL_PROJECTS: ProjectType[] = [
  {
    title: 'Portfolio',
    subtitle: 'Meu portfólio pessoal',
    stack: '@FRONTEND',
    description:
      'Este é o meu portfólio pessoal, onde compartilho meus projetos e experiências. \n\nDesenvolvido com ReactJS, TypeScript e Next.js. \n\nHospedado na Vercel.',
    image: '/portfolio.png',
    deploy: 'https://jeffymesquita.dev',
    repository: {
      type: '@PUBLIC',
      link: 'https://github.com/JeffyMesquita/portfolio',
    },
    tags: ['React', 'Next.js', 'TypeScript', 'Vercel'],
  },
  {
    title: 'Amigo Secreto',
    subtitle: 'Um sorteador de amigo secreto',
    stack: '@FULLSTACK',
    description:
      'Este projeto foi desenvolvido devido a `dor` de acontecer sorteios de amigo secreto e sempre ter que fazer manualmente, então criei este projeto para facilitar a vida de quem precisa fazer sorteios de amigo secreto.',
    image: '/amigo-secreto.png',
    deploy: 'https://amigosecreto.jeffymesquita.dev',
    repository: {
      type: '@PUBLIC',
      link: 'https://github.com/JeffyMesquita/amigo-secreto',
    },
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Vercel',
      'Redis',
      'Serverless',
      'React Query',
      'Shadcn/UI',
      'Tailwind CSS',
    ],
  },
  {
    title: 'FinanceTrack',
    subtitle: 'Um sistema de controle de finanças',
    stack: '@FULLSTACK',
    description:
      'Este projeto foi desenvolvido devido a `dor` de gerenciar minhas finanças e sempre ter que fazer manualmente, então criei este projeto para facilitar a vida de quem precisa gerenciar suas finanças.',
    image: '/financeTrack.png',
    deploy:
      'https://financetrack.jeffymesquita.dev/login?ref=5b2ee7d6-63ee-4d84-9e01-6aacb85ef2b4',
    repository: {
      type: '@PRIVATE',
      link: null,
    },
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Vercel',
      'Tailwind CSS',
      'Shadcn/UI',
      'Resend',
      'React Hook Form',
      'Responsivo',
      'SEO',
      'PostgreSQL',
      'Supabase',
      'Zod',
      'Zustand',
      'React Hook Form',
    ],
  },
];
