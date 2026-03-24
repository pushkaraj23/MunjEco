import { unstable_cache } from "next/cache";
import { getProducts } from "./getProducts";
import { getCategories } from "./categories";

/** Cached Firestore reads for public catalogue pages (faster repeat navigations). */
export const getCachedProductsCatalog = unstable_cache(
  async () => getProducts(),
  ["site-catalog-products"],
  { revalidate: 120 }
);

export const getCachedCategoriesCatalog = unstable_cache(
  async () => getCategories(),
  ["site-catalog-categories"],
  { revalidate: 120 }
);
