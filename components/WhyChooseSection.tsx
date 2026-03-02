"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Package,
  Leaf,
  Tags,
  Handshake,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Ethical & Responsible Sourcing",
    desc: "We source directly from verified manufacturers and artisan groups following ethical and sustainable practices.",
  },
  {
    icon: Package,
    title: "Export-Ready Quality",
    desc: "Products are selected, packed, and documented to meet international export standards.",
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    desc: "Plastic-free, biodegradable materials aligned with EU & UK sustainability goals.",
  },
  {
    icon: Tags,
    title: "Flexible Bulk & Private Label",
    desc: "Bulk supply, customization, and private labeling available based on buyer needs.",
  },
  {
    icon: Handshake,
    title: "Transparent & Reliable",
    desc: "Clear pricing, timely delivery, and honest communication — no surprises.",
  },
];

const CENTER_IMAGE = "/why-choose-us.png";

export function WhyChooseSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0.06, 0.35], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.12, 0.42], [0, 0.9]);
  const headerY = useTransform(scrollYProgress, [0.08, 0.35], [45, -25]);
  const card0Y = useTransform(scrollYProgress, [0.12, 0.42], [40, -15]);
  const card1Y = useTransform(scrollYProgress, [0.16, 0.46], [45, -12]);
  const card2Y = useTransform(scrollYProgress, [0.2, 0.5], [38, -18]);
  const card3Y = useTransform(scrollYProgress, [0.24, 0.54], [42, -14]);
  const card4Y = useTransform(scrollYProgress, [0.28, 0.58], [40, -16]);
  const cardTransforms = [card0Y, card1Y, card2Y, card3Y, card4Y];

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-16 md:py-24 bg-emerald-950">
      {/* Rich ambient glows - matcha section accent */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute left-1/4 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-matcha/28 blur-[150px]"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute bottom-1/4 right-1/6 h-80 w-80 rounded-full bg-pistache/22 blur-[120px]"
      />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-matcha/15 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Why Choose MunjEco Global
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Why Global Buyers Work With Us
          </h2>
          <div className="divider-rangoli mx-auto mt-6 w-16 text-matcha/50" />
        </motion.div>

        {/* Center image with cards surrounding it */}
        <div className="relative min-h-[520px] md:min-h-[600px]">
          {/* Absolute background image - faded, enlarged, pure, no crop */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src={CENTER_IMAGE}
              alt=""
              width={800}
              height={600}
              className="h-auto w-[140%] max-w-none object-contain opacity-25 md:w-[120%]"
              sizes="800px"
              unoptimized
              aria-hidden
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3 md:gap-8">
            {/* Row 1 - top cards */}
            <motion.div
              style={{ y: cardTransforms[0] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-1 md:row-span-1 md:flex md:items-end md:justify-end"
            >
              <BenefitCard benefit={benefits[0]} />
            </motion.div>
            <div className="hidden md:block md:col-span-1 md:row-span-1" />
            <motion.div
              style={{ y: cardTransforms[1] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-1 md:row-span-1 md:flex md:items-end md:justify-start"
            >
              <BenefitCard benefit={benefits[1]} />
            </motion.div>

            {/* Row 2 - left card | center image | right card */}
            <motion.div
              style={{ y: cardTransforms[2] }}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-1 md:row-span-1 md:flex md:items-center md:justify-end"
            >
              <BenefitCard benefit={benefits[2]} />
            </motion.div>
            <div className="md:col-span-1 md:row-span-1" />
            <motion.div
              style={{ y: cardTransforms[3] }}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-1 md:row-span-1 md:flex md:items-center md:justify-start"
            >
              <BenefitCard benefit={benefits[3]} />
            </motion.div>

            {/* Row 3 - bottom card */}
            <div className="hidden md:block md:col-span-1 md:row-span-1" />
            <motion.div
              style={{ y: cardTransforms[4] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-1 md:row-span-1 md:flex md:items-start md:justify-center"
            >
              <BenefitCard benefit={benefits[4]} />
            </motion.div>
            <div className="hidden md:block md:col-span-1 md:row-span-1" />
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center font-heading text-lg italic text-white/90 md:text-xl"
        >
          We don&apos;t just ship products — we build long-term, trust-based
          trade relationships.
        </motion.p>
      </div>
    </section>
  );
}

function BenefitCard({ benefit }: { benefit: (typeof benefits)[number] }) {
  const Icon = benefit.icon;
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl border border-white/25 bg-black/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-black/50 hover:shadow-[0_0_40px_-15px_rgba(128,150,113,0.25)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent" />
      <div className="relative flex flex-col">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/25 bg-white/15 transition-colors group-hover:border-matcha/50 group-hover:bg-matcha/25 group-hover:shadow-[0_0_24px_rgba(128,150,113,0.2)]">
          <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
        </div>
        <h3 className="font-heading text-base font-semibold text-white md:text-lg">
          {benefit.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/95">
          {benefit.desc}
        </p>
      </div>
    </motion.div>
  );
}
