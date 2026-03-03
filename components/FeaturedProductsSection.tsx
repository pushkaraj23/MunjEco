"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { TreeDeciduous, Leaf, Gift, ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/ProductGrid";
import type { Product } from "@/lib/types";

const productHighlights = [
  {
    icon: TreeDeciduous,
    title: "Neem Wood Comb",
    desc: "Naturally antibacterial, durable, and gentle on hair — made from responsibly sourced neem wood.",
  },
  {
    icon: Leaf,
    title: "Bamboo Toothbrush",
    desc: "Plastic‑free oral care designed for everyday sustainability.",
  },
  {
    icon: Gift,
    title: "Eco‑Friendly Gift Sets",
    desc: "Curated combinations ideal for conscious gifting and bulk orders.",
  },
];

type FeaturedProductsSectionProps = {
  products: Product[];
};

export function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.12, 0.38], [0, 0.85]);
  const headerY = useTransform(scrollYProgress, [0.08, 0.35], [45, -25]);
  const highlight0Y = useTransform(scrollYProgress, [0.15, 0.45], [50, -20]);
  const highlight1Y = useTransform(scrollYProgress, [0.2, 0.5], [55, -18]);
  const highlight2Y = useTransform(scrollYProgress, [0.25, 0.55], [48, -22]);
  const highlightTransforms = [highlight0Y, highlight1Y, highlight2Y];
  const gridY = useTransform(scrollYProgress, [0.3, 0.65], [60, -30]);

  return (
    <section
      ref={ref}
      className="relative border-t border-border/60 bg-primary px-8 py-20 text-white sm:px-10 md:px-12 md:py-28 lg:px-16 xl:px-20"
    >
      {/* Subtle horizontal glow fields */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-turmeric/25 to-transparent"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute inset-x-8 bottom-0 h-40 bg-gradient-to-t from-chai/18 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header with parallax - left aligned */}
        <motion.header
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-xl"
        >
          <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-turmeric/90">
            Featured products
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Thoughtfully crafted essentials for conscious buyers.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
            Eco-friendly, plastic‑free essentials crafted in India for
            distributors, retailers, and conscious brands.
          </p>
        </motion.header>

        {/* Product highlights - slim editorial row */}
        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {productHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              style={{ y: highlightTransforms[i] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group border-t border-white/15 pt-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center border border-white/20 text-turmeric/90">
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-base font-semibold md:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex justify-end"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-white transition-colors duration-200 hover:bg-white hover:text-primary-dark"
          >
            View Full Catalogue
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </motion.div>

        {/* Product grid with parallax */}
        <motion.div style={{ y: gridY }} className="relative mt-8">
          <ProductGrid products={products} />
        </motion.div>
      </div>
    </section>
  );
}
