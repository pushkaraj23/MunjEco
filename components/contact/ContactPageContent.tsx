"use client";

import Image from "next/image";
import { Mail, Phone, QrCode, FileText, MapPin } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { EnquiryForm } from "@/components/shared/EnquiryForm";

export function ContactPageContent() {
  return (
    <main className="relative overflow-visible bg-background pt-28 pb-16 md:pt-32 md:pb-20">
      <DecoGraphic src="/graphics/img3-v0.png" alt="" placement="bottom-left" size="md" />
      <DecoGraphic src="/graphics/img5-v0.png" alt="" placement="top-right" size="md" />
      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Top: small label + headline + copy */}
        <header className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground-muted sm:text-sm">
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
        </header>

        {/* Stacked: left info, then enquiry form, then image + map */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Left - contact info */}
          <section className="space-y-10">
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
          </section>

          {/* Enquiry form, full-width card */}
          <section className="border border-border bg-background-alt px-6 py-7 md:px-8 md:py-9">
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
          </section>

          {/* Image + map placeholder strip */}
          <section className="grid gap-6 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1516652695352-6118f7cc1a07?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Calm studio desk with natural materials"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex aspect-square items-center justify-center rounded-sm border border-border bg-background-alt">
              <div className="flex flex-col items-center gap-2 text-foreground-muted">
                <MapPin className="h-7 w-7" strokeWidth={1.1} />
                <p className="text-xs uppercase tracking-[0.22em]">
                  Map placeholder
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
