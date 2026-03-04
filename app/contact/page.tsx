import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact MunjEco Global | Export Enquiries & Partnerships",
  description:
    "Contact MunjEco Global for bulk orders, export partnerships and private label enquiries for eco‑friendly Indian combs, brushes, travel kits and handicrafts.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactPageContent />
    </div>
  );
}
