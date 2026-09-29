"use client";

import { motion } from "framer-motion";
import team from "@/data/team.json";
import { site } from "@/lib/site";
import { ease, fadeUp, stagger, viewport } from "@/lib/motion";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 5h18v14H3zM3 6l9 7 9-7" />
    </svg>
  );
}

const subject = encodeURIComponent("Sponsorship enquiry — Spark Racing 24h");

export default function Contact() {
  const socials = [
    { label: "Instagram", href: site.social.instagram },
    { label: "Facebook", href: site.social.facebook },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,106,0,0.22),transparent_55%)]" />
      <div className="grid-lines absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.35, ease }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-accent"
          >
            Let&apos;s connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -80, skewX: -10 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
            className="font-display mt-4 text-5xl italic sm:text-6xl lg:text-7xl"
          >
            Partner with <span className="text-glow text-accent">Spark Racing</span>
          </motion.h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Significant visibility, a passionate audience and a strong return — amplified by our digital marketing.
            Call or email our sponsorship team and we&apos;ll build a package around your objectives.
          </p>

          <a
            href={`mailto:${site.email}?subject=${subject}`}
            className="heartbeat btn-throttle mt-10 inline-block -skew-x-12 bg-accent px-10 py-5 text-lg font-bold uppercase tracking-wider text-black"
          >
            <span className="inline-block skew-x-12">Email Our Team</span>
          </a>
        </div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={viewport}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-muted">Sponsorship team</p>
          <ul className="space-y-4">
            {team.map((m) => (
              <motion.li
                key={m.name}
                variants={fadeUp}
                className="relative overflow-hidden border border-line bg-surface/80 p-6 backdrop-blur sm:p-8"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-accent" aria-hidden />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">{m.role}</p>
                <h3 className="font-display mt-2 text-3xl italic">{m.name}</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a
                    href={`tel:${m.phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-3 border border-white/15 px-4 py-3 transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-black"
                  >
                    <PhoneIcon />
                    <span className="font-mono text-sm">{m.phone}</span>
                  </a>
                  <a
                    href={`mailto:${m.email}?subject=${subject}`}
                    className="group flex min-w-0 items-center gap-3 border border-white/15 px-4 py-3 transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-black"
                  >
                    <MailIcon />
                    <span className="truncate text-sm">{m.email}</span>
                  </a>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <span className="text-muted">Follow {site.social.handle}</span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold uppercase tracking-wider text-ink transition-colors hover:text-accent"
              >
                {s.label} →
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
