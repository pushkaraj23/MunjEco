"use client";

import Link from "next/link";
import { SOCIAL_LINKS } from "@/components/shared/socialLinks";

export function FloatingSocialButtons() {
  return (
    <div
      className="fixed bottom-6 right-4 z-50 hidden flex-col gap-3 md:flex"
      aria-label="Social and contact links"
    >
      {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-background bg-primary text-white shadow-card backdrop-blur-sm transition-all duration-200 hover:bg-primary-dark hover:text-white"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </Link>
      ))}
    </div>
  );
}
