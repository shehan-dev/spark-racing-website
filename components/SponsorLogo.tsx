import sponsors from "@/data/sponsors.json";

export type Sponsor = (typeof sponsors)[number];
export type Tier = "main" | "previous" | "media";

export const byTier = (tier: Tier) => sponsors.filter((s) => s.tier === tier);

type Props = {
  sponsor: Sponsor;
  /** Tailwind height classes for the logo image, e.g. "h-10 sm:h-12" */
  imgClass?: string;
  /** Tailwind text-size classes for the name fallback */
  textClass?: string;
  decorative?: boolean;
};

/** White monochrome logo, or a styled wordmark until a logo file is added to public/sponsors. */
export default function SponsorLogo({ sponsor, imgClass = "h-10", textClass = "text-2xl", decorative }: Props) {
  if (sponsor.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={sponsor.logo}
        alt={decorative ? "" : sponsor.name}
        loading="lazy"
        className={`${imgClass} w-auto max-w-full object-contain`}
      />
    );
  }
  return (
    <span className={`font-display whitespace-nowrap italic leading-none ${textClass}`} aria-hidden={decorative}>
      {sponsor.name}
    </span>
  );
}
