// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Leaf, Package, Globe, ShieldCheck } from "lucide-react";

// const items = [
//   {
//     icon: Leaf,
//     label: "Natural & Sustainable",
//     desc: "Eco-conscious materials",
//   },
//   {
//     icon: Package,
//     label: "Export-Ready Quality",
//     desc: "Premium packaging",
//   },
//   {
//     icon: Globe,
//     label: "Global Reach",
//     desc: "Serving worldwide",
//   },
//   {
//     icon: ShieldCheck,
//     label: "Ethical Sourcing",
//     desc: "Responsible supply",
//   },
// ];

// export function TrustBar() {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const containerY = useTransform(scrollYProgress, [0, 0.4], [40, -20]);
//   const glowOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
//   const card0Y = useTransform(scrollYProgress, [0.15, 0.45], [30, -15]);
//   const card1Y = useTransform(scrollYProgress, [0.18, 0.48], [35, -10]);
//   const card2Y = useTransform(scrollYProgress, [0.21, 0.51], [30, -20]);
//   const card3Y = useTransform(scrollYProgress, [0.24, 0.54], [35, -15]);

//   const cardTransforms = [card0Y, card1Y, card2Y, card3Y];

//   return (
//     <section ref={ref} className="relative px-6 py-8 md:py-10">
//       {/* Ambient glow orbs - parallax */}
//       <motion.div
//         style={{ opacity: glowOpacity }}
//         className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pistache/25 blur-[120px]"
//       />
//       <motion.div
//         style={{ opacity: glowOpacity }}
//         className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-chai/15 blur-[100px]"
//       />

//       <motion.div
//         style={{ y: containerY }}
//         className="relative mx-auto max-w-6xl"
//       >
//         {/* Glass container - pistache accent section */}
//         <div className="accent-pistache relative rounded-3xl border border-white/20 bg-black/35 px-8 py-10 shadow-[0_0_60px_-15px_rgba(162,183,154,0.2)] backdrop-blur-2xl md:rounded-[2rem] md:px-12 md:py-12">
//           {/* Block-print accent line top-left */}
//           <div className="absolute left-0 top-0 h-1 w-20 rounded-r-full bg-pistache/50" />
//           <div className="absolute right-0 bottom-0 h-1 w-28 rounded-l-full bg-chai/40" />
//           {/* Inner glow ring */}
//           <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/15 md:rounded-[2rem]" />
//           <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-white/5 to-transparent opacity-60 md:rounded-[2rem]" />
//           {/* Pattern jali subtle overlay */}
//           <div className="pattern-jali pointer-events-none absolute inset-0 rounded-3xl opacity-30 md:rounded-[2rem]" />

//           <div className="relative flex flex-col gap-10">
//             {/* Trust cards - glass effect with individual parallax */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//               {items.map((item, i) => (
//                 <motion.div
//                   key={item.label}
//                   style={{ y: cardTransforms[i] }}
//                   initial={{ opacity: 0, y: 16 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     delay: i * 0.08,
//                     duration: 0.5,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   whileHover={{ y: -6, transition: { duration: 0.2 } }}
//                   className="group relative flex flex-col items-center rounded-2xl border border-white/20 bg-black/30 px-6 py-8 shadow-[0_0_30px_-10px_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-pistache/40 hover:bg-black/40 hover:shadow-[0_0_40px_-10px_rgba(162,183,154,0.25)]"
//                 >
//                   <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-pistache transition-colors group-hover:border-pistache/50 group-hover:bg-pistache/25 group-hover:shadow-[0_0_20px_rgba(162,183,154,0.2)]">
//                     <item.icon className="h-7 w-7" strokeWidth={1.5} />
//                   </div>
//                   <h3 className="font-heading text-base font-semibold text-white">
//                     {item.label}
//                   </h3>
//                   <p className="mt-1 text-center text-sm text-white/70">
//                     {item.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Leaf, Package, Globe, ShieldCheck, Sparkles, Award, Truck, Heart } from "lucide-react";

const items = [
  {
    icon: Leaf,
    label: "Natural & Sustainable",
    desc: "Eco-conscious materials sourced responsibly",
    color: "emerald",
    stat: "100%",
    statLabel: "Organic",
  },
  {
    icon: Package,
    label: "Export-Ready Quality",
    desc: "Premium packaging that protects nature",
    color: "teal",
    stat: "50+",
    statLabel: "Countries",
  },
  {
    icon: Globe,
    label: "Global Reach",
    desc: "Serving customers worldwide with care",
    color: "green",
    stat: "10K+",
    statLabel: "Clients",
  },
  {
    icon: ShieldCheck,
    label: "Ethical Sourcing",
    desc: "Fair trade & responsible supply chain",
    color: "cyan",
    stat: "100%",
    statLabel: "Certified",
  },
];

