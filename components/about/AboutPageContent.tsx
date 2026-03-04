"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CTASection } from "@/components/home/CTASection";
import { DecoGraphic } from "@/components/shared/DecoGraphic";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { Sprout, Factory, Award, Leaf, CheckCircle2 } from "lucide-react";

const manufacturingItems = [
  "Responsible bamboo sourcing",
  "Custom logo and text engraving",
  "Quality assurance at each stage",
  "Eco-friendly, reusable, biodegradable",
];

export function AboutPageContent() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0.05, 0.3], [40, -20]);
  const storyY = useTransform(scrollYProgress, [0.1, 0.35], [45, -15]);
  const mfgY = useTransform(scrollYProgress, [0.18, 0.42], [50, -18]);
  const certY = useTransform(scrollYProgress, [0.26, 0.5], [48, -20]);
  const sustainY = useTransform(scrollYProgress, [0.34, 0.58], [45, -15]);
  const ctaY = useTransform(scrollYProgress, [0.42, 0.66], [50, -18]);

  return (
    <main ref={ref} className="relative overflow-visible bg-background pt-28 pb-20 md:pt-32 md:pb-24">
      <DecoGraphic src="/graphics/img1.png" alt="" placement="top-left" size="md" />
      <DecoGraphic src="/graphics/img4.png" alt="" placement="bottom-right" size="md" />
      <div className="mx-auto max-w-6xl px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Header + hero image split */}
        <motion.section
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-end"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-foreground-muted">
              <Sprout className="h-4 w-4 text-foreground-muted" strokeWidth={1.5} />
              <span>Our purpose</span>
            </div>
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              About MunjEco Global
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">
              Natural • Responsible • Daily Use Products. Eco-friendly gifting.
            </p>
          </div>
          <div className="relative aspect-[5/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Studio view of eco-friendly materials and tools"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.section>

        {/* Our Story - text + image split (dark band) */}
        <motion.section
          style={{ y: storyY }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid gap-10 rounded-none bg-primary-dark px-6 py-12 text-white md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start md:px-8 md:py-16"
        >
          <div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Our story
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              MunjEco Global was founded on the belief that premium manufacturing and
              sustainability can go hand in hand. We specialize in bamboo daily-use
              products—pens, stationery, bottles, and cups—crafted for durability and
              elegance. Better habits for better nature. Our clients include corporates,
              gifting partners, and retail brands who demand quality and responsible
              sourcing.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1659644569209-1c397e64f7c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Close-up of crafted natural products"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
          </div>
        </motion.section>

        {/* About MunjEco Global - narrative section */}
        <section className="mb-16 grid gap-10 border-t border-border/70 pt-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
          <div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              About MunjEco Global
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted md:text-base">
              MunjEco Global is an Indian export company focused on eco-friendly lifestyle
              essentials and conscious handicrafts. We work closely with trusted
              manufacturers, artisans, and craft communities to bring high-quality,
              sustainable products to global markets.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted md:text-base">
              Our offerings include plastic-free daily-use essentials such as neem wood
              combs, bamboo toothbrushes, eco-friendly gift solutions, and thoughtfully
              crafted Indian handicrafts. Each product reflects careful material
              selection, traditional skills, and responsible production practices.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted md:text-base">
              Our approach is simple — conscious materials, ethical sourcing, consistent
              quality, and reliable delivery. Every product we export supports
              responsible livelihoods, reduced plastic use, and purposeful trade that
              respects both people and the planet. We believe global trade can be both
              sustainable and soulful, rooted in craftsmanship and mindful consumption.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-background-alt">
            <Image
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="MunjEco products and handicrafts arranged for export"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
          </div>
        </section>

        {/* Founder’s Note */}
        <section className="mb-16 grid gap-8 rounded-none border border-border/70 bg-background-alt px-6 py-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:px-10 md:py-10">
          <div>
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted">
              Founder&apos;s Note
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              A business rooted in people and planet.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted md:text-base">
              MunjEco Global was born from a simple belief — that business can grow
              without harming the earth, and trade can uplift lives rather than exploit
              them. As a mother and a trekker, I have seen the impact of plastic on our
              mountains, forests, and everyday life. I started this journey to create a
              more conscious future for my child and for the planet we share.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted md:text-base">
              This is not just a business — it is a commitment to people, planet, and
              mindful global trade.
            </p>
            <div className="mt-5 border-l-2 border-primary pl-4">
              <p className="text-sm font-semibold text-foreground">Namrata Munj</p>
              <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                Founder, MunjEco Global
              </p>
            </div>
          </div>
          <div className="relative hidden aspect-[4/5] overflow-hidden border border-border bg-background sm:block">
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Thoughtful founder looking over natural landscapes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
          </div>
        </section>

        {/* Manufacturing process - image + list */}
        <motion.section
          style={{ y: mfgY }}
          id="manufacturing"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-start"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1584473457406-6240486418e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Manufacturing workspace with tools and sketches"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Factory className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Manufacturing process
              </h2>
            </div>
            <p className="text-base leading-relaxed text-foreground-muted md:text-lg">
              Every product passes through stringent quality checks. From raw bamboo
              selection to finishing, we use eco-friendly treatments and precision
              machinery. Our facility is equipped for bulk production while maintaining
              consistency across batches.
            </p>
            <ul className="mt-6 space-y-3">
              {manufacturingItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-primary"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-foreground-muted">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Certifications - narrow text section with image strip (primary band) */}
        <motion.section
          style={{ y: certY }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid gap-10 rounded-none bg-primary px-6 py-12 text-white md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-center md:px-8 md:py-16"
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
          <div className="relative aspect-[5/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1593617761943-9099951a0769?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Neatly arranged certificates and documents"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
          </div>
        </motion.section>

        {/* Sustainability - full-width image band with overlay text */}
        <motion.section
          style={{ y: sustainY }}
          id="sustainability"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="relative overflow-hidden">
            <div className="relative h-80 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1759607236409-1df137ecb3b6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lush natural textures and materials"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/10" />
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="px-6 md:px-10 lg:px-12">
                <div className="max-w-xl">
                  <div className="mb-3 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-white/80">
                    <Leaf className="h-4 w-4 text-white" strokeWidth={1.5} />
                    <span>Sustainability commitment</span>
                  </div>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    Sustainability commitment
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
                    Bamboo regenerates rapidly. We partner with certified growers,
                    minimize waste in production, and ensure our supply chain is
                    transparent. Manufacturing without compromise—for people and planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Testimonials strip */}
      <TestimonialsSection />

      {/* CTA Section */}
      <div className="mt-0">
        <motion.section
          style={{ y: ctaY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <CTASection
            title="Partner With Us"
            subtitle="For bulk orders, corporate gifting, or custom engraving."
            primaryLabel="Get in Touch"
            primaryHref="/contact"
          />
        </motion.section>
      </div>
    </main>
  );
}
