import { getCategories } from "@/lib/categories";
import { AddCategoryForm } from "./AddCategoryForm";
import { CategoriesList } from "./CategoriesList";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div>
      <h1 className="font-display mb-6 text-2xl font-semibold text-carob">
        Categories
      </h1>
      <p className="mb-8 text-foreground-muted">
        Create and manage product categories. Each category can have a cover
        photo. Categories appear in the Products dropdown when adding products.
      </p>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <AddCategoryForm />
        </div>
        <div className="lg:col-span-2">
          <CategoriesList categories={categories} />
        </div>
      </div>
    </div>
  );
}
