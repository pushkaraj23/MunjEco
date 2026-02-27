"use client";

import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/types";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-lg text-foreground-muted">
          No products found. Check back soon.
        </p>
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
