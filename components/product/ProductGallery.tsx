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

  // Boxed grid: use first 4 images (or pad by repeating)
  const gridImages = Array.from({ length: 4 }, (_, i) => safeImages[i % safeImages.length]);

  return (
    <div className="space-y-4">
      {/* Boxed 2x2 grid: two larger on top, two smaller below */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {gridImages.slice(0, 2).map((img, i) => (
          <button
            key={img + i}
            type="button"
            onClick={() => openFullscreen(i)}
            className="accent-line-left relative aspect-square overflow-hidden rounded-none border border-border bg-background-alt/60 shadow-card transition-all hover:border-primary hover:shadow-elevated cursor-zoom-in"
            aria-label={`View image ${i + 1}`}
          >
            <Image
              src={img}
              alt={`${name} ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 35vw"
              unoptimized={img.startsWith("http")}
            />
          </button>
        ))}
        {gridImages.slice(2, 4).map((img, i) => (
          <button
            key={img + (i + 2)}
            type="button"
            onClick={() => openFullscreen(i + 2)}
            className="relative aspect-square overflow-hidden rounded-none border border-border bg-background-alt/60 shadow-card transition-all hover:border-primary hover:shadow-elevated cursor-zoom-in"
            aria-label={`View image ${i + 3}`}
          >
            <Image
              src={img}
              alt={`${name} ${i + 3}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 35vw"
              unoptimized={img.startsWith("http")}
            />
          </button>
        ))}
      </div>

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

