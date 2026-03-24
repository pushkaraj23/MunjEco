"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { useIsMinWidthMd } from "@/hooks/useIsMinWidthMd";
import { NAVBAR_HEIGHT_OFFSET_CLASS } from "@/lib/navbarOffset";

/** Placeholder while hero banner image loads — static gradient + pulse (no infinite JS animation). */
function HeroImageSkeleton() {
  return (
    <div className="relative h-full min-h-[inherit] w-full overflow-hidden bg-background-alt">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-background-alt" />
      <div className="absolute inset-0 animate-pulse bg-gradient-to-t from-primary/10 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(41,115,115,0.12),transparent_70%)]" />
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
          <span className="h-1.5 w-8 rounded-full bg-primary/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/35" />
        </div>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-foreground-muted/50">
          Loading
        </p>
      </div>
    </div>
  );
}

function HeroBannerImage({
  src,
  alt,
  priority,
  loaded,
  onLoaded,
}: {
  src: string;
  alt: string;
  priority: boolean;
  loaded: boolean;
  onLoaded: () => void;
}) {
  return (
    <div
      className={`relative isolate w-full overflow-hidden ${!loaded ? "min-h-[min(42vh,520px)] sm:min-h-[min(44vh,560px)] md:min-h-[min(46vh,600px)]" : ""
        }`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 z-10 transition-opacity duration-700 ease-out ${loaded ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
      >
        <HeroImageSkeleton />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element -- responsive full-width hero; intrinsic natural height */}
      <img
        src={src}
        alt={alt}
        className={`relative z-0 block h-auto w-full max-w-none align-middle transition-opacity duration-700 ease-out ${loaded ? "opacity-100" : "opacity-0"
          }`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
        onLoad={onLoaded}
        onError={onLoaded}
      />
    </div>
  );
}

type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryHref?: string;
  showSecondary?: boolean;
};

/** Desktop carousel — viewports `md` and up */
const HERO_IMAGES = [
  "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F03.jpeg?alt=media&token=61ae007d-0373-4fe3-9fed-97f9d1e9d9fa",
  "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F04.jpg.jpeg?alt=media&token=781b1710-421c-44ea-ab93-fdb10af6ce1c",
  "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F05.jpg.jpeg?alt=media&token=74d1abc7-5c27-494d-8b18-031ad797fd11",
  "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F01.jpg?alt=media&token=1ef1864b-1773-4161-a455-4e5eab912086",
  "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F02.jpg?alt=media&token=01741d85-3bcf-4a94-a604-5aa41e8ccfcc",
];

/** Mobile carousel — viewports below `md` (edit URLs independently of desktop) */
const HERO_IMAGES_MOBILE = [
  "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F003.jpg?alt=media&token=a857981b-6073-46ea-a501-5060c8306e7e",
  "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F004.jpg?alt=media&token=6897edcd-59f7-4a8f-a713-6a7d5353e248",
  "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F005.jpg?alt=media&token=a8096707-cf31-4719-9016-7f4bd0618e7c",
  "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F001.jpg?alt=media&token=99c65e0b-c4dd-4ec6-bf91-ce9ba3bc4887",
  "https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FProduct%20Images%2FBanner%2F002.jpg?alt=media&token=12b0c173-b1c9-4eb9-b747-4a837586e0f3",
];

export function Hero({
  title = "Sustainable Indian Products for Global Markets",
  subtitle = "Eco-friendly, plastic-free lifestyle products from India, crafted responsibly to support livelihoods and restore balance with nature.",
  primaryCta = "Explore Products",
  primaryHref = "/products",
  showSecondary = true,
}: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [mobileTouchStartX, setMobileTouchStartX] = useState<number | null>(
    null,
  );
  const [mobileImagesLoaded, setMobileImagesLoaded] = useState<
    Record<string, boolean>
  >({});
  const [desktopImagesLoaded, setDesktopImagesLoaded] = useState<
    Record<string, boolean>
  >({});

  const markMobileLoaded = (src: string) => {
    setMobileImagesLoaded((prev) =>
      prev[src] ? prev : { ...prev, [src]: true },
    );
  };
  const markDesktopLoaded = (src: string) => {
    setDesktopImagesLoaded((prev) =>
      prev[src] ? prev : { ...prev, [src]: true },
    );
  };

  const isMd = useIsMinWidthMd();

  useEffect(() => {
    const len = isMd ? HERO_IMAGES.length : HERO_IMAGES_MOBILE.length;
    if (len <= 1) return;
    const id = setInterval(() => {
      if (isMd) {
        setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
      } else {
        setMobileActiveIndex(
          (prev) => (prev + 1) % HERO_IMAGES_MOBILE.length,
        );
      }
    }, 7000);
    return () => clearInterval(id);
  }, [isMd]);

  const slidePercent = 100 / HERO_IMAGES.length;
  const mobileSlidePercent = 100 / HERO_IMAGES_MOBILE.length;

  return (
    <section
      className={`relative flex min-h-[100dvh] flex-col bg-background ${NAVBAR_HEIGHT_OFFSET_CLASS}`}
    >
      {/*
        Edge-to-edge viewport width; height from intrinsic image (no width/height on <img>).
        Native <img> avoids Next/Image requiring explicit dimensions.
      */}
      <div className="relative w-screen max-w-[100vw] shrink-0 overflow-hidden ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
        {/* Only one carousel mounted: avoids loading 10+ full-width banner images at once */}
        {!isMd && (
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={(e) =>
            setMobileTouchStartX(e.touches[0]?.clientX ?? null)
          }
          onTouchEnd={(e) => {
            if (HERO_IMAGES_MOBILE.length <= 1) return;
            if (mobileTouchStartX == null) return;
            const deltaX = e.changedTouches[0]?.clientX - mobileTouchStartX;
            if (Math.abs(deltaX) < 40) return;
            if (deltaX > 0) {
              setMobileActiveIndex((prev) =>
                prev === 0 ? HERO_IMAGES_MOBILE.length - 1 : prev - 1,
              );
            } else {
              setMobileActiveIndex(
                (prev) => (prev + 1) % HERO_IMAGES_MOBILE.length,
              );
            }
            setMobileTouchStartX(null);
          }}
        >
          <motion.div
            className="flex"
            style={{ width: `${HERO_IMAGES_MOBILE.length * 100}%` }}
            animate={{ x: `-${mobileActiveIndex * mobileSlidePercent}%` }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {HERO_IMAGES_MOBILE.map((src, index) => (
              <div
                key={src}
                className="relative shrink-0"
                style={{ width: `${mobileSlidePercent}%` }}
              >
                <HeroBannerImage
                  src={src}
                  alt="Sustainable Indian lifestyle products"
                  priority={index === 0}
                  loaded={Boolean(mobileImagesLoaded[src])}
                  onLoaded={() => markMobileLoaded(src)}
                />
              </div>
            ))}
          </motion.div>

          {HERO_IMAGES_MOBILE.length > 1 && (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {HERO_IMAGES_MOBILE.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setMobileActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 ${mobileActiveIndex === i
                    ? "h-2 w-10 bg-background"
                    : "h-2 w-8 bg-white/40 hover:bg-white/60"
                    }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          )}

          {HERO_IMAGES_MOBILE.length > 1 && (
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
              <button
                type="button"
                onClick={() =>
                  setMobileActiveIndex((prev) =>
                    prev === 0 ? HERO_IMAGES_MOBILE.length - 1 : prev - 1,
                  )
                }
                aria-label="Previous banner"
                className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/90 backdrop-blur-md transition-all duration-200 hover:bg-black/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() =>
                  setMobileActiveIndex(
                    (prev) => (prev + 1) % HERO_IMAGES_MOBILE.length,
                  )
                }
                aria-label="Next banner"
                className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white/90 backdrop-blur-md transition-all duration-200 hover:bg-black/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          )}
        </div>
        )}

        {isMd && (
        <div
          className="relative w-full overflow-hidden"
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
            className="flex"
            style={{ width: `${HERO_IMAGES.length * 100}%` }}
            animate={{ x: `-${activeIndex * slidePercent}%` }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {HERO_IMAGES.map((src, index) => (
              <div
                key={src}
                className="relative shrink-0"
                style={{ width: `${slidePercent}%` }}
              >
                <HeroBannerImage
                  src={src}
                  alt="Sustainable Indian lifestyle products"
                  priority={index === 0}
                  loaded={Boolean(desktopImagesLoaded[src])}
                  onLoaded={() => markDesktopLoaded(src)}
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
                  className={`rounded-full transition-all duration-300 ${activeIndex === i
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
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex  items-center justify-between px-4 sm:px-6">
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
        )}
      </div>

      {/* BOTTOM CONTENT SECTION - compact to fit viewport */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex min-h-0 flex-1 flex-col items-center justify-center overflow-visible border-t border-border/60 bg-background py-16 md:py-8 lg:py-10"
      >
        <DecoGraphic src="/graphics/img1-v0.png" alt="" placement="bottom-right" size="sm" className="opacity-25 max-sm:hidden" />
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