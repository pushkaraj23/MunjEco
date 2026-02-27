"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
    { href: "mailto:munjecoglobal@gmail.com", label: "munjecoglobal@gmail.com" },
    { href: "tel:+919270952447", label: "+91 92709 52447" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-almond bg-gradient-to-b from-background-warm/50 to-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/full-logo.png"
                alt="MunjEco Global"
                width={180}
                height={40}
                className="h-10 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-foreground-muted">
              Made in India. Delivered globally. Eco‑friendly products | Ethical sourcing | Conscious
              trade.
            </p>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-matcha">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground-muted transition-all duration-300 hover:text-matcha"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 border-t border-almond pt-8">
          <p className="text-center text-sm text-foreground-muted">
            © {new Date().getFullYear()} MunjEco Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
