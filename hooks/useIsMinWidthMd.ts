"use client";

import { useSyncExternalStore } from "react";

/**
 * Matches Tailwind `md:` (768px). SSR snapshot is `false` so we only render
 * the mobile hero until hydrated — avoids mounting two carousels and loading all banner images twice.
 */
export function useIsMinWidthMd(): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(min-width: 768px)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(min-width: 768px)").matches,
    () => false
  );
}
