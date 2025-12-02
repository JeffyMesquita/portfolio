'use client';
import { ToolCard } from '@/components/ToolCard';
import { SectionVariant } from './SectionVariant';
import { motion } from 'framer-motion';
import { TOOLS } from '@/constants/tools';

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
          {TOOLS.map((tool, index) => (
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
