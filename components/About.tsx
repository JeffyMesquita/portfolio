import { SectionVariant } from './SectionVariant';

export function About() {
  return (
    <SectionVariant variant spaceY>
      <div className="projects about mx-auto mt-14 w-10/12 max-md:mt-12 max-sm:mt-8">
        <h1
          id="sobre"
          className="mb-10 text-3xl font-bold md:text-4xl lg:text-5xl"
        >
          Sobre mim
        </h1>
        <div>
          <p className="text-balance text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl">
            Sou formado em Sistemas de Informação e recentemente concluí uma
            pós-graduação em Engenharia de Software, o que fortaleceu ainda mais
            minha base técnica e visão estratégica no desenvolvimento de
            soluções. Minha trajetória profissional tem sido marcada pela
            atuação no Front-end, onde adquiri vasta experiência na criação de
            interfaces intuitivas e eficientes. Atualmente, tenho focado em
            ampliar meu domínio no Back-end, com o objetivo de me consolidar
            como um Desenvolvedor Full Stack completo. Tenho trabalhado
            principalmente com Next.js, TypeScript, TailwindCSS, Tanstack Query
            e outras tecnologias modernas que me permitem entregar aplicações
            robustas e de alta performance. Também sou proficiente em
            ferramentas como Chakra UI, Styled Components, PostgreSQL e Jest,
            garantindo um workflow fluido e alinhado às melhores práticas do
            mercado.
          </p>
        </div>
      </div>
    </SectionVariant>
  );
}
