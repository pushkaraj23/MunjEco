"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ClipboardList, FileText } from "lucide-react";
import { Badge } from "@/components/Badge";
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

  const glow1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 0.85]);

  const hasSpecs = product.specifications && Object.keys(product.specifications).length > 0;

  return (
    <main ref={ref} className="relative pt-24 md:pt-32 pb-12 md:pb-14">
      {/* Parallax ambient glows - chai/terracotta accent */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute left-1/3 top-1/4 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chai/22 blur-[130px]"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-terracotta/18 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Back link - above grid with good contrast, clear of navbar */}
        <div className="mb-6 max-sm:mt-2">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15 hover:text-terracotta"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
            Back to Products
          </Link>
        </div>

        {/* Two-column grid - items-start ensures top alignment */}
        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Gallery - left, sticky - no parallax to preserve sticky behavior */}
          <div className="lg:col-span-3 lg:sticky lg:top-12">
            <ProductGallery name={product.name} images={product.images} />
          </div>

          {/* Info + specs + form - right - aligned to top with gallery */}
          <div className="lg:col-span-2 space-y-8">
            {/* Badge + title + description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 px-6 py-8 backdrop-blur-2xl md:rounded-[2rem] md:px-8 md:py-10"
              style={{ boxShadow: "0 0 60px -15px rgba(210,171,128,0.18)" }}
            >
              <div className="absolute left-0 top-0 h-1 w-20 rounded-r-full bg-chai/50" />
              <div className="absolute right-0 bottom-0 h-1 w-24 rounded-l-full bg-terracotta/40 opacity-60" />
              <div className="pattern-paisley-subtle pointer-events-none absolute inset-0 rounded-3xl opacity-30 md:rounded-[2rem]" />
              <div className="relative">
                <Badge variant="accent" className="mb-4 border-white/30 bg-turmeric/25 text-white">
                  {product.category}
                </Badge>
                <h1 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-white/95 md:text-lg">
                  {product.description}
                </p>
              </div>
            </motion.div>

            {/* Specifications */}
            {hasSpecs && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 px-6 py-8 backdrop-blur-2xl md:rounded-[2rem] md:px-8 md:py-10"
                style={{ boxShadow: "0 0 60px -15px rgba(128,150,113,0.15)" }}
              >
                <div className="absolute left-0 top-0 h-1 w-16 rounded-r-full bg-matcha/50" />
                <div className="pattern-indian-border pointer-events-none absolute inset-0 rounded-3xl opacity-15 md:rounded-[2rem]" />
                <div className="relative flex items-center gap-2 mb-4">
                  <ClipboardList className="h-5 w-5 text-pistache" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Specifications
                  </h3>
                </div>
                <dl className="space-y-3">
                  {Object.entries(product.specifications!).map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between gap-4 border-b border-white/10 pb-2"
                    >
                      <dt className="text-sm text-white/85">{k}</dt>
                      <dd className="font-medium text-white/95">{v}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            )}

            {/* Enquiry form - cream card with terracotta accent */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              id="enquiry"
            >
              <div className="relative w-full overflow-hidden rounded-2xl border border-almond/60 bg-cream p-6 shadow-[0_25px_80px_-20px_rgba(74,63,53,0.35),0_0_0_1px_rgba(229,224,216,0.5)] md:rounded-3xl md:p-8">
                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-terracotta/25 to-transparent" />
                <div className="absolute bottom-0 left-0 h-20 w-20 bg-gradient-to-tr from-terracotta/15 to-transparent" />
                <div className="pattern-dot-terracotta pointer-events-none absolute inset-0 rounded-2xl opacity-30 md:rounded-3xl" />
                <div className="relative flex items-center gap-2 mb-6">
                  <FileText className="h-5 w-5 text-terracotta" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    Request a Quote
                  </h3>
                </div>
                <p className="mb-4 text-sm text-foreground-muted">
                  Share your requirements and we&apos;ll respond with pricing.
                </p>
                <EnquiryForm defaultProduct={product.name} compact theme="light" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
