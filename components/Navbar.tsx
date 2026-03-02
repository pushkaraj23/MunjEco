// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/products", label: "Products" },
//   { href: "/about", label: "About" }
// ];

// export function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);
//   const lastScrollY = useRef(0);

//   useEffect(() => {
//     lastScrollY.current = window.scrollY;
//     const handleScroll = () => {
//       const current = window.scrollY;
//       setCollapsed(current > lastScrollY.current && current > 80);
//       lastScrollY.current = current;
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.header
//         initial={{ opacity: 0, y: -20 }}
//         animate={{
//           opacity: 1,
//           y: collapsed ? -120 : 0,
//         }}
//         transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//         className="fixed left-4 right-4 top-4 z-50 mx-auto max-w-6xl rounded-3xl md:rounded-full border border-white/20 bg-black/50 px-6 py-4 backdrop-blur-xl md:left-8 md:right-8 md:top-6 md:px-8"
//       >
//         <nav className="flex items-center justify-between">
//           <Link href="/" className="relative block">
//             <img
//               src="/full-logo.png"
//               alt="MunjEco Global"
//               className="h-10 w-auto object-contain"
//             />
//           </Link>

//           <div className="hidden items-center gap-8 md:flex">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-contrast-subtle text-sm font-medium text-white transition-all duration-300 hover:text-white"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               href="/contact"
//               className="text-contrast-subtle rounded-xl bg-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/35 hover:shadow-[0_0_24px_rgba(255,255,255,0.2)]"
//             >
//               Contact Us
//             </Link>
//           </div>

//           <button
//             type="button"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="flex flex-col gap-1.5 md:hidden"
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`h-0.5 w-6 rounded-full bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
//             />
//             <span
//               className={`h-0.5 w-6 rounded-full bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
//             />
//             <span
//               className={`h-0.5 w-6 rounded-full bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
//             />
//           </button>
//         </nav>

//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="overflow-hidden border-t border-white/20 mt-5 py-5 md:hidden"
//             >
//               <div className="flex flex-col gap-3">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-contrast-subtle text-white transition-colors hover:text-white"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//                 <Link
//                   href="/contact"
//                   onClick={() => setMobileOpen(false)}
//                   className="text-contrast-subtle rounded-xl bg-white/25 px-4 py-3 text-center font-semibold text-white"
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//     </motion.header>
//   );
// }



"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      setCollapsed(current > lastScrollY.current && current > 80);
      setScrolled(current > 20);
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: collapsed ? -120 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-4 right-4 top-4 z-50 mx-auto max-w-6xl transition-all duration-300 md:left-8 md:right-8 md:top-6 ${
          scrolled
            ? "rounded-2xl md:rounded-full border border-emerald-500/30 bg-gradient-to-bl from-[#d1f996] via-[#bfedcf] to-[#ffffff] shadow-2xl shadow-emerald-900/30"
            : "rounded-2xl md:rounded-full border border-emerald-500/20 bg-gradient-to-bl from-[#d1f996] via-[#bfedcf] to-[#ffffff]"
        } backdrop-blur-xl`}
      >
        <nav className="relative flex items-center justify-between px-5 py-4 md:px-8 md:py-3.5">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative z-10 transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/full-logo.png"
              alt="MunjEco Global"
              className="h-9 w-auto object-contain md:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-black"
                      : "text-emerald-950 hover:text-emerald-450"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 -z-10 rounded-lg bg-emerald-500/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="group relative ml-3 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-emerald-500/20 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-emerald-300 transition-all duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-emerald-300 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-emerald-300 transition-all duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-emerald-500/20 md:hidden"
            >
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "text-emerald-100/70 hover:bg-emerald-500/10 hover:text-emerald-200"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-2"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-3 text-center text-base font-semibold text-white shadow-lg shadow-emerald-500/25"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}