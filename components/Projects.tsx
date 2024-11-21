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
          {/* <ProjectCard
            className="projects-1"
            title="Test Frontend - ImobPower"
            shortDescription="Um teste de frontend - ReactJS"
            moreDescription="Este projeto foi desenvolvido para um teste de frontend, onde o objetivo era criar uma aplicação que consumisse uma API e exibisse os dados em uma de Pokémon's, que proporcionou a minha vaga na empresa ImobPower."
            category="web"
            image="/pokedex.png"
            repositoryLink="https://github.com/JeffyMesquita/teste-frontend-imobpower/tree/main/pokedex"
            deployLink="https://teste-frontend-imobpower.vercel.app/"
          />
          <ProjectCard
            className="projects-2"
            title="Test Frontend - Plin"
            shortDescription="Um teste de frontend - ReactJS e NextJS"
            moreDescription="Este projeto foi desenvolvido para um teste de frontend, onde o objetivo era criar uma aplicação que consumisse uma Api de clima, Api pra consulta de CEP e um formulário, Fiz este teste para empresa Plin."
            category="web"
            image="/plin.png"
            repositoryLink="https://github.com/JeffyMesquita/frontend-test"
            deployLink="https://frontend-test.jeffymesquita.dev/weather"
          /> */}
        </div>
      </div>
    </SectionVariant>
  );
}

export default Projects;
