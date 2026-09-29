"use client";

import { useState } from "react";
import SponsorLogo, { byTier, type Sponsor } from "./SponsorLogo";

/** One pit-lane banner row. Slows down on hover so a logo can be read. */
function Row({ items, reverse = false, duration }: { items: Sponsor[]; reverse?: boolean; duration: number }) {
  const [slow, setSlow] = useState(false);
  // Repeat short lists so one copy is always wider than the viewport.
  const set = items.length < 8 ? [...items, ...items] : items;

  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
      onMouseEnter={() => setSlow(true)}
      onMouseLeave={() => setSlow(false)}
    >
      <div
        className={`marquee-track flex w-max items-center ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ ["--marquee-duration" as string]: `${slow ? duration * 3 : duration}s` }}
      >
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
            {set.map((s, i) => (
              <li key={`${s.name}-${i}`} className="flex items-center">
                <span className="flex h-16 items-center px-8 text-white/55 opacity-80 transition-[color,opacity,transform] duration-200 hover:scale-105 hover:text-white hover:opacity-100 sm:px-12">
                  <SponsorLogo
                    sponsor={s}
                    decorative={k === 1 || i >= items.length}
                    imgClass="h-9 max-w-[180px] sm:h-11"
                    textClass="text-xl sm:text-2xl"
                  />
                </span>
                <span className="h-5 w-1.5 -skew-x-[20deg] bg-accent/60" aria-hidden />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function SponsorMarquee() {
  return (
    <section aria-label="Previous round sponsors and media partners" className="relative border-y border-line bg-bg-2 py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted">Previous Round Sponsors</p>
      <p className="mb-5 mt-2 text-center text-sm text-muted/70">Thank you to the brands who backed us in earlier rounds.</p>
      <Row items={byTier("previous")} duration={45} />
      <p className="mb-4 mt-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted">
        Media Partners
      </p>
      <Row items={byTier("media")} reverse duration={38} />
    </section>
  );
}
