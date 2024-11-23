export type StackType =
  | '@FRONTEND'
  | '@BACKEND'
  | '@FULLSTACK'
  | '@MOBILE'
  | '@DESIGN'
  | '@DEVOPS'
  | '@OTHERS';
export type RepositoryType = '@PRIVATE' | '@PUBLIC';
type Tags =
  | 'React'
  | 'TypeScript'
  | 'Next.js'
  | 'Node.js'
  | 'Express.js'
  | 'Python'
  | 'Django'
  | 'Flask'
  | 'Java'
  | 'Spring Boot'
  | 'Kotlin'
  | 'Swift'
  | 'React Native'
  | 'Expo'
  | 'Tanstack Query'
  | 'Shadcn/UI'
  | 'JavaScript'
  | 'HTML'
  | 'CSS'
  | 'SASS'
  | 'LESS'
  | 'Material UI'
  | 'MongoDB'
  | 'PostgreSQL'
  | 'Docker'
  | 'Kubernetes'
  | 'AWS'
  | 'GCP'
  | 'Azure'
  | 'Firebase'
  | 'Flutter'
  | 'Figma'
  | 'Adobe XD'
  | 'Photoshop'
  | 'Illustrator'
  | 'UI/UX Design'
  | 'CI/CD'
  | 'TDD'
  | 'Jest'
  | 'Cypress'
  | 'Testing Library'
  | 'Storybook'
  | 'Styled Components'
  | 'Chakra UI'
  | 'Material UI'
  | 'Tailwind CSS'
  | 'SASS'
  | 'LESS'
  | 'Vercel'
  | 'Serverless'
  | 'React Query'
  | 'Redis';

type RepositoryPrivate = {
  type: '@PRIVATE';
  link: null;
};

type RepositoryPublic = {
  type: '@PUBLIC';
  link: string;
};

type Repository = RepositoryPrivate | RepositoryPublic;

type Project = {
  title: string;
  subtitle: string;
  stack: StackType;
  description: string;
  image: string;
  deploy: string;
  repository: Repository;
  tags: Tags[];
};

export const PROJECTS: Project[] = [
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
      'TypeScript',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Test Frontend - ImobPower',
    subtitle: 'Um teste de frontend - ReactJS',
    stack: '@FRONTEND',
    description:
      "Este projeto foi desenvolvido para um teste de frontend, onde o objetivo era criar uma aplicação que consumisse uma API e exibisse os dados em uma de Pokémon's, que proporcionou a minha vaga na empresa ImobPower.",
    image: '/pokedex.png',
    deploy: 'https://teste-frontend-imobpower.vercel.app/',
    repository: {
      type: '@PUBLIC',
      link: 'https://github.com/JeffyMesquita/teste-frontend-imobpower/tree/main/pokedex',
    },
    tags: ['React', 'Next.js', 'TypeScript', 'Vercel'],
  },
  {
    title: 'Test Frontend - Plin',
    subtitle: 'Um teste de frontend - ReactJS e NextJS',
    stack: '@FRONTEND',
    description:
      'Este projeto foi desenvolvido para um teste de frontend, onde o objetivo era criar uma aplicação que consumisse uma Api de clima, Api pra consulta de CEP e um formulário, Fiz este teste para empresa Plin.',
    image: '/plin.png',
    deploy: 'https://frontend-test.jeffymesquita.dev/weather',
    repository: {
      type: '@PUBLIC',
      link: 'https://github.com/JeffyMesquita/frontend-test',
    },
    tags: ['React', 'Next.js', 'TypeScript', 'Vercel'],
  },
];
