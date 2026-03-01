import { getFeaturedProducts } from "@/lib/getProducts";
import { getCategories } from "@/lib/categories";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedProductsSection } from "@/components/FeaturedProductsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { SustainabilityPromiseSection } from "@/components/SustainabilityPromiseSection";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";

export default async function Home() {
  const [featuredProducts, categories] = await Promise.all([
    getFeaturedProducts(),
    getCategories(),
  ]);
  const fallbackProducts = featuredProducts.length === 0
    ? await import("@/lib/getProducts").then((m) => m.getProducts())
    : featuredProducts;
  const displayProducts = featuredProducts.length > 0 ? featuredProducts : fallbackProducts.slice(0, 6);

  return (
    <div className="min-h-screen bg-green-page">
      <main className="w-full overflow-x-hidden">
        <Hero />
        <TrustBar />
        <CategorySection categories={categories} />
        <AboutSection />
        <FeaturedProductsSection products={displayProducts} />
        <WhyChooseSection />
        <SustainabilityPromiseSection />
        <CTASection
          title="Looking for a Reliable Eco‑Product Export Partner?"
          subtitle="Whether you are a distributor, retailer, or corporate buyer, we're here to support your sustainable sourcing goals."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
        <TestimonialsSection />
      </main>
    </div>
  );
}
