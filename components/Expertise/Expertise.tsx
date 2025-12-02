'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { SectionVariant } from '../SectionVariant';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface ExpertiseItem {
  title: string;
  description: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: 'Desenvolvimento Frontend Multiframework',
    description:
      'Sólida experiência com ReactJS e NextJS, focada na construção de interfaces responsivas e intuitivas. Experiência em projetos pontuais com Vue.js e na migração de sistemas legados.',
  },
  {
    title: 'Desenvolvimento Mobile',
    description:
      'Experiência em React Native e Expo, incluindo o ciclo completo de release e deployment (versionamento e subida para stores).',
  },
  {
    title: 'Qualidade e Performance',
    description:
      'Proficiência em TypeScript e participação ativa em Code Review, garantindo a aplicação de melhores práticas (como SOLID e design patterns). Forte foco na otimização de desempenho e UX das aplicações.',
  },
  {
    title: 'Integração e Infraestrutura',
    description:
      'Habilidade em integração de APIs, contribuição com o Backend em Node.js, e uso de Docker para otimização de ambientes de desenvolvimento e garantia de consistência.',
  },
  {
    title: 'Metodologia e Colaboração',
    description:
      'Experiência em adaptação rápida a novas tecnologias, colaboração com equipes multidisciplinares em sprints ágeis, e compromisso com o aprendizado contínuo.',
  },
];

export function Expertise() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionVariant spaceY>
      <motion.section
        className="mx-auto mt-14 w-10/12 max-md:mt-12 max-sm:mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          id="expertise"
          className="mb-10 text-3xl font-bold md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Expertise
        </motion.h1>

        <div className="space-y-4">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="overflow-hidden rounded-lg bg-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-gray-800/70 sm:p-6"
              >
                <h2 className="flex-1 text-base font-semibold text-blue-400 sm:text-lg md:text-xl lg:text-2xl">
                  {item.title}
                </h2>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FaChevronDown className="text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                      <p className="text-sm text-gray-300 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </SectionVariant>
  );
}

