"use client";

import { motion } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

type WhyChooseHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function WhyChooseHeader({
  eyebrow,
  title,
  subtitle,
}: WhyChooseHeaderProps) {
  return (
    <div className="relative mb-10 md:mb-14">
      <DecoGraphic
        src="/graphics/img5.png"
        alt=""
        placement="top-right"
        size="sm"
        className="opacity-40"
      />

      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted sm:text-sm">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-foreground-muted md:text-base">
          {subtitle}
        </p>
        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </motion.header>
    </div>
  );
}

