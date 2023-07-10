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

export function Tools() {
  return (
    <section className="w-10/12 mx-auto">
      <h1
        id="ferramentas"
        className="md:text-4xl text-3xl lg:text-5xl font-bold mb-10"
      >
        Ferramentas
      </h1>
      <div className="flex flex-wrap gap-7 justify-center">
        <ServiceCard
          title="Vscode"
          icon={<TbBrandVscode size={50} className="text-blue-600" />}
          shortDescription="Editor de código"
          description="utilizando o editor de código Vscode."
          linkText="Saiba mais"
          effectColor="bg-blue-600"
        />

        <ServiceCard
          title="Figma"
          icon={<SiFigma size={50} className="text-purple-600" />}
          shortDescription="Prototipação"
          description="utilizando a ferramenta Figma."
          linkText="Saiba mais"
          effectColor="bg-purple-600"
        />

        <ServiceCard
          title="Tailwindcss"
          icon={<SiTailwindcss size={50} className="text-cyan-400" />}
          shortDescription="Estilização"
          description="utilizando a biblioteca Tailwindcss."
          linkText="Saiba mais"
          effectColor="bg-cyan-400"
        />

        <ServiceCard
          title="Chakra UI"
          icon={<SiChakraui size={50} className="text-green-400" />}
          shortDescription="Estilização"
          description="utilizando a biblioteca Chakra UI."
          linkText="Saiba mais"
          effectColor="bg-green-400"
        />

        <ServiceCard
          title="Styled Components"
          icon={<SiStyledcomponents size={50} className="text-pink-600" />}
          shortDescription="Estilização"
          description="utilizando a biblioteca Styled Components."
          linkText="Saiba mais"
          effectColor="bg-pink-600"
        />

        <ServiceCard
          title="PostgreSQL"
          icon={<SiPostgresql size={50} className="text-indigo-700" />}
          shortDescription="Desenvolvimento Web"
          description="utilizando o framework NextJs."
          linkText="Saiba mais"
          effectColor="bg-indigo-700"
        />

        <ServiceCard
          title="Docker"
          icon={<SiDocker size={50} className="text-blue-800" />}
          shortDescription="Containerização"
          description="utilizando a ferramenta Docker."
          linkText="Saiba mais"
          effectColor="bg-blue-800"
        />

        <ServiceCard
          title="Fastify"
          icon={<SiFastify size={50} className="text-blue-500" />}
          shortDescription="Desenvolvimento Backend"
          description="utilizando o framework Fastify."
          linkText="Saiba mais"
          effectColor="bg-blue-500"
        />
      </div>
    </section>
  );
}
