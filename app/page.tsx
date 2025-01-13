'use client';

import { About } from '@/components/About';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { OtherProjects } from '@/components/OtherProjects';
import Projects from '@/components/Projects';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Services } from '@/components/Services';
import { Tools } from '@/components/Tools';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <main className="scrollbar-hide h-full w-full">
        <Navbar />
        <Container />
        <About />
        <Services />
        <Tools />
        <Projects />
        <OtherProjects />
        <Footer />
      </main>
      <Script src="https://unpkg.com/scrollreveal"></Script>
      <Script src="/scrollReveal.js"></Script>
      <ScrollToTop />
    </>
  );
}
