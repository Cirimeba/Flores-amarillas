"use client";

import { motion } from "framer-motion";
import LoveCounter from "./LoveCounter";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pb-16 pt-24 text-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-4 text-5xl"
      >
        🌼
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="max-w-3xl text-shimmer font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
      >
        {siteConfig.hero.title} {siteConfig.hero.emoji}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="mt-6 max-w-xl text-balance font-sans text-base leading-relaxed text-ink-700 sm:text-lg"
      >
        {siteConfig.hero.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="mt-10 w-full"
      >
        <p className="mb-4 font-script text-2xl text-gold-600 sm:text-3xl">
          Llevamos juntos...
        </p>
        <LoveCounter startDate={siteConfig.startDate} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 text-honey-600/80"
      >
        <span className="text-sm">Desliza para seguir ↓</span>
      </motion.div>
    </section>
  );
}
