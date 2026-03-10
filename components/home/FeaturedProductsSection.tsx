"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  const featured = products.slice(0, 3);

  return (
    <section className="relative overflow-visible border-t border-border/60 bg-primary py-20 text-white md:py-28">
      <DecoGraphic
        src="/graphics/img5-v0.png"
        alt=""
        placement="top-right"
        size="md"
        className="opacity-20"
      />
      {/* Subtle horizontal glow fields */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-turmeric/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-40 bg-gradient-to-t from-chai/18 to-transparent" /> */}

      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Section header with parallax - left aligned */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-turmeric/90 sm:text-sm">
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
              className="group inline-flex items-center gap-2 rounded-sm border border-white/40 px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-white transition-colors duration-200 hover:bg-white hover:text-primary-dark"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
