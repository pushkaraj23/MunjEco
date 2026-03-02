"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, BadgeDollarSign, Truck, Sparkles } from "lucide-react";
import { EnquiryForm } from "./EnquiryForm";

const features = [
  { label: "Quality Assured", icon: ShieldCheck },
  { label: "Competitive Pricing", icon: BadgeDollarSign },
  { label: "Global Shipping", icon: Truck },
];

type CTASectionProps = {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  subtitle = "Whether you are a distributor, retailer, or corporate buyer, we're here to support your sustainable sourcing goals.",
}: CTASectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.12, 0.42], [0, 0.9]);
  const imageParallax = useTransform(scrollYProgress, [0.2, 0.6], [0, -40]);
  const formScale = useTransform(scrollYProgress, [0.15, 0.5], [0.98, 1]);
  const featureOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden px-4 py-16 md:px-6 md:py-24 lg:py-28 bg-gradient-to-b from-green-200 via-green-100 to-white">
      {/* Rich ambient glows - terracotta section accent */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute -left-20 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-terracotta/25 blur-[150px]"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-chai/22 blur-[120px]"
      />
      <div className="pointer-events-none absolute right-1/3 top-1/4 h-72 w-72 rounded-full bg-terracotta/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-black/25 shadow-[0_0_80px_-20px_rgba(128,150,113,0.2),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl md:rounded-[2.5rem] lg:grid lg:grid-cols-12 lg:gap-0">
          {/* Subtle inner highlights */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent md:rounded-[2.5rem]" />
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Left panel - Hero image & content */}
          <div className="relative flex min-h-[320px] flex-col justify-end p-8 md:min-h-[420px] md:p-12 lg:col-span-7 lg:justify-between lg:p-14">
            {/* Product image with parallax */}
            <motion.div
              style={{ y: imageParallax }}
              className="absolute inset-0 -z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                alt="Eco-friendly products - bamboo toothbrushes, wooden combs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent lg:from-black/70" />
            </motion.div>

            {/* Content overlay */}
            <div className="relative z-10 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 text-turmeric" strokeWidth={1.5} />
                <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/95">
                  Partner With Us
                </span>
              </motion.div>

              <h2 className="font-heading text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                {subtitle}
              </p>

              {/* Feature badges - elegant strip */}
              <motion.div
                style={{ opacity: featureOpacity }}
                className="flex flex-wrap gap-4 pt-4"
              >
                {features.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-terracotta/50 hover:bg-terracotta/20"
                  >
                    <f.icon
                      className="h-5 w-5 text-terracotta/90"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-medium text-white/95">
                      {f.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right panel - Form in cream card */}
          <motion.div
            style={{ scale: formScale }}
            className="relative flex items-center justify-center p-6 md:p-10 lg:col-span-5 lg:p-12"
          >
            {/* Form card - cream/vanilla for premium contrast */}
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-almond/60 bg-cream p-8 shadow-[0_25px_80px_-20px_rgba(74,63,53,0.35),0_0_0_1px_rgba(229,224,216,0.5)] md:rounded-3xl md:p-10">
              <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-terracotta/25 to-transparent" />
              <div className="absolute bottom-0 left-0 h-20 w-20 bg-gradient-to-tr from-terracotta/15 to-transparent" />
              <div className="pattern-dot-terracotta absolute inset-0 rounded-2xl opacity-30 md:rounded-3xl" />

              <div className="relative">
                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    Request a Quote
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted">
                    Share your requirements and we&apos;ll respond within 24–48
                    hours.
                  </p>
                </div>

                <EnquiryForm theme="light" compact />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
