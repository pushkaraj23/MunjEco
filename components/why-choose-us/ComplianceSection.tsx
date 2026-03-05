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
    <section className="relative overflow-visible bg-background pb-20">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative border border-border/70 bg-background-alt"
        >
          <DecoGraphic
            src="/graphics/img4-v1.png"
            alt=""
            placement="bottom-right"
            size="md"
            className="opacity-25"
          />
          <div className="px-6 py-10 sm:px-8 md:px-10 md:py-12">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted sm:text-sm">
                Global Certifications & Export Compliance
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Every shipment, export‑ready and compliant.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] md:items-start">
            <ul className="space-y-3">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

