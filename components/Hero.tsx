// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// type HeroProps = {
//   title?: string;
//   subtitle?: string;
//   primaryCta?: string;
//   primaryHref?: string;
//   showSecondary?: boolean;
// };

// const HERO_BG_IMAGE =
//   "https://images.unsplash.com/photo-1759523131742-af817477bcd9";

// export function Hero({
//   title = "Sustainable Indian Products for Global Markets",
//   subtitle = "Eco-friendly, plastic-free lifestyle products from India — crafted responsibly to support livelihoods and restore balance with nature.",
//   primaryCta = "Explore Products",
//   primaryHref = "/products",
//   showSecondary = true,
// }: HeroProps) {
//   const { scrollY } = useScroll();
//   const backgroundY = useTransform(scrollY, [0, 600], [0, 150]);
//   const contentOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
//   const contentY = useTransform(scrollY, [0, 400], [0, 80]);

//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* Parallax background image */}
//       <motion.div
//         style={{ y: backgroundY }}
//         className="absolute inset-0 -inset-y-16"
//       >
//         <Image
//           src={HERO_BG_IMAGE}
//           alt="Eco-friendly bamboo and wooden products"
//           fill
//           className="object-cover"
//           priority
//           sizes="100vw"
//         />
//       </motion.div>

//       {/* Gradient overlay - depth and contrast */}
//       <div className="gradient-hero-overlay absolute inset-0" />
//       <div className="gradient-hero-vignette absolute inset-0" />

//       {/* Soft glow orbs - premium depth, matcha accent */}
//       <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-matcha/25 blur-[100px]" />
//       <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-pistache/18 blur-[80px]" />

//       {/* Rangoli-style decorative dots along bottom */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
//       <div className="pattern-dot-rangoli pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-30" />

//       {/* Content - with parallax fade */}
//       <motion.div
//         style={{ opacity: contentOpacity, y: contentY }}
//         className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-20 md:pt-32"
//       >
//         <div className="mx-auto max-w-4xl text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             className="text-contrast-strong font-heading text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl xl:text-7xl"
//           >
//             {title}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
//             className="text-contrast-light mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white md:text-lg"
//           >
//             {subtitle}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
//           >
//             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
//               <Link
//                 href={primaryHref}
//                 className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 font-semibold text-carob shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:bg-white/95 hover:shadow-xl hover:shadow-matcha/20"
//               >
//                 {primaryCta}
//               </Link>
//             </motion.div>
//             {showSecondary && (
//               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
//                 <Link
//                   href="/contact"
//                   className="text-contrast-subtle inline-flex items-center justify-center rounded-2xl border border-white/50 bg-black/50 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-white/70"
//                 >
//                   Request a Bulk Quote
//                 </Link>
//               </motion.div>
//             )}
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryHref?: string;
  showSecondary?: boolean;
};

const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1759523131742-af817477bcd9";

// Floating particles for eco effect
const FloatingLeaf = ({ delay, duration, left }: { delay: number; duration: number; left: string }) => (
  <motion.div
    initial={{ y: "100vh", opacity: 0, rotate: 0 }}
    animate={{ 
      y: "-100vh", 
      opacity: [0, 1, 1, 0],
      rotate: 360 
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    className="pointer-events-none absolute text-emerald-400/30"
    style={{ left }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
    </svg>
  </motion.div>
);

export function Hero({
  title = "Sustainable Indian Products for Global Markets",
  subtitle = "Eco-friendly, plastic-free lifestyle products from India — crafted responsibly to support livelihoods and restore balance with nature.",
  primaryCta = "Explore Products",
  primaryHref = "/products",
  showSecondary = true,
}: HeroProps) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 150]);
  const backgroundScale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, 100]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-emerald-950">
      {/* Parallax background image */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 -inset-y-24"
      >
        <Image
          src={HERO_BG_IMAGE}
          alt="Eco-friendly bamboo and wooden products"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Color overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-900/50 to-emerald-950/90" />
      </motion.div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-teal-900/40" />
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,78,59,0.4)_100%)]" />

      {/* Animated glow orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-teal-500/20 blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-green-400/15 blur-[80px]" 
      />

      {/* Floating leaves animation */}
      {mounted && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <FloatingLeaf delay={0} duration={15} left="10%" />
          <FloatingLeaf delay={3} duration={18} left="25%" />
          <FloatingLeaf delay={6} duration={20} left="45%" />
          <FloatingLeaf delay={9} duration={16} left="65%" />
          <FloatingLeaf delay={12} duration={22} left="80%" />
          <FloatingLeaf delay={4} duration={19} left="90%" />
        </div>
      )}

      {/* Decorative grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-950 via-emerald-950/50 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-20 md:pt-32"
      >
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-sm font-medium text-emerald-300">
              🌿 100% Eco-Friendly & Sustainable
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-white">Sustainable </span>
            <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent">
              Indian Products
            </span>
            <br />
            <span className="text-white">for </span>
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-green-300 bg-clip-text text-transparent">
              Global Markets
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-emerald-100/80 md:text-xl"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            {/* Primary CTA */}
            <motion.div 
              whileHover={{ scale: 1.03, y: -2 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={primaryHref}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40"
              >
                <span className="relative z-10">{primaryCta}</span>
                <svg 
                  className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            {showSecondary && (
              <motion.div 
                whileHover={{ scale: 1.03, y: -2 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-950/50 px-8 py-4 font-semibold text-emerald-100 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-900/50"
                >
                  <span>Request a Bulk Quote</span>
                  <svg 
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {[
              { icon: "🌱", label: "Plastic-Free" },
              { icon: "🇮🇳", label: "Made in India" },
              { icon: "♻️", label: "Biodegradable" },
              { icon: "🤝", label: "Fair Trade" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 text-emerald-200/70"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-emerald-300/60">
              Scroll
            </span>
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-emerald-400/30 p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 w-1 rounded-full bg-emerald-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}