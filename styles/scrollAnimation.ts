import { type Variants } from "framer-motion";

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const fadeInTop: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const fadeInBottom: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeIn" },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};

const rotateIn: Variants = {
  hidden: { opacity: 0.2, scale: 1.1, rotateX: 180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

// Explosão de Partículas
const particleExplosion: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: 0 },
  visible: {
    opacity: 1,
    scale: [0.5, 1.2, 1],
    rotate: [0, 180, 360],
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      times: [0, 0.6, 1],
    },
  },
};

// Ondulação Líquida
const liquidRipple: Variants = {
  hidden: { scale: 0, borderRadius: "50%" },
  visible: {
    scale: 1,
    borderRadius: ["50%", "40%", "30%", "20%", "10%", "0%"],
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

// Aparição Glitch
const glitchAppear: Variants = {
  hidden: { opacity: 0, x: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: [-10, 10, -5, 5, 0],
    filter: ["blur(10px)", "blur(0px)"],
    transition: {
      duration: 0.5,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ease: "easeInOut",
    },
  },
};

// Dobra Espacial
const spaceFold: Variants = {
  hidden: { opacity: 0, rotateY: 90, scale: 0.5 },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

// Esticar Elástico
const elasticStretch: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

// Queda com Quique
const bouncefall: Variants = {
  hidden: { y: -1000, opacity: 0, rotate: -720, scale: 0 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      bounce: 0.6,
      type: "spring",
    },
  },
};

// Aparição em Espiral
const spiralIn: Variants = {
  hidden: { scale: 0, rotate: 720, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

// Desintegração
const disintegrate: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    filter: ["blur(0px)", "blur(20px)"],
    x: [0, 100, -100, 50, -50, 0],
    y: [0, -100, 100, -50, 50, 0],
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

// Aparição em Camadas
const layeredAppear: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Rotação 3D
const rotate3D: Variants = {
  hidden: { opacity: 0, rotateX: 180, rotateY: 180, rotateZ: 180 },
  visible: {
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    transition: {
      duration: 1.5,
      ease: "backOut",
    },
  },
};

// Efeito Matrix
const matrixEffect: Variants = {
  hidden: { opacity: 0, scale: 0, rotateY: 90 },
  visible: {
    opacity: 1,
    scale: [0, 1.2, 1],
    rotateY: [90, -10, 0],
    filter: ["blur(10px)", "blur(0px)"],
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.6, 1],
    },
  },
};

// Aparição com Sombra
const shadowReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "drop-shadow(10px 10px 20px rgba(0,0,0,0.5))",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

// Efeito Neon Pulsante
const neonPulse: Variants = {
  hidden: { opacity: 0, filter: "brightness(1) blur(5px)" },
  visible: {
    opacity: [0, 1, 0.5, 1],
    filter: [
      "brightness(1) blur(5px)",
      "brightness(1.5) blur(0px)",
      "brightness(1) blur(3px)",
      "brightness(1.2) blur(0px)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const scrollAnimations = {
  fadeInRight,
  fadeInTop,
  fadeInBottom,
  scaleIn,
  fadeInLeft,
  rotateIn,
  particleExplosion,
  liquidRipple,
  glitchAppear,
  spaceFold,
  elasticStretch,
  bouncefall,
  spiralIn,
  disintegrate,
  layeredAppear,
  rotate3D,
  matrixEffect,
  shadowReveal,
  neonPulse,
};
