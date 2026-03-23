"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[60vh] max-sm:min-h-[40vh] items-center justify-center overflow-hidden pt-24 pb-8 md:min-h-[70vh] md:pt-32 md:pb-16">
      {/* Background image - full cover */}
      <div className="absolute inset-0">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FWhy%20Choose%20Us%20Page%2Fbanner.jpg?alt=media&token=ab07c0f7-ff7e-4801-ab7a-e03b65d22799"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Overlaid text - horizontally centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 mx-4 max-w-4xl px-6 rounded-2xl shadow-lg bg-background/80 backdrop-blur-md py-10 text-center sm:mx-6 sm:px-8 md:mx-auto md:px-10"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted drop-shadow-sm sm:text-sm">
          Why choose MunjEco Global
        </p>
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Why Global Business Partners<br className="max-sm:hidden" />Work With Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground-muted drop-shadow-sm md:text-base">
          Natural, responsible and export‑ready, MunjEco Global connects
          Indian craftsmanship and sustainable products with buyers across
          the world.
        </p>
      </motion.div>
    </section>
  );
}
