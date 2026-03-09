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
    <div className="space-y-3">
      {/* Main carousel image */}
      <div className="relative w-full max-w-xl aspect-square overflow-hidden rounded-xl border border-border bg-background-alt/60 shadow-card">
        <button
          type="button"
          onClick={() => openFullscreen(index)}
          className="group relative block h-full w-full cursor-zoom-in"
          aria-label="Open fullscreen image"
        >
          <Image
            src={current}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 35vw"
            unoptimized={current.startsWith("http")}
          />
        </button>

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </>
        )}
      </div>

      {/* Dots / mini carousel controls */}
      {safeImages.length > 1 && (
        <div className="flex justify-center gap-2">
          {safeImages.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 w-8 rounded-full transition-all ${
                i === index ? "bg-primary" : "bg-border hover:bg-primary/60"
              }`}
            />
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
              <div className="relative h-[70vh] w-[70vh] max-h-[90vh] max-w-[90vw]">
                <Image
                  src={current}
                  alt={name}
                  fill
                  className="object-contain"
                  unoptimized={current.startsWith("http")}
                />
              </div>
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

