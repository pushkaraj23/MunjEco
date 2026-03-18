"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Category } from "@/lib/categories";
import { getCategories } from "@/lib/categories";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [productsOpen, setProductsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    void (async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch {
        // fail silently in navbar; dropdown will simply be empty
      }
    })();
  }, []);

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
      <nav className="mx-auto flex max-w-6xl 2xl:max-w-7xl items-center justify-between px-6 py-3 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <Link href="/" className="relative block">
          <img
            src="/full-logo.png"
            alt="MunjEco Global"
            className="h-9 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.href === "/products") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`relative inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] transition-colors duration-200 ${active
                      ? "bg-primary/12 text-primary"
                      : "text-foreground-muted hover:text-foreground hover:bg-primary/5"
                      }`}
                  >
                    <span>{link.label}</span>
                  </Link>

                  {categories.length > 0 && productsOpen && (
                    <div className="absolute left-0 top-full z-40 w-72 rounded-xl border border-border bg-background-alt/95 p-2 pt-3 text-left shadow-card backdrop-blur-sm">
                      <div className="flex flex-col gap-1">
                        <Link href={"/products"} className="truncate px-3 py-2 text-center rounded-md text-sm font-bold text-foreground hover:bg-background hover:text-foreground">All Categories</Link>
                        {categories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/products?category=${encodeURIComponent(cat.slug)}`}
                            className="flex items-center gap-3 rounded-md px-3 py-1.5 text-[0.8rem] font-medium text-foreground-muted hover:bg-background hover:text-foreground"
                          >
                            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-border/60 bg-background">
                              {cat.imageUrl && (
                                <Image
                                  src={cat.imageUrl}
                                  alt={cat.name}
                                  fill
                                  className="object-cover"
                                  unoptimized={cat.imageUrl.startsWith("http")}
                                />
                              )}
                            </div>
                            <span className="truncate">
                              {cat.name || cat.slug}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] transition-colors duration-200 ${active
                  ? "bg-primary/12 text-primary"
                  : "text-foreground-muted hover:text-foreground hover:bg-primary/5"
                  }`}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] transition-colors duration-200 ${isActive("/contact")
              ? "border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark"
              : "border-foreground text-foreground hover:bg-foreground hover:text-background"
              }`}
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
                      className={`flex items-center justify-between border-b border-border/60 py-2 text-xs font-medium uppercase tracking-[0.18em] last:border-b-0 sm:text-sm transition-colors duration-200 ${isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground-muted hover:text-foreground"
                        }`}
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className={`mt-3 inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm transition-colors duration-200 ${isActive("/contact")
                      ? "border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark"
                      : "border-foreground text-foreground hover:bg-foreground hover:text-background"
                      }`}
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
