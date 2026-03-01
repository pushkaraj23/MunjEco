import type { Metadata } from "next";
import { Fredoka, Nunito, Playfair_Display } from "next/font/google";
import { LayoutShell } from "@/components/LayoutShell";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MunjEco Global | Natural • Responsible • Daily Use Products",
  description:
    "Premium bamboo pens, stationery, bottles & cups. Eco-friendly gifting. Custom logo engraving. Better habits for better nature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${nunito.variable} ${playfair.variable} antialiased`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
