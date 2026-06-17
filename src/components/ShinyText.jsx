'use client';

import { motion } from "motion/react";

export function ShinyText({ children, className = "" }) {
  return (
    <motion.span
      initial={{ "--x": "100%" }}
      animate={{ "--x": "-100%" }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 3,
        ease: "linear",
      }}
      className={`inline-block text-transparent bg-clip-text ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(-75deg, #bda35e calc(var(--x) + 20%), #fff calc(var(--x) + 30%), #bda35e calc(var(--x) + 100%))",
      }}
    >
      {children}
    </motion.span>
  );
}
