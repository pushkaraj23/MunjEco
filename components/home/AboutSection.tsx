"use client";

import Image from "next/image";
import Link from "next/link";
import { Sprout, Heart, ArrowRight } from "lucide-react";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function AboutSection() {
  return (
    <section className="relative overflow-visible border-t border-border/60 bg-primary/10 py-24 md:py-28">
      <DecoGraphic src="/graphics/img1-v0.png" alt="" placement="bottom-left" size="md" className="opacity-25" />
      <DecoGraphic src="/graphics/img5-v0.png" alt="" placement="top-right" size="md" className="opacity-25" />
      <div className="relative mx-auto flex max-w-6xl 2xl:max-w-7xl flex-col gap-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 lg:grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        {/* Text column */}
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground-muted sm:text-sm">
            <Sprout className="h-4 w-4 text-foreground-muted" strokeWidth={1.5} />
            <span>About MunjEco Global</span>
          </div>

          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Rooted in purpose. Built for conscious trade.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">
            MunjEco Global was born from a simple belief — that business can grow
            without harming the earth, and trade can uplift lives rather than
            exploit them.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">
            We are a purpose-led Indian export company creating eco-friendly
            lifestyle essentials and conscious handicrafts in collaboration with
            responsible makers and artisan communities. Our focus is simple:
            supporting livelihoods, reducing plastic use, and delivering
            sustainable products to global markets with consistency, care, and
            integrity.
          </p>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-foreground-muted">
            <Heart className="h-4 w-4 text-chai" strokeWidth={1.5} />
            <span>Supporting livelihoods, one product at a time.</span>
          </p>

          <div className="mt-10">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-sm border border-foreground px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-foreground transition-colors duration-200 bg-background/10 backdrop-blur-sm hover:bg-foreground hover:text-background"
            >
              Learn more about us
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>

        {/* Side column: image + belief text */}
        <div className="flex flex-col items-stretch">
          <div className="relative aspect-square w-full overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Artful arrangement of natural materials"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 18rem"
            />
          </div>
          <div className="space-y-2">
            <p className="font-bold uppercase mt-6 tracking-[2px] text-foreground">
              What we believe
            </p>
            <p className="text-sm leading-relaxed text-foreground-muted">
              Trade can be a force for restoration — for landscapes, for
              crafts, and for livelihoods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
