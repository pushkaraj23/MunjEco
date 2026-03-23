"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DecoGraphic } from "@/components/shared/DecoGraphic";

export function FounderNoteSection() {
  return (
    <section className="relative overflow-visible bg-background pb-20">
      <DecoGraphic
        src="/graphics/img5-v0.png"
        alt=""
        placement="top-right"
        size="md"
        className="opacity-20"
      />

      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-8 backdrop-blur-sm rounded-2xl border border-border/70 bg-background-alt px-6 py-8 md:grid-cols-2 md:items-center md:px-10 md:py-10"
        >
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted sm:text-xs">
              Founder&apos;s note
            </p>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              A business rooted in people and planet.
            </h2>
            <p className="text-sm leading-relaxed text-foreground-muted md:text-base">
              MunjEco Global was born from a simple belief,  that business can grow
              without harming the earth, and trade can uplift lives rather than exploit
              them. As a mother and a trekker, I have seen the impact of plastic on our
              mountains, forests, and everyday life. I started this journey to create a
              more conscious future for my child and for the planet we share.
            </p>
            <p className="text-sm leading-relaxed text-foreground-muted md:text-base">
              This is not just a business,  it is a commitment to people, planet, and
              mindful global trade.
            </p>
            <div className="mt-4 border-l-2 border-primary pl-4">
              <p className="text-sm font-semibold text-foreground">Namrata Munj</p>
              <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                Founder, MunjEco Global
              </p>
            </div>
          </div>

          <div className="relative mt-4 aspect-square w-full overflow-hidden rounded-2xl border border-border/70 bg-background shadow-card md:mt-0 md:justify-self-end">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/alpha-cbb3d.appspot.com/o/MunjEco-Temp%2FAbout%20Us%20Page%2FFounders%20Note.jpeg?alt=media&token=bffe0eed-7483-44f1-9e48-0adc4dd676e7"
              alt="Thoughtful founder looking over natural landscapes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/45 px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              Vision, values & stewardship
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

