"use client";

import Image from "next/image";

type Placement =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right";

type DecoGraphicProps = {
  src: string;
  alt: string;
  placement: Placement;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const PLACEMENT_CLASSES: Record<Placement, string> = {
  "top-left": "left-0 top-0",
  "top-right": "right-0 top-0",
  "bottom-left": "left-0 bottom-0",
  "bottom-right": "right-0 bottom-0",
  left: "left-0 top-1/2 -translate-y-1/2",
  right: "right-0 top-1/2 -translate-y-1/2",
};

const OBJECT_POSITION: Record<Placement, string> = {
  "top-left": "object-left-top",
  "top-right": "object-right-top",
  "bottom-left": "object-left-bottom",
  "bottom-right": "object-right-bottom",
  left: "object-left",
  right: "object-right",
};

const SIZE_CLASSES = {
  sm: "h-36 w-36 md:h-48 md:w-48",
  md: "h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80",
  lg: "h-60 w-60 md:h-80 md:w-80 lg:h-96 lg:w-96",
};

export function DecoGraphic({
  src,
  alt,
  placement,
  className = "",
  size = "md",
}: DecoGraphicProps) {
  const pos = PLACEMENT_CLASSES[placement];
  const dims = SIZE_CLASSES[size];
  const objPos = OBJECT_POSITION[placement];
  return (
    <div
      className={`pointer-events-none absolute z-0 select-none opacity-30 ${pos} ${dims} ${className}`}
      aria-hidden
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-contain ${objPos}`}
        sizes="(max-width: 768px) 192px, 320px"
      />
    </div>
  );
}
