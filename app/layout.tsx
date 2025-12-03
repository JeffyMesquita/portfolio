/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './Providers';

const space_mono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffymesquita.dev'),
  abstract:
    'Este é meu portfólio pessoal, onde compartilho meus projetos. Tenho experiência com desenvolvimento web, mobile e desktop.',
  applicationName: 'Jeferson Mesquita, Desenvolvedor Web',
  keywords: [
    // Termos gerais da profissão
    'desenvolvedor',
    'programador',
    'developer',
    'engenheiro de software',
    'analista de sistemas',
    'desenvolvedor de software',
    'programador web',
    'desenvolvedor de aplicações',

    // Especialização - progressão
    'desenvolvedor fullstack',
    'fullstack developer',
    'desenvolvedor full stack',
    'desenvolvedor frontend',
    'desenvolvedor backend',
    'desenvolvedor react',
    'desenvolvedor next.js',
    'desenvolvedor typescript',
    'desenvolvedor javascript',
    'desenvolvedor node.js',
    'especialista em react',
    'especialista em typescript',
    'especialista em next.js',

    // Tecnologias principais
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'TailwindCSS',
    'Chakra UI',
    'Styled Components',
    'Docker',
    'Git',
    'GitHub',

    // Localização - Estado
    'desenvolvedor São Paulo',
    'programador São Paulo',
    'desenvolvedor fullstack São Paulo',
    'desenvolvedor react São Paulo',
    'desenvolvedor typescript São Paulo',

    // Localização - Cidade Principal
    'desenvolvedor Bebedouro',
    'programador Bebedouro',
    'desenvolvedor fullstack Bebedouro',
    'desenvolvedor web Bebedouro',
    'desenvolvedor em Bebedouro',
    'programador em Bebedouro',
    'desenvolvedor de Bebedouro',

    // Regiões Próximas
    'desenvolvedor Ribeirão Preto',
    'desenvolvedor Barretos',
    'desenvolvedor Franca',
    'desenvolvedor São José do Rio Preto',
    'programador Ribeirão Preto',
    'programador Barretos',
    'desenvolvedor região de Ribeirão Preto',
    'desenvolvedor região de Barretos',
    'desenvolvedor região de Franca',
    'desenvolvedor interior de São Paulo',

    // Nome Profissional - Progressão
    'Jeferson Mesquita',
    'Jeferson Mesquita desenvolvedor',
    'Jeferson Mesquita programador',
    'Jeferson Mesquita fullstack',
    'Jeferson Mesquita react',
    'Jeferson Mesquita typescript',
    'Jeferson Mesquita Bebedouro',
    'Jeferson Mesquita São Paulo',
    'Jeferson Mesquita developer',
    'Jeferson Mesquita portfolio',
    'Jeferson Mesquita github',

    // Formação e Especialização
    'Sistemas de Informação',
    'Engenharia de Software',
    'bacharel sistemas de informação',
    'pós graduação engenharia de software',
    'Unifafibe',
    'Anhanguera',

    // Serviços e Especialidades
    'desenvolvimento de aplicações web',
    'desenvolvimento de sistemas',
    'criação de websites',
    'desenvolvimento frontend',
    'desenvolvimento backend',
    'desenvolvimento de APIs',
    'desenvolvimento de SPAs',
    'desenvolvimento responsivo',
    'desenvolvimento mobile',
    'arquitetura de software',
    'clean architecture',
    'clean code',
    'metodologias ágeis',

    // Tipos de Projetos
    'landing pages',
    'aplicações web',
    'sistemas web',
    'e-commerce',
    'dashboards',
    'portais web',
    'aplicações react',
    'aplicações next.js',
    'APIs REST',
    'APIs GraphQL',

    // Variações com Preposições
    'desenvolvedor em Bebedouro',
    'programador de Bebedouro',
    'especialista em react',
    'especialista em typescript',
    'especialista em next.js',
    'desenvolvedor especializado em frontend',
    'desenvolvedor especializado em backend',

    // Combinações Específicas da Região
    'melhor desenvolvedor Bebedouro',
    'desenvolvedor experiente Bebedouro',
    'desenvolvedor qualificado São Paulo',
    'programador competente interior SP',
    'desenvolvedor freelancer Bebedouro',
    'desenvolvedor autônomo São Paulo',

    // Tecnologias e Ferramentas
    'MongoDB',
    'Jest',
    'Figma',
    'VS Code',
    'Cursor AI',
    'Shadcn/UI',
    'Tamagui',
    'Fastify',
    'Prisma',
    'Vercel',
    'Netlify',

    // Conceitos e Metodologias
    'desenvolvimento ágil',
    'scrum',
    'kanban',
    'CI/CD',
    'DevOps',
    'containerização',
    'versionamento',
    'testes automatizados',
    'performance web',
    'SEO',
    'acessibilidade web',
    'UX/UI',

    // Termos Relacionados ao Negócio
    'freelancer',
    'consultor de tecnologia',
    'soluções web',
    'transformação digital',
    'inovação tecnológica',
    'desenvolvimento sob medida',
    'consultoria em desenvolvimento',
    'mentoria em programação',

    // Resultados e Benefícios
    'aplicações performáticas',
    'código limpo',
    'arquitetura escalável',
    'soluções robustas',
    'desenvolvimento eficiente',
    'melhores práticas',
    'código manutenível',
    'aplicações modernas',

    // Localização Geográfica Específica
    'Brasil',
    'São Paulo',
    'Bebedouro',
    'Ribeirão Preto',
    'Barretos',
    'Franca',
    'São José do Rio Preto',
    'interior paulista',
    'região de Bebedouro',
    'Vale do São Francisco',

    // Portfolio e Projetos
    'portfolio desenvolvedor',
    'projetos react',
    'projetos next.js',
    'projetos typescript',
    'github portfolio',
    'código aberto',
    'open source',
    'contribuições github',

    // Soft Skills e Diferenciais
    'trabalho em equipe',
    'comunicação eficaz',
    'resolução de problemas',
    'aprendizado contínuo',
    'adaptabilidade',
    'proatividade',
    'liderança técnica',
    'mentoria',
  ],
  authors: {
    name: 'Jeferson Mesquita',
    url: 'https://jeffymesquita.dev',
  },
  category: 'Technology, Web Development',
  creator:
    'Jeferson Mesquita, Desenvolvedor Web(JavaScript, TypeScript)[JeffyMesquita]',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: {
      alt: 'Jeferson Mesquita, Desenvolvedor Web',
      url: '/opengraph-image.png',
      type: 'image/png',
      width: 630,
      height: 1200,
      host: 'https://jeffymesquita.dev',
      origin: 'https://jeffymesquita.dev',
    },
    title: 'Jeferson Mesquita, Desenvolvedor Web',
    type: 'website',
    description:
      'Este é meu portfólio pessoal, onde compartilho meus projetos. Tenho experiência com desenvolvimento web, mobile e desktop.',
    countryName: 'Brazil',
    alternateLocale: 'pt-BR',
    emails: ['je_2742@hotmail.com', 'jefejefe274227@gmail.com'],
  },
  twitter: {
    images: {
      alt: 'Jeferson Mesquita, Desenvolvedor Web',
      url: '/twitter-image.png',
      type: 'image/png',
      width: 675,
      height: 1200,
      host: 'https://jeffymesquita.dev',
      origin: 'https://jeffymesquita.dev',
    },
    title: 'Jeferson Mesquita, Desenvolvedor Web',
    card: 'summary_large_image',
    description:
      'Este é meu portfólio pessoal, onde compartilho meus projetos. Tenho experiência com desenvolvimento web, mobile e desktop.',
    creator: '@_jeferson___',
    site: 'https://jeffymesquita.dev',
  },
  title: {
    default: 'Jeferson Mesquita',
    template: 'Jeferson Mesquita | %s',
  },
  description:
    'Este é meu portfólio pessoal, onde compartilho meus projetos. Tenho experiência com desenvolvimento web, mobile e desktop.',
  verification: {
    google: 'CrYWSwBqLw0c04-gJS14BiHsvS-lXboPzcWsQkQngbw',
  },
  robots: {
    index: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt=br">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2CBCW9ZF03"
        ></script>
      </head>
      <body
        className={`${space_mono.className} max-w-screen h-screen w-screen overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
