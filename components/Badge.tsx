"use client";

import { motion } from "framer-motion";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent";
  className?: string;
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";

  const variants = {
    default: "bg-almond/80 text-carob border border-almond",
    primary: "bg-matcha/30 text-carob border border-matcha/50",
    accent: "bg-chai/30 text-carob border border-chai/50",
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${base} ${variants[variant]} ${className}`.trim()}
    >
      {children}
    </motion.span>
  );
}
