"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const BAR_COUNT = 5;

export default function SongSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasRealAudio, setHasRealAudio] = useState(true);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!hasRealAudio || !audio) {
      setIsPlaying((v) => !v);
      return;
    }

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch {
      setHasRealAudio(false);
      setIsPlaying((v) => !v);
    }
  };

  return (
    <section className="relative z-10 flex flex-col items-center px-6 py-20">
      <h2 className="mb-2 text-center font-serif text-3xl font-bold text-ink-800 sm:text-4xl">
        {siteConfig.song.title}
      </h2>
      <p className="mb-8 text-center text-ink-700/70">{siteConfig.song.artist}</p>

      <div className="card-elegant w-full max-w-lg rounded-2xl p-6 shadow-xl sm:p-8">
        <blockquote className="mb-6 space-y-1 border-l-4 border-honey-400 pl-4 font-script text-xl italic text-ink-800 sm:text-2xl">
          {siteConfig.song.lyrics.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              {line}
            </motion.p>
          ))}
        </blockquote>

        <audio
          ref={audioRef}
          src={siteConfig.song.audioSrc}
          preload="none"
          onEnded={() => setIsPlaying(false)}
          onError={() => setHasRealAudio(false)}
          className="hidden"
        />

        <div className="flex items-center gap-4 rounded-full bg-honey-100/70 px-4 py-3">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-honey-300 to-gold-500 text-xl text-ink-900 shadow-md transition-transform active:scale-95"
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <div className="flex h-8 flex-1 items-end justify-center gap-1.5">
            {Array.from({ length: BAR_COUNT }).map((_, i) => (
              <motion.span
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-gold-500 to-honey-300"
                animate={
                  isPlaying
                    ? { height: [6, 26, 10, 30, 6] }
                    : { height: 6 }
                }
                transition={{
                  duration: 1 + i * 0.15,
                  repeat: isPlaying ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <span className="shrink-0 text-xs text-ink-700/60">
            {hasRealAudio ? "🎵" : "modo simulado"}
          </span>
        </div>
      </div>
    </section>
  );
}
