import type { Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export const dur = {
  fast: 0.18,
  medium: 0.35,
  slow: 0.6,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: dur.slow, ease } },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -80, skewX: -8 },
  show: { opacity: 1, x: 0, skewX: 0, transition: { duration: dur.slow, ease } },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: dur.medium, ease } },
};

export const stagger = (step = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: step, delayChildren: delay } },
});

export const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;
