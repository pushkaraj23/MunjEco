"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

type Benefit = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type WhyChooseBenefitsColumnProps = {
  items: Benefit[];
  offset?: number;
  align?: "left" | "right";
};

export function WhyChooseBenefitsColumn({
  items,
  offset = 0,
  align = "left",
}: WhyChooseBenefitsColumnProps) {
  const isLeft = align === "left";

  return (
    <div className="relative space-y-6">
      {items.map((benefit, index) => (
        <WhyItem
          key={benefit.title}
          benefit={benefit}
          index={offset + index}
        />
      ))}
    </div>
  );
}

function WhyItem({ benefit, index }: { benefit: Benefit; index: number }) {
  const Icon = benefit.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: 0.05 + index * 0.04,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex gap-4 rounded-none border border-border/70 bg-primary/8 backdrop-blur-sm px-5 py-4 shadow-sm transition-colors duration-200 hover:border-primary/40"
    >
      <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <div>
        <h3 className="font-heading text-base font-semibold text-foreground md:text-lg">
          {benefit.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
          {benefit.desc}
        </p>
      </div>
    </motion.article>
  );
}

