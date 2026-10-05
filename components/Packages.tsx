"use client";

import { motion } from "framer-motion";
import packages from "@/data/packages.json";
import media from "@/data/media.json";
import SectionHeading from "./SectionHeading";
import { ease, fadeUp, stagger, viewport } from "@/lib/motion";
import { lkr } from "@/lib/format";

const budgetTotal = media.budget.reduce((s, b) => s + b.amount, 0);

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M3 8.5 6.5 12 13 4" />
    </svg>
  );
}

export default function Packages() {
  const [platinum, ...rest] = packages;

  return (
    <section id="packages" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="24-Hour Endurance Race"
          title={
            <>
              Sponsorship <span className="text-accent">packages</span>
            </>
          }
          intro="Customisable tiers built to maximise your brand's visibility. Every package can be tailored to your marketing objectives."
        />

        {/* Platinum — exclusive, full width */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease }}
          whileHover={{ y: -6 }}
          className="group relative mt-14 overflow-hidden border-2 border-accent bg-gradient-to-br from-accent/25 via-surface to-bg p-8 shadow-[0_0_60px_rgba(255,106,0,0.18)] transition-shadow duration-300 hover:shadow-[0_0_90px_rgba(255,106,0,0.35)] sm:p-10"
        >
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 [background:repeating-linear-gradient(-60deg,#ff6a00_0_2px,transparent_2px_18px)]" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <p className="inline-block -skew-x-12 bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-black">
                <span className="inline-block skew-x-12">{platinum.tag}</span>
              </p>
              <h3 className="font-display mt-5 text-5xl italic sm:text-6xl">{platinum.tier}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-sm font-semibold text-muted">LKR</span>
                <span className="font-display text-5xl text-accent sm:text-6xl">{lkr(platinum.price)}</span>
              </p>
              <a
                href="#contact"
                data-tier={platinum.tier}
                className="btn-throttle mt-8 inline-block -skew-x-12 bg-accent px-8 py-4 font-bold uppercase tracking-wider text-black"
              >
                <span className="inline-block skew-x-12">Become Title Sponsor</span>
              </a>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {platinum.benefits.map((b) => (
                <li key={b} className="flex gap-3 border border-white/10 bg-black/30 p-4 text-sm leading-relaxed">
                  <Check />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {rest.map((p) => (
            <motion.article
              key={p.tier}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.18 }}
              className="group relative flex flex-col border border-line bg-surface p-7 transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-[0_0_40px_rgba(255,106,0,0.25)]"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">{p.tag}</p>
              <h3 className="font-display mt-3 text-3xl italic">{p.tier}</h3>
              <p className="mt-3 flex items-baseline gap-1.5">
                <span className="text-xs font-semibold text-muted">LKR</span>
                <span className="font-display text-3xl text-accent">{lkr(p.price)}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                {p.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink/85">
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 block border border-white/20 py-3 text-center text-sm font-bold uppercase tracking-wider transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-black"
              >
                Become a Sponsor
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* Team Apparel — teaser for the section below */}
        <motion.a
          href="#apparel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease }}
          whileHover={{ y: -6 }}
          className="group relative mt-4 flex flex-col gap-6 overflow-hidden border border-dashed border-accent/60 bg-surface p-7 transition-[border-color,box-shadow] duration-300 hover:border-solid hover:border-accent hover:shadow-[0_0_40px_rgba(255,106,0,0.25)] sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Product or hybrid</p>
            <h3 className="font-display mt-3 text-3xl italic">Team Apparel Partner</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">
              Supply our official team jerseys and get your brand on every driver, crew member and supporter.
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-2 border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-black">
            See below
            <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
              <path d="M8 2v12M3 9l5 5 5-5" />
            </svg>
          </span>
        </motion.a>

        {/* Where the investment goes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease }}
          className="mt-16 grid gap-10 border border-line bg-bg-2 p-8 sm:p-10 lg:grid-cols-[1fr_1.3fr]"
        >
          <div>
            <h3 className="font-display text-2xl italic sm:text-3xl">Where your investment goes</h3>
            <p className="mt-3 leading-relaxed text-muted">
              Every rupee is allocated to on-track performance and off-track exposure. Driver coaching, strategy
              sessions, team management and admin are covered by our drivers — your money goes to racing and visibility.
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted">Campaign budget</p>
            <p className="font-display text-4xl text-accent">LKR {lkr(budgetTotal)}</p>
          </div>
          <div className="self-center">
            <div className="flex h-5 overflow-hidden" role="img" aria-label="Budget split: race fees and travel versus promotion and marketing">
              {media.budget.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(b.amount / budgetTotal) * 100}%` }}
                  viewport={viewport}
                  transition={{ duration: 1, ease, delay: 0.2 + i * 0.3 }}
                  className={i === 0 ? "bg-accent" : "bg-white"}
                />
              ))}
            </div>
            <ul className="mt-6 space-y-4">
              {media.budget.map((b, i) => (
                <li key={b.label} className="flex items-start justify-between gap-4 border-b border-line pb-4">
                  <div className="flex gap-3">
                    <span className={`mt-1.5 h-3 w-3 shrink-0 ${i === 0 ? "bg-accent" : "bg-white"}`} />
                    <div>
                      <p className="font-semibold">{b.label}</p>
                      <p className="text-sm text-muted">{b.detail}</p>
                    </div>
                  </div>
                  <p className="font-mono text-sm whitespace-nowrap">Rs. {lkr(b.amount)}</p>
                </li>
              ))}
              <li className="flex items-start justify-between gap-4 text-sm text-muted">
                <span>Coaching, strategy, management &amp; admin</span>
                <span className="font-mono">Driver-funded</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
