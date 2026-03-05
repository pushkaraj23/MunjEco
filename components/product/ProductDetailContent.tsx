"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ClipboardList, FileText, ShieldCheck, BadgeDollarSign, Truck, ChevronDown, Mail, Phone, Share2 } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { ProductGallery } from "@/components/product/ProductGallery";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import type { Product } from "@/lib/types";

type ProductDetailContentProps = { product: Product };

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const ref = useRef<HTMLElement>(null);
  const [descOpen, setDescOpen] = useState(false);
  const [specsOpen, setSpecsOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [30, -20]);

  const hasSpecs = product.specifications && Object.keys(product.specifications).length > 0;

  return (
    <main ref={ref} className="relative overflow-visible bg-background pt-20 md:pt-24 pb-24 md:pb-32">
      <DecoGraphic src="/graphics/img1.png" alt="" placement="bottom-left" size="md" />
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-sm:mt-2"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-foreground-muted transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
            Back to products
          </Link>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          {/* Left: boxed image grid */}
          <div className="lg:sticky lg:top-24">
            <ProductGallery name={product.name} images={product.images} />
          </div>

          {/* Right: product info - smaller text, collapsible description */}
          <div className="flex flex-col gap-6">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="accent-line-left"
            >
              <h1 className="font-heading text-2xl font-semibold leading-[1.25] tracking-tight text-foreground md:text-3xl lg:text-[1.75rem]">
                {product.name}
              </h1>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-foreground-muted">
                SKU: {product.id.toUpperCase().slice(0, 8)}
              </p>
              <p className="mt-1 text-xs text-foreground-muted">
                Inclusive of all taxes. Export-ready packaging.
              </p>
            </motion.section>

            <div className="flex flex-col gap-3">
              <Link
                href="#enquiry"
                className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-primary px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary-dark"
              >
                Enquire
              </Link>
              <p className="text-center text-[0.65rem] uppercase tracking-wider text-foreground-muted">
                Bulk quotes within 24–48 hours. Minimum order applies.
              </p>
            </div>

            {/* Collapsible Description */}
            <section className="border-t border-border/70 pt-4">
              <button
                type="button"
                onClick={() => setDescOpen((o) => !o)}
                className="flex w-full items-center justify-between gap-2 text-left"
                aria-expanded={descOpen}
              >
                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-foreground">
                  Description
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-foreground-muted transition-transform ${descOpen ? "rotate-180" : ""}`}
                  strokeWidth={2}
                />
              </button>
              {descOpen && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 text-sm leading-relaxed text-foreground-muted"
                >
                  {product.description}
                </motion.p>
              )}
            </section>

            {/* Collapsible Specifications */}
            {hasSpecs && (
              <section className="border-t border-border/70 pt-4">
                <button
                  type="button"
                  onClick={() => setSpecsOpen((o) => !o)}
                  className="flex w-full items-center justify-between gap-2 text-left"
                  aria-expanded={specsOpen}
                >
                  <span className="flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-foreground">
                    <ClipboardList className="h-3.5 w-3.5 text-primary" strokeWidth={1.5} />
                    Specifications
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-foreground-muted transition-transform ${specsOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </button>
                {specsOpen && (
                  <motion.dl
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 space-y-2"
                  >
                    {Object.entries(product.specifications!).map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 border-b border-border/40 pb-2 text-xs last:border-b-0">
                        <dt className="text-foreground-muted">{k}</dt>
                        <dd className="font-medium text-foreground">{v}</dd>
                      </div>
                    ))}
                  </motion.dl>
                )}
              </section>
            )}

          <div className="flex items-center gap-4 border-t border-border/70 pt-4 text-xs text-foreground-muted sm:text-sm">
              <span className="uppercase tracking-wider">Share</span>
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(typeof window !== "undefined" ? window.location.href : "")}
                className="inline-flex items-center gap-1 hover:text-primary"
                aria-label="Copy link"
              >
                <Share2 className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Need help - smaller text */}
            <section className="border-t border-border/70 pt-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-foreground">
                Need help? Mon–Sat: 11:00 AM – 7:00 PM
              </p>
              <div className="mt-2 flex flex-col gap-1 text-xs text-foreground-muted">
                <a href="tel:+919270952447" className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                  +91 92709 52447
                </a>
                <a href="mailto:munjecoglobal@gmail.com" className="inline-flex items-center gap-2 hover:text-primary">
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                  munjecoglobal@gmail.com
                </a>
              </div>
            </section>

            {/* Enquiry form - compact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              id="enquiry"
            >
              <div className="border border-border/70 bg-background-alt/95 px-6 py-8">
                <div className="mb-2 flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-foreground-muted">
                  <FileText className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Request a quote
                </div>
                <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                  Get pricing for {product.name}
                </h2>
                <p className="mt-2 mb-4 text-xs leading-relaxed text-foreground-muted">
                  Share your requirements. We&apos;ll respond within 24–48 hours.
                </p>
                <div className="mb-6 grid grid-cols-3 gap-2 border-t border-border/60 pt-3">
                  {[
                    { icon: ShieldCheck, label: "Quality Assured" },
                    { icon: BadgeDollarSign, label: "Competitive Pricing" },
                    { icon: Truck, label: "Global Shipping" },
                  ].map((f) => (
                    <div key={f.label} className="flex items-center gap-1.5">
                      <f.icon className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={1.5} />
                      <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-foreground">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
                <EnquiryForm defaultProduct={product.name} compact theme="light" />
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </main>
  );
}
