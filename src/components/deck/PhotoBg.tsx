"use client";

import Image from "next/image";

interface PhotoBgProps {
  src: string;
  alt?: string;
  /** CSS gradient string for overlay on top of photo */
  overlay?: string;
  opacity?: number;
  position?: string;
}

/**
 * Full-bleed background photo with optional gradient overlay.
 * Renders at z-index 0-1, below grain texture and content.
 */
export default function PhotoBg({
  src,
  alt = "",
  overlay,
  opacity = 1,
  position = "center",
}: PhotoBgProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: "cover",
          objectPosition: position,
          opacity,
          zIndex: 0,
        }}
        priority
        sizes="100vw"
      />
      {overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: overlay,
            zIndex: 1,
          }}
        />
      )}
    </>
  );
}
