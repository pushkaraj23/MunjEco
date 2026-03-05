"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

const testimonials = [
  {
    quote:
      "Premium bamboo pens for our corporate gifting. Clients love the eco-friendly touch.",
    author: "Corporate Solutions Ltd",
    role: "Corporate Gifting Buyer",
  },
  {
    quote:
      "Reliable bulk supplier. On-time delivery, excellent communication.",
    author: "Green Retail Co",
    role: "Retail Partner",
  },
  {
    quote:
      "Sustainable sourcing with manufacturing-grade quality. Highly recommend.",
    author: "Eco Gifting Partners",
    role: "Export Client",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="relative overflow-visible border-t border-border/70 bg-primary px-8 py-20 text-white sm:px-10 md:px-12 md:py-24 lg:px-16 xl:px-20"
    >
      <DecoGraphic src="/graphics/img5.png" alt="" placement="top-right" size="md" className="opacity-25" />
      {/* Soft photographic background under the testimonial grid */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Softly lit studio table with florals"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/90 to-primary-dark" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-chai/22 to-transparent" />
      <div className="pointer-events-none absolute inset-x-16 bottom-0 h-24 bg-gradient-to-t from-turmeric/18 to-transparent" />

      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl">
        {/* Section header */}
        <header className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-sm">
              Client reviews
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              What our clients say.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/75">
            A selection of feedback from buyers who trust MunjEco Global with
            their sustainable sourcing.
          </p>
        </header>

        {/* Testimonial cards - elevated editorial grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={t.author}>
              <article className="flex h-full flex-col border border-white/20 bg-white/5 backdrop-blur-sm px-5 py-5 shadow-card">
                <Quote className="mb-3 h-6 w-6 text-accent-light" strokeWidth={1.2} />
                <p className="text-sm leading-relaxed text-white/90 md:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-white/20 pt-3">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-white">{t.author}</p>
                      {t.role && (
                        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/70">
                          {t.role}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-accent-light">
                      <span className="text-[0.7rem] font-semibold">5.0</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="h-3.5 w-3.5 fill-current"
                            strokeWidth={1.3}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
