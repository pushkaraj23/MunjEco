"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryHref?: string;
  showSecondary?: boolean;
};

const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1759523131742-af817477bcd9";

export function Hero({
  title = "Sustainable Indian Products for Global Markets",
  subtitle = "Eco-friendly, plastic-free lifestyle products from India — crafted responsibly to support livelihoods and restore balance with nature.",
  primaryCta = "Explore Products",
  primaryHref = "/products",
  showSecondary = true,
}: HeroProps) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const contentY = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Parallax background image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -inset-y-16"
      >
        <Image
          src={HERO_BG_IMAGE}
          alt="Eco-friendly bamboo and wooden products"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay - depth and contrast */}
      <div className="gradient-hero-overlay absolute inset-0" />
      <div className="gradient-hero-vignette absolute inset-0" />

      {/* Soft glow orbs - premium depth, matcha accent */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-matcha/25 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-pistache/18 blur-[80px]" />

      {/* Rangoli-style decorative dots along bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="pattern-dot-rangoli pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-30" />

      {/* Content - with parallax fade */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-20 md:pt-32"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-contrast-strong font-heading text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-contrast-light mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white md:text-lg"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-semibold text-carob shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:bg-white/95 hover:shadow-xl hover:shadow-matcha/20"
              >
                {primaryCta}
              </Link>
            </motion.div>
            {showSecondary && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="text-contrast-subtle inline-flex items-center justify-center rounded-2xl border border-white/50 bg-black/50 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-white/70"
                >
                  Request a Bulk Quote
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
