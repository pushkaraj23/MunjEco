import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutOverviewSection } from "@/components/about/AboutOverviewSection";
import { FounderNoteSection } from "@/components/about/FounderNoteSection";
import { ManufacturingSection } from "@/components/about/ManufacturingSection";
import { CertificationsSection } from "@/components/about/CertificationsSection";
import { SustainabilityBandSection } from "@/components/about/SustainabilityBandSection";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About MunjEco Global | Indian Eco‑Friendly Export Company",
  description:
    "Learn about MunjEco Global, an Indian export company focused on eco‑friendly lifestyle essentials and handmade handicrafts, working with trusted manufacturers and artisan communities across India.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHeroSection />
      {/* <AboutStorySection /> */}
      <AboutOverviewSection />
      <FounderNoteSection />
      <ManufacturingSection />
      <CertificationsSection />
      {/* <SustainabilityBandSection /> */}
      <TestimonialsSection />
      <CTASection
        title="Ready to partner with a trusted Indian export partner?"
        subtitle="Tell us what you're looking for, bulk products, private label manufacturing, or custom eco gifting and we’ll help you build a reliable and sustainable supply chain from India."
      />
    </main>
  );
}
