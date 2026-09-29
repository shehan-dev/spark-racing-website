"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/lib/motion";
import { site } from "@/lib/site";

const streaks = [
  { top: "18%", w: "38vw", d: "2.2s", delay: "0s" },
  { top: "31%", w: "22vw", d: "1.6s", delay: "0.8s" },
  { top: "47%", w: "46vw", d: "2.8s", delay: "0.3s" },
  { top: "62%", w: "28vw", d: "1.9s", delay: "1.4s" },
  { top: "74%", w: "34vw", d: "2.4s", delay: "0.6s" },
  { top: "86%", w: "18vw", d: "1.5s", delay: "1.9s" },
];

const quickStats = [
  { k: "2025", v: "Overall Champions" },
  { k: "60+", v: "Countries in SWS" },
  { k: "24H", v: "Sri Lanka's first" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Background: blurred race footage / photo with slow parallax drift */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-20">
        {site.heroVideo ? (
          <video
            className="h-full w-full object-cover blur-[3px]"
            src={site.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/night-pack.jpg"
          />
        ) : (
          <Image
            src="/images/night-pack.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center blur-[3px]"
          />
        )}
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-transparent to-black/60" />
      <div className="grid-lines absolute inset-0 -z-10 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />

      {/* Speed streaks */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        {streaks.map((s, i) => (
          <span
            key={i}
            className="streak"
            style={{ top: s.top, width: s.w, left: 0, ["--d" as string]: s.d, ["--delay" as string]: s.delay }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease }}
          className="ignite relative mb-8 h-20 w-56 sm:h-28 sm:w-80"
        >
          <Image src="/images/spark-logo.png" alt="Spark Racing logo" fill sizes="320px" className="object-contain object-left" priority />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease, delay: 0.2 }}
          className="mb-5 inline-flex items-center gap-3 border border-accent/40 bg-accent/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-glow sm:text-xs sm:tracking-[0.2em]"
        >
          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent" />
          Racing for Sri Lanka&apos;s first-ever 24h
        </motion.p>

        <h1 className="font-display max-w-5xl text-[15vw] leading-[0.88] sm:text-7xl lg:text-8xl xl:text-[8.5rem]">
          {["Spark", "Racing"].map((word, i) => (
            <span key={word} className="block overflow-hidden pr-4">
              <motion.span
                className={`block italic ${i === 1 ? "text-glow text-accent" : ""}`}
                initial={{ x: "-110%", skewX: -24, filter: "blur(12px)" }}
                animate={{ x: "0%", skewX: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease, delay: 0.3 + i * 0.12 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.65 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          <span className="font-semibold text-ink">{site.tagline}.</span> A championship-winning team delivering
          international exposure through the Sodi World Series — and measurable ROI for the brands that race with us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="btn-throttle -skew-x-12 bg-accent px-8 py-4 font-bold uppercase tracking-wider text-black">
            <span className="inline-flex skew-x-12 items-center gap-3">
              Partner With Us
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden>
                <path d="M0 6h17M12 1l5 5-5 5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </a>
          <a
            href="#packages"
            className="-skew-x-12 border border-white/20 px-8 py-4 font-semibold uppercase tracking-wider transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <span className="inline-block skew-x-12">View Packages</span>
          </a>
        </motion.div>

        <motion.dl
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 1 } } }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-px overflow-hidden border border-line bg-line"
        >
          {quickStats.map((s) => (
            <motion.div
              key={s.k}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease } } }}
              className="bg-black/60 px-4 py-4 backdrop-blur sm:px-6"
            >
              <dt className="font-display text-2xl text-accent sm:text-3xl">{s.k}</dt>
              <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted sm:text-xs">{s.v}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted md:flex" aria-hidden>
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-accent"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    </section>
  );
}
