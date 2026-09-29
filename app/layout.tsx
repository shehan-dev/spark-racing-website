import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Spark Racing — Endurance Karting Team | Sponsorship",
  description:
    "Championship-winning Sri Lankan endurance karting team competing in the Sodi World Series. Partner with Spark Racing for international exposure and measurable sponsor ROI.",
  openGraph: {
    title: "Spark Racing — Endurance Karting Team",
    description: "2025 Endurance Champions. Racing for Sri Lanka's first-ever 24h under the Sodi World Endurance Series.",
    images: ["/images/apmc-2025-team.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
