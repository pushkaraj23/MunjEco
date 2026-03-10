"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Grid3X3 } from "lucide-react";
import type { Category } from "@/lib/categories";

type Props = { categories: Category[] };

const CATEGORY_FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1516652695352-6118f7cc1a07?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1659644569209-1c397e64f7c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584473457406-6240486418e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1759607236409-1df137ecb3b6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

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
    <section
      ref={ref}
      className="relative border-t border-border/60 bg-background py-20 md:py-28"
    >
      {/* Subtle ambient fields, not decorative blobs */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute inset-y-10 left-0 w-40 bg-gradient-to-r from-terracotta/12 to-transparent"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute inset-y-10 right-0 w-40 bg-gradient-to-l from-chai/12 to-transparent"
      />

      <div className="relative mx-auto flex max-w-6xl 2xl:max-w-7xl flex-col gap-14 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 lg:flex-row">
        {/* Section header with parallax - left, narrow column */}
        <motion.header
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-sm lg:pt-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta/90 sm:text-sm">
            Browse our range
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Shop by category
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground-muted">
            Discover our range of premium bamboo and eco-friendly products.
          </p>
        </motion.header>

        {/* Category cards - asymmetrical grid with edge-to-edge imagery */}
        <div className="grid flex-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              className="col-span-full border border-border/70 bg-background-alt px-8 py-16 text-left"
            >
              <Grid3X3
                className="mb-4 h-10 w-10 text-foreground-muted"
                strokeWidth={1.5}
              />
              <p className="max-w-md text-sm leading-relaxed text-foreground">
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
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="group block h-full"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-sm border border-border/60 bg-background-alt/60 transition-colors duration-300 hover:border-terracotta/70">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={
                          cat.imageUrl ||
                          CATEGORY_FALLBACK_IMAGES[i % CATEGORY_FALLBACK_IMAGES.length]
                        }
                        alt={cat.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized={cat.imageUrl?.startsWith("http")}
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between px-5 py-5">
                      <div className="space-y-1.5">
                        <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground md:text-xl">
                          {cat.name}
                        </h3>
                        <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted/80">
                          View products in this category
                        </p>
                      </div>

                      <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.22em] text-foreground transition-colors group-hover:text-terracotta">
                        <span>Explore</span>
                        <ArrowRight
                          className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          strokeWidth={2}
                        />
                      </span>
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
