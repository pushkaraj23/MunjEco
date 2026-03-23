"use client";

import { useEffect, useRef, useState } from "react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { WhyChooseHeader } from "@/components/why-choose-us/WhyChooseHeader";

const carouselCards = [
  {
    title: "Ethical & Responsible Sourcing",
    desc: "We source our products directly from verified Indian manufacturers and artisan clusters that follow ethical, sustainable, and responsible practices. Every product reflects respect for people, craftsmanship, and the environment.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Sustainable by Design",
    desc: "Sustainability is at the core of what we do. From wooden combs and bamboo toothbrushes to eco-friendly travel kits and handicrafts, our product range is designed to reduce plastic use and promote conscious living.",
    image:
      "https://images.unsplash.com/photo-1654078054613-a56cfcabdb84?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Export-Ready Quality",
    desc: "All our products are carefully selected and packed to meet international export standards. We focus on consistent quality, safe packaging, and clear documentation to ensure smooth global shipments.",
    image:
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Global Trade Expertise",
    desc: "As an Indian export company, we understand international trade requirements, Incoterms (FOB / CIF), customs documentation, and buyer expectations across UK, EU, and other global markets.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Flexible Bulk & Private Label Solutions",
    desc: "Whether you need bulk quantities, customized packaging, or private labeling, we offer flexible solutions tailored to your business needs. Our goal is to support your brand's growth, not just supply products.",
    image:
      "https://images.unsplash.com/photo-1593747176945-ef77e62547eb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Transparent & Reliable Partnerships",
    desc: "We believe in long-term relationships built on clear communication, transparent pricing, and timely delivery. Our buyers know exactly what they are paying for and when they will receive it.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Rooted in Indian Craftsmanship",
    desc: "Our handicrafts and natural products celebrate the rich heritage and skills of Indian artisans, bringing authentic, meaningful products to global markets while supporting local communities.",
    image: "https://plus.unsplash.com/premium_photo-1679811672273-d516273e675c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwY3JhZnRzbWFuc2hpcHxlbnwwfHwwfHx8MA%3D%3D"
  },
];

export function ReasonsCarouselSection() {
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
    <section className="relative overflow-visible bg-gradient-to-b from-background via-background to-background-alt pb-7">
      <DecoGraphic
        src="/graphics/img2-v0.png"
        alt=""
        placement="bottom-left"
        className="opacity-30"
        size="md"
      />

      <div className="relative mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="pointer-events-none absolute inset-x-1/4 top-24 -z-10 hidden h-80 rounded-full bg-primary/6 blur-3xl md:block" />

        <div
          ref={trackRef}
          className="mt-10 flex overflow-x-auto overflow-y-visible pt-2 pb-2 max-md:[&::-webkit-scrollbar]:hidden md:[&::-webkit-scrollbar]:h-2 md:[&::-webkit-scrollbar-track]:rounded-full md:[&::-webkit-scrollbar-track]:bg-muted/30 md:[&::-webkit-scrollbar-thumb]:rounded-full md:[&::-webkit-scrollbar-thumb]:bg-primary/40 md:[&::-webkit-scrollbar-thumb:hover]:bg-primary/60"
          style={{
            scrollbarWidth: undefined,
            scrollbarColor: undefined,
          }}
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

