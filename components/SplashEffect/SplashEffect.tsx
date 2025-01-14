'use client';

import { motion } from 'framer-motion';

const SplashLayer = ({
  className,
  rotate,
  delay,
}: {
  className: string;
  rotate: number;
  delay: number;
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ rotate: rotate }}
    transition={{ duration: 60, repeat: Infinity, ease: 'linear', delay }}
  />
);

export const SplashEffect = () => {
  return (
    <div className="absolute -left-0 bottom-4 top-[5%] z-[-1] h-[70%] w-[100%]">
      <div className="relative h-full w-full">
        {/* Base layer */}
        <SplashLayer
          className="bottom-0 left-0 right-0 h-3/4 rounded-[70%_30%_50%_50%_/_60%_40%_60%_40%] bg-gradient-to-r from-blue-800 via-sky-600 to-cyan-500"
          rotate={360}
          delay={0}
        />

        {/* Middle layers */}
        <SplashLayer
          className="bottom-1/4 left-1/4 right-1/4 h-2/3 rounded-[40%_60%_60%_40%_/_60%_30%_70%_40%] bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400"
          rotate={-360}
          delay={5}
        />

        <SplashLayer
          className="bottom-1/3 left-1/3 right-1/3 h-1/2 rounded-[50%_50%_40%_60%_/_40%_60%_50%_50%] bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300"
          rotate={360}
          delay={10}
        />

        {/* Additional layers */}
        <SplashLayer
          className="left-1/6 right-1/6 bottom-1/2 h-1/3 rounded-[60%_40%_30%_70%_/_50%_60%_40%_50%] bg-gradient-to-r from-cyan-500 via-blue-400 to-sky-300"
          rotate={-360}
          delay={15}
        />

        <SplashLayer
          className="bottom-2/3 left-1/4 right-1/4 h-1/4 rounded-[70%_30%_50%_50%_/_30%_60%_70%_40%] bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-200"
          rotate={360}
          delay={20}
        />

        {/* Splash droplets */}
        <motion.div
          className="absolute -top-4 left-1/4 h-16 w-16 rounded-[60%_40%_30%_70%_/_50%_60%_40%_50%] bg-gradient-to-r from-blue-400 to-cyan-300"
          animate={{ y: [0, 10, 0], rotate: 360 }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
          }}
        />
        <motion.div
          className="absolute -top-2 right-1/3 h-12 w-12 rounded-[50%_50%_40%_60%_/_40%_60%_50%_50%] bg-gradient-to-r from-sky-500 to-blue-400"
          animate={{ y: [0, 8, 0], rotate: -360 }}
          transition={{
            y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          }}
        />
        <motion.div
          className="absolute right-1/4 top-1/4 h-8 w-8 rounded-[40%_60%_60%_40%_/_60%_30%_70%_40%] bg-gradient-to-r from-cyan-300 to-sky-200"
          animate={{ y: [0, 6, 0], rotate: 360 }}
          transition={{
            y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
          }}
        />
      </div>
    </div>
  );
};
