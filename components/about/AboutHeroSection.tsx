"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sprout } from "lucide-react";

export function AboutHeroSection() {
  return (
    <section className="relative flex min-h-[44vh] items-center justify-center overflow-hidden pt-20 pb-10 md:min-h-[70vh] md:pt-32 md:pb-20">
      {/* Background image - full cover */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Overlaid content - horizontally centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 mx-6 max-w-4xl rounded-xl border border-primary/30 bg-background/80 px-6 py-9 text-center shadow-lg backdrop-blur-md sm:mx-8 sm:px-8 md:mx-auto md:px-10 md:py-10"
      >
        <div className="mb-4 inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground-muted drop-shadow-sm sm:text-sm">
          <Sprout className="h-4 w-4 text-foreground-muted" strokeWidth={1.5} />
          <span>Our purpose</span>
        </div>
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          About MunjEco Global
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground-muted drop-shadow-sm md:text-base">
          Natural • Responsible • Daily Use Products. Eco-friendly gifting.
        </p>
      </motion.div>
    </section>
  );
}

