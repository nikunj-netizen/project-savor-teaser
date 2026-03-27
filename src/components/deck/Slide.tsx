"use client";

import { CSSProperties, ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  /** Rendered between section and body — for full-bleed backgrounds, photos, overlays */
  background?: ReactNode;
}

/**
 * Structural slide wrapper.
 * - background: renders at z-index 0 (behind grain texture and content)
 * - grain texture: automatic via CSS ::before at z-index 4
 * - body: content area at z-index 5
 * - footer: confidential + page number at z-index 5
 */
export default function Slide({ children, style, className, background }: SlideProps) {
  const { justifyContent, gap, alignItems, ...sectionStyle } =
    (style ?? {}) as CSSProperties & Record<string, unknown>;

  return (
    <section className={`slide ${className || ""}`} style={sectionStyle}>
      {background}
      <div className="slide-body" style={{ justifyContent, gap, alignItems }}>
        {children}
      </div>
      <div className="slide-footer">
        <span>PRIVATE AND CONFIDENTIAL</span>
      </div>
    </section>
  );
}
