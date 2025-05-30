import { motion } from 'framer-motion';
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
  { Icon: SiNestjs, color: '#E0234E' },
  { Icon: SiMongodb, color: '#47A248' },
  { Icon: SiPrisma, color: '#2D3748' },
  { Icon: SiGraphql, color: '#E10098' },
  { Icon: SiApollographql, color: '#311C87' },

  // Cloud & DevOps
  { Icon: SiDocker, color: '#2496ED' },
  { Icon: SiFirebase, color: '#FFCA28' },
  { Icon: SiVercel, color: '#000000' },
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

export function TechParticles() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Core Stack Particles (sempre presentes) */}
      {coreStack.map((tech, i) => (
        <motion.div
          key={`core-${i}`}
          className="absolute"
          style={{
            left: `${(i * 100) / coreStack.length}%`,
            top: `${Math.random() * 50}%`,
            opacity: 0.8,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        >
          <tech.Icon
            size={tech.size}
            style={{
              color: tech.color,
              filter: 'drop-shadow(0 0 12px rgba(0,0,0,0.4))',
            }}
          />
        </motion.div>
      ))}

      {/* Outras partículas aleatórias */}
      {[...Array(34)].map((_, i) => {
        const randomIcon =
          otherTechIcons[Math.floor(Math.random() * otherTechIcons.length)];
        const size = Math.floor(Math.random() * (28 - 16) + 16);
        const opacity = Math.random() * (0.6 - 0.3) + 0.3;

        return (
          <motion.div
            key={`other-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: opacity,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          >
            <randomIcon.Icon
              size={size}
              style={{
                color: randomIcon.color,
                filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.3))',
              }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
