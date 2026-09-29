"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import achievements from "@/data/achievements.json";
import Counter from "./Counter";
import SectionHeading from "./SectionHeading";
import { popIn, stagger, viewport } from "@/lib/motion";

function Trophy({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
    </svg>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="carbon-fade relative scroll-mt-20 bg-bg-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From start to spark"
          title={
            <>
              Proven on <span className="text-accent">the podium</span>
            </>
          }
          intro="Formed in 2024, Spark Racing quickly became a front-runner in national endurance karting — strong enough to field two teams. Results, not promises."
        />

        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((a) => (
            <motion.li
              key={a.title}
              variants={popIn}
              className={`group relative overflow-hidden border p-7 transition-colors duration-300 ${
                a.featured
                  ? "border-accent/60 bg-gradient-to-br from-accent/20 via-surface to-surface sm:col-span-2 lg:row-span-2 lg:col-span-1"
                  : "border-line bg-surface hover:border-accent/40"
              }`}
            >
              {a.featured && (
                <>
                  <Image
                    src="/images/speedbay-2025-trophy.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-[70%_center] opacity-45 transition-transform duration-700 ease-race group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" aria-hidden />
                </>
              )}
              <div className="absolute -right-10 -top-10 h-32 w-32 rotate-45 bg-accent/5 transition-transform duration-500 ease-race group-hover:translate-x-4" aria-hidden />
              <Trophy className={`relative ${a.featured ? "h-12 w-12" : "h-8 w-8"} text-accent`} />
              <p className={`font-display relative mt-6 ${a.featured ? "text-8xl sm:text-9xl" : "text-5xl"} text-ink`}>
                <Counter to={a.value} suffix={a.suffix} duration={a.featured ? 1.2 : 1.6} />
              </p>
              <p className="relative mt-2 text-xs font-semibold uppercase tracking-widest text-accent">{a.unit}</p>
              <h3 className={`relative mt-6 font-bold ${a.featured ? "text-2xl" : "text-lg"}`}>{a.title}</h3>
              <p className="relative mt-2 leading-relaxed text-muted">{a.detail}</p>
              {a.featured && (
                <p className="font-display relative mt-10 inline-block -skew-x-12 bg-accent px-3 py-1 text-sm text-black">
                  Champions 2025
                </p>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
