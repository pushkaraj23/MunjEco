"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Package,
  Globe2,
  Tags,
  Handshake,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { CTASection } from "@/components/home/CTASection";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Ethical & Responsible Sourcing",
    body: "We source our products directly from verified Indian manufacturers and artisan clusters that follow ethical, sustainable, and responsible practices. Every product reflects respect for people, craftsmanship, and the environment.",
  },
  {
    icon: Leaf,
    title: "Sustainable by Design",
    body: "From wooden combs and bamboo toothbrushes to eco‑friendly travel kits and handicrafts, our product range is designed to reduce plastic use and promote conscious living.",
  },
  {
    icon: Package,
    title: "Export‑Ready Quality",
    body: "All our products are carefully selected and packed to meet international export standards, with consistent quality, safe packaging, and clear documentation.",
  },
  {
    icon: Globe2,
    title: "Global Trade Expertise",
    body: "We understand Incoterms (FOB / CIF), customs documentation, and buyer expectations across UK, EU, and other global markets — helping you navigate trade with confidence.",
  },
  {
    icon: Tags,
    title: "Flexible Bulk & Private Label",
    body: "Bulk quantities, customized packaging, or private labelling — we offer flexible solutions tailored to your brand and business needs.",
  },
  {
    icon: Handshake,
    title: "Transparent & Reliable Partnerships",
    body: "Long‑term relationships built on clear communication, transparent pricing, and timely delivery. You know exactly what you are paying for and when you will receive it.",
  },
  {
    icon: Sparkles,
    title: "Rooted in Indian Craftsmanship",
    body: "Our handicrafts and natural products celebrate the rich heritage and skills of Indian artisans, supporting local communities while bringing meaningful products to global markets.",
  },
];

const compliancePoints = [
  "Fully compliant with global trade and export regulations.",
  "Accurate HS code classification and customs documentation tailored to each destination.",
  "ISPM‑15 certified pallets for secure sea freight worldwide.",
  "Crafted from natural, non‑toxic, and biodegradable materials.",
  "Complete export documentation support: Commercial Invoice, Packing List, and Certificate of Origin (where required).",
  "FSC, ISO, and other certifications available upon request, aligned with buyer requirements and manufacturer capabilities.",
];

export function WhyChoosePageContent() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0.05, 0.3], [40, -10]);
  const gridY = useTransform(scrollYProgress, [0.12, 0.4], [45, -15]);
  const promiseY = useTransform(scrollYProgress, [0.2, 0.5], [40, -10]);
  const complianceY = useTransform(scrollYProgress, [0.3, 0.6], [45, -15]);

  return (
    <main
      ref={ref}
      className="relative overflow-visible bg-background pt-28 pb-20 md:pt-32 md:pb-24"
    >
      <DecoGraphic src="/graphics/img1.png" alt="" placement="top-left" size="lg" />
      <DecoGraphic src="/graphics/img5.png" alt="" placement="top-right" size="md" />
      <div className="mx-auto max-w-6xl px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Header row */}
        <motion.section
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-end"
        >
          <div className="accent-line-left">
            <p className="mb-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted">
              Why choose MunjEco Global
            </p>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Why global buyers work with us.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-muted md:text-base">
              Natural, responsible and export‑ready — MunjEco Global connects Indian
              craftsmanship and sustainable products with buyers across the world.
            </p>
          </div>
          <div className="relative aspect-[5/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Curated eco-friendly products styled for buyers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.section>

        {/* Reasons grid */}
        <motion.section
          style={{ y: gridY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.04,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex h-full flex-col border border-border/70 bg-background-alt/70 px-5 py-5 shadow-card transition-colors hover:border-primary/70"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center border border-primary/20 bg-primary/5 text-primary">
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </div>
                    <h2 className="font-heading text-sm font-semibold text-foreground">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {item.body}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        {/* Our Promise band */}
        <motion.section
          style={{ y: promiseY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 overflow-hidden border border-border/70 bg-primary-dark text-white"
        >
          <div className="relative px-6 py-10 sm:px-8 md:px-10 md:py-12">
            <DecoGraphic
              src="/graphics/img1.png"
              alt=""
              placement="bottom-right"
              size="md"
              className="opacity-25"
            />
            <div className="relative max-w-3xl">
              <p className="mb-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/80">
                Our Promise
              </p>
              <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                Quality products. Ethical sourcing. Sustainable choices.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                A reliable Indian export partner you can trust — committed to
                manufacturing‑grade quality, responsible supply chains, and
                long‑term relationships with our buyers.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Compliance section */}
        <motion.section
          style={{ y: complianceY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 border border-border/70 bg-background-alt px-6 py-10 sm:px-8 md:px-10 md:py-12"
        >
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted">
                Global Certifications & Export Compliance
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Every shipment, export‑ready and compliant.
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-start">
            <ul className="space-y-3">
              {compliancePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-foreground-muted">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    strokeWidth={1.7}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 md:mt-0">
              <div className="relative aspect-[4/3] overflow-hidden border border-border/70 bg-background shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1709804945989-c8be542e04db?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Export documents and certifications neatly arranged"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Page CTA */}
      </div>

      <CTASection
        title="Ready to partner with an ethical Indian export house?"
        subtitle="Tell us what you&apos;re looking for — bulk products, private label, or custom gifting — and we&apos;ll help you build a reliable, sustainable supply line from India."
      />

      {/* Testimonials strip */}
      <TestimonialsSection />
    </main>
  );
}

