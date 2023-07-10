import { Metadata } from "next";
import { Container } from "./Container";
import { Navbar } from "./Navbar";
import Projects from "./Projects";
import { Services } from "./Services";
import { Tools } from "./Tools";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my personal portfolio",
};

export default function Home() {
  return (
    <main>
      <div className="w-10/12 mx-auto pt-4">
        <Navbar />
      </div>
      <Container />
      <div className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-40px]" />
      <Services />
      <div className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-40px]" />
      <Tools />
      <div className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-40px]" />
      <Projects />
      <article className="w-10/12 mx-auto my-20">
        <div className="flex flex-wrap items-start text-2xl text-neutral-300">
          <p className="text-5xl mr-2 mt-[2px]">&#169;</p> Jeferson Mesquita{" "}
          <small className="mt-[2px] ml-2">2023</small>{" "}
          <p className="text-2xl mr-2 mt-[2px]">|</p>
          <a
            href="https://github.com/JeffyMesquita"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Github
          </a>
          <p className="text-2xl mr-2 mt-[2px]">|</p>
          <a
            href="https://www.linkedin.com/in/jeferson-mesquita-763bb6b8/"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Linkedin
          </a>
          <p className="text-2xl mr-2 mt-[2px]">|</p>
          <a
            href="https://www.instagram.com/jeferson.mesquita/"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </article>
    </main>
  );
}
