"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const imageUrl = product.images[0] ?? "https://placehold.co/600x450/E5E0D8/809671?text=Product";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group overflow-hidden rounded-xl border border-border bg-background/40 backdrop-blur-sm transition-transform duration-300"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-sm">
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
          <p className="text-xs uppercase tracking-[0.26em] text-foreground-muted/80 sm:text-sm">
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
        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            href={`/products/${product.slug}#enquiry`}
            className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white shadow-sm shadow-primary/40 transition-all duration-200 hover:bg-primary-dark hover:border-primary-dark hover:shadow-md hover:shadow-primary/50"
          >
            Request quote
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
