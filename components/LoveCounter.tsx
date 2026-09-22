"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getElapsed(startDate: string): TimeParts {
  const start = new Date(startDate).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - start);

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

const units: { key: keyof TimeParts; label: string }[] = [
  { key: "days", label: "días" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "seg" },
];

export default function LoveCounter({ startDate }: { startDate: string }) {
  const [elapsed, setElapsed] = useState<TimeParts | null>(null);

  useEffect(() => {
    setElapsed(getElapsed(startDate));
    const interval = setInterval(() => {
      setElapsed(getElapsed(startDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  if (!elapsed) {
    return <div className="h-24" />;
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {units.map((u, i) => (
        <motion.div
          key={u.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 * i, duration: 0.6 }}
          className="card-elegant flex w-[70px] flex-col items-center rounded-2xl px-2 py-3 shadow-sm sm:w-20"
        >
          <span className="font-serif text-2xl font-bold text-ink-800 sm:text-3xl">
            {elapsed[u.key]}
          </span>
          <span className="mt-1 text-[11px] uppercase tracking-wide text-ink-700/70 sm:text-xs">
            {u.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
