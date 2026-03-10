"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryHref?: string;
  showSecondary?: boolean;
};

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1759523131742-af817477bcd9",
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
];

export function Hero({
  title = "Sustainable Indian Products for Global Markets",
  subtitle = "Eco-friendly, plastic-free lifestyle products from India — crafted responsibly to support livelihoods and restore balance with nature.",
  primaryCta = "Explore Products",
  primaryHref = "/products",
  showSecondary = true,
}: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex h-[100dvh] flex-col overflow-hidden bg-background">
      {/* FULL WIDTH TOP IMAGE with branded overlay - compact for viewport fit */}
      <div
        className="relative h-[55vh] shrink-0 w-full overflow-hidden"
        onTouchStart={(e) => setTouchStartX(e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          if (touchStartX == null) return;
          const deltaX = e.changedTouches[0]?.clientX - touchStartX;
          if (Math.abs(deltaX) < 40) return;
          if (deltaX > 0) {
            setActiveIndex((prev) =>
              prev === 0 ? HERO_IMAGES.length - 1 : prev - 1,
            );
          } else {
            setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
          }
          setTouchStartX(null);
        }}
      >
        <motion.div
          className="flex h-full w-full"
          animate={{ x: `-${activeIndex * 100}%` }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {HERO_IMAGES.map((src, index) => (
            <div key={src} className="relative h-full w-full flex-shrink-0">
              <Image
                src={src}
                alt="Sustainable Indian lifestyle products"
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              {/* Branded gradient overlay: Graphite → Pine Blue → Coral tint */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(160deg, rgba(57,57,58,0.4) 0%, rgba(41,115,115,0.25) 35%, rgba(255,133,82,0.08) 70%, transparent 100%)",
                }}
              />
              {/* Bottom fade for content flow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary-dark/20 to-transparent" />
            </div>
          ))}
        </motion.div>

        {/* Floating badge over image */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 backdrop-blur-md sm:left-6 sm:top-6 sm:gap-2 sm:px-4 sm:py-2"
        >
          <Leaf className="h-3.5 w-3.5 text-primary-light sm:h-4 sm:w-4" strokeWidth={1.5} />
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-white sm:text-sm">
            Natural • Responsible • Daily Use
          </span>
        </motion.div>

        {/* Slide indicator - theme colors */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "h-2 w-10 bg-background"
                  : "h-2 w-8 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow controls */}
        {/* <div className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3">
          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? HERO_IMAGES.length - 1 : prev - 1,
              )
            }
            aria-label="Previous banner"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-black/55"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length)
            }
            aria-label="Next banner"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-black/55"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div> */}
      </div>

      {/* BOTTOM CONTENT SECTION - compact to fit viewport */}
      <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center overflow-visible border-t border-border/60 bg-background py-6 md:py-8 lg:py-10">
        <DecoGraphic src="/graphics/img1-v0.png" alt="" placement="bottom-right" size="md" className="opacity-25" />
        {/* <DecoGraphic src="/graphics/img3-v0.png" alt="" placement="bottom-left" size="sm" className="opacity-25" /> */}
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
            {/* Left: tag + heading */}
            <div className="accent-line-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-2 mt-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-foreground-muted sm:mb-3 sm:text-sm"
              >
                MunjEco Global
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-heading text-2xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {title}
              </motion.h1>
            </div>

            {/* Right: subtitle + buttons */}
            <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="max-w-xl text-sm leading-relaxed text-foreground-muted sm:mt-1 md:text-base"
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap items-center gap-2 sm:gap-3 lg:justify-end"
              >
                <Link
                  href={primaryHref}
                  className="group inline-flex items-center justify-center gap-1.5 rounded-sm bg-primary px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 sm:px-6 sm:py-3 sm:text-xs"
                >
                  {primaryCta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </Link>

                {showSecondary && (
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-primary/10 justify-center rounded-sm px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors duration-200 hover:border-primary hover:text-accent sm:px-6 sm:py-3 backdrop-blur-sm sm:text-xs"
                  >
                    Request a Bulk Quote
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}