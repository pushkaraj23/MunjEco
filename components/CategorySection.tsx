"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Category } from "@/lib/categories";

type Props = { categories: Category[] };

export function CategorySection({ categories }: Props) {
  return (
    <section className="bokeh-bg relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-semibold text-carob md:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-4 text-foreground-muted">
            Discover our range of premium bamboo products
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.length === 0 ? (
            <p className="col-span-full text-center text-foreground-muted">
              No categories yet. Categories will appear here when added in the
              admin panel.
            </p>
          ) : (
            categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-almond bg-surface shadow-card transition-all duration-500 [transform-style:preserve-3d] hover:border-matcha/40 hover:shadow-elevated hover:shadow-[0_0_40px_rgba(128,150,113,0.15)]"
                >
                  <motion.div
                    className="relative aspect-[4/3] overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={cat.imageUrl || "https://placehold.co/400x300/E5E0D8/809671?text=Category"}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized={cat.imageUrl?.startsWith("http")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carob/40 via-matcha/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-xl font-semibold text-white drop-shadow-lg">
                        {cat.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/90 line-clamp-2">
                        View products in this category
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
