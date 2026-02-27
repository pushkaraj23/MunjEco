import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="bokeh-bg min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection className="text-center mb-16">
            <h1 className="font-display text-4xl font-semibold text-carob md:text-5xl">
              About MunjEco Global
            </h1>
            <p className="mt-6 text-lg text-foreground-muted">
              Natural • Responsible • Daily Use Products. Eco-friendly gifting.
            </p>
          </AnimatedSection>

          <AnimatedSection className="max-w-none">
            <h2 className="font-display text-2xl font-semibold text-carob">
              Our Story
            </h2>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              MunjEco Global was founded on the belief that premium manufacturing and
              sustainability can go hand in hand. We specialize in bamboo
              daily-use products—pens, stationery, bottles, and cups—crafted for
              durability and elegance. Better habits for better nature. Our clients
              include corporates, gifting partners, and retail brands who demand
              quality and responsible sourcing.
            </p>
          </AnimatedSection>

          <section id="manufacturing" className="py-16">
            <AnimatedSection>
              <h2 className="font-display text-2xl font-semibold text-carob">
                Manufacturing Process
              </h2>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                Every product passes through stringent quality checks. From raw
                bamboo selection to finishing, we use eco-friendly treatments and
                precision machinery. Our facility is equipped for bulk production
                while maintaining consistency across batches.
              </p>
              <ul className="mt-6 space-y-2 text-foreground-muted">
                {[
                  "Responsible bamboo sourcing",
                  "Custom logo and text engraving",
                  "Quality assurance at each stage",
                  "Eco-friendly, reusable, biodegradable",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-matcha">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </section>

          <AnimatedSection>
            <h2 className="text-2xl font-semibold text-mint">
              Certifications
            </h2>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              We hold certifications for sustainable sourcing, manufacturing
              standards, and export compliance. Our products meet international
              benchmarks for durability and environmental impact.
            </p>
          </AnimatedSection>

          <section id="sustainability" className="py-16">
            <AnimatedSection>
              <h2 className="font-display text-2xl font-semibold text-carob">
                Sustainability Commitment
              </h2>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                Bamboo regenerates rapidly. We partner with certified growers,
                minimize waste in production, and ensure our supply chain is
                transparent. Manufacturing without compromise—for people and
                planet.
              </p>
            </AnimatedSection>
          </section>

          <div className="pt-8">
            <CTASection
              title="Partner With Us"
              subtitle="For bulk orders, corporate gifting, or custom engraving."
              primaryLabel="Get in Touch"
              primaryHref="/contact"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
