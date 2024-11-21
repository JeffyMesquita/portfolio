import { PROJECTS } from '@/constants';
import { ProjectCard } from './ProjectCard';
import { SectionVariant } from './SectionVariant';

export function Projects() {
  return (
    <SectionVariant spaceY>
      <div className="projects mx-auto mt-14 w-10/12 max-md:mt-12 max-sm:mt-8">
        <h1
          className="text-3xl font-bold md:text-4xl lg:text-5xl"
          id="projetos"
        >
          Projetos
        </h1>
        <p className="pt-6 text-neutral-300">
          Ao longo dos anos, adquiri experiência no design e desenvolvimento de
          uma variedade de websites, que vão desde landing pages (páginas de
          destino) simples de uma única página até aplicativos multi-página
          complexos. Gostaria de apresentar a vocês alguns desses projetos, para
          demonstrar meu trabalho e conquistas na área de design e
          desenvolvimento web.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-7">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              className={`projects-${index}`}
              title={project.title}
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
          ))}
        </div>
      </div>
    </SectionVariant>
  );
}

export default Projects;
