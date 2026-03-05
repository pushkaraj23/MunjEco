"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Package,
  Globe2,
  Tags,
  Handshake,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Ethical & Responsible Sourcing",
    body: "We source our products directly from verified Indian manufacturers and artisan clusters that follow ethical, sustainable, and responsible practices.",
  },
  {
    icon: Leaf,
    title: "Sustainable by Design",
    body: "From wooden combs and bamboo toothbrushes to eco‑friendly travel kits and handicrafts, our range is built to reduce plastic use and promote conscious living.",
  },
  {
    icon: Package,
    title: "Export‑Ready Quality",
    body: "Products are selected and packed to meet international export standards with consistent quality and clear documentation.",
  },
  {
    icon: Globe2,
    title: "Global Trade Expertise",
    body: "We understand Incoterms, customs documentation and buyer expectations across UK, EU and other markets.",
  },
  {
    icon: Tags,
    title: "Flexible Bulk & Private Label",
    body: "Bulk quantities, customised packaging or private labelling — we adapt to your brand and business needs.",
  },
  {
    icon: Handshake,
    title: "Transparent Partnerships",
    body: "Long‑term relationships built on clear communication, transparent pricing and reliable delivery.",
  },
  {
    icon: Sparkles,
    title: "Rooted in Indian Craftsmanship",
    body: "Our handicrafts and natural products celebrate Indian artisan heritage while supporting local communities.",
  },
];

export function ReasonsCarouselSection() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
      setCurrentIndex(0);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = Math.max(0, reasons.length - slidesPerView);
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < maxIndex;

  useEffect(() => {
    if (maxIndex === 0) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(id);
  }, [maxIndex]);

  const handlePrev = () => {
    if (canPrev) setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (canNext) setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="relative overflow-visible bg-background pb-12">
      <DecoGraphic
        src="/graphics/img2-v1.png"
        alt=""
        placement="bottom-left"
        size="md"
        className="opacity-25"
      />
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canPrev}
              aria-label="Previous reason"
              className="absolute left-[-2.25rem] top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background p-2 text-foreground shadow-sm transition-colors hover:bg-background-alt disabled:cursor-default disabled:opacity-40 md:inline-flex"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.7} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canNext}
              aria-label="Next reason"
              className="absolute right-[-2.25rem] top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background p-2 text-foreground shadow-sm transition-colors hover:bg-background-alt disabled:cursor-default disabled:opacity-40 md:inline-flex"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.7} />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-[0.22,1,0.36,1]"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / slidesPerView
                  }%)`,
                }}
              >
                {reasons.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex-shrink-0 px-2"
                      style={{ width: `${100 / slidesPerView}%` }}
                    >
                      <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          delay: idx * 0.04,
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex h-full flex-col border border-border/70 bg-background-alt/70 px-5 py-5 shadow-card transition-colors hover:border-primary/70"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center border border-primary/20 bg-primary/5 text-primary">
                            <Icon className="h-4 w-4" strokeWidth={1.6} />
                          </div>
                          <h2 className="font-heading text-sm font-semibold text-foreground">
                            {item.title}
                          </h2>
                        </div>
                        <p className="text-sm leading-relaxed text-foreground-muted">
                          {item.body}
                        </p>
                      </motion.article>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

