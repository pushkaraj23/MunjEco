import type { Metadata } from "next";
import { WhyChoosePageContent } from "@/components/why-choose-us/WhyChoosePageContent";

export const metadata: Metadata = {
  title:
    "Why Choose MunjEco Global | Trusted Indian Eco‑Product Export Partner",
  description:
    "Discover why global buyers choose MunjEco Global as their export partner for eco‑friendly Indian combs, brushes, travel kits and handicrafts, with ethical sourcing and reliable delivery.",
};

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <WhyChoosePageContent />
    </div>
  );
}

