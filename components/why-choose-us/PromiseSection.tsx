"use client";

import { motion } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function PromiseSection() {
  return (
    <section className="relative overflow-visible bg-primary-dark text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 border border-border/70"
      >
        <div className="relative px-6 py-10 sm:px-8 md:px-10 md:py-12">
          <DecoGraphic
            src="/graphics/img1-v1.png"
            alt=""
            placement="top-right"
            size="md"
            className="opacity-25"
          />
          <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-sm">
                Our Promise
              </p>
              <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                Quality products. Ethical sourcing. Sustainable choices.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                A reliable Indian export partner you can trust — committed to
                manufacturing‑grade quality, responsible supply chains, and
                long‑term relationships with our buyers.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

