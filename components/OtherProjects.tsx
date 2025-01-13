import { ProjectCard } from './ProjectCard';
import { SectionVariant } from './SectionVariant';
import { OTHERS_PROJECTS } from '@/constants/projects';

function OtherProjects() {
  return (
    <SectionVariant spaceY>
      <div className="projects mx-auto mt-14 w-10/12 max-md:mt-12 max-sm:mt-8">
        <h1
          className="text-3xl font-bold md:text-4xl lg:text-5xl"
          id="projetos"
        >
          Outros Projetos(Testes e/ou Estudos)
        </h1>
        <p className="pt-6 text-neutral-300">
          Aqui estão alguns projetos que desenvolvi para testar ou estudar
          tecnologias e conceitos. Gostaria de apresentar a vocês alguns desses
          projetos, para demonstrar meu trabalho e conquistas na área de design
          e desenvolvimento web.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-7">
          {OTHERS_PROJECTS.map((project, index) => {
            const side =
              index === 0 ? '@LEFT' : index % 2 === 0 ? '@LEFT' : '@RIGHT';
            return (
              <ProjectCard
                key={index}
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
            );
          })}
        </div>
      </div>
    </SectionVariant>
  );
}

export { OtherProjects };
