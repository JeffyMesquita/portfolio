'use client';

import { motion } from 'framer-motion';
import { useMemo, useEffect, useState } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiMongodb,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiJest,
  SiVuedotjs,
  SiAngular,
  SiRedux,
  SiGraphql,
  SiApollographql,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiChakraui,
  SiStyledcomponents,
  SiSass,
  SiLess,
  SiWebpack,
  SiVite,
  SiEslint,
  SiPrettier,
  SiJira,
  SiTrello,
  SiSlack,
  SiVisualstudiocode,
  SiInsomnia,
  SiPostman,
} from 'react-icons/si';

// Core stack technologies (sempre presentes)
const coreStack = [
  { Icon: SiTypescript, color: '#3178C6', size: 32 },
  { Icon: SiReact, color: '#61DAFB', size: 32 },
  { Icon: SiNextdotjs, color: '#000000', size: 32 },
  { Icon: SiNodedotjs, color: '#339933', size: 32 },
  { Icon: SiNestjs, color: '#E0234E', size: 32 },
  { Icon: SiTailwindcss, color: '#06B6D4', size: 32 },
  { Icon: SiPostgresql, color: '#4169E1', size: 32 },
  { Icon: SiDocker, color: '#2496ED', size: 32 },
  { Icon: SiFirebase, color: '#FFCA28', size: 32 },
  { Icon: SiVercel, color: '#000000', size: 32 },
];

// Outras tecnologias (aleatórias)
const otherTechIcons = [
  // Frontend
  { Icon: SiJavascript, color: '#F7DF1E' },
  { Icon: SiVuedotjs, color: '#4FC08D' },
  { Icon: SiAngular, color: '#DD0031' },
  { Icon: SiRedux, color: '#764ABC' },
  { Icon: SiChakraui, color: '#319795' },
  { Icon: SiStyledcomponents, color: '#DB7093' },
  { Icon: SiSass, color: '#CC6699' },
  { Icon: SiLess, color: '#1D365D' },

  // Backend
  { Icon: SiExpress, color: '#000000' },
  { Icon: SiMongodb, color: '#47A248' },
  { Icon: SiPrisma, color: '#2D3748' },
  { Icon: SiGraphql, color: '#E10098' },
  { Icon: SiApollographql, color: '#311C87' },

  // Cloud & DevOps
  { Icon: SiNetlify, color: '#00C7B7' },
  { Icon: SiHeroku, color: '#430098' },

  // Tools & Utilities
  { Icon: SiGit, color: '#F05032' },
  { Icon: SiGithub, color: '#181717' },
  { Icon: SiWebpack, color: '#8DD6F9' },
  { Icon: SiVite, color: '#646CFF' },
  { Icon: SiJest, color: '#C21325' },
  { Icon: SiEslint, color: '#4B32C3' },
  { Icon: SiPrettier, color: '#F7B93E' },
  { Icon: SiJira, color: '#0052CC' },
  { Icon: SiTrello, color: '#0052CC' },
  { Icon: SiSlack, color: '#4A154B' },
  { Icon: SiVisualstudiocode, color: '#007ACC' },
  { Icon: SiInsomnia, color: '#4000BF' },
  { Icon: SiPostman, color: '#FF6C37' },
];

interface ParticleConfig {
  id: string;
  Icon: typeof SiTypescript;
  color: string;
  size: number;
  left: number;
  top: number;
  opacity: number;
  duration: number;
  delay: number;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}

export function TechParticles() {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  // Fixar configurações de partículas com useMemo para evitar recálculos
  // Gerar conjunto fixo de partículas com IDs únicos e estáveis
  const coreParticles = useMemo<ParticleConfig[]>(() => {
    return coreStack.map((tech, i) => ({
      id: `core-${i}-${tech.color}`,
      Icon: tech.Icon,
      color: tech.color,
      size: tech.size,
      left: (i * 100) / coreStack.length,
      top: Math.random() * 50,
      opacity: 0.8,
      duration: 3 + Math.random() * 2,
      delay: i * 0.2,
    }));
  }, []);

  // Gerar conjunto fixo de 34 partículas com IDs únicos e estáveis
  // Renderizar apenas as primeiras N baseado em isMobile
  const allOtherParticles = useMemo<ParticleConfig[]>(() => {
    // Usar um seed fixo para garantir que as partículas sejam sempre as mesmas
    const seed = 12345;
    const seededRandom = (index: number) => {
      const x = Math.sin((seed + index) * 12.9898) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 34 }, (_, i) => {
      const randomValue = seededRandom(i);
      const iconIndex = Math.floor(randomValue * otherTechIcons.length);
      const randomIcon = otherTechIcons[iconIndex];

      // Gerar ID único baseado nas propriedades da partícula
      const size = Math.floor(seededRandom(i + 100) * (28 - 16) + 16);
      const left = seededRandom(i + 200) * 100;
      const top = seededRandom(i + 300) * 100;
      const opacity = seededRandom(i + 400) * (0.6 - 0.3) + 0.3;
      const duration = 3 + seededRandom(i + 500) * 2;

      return {
        id: `other-${i}-${randomIcon.color}-${size}-${Math.floor(left)}-${Math.floor(top)}`,
        Icon: randomIcon.Icon,
        color: randomIcon.color,
        size,
        left,
        top,
        opacity,
        duration,
        delay: i * 0.2,
      };
    });
  }, []);

  // Filtrar partículas baseado em isMobile, mas manter IDs estáveis
  const otherParticles = useMemo(() => {
    const particleCount = isMobile ? 15 : 34;
    return allOtherParticles.slice(0, particleCount);
  }, [isMobile, allOtherParticles]);

  // Animações simplificadas para mobile
  const getAnimationProps = (particle: ParticleConfig) => {
    if (reducedMotion) {
      return {
        animate: { opacity: particle.opacity },
        transition: { duration: 0.5 },
      };
    }

    if (isMobile) {
      // Mobile: apenas movimento vertical suave, sem rotação
      return {
        animate: {
          y: [0, -20, 0],
          opacity: particle.opacity,
        },
        transition: {
          duration: particle.duration,
          repeat: Infinity,
          delay: particle.delay,
          ease: 'easeInOut',
        },
      };
    }

    // Desktop: animação completa
    return {
      animate: {
        y: [0, -30, 0],
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      },
      transition: {
        duration: particle.duration,
        repeat: Infinity,
        delay: particle.delay,
        ease: 'easeInOut',
      },
    };
  };

  const getFilterStyle = () => {
    if (isMobile || reducedMotion) {
      return {}; // Sem filtros no mobile para melhor performance
    }
    return {
      filter: 'drop-shadow(0 0 12px rgba(0,0,0,0.4))',
    };
  };

  const getOtherFilterStyle = () => {
    if (isMobile || reducedMotion) {
      return {};
    }
    return {
      filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.3))',
    };
  };

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ willChange: 'transform' }}
    >
      {/* Core Stack Particles */}
      {coreParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            willChange: 'transform',
          }}
          {...getAnimationProps(particle)}
        >
          <particle.Icon
            size={particle.size}
            style={{
              color: particle.color,
              ...getFilterStyle(),
            }}
          />
        </motion.div>
      ))}

      {/* Outras partículas */}
      {otherParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            willChange: 'transform',
          }}
          {...getAnimationProps(particle)}
        >
          <particle.Icon
            size={particle.size}
            style={{
              color: particle.color,
              ...getOtherFilterStyle(),
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
