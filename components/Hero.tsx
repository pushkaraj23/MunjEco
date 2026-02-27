"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryHref?: string;
  showSecondary?: boolean;
};

export function Hero({
  title = "Sustainable Indian Products for Global Markets",
  subtitle = "Eco-friendly, plastic-free lifestyle products from India — crafted responsibly to support livelihoods and restore balance with nature.",
  primaryCta = "Explore Products",
  primaryHref = "/products",
  showSecondary = true,
}: HeroProps) {
  return (
    <section className="bokeh-bg relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-background to-background-alt">
      {/* Bokeh orbs - soft blur circles */}
      <div className="pointer-events-none absolute left-[15%] top-[20%] h-[400px] w-[400px] rounded-full bg-matcha/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[25%] right-[10%] h-[350px] w-[350px] rounded-full bg-chai/25 blur-[90px]" />
      <div className="pointer-events-none absolute right-[30%] top-[50%] h-[200px] w-[200px] rounded-full bg-pistache/20 blur-[70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass mx-auto rounded-3xl border border-almond px-8 py-6 shadow-card md:inline-block"
        >
          <p className="font-display text-sm font-medium uppercase tracking-wider text-matcha">
            Eco-Friendly • Reusable • Biodegradable
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-8 text-4xl font-bold leading-tight text-carob md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg text-foreground-muted md:text-xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-2xl bg-matcha px-8 py-4 font-semibold text-white shadow-card transition-all duration-300 hover:shadow-elevated hover:shadow-[0_0_40px_rgba(128,150,113,0.25)] hover:-translate-y-0.5"
            >
              {primaryCta}
            </Link>
          </motion.div>
          {showSecondary && (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-matcha/50 bg-white/60 px-8 py-4 font-semibold text-carob backdrop-blur-sm transition-all duration-300 hover:border-matcha hover:bg-matcha/10"
              >
                Request a Bulk Quote
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
