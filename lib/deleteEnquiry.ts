import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function deleteEnquiry(enquiryId: string): Promise<void> {
  const ref = doc(db, "enquiries", enquiryId);
  await deleteDoc(ref);
}
