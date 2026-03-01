"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Package } from "lucide-react";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductsClient } from "./ProductsClient";
import type { Product } from "@/lib/types";

type ProductsPageContentProps = {
  products: Product[];
  categories: string[];
};

export function ProductsPageContent({ products, categories }: ProductsPageContentProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.12, 0.4], [0, 0.85]);
  const headerY = useTransform(scrollYProgress, [0.05, 0.28], [40, -20]);
  const filtersY = useTransform(scrollYProgress, [0.08, 0.32], [35, -15]);
  const gridY = useTransform(scrollYProgress, [0.15, 0.45], [45, -20]);

  return (
    <main ref={ref} className="relative overflow-hidden pt-32 pb-12 md:pb-14">
      {/* Parallax ambient glows - turmeric section accent */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute left-1/4 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-turmeric/20 blur-[130px]"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-chai/18 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Filters - glass card with pistache accent */}
        <motion.div
          style={{ y: filtersY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/30 px-6 py-5 backdrop-blur-2xl md:rounded-3xl md:px-8 md:py-6"
            style={{ boxShadow: "0 0 50px -15px rgba(162,183,154,0.18)" }}
          >
            <div className="absolute left-0 top-0 h-1 w-16 rounded-r-full bg-pistache/50" />
            <div className="absolute right-0 bottom-0 h-1 w-20 rounded-l-full bg-matcha/40 opacity-60" />
            <div className="pattern-jali pointer-events-none absolute inset-0 rounded-2xl opacity-20 md:rounded-3xl" />
            <div className="relative">
              <ProductsClient categories={categories} />
            </div>
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
