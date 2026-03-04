import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About MunjEco Global | Indian Eco‑Friendly Export Company",
  description:
    "Learn about MunjEco Global, an Indian export company focused on eco‑friendly lifestyle essentials and handmade handicrafts, working with trusted manufacturers and artisan communities across India.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutPageContent />
    </div>
  );
}
