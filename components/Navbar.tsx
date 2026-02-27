"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-almond/80 bg-cream/90 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-0">
        <Link href="/" className="relative block w-auto">
          <img
            src="/full-logo.png"
            alt="MunjEco Global"
            className="h-20 w-auto object-contain object-left"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground-muted transition-all duration-300 hover:text-matcha"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-2xl bg-matcha px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:shadow-[0_0_30px_rgba(128,150,113,0.3)] hover:-translate-y-0.5"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-carob transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-carob transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-carob transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-almond/80 bg-cream/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground-muted transition-all duration-300 hover:text-matcha"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl bg-matcha px-5 py-3 text-center font-semibold text-white shadow-card"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
