import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export interface AddProductInput {
  name: string;
  slug: string;
  category: string;
  description: string;
  specifications?: Record<string, string>;
  images: string[];
  featured: boolean;
}

export async function addProduct(data: AddProductInput): Promise<string> {
  const docRef = await addDoc(collection(db, "products"), {
    name: data.name,
    slug: data.slug,
    category: data.category,
    description: data.description,
    specifications: data.specifications ?? {},
    images: data.images,
    featured: data.featured ?? false,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export interface UpdateProductInput extends Partial<AddProductInput> {
  id: string;
}

export async function updateProduct(data: UpdateProductInput): Promise<void> {
  const { id, ...rest } = data;
  const ref = doc(db, "products", id);
  await updateDoc(ref, {
    ...(rest.name !== undefined && { name: rest.name }),
    ...(rest.slug !== undefined && { slug: rest.slug }),
    ...(rest.category !== undefined && { category: rest.category }),
    ...(rest.description !== undefined && { description: rest.description }),
    ...(rest.specifications !== undefined && {
      specifications: rest.specifications,
    }),
    ...(rest.images !== undefined && { images: rest.images }),
    ...(rest.featured !== undefined && { featured: rest.featured }),
  });
}

export async function deleteProduct(id: string): Promise<void> {
  const ref = doc(db, "products", id);
  await deleteDoc(ref);
}
