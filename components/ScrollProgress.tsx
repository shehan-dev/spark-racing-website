"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

/** Top-of-page progress line styled like a rev-counter, with a live "speed" readout. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });
  const kmh = useTransform(scrollYProgress, (p) => Math.round(p * 120));
  const [speed, setSpeed] = useState(0);

  useEffect(() => kmh.on("change", setSpeed), [kmh]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden>
      <motion.div
        style={{ scaleX }}
        className="h-full origin-left bg-gradient-to-r from-accent-dark via-accent to-accent-glow shadow-[0_0_12px_rgba(255,106,0,0.8)]"
      />
      <div className="absolute right-3 top-2 hidden font-mono text-[10px] tracking-widest text-accent/80 md:block">
        {String(speed).padStart(3, "0")} KM/H
      </div>
    </div>
  );
}
