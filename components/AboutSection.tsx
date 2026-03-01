"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sprout, Heart, ArrowRight } from "lucide-react";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glowOpacity = useTransform(scrollYProgress, [0.08, 0.35], [0, 1]);
  const containerY = useTransform(scrollYProgress, [0.15, 0.5], [50, -25]);

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-14 md:py-20">
      {/* Parallax ambient glows - chai accent section */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-chai/22 blur-[120px]"
      />
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-turmeric/15 blur-[100px]"
      />
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-chai/12 blur-[80px]" />

      <motion.div
        style={{ y: containerY }}
        className="relative mx-auto max-w-4xl"
      >
        {/* Glass card container */}
        <div className="accent-chai relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 px-10 py-14 shadow-[0_0_60px_-15px_rgba(210,171,128,0.18)] backdrop-blur-2xl md:rounded-[2rem] md:px-16 md:py-20">
          {/* Block-print accent bars */}
          <div className="absolute left-0 top-0 h-1 w-24 rounded-r-full bg-chai/50" />
          <div className="absolute right-0 bottom-0 h-1 w-32 rounded-l-full bg-turmeric/40" />
          {/* Inner glow ring */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 md:rounded-[2rem]" />
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 via-transparent to-transparent md:rounded-[2rem]" />
          <div className="pattern-paisley-subtle pointer-events-none absolute inset-0 rounded-3xl opacity-40 md:rounded-[2rem]" />

          <div className="relative text-center">
            {/* Icon badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-chai/30 bg-chai/15 px-4 py-2 backdrop-blur-sm"
            >
              <Sprout className="h-5 w-5 text-chai" strokeWidth={1.5} />
              <span className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/90">
                About MunjEco Global
              </span>
            </motion.div>

            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Rooted in Purpose. Built for Conscious Trade.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
              MunjEco Global was born from a simple belief — that business can
              grow without harming the earth, and trade can uplift lives rather
              than exploit them.
            </p>

            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              We are a purpose-led Indian export company creating eco-friendly
              lifestyle essentials and conscious handicrafts in collaboration
              with responsible makers and artisan communities. Our focus is
              simple: supporting livelihoods, reducing plastic use, and
              delivering sustainable products to global markets with
              consistency, care, and integrity.
            </p>

            {/* Trust hint with icon */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/70"
            >
              <Heart className="h-4 w-4 text-chai" strokeWidth={1.5} />
              <span>Supporting livelihoods, one product at a time</span>
            </motion.p>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-2xl bg-chai px-6 py-3.5 font-semibold text-carob shadow-md transition-all duration-300 hover:bg-chai/90 hover:shadow-lg hover:shadow-[0_8px_30px_rgba(210,171,128,0.35)]"
              >
                Learn More About Us
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
