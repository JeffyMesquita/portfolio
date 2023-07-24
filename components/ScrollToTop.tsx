"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import { ArrowUpFromDot } from "lucide-react";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
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
          className="fixed bottom-4 right-4 p-2 rounded-full bg-blue-800 text-white border-2 border-blue-950 hover:bg-blue-300 hover:text-blue-800 transition duration-300 shadow shadow-white/80"
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
