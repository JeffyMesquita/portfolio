export type StackType =
  | '@FRONTEND'
  | '@BACKEND'
  | '@FULLSTACK'
  | '@MOBILE'
  | '@DESIGN'
  | '@DEVOPS'
  | '@OTHERS';

export type RepositoryType = '@PRIVATE' | '@PUBLIC';

export type Tags =
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
  | 'Resend'
  | 'React Hook Form'
  | 'Responsivo'
  | 'SEO'
  | 'Vercel'
  | 'Redis'
  | 'Supabase'
  | 'PostgreSQL'
  | 'Prisma'
  | 'Zod'
  | 'Zustand'
  | 'React Router';

type RepositoryPrivate = {
  type: '@PRIVATE';
  link: null;
};

type RepositoryPublic = {
  type: '@PUBLIC';
  link: string;
};

type Repository = RepositoryPrivate | RepositoryPublic;

export type ProjectType = {
  title: string;
  subtitle: string;
  stack: StackType;
  description: string;
  image: string;
  deploy: string;
  repository: Repository;
  tags: Tags[];
};
