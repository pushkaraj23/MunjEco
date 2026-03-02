import { getProducts } from "@/lib/getProducts";
import { ProductsPageContent } from "@/components/ProductsPageContent";

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
