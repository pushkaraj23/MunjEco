"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryHref?: string;
  showSecondary?: boolean;
};

/** Shown on viewports below `md` */
const HERO_IMAGE_MOBILE = "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F001.jpg?alt=media&token=99c65e0b-c4dd-4ec6-bf91-ce9ba3bc4887";

/** Desktop carousel — first slide is the primary hero art */
const HERO_IMAGES = [
  "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F01.jpg?alt=media&token=1ef1864b-1773-4161-a455-4e5eab912086",
];

export function Hero({
  title = "Sustainable Indian Products for Global Markets",
  subtitle = "Eco-friendly, plastic-free lifestyle products from India, crafted responsibly to support livelihoods and restore balance with nature.",
  primaryCta = "Explore Products",
  primaryHref = "/products",
  showSecondary = true,
}: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    let id: ReturnType<typeof setInterval> | undefined;

    const tick = () => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    };

    const sync = () => {
      if (id) clearInterval(id);
      id = undefined;
      if (!mq.matches || HERO_IMAGES.length <= 1) return;
      id = setInterval(tick, 7000);
    };

    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      if (id) clearInterval(id);
    };
  }, []);

  return (
    <section className="relative flex flex-col overflow-hidden bg-background md:h-[100dvh]">
      {/* FULL WIDTH TOP IMAGE with branded overlay - compact for viewport fit */}
      <div className="relative h-[50vh] sm:h-[55vh] shrink-0 w-full overflow-hidden">
        {/* Phone: single hero image */}
        <div className="relative h-full w-full md:hidden">
          <Image
            src={HERO_IMAGE_MOBILE}
            alt="Sustainable Indian lifestyle products"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Tablet/desktop: carousel (first slide = /hero1.png) */}
        <div
          className="relative hidden h-full md:block"
          onTouchStart={(e) => setTouchStartX(e.touches[0]?.clientX ?? null)}
          onTouchEnd={(e) => {
            if (HERO_IMAGES.length <= 1) return;
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
              </div>
            ))}
          </motion.div>

          {/* Slide indicator - theme colors */}
          {HERO_IMAGES.length > 1 && (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
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
          )}

          {/* Arrow controls — only when multiple slides */}
          {HERO_IMAGES.length > 1 && (
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex translate-y-6 items-center justify-between px-4 sm:px-6">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0 ? HERO_IMAGES.length - 1 : prev - 1,
                  )
                }
                aria-label="Previous banner"
                className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/90 backdrop-blur-md transition-all duration-200 hover:bg-black/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length)
                }
                aria-label="Next banner"
                className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/90 backdrop-blur-md transition-all duration-200 hover:bg-black/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM CONTENT SECTION - compact to fit viewport */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex min-h-0 flex-1 flex-col items-center justify-center overflow-visible border-t border-border/60 bg-background py-16 md:py-8 lg:py-10"
      >
        <DecoGraphic src="/graphics/img1-v0.png" alt="" placement="bottom-right" size="md" className="opacity-25 max-sm:hidden" />
        {/* <DecoGraphic src="/graphics/img3-v0.png" alt="" placement="bottom-left" size="sm" className="opacity-25" /> */}
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 max-sm:gap-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
            {/* Left: tag + heading */}
            <div className="accent-line-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="mb-2 mt-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-foreground-muted sm:mb-3 sm:text-sm"
              >
                MunjEco Global
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                className="font-heading text-2xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {title}
              </motion.h1>
            </div>

            {/* Right: subtitle + buttons */}
            <div className="flex flex-col items-start gap-3 lg:items-end lg:text-right">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                className="max-w-xl text-sm leading-relaxed text-foreground-muted sm:mt-1 md:text-base"
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-3 sm:gap-3 lg:justify-end"
              >
                <Link
                  href={primaryHref}
                  className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 sm:px-6 sm:py-3 sm:text-xs"
                >
                  {primaryCta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </Link>

                {showSecondary && (
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-primary/10 justify-center rounded-full px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors duration-200 hover:border-primary hover:text-accent sm:px-6 sm:py-3 backdrop-blur-sm sm:text-xs"
                  >
                    Request a Bulk Quote
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}