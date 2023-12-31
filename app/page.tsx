"use client";

import { About } from "@/components/About";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Projects from "@/components/Projects";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Tools } from "@/components/Tools";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <main className="w-full h-full">
        <Navbar />
        <Container />
        <About />
        <Services />
        <Tools />
        <Projects />
        <Footer />
      </main>
      <Script src="https://unpkg.com/scrollreveal"></Script>
      <Script src="/scrollReveal.js"></Script>
      <ScrollToTop />
    </>
  );
}
