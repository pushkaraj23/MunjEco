"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { FeaturedProductCard } from "@/components/home/FeaturedProductCard";
import type { Product } from "@/lib/types";

type FeaturedProductsSectionProps = {
  products: Product[];
};

export function FeaturedProductsSection({
  products,
}: FeaturedProductsSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.12, 0.38], [0, 0.85]);
  const headerY = useTransform(scrollYProgress, [0.08, 0.35], [45, -25]);
  const gridY = useTransform(scrollYProgress, [0.25, 0.6], [60, -30]);

  const featured = products.slice(0, 3);

  return (
    <section
      ref={ref}
      className="relative overflow-visible border-t border-border/60 bg-primary px-8 py-20 text-white sm:px-10 md:px-12 md:py-28 lg:px-16 xl:px-20"
    >
      <DecoGraphic
        src="/graphics/img4.png"
        alt=""
        placement="bottom-right"
        size="md"
        className="opacity-20"
      />
      <DecoGraphic
        src="/graphics/img5.png"
        alt=""
        placement="top-right"
        size="md"
        className="opacity-20"
      />
      {/* Subtle horizontal glow fields */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-turmeric/25 to-transparent"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute inset-x-8 bottom-0 h-40 bg-gradient-to-t from-chai/18 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl">
        {/* Section header with parallax - left aligned */}
        <motion.header
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-turmeric/90 sm:text-sm">
              Featured products
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              A curated edit of MunjEco favourites.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
              Highlighted pieces that best represent our Indian craftsmanship,
              sustainable materials, and export‑ready quality.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-white transition-colors duration-200 hover:bg-white hover:text-primary-dark"
            >
              View full catalogue
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </motion.header>

        {/* Premium featured product cards */}
        <motion.div
          style={{ y: gridY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 md:grid-cols-3"
        >
          {featured.map((product, index) => (
            <FeaturedProductCard
              key={product.slug}
              product={product}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
