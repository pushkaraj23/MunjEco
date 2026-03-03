"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Package,
  Leaf,
  Tags,
  Handshake,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Ethical & Responsible Sourcing",
    desc: "We source directly from verified manufacturers and artisan groups following ethical and sustainable practices.",
  },
  {
    icon: Package,
    title: "Export-Ready Quality",
    desc: "Products are selected, packed, and documented to meet international export standards.",
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    desc: "Plastic-free, biodegradable materials aligned with EU & UK sustainability goals.",
  },
  {
    icon: Tags,
    title: "Flexible Bulk & Private Label",
    desc: "Bulk supply, customization, and private labeling available based on buyer needs.",
  },
  {
    icon: Handshake,
    title: "Transparent & Reliable",
    desc: "Clear pricing, timely delivery, and honest communication — no surprises.",
  },
];

const CENTER_IMAGE =
  "https://images.unsplash.com/photo-1593617761943-9099951a0769?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function WhyChooseSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0.06, 0.35], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.12, 0.42], [0, 0.9]);
  const headerY = useTransform(scrollYProgress, [0.08, 0.35], [45, -25]);
  const card0Y = useTransform(scrollYProgress, [0.12, 0.42], [40, -15]);
  const card1Y = useTransform(scrollYProgress, [0.16, 0.46], [45, -12]);
  const card2Y = useTransform(scrollYProgress, [0.2, 0.5], [38, -18]);
  const card3Y = useTransform(scrollYProgress, [0.24, 0.54], [42, -14]);
  const card4Y = useTransform(scrollYProgress, [0.28, 0.58], [40, -16]);
  const cardTransforms = [card0Y, card1Y, card2Y, card3Y, card4Y];

  return (
    <section
      ref={ref}
      className="relative border-t border-border/70 bg-background px-8 py-24 sm:px-10 md:px-12 md:py-32 lg:px-16 xl:px-20"
    >
      {/* Right-half background image for a gallery feel */}
      <div className="pointer-events-none absolute inset-y-8 right-0 hidden w-1/2 lg:block">
        <div className="relative h-full w-full">
          <Image
            src={CENTER_IMAGE}
            alt="Calm studio-style product arrangement"
            fill
            className="object-cover opacity-30"
            sizes="50vw"
          />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 lg:flex-row">
        {/* Left: statement + tagline */}
        <motion.header
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-sm"
        >
          <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted/90">
            Why choose MunjEco Global
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Why global buyers work with us.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-foreground-muted">
            We don&apos;t just ship products — we build long-term, trust-based
            trade relationships with our buyers and partners.
          </p>
        </motion.header>

        {/* Right: asymmetrical grid of reasons */}
        <div className="flex-1">
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                style={{ y: cardTransforms[index] }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 + index * 0.06,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={index === 0 || index === 3 ? "md:-mt-4" : ""}
              >
                <BenefitCard benefit={benefit} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit }: { benefit: (typeof benefits)[number] }) {
  const Icon = benefit.icon;
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group border border-border/70 bg-background-alt px-6 py-6 transition-colors duration-300 hover:border-matcha/80"
    >
      <div className="flex flex-col">
        <div className="mb-3 flex h-10 w-10 items-center justify-center border border-matcha/50 text-matcha">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h3 className="font-heading text-base font-semibold text-foreground md:text-lg">
          {benefit.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
          {benefit.desc}
        </p>
      </div>
    </motion.div>
  );
}
