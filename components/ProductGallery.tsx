"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  name: string;
  images: string[];
};

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

export function ProductGallery({ name, images }: Props) {
  const safeImages =
    images.length > 0
      ? images
      : ["https://placehold.co/800x600/E5E0D8/809671?text=Product"];

  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, AUTO_PLAY_INTERVAL);

    return () => window.clearInterval(id);
  }, [safeImages.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!fullscreen) return;
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [fullscreen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (fullscreen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [fullscreen]);

  const current = safeImages[index];

  function goTo(idx: number) {
    setIndex(idx);
  }

  function next() {
    setIndex((prev) => (prev + 1) % safeImages.length);
  }

  function prev() {
    setIndex((prev) =>
      prev === 0 ? safeImages.length - 1 : (prev - 1) % safeImages.length
    );
  }

  function openFullscreen(idx?: number) {
    if (idx != null) setIndex(idx);
    setFullscreen(true);
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-black/30 shadow-[0_0_50px_-15px_rgba(200,107,59,0.15)] backdrop-blur-sm md:rounded-[2rem]">
        <div className="absolute left-0 top-0 z-10 h-1 w-16 rounded-r-full bg-terracotta/50" />
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <button
              type="button"
              onClick={() => openFullscreen()}
              className="relative block h-full w-full cursor-zoom-in"
              aria-label="Open fullscreen"
            >
              <Image
                src={current}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                unoptimized={current.startsWith("http")}
              />
            </button>
          </motion.div>
        </AnimatePresence>

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm transition-all hover:border-terracotta/50 hover:bg-terracotta/40"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-2.5 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm transition-all hover:border-terracotta/50 hover:bg-terracotta/40"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {safeImages.length > 1 && (
          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1">
            {safeImages.map((img, i) => (
              <button
                key={img + i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                }}
                className={`h-1.5 w-5 rounded-full transition-all ${
                  i === index
                    ? "bg-terracotta shadow-[0_0_10px_rgba(200,107,59,0.6)]"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {safeImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {safeImages.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => openFullscreen(i)}
              className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border cursor-zoom-in transition-all ${
                i === index ? "border-terracotta ring-2 ring-terracotta/30 shadow-[0_0_20px_rgba(200,107,59,0.2)]" : "border-white/20 hover:border-white/40"
              }`}
            >
              <Image
                src={img}
                alt={`${name} ${i + 1}`}
                fill
                className="object-cover"
                unoptimized={img.startsWith("http")}
              />
            </button>
          ))}
        </div>
      )}

      {mounted &&
        createPortal(
          <AnimatePresence>
            {fullscreen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl"
                onClick={() => setFullscreen(false)}
              >
            <button
              type="button"
              onClick={() => setFullscreen(false)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/50 p-2.5 text-white backdrop-blur-sm transition-all hover:border-terracotta/50 hover:bg-terracotta/30"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {safeImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 text-white backdrop-blur-sm transition-all hover:border-terracotta/50 hover:bg-terracotta/30"
                  aria-label="Previous"
                >
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 text-white backdrop-blur-sm transition-all hover:border-terracotta/50 hover:bg-terracotta/30"
                  aria-label="Next"
                >
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current}
                alt={name}
                width={1200}
                height={900}
                className="max-h-[90vh] w-auto max-w-[90vw] object-contain"
                unoptimized={current.startsWith("http")}
              />
              {safeImages.length > 1 && (
                <div className="absolute inset-x-0 -bottom-8 flex justify-center gap-2">
                  {safeImages.map((img, i) => (
                    <button
                      key={img + i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goTo(i);
                      }}
                      className={`h-2 w-6 rounded-full transition-all ${
                        i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}

