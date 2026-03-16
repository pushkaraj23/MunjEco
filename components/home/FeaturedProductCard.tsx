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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-background text-left shadow-card"
    >
      {/* Image with soft gradient overlay */}
      <div className="relative border-7 border-white/70 rounded-2xl aspect-square w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-[1.04]"
        />
        {/* <div className="absolute h-full inset-0 bg-gradient-to-t from-background/0 to-transparent" /> */}

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

        <div className="mt-4 flex flex-col gap-3 text-center">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex justify-center items-center rounded-full border border-primary bg-background px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary shadow-sm shadow-primary/10 transition-all duration-200 hover:bg-primary/10 hover:border-primary-dark hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/40 w-full sm:w-auto text-center"
          >
            View details
          </Link>
          <Link
            href={`/products/${product.slug}#enquiry`}
            className="inline-flex justify-center items-center rounded-full border border-primary bg-primary px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white shadow-sm shadow-primary/40 transition-all duration-200 hover:bg-primary-dark hover:border-primary-dark hover:shadow-md hover:shadow-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40 w-full sm:w-auto text-center"
          >
            Request quote
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

