import { ProjectCard } from './ProjectCard';
import { SectionVariant } from './SectionVariant';
import { OTHERS_PROJECTS } from '@/constants/projects';
import { motion } from 'framer-motion';

function OtherProjects() {
  return (
    <SectionVariant spaceY>
      <motion.div 
        className="projects mx-auto mt-14 w-10/12 max-md:mt-12 max-sm:mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold md:text-4xl lg:text-5xl"
          id="projetos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Outros Projetos(Testes e/ou Estudos)
        </motion.h2>
        <motion.p 
          className="pt-6 text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Aqui estão alguns projetos que desenvolvi para testar ou estudar
          tecnologias e conceitos. Gostaria de apresentar a vocês alguns desses
          projetos, para demonstrar meu trabalho e conquistas na área de design
          e desenvolvimento web.
        </motion.p>
        <div className="mt-10 flex flex-wrap justify-center gap-7">
          {OTHERS_PROJECTS.map((project, index) => {
            const side = index === 0 ? '@LEFT' : index % 2 === 0 ? '@LEFT' : '@RIGHT';
            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: side === '@LEFT' ? -100 : 100,
                  rotateX: 20,
                  rotateZ: side === '@LEFT' ? 20 : -20
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  rotateX: 0,
                  rotateZ: 0
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1 
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
              />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionVariant>
  );
}

export { OtherProjects };