const colorVariants = {
  emerald: {
    gradient: "from-emerald-500 to-green-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
    hoverBorder: "hover:border-emerald-400/50",
    hoverBg: "group-hover:bg-emerald-500/20",
    iconBg: "group-hover:bg-emerald-500/30",
  },
  teal: {
    gradient: "from-teal-500 to-cyan-500",
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    text: "text-teal-400",
    glow: "shadow-teal-500/20",
    hoverBorder: "hover:border-teal-400/50",
    hoverBg: "group-hover:bg-teal-500/20",
    iconBg: "group-hover:bg-teal-500/30",
  },
  green: {
    gradient: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    glow: "shadow-green-500/20",
    hoverBorder: "hover:border-green-400/50",
    hoverBg: "group-hover:bg-green-500/20",
    iconBg: "group-hover:bg-green-500/30",
  },
  cyan: {
    gradient: "from-cyan-500 to-teal-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/20",
    hoverBorder: "hover:border-cyan-400/50",
    hoverBg: "group-hover:bg-cyan-500/20",
    iconBg: "group-hover:bg-cyan-500/30",
  },
};

// Animated counter component
const AnimatedCounter = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-2xl font-bold text-white"
      >
        {value}
      </motion.div>
      <div className="text-xs text-white/50">{label}</div>
    </div>
  );
};

export function TrustBar() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const containerY = useTransform(scrollYProgress, [0, 0.5], [60, -30]);
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [5, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden px-4 py-16 md:px-6 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-950/95 to-emerald-950" />

      {/* Animated grid pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Ambient glow orbs */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[150px]"
      />
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[120px]"
      />
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-green-500/10 blur-[100px]"
      />

      <motion.div
        style={{ y: containerY }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300">Why Choose Us</span>
          </motion.div>

          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Businesses Worldwide
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-100/60">
            We deliver premium eco-friendly products with unmatched quality and ethical sourcing practices.
          </p>
        </motion.div>

        {/* Glass container */}
        <motion.div
          style={{ rotateX }}
          className="relative rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/80 via-emerald-900/40 to-emerald-950/80 p-6 shadow-2xl shadow-emerald-900/30 backdrop-blur-2xl md:rounded-[2.5rem] md:p-10"
        >
          {/* Decorative corners */}
          <div className="absolute left-0 top-0 h-20 w-1 rounded-b-full bg-gradient-to-b from-emerald-400 to-transparent" />
          <div className="absolute left-0 top-0 h-1 w-20 rounded-r-full bg-gradient-to-r from-emerald-400 to-transparent" />
          <div className="absolute bottom-0 right-0 h-20 w-1 rounded-t-full bg-gradient-to-t from-teal-400 to-transparent" />
          <div className="absolute bottom-0 right-0 h-1 w-20 rounded-l-full bg-gradient-to-l from-teal-400 to-transparent" />

          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 md:rounded-[2.5rem]" />
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-white/5 via-transparent to-transparent md:rounded-[2.5rem]" />

          {/* Trust cards grid */}
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {items.map((item, i) => {
              const colors = colorVariants[item.color as keyof typeof colorVariants];
              
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 } 
                  }}
                  className={`group relative flex flex-col items-center overflow-hidden rounded-2xl border ${colors.border} bg-emerald-950/50 p-6 shadow-lg ${colors.glow} backdrop-blur-xl transition-all duration-500 ${colors.hoverBorder} hover:shadow-xl md:p-8`}
                >
                  {/* Card background glow */}
                  <div className={`absolute inset-0 ${colors.bg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  
                  {/* Floating particles on hover */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {[...Array(3)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        className={`absolute h-1 w-1 rounded-full ${colors.text} opacity-0 group-hover:opacity-60`}
                        initial={{ y: 100, x: Math.random() * 100 }}
                        animate={{ 
                          y: [-20, -80],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: idx * 0.3,
                          repeat: Infinity,
                        }}
                        style={{ left: `${20 + idx * 30}%` }}
                      />
                    ))}
                  </div>

                  {/* Icon */}
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border ${colors.border} ${colors.bg} ${colors.text} transition-all duration-500 ${colors.iconBg} group-hover:shadow-lg ${colors.glow}`}
                  >
                    <item.icon className="h-8 w-8" strokeWidth={1.5} />
                    
                    {/* Icon ring animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 group-hover:opacity-100`}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Stat badge */}
                  <div className="mb-3">
                    <AnimatedCounter value={item.stat} label={item.statLabel} />
                  </div>

                  {/* Text content */}
                  <h3 className="relative text-center text-lg font-semibold text-white">
                    {item.label}
                  </h3>
                  <p className="relative mt-2 text-center text-sm leading-relaxed text-emerald-100/60">
                    {item.desc}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r ${colors.gradient} transition-all duration-500 group-hover:w-1/2`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-emerald-500/20 pt-8 md:gap-12"
          >
            {[
              { icon: Award, label: "ISO Certified", value: "9001:2015" },
              { icon: Truck, label: "Fast Shipping", value: "Worldwide" },
              { icon: Heart, label: "Customer Rating", value: "4.9/5" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{stat.value}</div>
                  <div className="text-xs text-emerald-100/50">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring" }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950 px-6 py-3 shadow-xl shadow-emerald-900/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-sm font-medium text-emerald-300">
              Trusted by 10,000+ businesses globally
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}