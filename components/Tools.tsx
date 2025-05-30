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
          As ferramentas e tecnologias que utilizo no dia a dia para
          desenvolvimento.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[
            // IDEs & Editores
            {
              title: 'VS Code',
              description: 'Editor de código',
              image: '/vscode.png',
              link: 'https://code.visualstudio.com/',
            },
            {
              title: 'Cursor AI',
              description: 'IDE com IA',
              image: '/cursor.png',
              link: 'https://cursor.sh/',
            },
            // Design & UI
            {
              title: 'Figma',
              description: 'Design & Prototipação',
              image: '/figma.png',
              link: 'https://www.figma.com/',
            },
            // Frontend
            {
              title: 'React',
              description: 'Framework Frontend',
              image: '/react.png',
              link: 'https://reactjs.org/',
            },
            {
              title: 'Next.js',
              description: 'Framework React',
              image: '/nextjs.png',
              link: 'https://nextjs.org/',
            },
            {
              title: 'TypeScript',
              description: 'Superset JavaScript',
              image: '/typescript.png',
              link: 'https://www.typescriptlang.org/',
            },
            {
              title: 'Tailwind CSS',
              description: 'Framework CSS',
              image: '/tailwindcss.png',
              link: 'https://tailwindcss.com/',
            },
            {
              title: 'Shadcn/UI',
              description: 'Component Library',
              image: '/shadcn.png',
              link: 'https://ui.shadcn.com/',
            },
            {
              title: 'Tamagui',
              description: 'UI Kit Universal',
              image: '/tamagui.png',
              link: 'https://tamagui.dev/',
            },
            {
              title: 'Chakra UI',
              description: 'Component Library',
              image: '/chakraui.png',
              link: 'https://chakra-ui.com/',
            },
            {
              title: 'Styled Components',
              description: 'CSS-in-JS',
              image: '/styledcomponents.png',
              link: 'https://styled-components.com/',
            },
            // Backend
            {
              title: 'Node.js',
              description: 'Runtime JavaScript',
              image: '/nodejs.png',
              link: 'https://nodejs.org/',
            },
            {
              title: 'NestJS',
              description: 'Framework Node.js',
              image: '/nestjs.png',
              link: 'https://nestjs.com/',
            },
            {
              title: 'Fastify',
              description: 'Web Framework',
              image: '/fastify.png',
              link: 'https://www.fastify.io/',
            },
            // Databases
            {
              title: 'PostgreSQL',
              description: 'Banco Relacional',
              image: '/postgresql.png',
              link: 'https://www.postgresql.org/',
            },
            {
              title: 'MongoDB',
              description: 'Banco NoSQL',
              image: '/mongodb.png',
              link: 'https://www.mongodb.com/',
            },
            // DevOps
            {
              title: 'Docker',
              description: 'Containerização',
              image: '/docker.png',
              link: 'https://www.docker.com/',
            },
            {
              title: 'Git',
              description: 'Versionamento',
              image: '/git.png',
              link: 'https://git-scm.com/',
            },
            {
              title: 'GitHub',
              description: 'Plataforma Git',
              image: '/github.png',
              link: 'https://github.com/',
            },
            // Testing
            {
              title: 'Jest',
              description: 'Framework de Testes',
              image: '/jest.png',
              link: 'https://jestjs.io/',
            },
          ].map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
