"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, QrCode, FileText, MapPin } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";

export function ContactPageContent() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 0.85]);
  const headerY = useTransform(scrollYProgress, [0.05, 0.28], [40, -20]);
  const leftY = useTransform(scrollYProgress, [0.1, 0.35], [45, -15]);
  const rightY = useTransform(scrollYProgress, [0.12, 0.38], [40, -18]);

  return (
    <main ref={ref} className="relative pt-32 pb-12 md:pb-14">
      {/* Parallax ambient glows - pistache section accent */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute left-1/4 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pistache/22 blur-[130px]"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-chai/18 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Hero header */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-pistache/30 bg-pistache/15 px-4 py-2 backdrop-blur-sm">
            <Mail className="h-5 w-5 text-pistache" strokeWidth={1.5} />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/90">
              Reach Us
            </span>
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Submit your enquiry for product catalogs, bulk orders, or export
            partnerships. Our team will respond within 24–48 hours.
          </p>
          <div className="divider-rangoli mx-auto mt-6 w-24 text-pistache/50" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Contact info glass card */}
          <motion.div
            style={{ y: leftY }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 px-6 py-10 backdrop-blur-2xl md:rounded-[2rem] md:px-10 md:py-12"
            style={{ boxShadow: "0 0 60px -15px rgba(162,183,154,0.2)" }}
          >
            <div className="absolute left-0 top-0 h-1 w-24 rounded-r-full bg-pistache/50" />
            <div className="absolute right-0 bottom-0 h-1 w-28 rounded-l-full bg-chai/40" />
            <div className="pattern-jali pointer-events-none absolute inset-0 rounded-3xl opacity-20 md:rounded-[2rem]" />
            <div className="relative space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-pistache/20">
                    <Mail className="h-6 w-6 text-pistache" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                      Email
                    </h3>
                    <a
                      href="mailto:munjecoglobal@gmail.com"
                      className="mt-1 text-white/90 transition-colors hover:text-pistache"
                    >
                      munjecoglobal@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-pistache/20">
                    <Phone className="h-6 w-6 text-pistache" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                      Phone / WhatsApp
                    </h3>
                    <a
                      href="tel:+919270952447"
                      className="mt-1 text-white/90 transition-colors hover:text-pistache"
                    >
                      +91 92709 52447
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-chai/20">
                    <QrCode className="h-6 w-6 text-chai" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                      Scan to Contact
                    </h3>
                    <p className="mt-1 text-white/85">
                      Scan our WhatsApp QR code for quick enquiries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="flex aspect-video items-center justify-center rounded-2xl border border-white/15 bg-black/30">
                <div className="flex flex-col items-center gap-2 text-white/60">
                  <MapPin className="h-10 w-10" strokeWidth={1} />
                  <p className="text-sm">Map placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Enquiry form cream card */}
          <motion.div
            style={{ y: rightY }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-almond/60 bg-cream p-6 shadow-[0_25px_80px_-20px_rgba(74,63,53,0.35),0_0_0_1px_rgba(229,224,216,0.5)] md:rounded-3xl md:p-10">
              <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-terracotta/25 to-transparent" />
              <div className="absolute bottom-0 left-0 h-20 w-20 bg-gradient-to-tr from-terracotta/15 to-transparent" />
              <div className="pattern-dot-terracotta pointer-events-none absolute inset-0 rounded-2xl opacity-30 md:rounded-3xl" />
              <div className="relative flex items-center gap-2 mb-6">
                <FileText className="h-5 w-5 text-terracotta" strokeWidth={1.5} />
                <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  Enquiry Form
                </h2>
              </div>
              <p className="mb-6 text-sm text-foreground-muted">
                Fill in your details and we&apos;ll get back to you.
              </p>
              <EnquiryForm theme="light" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
