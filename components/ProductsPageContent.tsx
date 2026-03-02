"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductsClient } from "./ProductsClient";
import type { Product } from "@/lib/types";

type ProductsPageContentProps = {
  products: Product[];
};

export function ProductsPageContent({ products }: ProductsPageContentProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0.05, 0.28], [40, -20]);
  const gridY = useTransform(scrollYProgress, [0.15, 0.45], [45, -20]);

  return (
    <main ref={ref} className="relative overflow-hidden pt-28 pb-12 md:pb-16">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header + search */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted">
              Product catalogue
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              All products
            </h1>
          </div>
          <div>
            <ProductsClient />
          </div>
        </motion.div>

        {/* Product grid */}
        <motion.div
          style={{ y: gridY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          className="relative"
        >
          <ProductGrid products={products} />
        </motion.div>
      </div>
    </main>
  );
}
