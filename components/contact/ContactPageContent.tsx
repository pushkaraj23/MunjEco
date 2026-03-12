"use client";

import Image from "next/image";
import { Mail, Phone, QrCode, FileText, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { EnquiryForm } from "@/components/shared/EnquiryForm";

export function ContactPageContent() {
  return (
    <main className="relative overflow-visible bg-background pt-28 pb-16 md:pt-32 md:pb-20">
      <DecoGraphic src="/graphics/img3-v0.png" alt="" placement="bottom-left" size="md" className="opacity-25" />
      <DecoGraphic src="/graphics/img5-v0.png" alt="" placement="top-right" size="md" className="opacity-25" />
      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Top: small label + headline + copy */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground-muted sm:text-sm"
          >
            <Mail className="h-4 w-4 text-foreground-muted" strokeWidth={1.5} />
            <span>Reach us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Get in touch about products, partnerships, or bulk orders.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg"
          >
            Submit your enquiry for product catalogs, bulk orders, or export partnerships.
            Our team will respond within 24–48 hours.
          </motion.p>
        </motion.header>

        {/* Stacked: left info, then enquiry form, then image + map */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Left - contact info */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Contact channels */}
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-2 border-t border-border pt-4"
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
                className="space-y-2 border-t border-border pt-4"
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
                className="space-y-2 border-t border-border pt-4"
              >
                <div className="flex items-center gap-2">
                  <QrCode className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
                    Scan to contact
                  </h2>
                </div>
                <p className="text-sm text-foreground-muted">
                  Scan our WhatsApp QR code for quick enquiries.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Enquiry form, full-width card */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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

          {/* Image + map placeholder strip */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1516652695352-6118f7cc1a07?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Calm studio desk with natural materials"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex aspect-square items-center justify-center rounded-xl border border-border bg-background-alt"
            >
              <div className="flex flex-col items-center gap-2 text-foreground-muted">
                <MapPin className="h-7 w-7" strokeWidth={1.1} />
                <p className="text-xs uppercase tracking-[0.22em]">
                  Map placeholder
                </p>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
