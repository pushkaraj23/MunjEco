"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Package, Globe, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Leaf,
    label: "Natural & Sustainable",
    desc: "Eco-conscious materials",
  },
  {
    icon: Package,
    label: "Export-Ready Quality",
    desc: "Premium packaging",
  },
  {
    icon: Globe,
    label: "Global Reach",
    desc: "Serving worldwide",
  },
  {
    icon: ShieldCheck,
    label: "Ethical Sourcing",
    desc: "Responsible supply",
  },
];

export function TrustBar() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const containerY = useTransform(scrollYProgress, [0, 0.4], [40, -20]);
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const card0Y = useTransform(scrollYProgress, [0.15, 0.45], [30, -15]);
  const card1Y = useTransform(scrollYProgress, [0.18, 0.48], [35, -10]);
  const card2Y = useTransform(scrollYProgress, [0.21, 0.51], [30, -20]);
  const card3Y = useTransform(scrollYProgress, [0.24, 0.54], [35, -15]);

  const cardTransforms = [card0Y, card1Y, card2Y, card3Y];

  return (
    <section ref={ref} className="relative px-6 py-8 md:py-10">
      {/* Ambient glow orbs - parallax */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pistache/25 blur-[120px]"
      />
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-chai/15 blur-[100px]"
      />

      <motion.div
        style={{ y: containerY }}
        className="relative mx-auto max-w-6xl"
      >
        {/* Glass container - pistache accent section */}
        <div className="accent-pistache relative rounded-3xl border border-white/20 bg-black/35 px-8 py-10 shadow-[0_0_60px_-15px_rgba(162,183,154,0.2)] backdrop-blur-2xl md:rounded-[2rem] md:px-12 md:py-12">
          {/* Block-print accent line top-left */}
          <div className="absolute left-0 top-0 h-1 w-20 rounded-r-full bg-pistache/50" />
          <div className="absolute right-0 bottom-0 h-1 w-28 rounded-l-full bg-chai/40" />
          {/* Inner glow ring */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/15 md:rounded-[2rem]" />
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-white/5 to-transparent opacity-60 md:rounded-[2rem]" />
          {/* Pattern jali subtle overlay */}
          <div className="pattern-jali pointer-events-none absolute inset-0 rounded-3xl opacity-30 md:rounded-[2rem]" />

          <div className="relative flex flex-col gap-10">
            {/* Trust cards - glass effect with individual parallax */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item, i) => (
                <motion.div
                  key={item.label}
                  style={{ y: cardTransforms[i] }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative flex flex-col items-center rounded-2xl border border-white/20 bg-black/30 px-6 py-8 shadow-[0_0_30px_-10px_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-pistache/40 hover:bg-black/40 hover:shadow-[0_0_40px_-10px_rgba(162,183,154,0.25)]"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-pistache transition-colors group-hover:border-pistache/50 group-hover:bg-pistache/25 group-hover:shadow-[0_0_20px_rgba(162,183,154,0.2)]">
                    <item.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-center text-sm text-white/70">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
