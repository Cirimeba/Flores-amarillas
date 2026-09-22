"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

type GalleryItem = (typeof siteConfig.gallery.items)[number];

function MediaCard({ item, index }: { item: GalleryItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (item.type === "emoji") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: (index % 3) * 0.1, duration: 0.55 }}
        whileHover={{ y: -6, scale: 1.03 }}
        className="card-elegant flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center shadow-md"
      >
        <span className="text-4xl sm:text-5xl">{item.emoji}</span>
        <p className="text-sm font-medium text-ink-700 sm:text-base">{item.caption}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.55 }}
      whileHover={{ y: -6, scale: 1.03 }}
      onViewportEnter={() => videoRef.current?.play().catch(() => {})}
      onViewportLeave={() => videoRef.current?.pause()}
      className="card-elegant relative aspect-square overflow-hidden rounded-2xl shadow-md"
    >
      {item.type === "photo" ? (
        <Image
          src={item.src}
          alt={item.caption}
          fill
          sizes="(min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/75 via-ink-900/15 to-transparent p-3 pt-10">
        <p className="text-sm font-medium text-cream-50 sm:text-base">{item.caption}</p>
      </div>
    </motion.div>
  );
}

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
          <MediaCard key={i} item={item} index={i} />
        ))}
      </div>

      <p className="mt-8 max-w-md text-center text-xs text-ink-700/50">
        Tip: agrega o cambia tus fotos y videos en{" "}
        <code className="rounded bg-honey-100 px-1 py-0.5">lib/site-config.ts</code> →{" "}
        <code className="rounded bg-honey-100 px-1 py-0.5">gallery.items</code>.
      </p>
    </section>
  );
}
