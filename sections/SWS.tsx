"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import Counter from "@/components/Counter";
import { fadeUp, stagger, viewport } from "@/lib/motion";

// Approximate positions on a 400×400 globe face: SWS nations lighting up, Sri Lanka highlighted.
const nodes = [
  { x: 150, y: 120 }, { x: 190, y: 105 }, { x: 215, y: 135 }, { x: 120, y: 165 },
  { x: 250, y: 170 }, { x: 290, y: 150 }, { x: 170, y: 210 }, { x: 320, y: 215 },
  { x: 205, y: 255 }, { x: 110, y: 240 }, { x: 300, y: 285 }, { x: 150, y: 300 },
];
const sriLanka = { x: 262, y: 232 };

function Globe() {
  const meridians = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="img" aria-label="SWS spans more than 60 countries worldwide">
      <defs>
        <radialGradient id="globe-fill" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#2a1a0e" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <clipPath id="globe-clip">
          <circle cx="200" cy="200" r="170" />
        </clipPath>
      </defs>
      <circle cx="200" cy="200" r="170" fill="url(#globe-fill)" stroke="rgba(255,106,0,0.35)" />
      <g clipPath="url(#globe-clip)" stroke="rgba(255,255,255,0.08)" fill="none">
        {[-120, -60, 0, 60, 120].map((dy) => (
          <ellipse key={dy} cx="200" cy={200 + dy} rx={Math.sqrt(170 ** 2 - dy ** 2)} ry="14" />
        ))}
        {meridians.map((i) => (
          <motion.ellipse
            key={i}
            cx="200"
            cy="200"
            ry="170"
            initial={{ rx: 170 }}
            animate={{ rx: [170, 0, 170] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: -i * 2 }}
          />
        ))}
      </g>
      {nodes.map((n, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.35 }}
        >
          <circle cx={n.x} cy={n.y} r="3" fill="#ff8c2a" />
          <path
            d={`M${n.x} ${n.y} Q ${(n.x + sriLanka.x) / 2} ${Math.min(n.y, sriLanka.y) - 40} ${sriLanka.x} ${sriLanka.y}`}
            stroke="rgba(255,106,0,0.25)"
            fill="none"
            strokeDasharray="3 4"
          />
        </motion.g>
      ))}
      <circle className="ping" cx={sriLanka.x} cy={sriLanka.y} r="6" fill="none" stroke="#ff6a00" strokeWidth="2" />
      <circle cx={sriLanka.x} cy={sriLanka.y} r="5" fill="#ff6a00" />
      <text x={sriLanka.x + 10} y={sriLanka.y + 20} fill="#fff" fontSize="11" fontWeight="700" letterSpacing="1.5">
        SRI LANKA
      </text>
    </svg>
  );
}

const reasons = [
  "Represent Sri Lanka on the world stage",
  "Exposure to international competition, teams and sponsors",
  "Align your brand with a globally recognised motorsport series",
];

export default function SWS() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <section id="sws" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Global recognition"
            title={
              <>
                What is <span className="text-accent">SWS</span>?
              </>
            }
            intro="The Sodi World Series is the largest international rental-karting competition on the planet. We're competing to win the first-ever 24-hour endurance race in Sri Lanka under the Sodi World Endurance Series."
          />

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="border border-line bg-surface p-6">
              <p className="font-display text-5xl text-accent">
                <Counter to={60} suffix="+" />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted">Countries</p>
            </div>
            <div className="border border-line bg-surface p-6">
              <p className="font-display text-5xl text-accent">1000s</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted">Drivers each year</p>
            </div>
          </div>

          <motion.ul variants={stagger(0.1, 0.2)} initial="hidden" whileInView="show" viewport={viewport} className="mt-8 space-y-3">
            {reasons.map((r) => (
              <motion.li key={r} variants={fadeUp} className="flex items-start gap-3 text-ink/90">
                <span className="mt-2 h-2 w-4 shrink-0 -skew-x-[20deg] bg-accent" aria-hidden />
                {r}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div ref={ref} className="relative mx-auto aspect-square w-full max-w-lg">
          <motion.div style={{ rotate }} className="absolute inset-0">
            <Globe />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
