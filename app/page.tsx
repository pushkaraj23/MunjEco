import { getFeaturedProducts } from "@/lib/getProducts";
import { getCategories } from "@/lib/categories";
import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";
import { ProductGrid } from "@/components/ProductGrid";
import { CTASection } from "@/components/CTASection";
import { AnimatedSection } from "@/components/AnimatedSection";

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
    <div className="bokeh-bg min-h-screen bg-background">
      <main>
        <Hero />

        {/* Trust bar */}
        <section className="border-y border-almond/60 bg-cream-warm/60">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-carob">
              Sustainability you can rely on.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-foreground-muted">
              <span className="flex items-center gap-2">
                <span>🌱</span>
                <span>Natural &amp; sustainable materials</span>
              </span>
              <span className="flex items-center gap-2">
                <span>📦</span>
                <span>Export‑ready quality &amp; packaging</span>
              </span>
              <span className="flex items-center gap-2">
                <span>🌍</span>
                <span>Serving global buyers</span>
              </span>
              <span className="flex items-center gap-2">
                <span>🤝</span>
                <span>Ethical &amp; responsible sourcing</span>
              </span>
            </div>
          </div>
        </section>

        <CategorySection categories={categories} />

        {/* About MunjEco Global (homepage) */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-semibold text-carob md:text-4xl">
                Rooted in Purpose. Built for Conscious Trade.
              </h2>
              <p className="mt-4 text-foreground-muted">
                MunjEco Global was born from a simple belief — that business can grow without harming
                the earth, and trade can uplift lives rather than exploit them.
              </p>
              <p className="mt-4 text-foreground-muted">
                We are a purpose-led Indian export company creating eco-friendly lifestyle essentials
                and conscious handicrafts in collaboration with responsible makers and artisan
                communities. Our focus is simple: supporting livelihoods, reducing plastic use, and
                delivering sustainable products to global markets with consistency, care, and integrity.
              </p>
              <div className="mt-8">
                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-matcha/60 bg-white px-6 py-3 text-sm font-semibold text-carob transition-all hover:border-matcha hover:bg-matcha/10"
                >
                  Learn More About Us
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured products */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <AnimatedSection className="mb-12 text-center">
              <h2 className="font-display text-3xl font-semibold text-carob md:text-4xl">
                Thoughtfully Crafted Essentials
              </h2>
              <p className="mt-4 text-foreground-muted">
                Eco-friendly, plastic‑free essentials crafted in India for conscious global buyers.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Neem Wood Comb",
                    desc: "Naturally antibacterial, durable, and gentle on hair — made from responsibly sourced neem wood.",
                  },
                  {
                    title: "Bamboo Toothbrush",
                    desc: "Plastic‑free oral care designed for everyday sustainability.",
                  },
                  {
                    title: "Eco‑Friendly Gift Sets",
                    desc: "Curated combinations ideal for conscious gifting and bulk orders.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-almond bg-surface p-6 text-left shadow-card"
                  >
                    <h3 className="font-display text-lg font-semibold text-carob">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="/products"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-matcha/60 px-7 py-3 text-sm font-semibold text-carob transition-all hover:border-matcha hover:bg-matcha/10"
                >
                  View Full Catalogue
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <ProductGrid products={displayProducts} />
            </AnimatedSection>
          </div>
        </section>

        <section className="relative py-24 bg-gradient-to-b from-background-alt to-background overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display text-3xl font-semibold text-carob md:text-4xl">
                Why Global Buyers Work With Us
              </h2>
              <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
                We don&apos;t just ship products — we build long-term, trust‑based trade relationships.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Ethical & Responsible Sourcing",
                  desc: "We source directly from verified manufacturers and artisan groups following ethical and sustainable practices.",
                },
                {
                  title: "Export‑Ready Quality",
                  desc: "Products are selected, packed, and documented to meet international export standards.",
                },
                {
                  title: "Sustainability First",
                  desc: "Plastic‑free, biodegradable materials aligned with EU & UK sustainability goals.",
                },
                {
                  title: "Flexible Bulk & Private Label",
                  desc: "Bulk supply, customization, and private labeling options based on your requirements.",
                },
                {
                  title: "Transparent & Reliable",
                  desc: "Clear pricing, timely delivery, and honest communication at every step.",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="rounded-3xl border border-almond bg-surface p-6 shadow-card transition-all duration-500 hover:border-matcha/30 hover:shadow-elevated">
                    <h3 className="font-display text-lg font-semibold text-carob">{item.title}</h3>
                    <p className="mt-2 text-sm text-foreground-muted">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <AnimatedSection className="glass relative overflow-hidden rounded-3xl border border-almond p-12 text-center shadow-card md:p-16">
              <h2 className="font-display text-3xl font-semibold text-carob md:text-4xl">
                More Than Products — A Promise to the Planet
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-foreground-muted">
                At MunjEco Global, sustainability is not a trend. It is a responsibility. Every product
                we export supports reduced plastic use, mindful consumption, and ethical production
                practices. We believe global trade can grow while still respecting nature and future
                generations.
              </p>
              <div className="mt-8">
                <a
                  href="/about#sustainability"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-matcha/60 bg-white px-7 py-3 text-sm font-semibold text-carob transition-all hover:border-matcha hover:bg-matcha/10"
                >
                  Our Sustainability Commitment
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6">
          <CTASection
            title="Looking for a Reliable Eco‑Product Export Partner?"
            subtitle="Whether you are a distributor, retailer, or corporate buyer, we’re here to support your sustainable sourcing goals."
            primaryLabel="Request a Quote"
            primaryHref="/contact"
            secondaryLabel="Contact Us"
            secondaryHref="/contact"
          />
        </div>

        <section className="relative py-24 bg-gradient-to-b from-background-alt to-background overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-display text-3xl font-semibold text-carob md:text-4xl">
                What Our Clients Say
              </h2>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { quote: "Premium bamboo pens for our corporate gifting. Clients love the eco-friendly touch.", author: "Corporate Solutions Ltd" },
                { quote: "Reliable bulk supplier. On-time delivery, excellent communication.", author: "Green Retail Co" },
                { quote: "Sustainable sourcing with manufacturing-grade quality. Highly recommend.", author: "Eco Gifting Partners" },
              ].map((t, i) => (
                <AnimatedSection key={t.author} delay={i * 0.1}>
                  <blockquote className="rounded-3xl border border-almond bg-surface p-6 shadow-card transition-all duration-500 hover:border-matcha/30 hover:shadow-elevated">
                    <p className="text-foreground-muted">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-4 text-sm font-semibold text-matcha">{t.author}</footer>
                  </blockquote>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
