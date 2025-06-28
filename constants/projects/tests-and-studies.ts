import { ProjectType } from './types';

export const TESTS_AND_STUDIES: ProjectType[] = [
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
