"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  name: string;
  images: string[];
};

const AUTO_PLAY_INTERVAL = 5000;
const SWIPE_THRESHOLD = 50;

export function ProductGallery({ name, images }: Props) {
  const safeImages =
    images.length > 0
      ? images
      : ["https://placehold.co/800x600/F7F7F7/297373?text=Product"];

  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const autoPlayPausedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    const id = window.setInterval(() => {
      if (autoPlayPausedRef.current) return;
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, AUTO_PLAY_INTERVAL);

    return () => window.clearInterval(id);
  }, [safeImages.length]);

  const goTo = useCallback(
    (idx: number) => {
      setIndex(Math.max(0, Math.min(idx, safeImages.length - 1)));
    },
    [safeImages.length]
  );

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % safeImages.length);
  }, [safeImages.length]);

  const prev = useCallback(() => {
    setIndex((prev) =>
      prev === 0 ? safeImages.length - 1 : (prev - 1) % safeImages.length
    );
  }, [safeImages.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!fullscreen) return;
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [fullscreen, prev, next]
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

  const openFullscreen = useCallback((idx?: number) => {
    if (idx != null) setIndex(idx);
    setFullscreen(true);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    autoPlayPausedRef.current = true;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current == null || safeImages.length <= 1) return;
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaY = touchStartY.current
        ? Math.abs(e.changedTouches[0].clientY - touchStartY.current)
        : 0;
      if (Math.abs(deltaX) > SWIPE_THRESHOLD && Math.abs(deltaX) > deltaY) {
        if (deltaX > 0) prev();
        else next();
      }
      touchStartX.current = null;
      touchStartY.current = null;
      autoPlayPausedRef.current = false;
    },
    [safeImages.length, next, prev]
  );

  return (
    <div className="space-y-3">
      {/* Main carousel - swipeable on mobile, smooth slide animation */}
      <div
        className="relative w-full max-w-xl aspect-square overflow-hidden rounded-xl border border-border bg-background-alt/60 shadow-card"
        onMouseEnter={() => { autoPlayPausedRef.current = true; }}
        onMouseLeave={() => { autoPlayPausedRef.current = false; }}
      >
        <button
          type="button"
          onClick={() => openFullscreen(index)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="group relative block h-full w-full cursor-zoom-in touch-pan-y"
          aria-label="Open fullscreen image"
        >
          <motion.div
            className="flex h-full"
            style={{ width: `${safeImages.length * 100}%` }}
            animate={{ x: `${(-index / safeImages.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {safeImages.map((img, i) => (
              <div
                key={img + i}
                className="relative h-full shrink-0"
                style={{ width: `${100 / safeImages.length}%` }}
              >
                <Image
                  src={img}
                  alt={`${name} - image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  unoptimized={img.startsWith("http")}
                />
              </div>
            ))}
          </motion.div>
        </button>

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background/80 text-foreground backdrop-blur-sm transition-all duration-200 ease-out hover:bg-background active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background/80 text-foreground backdrop-blur-sm transition-all duration-200 ease-out hover:bg-background active:scale-95"
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
              className={`h-1.5 w-8 rounded-full transition-all duration-300 ease-out ${
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
                  className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-primary-dark/90 text-white backdrop-blur-sm transition-all duration-200 ease-out hover:bg-primary active:scale-95"
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
                  className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-primary-dark/90 text-white backdrop-blur-sm transition-all duration-200 ease-out hover:bg-primary active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" strokeWidth={2} />
                </button>
              </>
            )}

            <div
              className="relative h-[70vh] w-[90vw] max-w-[90vw] overflow-hidden touch-pan-y"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className="flex h-full"
                style={{ width: `${safeImages.length * 100}%` }}
                animate={{ x: `${(-index / safeImages.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {safeImages.map((img, i) => (
                  <div
                    key={img + i}
                    className="relative h-full shrink-0"
                    style={{ width: `${100 / safeImages.length}%` }}
                  >
                    <Image
                      src={img}
                      alt={`${name} - image ${i + 1}`}
                      fill
                      className="object-contain"
                      unoptimized={img.startsWith("http")}
                    />
                  </div>
                ))}
              </motion.div>
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
                      className={`h-2 w-8 rounded-full transition-all duration-300 ease-out ${
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

