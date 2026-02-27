import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import type { EnquiryStatus } from "./types";

export async function updateEnquiryStatus(
  enquiryId: string,
  status: EnquiryStatus
): Promise<void> {
  const ref = doc(db, "enquiries", enquiryId);
  await updateDoc(ref, { status });
}
