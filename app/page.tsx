'use client';

import { Contact } from '@/components';
import { About } from '@/components/About/About';
import { Container } from '@/components/Container';
import { Education } from '@/components/Education/Education';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import Projects from '@/components/Projects';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Services } from '@/components/Services';
import { Skills } from '@/components/Skills/Skills';
import { Tools } from '@/components/Tools';

export default function Home() {
  return (
    <>
      <main className="scrollbar-hide h-full w-full">
        <Navbar />
        <Container />
        <About />
        <Education />
        <Skills />
        <Services />
        <Tools />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
