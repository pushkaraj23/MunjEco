"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

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
      className="relative mx-auto w-full max-w-md overflow-hidden border border-border bg-background-alt/90 shadow-card"
    >
      <DecoGraphic
        src="/graphics/img4.png"
        alt=""
        placement="bottom-right"
        size="sm"
        className="pointer-events-none opacity-40"
      />

      <div className="relative h-72 sm:h-80 md:h-96">
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

