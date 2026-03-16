"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
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
      className="relative overflow-visible border-t border-border/70 bg-primary py-20 text-white md:py-24"
    >
      <DecoGraphic src="/graphics/img5-v0.png" alt="" placement="top-right" size="md" className="opacity-25" />
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
      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Section header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-sm">
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
        </motion.header>

        {/* Testimonial cards - elevated editorial grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <article className="flex h-full flex-col rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-5 py-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-lg">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
