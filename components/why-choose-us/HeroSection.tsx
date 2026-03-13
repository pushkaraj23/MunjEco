"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-28 pb-16 md:min-h-[70vh] md:pt-32 md:pb-20">
      {/* Background image - full cover */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background" />
      </div>

      {/* Overlaid text - horizontally centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-4xl px-6 rounded-xl shadow-lg bg-background/60 backdrop-blur-md py-10 text-center sm:px-8 md:px-10"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted drop-shadow-sm sm:text-sm">
          Why choose MunjEco Global
        </p>
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Why Global Business Partners Work With Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground-muted drop-shadow-sm md:text-base">
          Natural, responsible and export‑ready — MunjEco Global connects
          Indian craftsmanship and sustainable products with buyers across
          the world.
        </p>
      </motion.div>
    </section>
  );
}
