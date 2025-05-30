'use client';
import { ToolCard } from '@/components/ToolCard';
import { SectionVariant } from './SectionVariant';
import { motion } from 'framer-motion';

export function Tools() {
  return (
    <SectionVariant spaceY variant>
      <motion.section
        className="mx-auto mt-14 w-10/12 max-md:mt-12 max-sm:mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          id="ferramentas"
          className="mb-10 text-3xl font-bold md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ferramentas
        </motion.h1>
        <motion.p
          className="pt-6 text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Os produtos, aplicativos e serviços que utilizo diariamente para o
          trabalho e vida pessoal.
        </motion.p>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {[
            {
              title: 'Vscode',
              description: 'Editor de código',
              image: '/vscode.png',
              link: 'https://code.visualstudio.com/',
            },
            {
              title: 'Figma',
              description: 'Prototipação',
              image: '/figma.png',
              link: 'https://www.figma.com/',
            },
            {
              title: 'Tailwindcss',
              description: 'Estilização',
              image: '/tailwindcss.png',
              link: 'https://tailwindcss.com/',
            },
            {
              title: 'Chakra UI',
              description: 'Estilização',
              image: '/chakraui.png',
              link: 'https://chakra-ui.com/',
            },
            {
              title: 'Styled Components',
              description: 'Estilização',
              image: '/styledcomponents.png',
              link: 'https://styled-components.com/',
            },
            {
              title: 'PostgreSQL',
              description: 'Banco de dados',
              image: '/postgresql.png',
              link: 'https://www.postgresql.org/',
            },
            {
              title: 'Docker',
              description: 'Containerização',
              image: '/docker.png',
              link: 'https://www.docker.com/',
            },
            {
              title: 'Fastify',
              description: 'Desenvolvimento Backend',
              image: '/fastify.png',
              link: 'https://www.fastify.io/',
            },
          ].map((tool, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                rotateX: 20,
                rotateZ: index % 2 === 0 ? 20 : -20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                rotateZ: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ToolCard
                title={tool.title}
                description={tool.description}
                image={tool.image}
                link={tool.link}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </SectionVariant>
  );
}
