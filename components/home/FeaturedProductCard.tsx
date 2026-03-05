"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";

type FeaturedProductCardProps = {
  product: Product;
  index?: number;
};

export function FeaturedProductCard({
  product,
  index = 0,
}: FeaturedProductCardProps) {
  const imageUrl =
    product.images[0] ??
    "https://placehold.co/800x600/0F3E3A/E5E0D8?text=Featured+Product";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-none border border-border/70 bg-background text-left shadow-card"
    >
      {/* Image with soft gradient overlay */}
      <div className="relative h-52 overflow-hidden sm:h-56 md:h-60">
        <img
          src={imageUrl}
          alt={product.name}
          className="object-cover transition-transform duration-900 w-full h-[97%] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute h-full inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/95">
            Featured
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between px-6 pb-6 pt-5">
        <div>
          <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground md:text-xl">
            {product.name}
          </h3>
          {product.description && (
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground-muted">
              {product.description}
            </p>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
          >
            View details
          </Link>
          <Link
            href={`/products/${product.slug}#enquiry`}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/6 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Request quote
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

