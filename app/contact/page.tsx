import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EnquiryForm } from "@/components/EnquiryForm";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <div className="bokeh-bg min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <h1 className="font-display text-4xl font-semibold text-carob md:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-foreground-muted">
                Submit your enquiry for product catalogs, bulk orders, or export
                partnerships. Our team will respond within 24–48 hours.
              </p>

              <div className="mt-12 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-matcha">
                    Email
                  </h3>
                  <a
                    href="mailto:munjecoglobal@gmail.com"
                    className="text-foreground-muted transition-colors hover:text-matcha"
                  >
                    munjecoglobal@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-matcha">
                    Phone / WhatsApp
                  </h3>
                  <a
                    href="tel:+919270952447"
                    className="text-foreground-muted transition-colors hover:text-matcha"
                  >
                    +91 92709 52447
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-matcha">
                    Scan to Contact
                  </h3>
                  <p className="text-foreground-muted">
                    Scan our WhatsApp QR code for quick enquiries.
                  </p>
                </div>
              </div>

              <div className="glass mt-12 flex aspect-video items-center justify-center rounded-3xl border border-almond">
                <p className="text-foreground-muted">Map placeholder</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="glass rounded-3xl border border-almond p-8 shadow-card">
                <h2 className="font-display text-xl font-semibold text-carob">
                  Enquiry Form
                </h2>
                <p className="mt-2 text-sm text-foreground-muted">
                  Fill in your details and we&apos;ll get back to you.
                </p>
                <div className="mt-6">
                  <EnquiryForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
    </div>
  );
}
