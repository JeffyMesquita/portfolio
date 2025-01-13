import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '../../hooks/useInView';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  origin?: 'left' | 'right' | 'top';
  rotate?: { x: number; z: number };
}

export function AnimatedElement({
  children,
  className,
  origin = 'left',
  rotate,
}: AnimatedElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: {
      opacity: 0,
      x: origin === 'left' ? -100 : origin === 'right' ? 100 : 0,
      y: origin === 'top' ? -250 : 0,
      rotateX: rotate?.x || 0,
      rotateZ: rotate?.z || 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateZ: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: 1.75,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1], // equivalente ao 'ease-in-out'
      }}
    >
      {children}
    </motion.div>
  );
}
