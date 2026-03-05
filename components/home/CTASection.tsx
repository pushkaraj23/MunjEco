"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, BadgeDollarSign, Truck, Sparkles } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { EnquiryForm } from "../shared/EnquiryForm";

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
    <section
      ref={ref}
      className="relative overflow-visible border-t border-border/70 bg-background px-8 py-24 sm:px-10 md:px-12 md:py-28 lg:px-16 xl:px-20"
    >
      <DecoGraphic src="/graphics/img2.png" alt="" placement="bottom-left" size="lg" />
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-terracotta/18 to-transparent"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute inset-x-16 bottom-0 h-24 bg-gradient-to-t from-chai/14 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl">
        <div className="flex flex-col gap-10 lg:gap-12">
          {/* Top: editorial text block */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-foreground-muted sm:text-sm"
            >
              <Sparkles className="h-4 w-4 text-foreground-muted" strokeWidth={1.5} />
              <span>Partner with us</span>
            </motion.div>

            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">
              {subtitle}
            </p>

            {/* Feature strip */}
            <motion.div
              style={{ opacity: featureOpacity }}
              className="mt-8 grid gap-4 sm:grid-cols-3"
            >
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2 border-t border-border/60 pt-3"
                >
                  <f.icon
                    className="h-4 w-4 text-terracotta"
                    strokeWidth={1.5}
                  />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                    {f.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom: enquiry form, full-width card */}
          <motion.div
            style={{ scale: formScale, y: imageParallax }}
            className="relative"
          >
            <div className="relative w-full border mt-4 border-border/70 bg-background-alt/55 backdrop-blur-sm px-6 py-8 sm:px-8 sm:py-9">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Request a quote
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  Share your requirements and we&apos;ll respond within 24–48
                  hours.
                </p>
              </div>

              <EnquiryForm theme="light" compact />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
