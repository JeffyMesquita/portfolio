import { ProjectCard } from "./ProjectCard";
import { SectionVariant } from "./SectionVariant";

export function Projects() {
  return (
    <SectionVariant spaceY>
      <div className="w-10/12 mx-auto projects mt-14 max-sm:mt-8 max-md:mt-12">
        <h1
          className="md:text-4xl text-3xl lg:text-5xl font-bold"
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
        <div className="flex flex-wrap gap-7 justify-center mt-10">
          <ProjectCard
            title="Test Frontend - ImobPower"
            shortDescription="Um teste de frontend - ReactJS"
            moreDescription="Este projeto foi desenvolvido para um teste de frontend, onde o objetivo era criar uma aplicação que consumisse uma API e exibisse os dados em uma de Pokémon's, que proporcionou a minha vaga na empresa ImobPower."
            category="web"
            image="/pokedex.png"
            repositoryLink="https://github.com/JeffyMesquita/teste-frontend-imobpower/tree/main/pokedex"
            deployLink="https://teste-frontend-imobpower.vercel.app/"
          />
          <ProjectCard
            title="Test Frontend - Plin"
            shortDescription="Um teste de frontend - ReactJS e NextJS"
            moreDescription="Este projeto foi desenvolvido para um teste de frontend, onde o objetivo era criar uma aplicação que consumisse uma Api de clima, Api pra consulta de CEP e um formulário, Fiz este teste para empresa Plin."
            category="web"
            image="/plin.png"
            repositoryLink="https://github.com/JeffyMesquita/frontend-test"
            deployLink="https://frontend-test.jeffymesquita.dev/weather"
          />
        </div>
      </div>
    </SectionVariant>
  );
}

export default Projects;
