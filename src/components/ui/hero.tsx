"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-24 md:py-32 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Software Developer
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          I build accessible, pixel-perfect, performant, and pretty web experiences.
        </p>
      </motion.div>
    </section>
  );
}
