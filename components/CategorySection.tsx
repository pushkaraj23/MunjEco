// "use client";

// import { useRef } from "react";
// import Link from "next/link";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { ArrowRight, Grid3X3 } from "lucide-react";
// import type { Category } from "@/lib/categories";

// type Props = { categories: Category[] };

// export function CategorySection({ categories }: Props) {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const glow1Opacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
//   const glow2Opacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 0.8]);
//   const headerY = useTransform(scrollYProgress, [0.1, 0.4], [50, -30]);
//   const card0Y = useTransform(scrollYProgress, [0.2, 0.5], [60, -25]);
//   const card1Y = useTransform(scrollYProgress, [0.25, 0.55], [55, -20]);
//   const card2Y = useTransform(scrollYProgress, [0.3, 0.6], [50, -30]);
//   const cardTransforms = [card0Y, card1Y, card2Y];

//   return (
//     <section ref={ref} className="relative overflow-hidden px-6 py-14 md:py-20">
//       {/* Parallax ambient glows - terracotta section accent */}
//       <motion.div
//         style={{ opacity: glow1Opacity }}
//         className="pointer-events-none absolute left-1/4 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta/20 blur-[140px]"
//       />
//       <motion.div
//         style={{ opacity: glow2Opacity }}
//         className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-chai/18 blur-[100px]"
//       />
//       <div className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-terracotta/12 blur-[80px]" />

//       <div className="relative mx-auto max-w-7xl">
//         {/* Section header with parallax */}
//         <motion.div
//           style={{ y: headerY }}
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="accent-terracotta mb-10 text-center"
//         >
//           <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-terracotta/90">
//             Browse our range
//           </p>
//           <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
//             Shop by category
//           </h2>
//           <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
//             Discover our range of premium bamboo and eco-friendly products
//           </p>
//           <div className="divider-rangoli mx-auto mt-6 w-24 text-terracotta/60" />
//         </motion.div>

//         {/* Category cards - glass effect with individual parallax */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {categories.length === 0 ? (
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="col-span-full overflow-hidden rounded-3xl border border-white/25 bg-white/[0.08] py-16 text-center shadow-[0_0_60px_-20px_rgba(200,107,59,0.15)] backdrop-blur-2xl"
//             >
//               <Grid3X3 className="mx-auto mb-4 h-12 w-12 text-white/50" strokeWidth={1.5} />
//               <p className="text-white/90">
//                 No categories yet. Categories will appear here when added in the
//                 admin panel.
//               </p>
//             </motion.div>
//           ) : (
//             categories.map((cat, i) => (
//               <motion.div
//                 key={cat.id}
//                 style={{ y: cardTransforms[i % 3] ?? 0 }}
//                 initial={{ opacity: 0, y: 32 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-40px" }}
//                 transition={{
//                   delay: i * 0.1,
//                   duration: 0.6,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//               >
//                 <Link
//                   href={`/products?category=${cat.slug}`}
//                   className="group block"
//                 >
//                   <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-cream shadow-[0_0_40px_-15px_rgba(200,107,59,0.12)] transition-all duration-500 hover:border-terracotta/30 hover:shadow-[0_0_60px_-15px_rgba(200,107,59,0.2)] hover:shadow-terracotta/20">
//                     {/* Glass edge highlight */}
//                     <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />

//                     <div className="relative flex flex-col">
//                       {/* Image container */}
//                       <div className="relative aspect-[4/3] overflow-hidden">
//                         <Image
//                           src={
//                             cat.imageUrl ||
//                             "https://placehold.co/400x300/E5E0D8/809671?text=Category"
//                           }
//                           alt={cat.name}
//                           fill
//                           className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                           sizes="(max-width: 768px) 100vw, 33vw"
//                           unoptimized={cat.imageUrl?.startsWith("http")}
//                         />
//                         {/* Glass overlay on hover */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                       </div>

//                       {/* Content - cream background */}
//                       <div className="relative border-t border-almond/60 bg-cream px-6 py-5">
//                         <h3 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
//                           {cat.name}
//                         </h3>
//                         <p className="mt-1 text-sm text-foreground-muted">
//                           View products in this category
//                         </p>

//                         {/* Terracotta CTA with icon */}
//                         <span className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-terracotta px-5 py-3 font-medium text-white shadow-md transition-all duration-300 group-hover:bg-[#b55a2f] group-hover:shadow-lg group-hover:shadow-[0_8px_30px_rgba(200,107,59,0.3)]">
//                           View Products
//                           <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Grid3X3, Sparkles, Leaf, Package, Star } from "lucide-react";
import type { Category } from "@/lib/categories";

type Props = { categories: Category[] };

