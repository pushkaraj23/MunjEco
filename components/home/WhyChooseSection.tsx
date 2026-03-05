"use client";

import {
  ShieldCheck,
  Package,
  Leaf,
  Tags,
  Handshake,
  Truck,
} from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { WhyChooseHeader } from "@/components/why-choose-us/WhyChooseHeader";
import { WhyChooseCenterCard } from "@/components/why-choose-us/WhyChooseCenterCard";
import { WhyChooseBenefitsColumn } from "@/components/why-choose-us/WhyChooseBenefitsColumn";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Export‑quality standards",
    desc: "Consistent finishing, sizing and QC so every shipment is ready for global shelves.",
  },
  {
    icon: Tags,
    title: "Competitive, transparent pricing",
    desc: "Fair bulk and repeat‑order pricing with clear cost breakdowns and no hidden extras.",
  },
  {
    icon: Handshake,
    title: "Long‑term partnerships",
    desc: "We prioritise relationship‑driven trade, reliability and repeat collaboration.",
  },
  {
    icon: Truck,
    title: "Timely & reliable shipping",
    desc: "Dependable dispatch schedules with full export documentation and logistics support.",
  },
  {
    icon: Package,
    title: "Custom branding options",
    desc: "Private‑label, logo placement and eco‑friendly packaging tailored to your brand.",
  },
  {
    icon: Leaf,
    title: "Eco‑friendly packaging",
    desc: "Low‑plastic, recyclable or biodegradable packing aligned with sustainability goals.",
  },
];

const CENTER_IMAGE =
  "https://images.unsplash.com/photo-1593617761943-9099951a0769?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function WhyChooseSection() {
  const leftColumn = benefits.slice(0, 3);
  const rightColumn = benefits.slice(3);

  return (
    <section className="relative overflow-visible border-t border-border/70 bg-gradient-to-b from-background via-background to-background-alt px-8 py-24 sm:px-10 md:px-12 md:py-32 lg:px-16 xl:px-20">
      <DecoGraphic
        src="/graphics/img2-v1.png"
        alt=""
        placement="bottom-left"
        size="lg"
      />
      <DecoGraphic
        src="/graphics/img5-v1.png"
        alt=""
        placement="top-right"
        size="sm"
        className="opacity-40"
      />

      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl">
        {/* Soft backdrop behind central tree */}
        <div className="pointer-events-none absolute inset-x-1/4 top-24 -z-10 hidden h-80 rounded-full bg-primary/6 blur-3xl md:block" />

        <WhyChooseHeader
          eyebrow="Why choose MunjEco Global"
          title="Why partners around the world choose us."
          subtitle="We don't just ship products — we build long‑term, trust‑based trade relationships with buyers who care about quality and sustainability."
        />

        {/* Tree‑style layout: reasons left & right, hero image in centre */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)_minmax(0,1.05fr)] lg:items-center">
          <WhyChooseBenefitsColumn items={leftColumn} align="left" />

          <WhyChooseCenterCard
            imageUrl={CENTER_IMAGE}
            caption="Export‑ready Indian eco products, curated for long‑term partnerships."
          />

          <WhyChooseBenefitsColumn
            items={rightColumn}
            offset={leftColumn.length}
            align="right"
          />
        </div>
      </div>
    </section>
  );
}
