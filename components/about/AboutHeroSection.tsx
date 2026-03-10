"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sprout } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-visible bg-background pt-28 pb-20 md:pt-32">
      <DecoGraphic
        src="/graphics/img1-v0.png"
        alt=""
        placement="top-left"
        size="md"
        className="opacity-25"
      />

      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground-muted sm:text-sm">
              <Sprout className="h-4 w-4 text-foreground-muted" strokeWidth={1.5} />
              <span>Our purpose</span>
            </div>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              About MunjEco Global
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">
              Natural • Responsible • Daily Use Products. Eco-friendly gifting.
            </p>
          </div>

          <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-xl border border-border/70 bg-background-alt shadow-card md:justify-self-end">
            <img
              src="https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Studio view of eco-friendly materials and tools"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

