import type { Metadata } from "next";
import { HeroSection } from "@/components/why-choose-us/HeroSection";
import { ReasonsCarouselSection } from "@/components/why-choose-us/ReasonsCarouselSection";
import { PromiseSection } from "@/components/why-choose-us/PromiseSection";
import { ComplianceSection } from "@/components/why-choose-us/ComplianceSection";
import { CTASection } from "@/components/home/CTASection";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";

export const metadata: Metadata = {
  title:
    "Why Choose MunjEco Global | Trusted Indian Eco‑Product Export Partner",
  description:
    "Discover why global buyers choose MunjEco Global as their export partner for eco‑friendly Indian combs, brushes, travel kits and handicrafts, with ethical sourcing and reliable delivery.",
};

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ReasonsCarouselSection />
      <PromiseSection />
      <ComplianceSection />
      <CTASection
        title="Ready to partner with a trusted Indian export partner?"
        subtitle="Tell us what you're looking for — bulk products, private label manufacturing, or custom eco gifting — and we’ll help you build a reliable and sustainable supply chain from India."
      />
      <TestimonialsSection />
    </main>
  );
}

