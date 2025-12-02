export interface ProfessionalExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export const PROFESSIONAL_EXPERIENCES: ProfessionalExperience[] = [
  {
    title: 'Frontend Engineer',
    company: 'HeroSpark',
    location: 'Curitiba',
    period: 'Fev/2025 – Nov/2025',
    description:
      'Desenvolvimento e manutenção de plataformas e produtos digitais no ecossistema da HeroSpark, com foco em Soluções de alta performance para a área de Educação e vendas online.',
    responsibilities: [
      'Implementações de novas funcionalidades e manutenção de aplicações web utilizando ReactJS e sistemas mobile com React Native e Expo.',
      'Contribuição com a evolução tecnológica, atuando em projetos pontuais com Vue.js e auxiliando na migração de sistemas legados.',
      'Responsável pelo processo de release e deployment, incluindo o versionamento e subida de novas versões dos aplicativos para as stores.',
      'Uso de Docker para otimização de ambientes de desenvolvimento, garantindo consistência e agilidade na entrega de features.',
      'Participação ativa em Code Review, garantindo a qualidade, a performance e a aplicação das melhores práticas de desenvolvimento (SOLID, patterns).',
      'Foco na melhoria contínua da experiência do usuário(UX) e na otimização do desempenho(performance) das aplicações front-end.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'PlinTech',
    location: 'DF',
    period: 'Set/2023 – Fev/2025',
    description:
      'Desenvolvimento e manutenção de plataformas digitais para o setor de entretenimento, incluindo interfaces e funcionalidades backend para otimização de operações de clientes.',
    responsibilities: [
      'Implementação de funcionalidades e melhorias em sistemas ReactJS e NextJS com integração a APIs de terceiros.',
      'Participação em sprints ágeis para desenvolvimento colaborativo e solução de problemas técnicos.',
      'Foco na melhoria de desempenho e na experiência do usuário em aplicativos web.',
      'Contribuição com o backend em Node.js e TypeScript para funcionalidades diversas e serviços de integração.',
    ],
  },
  {
    title: 'Desenvolvedor Junior',
    company: 'Imobpower',
    location: '',
    period: 'Out/2021 – Jul/2023',
    description:
      'Desenvolvimento de interfaces de usuário responsivas com foco em tecnologias como JavaScript, TypeScript e ReactJS.',
    responsibilities: [
      'Implementação de projetos significativos em equipe, aprimorando interfaces e desenvolvendo soluções backend.',
      'Aprimoramento contínuo com novas tecnologias como React Native e Node.js.',
      'Apoio às atividades de desenvolvimento, contribuindo para um ambiente de trabalho colaborativo.',
    ],
  },
];

