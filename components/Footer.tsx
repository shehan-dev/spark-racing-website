import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  const socials = [
    { label: "Instagram", href: site.social.instagram },
    { label: "Facebook", href: site.social.facebook },
  ];

  return (
    <footer className="relative border-t border-line bg-black">
      <div className="race-stripe" aria-hidden />
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="relative h-14 w-40">
            <Image src="/images/spark-logo.png" alt="Spark Racing" fill sizes="160px" className="object-contain object-left" />
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Spark Racing Karting — Endurance Team. Sri Lanka.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <ul className="flex gap-5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-wider text-muted transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-throttle -skew-x-12 bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-black"
          >
            <span className="inline-block skew-x-12">Become a Sponsor</span>
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Spark Racing. {site.social.handle}
        </p>
      </div>
    </footer>
  );
}
