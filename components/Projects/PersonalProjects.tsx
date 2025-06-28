import { motion } from 'framer-motion';
import { ProjectCard } from '../ProjectCard';
import { PERSONAL_PROJECTS } from '@/constants/projects/personal-projects';

export function PersonalProjects() {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Projetos Pessoais
      </motion.h2>
      <motion.p
        className="mb-10 text-neutral-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Projetos desenvolvidos por iniciativa própria, explorando novas
        tecnologias e solucionando problemas do dia a dia.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-7">
        {PERSONAL_PROJECTS.map((project, index) => {
          const side =
            index === 0 ? '@LEFT' : index % 2 === 0 ? '@LEFT' : '@RIGHT';
          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: side === '@LEFT' ? -100 : 100,
                rotateX: 20,
                rotateZ: side === '@LEFT' ? 20 : -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotateX: 0,
                rotateZ: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ProjectCard
                title={project.title}
                side={side}
                shortDescription={project.subtitle}
                moreDescription={project.description}
                category={project.stack}
                image={project.image}
                repositoryType={project.repository.type}
                repositoryLink={
                  project.repository.type === '@PUBLIC'
                    ? project.repository.link
                    : null
                }
                deployLink={project.deploy}
                tags={project.tags}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
