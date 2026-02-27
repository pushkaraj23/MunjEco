import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import type { Enquiry } from "./types";

export async function submitEnquiry(data: Omit<Enquiry, "id" | "createdAt">) {
  const docRef = await addDoc(collection(db, "enquiries"), {
    name: data.name,
    company: data.company,
    email: data.email,
    phone: data.phone,
    product: data.product,
    quantity: data.quantity,
    message: data.message,
    status: "new",
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}