// Animated background shapes
const FloatingShape = ({ 
  className, 
  delay = 0 
}: { 
  className: string; 
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 20,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    className={className}
  />
);

export function CategorySection({ categories }: Props) {
  const ref = useRef<HTMLElement>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const headerY = useTransform(scrollYProgress, [0.1, 0.4], [30, -20]);

  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden bg-gradient-to-b from-green-200 via-green-100 to-white
 py-20 md:py-32"
    >
      {/* Decorative background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0"
      >
        {/* Gradient orbs */}
        <div className="absolute -left-20 top-20 h-[400px] w-[400px] rounded-full bg-emerald-200/40 blur-[100px]" />
        <div className="absolute -right-20 bottom-40 h-[350px] w-[350px] rounded-full bg-teal-200/30 blur-[80px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/50 blur-[120px]" />
      </motion.div>

      {/* Floating decorative shapes */}
      <FloatingShape 
        className="absolute left-[10%] top-[15%] h-20 w-20 rounded-full border border-emerald-200/50 bg-emerald-100/20"
        delay={0}
      />
      <FloatingShape 
        className="absolute right-[15%] top-[25%] h-16 w-16 rounded-2xl border border-teal-200/50 bg-teal-100/20"
        delay={5}
      />
      <FloatingShape 
        className="absolute bottom-[20%] left-[20%] h-12 w-12 rounded-xl border border-green-200/50 bg-green-100/20"
        delay={10}
      />

      {/* Subtle pattern overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Leaf decorations */}
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute left-[5%] top-[30%] text-emerald-200/60"
      >
        <Leaf className="h-16 w-16" strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, -15, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="pointer-events-none absolute bottom-[25%] right-[8%] text-teal-200/50"
      >
        <Leaf className="h-20 w-20" strokeWidth={1} />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center md:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">
              Explore Our Collection
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Shop by{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                Category
              </span>
              {/* Underline decoration */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isHeaderInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <motion.path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isHeaderInView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
            Discover our curated selection of premium eco-friendly products, 
            crafted with care for you and the planet.
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-8"
          >
            {[
              { value: "50+", label: "Products" },
              { value: "100%", label: "Eco-Friendly" },
              { value: "4.9", label: "Rating", icon: Star },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-600">
                {stat.icon && <stat.icon className="h-4 w-4 text-amber-500 fill-amber-500" />}
                <span className="text-xl font-bold text-emerald-600">{stat.value}</span>
                <span className="text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Category cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {categories.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-full overflow-hidden rounded-3xl border-2 border-dashed border-emerald-200 bg-emerald-50/50 py-20 text-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Grid3X3 className="mx-auto mb-6 h-16 w-16 text-emerald-300" strokeWidth={1} />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800">No categories yet</h3>
              <p className="mt-2 text-gray-500">
                Categories will appear here when added in the admin panel.
              </p>
            </motion.div>
          ) : (
            categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="group block h-full"
                >
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full overflow-hidden rounded-3xl bg-white shadow-lg shadow-emerald-100/50 ring-1 ring-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/50 hover:ring-emerald-200"
                  >
                    {/* Premium badge */}
                    <div className="absolute right-4 top-4 z-10">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-lg backdrop-blur-sm"
                      >
                        <Leaf className="h-3 w-3" />
                        Eco-Friendly
                      </motion.div>
                    </div>

                    {/* Image container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-emerald-50">
                      <Image
                        src={
                          cat.imageUrl ||
                          "https://placehold.co/400x300/E5E0D8/059669?text=Category"
                        }
                        alt={cat.name}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized={cat.imageUrl?.startsWith("http")}
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                    </div>

                    {/* Content area */}
                    <div className="relative p-6">
                      {/* Decorative top border */}
                      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

                      {/* Category info */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-emerald-700">
                          {cat.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Explore our premium {cat.name.toLowerCase()} collection
                        </p>
                      </div>

                      {/* Product count indicator */}
                      <div className="mb-5 flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Package className="h-4 w-4 text-emerald-500" />
                          <span>Premium Products</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative overflow-hidden rounded-2xl"
                      >
                        <div className="flex w-full items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-emerald-500/30">
                          <span>View Products</span>
                          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                        
                        {/* Button shine effect */}
                        <motion.div
                          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "200%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-10 translate-y-10 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-2xl transition-all duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />
                  </motion.div>
                </Link>
              </motion.div>
            ))
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-emerald-200 bg-white px-8 py-4 font-semibold text-emerald-700 shadow-lg shadow-emerald-100/50 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-xl"
          >
            <span>View All Products</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-gray-100 pt-12 md:gap-10"
        >
          {[
            { icon: "🌿", text: "100% Natural" },
            { icon: "♻️", text: "Sustainable" },
            { icon: "🌍", text: "Eco-Conscious" },
            { icon: "✨", text: "Premium Quality" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="flex items-center gap-2 text-gray-500"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}