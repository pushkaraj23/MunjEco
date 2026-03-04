"use client";

import { motion } from "framer-motion";
import { Leaf, Package, Globe, ShieldCheck } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

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
  return (
    <section className="relative overflow-visible border-y border-border/70 bg-primary-dark">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-8 py-8 sm:px-10 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16 xl:px-20">
        {/* Left: narrow editorial text block */}
        <div className="max-w-sm">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-white/70">
            Trusted fundamentals
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            The essentials we hold ourselves to with every product and shipment.
          </p>
        </div>

        {/* Right: linear list, no cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid w-full grid-cols-2 gap-x-10 gap-y-4 md:max-w-xl lg:grid-cols-4 lg:max-w-none"
        >
          {items.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="mt-0.5 text-accent-light">
                <item.icon className="h-4 w-4" strokeWidth={1.4} />
              </div>
              <div>
                <div className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white">
                  {item.label}
                </div>
                <div className="mt-1 text-xs text-white/60">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
