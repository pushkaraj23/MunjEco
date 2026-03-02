// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Quote, Star } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "Premium bamboo pens for our corporate gifting. Clients love the eco-friendly touch.",
//     author: "Corporate Solutions Ltd",
//   },
//   {
//     quote:
//       "Reliable bulk supplier. On-time delivery, excellent communication.",
//     author: "Green Retail Co",
//   },
//   {
//     quote:
//       "Sustainable sourcing with manufacturing-grade quality. Highly recommend.",
//     author: "Eco Gifting Partners",
//   },
// ];

// export function TestimonialsSection() {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const glow1Opacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
//   const glow2Opacity = useTransform(scrollYProgress, [0.1, 0.38], [0, 0.85]);
//   const headerY = useTransform(scrollYProgress, [0.08, 0.35], [45, -25]);
//   const card0Y = useTransform(scrollYProgress, [0.12, 0.42], [45, -18]);
//   const card1Y = useTransform(scrollYProgress, [0.18, 0.48], [50, -15]);
//   const card2Y = useTransform(scrollYProgress, [0.24, 0.54], [45, -22]);
//   const cardTransforms = [card0Y, card1Y, card2Y];

//   return (
//     <section ref={ref} className="relative overflow-hidden px-6 py-14 md:py-20 bg-gradient-to-b from-green-100 via-green-200 to-green-300">
//       {/* Parallax ambient glows - chai section accent */}
//       <motion.div
//         style={{ opacity: glow1Opacity }}
//         className="pointer-events-none absolute left-1/4 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chai/22 blur-[140px]"
//       />
//       <motion.div
//         style={{ opacity: glow2Opacity }}
//         className="pointer-events-none absolute bottom-1/4 right-1/6 h-80 w-80 rounded-full bg-turmeric/18 blur-[100px]"
//       />
//       <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-chai/12 blur-[80px]" />

//       <div className="relative mx-auto max-w-7xl">
//         {/* Section header with parallax */}
//         <motion.div
//           style={{ y: headerY }}
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="mb-10 text-center"
//         >
//           <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
//             Client Reviews
//           </p>
//           <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
//             What Our Clients Say
//           </h2>
//           <div className="divider-rangoli mx-auto mt-6 w-20 text-chai/50" />
//         </motion.div>

//         {/* Testimonial cards - glass effect with parallax */}
//         <div className="grid gap-8 md:grid-cols-3">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={t.author}
//               style={{ y: cardTransforms[i] }}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: i * 0.1,
//                 duration: 0.5,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               whileHover={{ y: -6, transition: { duration: 0.2 } }}
//             >
//               <blockquote className="group relative overflow-hidden rounded-3xl border border-white/20 bg-black/30 p-8 shadow-[0_0_30px_-10px_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-chai/40 hover:bg-black/40 hover:shadow-[0_0_50px_-15px_rgba(210,171,128,0.2)]">
//                 <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent opacity-60" />
//                 <div className="relative">
//                   <Quote
//                     className="mb-4 h-10 w-10 text-chai/70"
//                     strokeWidth={1}
//                   />
//                   <p className="text-base leading-relaxed text-white/90 md:text-lg">
//                     &ldquo;{t.quote}&rdquo;
//                   </p>
//                   <div className="mt-4 flex items-center gap-2">
//                     <div className="flex gap-0.5 text-turmeric">
//                       {[...Array(5)].map((_, j) => (
//                         <Star
//                           key={j}
//                           className="h-4 w-4 fill-current"
//                           strokeWidth={1.5}
//                         />
//                       ))}
//                     </div>
//                     <footer className="text-sm font-semibold text-chai">
//                       {t.author}
//                     </footer>
//                   </div>
//                 </div>
//               </blockquote>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Premium bamboo pens for our corporate gifting. Clients love the eco-friendly touch.",
    author: "Corporate Solutions Ltd",
  },
  {
    quote:
      "Reliable bulk supplier. On-time delivery, excellent communication.",
    author: "Green Retail Co",
  },
  {
    quote:
      "Sustainable sourcing with manufacturing-grade quality. Highly recommend.",
    author: "Eco Gifting Partners",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glow1Opacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const glow2Opacity = useTransform(scrollYProgress, [0.1, 0.38], [0, 0.85]);
  const headerY = useTransform(scrollYProgress, [0.08, 0.35], [45, -25]);
  const card0Y = useTransform(scrollYProgress, [0.12, 0.42], [45, -18]);
  const card1Y = useTransform(scrollYProgress, [0.18, 0.48], [50, -15]);
  const card2Y = useTransform(scrollYProgress, [0.24, 0.54], [45, -22]);
  const cardTransforms = [card0Y, card1Y, card2Y];

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-14 md:py-20 bg-gradient-to-b from-green-100 via-green-200 to-green-300">
      {/* Parallax ambient glows */}
      <motion.div
        style={{ opacity: glow1Opacity }}
        className="pointer-events-none absolute left-1/4 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-[140px]"
      />
      <motion.div
        style={{ opacity: glow2Opacity }}
        className="pointer-events-none absolute bottom-1/4 right-1/6 h-80 w-80 rounded-full bg-teal-400/15 blur-[100px]"
      />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/20 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header with parallax */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Client Reviews
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <div className="divider-rangoli mx-auto mt-6 w-20 text-emerald-600/50" />
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              style={{ y: cardTransforms[i] }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <blockquote className="group relative overflow-hidden rounded-3xl border border-emerald-200 bg-white/70 p-8 shadow-lg shadow-emerald-900/10 backdrop-blur-xl transition-all duration-300 hover:border-emerald-300 hover:bg-white/80 hover:shadow-xl hover:shadow-emerald-900/15">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/50 to-transparent opacity-60" />
                <div className="relative">
                  <Quote
                    className="mb-4 h-10 w-10 text-emerald-500"
                    strokeWidth={1}
                  />
                  <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-current"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <footer className="text-sm font-semibold text-emerald-700">
                      {t.author}
                    </footer>
                  </div>
                </div>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}