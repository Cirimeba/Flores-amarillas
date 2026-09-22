"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function LetterCard() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative z-10 flex flex-col items-center px-6 py-20">
      <h2 className="mb-3 text-center font-serif text-3xl font-bold text-ink-800 sm:text-4xl">
        {siteConfig.letter.heading}
      </h2>
      <p className="mb-10 max-w-md text-center text-ink-700/80">
        Una carta escrita con todo mi cariño para {siteConfig.herName}.
      </p>

      <div className="w-full max-w-xl">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="envelope"
              type="button"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5 }}
              className="group relative mx-auto flex aspect-[3/2] w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-2xl border border-gold-400/40 bg-gradient-to-br from-honey-100 via-cream-200 to-blush-100 shadow-xl"
              aria-label="Abrir la carta"
            >
              <div className="absolute inset-x-0 top-0 h-1/2 origin-top border-b border-gold-500/30 bg-gradient-to-b from-honey-300/70 to-transparent [clip-path:polygon(0_0,50%_65%,100%_0)]" />
              <span className="z-10 text-5xl transition-transform group-hover:scale-110">💌</span>
              <span className="z-10 mt-4 font-script text-2xl text-gold-700">
                Toca para abrir
              </span>
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 24, rotateX: -8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6 }}
              className="card-elegant mx-auto rounded-2xl p-6 shadow-xl sm:p-10"
            >
              <p className="mb-6 text-right font-script text-2xl text-gold-600">
                Para {siteConfig.herName} 💛
              </p>
              <div className="space-y-4 font-sans text-base leading-relaxed text-ink-800 sm:text-lg">
                {siteConfig.letter.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-right font-script text-2xl text-gold-700"
              >
                {siteConfig.letter.signature} - {siteConfig.myName} 🌼
              </motion.p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-6 text-sm text-ink-700/50 underline underline-offset-4"
              >
                cerrar la carta
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
