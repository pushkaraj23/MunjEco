"use client";

import { useRef } from "react";
import Link from "next/link";
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
    <section ref={ref} className="relative overflow-hidden px-6 py-14 md:py-20">
      {/* Parallax ambient glows - pistache section accent */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pistache/22 blur-[120px]"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute bottom-1/4 right-1/6 h-80 w-80 rounded-full bg-matcha/18 blur-[100px]"
      />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-pistache/12 blur-[80px]" />

      <motion.div
        style={{ y: containerY }}
        className="relative mx-auto max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="accent-pistache relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 px-10 py-14 shadow-[0_0_60px_-15px_rgba(162,183,154,0.2)] backdrop-blur-2xl md:rounded-[2rem] md:px-16 md:py-20"
        >
          <div className="absolute left-0 top-0 h-1 w-28 rounded-r-full bg-pistache/50" />
          <div className="absolute right-0 bottom-0 h-1 w-20 rounded-l-full bg-matcha/40" />
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 md:rounded-[2rem]" />
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 via-transparent to-transparent md:rounded-[2rem]" />
          <div className="pattern-indian-border pointer-events-none absolute inset-0 rounded-3xl opacity-20 md:rounded-[2rem]" />

          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-pistache/30 bg-pistache/15 px-4 py-2 backdrop-blur-sm"
            >
              <Leaf className="h-5 w-5 text-pistache" strokeWidth={1.5} />
              <span className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/90">
                Sustainability Promise
              </span>
            </motion.div>

            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
              More Than Products — A Promise to the Planet
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              At MunjEco Global, sustainability is not a trend. It is a
              responsibility. Every product we export supports reduced plastic
              use, mindful consumption, and ethical production practices. We
              believe global trade can grow while still respecting nature and
              future generations.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10"
            >
              <Link
                href="/about#sustainability"
                className="group inline-flex items-center gap-2 rounded-2xl bg-pistache px-6 py-3.5 font-semibold text-carob shadow-md transition-all duration-300 hover:bg-pistache/90 hover:shadow-lg hover:shadow-[0_8px_30px_rgba(162,183,154,0.3)]"
              >
                Our Sustainability Commitment
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
