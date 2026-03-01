"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import {
  Sprout,
  Factory,
  Award,
  Leaf,
  CheckCircle2,
} from "lucide-react";

const manufacturingItems = [
  "Responsible bamboo sourcing",
  "Custom logo and text engraving",
  "Quality assurance at each stage",
  "Eco-friendly, reusable, biodegradable",
];

const ACCENT_SHADOWS: Record<string, string> = {
  matcha: "0 0 60px -15px rgba(128,150,113,0.2)",
  terracotta: "0 0 60px -15px rgba(200,107,59,0.2)",
  pistache: "0 0 60px -15px rgba(162,183,154,0.2)",
  turmeric: "0 0 60px -15px rgba(212,160,55,0.2)",
  chai: "0 0 60px -15px rgba(210,171,128,0.18)",
};

function SectionCard({
  children,
  accent,
  barClass,
  pattern,
}: {
  children: React.ReactNode;
  accent: keyof typeof ACCENT_SHADOWS;
  barClass: string;
  pattern?: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 px-6 py-10 backdrop-blur-2xl md:rounded-[2rem] md:px-10 md:py-12"
      style={{ boxShadow: ACCENT_SHADOWS[accent] }}
    >
      <div className={`absolute left-0 top-0 h-1 w-20 rounded-r-full ${barClass}`} />
      <div className={`absolute right-0 bottom-0 h-1 w-24 rounded-l-full opacity-60 ${barClass}`} />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 md:rounded-[2rem]" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 via-transparent to-transparent md:rounded-[2rem]" />
      {pattern && (
        <div className={`pointer-events-none absolute inset-0 rounded-3xl opacity-30 md:rounded-[2rem] ${pattern}`} />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

export function AboutPageContent() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 0.85]);
  const headerY = useTransform(scrollYProgress, [0.05, 0.3], [40, -20]);
  const card1Y = useTransform(scrollYProgress, [0.1, 0.35], [45, -15]);
  const card2Y = useTransform(scrollYProgress, [0.18, 0.42], [50, -18]);
  const card3Y = useTransform(scrollYProgress, [0.26, 0.5], [48, -20]);
  const card4Y = useTransform(scrollYProgress, [0.34, 0.58], [45, -15]);
  const card5Y = useTransform(scrollYProgress, [0.42, 0.66], [50, -18]);

  return (
    <main ref={ref} className="relative overflow-hidden pt-24 pb-12 md:pb-14">
      {/* Page-level ambient glows */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute left-1/4 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-matcha/22 blur-[130px]"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-chai/18 blur-[100px]"
      />

      <div className="relative mx-auto px-6">
        {/* Hero header - matcha accent */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-matcha/30 bg-matcha/15 px-4 py-2 backdrop-blur-sm">
            <Sprout className="h-5 w-5 text-matcha" strokeWidth={1.5} />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/90">
              Our Purpose
            </span>
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            About MunjEco Global
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Natural • Responsible • Daily Use Products. Eco-friendly gifting.
          </p>
          <div className="divider-rangoli mx-auto mt-6 w-24 text-matcha/50" />
        </motion.div>

        {/* Our Story - terracotta accent */}
        <motion.div
          style={{ y: card1Y }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <SectionCard
            accent="terracotta"
            barClass="bg-terracotta/50"
            pattern="pattern-dot-terracotta"
          >
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Our Story
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              MunjEco Global was founded on the belief that premium manufacturing and
              sustainability can go hand in hand. We specialize in bamboo daily-use
              products—pens, stationery, bottles, and cups—crafted for durability and
              elegance. Better habits for better nature. Our clients include corporates,
              gifting partners, and retail brands who demand quality and responsible
              sourcing.
            </p>
          </SectionCard>
        </motion.div>

        {/* Manufacturing Process - pistache accent */}
        <motion.div
          style={{ y: card2Y }}
          id="manufacturing"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <SectionCard
            accent="pistache"
            barClass="bg-pistache/50"
            pattern="pattern-jali"
          >
            <div className="mb-4 flex items-center gap-2">
              <Factory className="h-6 w-6 text-pistache" strokeWidth={1.5} />
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Manufacturing Process
              </h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              Every product passes through stringent quality checks. From raw bamboo
              selection to finishing, we use eco-friendly treatments and precision
              machinery. Our facility is equipped for bulk production while
              maintaining consistency across batches.
            </p>
            <ul className="mt-6 space-y-3">
              {manufacturingItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-white/85"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-pistache"
                    strokeWidth={1.5}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </SectionCard>
        </motion.div>

        {/* Certifications - turmeric accent */}
        <motion.div
          style={{ y: card3Y }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <SectionCard
            accent="turmeric"
            barClass="bg-turmeric/50"
            pattern="pattern-dot-rangoli"
          >
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-6 w-6 text-turmeric" strokeWidth={1.5} />
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Certifications
              </h2>
            </div>
            <p className="text-base leading-relaxed text-white/85 md:text-lg">
              We hold certifications for sustainable sourcing, manufacturing
              standards, and export compliance. Our products meet international
              benchmarks for durability and environmental impact.
            </p>
          </SectionCard>
        </motion.div>

        {/* Sustainability Commitment - chai accent */}
        <motion.div
          style={{ y: card4Y }}
          id="sustainability"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <SectionCard
            accent="chai"
            barClass="bg-chai/50"
            pattern="pattern-paisley-subtle"
          >
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-chai" strokeWidth={1.5} />
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Sustainability Commitment
              </h2>
            </div>
            <p className="text-base leading-relaxed text-white/85 md:text-lg">
              Bamboo regenerates rapidly. We partner with certified growers,
              minimize waste in production, and ensure our supply chain is
              transparent. Manufacturing without compromise—for people and planet.
            </p>
          </SectionCard>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          style={{ y: card5Y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <CTASection
            title="Partner With Us"
            subtitle="For bulk orders, corporate gifting, or custom engraving."
            primaryLabel="Get in Touch"
            primaryHref="/contact"
          />
        </motion.div>
      </div>
    </main>
  );
}
