export const lkr = (n: number) => n.toLocaleString("en-US");

export const compact = (n: number) =>
  n >= 1000 ? `${Math.round(n / 1000)}K` : String(n);
