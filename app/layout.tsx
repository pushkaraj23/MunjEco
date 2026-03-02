import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { LayoutShell } from "@/components/LayoutShell";
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
      <body className={`${playfairDisplay.variable} ${dmSans.variable} antialiased`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
