"use client";

import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/types";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 py-24 backdrop-blur-xl">
        <div className="pattern-dot-rangoli pointer-events-none absolute inset-0 rounded-3xl opacity-20" />
        <div className="relative text-center">
          <p className="text-lg text-white/85">
            No products found. Check back soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
}
