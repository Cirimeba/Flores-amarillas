"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type Petal = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotate: number;
  opacity: number;
  kind: 0 | 1;
};

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 14 + Math.random() * 22,
    duration: 9 + Math.random() * 10,
    delay: Math.random() * 12,
    drift: (Math.random() - 0.5) * 160,
    rotate: 180 + Math.random() * 540,
    opacity: 0.55 + Math.random() * 0.4,
    kind: Math.random() > 0.5 ? 1 : 0,
  }));
}

function PetalShape({ size, kind }: { size: number; kind: 0 | 1 }) {
  if (kind === 0) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path
          d="M16 2C20 8 30 10 30 16C30 22 20 24 16 30C12 24 2 22 2 16C2 10 12 8 16 2Z"
          fill="url(#petalGradA)"
        />
        <defs>
          <linearGradient id="petalGradA" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE9A8" />
            <stop offset="0.5" stopColor="#FFCF4D" />
            <stop offset="1" stopColor="#E3B04B" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g>
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="16"
            cy="9"
            rx="4.5"
            ry="7.5"
            fill="url(#petalGradB)"
            transform={`rotate(${deg} 16 16)`}
          />
        ))}
        <circle cx="16" cy="16" r="3.2" fill="#B87E0B" />
      </g>
      <defs>
        <radialGradient id="petalGradB">
          <stop stopColor="#FFDD7A" />
          <stop offset="1" stopColor="#F4AE16" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function PetalsBackground() {
  const petals = useMemo(() => generatePetals(24), []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-[-10vh]"
          style={{ left: `${p.left}%`, opacity: p.opacity }}
          initial={{ y: "-10vh", x: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            x: p.drift,
            rotate: p.rotate,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <PetalShape size={p.size} kind={p.kind} />
        </motion.div>
      ))}
    </div>
  );
}
