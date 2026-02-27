import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./firebase";
import type { Enquiry, EnquiryStatus } from "./types";

export interface EnquiryWithId extends Enquiry {
  id: string;
}

function mapDocToEnquiry(doc: { id: string; data: () => unknown }): EnquiryWithId {
  const data = doc.data() as Record<string, unknown>;
  const raw = data.createdAt as { seconds?: number; nanoseconds?: number } | undefined;
  const status = data.status as EnquiryStatus | undefined;
  return {
    id: doc.id,
    name: (data.name as string) ?? "",
    company: (data.company as string) ?? "",
    email: (data.email as string) ?? "",
    phone: (data.phone as string) ?? "",
    product: (data.product as string) ?? "",
    quantity: (data.quantity as string) ?? "",
    message: (data.message as string) ?? "",
    status: status === "new" || status === "ongoing" || status === "done" ? status : "new",
    createdAt:
      raw != null && typeof raw.seconds === "number"
        ? { seconds: raw.seconds, nanoseconds: raw.nanoseconds ?? 0 }
        : undefined,
  };
}

export async function getEnquiries(limitCount = 100): Promise<EnquiryWithId[]> {
  const snapshot = await getDocs(
    query(
      collection(db, "enquiries"),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    )
  );
  return snapshot.docs.map(mapDocToEnquiry);
}
