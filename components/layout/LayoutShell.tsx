"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocialButtons } from "@/components/shared/FloatingSocialButtons";

type LayoutShellProps = { children: React.ReactNode };

export function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname();
  const hidePublicChrome =
    pathname?.startsWith("/admin") || pathname?.startsWith("/enquiries");

  return (
    <>
      {!hidePublicChrome && <Navbar />}
      {children}
      {!hidePublicChrome && <Footer />}
      {!hidePublicChrome && <FloatingSocialButtons />}
    </>
  );
}
