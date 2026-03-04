import type { Metadata } from "next";
import { getProducts } from "@/lib/getProducts";
import { ProductsPageContent } from "@/components/products/ProductsPageContent";

export const metadata: Metadata = {
  title:
    "Products | Eco‑Friendly Indian Combs, Brushes, Travel Kits & Handicrafts",
  description:
    "Browse MunjEco Global’s export catalogue of eco‑friendly Indian combs, brushes, travel kits and handcrafted gifts for wholesale and private label buyers.",
};

type Props = { searchParams: Promise<{ category?: string; q?: string }> };

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const q = params.q ?? "";

  const products = await getProducts();

  const filtered = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q.toLowerCase()) ||
          p.description.toLowerCase().includes(q.toLowerCase())
      )
    : products;

  return (
    <div className="min-h-screen bg-background">
      <ProductsPageContent products={filtered} />
    </div>
  );
}
