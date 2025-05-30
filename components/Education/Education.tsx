import { motion } from 'framer-motion';
import { SectionVariant } from '../SectionVariant';
import { FaGraduationCap } from 'react-icons/fa';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const education: Education[] = [
  {
    degree: 'Pós-graduação em Engenharia de Software',
    institution: 'Faculdade Anhanguera',
    period: '2023 - 2024',
    description:
      'Especialização focada em práticas modernas de desenvolvimento de software, arquitetura de sistemas e metodologias ágeis.',
  },
  {
    degree: 'Bacharelado em Sistemas de Informação',
    institution: 'Centro Universitário Unifafibe',
    period: '2015 - 2018',
    description:
      'Formação completa em desenvolvimento de sistemas, banco de dados, redes e gestão de projetos de TI.',
  },
];

export function Education() {
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
          id="educacao"
          className="mb-10 text-3xl font-bold md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Formação Acadêmica
        </motion.h1>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="relative rounded-lg bg-gray-800/50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                <FaGraduationCap className="text-white" />
              </div>
              <div className="ml-4">
                <h2 className="mb-2 text-xl font-semibold text-blue-400">
                  {edu.degree}
                </h2>
                <h3 className="mb-2 text-lg font-medium">{edu.institution}</h3>
                <span className="mb-4 block text-sm text-gray-400">
                  {edu.period}
                </span>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </SectionVariant>
  );
}
