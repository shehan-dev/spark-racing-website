"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import gallery from "@/data/gallery.json";
import media from "@/data/media.json";
import SectionHeading from "./SectionHeading";
import { ease, popIn, stagger, viewport } from "@/lib/motion";
import { site } from "@/lib/site";

// Bento layout on large screens (6-col grid): one hero tile, two stacked, two halves.
const spans = [
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3 lg:row-span-2",
  "lg:col-span-3 lg:row-span-2",
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <section id="gallery" className="relative scroll-mt-20 bg-bg-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Trackside"
            title={
              <>
                The <span className="text-accent">gallery</span>
              </>
            }
          />
          <a
            href={site.social.photos}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-throttle hidden -skew-x-12 border border-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-accent hover:bg-accent hover:text-black lg:inline-block"
          >
            <span className="inline-block skew-x-12">View more photos →</span>
          </a>
        </div>

        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:auto-rows-[230px] lg:grid-cols-6"
        >
          {gallery.map((g, i) => (
            <motion.li
              key={g.src}
              variants={popIn}
              className={`${spans[i % spans.length]} ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block aspect-[3/2] h-full w-full overflow-hidden lg:aspect-auto"
                aria-label={`Open photo: ${g.alt}`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover transition-transform duration-700 ease-race group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/55" />
                <span className="absolute inset-x-0 bottom-0 translate-y-4 p-5 text-left opacity-0 transition-all duration-300 ease-race group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">{g.category}</span>
                  <span className="mt-1 block text-sm font-medium">{g.alt}</span>
                </span>
                <span className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 ease-race group-hover:w-full" />
              </button>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-8 flex justify-center">
          <a
            href={site.social.photos}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-throttle -skew-x-12 bg-accent px-8 py-4 font-bold uppercase tracking-wider text-black"
          >
            <span className="inline-flex skew-x-12 items-center gap-3">
              View more on Facebook
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden>
                <path d="M0 6h17M12 1l5 5-5 5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </a>
        </div>

        {/* Race highlights */}
        <div className="mt-16">
          <h3 className="font-display text-2xl italic">Race highlights</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {media.videos.map((v, i) => (
              <motion.a
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                className="group relative block aspect-video overflow-hidden border border-line"
              >
                <Image
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-70 transition-all duration-700 ease-race group-hover:scale-105 group-hover:opacity-90"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-black transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden>
                    <path d="M7 4v16l13-8z" />
                  </svg>
                </span>
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">Watch on YouTube</span>
                  <span className="mt-1 block font-semibold">{v.title}</span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={gallery[active].alt}
          >
            <motion.div
              key={gallery[active].src}
              initial={{ opacity: 0, x: 60, skewX: -6 }}
              animate={{ opacity: 1, x: 0, skewX: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease }}
              className="relative h-[80vh] w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={gallery[active].src} alt={gallery[active].alt} fill sizes="100vw" className="object-contain" />
            </motion.div>
            <p className="absolute bottom-6 left-1/2 w-[90%] -translate-x-1/2 text-center text-sm text-muted">
              {gallery[active].alt} · {active + 1}/{gallery.length}
            </p>
            <button
              onClick={close}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center border border-white/20 text-2xl hover:border-accent hover:text-accent"
              aria-label="Close"
            >
              ×
            </button>
            {(["prev", "next"] as const).map((d) => (
              <button
                key={d}
                onClick={(e) => {
                  e.stopPropagation();
                  step(d === "next" ? 1 : -1);
                }}
                className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/5 text-xl hover:bg-accent hover:text-black ${
                  d === "prev" ? "left-4" : "right-4"
                }`}
                aria-label={d === "prev" ? "Previous photo" : "Next photo"}
              >
                {d === "prev" ? "←" : "→"}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
