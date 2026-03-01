import { getProducts, getProductsByCategory, getCategories } from "@/lib/getProducts";
import { ProductsPageContent } from "@/components/ProductsPageContent";

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
    <div className="min-h-screen bg-green-page">
      <ProductsPageContent products={filtered} categories={categories} />
    </div>
  );
}
