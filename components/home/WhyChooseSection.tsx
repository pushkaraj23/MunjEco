"use client";

import { useEffect, useRef, useState } from "react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { WhyChooseHeader } from "@/components/why-choose-us/WhyChooseHeader";

const carouselCards = [
  {
    title: "Ethical & Responsible Sourcing",
    desc: "We source directly from verified manufacturers and artisan groups following ethical and sustainable practices.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Export-Ready Quality",
    desc: "Products are selected, packed, and documented to meet international export standards.",
    image:
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Sustainability First",
    desc: "Plastic-free, biodegradable materials aligned with EU & UK sustainability goals.",
    image:
      "https://images.unsplash.com/photo-1654078054613-a56cfcabdb84?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Flexible Bulk & Private Label",
    desc: "Bulk supply, customization, and private labeling are available based on buyer needs.",
    image:
      "https://images.unsplash.com/photo-1593747176945-ef77e62547eb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Transparent & Reliable",
    desc: "Clear pricing, timely delivery, and honest communication — no surprises.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
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
    <section className="relative overflow-visible border-t border-border/70 bg-gradient-to-b from-background via-background to-background-alt pt-16 pb-10 md:py-24">
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
        className="opacity-40 max-sm:hidden"
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
                className="min-w-[68vw] max-w-[68vw] px-2 md:min-w-[18%] md:max-w-[18%]"
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
