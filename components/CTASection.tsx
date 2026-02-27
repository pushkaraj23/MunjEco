"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type CTASectionProps = {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  subtitle = "Get in touch for bulk orders and export inquiries.",
  primaryLabel = "Request Catalogue",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-almond px-8 py-16 text-center shadow-card md:px-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-matcha/5 via-transparent to-chai/5" />
        <div className="relative">
          <h2 className="font-display text-3xl font-semibold text-carob md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-foreground-muted">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-2xl bg-matcha px-8 py-4 font-semibold text-white shadow-card transition-all duration-300 hover:shadow-[0_0_40px_rgba(128,150,113,0.25)] hover:-translate-y-0.5"
              >
                {primaryLabel}
              </Link>
            </motion.div>
            {secondaryLabel && secondaryHref && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-matcha/50 bg-white/80 px-8 py-4 font-semibold text-carob backdrop-blur-sm transition-all duration-300 hover:bg-matcha/10"
                >
                  {secondaryLabel}
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
