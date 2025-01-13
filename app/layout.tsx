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
    'Jeferson Mesquita',
    'desenvolvedor',
    'web',
    'mobile',
    'desktop',
    'programador',
    'JavaScript',
    'React',
    'React Native',
    'Node.js',
    'TypeScript',
    'HTML',
    'CSS',
    'Sass',
    'Tailwind CSS',
    'Next.js',
    'Gatsby',
    'Expo',
    'Electron',
    'Bebedouro',
    'São Paulo',
    'Brasil',
    'Região de Ribeirão Preto',
    'Região de Barretos',
    'Região de Franca',
    'Região de São José do Rio Preto',
    'Região de Bebedouro',
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
    <html lang="pt=br" className="scrollbar-hide">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2CBCW9ZF03"
        ></script>
      </head>
      <body
        className={`${space_mono.className} scrollbar-hide max-w-screen h-screen w-screen overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
