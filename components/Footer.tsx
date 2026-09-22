"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="relative z-10 flex flex-col items-center gap-4 px-6 pb-16 pt-10 text-center">
      <motion.span
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="text-3xl"
      >
        💛
      </motion.span>
      <p className="font-script text-2xl text-gold-700 sm:text-3xl">
        {siteConfig.footer.message}
      </p>
      <p className="text-xs text-ink-700/50">
        Hecho con cariño para {siteConfig.herName}
      </p>
    </footer>
  );
}
