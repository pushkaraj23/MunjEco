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

const HERO_IMAGES = [
  "/banners/test.png",
  "https://images.unsplash.com/photo-1759523131742-af817477bcd9",
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
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
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex flex-col overflow-hidden bg-background h-[100dvh]">

      {/* TOP IMAGE */}
      <div
        className="relative h-[55vh] w-full shrink-0 overflow-hidden"
        onTouchStart={(e) => setTouchStartX(e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          if (touchStartX == null) return;
          const deltaX = e.changedTouches[0]?.clientX - touchStartX;
          if (Math.abs(deltaX) < 40) return;

          if (deltaX > 0) {
            setActiveIndex((prev) =>
              prev === 0 ? HERO_IMAGES.length - 1 : prev - 1
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

        {/* Indicator */}
        <div className="absolute bottom-[2vh] left-1/2 flex -translate-x-1/2 gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${activeIndex === i
                ? "h-[0.7vh] w-[4.5vh] bg-background"
                : "h-[0.7vh] w-[3.5vh] bg-white/40 hover:bg-white/60"
                }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-[2vw] md:flex">
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? HERO_IMAGES.length - 1 : prev - 1
              )
            }
            className="pointer-events-auto flex items-center justify-center h-[5.5vh] w-[5.5vh] rounded-full bg-black/30 text-white backdrop-blur-md transition-all hover:bg-black/40"
          >
            <ChevronLeft className="h-[2.4vh] w-[2.4vh]" />
          </button>

          <button
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length)
            }
            className="pointer-events-auto flex items-center justify-center h-[5.5vh] w-[5.5vh] rounded-full bg-black/30 text-white backdrop-blur-md transition-all hover:bg-black/40"
          >
            <ChevronRight className="h-[2.4vh] w-[2.4vh]" />
          </button>
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: "2vh" }}
        animate={{ opacity: 1, y: "0vh" }}
        transition={{ duration: 0.5 }}
        className="relative flex h-[45vh] flex-col justify-center border-t border-border/60 bg-background"
      >
        <DecoGraphic
          src="/graphics/img1-v0.png"
          alt=""
          placement="bottom-right"
          size="md"
          className="opacity-25 max-sm:hidden"
        />

        <div className="mx-auto w-full max-w-6xl px-[4vw]">
          <div className="grid grid-cols-1 gap-[0.5vh] md:gap-[2.5vh] lg:grid-cols-2 lg:items-center">

            {/* LEFT */}
            <div className="accent-line-left max-w-2xl space-y-[1vh] pt-1">
              <motion.div
                initial={{ opacity: 0, y: "1vh" }}
                animate={{ opacity: 1, y: "0vh" }}
                className="text-[1.4vh] md:text-[1.8vh] uppercase tracking-[0.3em] text-foreground-muted"
              >
                MunjEco Global
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: "1vh" }}
                animate={{ opacity: 1, y: "0vh" }}
                className="font-heading text-[3vh] leading-[1.2] font-semibold text-foreground md:text-[4.8vh] lg:text-[5.5vh]"
              >
                {title}
              </motion.h1>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-[2.2vh] lg:items-end lg:text-right">
              <motion.p
                initial={{ opacity: 0, y: "1vh" }}
                animate={{ opacity: 1, y: "0vh" }}
                className="max-w-xl text-[1.7vh] leading-relaxed text-foreground-muted md:text-[2.2vh]"
              >
                {subtitle}
              </motion.p>

              <motion.div className="flex flex-wrap max-sm:gap-[1.2vh] gap-[1.8vh] lg:justify-end">

                {/* Primary Button */}
                <Link
                  href={primaryHref}
                  className="group flex items-center gap-[1vh] rounded-full bg-primary px-[3.5vh] py-[1.7vh] text-[1.6vh] uppercase text-white 
    shadow-[0_6px_20px_rgba(41,115,115,0.25)] 
    transition-all duration-300 ease-out
    hover:-translate-y-[0.3vh] hover:scale-[1.02] 
    hover:bg-primary-dark 
    hover:shadow-[0_12px_30px_rgba(41,115,115,0.35)]"
                >
                  {primaryCta}

                  <ArrowRight
                    className="h-[2vh] w-[2vh] transition-transform duration-300 group-hover:translate-x-[0.6vh]"
                  />
                </Link>

                {/* Secondary Button */}
                {showSecondary && (
                  <Link
                    href="/contact"
                    className="group flex items-center justify-center rounded-full 
      bg-primary/10 px-[3.5vh] py-[1.7vh] text-[1.6vh] uppercase text-foreground 
      border border-primary/20 backdrop-blur-sm
      transition-all duration-300 ease-out
      hover:-translate-y-[0.2vh] hover:scale-[1.015]
      hover:bg-primary/20 hover:border-primary/40
      hover:shadow-[0_8px_25px_rgba(41,115,115,0.15)]"
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