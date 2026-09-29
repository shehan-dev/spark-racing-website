"use client";

import { motion } from "framer-motion";
import SponsorLogo, { byTier } from "./SponsorLogo";
import { ease, popIn, stagger, viewport } from "@/lib/motion";

const main = byTier("main");

/** Prominent logo wall for the main sponsors, directly under the hero. */
export default function MainSponsors() {
  return (
    <section aria-labelledby="main-sponsors" className="relative border-t border-line bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-center text-center"
        >
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden />
            Main Sponsors · Previous Rounds
            <span className="h-px w-8 bg-accent" aria-hidden />
          </p>
          <h2 id="main-sponsors" className="font-display mt-4 text-3xl italic sm:text-4xl">
            The brands behind <span className="text-accent">our podiums</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Our main sponsors from previous rounds, who backed Spark Racing all the way to the 2025 championship.
          </p>
        </motion.div>

        <motion.ul
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {main.map((s) => (
            <motion.li
              key={s.name}
              variants={popIn}
              className="group relative flex h-32 w-[calc(50%-0.5rem)] items-center justify-center overflow-hidden border border-line bg-surface px-6 transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-[0_0_40px_rgba(255,106,0,0.25)] sm:h-36 sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-0.75rem)]"
            >
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-accent transition-all duration-500 ease-race group-hover:w-full" aria-hidden />
              <span className="flex items-center justify-center text-white/85 transition-[color,transform] duration-300 group-hover:scale-105 group-hover:text-white">
                <SponsorLogo sponsor={s} imgClass="h-12 max-h-full sm:h-14" textClass="text-xl sm:text-2xl text-center whitespace-normal" />
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
