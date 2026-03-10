"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function CertificationsSection() {
  return (
    <section className="relative overflow-visible bg-background pb-20">
      <DecoGraphic
        src="/graphics/img2-v0.png"
        alt=""
        placement="bottom-left"
        size="md"
        className="opacity-20"
      />

      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-10 rounded-2xl bg-primary px-6 py-12 text-white md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-center md:px-10 md:py-16"
        >
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-white" strokeWidth={1.5} />
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Certifications
              </h2>
            </div>
            <p className="text-base leading-relaxed text-white/85 md:text-lg">
              We hold certifications for sustainable sourcing, manufacturing standards,
              and export compliance. Our products meet international benchmarks for
              durability and environmental impact.
            </p>
          </div>

          <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-card md:max-w-[260px] md:justify-self-end">
            <Image
              src="https://images.unsplash.com/photo-1593617761943-9099951a0769?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Neatly arranged certificates and documents"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

