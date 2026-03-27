"use client";

interface CornerAccentsProps {
  color?: string;
  size?: number;
  /** CSS inset value — how far from each corner */
  inset?: number;
  /** Only show specific corners */
  corners?: ("tl" | "tr" | "bl" | "br")[];
}

/**
 * Decorative L-shaped bracket accents at slide corners.
 * Creates a "framed" editorial feel.
 */
export default function CornerAccents({
  color = "var(--color-orange)",
  size = 20,
  inset = 0,
  corners = ["tl", "tr", "bl", "br"],
}: CornerAccentsProps) {
  const base: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    zIndex: 3,
    pointerEvents: "none",
    opacity: 0.4,
  };

  return (
    <>
      {corners.includes("tl") && (
        <svg viewBox="0 0 24 24" fill="none" style={{ ...base, top: inset, left: inset }}>
          <path d="M0 24V0H24" stroke={color} strokeWidth="1.5" />
        </svg>
      )}
      {corners.includes("tr") && (
        <svg viewBox="0 0 24 24" fill="none" style={{ ...base, top: inset, right: inset, transform: "scaleX(-1)" }}>
          <path d="M0 24V0H24" stroke={color} strokeWidth="1.5" />
        </svg>
      )}
      {corners.includes("bl") && (
        <svg viewBox="0 0 24 24" fill="none" style={{ ...base, bottom: inset, left: inset, transform: "scaleY(-1)" }}>
          <path d="M0 24V0H24" stroke={color} strokeWidth="1.5" />
        </svg>
      )}
      {corners.includes("br") && (
        <svg viewBox="0 0 24 24" fill="none" style={{ ...base, bottom: inset, right: inset, transform: "scale(-1)" }}>
          <path d="M0 24V0H24" stroke={color} strokeWidth="1.5" />
        </svg>
      )}
    </>
  );
}
