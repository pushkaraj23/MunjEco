"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductsClient } from "./ProductsClient";
import type { Product } from "@/lib/types";

type CategoryGroup = {
  key: string;
  label: string;
  products: Product[];
};

type ProductsPageContentProps = {
  groups: CategoryGroup[];
  categories: { slug: string; name: string }[];
  selectedCategory: string;
};

export function ProductsPageContent({
  groups,
  categories,
  selectedCategory,
}: ProductsPageContentProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0.05, 0.28], [40, -20]);
  const gridY = useTransform(scrollYProgress, [0.15, 0.45], [45, -20]);

  const activeCategory =
    selectedCategory && selectedCategory !== "all"
      ? categories.find((c) => c.slug === selectedCategory)
      : null;

  const headingLabel = activeCategory ? activeCategory.name : "All products";

  const totalProducts = groups.reduce(
    (sum, group) => sum + group.products.length,
    0
  );

  return (
    <main ref={ref} className="relative overflow-visible pt-28 pb-12 md:pb-16">
      <DecoGraphic src="/graphics/img2-v0.png" alt="" placement="bottom-left" size="md" className="opacity-25" />
      <DecoGraphic src="/graphics/img4-v0.png" alt="" placement="bottom-right" size="md" className="opacity-25" />
      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Header + search */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted sm:text-sm">
              Product catalogue
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {headingLabel}
            </h1>
          </div>
          <div>
            <ProductsClient
              categories={categories}
              selectedCategory={selectedCategory}
            />
          </div>
        </motion.div>

        {/* Product groups */}
        <motion.div
          style={{ y: gridY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          className="relative space-y-10 md:space-y-12"
        >
          {totalProducts === 0 ? (
            <div className="rounded-xl border border-border bg-background-alt px-8 py-16 text-center">
              <p className="text-sm text-foreground-muted md:text-base">
                No products found. Try adjusting your search.
              </p>
            </div>
          ) : (
            groups.map((group) => (
              <section key={group.key} className="space-y-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {group.label}
                  </h2>
                  <span className="text-xs text-foreground-muted">
                    {group.products.length} item
                    {group.products.length === 1 ? "" : "s"}
                  </span>
                </div>
                <ProductGrid products={group.products} />
              </section>
            ))
          )}
        </motion.div>
      </div>
    </main>
  );
}
