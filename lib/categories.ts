import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase";

export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  createdAt?: { seconds: number; nanoseconds: number };
}

export async function getCategories(): Promise<Category[]> {
  const snapshot = await getDocs(collection(db, "categories"));
  return snapshot.docs.map((doc) => {
    const data = doc.data() as Record<string, unknown>;
    const raw = data.createdAt as { seconds?: number; nanoseconds?: number } | undefined;
    return {
      id: doc.id,
      name: (data.name as string) ?? "",
      slug: (data.slug as string) ?? "",
      imageUrl: (data.imageUrl as string) ?? "",
      createdAt:
        raw != null && typeof raw.seconds === "number"
          ? { seconds: raw.seconds, nanoseconds: raw.nanoseconds ?? 0 }
          : undefined,
    };
  });
}

export async function addCategory(data: {
  name: string;
  slug: string;
  imageUrl: string;
}): Promise<string> {
  const docRef = await addDoc(collection(db, "categories"), {
    name: data.name,
    slug: data.slug,
    imageUrl: data.imageUrl,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateCategory(
  id: string,
  data: Partial<Pick<Category, "name" | "slug" | "imageUrl">>
): Promise<void> {
  const ref = doc(db, "categories", id);
  await updateDoc(ref, {
    ...(data.name !== undefined && { name: data.name }),
    ...(data.slug !== undefined && { slug: data.slug }),
    ...(data.imageUrl !== undefined && { imageUrl: data.imageUrl }),
  });
}

export async function deleteCategory(id: string): Promise<void> {
  const ref = doc(db, "categories", id);
  await deleteDoc(ref);
}

export async function uploadCategoryImage(
  file: File,
  categorySlug: string
): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `categories/${categorySlug}-${Date.now()}.${ext}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}
