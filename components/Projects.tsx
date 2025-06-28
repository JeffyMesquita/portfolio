import { SectionVariant } from './SectionVariant';
import { motion } from 'framer-motion';
import { PersonalProjects } from './Projects/PersonalProjects';
import { LandingPages } from './Projects/LandingPages';
import { TestsAndStudies } from './Projects/TestsAndStudies';

export function Projects() {
  return (
    <SectionVariant spaceY>
      <motion.div
        className="projects mx-auto mt-14 w-10/12 max-md:mt-12 max-sm:mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="mb-16 text-3xl font-bold md:text-4xl lg:text-5xl"
          id="projetos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Projetos
        </motion.h1>

        <PersonalProjects />
        <LandingPages />
        <TestsAndStudies />
      </motion.div>
    </SectionVariant>
  );
}

export default Projects;
