'use client';

import ServiceCard from '@/components/ServiceCard';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpo, SiNestjs, SiTypescript, SiJavascript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SectionVariant } from './SectionVariant';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface ServiceInfo {
  title: string;
  icon: IconType;
  iconColor: string;
  shortDescription: string;
  description: string;
  linkHref: string;
  linkText: string;
  effectColor: string;
}

const services: ServiceInfo[] = [
  {
    title: 'ReactJs',
    icon: FaReact,
    iconColor: 'text-sky-600',
    shortDescription: 'Desenvolvimento Web',
    description: 'utilizando a biblioteca ReactJs.',
    linkHref: 'https://pt-br.reactjs.org/',
    linkText: 'Saiba mais',
    effectColor: 'bg-sky-600',
  },
  {
    title: 'NextJs',
    icon: TbBrandNextjs,
    iconColor: 'text-zinc-600',
    shortDescription: 'Desenvolvimento Web',
    description: 'utilizando o framework NextJs.',
    linkHref: 'https://nextjs.org/',
    linkText: 'Saiba mais',
    effectColor: 'bg-zinc-600',
  },
  {
    title: 'Typescript',
    icon: SiTypescript,
    iconColor: 'text-blue-400',
    shortDescription: 'Typescript',
    description: 'utilizando a linguagem Typescript.',
    linkHref: 'https://www.typescriptlang.org/',
    linkText: 'Saiba mais',
    effectColor: 'bg-blue-400',
  },
  {
    title: 'Javascript',
    icon: SiJavascript,
    iconColor: 'text-yellow-400',
    shortDescription: 'Javascript',
    description: 'utilizando a linguagem Javascript.',
    linkHref: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    linkText: 'Saiba mais',
    effectColor: 'bg-yellow-400',
  },
  {
    title: 'React Native',
    icon: FaReact,
    iconColor: 'text-teal-400',
    shortDescription: 'Desenvolvimento Mobile',
    description: 'utilizando a biblioteca React Native.',
    linkHref: 'https://reactnative.dev/',
    linkText: 'Saiba mais',
    effectColor: 'bg-teal-400',
  },
  {
    title: 'Expo',
    icon: SiExpo,
    iconColor: 'text-zinc-950',
    shortDescription: 'Desenvolvimento Mobile',
    description: 'utilizando o framework Expo.',
    linkHref: 'https://expo.dev/',
    linkText: 'Saiba mais',
    effectColor: 'bg-zinc-950',
  },
  {
    title: 'NodeJs',
    icon: FaNodeJs,
    iconColor: 'text-green-400',
    shortDescription: 'Desenvolvimento Backend',
    description: 'utilizando o runtime NodeJs.',
    linkHref: 'https://nodejs.org/en/',
    linkText: 'Saiba mais',
    effectColor: 'bg-green-400',
  },
  {
    title: 'NestJs',
    icon: SiNestjs,
    iconColor: 'text-red-400',
    shortDescription: 'Desenvolvimento Backend',
    description: 'utilizando o framework NestJs.',
    linkHref: 'https://nestjs.com/',
    linkText: 'Saiba mais',
    effectColor: 'bg-red-400',
  },
];

export function Services() {
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
          id="servicos"
          className="mb-10 text-3xl font-bold md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Minha Stack
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-7">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ServiceCard
                title={service.title}
                icon={<service.icon size={50} className={service.iconColor} />}
                shortDescription={service.shortDescription}
                description={service.description}
                linkHref={service.linkHref}
                linkText={service.linkText}
                effectColor={service.effectColor}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </SectionVariant>
  );
}
