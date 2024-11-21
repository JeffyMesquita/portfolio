'use client';
import { ToolCard } from '@/components/ToolCard';
import { SectionVariant } from './SectionVariant';

export function Tools() {
  return (
    <SectionVariant spaceY variant>
      <section className="mx-auto mt-14 w-10/12 max-md:mt-12 max-sm:mt-8">
        <h1
          id="ferramentas"
          className="mb-10 text-3xl font-bold md:text-4xl lg:text-5xl"
        >
          Ferramentas
        </h1>
        <p className="pt-6 text-neutral-300">
          Os produtos, aplicativos e serviços que utilizo diariamente para o
          trabalho e vida pessoal.
        </p>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          <ToolCard
            className="tools-1"
            title="Vscode"
            description="Editor de código"
            image="/vscode.png"
            link="https://code.visualstudio.com/"
          />

          <ToolCard
            className="tools-2"
            title="Figma"
            description="Prototipação"
            image="/figma.png"
            link="https://www.figma.com/"
          />

          <ToolCard
            className="tools-3"
            title="Tailwindcss"
            description="Estilização"
            image="/tailwindcss.png"
            link="https://tailwindcss.com/"
          />

          <ToolCard
            className="tools-4"
            title="Chakra UI"
            description="Estilização"
            image="/chakraui.png"
            link="https://chakra-ui.com/"
          />

          <ToolCard
            className="tools-5"
            title="Styled Components"
            description="Estilização"
            image="/styledcomponents.png"
            link="https://styled-components.com/"
          />

          <ToolCard
            className="tools-6"
            title="PostgreSQL"
            description="Banco de dados"
            image="/postgresql.png"
            link="https://www.postgresql.org/"
          />

          <ToolCard
            className="tools-7"
            title="Docker"
            description="Containerização"
            image="/docker.png"
            link="https://www.docker.com/"
          />

          <ToolCard
            className="tools-8"
            title="Fastify"
            description="Desenvolvimento Backend"
            image="/fastify.png"
            link="https://www.fastify.io/"
          />
        </div>
      </section>
    </SectionVariant>
  );
}
