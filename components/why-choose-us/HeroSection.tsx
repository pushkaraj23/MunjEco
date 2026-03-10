"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function HeroSection() {
  return (
    <section className="relative overflow-visible bg-background pt-28 pb-12 md:pt-32 md:pb-16">
      <DecoGraphic
        src="/graphics/img3-v0.png"
        alt=""
        placement="top-left"
        size="md"
        className="opacity-20"
      />

      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-10 md:flex-row md:items-center"
        >
          <div className="accent-line-left w-full md:w-3/5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted sm:text-sm">
              Why choose MunjEco Global
            </p>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Why global buyers work with us.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-muted md:text-base">
              Natural, responsible and export‑ready — MunjEco Global connects
              Indian craftsmanship and sustainable products with buyers across
              the world.
            </p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border/70 bg-background-alt shadow-card sm:mx-auto sm:max-w-[260px] md:w-1/3 md:max-w-[280px] md:min-w-[180px]">
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Curated eco-friendly products styled for buyers"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 260px, 280px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

