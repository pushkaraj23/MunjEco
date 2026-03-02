// "use client";

// import { useRef } from "react";
// import Link from "next/link";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Sprout, Heart, ArrowRight } from "lucide-react";

// export function AboutSection() {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const glowOpacity = useTransform(scrollYProgress, [0.08, 0.35], [0, 1]);
//   const containerY = useTransform(scrollYProgress, [0.15, 0.5], [50, -25]);

//   return (
//     <section ref={ref} className="relative overflow-hidden px-6 py-14 md:py-20">
//       {/* Parallax ambient glows - chai accent section */}
//       <motion.div
//         style={{ opacity: glowOpacity }}
//         className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-chai/22 blur-[120px]"
//       />
//       <motion.div
//         style={{ opacity: glowOpacity }}
//         className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-turmeric/15 blur-[100px]"
//       />
//       <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-chai/12 blur-[80px]" />

//       <motion.div
//         style={{ y: containerY }}
//         className="relative mx-auto max-w-4xl"
//       >
//         {/* Glass card container */}
//         <div className="accent-chai relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 px-10 py-14 shadow-[0_0_60px_-15px_rgba(210,171,128,0.18)] backdrop-blur-2xl md:rounded-[2rem] md:px-16 md:py-20">
//           {/* Block-print accent bars */}
//           <div className="absolute left-0 top-0 h-1 w-24 rounded-r-full bg-chai/50" />
//           <div className="absolute right-0 bottom-0 h-1 w-32 rounded-l-full bg-turmeric/40" />
//           {/* Inner glow ring */}
//           <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 md:rounded-[2rem]" />
//           <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 via-transparent to-transparent md:rounded-[2rem]" />
//           <div className="pattern-paisley-subtle pointer-events-none absolute inset-0 rounded-3xl opacity-40 md:rounded-[2rem]" />

//           <div className="relative text-center">
//             {/* Icon badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//               className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-chai/30 bg-chai/15 px-4 py-2 backdrop-blur-sm"
//             >
//               <Sprout className="h-5 w-5 text-chai" strokeWidth={1.5} />
//               <span className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/90">
//                 About MunjEco Global
//               </span>
//             </motion.div>

//             <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
//               Rooted in Purpose. Built for Conscious Trade.
//             </h2>

//             <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
//               MunjEco Global was born from a simple belief — that business can
//               grow without harming the earth, and trade can uplift lives rather
//               than exploit them.
//             </p>

//             <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
//               We are a purpose-led Indian export company creating eco-friendly
//               lifestyle essentials and conscious handicrafts in collaboration
//               with responsible makers and artisan communities. Our focus is
//               simple: supporting livelihoods, reducing plastic use, and
//               delivering sustainable products to global markets with
//               consistency, care, and integrity.
//             </p>

//             {/* Trust hint with icon */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="mt-6 inline-flex items-center gap-2 text-sm text-white/70"
//             >
//               <Heart className="h-4 w-4 text-chai" strokeWidth={1.5} />
//               <span>Supporting livelihoods, one product at a time</span>
//             </motion.p>

//             {/* CTA button */}
//             <motion.div
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="mt-10"
//             >
//               <Link
//                 href="/about"
//                 className="group inline-flex items-center gap-2 rounded-2xl bg-chai px-6 py-3.5 font-semibold text-carob shadow-md transition-all duration-300 hover:bg-chai/90 hover:shadow-lg hover:shadow-[0_8px_30px_rgba(210,171,128,0.35)]"
//               >
//                 Learn More About Us
//                 <ArrowRight
//                   className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
//                   strokeWidth={2}
//                 />
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Sprout, 
  Heart, 
  ArrowRight, 
  Leaf, 
  Globe, 
  Users, 
  Award,
  TreePine,
  Recycle,
  HandHeart,
  Quote,
  CheckCircle2,
  Sparkles
} from "lucide-react";

// Animated counter component
const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="tabular-nums"
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}{suffix}
        </motion.span>
      )}
    </motion.span>
  );
};

// Floating leaf decoration
const FloatingLeaf = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0.4, 0.7, 0.4],
      y: [0, -15, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={className}
  >
    <Leaf className="h-full w-full" strokeWidth={1} />
  </motion.div>
);

const stats = [
  { value: 50, suffix: "+", label: "Products", icon: Sprout },
  { value: 10, suffix: "K+", label: "Happy Clients", icon: Users },
  { value: 30, suffix: "+", label: "Countries", icon: Globe },
  { value: 100, suffix: "%", label: "Sustainable", icon: Recycle },
];

