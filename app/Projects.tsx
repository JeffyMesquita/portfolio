"use client";
import Image from "next/image";
import React, { useState } from "react";

export function Projects() {
  const [selectedId, setSelectedId] = useState<boolean>(false);
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold">Projetos</h1>
      <p className="pt-6 text-neutral-300">
        Ao longo dos anos, adquiri experiência no design e desenvolvimento de
        uma variedade de websites, que vão desde landing pages (páginas de
        destino) simples de uma única página até aplicativos multi-página
        complexos. Gostaria de apresentar a vocês alguns desses projetos, para
        demonstrar meu trabalho e conquistas na área de design e desenvolvimento
        web.
      </p>
      <div className="w-10/12 box1 max-md:mt-[-50px] mt-0" />

      <h2
        id="em-breve"
        className="md:text-2xl text-xl lg:text-3xl font-bold mx-auto"
      >
        Em breve, aqui estarão alguns dos meus projetos. Aguarde, por favor...
      </h2>

      <Image
        src="/construction.png"
        alt="Em construção"
        width={500}
        height={300}
        className="rounded-xl opacity-90 bg-transparent mx-auto mt-6"
      />
    </div>
  );
}

export default Projects;
