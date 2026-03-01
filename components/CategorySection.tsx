"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Grid3X3 } from "lucide-react";
import type { Category } from "@/lib/categories";

type Props = { categories: Category[] };

export function CategorySection({ categories }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 0.8]);
  const headerY = useTransform(scrollYProgress, [0.1, 0.4], [50, -30]);
  const card0Y = useTransform(scrollYProgress, [0.2, 0.5], [60, -25]);
  const card1Y = useTransform(scrollYProgress, [0.25, 0.55], [55, -20]);
  const card2Y = useTransform(scrollYProgress, [0.3, 0.6], [50, -30]);
  const cardTransforms = [card0Y, card1Y, card2Y];

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-14 md:py-20">
      {/* Parallax ambient glows - terracotta section accent */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute left-1/4 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta/20 blur-[140px]"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-chai/18 blur-[100px]"
      />
      <div className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-terracotta/12 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header with parallax */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="accent-terracotta mb-10 text-center"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-terracotta/90">
            Browse our range
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Shop by category
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
            Discover our range of premium bamboo and eco-friendly products
          </p>
          <div className="divider-rangoli mx-auto mt-6 w-24 text-terracotta/60" />
        </motion.div>

        {/* Category cards - glass effect with individual parallax */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-full overflow-hidden rounded-3xl border border-white/25 bg-white/[0.08] py-16 text-center shadow-[0_0_60px_-20px_rgba(200,107,59,0.15)] backdrop-blur-2xl"
            >
              <Grid3X3 className="mx-auto mb-4 h-12 w-12 text-white/50" strokeWidth={1.5} />
              <p className="text-white/90">
                No categories yet. Categories will appear here when added in the
                admin panel.
              </p>
            </motion.div>
          ) : (
            categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                style={{ y: cardTransforms[i % 3] ?? 0 }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-cream shadow-[0_0_40px_-15px_rgba(200,107,59,0.12)] transition-all duration-500 hover:border-terracotta/30 hover:shadow-[0_0_60px_-15px_rgba(200,107,59,0.2)] hover:shadow-terracotta/20">
                    {/* Glass edge highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />

                    <div className="relative flex flex-col">
                      {/* Image container */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={
                            cat.imageUrl ||
                            "https://placehold.co/400x300/E5E0D8/809671?text=Category"
                          }
                          alt={cat.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          unoptimized={cat.imageUrl?.startsWith("http")}
                        />
                        {/* Glass overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>

                      {/* Content - cream background */}
                      <div className="relative border-t border-almond/60 bg-cream px-6 py-5">
                        <h3 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                          {cat.name}
                        </h3>
                        <p className="mt-1 text-sm text-foreground-muted">
                          View products in this category
                        </p>

                        {/* Terracotta CTA with icon */}
                        <span className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-terracotta px-5 py-3 font-medium text-white shadow-md transition-all duration-300 group-hover:bg-[#b55a2f] group-hover:shadow-lg group-hover:shadow-[0_8px_30px_rgba(200,107,59,0.3)]">
                          View Products
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
