import { getFeaturedProducts } from "@/lib/getProducts";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { FeaturedProductsSection } from "@/components/FeaturedProductsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { SustainabilityPromiseSection } from "@/components/SustainabilityPromiseSection";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  const fallbackProducts = featuredProducts.length === 0
    ? await import("@/lib/getProducts").then((m) => m.getProducts())
    : featuredProducts;
  const displayProducts = featuredProducts.length > 0 ? featuredProducts : fallbackProducts.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <main className="w-full overflow-x-hidden">
        {/* 1. Cinematic hero */}
        <Hero />

        {/* 2. Narrow trust strip on dark background */}
        <TrustBar />

        {/* 3. Narrow text / story section */}
        <AboutSection />

        {/* 4. Gallery-style product grid */}
        <FeaturedProductsSection products={displayProducts} />

        {/* 5. Large statement / reasons section */}
        <WhyChooseSection />

        {/* 6. Sustainability promise statement */}
        <SustainabilityPromiseSection />

        {/* 7. Clean enquiry CTA */}
        <CTASection
          title="Looking for a Reliable Eco‑Product Export Partner?"
          subtitle="Whether you are a distributor, retailer, or corporate buyer, we're here to support your sustainable sourcing goals."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />

        {/* 8. Testimonial strip */}
        <TestimonialsSection />
      </main>
    </div>
  );
}
