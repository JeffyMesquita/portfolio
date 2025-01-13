'use client';

import { motion, type Variant } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

type AnimationOrigin = 'left' | 'right' | 'top';
type RotateConfig = { x: number; z: number } | null;

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  origin?: AnimationOrigin;
  rotate?: RotateConfig;
  delay?: number;
}

const getInitialPosition = (
  origin: AnimationOrigin,
  distance: number = 100,
) => {
  switch (origin) {
    case 'left':
      return { x: -distance, y: 0 };
    case 'right':
      return { x: distance, y: 0 };
    case 'top':
      return { x: 0, y: -distance };
    default:
      return { x: 0, y: 0 };
  }
};

export function AnimatedSection({
  children,
  className,
  origin = 'left',
  rotate = null,
  delay = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const initial: Variant = {
    opacity: 0,
    ...getInitialPosition(origin, origin === 'top' ? 250 : 100),
    ...(rotate && { rotateX: rotate.x, rotateZ: rotate.z }),
  };

  const animate: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    rotateX: 0,
    rotateZ: 0,
    transition: {
      duration: 1.75,
      delay,
      ease: [0.25, 0.1, 0.25, 1], // equivalente ao ease-in-out do ScrollReveal
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial as any}
      animate={isInView ? (animate as any) : (initial as any)}
    >
      {children}
    </motion.div>
  );
}
