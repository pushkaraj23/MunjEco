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
    <section ref={ref} className="relative overflow-hidden px-6 py-14 md:py-18">
      {/* Parallax ambient glows - turmeric section accent */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute left-1/4 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-turmeric/22 blur-[140px]"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute bottom-1/4 right-1/6 h-80 w-80 rounded-full bg-chai/18 blur-[100px]"
      />
      <div className="pointer-events-none absolute right-1/4 top-2/3 h-64 w-64 rounded-full bg-turmeric/12 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header with parallax */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-turmeric/90">
            Featured Products
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Thoughtfully Crafted Essentials
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
            Eco-friendly, plastic‑free essentials crafted in India for conscious global buyers.
          </p>
          <div className="divider-rangoli mx-auto mt-6 w-20 text-turmeric/50" />
        </motion.div>

        {/* Product highlights - glass cards with parallax */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
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
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 p-8 shadow-[0_0_30px_-10px_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-turmeric/40 hover:bg-black/40 hover:shadow-[0_0_50px_-15px_rgba(212,160,55,0.2)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent opacity-60" />
              <div className="relative flex flex-col">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 transition-colors group-hover:border-turmeric/50 group-hover:bg-turmeric/25 group-hover:shadow-[0_0_20px_rgba(212,160,55,0.2)]">
                  <item.icon className="h-7 w-7 text-turmeric/90" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-2xl bg-turmeric px-6 py-3.5 font-semibold text-carob shadow-md transition-all duration-300 hover:bg-turmeric/90 hover:shadow-lg hover:shadow-[0_8px_30px_rgba(212,160,55,0.35)]"
          >
            View Full Catalogue
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </motion.div>

        {/* Product grid with parallax */}
        <motion.div style={{ y: gridY }} className="relative">
          <ProductGrid products={products} />
        </motion.div>
      </div>
    </section>
  );
}
