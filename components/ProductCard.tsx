"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";
import { Button } from "./Button";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const imageUrl = product.images[0] ?? "https://placehold.co/600x450/E5E0D8/809671?text=Product";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group border border-border bg-background transition-transform duration-300"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={imageUrl.startsWith("http")}
          />
        </div>
      </Link>
      <div className="flex flex-col justify-between px-5 py-5">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.26em] text-foreground-muted/80">
            {product.category}
          </p>
          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-foreground-muted">
            {product.description}
          </p>
        </div>
        <Link
          href={`/products/${product.slug}#enquiry`}
          className="mt-4 inline-flex items-center text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-foreground transition-colors duration-200 hover:text-primary"
        >
          Request quote
        </Link>
      </div>
    </motion.article>
  );
}
