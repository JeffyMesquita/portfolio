"use client";
import ServiceCard from "@/components/ServiceCard";
import React from "react";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiPostgresql,
  SiTailwindcss,
  SiChakraui,
  SiFigma,
  SiStyledcomponents,
  SiDocker,
  SiFastify,
} from "react-icons/si";
import { ToolCard } from "@/components/ToolCard";

export function Tools() {
  return (
    <section className="w-10/12 mx-auto">
      <h1
        id="ferramentas"
        className="md:text-4xl text-3xl lg:text-5xl font-bold mb-10"
      >
        Ferramentas
      </h1>
      <p className="pt-6 text-neutral-300">
        Os produtos, aplicativos e serviços que utilizo diariamente para o
        trabalho e vida pessoal.
      </p>
      <div className="mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10">
        <ToolCard
          title="Vscode"
          description="Editor de código"
          image="/vscode.png"
          link="https://code.visualstudio.com/"
        />

        <ToolCard
          title="Figma"
          description="Prototipação"
          image="/figma.png"
          link="https://www.figma.com/"
        />

        <ToolCard
          title="Tailwindcss"
          description="Estilização"
          image="/tailwindcss.png"
          link="https://tailwindcss.com/"
        />

        <ToolCard
          title="Chakra UI"
          description="Estilização"
          image="/chakraui.png"
          link="https://chakra-ui.com/"
        />

        <ToolCard
          title="Styled Components"
          description="Estilização"
          image="/styledcomponents.png"
          link="https://styled-components.com/"
        />

        <ToolCard
          title="PostgreSQL"
          description="Banco de dados"
          image="/postgresql.png"
          link="https://www.postgresql.org/"
        />

        <ToolCard
          title="Docker"
          description="Containerização"
          image="/docker.png"
          link="https://www.docker.com/"
        />

        <ToolCard
          title="Fastify"
          description="Desenvolvimento Backend"
          image="/fastify.png"
          link="https://www.fastify.io/"
        />
      </div>
    </section>
  );
}
