"use client";

import { motion } from "framer-motion";
import { ease, viewport } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
};

/** Section title revealed with a diagonal orange wipe — like a TV racing cut. */
export default function SectionHeading({ eyebrow, title, intro, align = "left" }: Props) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <motion.p
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ duration: 0.35, ease }}
        className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent ${center ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-accent" aria-hidden />
        {eyebrow}
      </motion.p>

      <div className="relative inline-block overflow-hidden">
        <motion.h2
          initial={{ clipPath: "polygon(0 0, 0 0, -20% 100%, -20% 100%)" }}
          whileInView={{ clipPath: "polygon(0 0, 120% 0, 100% 100%, -20% 100%)" }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h2>
        <motion.span
          aria-hidden
          initial={{ x: "-110%", skewX: -20 }}
          whileInView={{ x: "110%" }}
          viewport={viewport}
          transition={{ duration: 0.75, ease }}
          className="pointer-events-none absolute inset-0 bg-accent"
        />
      </div>

      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mt-6 text-base leading-relaxed text-muted sm:text-lg"
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
