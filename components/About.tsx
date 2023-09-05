import { SectionVariant } from "./SectionVariant";

export function About() {
  return (
    <SectionVariant variant spaceY>
      <div className="w-10/12 mx-auto projects mt-14 max-sm:mt-8 max-md:mt-12 about">
        <h1
          id="sobre"
          className="md:text-4xl text-3xl lg:text-5xl font-bold mb-10"
        >
          Sobre mim
        </h1>
        <div>
          <p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl">
            Possuo formação em Sistemas de Informação e uma paixão por
            tecnologia, minha carreira se destacou no Front-end, onde adquiri
            habilidades valiosas em criação de interfaces. Atualmente, estou
            focado em expandir meu conhecimento no Back-end para me tornar um
            Desenvolvedor Full Stack completo. Minha motivação está em criar
            experiências web excepcionais para os usuários, transformando ideias
            em realidade com as melhores práticas e tecnologias de ponta.
            Trabalho com JavaScript/TypeScript, ReactJS/NextJS, React Native e
            NodeJS, além de estar familiarizado com ferramentas como ChakraUI,
            Styled Components, TailwindCss, PostgreSQL e Jest. Minha dedicação
            se reflete não apenas no código, mas também em habilidades
            interpessoais como comunicação, empatia, inteligência emocional e
            colaboração em equipe. Estou animado para abraçar novos projetos,
            desafios e contribuir com meu comprometimento e busca contínua por
            aprendizado.
          </p>
        </div>
      </div>
    </SectionVariant>
  );
}
