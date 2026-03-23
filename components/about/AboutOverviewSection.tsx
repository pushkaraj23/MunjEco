"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function AboutOverviewSection() {
  return (
    <section className="relative overflow-visible bg-background pb-20">

      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-10 border-t border-border/70 pt-10 md:grid-cols-2 md:items-center"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border/70 bg-background-alt shadow-card md:justify-self-start">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FAbout%20Us%20Page%2FWho%20We%20Are.jpg?alt=media&token=23fc96fc-cce9-4bc0-906b-0b7415fb8e1e"
              alt="MunjEco products and handicrafts arranged for export"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted sm:text-xs">
              Who we are
            </p>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              An Indian export partner for eco-friendly everyday products.
            </h2>
            <p className="text-sm leading-relaxed text-foreground-muted md:text-base">
              MunjEco Global is an Indian export company focused on eco-friendly lifestyle essentials and conscious handicrafts. We work closely with trusted manufacturers, artisans, and craft communities to deliver high-quality, sustainable products to global markets.
            </p>
            <p className="text-sm leading-relaxed text-foreground-muted md:text-base">
              Our product range includes plastic-free daily-use essentials such as neem wood combs, bamboo toothbrushes, eco-friendly gift solutions, and thoughtfully crafted Indian handicrafts. Each product reflects careful material selection, traditional skills, and responsible production practices
            </p>
            <p className="text-sm leading-relaxed text-foreground-muted md:text-base">
              Our approach is simple, conscious materials, ethical sourcing, consistent quality, and reliable delivery. Every product we export supports responsible livelihoods, reduced plastic use, and purposeful trade that respects both people and the planet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

