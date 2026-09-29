"use client";

import { motion } from "framer-motion";
import { ease, viewport } from "@/lib/motion";

type Props = { title: string; text: string; cta: string; href?: string };

export default function CTABand({ title, text, cta, href = "#contact" }: Props) {
  return (
    <section className="relative overflow-hidden bg-accent text-black">
      <div
        className="absolute inset-0 opacity-15 [background:repeating-linear-gradient(-60deg,#000_0_2px,transparent_2px_22px)]"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease }}
        className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8"
      >
        <div>
          <h2 className="font-display text-3xl italic sm:text-4xl">{title}</h2>
          <p className="mt-2 max-w-xl font-medium text-black/75">{text}</p>
        </div>
        <a
          href={href}
          className="btn-throttle shrink-0 -skew-x-12 bg-black px-8 py-4 font-bold uppercase tracking-wider text-ink"
        >
          <span className="inline-block skew-x-12">{cta}</span>
        </a>
      </motion.div>
    </section>
  );
}
