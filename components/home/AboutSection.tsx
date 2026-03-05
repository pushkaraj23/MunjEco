"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sprout, Heart, ArrowRight } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glowOpacity = useTransform(scrollYProgress, [0.08, 0.35], [0, 1]);
  const containerY = useTransform(scrollYProgress, [0.15, 0.5], [50, -25]);

  return (
    <section
      ref={ref}
      className="relative overflow-visible border-t border-border/60 bg-primary/10 px-8 py-24 sm:px-10 md:px-12 md:py-28 lg:px-16 xl:px-20"
    >
      <DecoGraphic src="/graphics/img1.png" alt="" placement="bottom-left" size="md" />
      <DecoGraphic src="/graphics/img5.png" alt="" placement="top-right" size="md" />
      <motion.div
        style={{ opacity: glowOpacity, y: containerY }}
        className="relative mx-auto flex max-w-6xl 2xl:max-w-7xl flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
      >
        {/* Text column */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-foreground-muted sm:text-sm"
          >
            <Sprout className="h-4 w-4 text-foreground-muted" strokeWidth={1.5} />
            <span>About MunjEco Global</span>
          </motion.div>

          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Rooted in purpose. Built for conscious trade.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">
            MunjEco Global was born from a simple belief — that business can grow
            without harming the earth, and trade can uplift lives rather than
            exploit them.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">
            We are a purpose-led Indian export company creating eco-friendly
            lifestyle essentials and conscious handicrafts in collaboration with
            responsible makers and artisan communities. Our focus is simple:
            supporting livelihoods, reducing plastic use, and delivering
            sustainable products to global markets with consistency, care, and
            integrity.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-6 inline-flex items-center gap-2 text-sm text-foreground-muted"
          >
            <Heart className="h-4 w-4 text-chai" strokeWidth={1.5} />
            <span>Supporting livelihoods, one product at a time.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-10"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 border border-foreground px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
            >
              Learn more about us
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </motion.div>
        </div>

        {/* Side column: image + belief text */}
        <div className="flex items-stretch">
          <div className="flex w-full flex-col justify-between border-l border-border/60 pl-8">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Artful arrangement of natural materials"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 18rem"
                />
              </div>
              <div className="space-y-2">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-foreground-muted/80">
                  What we believe
                </p>
                <p className="max-w-xs text-sm leading-relaxed text-foreground-muted">
                  Trade can be a force for restoration — for landscapes, for
                  crafts, and for livelihoods.
                </p>
              </div>
            </div>
            <div className="mt-10 h-[1px] w-24 bg-gradient-to-r from-foreground-muted/60 to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
