"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

const compliancePoints = [
  "Fully compliant with global trade and export regulations.",
  "Accurate HS code classification and customs documentation tailored to each destination.",
  "ISPM‑15 certified pallets for secure sea freight worldwide.",
  "Crafted from natural, non‑toxic, and biodegradable materials.",
  "Complete export documentation support: Commercial Invoice, Packing List, and Certificate of Origin (where required).",
  "FSC, ISO, and other certifications available upon request, aligned with buyer requirements and manufacturer capabilities.",
];

export function ComplianceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-border/70 bg-background-alt/70 backdrop-blur-sm"
    >
      <DecoGraphic
        src="/graphics/img4-v0.png"
        alt=""
        placement="top-right"
        size="md"
        className="opacity-30"
      />
      <DecoGraphic
        src="/graphics/img2-v0.png"
        alt=""
        placement="bottom-left"
        size="md"
        className="opacity-20"
      />
      <div className="relative grid gap-8 px-6 py-10 sm:px-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:px-10 md:py-12 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted sm:text-sm">
            Global certifications & export compliance
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Every shipment documented, compliant and traceable.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground-muted md:text-base">
            We partner with manufacturers who understand global standards, and we
            handle the documentation and checks so every consignment leaves India
            ready for customs, audits and long‑term partnerships.
          </p>

          <ul className="mt-6 space-y-3">
            {compliancePoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm text-foreground-muted"
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

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border/70 bg-background shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1709804945989-c8be542e04db?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Export documents, certifications and compliant packaging"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
          </div>

          <div className="absolute -bottom-4 left-4 rounded-lg border border-border/70 bg-background-alt/90 px-4 py-3 shadow-card">
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
  );
}

