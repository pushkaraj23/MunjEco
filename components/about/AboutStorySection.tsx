"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function AboutStorySection() {
  return (
    <section className="relative overflow-visible bg-background pb-20">
      <DecoGraphic
        src="/graphics/img4-v0.png"
        alt=""
        placement="bottom-right"
        size="lg"
        className="opacity-20"
      />

      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-10 rounded-2xl bg-primary-dark px-6 py-12 text-white md:grid-cols-2 md:items-center md:px-10 md:py-16"
        >
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-xs">
              Our story
            </p>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
              From a simple idea to a global eco brand.
            </h2>
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              MunjEco Global was founded on the belief that premium manufacturing and
              sustainability can go hand in hand. We specialize in bamboo daily-use
              products—pens, stationery, bottles, and cups—crafted for durability and
              elegance. Better habits for better nature.
            </p>
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              Today we work with corporates, gifting partners, and retail brands who
              demand both quality and responsible sourcing, building long-term
              relationships rooted in trust, transparency, and care for the planet.
            </p>
          </div>

          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-card md:justify-self-end">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <Image
              src="https://images.unsplash.com/photo-1659644569209-1c397e64f7c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Close-up of crafted natural products"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/45 px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              Crafted in India • Shipped worldwide
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

