"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { ease } from "@/lib/motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#top" className="relative block h-9 w-28 lg:h-11 lg:w-32" aria-label="Spark Racing — home">
          <Image src="/images/spark-logo.png" alt="Spark Racing" fill sizes="128px" className="object-contain" priority />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {site.nav.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium uppercase tracking-wider text-muted transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-race group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-throttle hidden -skew-x-12 bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-black sm:inline-block"
          >
            <span className="inline-block skew-x-12">Partner With Us</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-accent transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            transition={{ duration: 0.45, ease }}
            className="carbon fixed inset-x-0 bottom-0 top-16 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pt-8">
              {site.nav.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.35, ease }}
                >
                  <a href={l.href} onClick={() => setOpen(false)} className="font-display block py-3 text-3xl">
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-6">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block bg-accent px-6 py-4 text-center font-bold uppercase tracking-wider text-black"
                >
                  Partner With Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
