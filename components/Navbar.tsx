"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      const current = window.scrollY;
      setCollapsed(current > lastScrollY.current && current > 80);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: collapsed ? -120 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-4 right-4 top-4 z-50 mx-auto max-w-6xl rounded-3xl md:rounded-full border border-white/20 bg-black/50 px-6 py-4 backdrop-blur-xl md:left-8 md:right-8 md:top-6 md:px-8"
      >
        <nav className="flex items-center justify-between">
          <Link href="/" className="relative block">
            <img
              src="/full-logo.png"
              alt="MunjEco Global"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-contrast-subtle text-sm font-medium text-white transition-all duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-contrast-subtle rounded-xl bg-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/35 hover:shadow-[0_0_24px_rgba(255,255,255,0.2)]"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/20 mt-5 py-5 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-contrast-subtle text-white transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-contrast-subtle rounded-xl bg-white/25 px-4 py-3 text-center font-semibold text-white"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.header>
  );
}
