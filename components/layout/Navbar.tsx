"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/about", label: "About" },
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
        y: collapsed ? -96 : 0,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-6xl 2xl:max-w-7xl items-center justify-between px-8 py-3 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <Link href="/" className="relative block">
          <img
            src="/full-logo.png"
            alt="MunjEco Global"
            className="h-9 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.22em] text-foreground-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-foreground px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
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
            className={`h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border/70 bg-background-alt px-6 pb-5 pt-3 sm:px-8 md:hidden"
          >
            <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
              <div className="border border-border bg-background px-4 py-4 shadow-card">
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between border-b border-border/60 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground-muted last:border-b-0 hover:text-foreground sm:text-sm"
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-3 inline-flex items-center justify-center border border-foreground px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background sm:text-sm"
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
