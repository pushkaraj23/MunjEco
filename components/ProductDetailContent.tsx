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

  const headerY = useTransform(scrollYProgress, [0, 0.3], [30, -20]);

  const hasSpecs = product.specifications && Object.keys(product.specifications).length > 0;

  return (
    <main ref={ref} className="relative bg-background pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Back link */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 max-sm:mt-2"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground-muted transition-colors hover:text-primary"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={2}
            />
            Back to products
          </Link>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Gallery - left, sticky */}
          <div className="lg:col-span-3 lg:sticky lg:top-16">
            <ProductGallery name={product.name} images={product.images} />
          </div>

          {/* Info + specs + form - right */}
          <div className="lg:col-span-2 space-y-10">
            {/* Badge + title + description */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-border pb-8"
            >
              <Badge
                variant="accent"
                className="mb-4 border-primary/30 bg-primary/10 text-primary-dark"
              >
                {product.category}
              </Badge>
              <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted md:text-lg">
                {product.description}
              </p>
            </motion.section>

            {/* Specifications */}
            {hasSpecs && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="border-b border-border pb-8"
              >
                <div className="mb-4 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h2 className="font-heading text-lg font-semibold text-foreground">
                    Specifications
                  </h2>
                </div>
                <dl className="space-y-3">
                  {Object.entries(product.specifications!).map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between gap-4 border-b border-border/60 pb-2 last:border-b-0"
                    >
                      <dt className="text-sm text-foreground-muted">{k}</dt>
                      <dd className="text-sm font-medium text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </motion.section>
            )}

            {/* Enquiry form */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              id="enquiry"
            >
              <div className="w-full border border-border bg-background-alt px-6 py-7 md:px-8 md:py-8">
                <div className="mb-6 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    Request a quote
                  </h2>
                </div>
                <p className="mb-4 text-sm text-foreground-muted">
                  Share your requirements and we&apos;ll respond with pricing.
                </p>
                <EnquiryForm defaultProduct={product.name} compact theme="light" />
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </main>
  );
}
