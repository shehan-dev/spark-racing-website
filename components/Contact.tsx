"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import team from "@/data/team.json";
import packages from "@/data/packages.json";
import { site } from "@/lib/site";
import { ease, viewport } from "@/lib/motion";
import { lkr } from "@/lib/format";

const field =
  "w-full border border-line bg-black/40 px-4 py-3 text-ink placeholder:text-white/30 transition-colors duration-200 focus:border-accent focus:outline-none";

type Status = "idle" | "sending" | "sent" | "error";

const [primary, ...cc] = site.enquiryRecipients;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  // Static site, so enquiries are relayed by formsubmit.co to the team's inboxes.
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    if (d.get("_honey")) return; // bot filled the hidden field

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${primary}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: d.get("name"),
          Company: d.get("company") || "—",
          Email: d.get("email"),
          Phone: d.get("phone") || "—",
          "Package of interest": d.get("tier"),
          Message: d.get("message") || "—",
          _subject: `Sponsorship enquiry — ${d.get("company") || d.get("name")} (${d.get("tier")})`,
          _replyto: d.get("email"),
          _cc: cc.join(","),
          _template: "table",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) !== "true") throw new Error(json.message || "Send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,106,0,0.22),transparent_55%)]" />
      <div className="grid-lines absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
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
            Let&apos;s build a partnership around your objectives.
          </p>

          <ul className="mt-10 space-y-4">
            {team.map((m) => (
              <li key={m.name} className="border-l-2 border-accent bg-surface/60 p-5">
                <p className="font-bold">
                  {m.name} <span className="font-normal text-accent">· {m.role}</span>
                </p>
                <div className="mt-2 flex flex-col gap-1 text-sm text-muted sm:flex-row sm:gap-5">
                  <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="hover:text-ink">
                    {m.phone}
                  </a>
                  <a href={`mailto:${m.email}`} className="break-all hover:text-ink">
                    {m.email}
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Sponsorship enquiry — Spark Racing 24h")}`}
            className="heartbeat btn-throttle mt-10 inline-block -skew-x-12 bg-accent px-10 py-5 text-lg font-bold uppercase tracking-wider text-black"
          >
            <span className="inline-block skew-x-12">Partner With Spark Racing</span>
          </a>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="relative self-start border border-line bg-surface/80 p-7 backdrop-blur sm:p-10"
        >
          <span className="absolute left-0 top-0 h-1 w-1/3 bg-accent" aria-hidden />
          <h3 className="font-display text-2xl italic">Request the full proposal</h3>
          <p className="mt-2 text-sm text-muted">Tell us about your brand — we&apos;ll reply within 48 hours.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">Name *</span>
              <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">Company</span>
              <input name="company" autoComplete="organization" className={field} placeholder="Brand / company" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">Email *</span>
              <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">Phone</span>
              <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="+94 ..." />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">Package of interest</span>
              <select name="tier" className={field} defaultValue="Not sure yet">
                {packages.map((p) => (
                  <option key={p.tier} value={p.tier} className="bg-surface">
                    {p.tier} — LKR {lkr(p.price)}
                  </option>
                ))}
                <option className="bg-surface">Not sure yet</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">Message</span>
              <textarea name="message" rows={4} className={field} placeholder="Your goals, audience, timelines..." />
            </label>
          </div>

          {/* Honeypot: hidden from people, filled in by spam bots */}
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-throttle mt-6 w-full bg-accent py-4 font-bold uppercase tracking-wider text-black disabled:cursor-wait disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Send enquiry"}
          </button>
          <div aria-live="polite">
            {status === "sent" && (
              <p className="mt-4 border-l-2 border-accent bg-accent/10 px-4 py-3 text-sm text-ink">
                Thanks, your enquiry is in the pit lane. We&apos;ll be in touch within 48 hours.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 border-l-2 border-red-500 bg-red-500/10 px-4 py-3 text-sm text-ink">
                Something went wrong sending your enquiry. Please email us directly at{" "}
                <a href={`mailto:${site.email}`} className="text-accent underline">
                  {site.email}
                </a>
                .
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
