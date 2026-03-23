"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { SOCIAL_LINKS } from "@/components/shared/socialLinks";

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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground-muted sm:text-sm"
          >
            <Mail className="h-4 w-4 text-foreground-muted" strokeWidth={1.5} />
            <span>Reach us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Get in touch about products, partnerships, or bulk orders.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg"
          >
            Submit your enquiry for product catalogs, bulk orders, or export partnerships.
            Our team will respond within 24–48 hours.
          </motion.p>
        </motion.header>

        {/* Stacked: contact info, enquiry form, then image */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Left - contact info */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Contact channels */}
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
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
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
                className="space-y-2 border-t border-border pt-4"
              >
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
                    Phone / WhatsApp
                  </h2>
                </div>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="tel:+919270952447"
                    className="block text-sm text-foreground-muted hover:text-primary"
                  >
                    +91 92709 52447
                  </a>
                  <a
                    href="tel:+918799829559"
                    className="block text-sm text-foreground-muted hover:text-primary"
                  >
                    +91 87998 29559
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
                className="space-y-3 border-t border-border pt-4 md:col-span-2"
              >
                <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
                  Follow us
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                  {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Enquiry form, full-width card */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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

          {/* Contact visual */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            aria-label="Contact"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-[21/9]">
              <Image
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Get in touch, we respond to export and partnership enquiries"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1152px"
              />
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
