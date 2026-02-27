import { Suspense } from "react";
import { getProducts, getProductsByCategory, getCategories } from "@/lib/getProducts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductsClient } from "./ProductsClient";

type Props = { searchParams: Promise<{ category?: string; q?: string }> };

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = params.category ?? "";
  const q = params.q ?? "";

  const [categoryProducts, categories] = await Promise.all([
    category ? getProductsByCategory(category) : getProducts(),
    getCategories(),
  ]);

  const filtered = q
    ? categoryProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(q.toLowerCase()) ||
          p.description.toLowerCase().includes(q.toLowerCase())
      )
    : categoryProducts;

  return (
    <div className="bokeh-bg min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h1 className="font-display text-4xl font-semibold text-carob md:text-5xl">
              Products
            </h1>
            <p className="mt-4 text-foreground-muted">
              Premium bamboo products for residential and commercial use
            </p>
          </div>

          <Suspense fallback={<div className="h-12" />}>
            <ProductsClient categories={categories} />
          </Suspense>

          <div className="mt-12">
            <ProductGrid products={filtered} />
          </div>
        </div>
      </main>
    </div>
  );
}
