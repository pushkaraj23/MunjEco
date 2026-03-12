"use client";

import { useEffect, useRef, useState } from "react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { WhyChooseHeader } from "@/components/why-choose-us/WhyChooseHeader";

const carouselCards = [
  {
    title: "Export‑quality standards",
    desc: "Consistent finishing, sizing and QC so every shipment is ready for global shelves.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Competitive, transparent pricing",
    desc: "Fair bulk and repeat‑order pricing with clear cost breakdowns and no hidden extras.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Long‑term partnerships",
    desc: "We prioritise relationship‑driven trade, reliability and repeat collaboration.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Timely & reliable shipping",
    desc: "Dependable dispatch schedules with full export documentation and logistics support.",
    image:
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Custom branding options",
    desc: "Private‑label, logo placement and eco‑friendly packaging tailored to your brand.",
    image:
      "https://images.unsplash.com/photo-1593747176945-ef77e62547eb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Eco‑friendly packaging",
    desc: "Low‑plastic, recyclable or biodegradable packing aligned with sustainability goals.",
    image:
      "https://images.unsplash.com/photo-1654078054613-a56cfcabdb84?q=80&w=1600&auto=format&fit=crop",
  },
];

export function WhyChooseSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isInteractingRef = useRef(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    isInteractingRef.current = isInteracting;
  }, [isInteracting]);

  useEffect(() => {
    let rafId: number;

    const step = () => {
      const el = trackRef.current;
      if (el && !isInteractingRef.current) {
        const halfScroll = el.scrollWidth / 2;
        if (halfScroll > 0) {
          el.scrollLeft += 0.5;
          if (el.scrollLeft >= halfScroll) {
            el.scrollLeft -= halfScroll;
          }
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative overflow-visible border-t border-border/70 bg-gradient-to-b from-background via-background to-background-alt py-24 md:py-32">
      <DecoGraphic
        src="/graphics/img2-v0.png"
        alt=""
        placement="bottom-left"
        size="md"
        className="opacity-25"
      />
      <DecoGraphic
        src="/graphics/img5-v0.png"
        alt=""
        placement="top-right"
        size="sm"
        className="opacity-40"
      />

      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Soft backdrop behind central tree */}
        <div className="pointer-events-none absolute inset-x-1/4 top-24 -z-10 hidden h-80 rounded-full bg-primary/6 blur-3xl md:block" />

        <WhyChooseHeader
          eyebrow="Why choose MunjEco Global"
          title="Why Global Business Partners work with us"
          subtitle="Through reliable sourcing, transparent practices, and a shared commitment to sustainability, we build long-term partnerships with businesses that care about both quality and impact."
        />

        {/* Continuous horizontally scrolling carousel of benefit cards */}
        <div
          ref={trackRef}
          className="mt-10 flex overflow-x-auto overflow-y-visible pt-2 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onPointerDown={() => setIsInteracting(true)}
          onPointerUp={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
        >
          <div className="flex pb-8">
            {[...carouselCards, ...carouselCards].map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                className="min-w-[68vw] max-w-[68vw] px-2 md:min-w-[15%] md:max-w-[15%]"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-background-alt/60 backdrop-blur-sm shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:z-10">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-5">
                    <h3 className="font-heading text-base font-semibold text-foreground md:text-lg">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
