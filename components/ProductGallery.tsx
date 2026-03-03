"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  name: string;
  images: string[];
};

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

export function ProductGallery({ name, images }: Props) {
  const safeImages =
    images.length > 0
      ? images
      : ["https://placehold.co/800x600/F7F7F7/297373?text=Product"];

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
    <div className="space-y-6">
      {/* Main image - accent bar, clean borders */}
      <div className="accent-line-left relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-background-alt/60 shadow-card md:rounded-3xl">
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
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/95 text-foreground shadow-elevated backdrop-blur-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/95 text-foreground shadow-elevated backdrop-blur-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </>
        )}

        {safeImages.length > 1 && (
          <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
            {safeImages.map((img, i) => (
              <button
                key={img + i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                }}
                className={`h-2 w-8 rounded-full transition-all ${
                  i === index
                    ? "bg-primary"
                    : "bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {safeImages.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {safeImages.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => openFullscreen(i)}
              className={`relative h-24 w-32 shrink-0 overflow-hidden rounded-xl border-2 cursor-zoom-in transition-all ${
                i === index
                  ? "border-primary ring-2 ring-primary/30 shadow-card"
                  : "border-border hover:border-primary/60"
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
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-primary-dark/90 text-white backdrop-blur-sm transition-all hover:bg-primary"
              aria-label="Close"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            {safeImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-primary-dark/90 text-white backdrop-blur-sm transition-all hover:bg-primary"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-primary-dark/90 text-white backdrop-blur-sm transition-all hover:bg-primary"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" strokeWidth={2} />
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
                      className={`h-2 w-8 rounded-full transition-all ${
                        i === index ? "bg-primary-light" : "bg-white/50 hover:bg-white/80"
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

