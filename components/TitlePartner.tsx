"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ease, popIn, stagger, viewport } from "@/lib/motion";
import { site } from "@/lib/site";

const { titlePartner } = site;

/** Title partnership announcement, directly under the hero. */
export default function TitlePartner() {
  return (
    <section id="title-partner" aria-labelledby="title-partner-heading" className="relative scroll-mt-20 border-t border-line bg-bg-2 py-16 sm:py-20">
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
            Official Title Partner
            <span className="h-px w-8 bg-accent" aria-hidden />
          </p>
          <h2 id="title-partner-heading" className="font-display mt-4 text-3xl italic sm:text-5xl">
            Access Motors <span className="text-glow text-accent">Spark Racing</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            {titlePartner.name} joins us as our Platinum title partner for the 24-Hour Endurance Race. Together with
            Bodyshop by Access, the team now races as{" "}
            <span className="font-semibold text-ink">{site.teamName}</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="relative mt-12 overflow-hidden border-2 border-accent bg-gradient-to-br from-accent/20 via-surface to-bg p-8 shadow-[0_0_60px_rgba(255,106,0,0.18)] sm:p-12"
        >
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 [background:repeating-linear-gradient(-60deg,#ff6a00_0_2px,transparent_2px_18px)]" aria-hidden />

          <div className="relative flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
            <motion.ul
              variants={stagger(0.12, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10"
            >
              {titlePartner.group.map((p, i) => (
                <motion.li key={p.name} variants={popIn} className="flex items-center gap-6 sm:gap-10">
                  {i > 0 && <span className="hidden h-16 w-px bg-white/20 sm:block" aria-hidden />}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt={p.name} className="h-16 w-auto max-w-full object-contain sm:h-20" />
                </motion.li>
              ))}
            </motion.ul>

            <span className="font-display text-4xl italic text-accent sm:text-5xl" aria-hidden>
              ×
            </span>

            <motion.div variants={popIn} initial="hidden" whileInView="show" viewport={viewport} className="relative h-20 w-56 sm:h-24 sm:w-64">
              <Image src="/images/spark-logo.png" alt="Spark Racing" fill sizes="256px" className="object-contain" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
