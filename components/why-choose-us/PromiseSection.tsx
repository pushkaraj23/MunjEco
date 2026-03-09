"use client";

import { motion } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function PromiseSection() {
  return (
    <section className="relative overflow-visible bg-primary-dark text-white py-20">
      <DecoGraphic
        src="/graphics/img2-v0.png"
        alt=""
        placement="bottom-right"
        size="md"
        className="opacity-25"
      />

      <div className="px-6 sm:px-8 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className=""
        >
          <div className="">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/75 sm:text-sm">
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
        </motion.div>
      </div>
    </section>
  );
}

