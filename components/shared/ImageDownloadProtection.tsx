"use client";

import { useEffect } from "react";

/**
 * Reduces casual image downloads (drag-to-desktop, right-click → Save image).
 * Not a security boundary — determined users can still capture assets.
 */
export function ImageDownloadProtection() {
  useEffect(() => {
    const stopDrag = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    const stopContextMenuOnImages = (e: MouseEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    document.addEventListener("dragstart", stopDrag, true);
    document.addEventListener("contextmenu", stopContextMenuOnImages, true);

    return () => {
      document.removeEventListener("dragstart", stopDrag, true);
      document.removeEventListener("contextmenu", stopContextMenuOnImages, true);
    };
  }, []);

  return null;
}
