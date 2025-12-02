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
              className="relative rounded-lg bg-gray-800/50 p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="absolute -left-2 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 sm:-left-3 sm:top-6 sm:h-6 sm:w-6">
                <FaBriefcase className="text-xs text-white sm:text-sm" />
              </div>
              <div className="ml-3 sm:ml-4">
                <h2 className="mb-2 text-base font-semibold text-blue-400 sm:text-lg md:text-xl">
                  {experience.title}
                </h2>
                <h3 className="mb-2 text-sm font-medium sm:text-base md:text-lg">
                  {experience.company}
                  {experience.location && ` – ${experience.location}`}
                </h3>
                <span className="mb-3 block text-xs text-gray-400 sm:mb-4 sm:text-sm">
                  {experience.period}
                </span>
                <p className="mb-3 text-sm text-gray-300 sm:mb-4 sm:text-base">
                  {experience.description}
                </p>
                <ul className="list-inside space-y-1.5 sm:space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-xs text-gray-300 sm:text-sm">
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

