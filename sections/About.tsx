"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const pillars = [
  {
    label: "Vision",
    text: "To be recognised as a premier endurance karting team, consistently achieving podium finishes through unparalleled teamwork, meticulous preparation and innovative race strategy.",
  },
  {
    label: "Mission",
    text: "To compete at the highest levels of endurance karting, foster a culture of excellence and sportsmanship, and deliver exceptional value and visibility to our partners.",
  },
];

const traits = ["Driver speed", "Equipment reliability", "Pit-wall strategy", "Team cohesion"];

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Introducing excellence"
            title={
              <>
                More than a <span className="text-accent">karting team</span>
              </>
            }
            intro="Spark Racing is a collective of passionate, strategic racers driven by the thrill of endurance karting. Endurance racing tests everything a business does: speed, reliability, strategy and teamwork, sustained for hours on end."
          />

          <motion.ul
            variants={stagger(0.06, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-8 flex flex-wrap gap-2"
          >
            {traits.map((t) => (
              <motion.li
                key={t}
                variants={fadeUp}
                className="border border-line bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted"
              >
                {t}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={stagger(0.12, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-10 space-y-4"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.label}
                variants={fadeUp}
                className="relative border-l-2 border-accent bg-gradient-to-r from-surface to-transparent py-5 pl-6 pr-4"
              >
                <h3 className="font-display text-xl italic text-accent">{p.label}</h3>
                <p className="mt-2 leading-relaxed text-ink/85">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div ref={imgRef} className="relative">
          <div className="absolute -inset-3 -z-10 -skew-y-3 bg-gradient-to-br from-accent/30 via-transparent to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden [clip-path:polygon(12%_0,100%_0,100%_88%,88%_100%,0_100%,0_12%)]">
            <motion.div style={{ scale }} className="absolute inset-0">
              <Image
                src="/images/kart-panning-clean.jpg"
                alt="Spark Racing captain Dimal at full speed"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[55%_center]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <p className="font-display text-sm italic tracking-wider">Est. 2024 · Sri Lanka</p>
              <span className="h-1 w-16 bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
