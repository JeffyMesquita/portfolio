"use client";
import { useState } from "react";

export function Projects() {
  const [selectedId, setSelectedId] = useState<boolean>(false);
  return (
    <div className="w-10/12 mx-auto projects mt-14 max-sm:mt-8 max-md:mt-12">
      <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold" id="projetos">
        Projetos
      </h1>
      <p className="pt-6 text-neutral-300">
        Ao longo dos anos, adquiri experiência no design e desenvolvimento de
        uma variedade de websites, que vão desde landing pages (páginas de
        destino) simples de uma única página até aplicativos multi-página
        complexos. Gostaria de apresentar a vocês alguns desses projetos, para
        demonstrar meu trabalho e conquistas na área de design e desenvolvimento
        web.
      </p>
      <div className="w-10/12 box1 max-md:mt-[-50px] mt-0" />
    </div>
  );
}

export default Projects;
