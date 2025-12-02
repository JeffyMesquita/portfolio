import { motion } from 'framer-motion';
import { SectionVariant } from '../SectionVariant';
import { FaBriefcase } from 'react-icons/fa';
import { PROFESSIONAL_EXPERIENCES } from '@/constants/professional-experience';

export function ProfessionalExperience() {
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
          id="experiencias"
          className="mb-10 text-3xl font-bold md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experiências Profissionais
        </motion.h1>

        <div className="space-y-8">
          {PROFESSIONAL_EXPERIENCES.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.period}`}
              className="relative rounded-lg bg-gray-800/50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                <FaBriefcase className="text-white" />
              </div>
              <div className="ml-4">
                <h2 className="mb-2 text-xl font-semibold text-blue-400">
                  {experience.title}
                </h2>
                <h3 className="mb-2 text-lg font-medium">
                  {experience.company}
                  {experience.location && ` – ${experience.location}`}
                </h3>
                <span className="mb-4 block text-sm text-gray-400">
                  {experience.period}
                </span>
                <p className="mb-4 text-gray-300">{experience.description}</p>
                <ul className="list-inside space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-300">
                      <span className="text-blue-400">•</span> {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </SectionVariant>
  );
}

