"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Factory } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

const manufacturingItems = [
  "Responsible bamboo sourcing",
  "Custom logo and text engraving",
  "Quality assurance at each stage",
  "Eco-friendly, reusable, biodegradable",
];

export function ManufacturingSection() {
  return (
    <section id="manufacturing" className="relative overflow-visible bg-background pb-20">
      <DecoGraphic
        src="/graphics/img1-v0.png"
        alt=""
        placement="bottom-right"
        size="md"
        className="opacity-20"
      />

      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-10 md:grid-cols-2 md:items-center"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border/70 bg-background-alt shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1584473457406-6240486418e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Manufacturing workspace with tools and sketches"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted sm:text-xs">
              How we manufacture
            </p>
            <div className="flex items-center gap-2">
              <Factory className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Manufacturing process
              </h2>
            </div>
            <p className="text-base leading-relaxed text-foreground-muted md:text-lg">
              Every product passes through stringent quality checks. From raw bamboo
              selection to finishing, we use eco-friendly treatments and precision
              machinery. Our facility is equipped for bulk production while maintaining
              consistency across batches.
            </p>
            <ul className="mt-6 space-y-3">
              {manufacturingItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                  <span className="text-sm text-foreground-muted">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

