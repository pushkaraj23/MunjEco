import { getCategories } from "@/lib/categories";
import { AddCategoryForm } from "./AddCategoryForm";
import { CategoriesList } from "./CategoriesList";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="pt-2">
      <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted">
        Admin
      </p>
      <h1 className="font-heading mb-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Categories
      </h1>
      <p className="mb-8 max-w-xl text-sm leading-relaxed text-foreground-muted">
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
