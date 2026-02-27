import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import type { Product } from "./types";

function mapDocToProduct(doc: { id: string; data: () => unknown }): Product {
  const data = doc.data() as Record<string, unknown>;
  const raw = data.createdAt as
    | { seconds?: number; nanoseconds?: number }
    | undefined;
  return {
    id: doc.id,
    name: (data.name as string) ?? "",
    slug: (data.slug as string) ?? "",
    category: (data.category as string) ?? "",
    description: (data.description as string) ?? "",
    specifications: data.specifications as Record<string, string> | undefined,
    images: (data.images as string[]) ?? [],
    featured: (data.featured as boolean) ?? false,
    createdAt:
      raw != null && typeof raw.seconds === "number"
        ? { seconds: raw.seconds, nanoseconds: raw.nanoseconds ?? 0 }
        : { seconds: 0, nanoseconds: 0 },
  };
}

export async function getProducts(): Promise<Product[]> {
  const snapshot = await getDocs(
    query(collection(db, "products"), orderBy("createdAt", "desc"))
  );
  return snapshot.docs.map(mapDocToProduct);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const snapshot = await getDocs(
    query(collection(db, "products"), where("featured", "==", true))
  );
  return snapshot.docs
    .map(mapDocToProduct)
    .sort(
      (a, b) =>
        (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0)
    );
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const snapshot = await getDocs(
    query(collection(db, "products"), where("category", "==", category))
  );
  return snapshot.docs
    .map(mapDocToProduct)
    .sort(
      (a, b) =>
        (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0)
    );
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const snapshot = await getDocs(
    query(collection(db, "products"), where("slug", "==", slug))
  );
  const doc = snapshot.docs[0];
  if (!doc) return null;
  return mapDocToProduct(doc);
}

export async function getCategories(): Promise<string[]> {
  const products = await getProducts();
  const categories = [...new Set(products.map((p) => p.category))];
  return categories.filter(Boolean).sort();
}
