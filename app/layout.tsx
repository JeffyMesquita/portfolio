import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const space_mono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffymesquita.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/og-image.png',
  },
  title: {
    default: 'Jeferson Mesquita',
    template: 'Jeferson Mesquita | %s',
  },
  description: 'This is my personal portfolio',
  verification: {
    google: 'google-site-verification=878787878',
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
      <body
        className={`${space_mono.className} scrollbar-hide max-w-screen h-screen w-screen overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
