"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, QrCode, FileText, MapPin } from "lucide-react";
import { DecoGraphic } from "@/components/DecoGraphic";
import { EnquiryForm } from "@/components/EnquiryForm";

export function ContactPageContent() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0.05, 0.28], [40, -20]);
  const leftY = useTransform(scrollYProgress, [0.1, 0.35], [45, -15]);
  const rightY = useTransform(scrollYProgress, [0.12, 0.38], [40, -18]);

  return (
    <main ref={ref} className="relative overflow-visible bg-background pt-28 pb-16 md:pt-32 md:pb-20">
      <DecoGraphic src="/graphics/img3.png" alt="" placement="top-right" size="md" />
      <DecoGraphic src="/graphics/img5.png" alt="" placement="bottom-left" size="md" />
      <div className="relative mx-auto max-w-6xl px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Top: small label + headline + copy */}
        <motion.header
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-foreground-muted">
            <Mail className="h-4 w-4 text-foreground-muted" strokeWidth={1.5} />
            <span>Reach us</span>
          </div>
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Get in touch about products, partnerships, or bulk orders.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">
            Submit your enquiry for product catalogs, bulk orders, or export partnerships.
            Our team will respond within 24–48 hours.
          </p>
        </motion.header>

        {/* Split: left info + image, right form */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          {/* Left - contact info + image strip */}
          <motion.section
            style={{ y: leftY }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            {/* Contact channels */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
                    Email
                  </h2>
                </div>
                <a
                  href="mailto:munjecoglobal@gmail.com"
                  className="block text-sm text-foreground-muted hover:text-primary"
                >
                  munjecoglobal@gmail.com
                </a>
              </div>

              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
                    Phone / WhatsApp
                  </h2>
                </div>
                <a
                  href="tel:+919270952447"
                  className="block text-sm text-foreground-muted hover:text-primary"
                >
                  +91 92709 52447
                </a>
              </div>

              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex items-center gap-2">
                  <QrCode className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
                    Scan to contact
                  </h2>
                </div>
                <p className="text-sm text-foreground-muted">
                  Scan our WhatsApp QR code for quick enquiries.
                </p>
              </div>
            </div>

            {/* Image + map placeholder strip */}
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1516652695352-6118f7cc1a07?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Calm studio desk with natural materials"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="flex aspect-[5/4] items-center justify-center border border-border bg-background-alt">
                <div className="flex flex-col items-center gap-2 text-foreground-muted">
                  <MapPin className="h-7 w-7" strokeWidth={1.1} />
                  <p className="text-xs uppercase tracking-[0.22em]">
                    Map placeholder
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Right - enquiry form, light editorial card */}
          <motion.section
            style={{ y: rightY }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="border border-border bg-background-alt px-6 py-7 md:px-8 md:py-9"
          >
            <div className="mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                Enquiry form
              </h2>
            </div>
            <p className="mb-6 text-sm text-foreground-muted">
              Fill in your details and we&apos;ll get back to you.
            </p>
            <EnquiryForm theme="light" />
          </motion.section>
        </div>
      </div>
    </main>
  );
}
