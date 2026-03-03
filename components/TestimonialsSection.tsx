"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { DecoGraphic } from "@/components/DecoGraphic";

const testimonials = [
  {
    quote:
      "Premium bamboo pens for our corporate gifting. Clients love the eco-friendly touch.",
    author: "Corporate Solutions Ltd",
  },
  {
    quote:
      "Reliable bulk supplier. On-time delivery, excellent communication.",
    author: "Green Retail Co",
  },
  {
    quote:
      "Sustainable sourcing with manufacturing-grade quality. Highly recommend.",
    author: "Eco Gifting Partners",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.1, 0.38], [0, 0.85]);
  const headerY = useTransform(scrollYProgress, [0.08, 0.35], [45, -25]);
  const card0Y = useTransform(scrollYProgress, [0.12, 0.42], [45, -18]);
  const card1Y = useTransform(scrollYProgress, [0.18, 0.48], [50, -15]);
  const card2Y = useTransform(scrollYProgress, [0.24, 0.54], [45, -22]);
  const cardTransforms = [card0Y, card1Y, card2Y];

  return (
    <section
      ref={ref}
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
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-chai/22 to-transparent"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute inset-x-16 bottom-0 h-24 bg-gradient-to-t from-turmeric/18 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header with parallax */}
        <motion.header
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/80">
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

        {/* Testimonial cards - restrained, linear grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              style={{ y: cardTransforms[i] }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <blockquote className="group border-t border-white/20 pt-5">
                <Quote
                  className="mb-4 h-8 w-8 text-chai/70"
                  strokeWidth={1}
                />
                <p className="text-base leading-relaxed text-white/90 md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex gap-0.5 text-turmeric">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-current"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <footer className="text-sm font-semibold text-chai">
                    {t.author}
                  </footer>
                </div>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
