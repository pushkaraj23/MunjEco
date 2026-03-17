"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductsClient } from "./ProductsClient";
import { AnimatePresence } from "framer-motion";
import type { Product } from "@/lib/types";

type Category = {
  slug: string;
  name: string;
};

type CategoryGroup = {
  key: string;
  label: string;
  products: Product[];
};

type ProductsPageContentProps = {
  groups: CategoryGroup[];
  categories: Category[];
  selectedCategory: string;
};

export function ProductsPageContent({
  groups,
  categories,
  selectedCategory,
}: ProductsPageContentProps) {
  const ref = useRef<HTMLElement | null>(null);

  /**
   * 🔥 Scroll tracking
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /**
   * ✅ Smooth scroll (removes jitter)
   */
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.3,
  });

  /**
   * ✅ Subtle parallax (premium feel)
   */
  const headerY = useTransform(smoothScroll, [0, 1], [20, -30]);
  const gridY = useTransform(smoothScroll, [0, 1], [30, -40]);

  /**
   * ✅ Safe category handling
   */
  const activeCategory =
    selectedCategory && selectedCategory !== "all"
      ? categories.find((c) => c.slug === selectedCategory) ?? null
      : null;

  const headingLabel = activeCategory
    ? activeCategory.name
    : "All products";

  /**
   * ✅ Strict typing for reduce
   */
  const totalProducts = groups.reduce<number>(
    (sum, group) => sum + group.products.length,
    0
  );

  /**
   * 🎬 Animation Variants
   */
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <main
      ref={ref}
      className="relative overflow-visible pt-16 md:pt-20 md:pt-16 pb-12 md:pb-16"
    >
      {/* Background graphics */}
      <DecoGraphic
        src="/graphics/img2-v0.png"
        alt=""
        placement="bottom-left"
        size="md"
        className="opacity-25"
      />
      <DecoGraphic
        src="/graphics/img4-v0.png"
        alt=""
        placement="bottom-right"
        size="md"
        className="opacity-25"
      />

      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">

        {/* 🔹 HEADER */}
        <motion.div
          style={{ y: headerY }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10"
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

        {/* 🔹 PRODUCT GROUPS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory} // 🔥 IMPORTANT FIX
            style={{ y: gridY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="relative space-y-10 md:space-y-12"
          >
            {totalProducts === 0 ? (
              <motion.div
                variants={fadeUp}
                className="rounded-xl border border-border bg-background-alt px-8 py-16 text-center"
              >
                <p className="text-sm text-foreground-muted md:text-base">
                  No products found. Try adjusting your search.
                </p>
              </motion.div>
            ) : (
              groups.map((group) => (
                <motion.section
                  key={group.key}
                  variants={fadeUp}
                  className="space-y-4 first:border-t-0 first:pt-0"
                >
                  <div className="relative w-full pb-8">

                    <div className="relative flex items-center gap-4">
                      <span className="h-6 w-[3px] rounded-full bg-gradient-to-b from-primary/80 to-primary/30" />
                      <h2 className="relative inline-flex items-center rounded-full bg-background/80 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary backdrop-blur-md border border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.25)] sm:text-xs">
                        <span className="absolute inset-0 rounded-full bg-primary/10 blur-md opacity-40"></span>
                        <span className="relative z-10">
                          {group.label}
                        </span>
                      </h2>

                    </div>
                  </div>

                  {/* 🔥 Stagger inside grid */}
                  <motion.div variants={staggerContainer}>
                    <ProductGrid products={group.products} />
                  </motion.div>
                </motion.section>
              ))
            )}  </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}