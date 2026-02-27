"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";
import { Button } from "./Button";
import { Badge } from "./Badge";

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
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-3xl border border-almond bg-surface shadow-card transition-all duration-500 [transform-style:preserve-3d] hover:border-matcha/30 hover:shadow-elevated hover:shadow-[0_0_40px_rgba(128,150,113,0.12)]"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-carob/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <Link href={`/products/${product.slug}`} className="block [transform:translateZ(20px)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl bg-background-alt">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={imageUrl.startsWith("http")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-transparent to-transparent" />
          {product.featured && (
            <div className="absolute left-3 top-3">
              <Badge variant="primary">Featured</Badge>
            </div>
          )}
        </div>
      </Link>
      <div className="relative p-6">
        <Badge variant="default" className="mb-2">
          {product.category}
        </Badge>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display mb-2 text-lg font-semibold text-carob transition-all duration-300 group-hover:text-matcha">
            {product.name}
          </h3>
        </Link>
        <p className="mb-4 line-clamp-2 text-sm text-foreground-muted">
          {product.description}
        </p>
        <Button
          href={`/products/${product.slug}#enquiry`}
          variant="outline"
          className="w-full"
        >
          Request Quote
        </Button>
      </div>
    </motion.article>
  );
}
