"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100dvh] bg-background">
      {/* FULL WIDTH TOP IMAGE */}
      <div className="relative h-[52vh] max-h-[640px] w-full overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            </div>
          ))}
        </motion.div>

        {/* Minimal slide indicator */}
        <div className="absolute bottom-6 right-8 flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 w-8 transition-all duration-300 ${
                activeIndex === i
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* BOTTOM CONTENT SECTION */}
      <div className="flex flex-1 items-center py-12 md:py-10">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-7 md:gap-0">
            {/* Text */}
            <div className="md:flex">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg"
              >
                {subtitle}
              </motion.p>
            </div>

            {/* CTA */}
            <div className="flex items-start justify-start gap-3 lg:justify-end lg:self-end">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center border border-primary px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-primary transition-colors duration-200 hover:bg-primary hover:text-background"
              >
                {primaryCta}
              </Link>

              {showSecondary && (
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-border px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  Request a Bulk Quote
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}