"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ease, fadeUp, stagger, viewport } from "@/lib/motion";

const checklist = [
  { label: "Engine build", status: "In progress", live: true },
  { label: "Tyre pressures", status: "Checking", live: true },
  { label: "Fuel mix", status: "Set" },
  { label: "Driver line-up", status: "Under wraps" },
];

/** Static tachometer, needle held just short of the redline. */
function Tacho() {
  const ticks = Array.from({ length: 11 }, (_, i) => i);
  // Arc from -120deg to +120deg
  return (
    <svg viewBox="0 0 200 140" className="h-auto w-full max-w-[260px]" aria-hidden>
      {ticks.map((t) => {
        const a = ((-120 + t * 24) * Math.PI) / 180;
        const r1 = 78;
        const r2 = t % 2 === 0 ? 64 : 70;
        return (
          <line
            key={t}
            x1={100 + Math.sin(a) * r1}
            y1={100 - Math.cos(a) * r1}
            x2={100 + Math.sin(a) * r2}
            y2={100 - Math.cos(a) * r2}
            stroke={t >= 8 ? "#ff6a00" : "rgba(255,255,255,0.5)"}
            strokeWidth={t % 2 === 0 ? 3 : 1.5}
          />
        );
      })}
      <path d="M 32.4 139 A 78 78 0 1 1 167.6 139" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
      <g transform="rotate(60 100 100)">
        <line x1="100" y1="100" x2="100" y2="34" stroke="#ff6a00" strokeWidth="3" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="100" r="7" fill="#ff6a00" />
      <text x="100" y="128" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" letterSpacing="2">
        RPM × 1000
      </text>
    </svg>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The crew"
          title={
            <>
              Meet the <span className="text-accent">team</span>
            </>
          }
          intro="Drivers, strategists and pit crew who turn long hours on track into podium finishes."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Coming soon teaser */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
            className="relative overflow-hidden border border-accent/40 lg:col-span-2"
          >
            <Image
              src="/images/driver-portrait-clean.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="scale-110 object-cover object-[center_30%] blur-md brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
            <div
              className="absolute inset-x-0 top-0 h-3 opacity-80 [background:repeating-linear-gradient(90deg,#fff_0_12px,#000_12px_24px)]"
              aria-hidden
            />

            <div className="relative grid gap-10 p-8 pt-12 sm:p-12 md:grid-cols-[1.3fr_1fr] md:items-center">
              <div>
                <p className="inline-flex items-center gap-2 -skew-x-12 bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-black">
                  <span className="inline-flex skew-x-12 items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-black" />
                    Coming soon
                  </span>
                </p>
                <h3 className="font-display mt-6 text-4xl italic sm:text-5xl">
                  Engines <span className="text-glow text-accent">warming up</span>
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-ink/80">
                  Driver profiles are still in the garage. We&apos;re tuning the line-up for the 24-hour race —
                  full profiles roll out of the pit lane soon.
                </p>

                <motion.ul
                  variants={stagger(0.12, 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className="mt-8 max-w-md divide-y divide-white/10 border-y border-white/10 font-mono text-sm"
                >
                  {checklist.map((c) => (
                    <motion.li key={c.label} variants={fadeUp} className="flex items-center justify-between py-2.5">
                      <span className="text-muted">{c.label}</span>
                      <span className={`flex items-center gap-2 ${c.live ? "text-accent-glow" : "text-ink"}`}>
                        {c.live && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />}
                        {c.status}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="flex flex-col items-center">
                <Tacho />
                <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  Lights out soon
                </p>
              </div>
            </div>
          </motion.div>

          {/* Open seat for the sponsor */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="carbon group relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden border-2 border-dashed border-accent/40 p-8 text-center transition-colors duration-300 hover:border-accent"
          >
            <span className="icon-pulse flex h-16 w-16 items-center justify-center rounded-full bg-accent text-3xl font-bold text-black">
              +
            </span>
            <p className="font-display mt-6 text-2xl italic">Your brand here</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Platinum partners race under their own name: <span className="text-ink">[Your Brand] × Spark Racing</span>.
            </p>
            <span className="mt-6 text-xs font-bold uppercase tracking-widest text-accent">Claim the seat →</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
