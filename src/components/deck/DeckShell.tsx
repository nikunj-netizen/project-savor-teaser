"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDE_W = 1280;
const SLIDE_H = 720;

interface DeckShellProps {
  children: React.ReactNode;
  totalSlides: number;
}

export default function DeckShell({ children, totalSlides }: DeckShellProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    function updateScale() {
      const sw = window.innerWidth / SLIDE_W;
      const sh = window.innerHeight / SLIDE_H;
      setScale(Math.min(sw, sh));
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Handle print: flatten layout before printing
  useEffect(() => {
    const beforePrint = () => setIsPrinting(true);
    const afterPrint = () => setIsPrinting(false);
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);
    return () => {
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, []);

  const scrollToSlide = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalSlides - 1));
      const container = containerRef.current;
      if (!container) return;
      const wrappers = container.querySelectorAll(".slide-wrapper");
      const el = wrappers[clamped] as HTMLElement;
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    [totalSlides]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const wrappers = Array.from(container.querySelectorAll(".slide-wrapper"));
            const index = wrappers.indexOf(entry.target as HTMLElement);
            if (index >= 0) setCurrentSlide(index);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );
    container.querySelectorAll(".slide-wrapper").forEach((w) => observer.observe(w));
    return () => observer.disconnect();
  }, [totalSlides]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault(); scrollToSlide(currentSlide + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault(); scrollToSlide(currentSlide - 1);
      } else if (e.key === "Home") {
        e.preventDefault(); scrollToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault(); scrollToSlide(totalSlides - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide, scrollToSlide, totalSlides]);

  const handlePrint = () => {
    // Force all Framer Motion elements visible before printing
    document.querySelectorAll('[style*="opacity: 0"]').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
    });
    document.querySelectorAll('[style*="transform"]').forEach((el) => {
      const htmlEl = el as HTMLElement;
      if (htmlEl.closest('.slide-body')) {
        htmlEl.style.transform = 'none';
      }
    });
    setTimeout(() => window.print(), 100);
  };

  const progress = totalSlides > 1 ? ((currentSlide + 1) / totalSlides) * 100 : 100;
  const slides = Array.isArray(children) ? children : [children];

  return (
    <div
      ref={containerRef}
      className="deck-container"
      style={isPrinting ? { height: 'auto', overflow: 'visible', scrollSnapType: 'none' } : undefined}
    >
      <div className="deck-progress" style={{ width: `${progress}%` }} />
      {slides.map((child, i) => (
        <div
          key={i}
          className="slide-wrapper"
          style={isPrinting ? {
            width: 1280,
            height: 720,
            display: 'block',
            overflow: 'hidden',
            pageBreakAfter: i < slides.length - 1 ? 'always' : 'avoid',
          } : {
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "var(--color-black)",
          }}
        >
          <div
            style={isPrinting ? {
              width: SLIDE_W,
              height: SLIDE_H,
            } : {
              width: SLIDE_W,
              height: SLIDE_H,
              transform: `scale(${scale})`,
              transformOrigin: "center center",
              flexShrink: 0,
            }}
          >
            {child}
          </div>
        </div>
      ))}
      <div className="deck-nav">
        <button onClick={handlePrint} aria-label="Download PDF" title="Download as PDF">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2L7 9M7 9L4 6M7 9L10 6M2 11L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)" }} />
        <button onClick={() => scrollToSlide(currentSlide - 1)} aria-label="Previous slide">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 11L7 3M7 3L3 7M7 3L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <span>{currentSlide + 1} / {totalSlides}</span>
        <button onClick={() => scrollToSlide(currentSlide + 1)} aria-label="Next slide">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3L7 11M7 11L11 7M7 11L3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}
