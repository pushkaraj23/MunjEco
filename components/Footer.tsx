"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { DecoGraphic } from "@/components/DecoGraphic";

const footerLinks = {
  Products: [
    { href: "/products?q=bamboo%20pen", label: "Bamboo Pens" },
    { href: "/products?q=stationery", label: "Stationery" },
    { href: "/products?q=drinkware", label: "Drinkware" },
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
    <footer className="relative overflow-visible border-t border-border/80 bg-primary-dark text-white">
      <DecoGraphic src="/graphics/img3.png" alt="" placement="bottom-left" size="md" className="opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-8 pb-6 pt-16 sm:px-10 md:px-12 md:pb-8 md:pt-20 lg:px-16 xl:px-20">
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
            <p className="max-w-sm text-sm leading-relaxed text-white/80 md:text-base">
              Made in India. Delivered Globally. Eco‑friendly products, ethical
              sourcing, and conscious trade.
            </p>
            {/* CTA link */}
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-matcha transition-colors hover:text-pistache"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </motion.div>

          {/* Link columns */}
          <div className="grid gap-12 sm:grid-cols-3 lg:col-span-8 lg:gap-10">
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
                <h4 className="mb-4 font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/80">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => {
                    const Icon = "icon" in link ? link.icon : null;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group inline-flex items-center gap-2.5 text-white/70 transition-colors hover:text-white"
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
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 text-left">
            <p className="text-xs text-white/60 md:text-sm">
              © {new Date().getFullYear()} MunjEco Global. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-xs md:flex-row md:items-center md:gap-4 md:text-sm">
            <p className="text-white/60">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
