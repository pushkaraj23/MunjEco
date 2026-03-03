"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ClipboardList, FileText, ShieldCheck, BadgeDollarSign, Truck } from "lucide-react";
import { Badge } from "@/components/Badge";
import { DecoGraphic } from "@/components/DecoGraphic";
import { ProductGallery } from "@/components/ProductGallery";
import { EnquiryForm } from "@/components/EnquiryForm";
import type { Product } from "@/lib/types";

type ProductDetailContentProps = { product: Product };

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [30, -20]);

  const hasSpecs = product.specifications && Object.keys(product.specifications).length > 0;

  return (
    <main ref={ref} className="relative overflow-visible bg-background pt-28 pb-24 md:pt-36 md:pb-32">
      <DecoGraphic src="/graphics/img1.png" alt="" placement="bottom-left" size="md" />
      <div className="mx-auto max-w-6xl px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Back link - minimal, lots of space */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-foreground-muted transition-colors hover:text-primary"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={2}
            />
            Back to products
          </Link>
        </motion.div>

        {/* Two-column grid - generous gaps */}
        <div className="grid items-start gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          {/* Gallery - left, sticky */}
          <div className="lg:sticky lg:top-24">
            <ProductGallery name={product.name} images={product.images} />
          </div>

          {/* Info + specs + form - right, well-spaced */}
          <div className="flex flex-col gap-14 md:gap-16">
            {/* Badge + title + description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="accent-line-left"
            >
              <h1 className="font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
                {product.name}
              </h1>
              <p className="mt-6 max-w-lg text-base leading-[1.75] text-foreground-muted md:text-lg">
                {product.description}
              </p>
            </motion.section>

            {/* Specifications - clean cards */}
            {hasSpecs && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="mb-5 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h2 className="font-heading text-base font-semibold uppercase tracking-[0.15em] text-foreground">
                    Specifications
                  </h2>
                </div>
                <dl className="space-y-4">
                  {Object.entries(product.specifications!).map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-baseline justify-between gap-6 border-b border-border/50 pb-4 last:border-b-0 last:pb-0"
                    >
                      <dt className="text-sm text-foreground-muted">{k}</dt>
                      <dd className="text-right text-sm font-medium text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </motion.section>
            )}

            {/* Enquiry form - matches CTASection style */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.15, duration: 0.5 }}
              id="enquiry"
            >
              <div className="border border-border/70 bg-background-alt/95 px-8 py-10 md:px-10 md:py-12">
                <div className="mb-2 flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-foreground-muted">
                  <FileText className="h-4 w-4" strokeWidth={1.5} />
                  <span>Request a quote</span>
                </div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Get pricing for {product.name}
                </h2>
                <p className="mt-3 mb-6 text-sm leading-relaxed text-foreground-muted">
                  Share your requirements and we&apos;ll respond with pricing within 24–48 hours.
                </p>
                <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { icon: ShieldCheck, label: "Quality Assured" },
                    { icon: BadgeDollarSign, label: "Competitive Pricing" },
                    { icon: Truck, label: "Global Shipping" },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center gap-2 border-t border-border/60 pt-3"
                    >
                      <f.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
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
