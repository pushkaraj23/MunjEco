"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

const compliancePoints = [
  "Fully compliant with global trade and export regulations",
  "Accurate HS code classification and customs documentation tailored to each destination",
  "ISPM‑15 certified pallets for secure sea freight worldwide",
  "Crafted from natural, non-toxic, and biodegradable materials, reflecting our commitment to sustainability",
  "Complete export documentation support, including Commercial Invoice, Packing List, and Certificate of Origin (if required)",
  "FSC, ISO, and other certifications available upon request, aligned with buyer requirements and manufacturer capabilities",
];

export function ComplianceSection() {
  return (
    <section className="relative overflow-visible bg-primary/10 py-10 h-fit">
      <DecoGraphic
        src="/graphics/img4-v0.png"
        alt=""
        placement="top-right"
        size="md"
        className="opacity-30 max-sm:hidden"
      />
      <DecoGraphic
        src="/graphics/img2-v0.png"
        alt=""
        placement="bottom-left"
        size="md"
        className="opacity-20"
      />
      <div className="pointer-events-none w-full left-0 absolute inset-x-16 top-0 h-24 bg-gradient-to-b from-primary/12 to-transparent" />

      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=""
        >
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:py-12 md:items-center">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted sm:text-sm">
                Certifications & Export Compliance
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-3xl">
                Certifications & Compliance
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-muted md:text-base">
                We collaborate with trusted manufacturing partners who follow responsible sourcing practices and established production standards. Our products are designed to meet global expectations for quality, durability, and environmental responsibility.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-foreground-muted md:text-base">
                We remain committed to continuous improvement and compliance with relevant international guidelines for sustainable trade.
              </p>

              <ul className="mt-6 space-y-3">
                {compliancePoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-foreground-muted md:text-base"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      strokeWidth={1.7}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-w-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border/70 bg-background shadow-card">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FWhy%20Choose%20Us%20Page%2FCertifications%20%26%20Compliance.jpg?alt=media&token=6a4ca437-4ca0-4472-a7c7-337afa36988a"
                  alt="Export documents, certifications and compliant packaging"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-[80%] bottom-4 rounded-lg border border-border/70 bg-background-alt/90 px-4 py-3 shadow-card sm:w-[80%]">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-foreground-muted">
                  Documentation checklist
                </p>
                <p className="mt-1 text-xs text-foreground">
                  HS codes, invoices, packing lists and certificates aligned with your
                  destination market.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
