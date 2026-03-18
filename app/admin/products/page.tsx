import { getProducts } from "@/lib/getProducts";
import { getCategories } from "@/lib/categories";
import { AddProductForm } from "./AddProductForm";
import { ProductsList } from "./ProductsList";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <div className="pt-2">
      <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted">
        Admin
      </p>
      <h1 className="font-heading mb-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Products
      </h1>
      <p className="mb-8 max-w-xl text-sm leading-relaxed text-foreground-muted">
        Add new products and manage existing ones. Categories are created in the
        Categories tab.
      </p>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <AddProductForm categories={categories} />
        </div>
        <div className="lg:col-span-2">
          <ProductsList products={products} />
        </div>
      </div>
    </div>
  );
}
