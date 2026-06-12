"use client";

import { motion } from "framer-motion";

export default function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  hover = false,
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      whileHover={hover ? { y: -7, scale: 1.01 } : undefined}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
