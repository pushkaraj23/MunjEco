import { getFeaturedProducts } from "@/lib/getProducts";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { SustainabilityPromiseSection } from "@/components/home/SustainabilityPromiseSection";
import { CTASection } from "@/components/home/CTASection";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { AboutSection } from "@/components/home/AboutSection";

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
        {/* <TrustBar /> */}

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
