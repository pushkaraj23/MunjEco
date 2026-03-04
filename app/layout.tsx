import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { LayoutShell } from "@/components/layout/LayoutShell";
import "./globals.css";

// Heading / display font (serif, premium)
const playfairDisplay = Playfair_Display({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Body / UI font (clean, modern sans)
const dmSans = DM_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "MunjEco Global | Indian Eco‑Friendly Exports",
    template: "%s | MunjEco Global",
  },
  description:
    "Indian export company for eco‑friendly handmade combs, brushes, travel kits and handicrafts. We partner with trusted manufacturers and artisan communities across India to supply sustainable, plastic‑free products to global buyers.",
  keywords: [
    "MunjEco Global",
    "Indian handicrafts exporter",
    "eco friendly exports from India",
    "neem wood comb exporter",
    "bamboo toothbrush manufacturer India",
    "eco friendly travel kits India",
    "handmade Indian gifts wholesale",
    "sustainable lifestyle products export",
  ],
  openGraph: {
    type: "website",
    title: "MunjEco Global | Indian Eco‑Friendly Exports",
    description:
      "Indian export company for eco‑friendly handmade combs, brushes, travel kits and handicrafts, supplying global buyers.",
    url: "/",
    siteName: "MunjEco Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "MunjEco Global | Indian Eco‑Friendly Exports",
    description:
      "Eco‑friendly Indian combs, brushes, travel kits and handicrafts for global buyers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${dmSans.variable} antialiased`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
