"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Counter from "@/components/Counter";
import media from "@/data/media.json";
import { ease, fadeUp, stagger, viewport } from "@/lib/motion";
import { compact } from "@/lib/format";

const audiences = [
  { title: "Motorsport enthusiasts", text: "Dedicated fans who value performance, innovation and competition." },
  { title: "Families", text: "Karting is family-friendly — parents and kids drawn to a thrilling, accessible sport." },
  { title: "Aspiring racers & young professionals", text: "A demographic invested in development, technology and success." },
  { title: "Corporate & B2B networks", text: "Business leaders and decision-makers reached through events and our team's professional networks." },
];

const maxFollowers = Math.max(...media.channels.map((c) => c.followers));
const totalFollowers = media.channels.reduce((s, c) => s + c.followers, 0);

function Icon({ d }: { d: string }) {
  return (
    <span className="icon-pulse inline-flex h-11 w-11 items-center justify-center bg-accent/15 text-accent">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d={d} />
      </svg>
    </span>
  );
}

export default function Audience() {
  return (
    <section id="reach" className="carbon-fade relative scroll-mt-20 bg-bg-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Powering partnerships, accelerating brands"
          title={
            <>
              Your brand, <span className="text-accent">in the spotlight</span>
            </>
          }
          intro="Partnering with Spark Racing is more than a logo on a kart. It's a platform with national press coverage and an engaged social audience — at every race weekend."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-4 lg:grid-cols-3"
        >
          {/* Media reach */}
          <motion.article variants={fadeUp} className="border border-line bg-surface p-7">
            <Icon d="M3 7h18v11H3zM8 21h8M12 18v3M7 3l5 4 5-4" />
            <h3 className="mt-5 text-xl font-bold">Press coverage</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Endurance Championship coverage from Sri Lanka&apos;s leading news and sports outlets:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {media.press.map((p) => (
                <li key={p} className="border border-line px-3 py-1.5 text-sm text-ink/85">
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Social reach — animated bars */}
          <motion.article variants={fadeUp} className="border border-accent/40 bg-gradient-to-b from-accent/10 to-surface p-7">
            <Icon d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
            <h3 className="mt-5 text-xl font-bold">Social media reach</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Events amplified by motorsport channels — plus our own posts and interviews featuring your brand.
            </p>
            <p className="font-display mt-6 text-5xl text-accent">
              <Counter to={Math.round(totalFollowers / 1000)} suffix="K+" />
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">combined channel followers</p>
            <ul className="mt-6 space-y-4">
              {media.channels.map((c, i) => (
                <li key={c.name}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium">{c.name}</span>
                    <span className="font-mono text-accent-glow">{compact(c.followers)}+</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.max((c.followers / maxFollowers) * 100, 6)}%` }}
                      viewport={viewport}
                      transition={{ duration: 1.1, ease, delay: 0.2 + i * 0.12 }}
                      className="h-full bg-gradient-to-r from-accent-dark to-accent-glow"
                    />
                  </div>
                  {c.note && <p className="mt-1 text-[11px] text-muted">{c.note}</p>}
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Audience demographics */}
          <motion.article variants={fadeUp} className="border border-line bg-surface p-7">
            <Icon d="M16 11a4 4 0 1 0-8 0M3 21a9 9 0 0 1 18 0M19 8a3 3 0 0 1 0 6M5 8a3 3 0 0 0 0 6" />
            <h3 className="mt-5 text-xl font-bold">Who you&apos;ll reach</h3>
            <ul className="mt-5 space-y-5">
              {audiences.map((a, i) => (
                <li key={a.title} className="flex gap-4">
                  <span className="font-display text-2xl italic text-accent/60">0{i + 1}</span>
                  <div>
                    <p className="font-semibold">{a.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{a.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
