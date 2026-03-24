import type { Metadata } from "next";
import {
  getCachedProductsCatalog,
  getCachedCategoriesCatalog,
} from "@/lib/siteCatalogCache";
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
  const selectedCategory = params.category ?? "";

  const [products, categories] = await Promise.all([
    getCachedProductsCatalog(),
    getCachedCategoriesCatalog(),
  ]);

  const slugsWithProducts = new Set(
    products
      .map((p) => p.category)
      .filter((slug): slug is string => Boolean(slug))
  );

  const byCategory = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const filtered = q
    ? byCategory.filter(
        (p) =>
          p.name.toLowerCase().includes(q.toLowerCase()) ||
          p.description.toLowerCase().includes(q.toLowerCase())
      )
    : byCategory;

  const categoryLabelBySlug = new Map(
    categories.map((c) => [c.slug, c.name || c.slug])
  );

  const groupedMap = new Map<
    string,
    { key: string; label: string; products: typeof filtered }
  >();

  for (const product of filtered) {
    const slug = product.category || "uncategorised";
    const label =
      categoryLabelBySlug.get(slug) ||
      (slug === "uncategorised" ? "Uncategorised" : slug);
    const key = slug;

    const existing = groupedMap.get(key);
    if (existing) {
      existing.products.push(product);
    } else {
      groupedMap.set(key, { key, label, products: [product] });
    }
  }

  const grouped = Array.from(groupedMap.values()).sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  return (
    <div className="min-h-screen bg-background-alt">
      <ProductsPageContent
        groups={grouped}
        categories={categories
          .filter((c) => slugsWithProducts.has(c.slug))
          .map((c) => ({
            slug: c.slug,
            name: c.name || c.slug,
          }))}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
