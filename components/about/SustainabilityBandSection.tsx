"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function SustainabilityBandSection() {
  return (
    <section
      id="sustainability"
      className="relative overflow-visible bg-primary-dark text-white"
    >
      <DecoGraphic
        src="/graphics/img5-v0.png"
        alt=""
        placement="top-right"
        size="sm"
        className="opacity-20"
      />

      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl bg-primary-dark/80 py-10 shadow-card md:py-14"
        >
            <div className="mb-3 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent sm:text-xs">
              <Leaf className="h-4 w-4 text-accent" strokeWidth={1.5} />
              <span>Sustainability commitment</span>
            </div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Sustainability commitment
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
              Bamboo regenerates rapidly. We partner with certified growers, minimize
              waste in production, and ensure our supply chain is transparent.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
              Every shipment is designed to lower plastic use and support livelihoods in
              India, so your sourcing decisions create real, positive impact for people
              and planet.
            </p>
        </motion.div>
      </div>
    </section>
  );
}

