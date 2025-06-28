import { motion } from 'framer-motion';
import { SectionVariant } from '../SectionVariant';

interface Experience {
  title: string;
  description: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'devops' | 'architecture';
}

const experiences: Experience[] = [
  {
    title: 'Desenvolvimento Frontend',
    description:
      'Construção de interfaces modernas e responsivas com foco em performance e acessibilidade. Experiência com SSR e otimização de SEO.',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    category: 'frontend',
  },
  {
    title: 'Desenvolvimento Backend',
    description:
      'Desenvolvimento de APIs RESTful e GraphQL, implementação de autenticação e autorização, e integração com bancos de dados.',
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'GraphQL'],
    category: 'backend',
  },
  {
    title: 'DevOps & Infraestrutura',
    description:
      'Conhecimentos básicos em containerização com Docker, versionamento com Git e deploy em plataformas como Vercel. Estou aprendendo sobre CI/CD e práticas de DevOps.',
    technologies: ['Docker', 'Git', 'GitHub Actions', 'Vercel'],
    category: 'devops',
  },
  {
    title: 'Arquitetura de Software',
    description:
      'Estudando conceitos de arquitetura limpa, padrões de projeto e princípios SOLID. Aplicando boas práticas de Clean Code nos projetos que desenvolvo.',
    technologies: [
      'DDD',
      'Clean Architecture',
      'Microservices',
      'Event-Driven',
    ],
    category: 'architecture',
  },
];

const categoryColors: Record<Experience['category'], string> = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-purple-500 to-pink-500',
  devops: 'from-green-500 to-emerald-500',
  architecture: 'from-orange-500 to-red-500',
};

const categoryTitles: Record<Experience['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps & Infraestrutura',
  architecture: 'Arquitetura',
};

export function Skills() {
  return (
    <SectionVariant spaceY>
      <motion.section
        className="mx-auto mt-14 w-10/12 max-md:mt-12 max-sm:mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          id="habilidades"
          className="mb-10 text-3xl font-bold md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experiência & Conhecimentos
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="rounded-lg bg-gray-800/50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <h2 className="mb-4 text-2xl font-semibold">
                {experience.title}
              </h2>
              <p className="mb-6 text-gray-300">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="rounded-full bg-gray-700/50 px-3 py-1 text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </SectionVariant>
  );
}
