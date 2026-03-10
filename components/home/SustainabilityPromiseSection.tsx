"use client";

import Link from "next/link";
import Image from "next/image";
import { Leaf, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function SustainabilityPromiseSection() {
  return (
    <section className="relative overflow-visible border-t border-border/70 bg-primary-dark py-16 text-white md:py-20">
      <DecoGraphic src="/graphics/img1-v0.png" alt="" placement="top-right" size="md" className="opacity-25" />
      {/* Cinematic background image with subtle overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Soft, atmospheric nature detail"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />
      </div>

      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-10 md:flex-row md:items-start"
        >
          {/* Left: label + heading */}
          <div className="md:w-1/3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-pistache/90 sm:text-sm">
              <Leaf className="h-4 w-4 text-pistache" strokeWidth={1.5} />
              <span>Sustainability promise</span>
            </div>

            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              More than products — a promise to the planet.
            </h2>
          </div>

          {/* Right: narrative + link */}
          <div className="md:w-2/3">
            <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              At MunjEco Global, sustainability is not a trend. It is a
              responsibility. Every product we export supports reduced plastic
              use, mindful consumption, and ethical production practices. We
              believe global trade can grow while still respecting nature and
              future generations.
            </p>

            <div className="mt-8">
              <Link
                href="/about#sustainability"
                className="group inline-flex items-center gap-2 border-b border-white/60 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-white transition-colors hover:border-pistache hover:text-pistache"
              >
                Our sustainability commitment
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
