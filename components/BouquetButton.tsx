"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

type Stem = {
  id: number;
  angle: number;
  height: number;
  size: number;
  hue: string;
  delay: number;
};

function FlowerSvg({ size, hue }: { size: number; hue: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <g>
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="20"
            cy="11"
            rx="6.5"
            ry="10.5"
            fill={hue}
            stroke="#B87E0B"
            strokeOpacity="0.15"
            strokeWidth="0.5"
            transform={`rotate(${deg} 20 20)`}
          />
        ))}
        <circle cx="20" cy="20" r="5.5" fill="#C9820F" />
        <circle cx="20" cy="20" r="5.5" fill="url(#centerDot)" />
      </g>
      <defs>
        <radialGradient id="centerDot" cx="0.35" cy="0.3" r="0.8">
          <stop stopColor="#F6C866" />
          <stop offset="1" stopColor="#B87316" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function BowSvg() {
  return (
    <svg width="72" height="46" viewBox="0 0 72 46" fill="none">
      <path
        d="M36 23C36 23 30 4 14 6C1 8 4 26 18 27C27 27.6 34 24 36 23Z"
        fill="#FFC9B0"
        stroke="#E89A7C"
        strokeWidth="1"
      />
      <path
        d="M36 23C36 23 42 4 58 6C71 8 68 26 54 27C45 27.6 38 24 36 23Z"
        fill="#FFD6C2"
        stroke="#E89A7C"
        strokeWidth="1"
      />
      <path d="M36 23L24 40L31 38.5L36 23Z" fill="#FFC9B0" stroke="#E89A7C" strokeWidth="1" />
      <path d="M36 23L48 40L41 38.5L36 23Z" fill="#FFD6C2" stroke="#E89A7C" strokeWidth="1" />
      <circle cx="36" cy="23" r="5.5" fill="#FFB199" stroke="#E89A7C" strokeWidth="1" />
    </svg>
  );
}

export default function BouquetButton() {
  const [open, setOpen] = useState(false);

  const stems = useMemo<Stem[]>(() => {
    const hues = ["#FFDD7A", "#FFCF4D", "#F4AE16", "#FFE29B"];
    const angles = [-32, -21, -10, 0, 10, 21, 32];
    return angles.map((angle, i) => {
      const centerCloseness = 1 - Math.abs(angle) / 32;
      return {
        id: i,
        angle,
        height: 110 + centerCloseness * 55,
        size: 34 + centerCloseness * 16,
        hue: hues[i % hues.length],
        delay: 0.08 + Math.abs(angle) * 0.006,
      };
    });
  }, []);

  return (
    <section className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
      <h2 className="mb-3 text-center font-serif text-3xl font-bold text-ink-800 sm:text-4xl">
        Un ramo, solo para ti
      </h2>
      <p className="mb-10 max-w-md text-center text-ink-700/80">
        Toca la flor y deja que florezca un ramo entero de flores amarillas.
      </p>

      <div className="relative flex h-[300px] w-[300px] flex-col items-center justify-end sm:h-[340px] sm:w-[360px]">
        {/* Papel de envoltorio */}
        <motion.div
          className="absolute bottom-0 z-0 h-40 w-60 sm:h-44 sm:w-64"
          style={{
            clipPath: "polygon(50% 6%, 96% 100%, 4% 100%)",
            background:
              "linear-gradient(160deg, #FFF6E0 0%, #FFE9A8 45%, #F4AE16 100%)",
            boxShadow: "0 10px 30px rgba(184, 126, 11, 0.25)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
        <div
          className="pointer-events-none absolute bottom-0 z-[1] h-40 w-60 opacity-30 sm:h-44 sm:w-64"
          style={{
            clipPath: "polygon(50% 6%, 96% 100%, 4% 100%)",
            backgroundImage:
              "repeating-linear-gradient(70deg, transparent 0 10px, rgba(184,126,11,0.25) 10px 11px)",
          }}
        />

        {/* Tallos y flores */}
        <div className="relative z-10 mb-6 flex items-end justify-center">
          <AnimatePresence>
            {open &&
              stems.map((s) => (
                <motion.div
                  key={s.id}
                  className="flex flex-col items-center"
                  style={{ transformOrigin: "bottom center", marginLeft: -10, marginRight: -10 }}
                  initial={{ rotate: s.angle, y: 50, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: s.angle, y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 50, opacity: 0, scale: 0.5 }}
                  transition={{ delay: s.delay, type: "spring", stiffness: 130, damping: 13 }}
                >
                  <FlowerSvg size={s.size} hue={s.hue} />
                  <div className="relative">
                    <div
                      className="w-[3px] rounded-full bg-gradient-to-b from-[#9BC26C] to-[#5E7E36]"
                      style={{ height: s.height }}
                    />
                    <div className="absolute left-0 top-[35%] h-2 w-4 -translate-x-3 -rotate-[35deg] rounded-full bg-[#9BC26C]" />
                    <div className="absolute right-0 top-[55%] h-2 w-4 translate-x-3 rotate-[35deg] rounded-full bg-[#86AE55]" />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Moño */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute bottom-6 z-20"
              initial={{ scale: 0, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.55, type: "spring", stiffness: 220, damping: 12 }}
            >
              <BowSvg />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón para abrir */}
        <AnimatePresence>
          {!open && (
            <motion.button
              type="button"
              aria-label="Abrir ramo de flores"
              onClick={() => setOpen(true)}
              exit={{ scale: 0, opacity: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-16 z-20 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-honey-200 via-honey-300 to-gold-500 shadow-lg animate-glow sm:h-28 sm:w-28"
            >
              <FlowerSvg size={48} hue="#FFE29B" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-6 max-w-sm text-center font-script text-2xl text-gold-600 sm:text-3xl"
          >
            Este ramo floreció solo para ti, {siteConfig.herName} 💛
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
