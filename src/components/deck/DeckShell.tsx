"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface DeckShellProps {
  children: React.ReactNode;
  totalSlides: number;
}

export default function DeckShell({ children, totalSlides }: DeckShellProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSlide = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalSlides - 1));
      const container = containerRef.current;
      if (!container) return;
      const slides = container.querySelectorAll(".slide");
      const slideEl = slides[clamped] as HTMLElement;
      if (slideEl) {
        slideEl.scrollIntoView({ behavior: "smooth" });
      }
    },
    [totalSlides]
  );

  // Track current slide via IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slides = Array.from(
              container.querySelectorAll(".slide")
            );
            const index = slides.indexOf(entry.target as HTMLElement);
            if (index >= 0) setCurrentSlide(index);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    container.querySelectorAll(".slide").forEach((slide) => {
      observer.observe(slide);
    });

    return () => observer.disconnect();
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        scrollToSlide(currentSlide + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToSlide(currentSlide - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSlide(totalSlides - 1);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide, scrollToSlide, totalSlides]);

  const progress = totalSlides > 1 ? ((currentSlide + 1) / totalSlides) * 100 : 100;

  return (
    <div ref={containerRef} className="deck-container">
      <div className="deck-progress" style={{ width: `${progress}%` }} />

      {children}

      <div className="deck-nav">
        <button
          onClick={() => window.print()}
          aria-label="Download PDF"
          title="Download as PDF"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2L7 9M7 9L4 6M7 9L10 6M2 11L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)" }} />
        <button
          onClick={() => scrollToSlide(currentSlide - 1)}
          aria-label="Previous slide"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 11L7 3M7 3L3 7M7 3L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span>
          {currentSlide + 1} / {totalSlides}
        </span>
        <button
          onClick={() => scrollToSlide(currentSlide + 1)}
          aria-label="Next slide"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 3L7 11M7 11L11 7M7 11L3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
