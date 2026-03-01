"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

const footerLinks = {
  Products: [
    { href: "/products?category=pens", label: "Bamboo Pens" },
    { href: "/products?category=stationery", label: "Stationery" },
    { href: "/products?category=drinkware", label: "Drinkware" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/about#manufacturing", label: "Manufacturing" },
    { href: "/about#sustainability", label: "Sustainability" },
  ],
  Contact: [
    { href: "/contact", label: "Get a Quote" },
    {
      href: "mailto:munjecoglobal@gmail.com",
      label: "munjecoglobal@gmail.com",
      icon: Mail,
    },
    { href: "tel:+919270952447", label: "+91 92709 52447", icon: Phone },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1a2e1a]">
      {/* Dark gradient overlay - depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1e3520 0%, #1a2e1a 50%, #152018 100%)",
        }}
      />
      {/* Subtle matcha glow at top edge */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-matcha/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 md:pt-24 pb-5 md:pb-8">
        {/* Main footer content */}
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Logo & tagline - wider column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <Link
              href="/"
              className="mb-6 inline-block transition-opacity hover:opacity-90"
            >
              <Image
                src="/full-logo.png"
                alt="MunjEco Global"
                width={200}
                height={44}
                className="h-11 w-auto object-contain object-left brightness-0 invert opacity-95"
              />
            </Link>
            <p className="max-w-sm text-base leading-relaxed text-[#E8E6E1]">
              Made in India. Delivered Globally. Eco‑friendly products, ethical
              sourcing, and conscious trade.
            </p>
            {/* CTA link */}
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-matcha transition-colors hover:text-pistache"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </motion.div>

          {/* Link columns */}
          <div className="grid gap-12 sm:grid-cols-3 lg:col-span-8 lg:gap-8">
            {Object.entries(footerLinks).map(([title, links], groupIndex) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: groupIndex * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h4 className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => {
                    const Icon = "icon" in link ? link.icon : null;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group inline-flex items-center gap-2.5 text-[#D4D2CC] transition-colors hover:text-white"
                        >
                          {Icon && (
                            <Icon
                              className="h-4 w-4 shrink-0 text-matcha/80 transition-colors group-hover:text-matcha"
                              strokeWidth={1.5}
                            />
                          )}
                          <span className="border-b border-transparent transition-colors group-hover:border-matcha/50">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:gap-4">
          <div className="flex flex-col items-center gap-2 text-center md:flex-row md:items-center md:gap-4 md:text-left">
            <p className="text-sm text-[#B5B8B2]">
              © {new Date().getFullYear()} MunjEco Global. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <p className="text-sm text-[#B5B8B2]">
              Designed and Developed by{" "}
              <Link
                href="https://fibonce.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-matcha transition-colors hover:text-pistache hover:underline"
              >
                Fibonce Tech Solutions
              </Link>
            </p>
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-matcha/60" />
              <span className="h-2 w-2 rounded-full bg-pistache/50" />
              <span className="h-2 w-2 rounded-full bg-chai/40" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
