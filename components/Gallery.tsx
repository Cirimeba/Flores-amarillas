"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function Gallery() {
  return (
    <section className="relative z-10 flex flex-col items-center px-6 py-20">
      <h2 className="mb-2 text-center font-serif text-3xl font-bold text-ink-800 sm:text-4xl">
        {siteConfig.gallery.heading}
      </h2>
      <p className="mb-10 max-w-md text-center text-ink-700/80">
        {siteConfig.gallery.subheading}
      </p>

      <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {siteConfig.gallery.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.55 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="card-elegant flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center shadow-md"
          >
            <span className="text-4xl sm:text-5xl">{item.emoji}</span>
            <p className="text-sm font-medium text-ink-700 sm:text-base">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 max-w-md text-center text-xs text-ink-700/50">
        Tip: reemplaza estos íconos por tus fotos favoritas en{" "}
        <code className="rounded bg-honey-100 px-1 py-0.5">lib/site-config.ts</code>{" "}
        y <code className="rounded bg-honey-100 px-1 py-0.5">components/Gallery.tsx</code>.
      </p>
    </section>
  );
}
