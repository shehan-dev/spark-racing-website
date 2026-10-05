"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ease, fadeUp, stagger, viewport } from "@/lib/motion";

const requirements = [
  {
    group: "Drivers",
    use: "Race apparel",
    qty: 12,
    detail: "2 per driver · Long sleeve / Short sleeve",
  },
  {
    group: "Team, family & supporters",
    use: "Team wear",
    qty: 16,
    detail: "Short sleeve",
  },
];

const options = [
  {
    label: "Product-based",
    text: "Design and supply our official team jerseys.",
  },
  {
    label: "Hybrid",
    text: "Jersey supply combined with financial support.",
  },
];

const totalJerseys = requirements.reduce((s, r) => s + r.qty, 0);

export default function Apparel() {
  return (
    <section id="apparel" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Partnership opportunity"
          title={
            <>
              Official Team <span className="text-accent">Apparel</span> Partner
            </>
          }
          intro="As part of our preparations for the upcoming 24-Hour Endurance Karting Race, Spark Racing is seeking a Team Apparel Partner to support the design and supply of our official team wear — brand visibility both on and off the track."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
            className="relative"
          >
            <div className="absolute -inset-3 -z-10 -skew-y-3 bg-gradient-to-br from-accent/30 via-transparent to-transparent blur-2xl" />
            <div className="relative aspect-[3/2] overflow-hidden [clip-path:polygon(8%_0,100%_0,100%_88%,92%_100%,0_100%,0_12%)]">
              <Image
                src="/images/team-jersey.jpg"
                alt="Spark Racing drivers and crew in the official team jersey"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                <p className="font-display text-sm italic tracking-wider">Our current team kit</p>
                <span className="h-1 w-16 bg-accent" />
              </div>
            </div>
          </motion.div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <h3 className="font-display text-2xl italic sm:text-3xl">Apparel requirement</h3>
              <p className="text-right">
                <span className="font-display text-4xl text-accent">{totalJerseys}</span>
                <span className="ml-2 text-xs font-semibold uppercase tracking-widest text-muted">Jerseys</span>
              </p>
            </div>

            <motion.ul
              variants={stagger(0.1, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-6 space-y-3"
            >
              {requirements.map((r) => (
                <motion.li
                  key={r.group}
                  variants={fadeUp}
                  className="flex items-center justify-between gap-4 border-l-2 border-accent bg-gradient-to-r from-surface to-transparent py-4 pl-5 pr-4"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">{r.use}</p>
                    <p className="mt-1 font-semibold">{r.group}</p>
                    <p className="text-sm text-muted">{r.detail}</p>
                  </div>
                  <p className="font-display text-3xl text-accent">{r.qty}</p>
                </motion.li>
              ))}
            </motion.ul>
            <p className="mt-3 text-xs text-muted">Quantities are estimated and may vary slightly.</p>

            <h3 className="font-display mt-10 text-2xl italic sm:text-3xl">Sponsorship opportunity</h3>
            <p className="mt-2 leading-relaxed text-muted">We&apos;re open to either partnership model:</p>
            <motion.div
              variants={stagger(0.1, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-5 grid gap-3 sm:grid-cols-2"
            >
              {options.map((o) => (
                <motion.div key={o.label} variants={fadeUp} className="border border-line bg-surface p-5">
                  <p className="font-display text-xl italic text-accent">{o.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/85">{o.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <a
              href="#contact"
              className="btn-throttle mt-8 inline-block -skew-x-12 bg-accent px-8 py-4 font-bold uppercase tracking-wider text-black"
            >
              <span className="inline-block skew-x-12">Become Our Apparel Partner</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
