"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type WhyChooseCenterCardProps = {
  imageUrl: string;
  caption: string;
};

export function WhyChooseCenterCard({
  imageUrl,
  caption,
}: WhyChooseCenterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full rounded-lg max-w-md overflow-hidden border border-border bg-background shadow-card"
    >
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt="Eco‑friendly Indian lifestyle products arranged together"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 80vw, 30vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      <div className="px-6 pb-6 pt-4 text-center">
        <p className="text-sm font-medium text-foreground md:text-base">
          {caption}
        </p>
      </div>
    </motion.div>
  );
}

