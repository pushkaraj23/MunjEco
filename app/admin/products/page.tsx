import { getProducts } from "@/lib/getProducts";
import { getCategories } from "@/lib/categories";
import { AddProductForm } from "./AddProductForm";
import { ProductsList } from "./ProductsList";

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <div>
      <h1 className="font-display mb-6 text-2xl font-semibold text-carob">
        Products
      </h1>
      <p className="mb-8 text-foreground-muted">
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
