"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function BouquetFlower({ delay, angle, distance, hue }: { delay: number; angle: number; distance: number; hue: string }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * distance;
  const y = Math.sin(rad) * distance;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: angle - 90 }}
      animate={{ x, y, scale: 1, opacity: 1, rotate: angle - 90 }}
      transition={{ delay, type: "spring", stiffness: 140, damping: 12 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
          <g>
            {[0, 72, 144, 216, 288].map((deg) => (
              <ellipse
                key={deg}
                cx="16"
                cy="9"
                rx="5"
                ry="8"
                fill={hue}
                transform={`rotate(${deg} 16 16)`}
              />
            ))}
            <circle cx="16" cy="16" r="3.6" fill="#B87E0B" />
          </g>
        </svg>
      </div>
    </motion.div>
  );
}

export default function BouquetButton() {
  const [open, setOpen] = useState(false);

  const flowers = useMemo(() => {
    const hues = ["#FFDD7A", "#FFCF4D", "#F4AE16", "#FFE9A8"];
    return Array.from({ length: 9 }, (_, i) => {
      const angle = -160 + (i * 140) / 8;
      return {
        id: i,
        angle,
        distance: 70 + (i % 3) * 18,
        delay: 0.15 + i * 0.06,
        hue: hues[i % hues.length],
      };
    });
  }, []);

  return (
    <section className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
      <h2 className="mb-3 text-center font-serif text-3xl font-bold text-ink-800 sm:text-4xl">
        Un ramo, solo para vos
      </h2>
      <p className="mb-10 max-w-md text-center text-ink-700/80">
        Tocá la flor y dejá que florezca un ramo entero de flores amarillas.
      </p>

      <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
        <AnimatePresence>
          {open &&
            flowers.map((f) => (
              <BouquetFlower key={f.id} delay={f.delay} angle={f.angle} distance={f.distance} hue={f.hue} />
            ))}
        </AnimatePresence>

        <motion.button
          type="button"
          aria-label="Abrir ramo de flores"
          onClick={() => setOpen((v) => !v)}
          animate={open ? { scale: 1.05 } : { y: [0, -10, 0] }}
          transition={
            open
              ? { type: "spring", stiffness: 200, damping: 10 }
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
          className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-honey-200 via-honey-300 to-gold-500 text-4xl shadow-lg animate-glow sm:h-28 sm:w-28"
        >
          🌻
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 max-w-sm text-center font-script text-2xl text-gold-600 sm:text-3xl"
          >
            Este ramo floreció solo para vos 💛
          </motion.p>
        )}
      </AnimatePresence>

      {open && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          onClick={() => setOpen(false)}
          className="mt-4 text-sm text-ink-700/60 underline underline-offset-4"
        >
          volver a cerrar
        </motion.button>
      )}
    </section>
  );
}
