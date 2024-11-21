'use client';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { ArrowUpFromDot } from 'lucide-react';

export function ScrollToTop() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  function handleScroll() {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <>
      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, rotate: 270, scale: 0.5, x: 100 }}
          animate={{
            opacity: 1,
            rotate: 0,
            scale: 1,
            x: 0,
            transition: { duration: 0.5 },
          }}
          exit={{
            opacity: 0,
            rotate: 270,
            scale: 0.5,
            x: 100,
            transition: { duration: 0.5 },
          }}
          className="fixed bottom-6 right-6 rounded-full border-2 border-blue-950 bg-blue-800 p-2 text-white shadow shadow-white/80 transition duration-300 hover:bg-blue-300 hover:text-blue-800"
          onClick={scrollToTop}
        >
          <ArrowUpFromDot
            size={24}
            className="animate-bounce"
            strokeWidth={3}
          />
        </motion.button>
      )}
    </>
  );
}
