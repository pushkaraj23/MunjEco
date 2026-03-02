"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";

export function SustainabilityPromiseSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0.06, 0.35], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.12, 0.42], [0, 0.85]);
  const containerY = useTransform(scrollYProgress, [0.15, 0.5], [50, -25]);

  return (
    <section
      ref={ref}
      className="relative border-t border-border/70 bg-primary-dark px-6 py-24 text-white md:py-28"
    >
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

      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-pistache/22 to-transparent"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-matcha/18 to-transparent"
      />

      <motion.div
        style={{ y: containerY }}
        className="relative mx-auto max-w-5xl"
      >
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          {/* Left: label + heading */}
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-pistache/90"
            >
              <Leaf className="h-4 w-4 text-pistache" strokeWidth={1.5} />
              <span>Sustainability promise</span>
            </motion.div>

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

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