const values = [
  {
    icon: TreePine,
    title: "Eco-Conscious",
    description: "Every product designed with minimal environmental impact",
  },
  {
    icon: HandHeart,
    title: "Fair Trade",
    description: "Supporting artisan communities with ethical partnerships",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Rigorous standards for export-ready excellence",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.6], [60, -20]);

  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden bg-emerald-950 py-24 md:py-32 lg:py-40"
    >
      {/* Background decorations */}
      <motion.div 
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0"
      >
        {/* Gradient orbs */}
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-100/60 blur-[120px]" />
        <div className="absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-teal-100/50 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-50/80 blur-[150px]" />
      </motion.div>

      {/* Floating leaves */}
      <FloatingLeaf 
        className="pointer-events-none absolute left-[8%] top-[20%] h-12 w-12 text-emerald-200" 
        delay={0} 
      />
      <FloatingLeaf 
        className="pointer-events-none absolute right-[12%] top-[30%] h-16 w-16 text-teal-200" 
        delay={2} 
      />
      <FloatingLeaf 
        className="pointer-events-none absolute bottom-[25%] left-[15%] h-10 w-10 text-green-200" 
        delay={4} 
      />
      <FloatingLeaf 
        className="pointer-events-none absolute bottom-[35%] right-[10%] h-14 w-14 text-emerald-200/80" 
        delay={1} 
      />

      {/* Dot pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left side - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative">
              {/* Decorative frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -inset-4 rounded-[2.5rem] border-2 border-emerald-200/50 md:-inset-6"
              />
              
              {/* Image */}
              <motion.div 
                style={{ scale: imageScale }}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-emerald-100 shadow-2xl shadow-emerald-200/50"
              >
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800"
                  alt="Sustainable eco-friendly products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
                
                {/* Quote overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-5 backdrop-blur-xl"
                >
                  <Quote className="mb-2 h-6 w-6 text-emerald-600" />
                  <p className="text-sm font-medium italic text-gray-700">
                    "Business can grow without harming the earth, and trade can uplift lives rather than exploit them."
                  </p>
                  <p className="mt-2 text-xs font-semibold text-emerald-600">
                    — MunjEco Global Philosophy
                  </p>
                </motion.div>
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -right-6 -top-6 rounded-2xl border border-emerald-100 bg-white p-5 shadow-xl shadow-emerald-100/50 md:-right-10 md:-top-10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-500">Eco-Friendly</div>
                  </div>
                </div>
              </motion.div>

              {/* Years badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
                className="absolute -bottom-4 -left-4 flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-500/30 md:-bottom-6 md:-left-6"
              >
                <span className="text-3xl font-bold">5+</span>
                <span className="text-xs">Years</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            ref={contentRef}
            style={{ y: contentY }}
            className="relative"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2"
            >
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">About MunjEco Global</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-white md:text-5xl"
            >
              Rooted in{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                Purpose
              </span>
              <br />
              Built for{" "}
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
                Conscious Trade
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 space-y-4"
            >
              <p className="text-lg leading-relaxed text-white">
                MunjEco Global was born from a simple belief — that business can
                grow without harming the earth, and trade can uplift lives rather
                than exploit them.
              </p>
              <p className="text-lg leading-relaxed text-white">
                We are a purpose-led Indian export company creating eco-friendly
                lifestyle essentials and conscious handicrafts in collaboration
                with responsible makers and artisan communities.
              </p>
            </motion.div>

            {/* Values grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 grid gap-4 sm:grid-cols-3"
            >
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group rounded-2xl border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-50 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600 transition-all duration-300 group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/30">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-black">{value.title}</h3>
                  <p className="mt-1 text-sm text-black">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {["Plastic-Free Products", "Artisan Made", "Global Shipping"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-emerald-200 bg-white px-8 py-4 font-semibold text-emerald-700 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50"
              >
                <Heart className="h-5 w-5" />
                <span>Get in Touch</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 shadow-xl shadow-emerald-100/50 md:p-12">
            {/* Decorative corners */}
            <div className="absolute left-0 top-0 h-16 w-1 rounded-b-full bg-gradient-to-b from-emerald-500 to-transparent" />
            <div className="absolute left-0 top-0 h-1 w-16 rounded-r-full bg-gradient-to-r from-emerald-500 to-transparent" />
            <div className="absolute bottom-0 right-0 h-16 w-1 rounded-t-full bg-gradient-to-t from-teal-500 to-transparent" />
            <div className="absolute bottom-0 right-0 h-1 w-16 rounded-l-full bg-gradient-to-l from-teal-500 to-transparent" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative text-center"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-black shadow-lg shadow-emerald-500/30 transition-all duration-300 group-hover:shadow-xl"
                  >
                    <stat.icon className="h-7 w-7" />
                  </motion.div>

                  {/* Number */}
                  <div className="text-4xl font-bold text-black md:text-5xl">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="mt-2 text-black">{stat.label}</div>

                  {/* Divider (except last) */}
                  {idx < stats.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-emerald-200 to-transparent lg:block" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center justify-center gap-2 border-t border-emerald-100 pt-8 text-center"
            >
              <Heart className="h-4 w-4 text-emerald-500" />
              <span className="text-sm text-white">
                Trusted by businesses across 30+ countries worldwide
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">
            <span className="text-xl">🌍</span>
            <span className="text-sm font-semibold text-emerald-700">Our Mission</span>
          </div>
          <p className="mt-6 text-xl font-medium leading-relaxed text-white md:text-2xl">
            "To create a sustainable future through{" "}
            <span className="text-emerald-600">conscious commerce</span>, 
            empowering artisans and delivering{" "}
            <span className="text-emerald-600">eco-friendly products</span>{" "}
            that make a difference."
          </p>
        </motion.div>
      </div>
    </section>
  );
}