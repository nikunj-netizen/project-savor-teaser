"use client";
import { useCallback, useEffect, useRef, useState } from "react";
const SLIDE_W = 1280;
const SLIDE_H = 720;
interface DeckShellProps { children: React.ReactNode; totalSlides: number; pdfPath?: string; }
export default function DeckShell({ children, totalSlides, pdfPath = "/project-savor-teaser/deck.pdf" }: DeckShellProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    function updateScale() { setScale(Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H)); }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);
  const scrollToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, totalSlides - 1));
    const container = containerRef.current;
    if (!container) return;
    const el = container.querySelectorAll(".slide-wrapper")[clamped] as HTMLElement;
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [totalSlides]);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const wrappers = Array.from(container.querySelectorAll(".slide-wrapper"));
          const index = wrappers.indexOf(entry.target as HTMLElement);
          if (index >= 0) setCurrentSlide(index);
        }
      });
    }, { root: container, threshold: 0.6 });
    container.querySelectorAll(".slide-wrapper").forEach((w) => observer.observe(w));
    return () => observer.disconnect();
  }, [totalSlides]);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); scrollToSlide(currentSlide + 1); }
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); scrollToSlide(currentSlide - 1); }
      else if (e.key === "Home") { e.preventDefault(); scrollToSlide(0); }
      else if (e.key === "End") { e.preventDefault(); scrollToSlide(totalSlides - 1); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide, scrollToSlide, totalSlides]);
  const progress = totalSlides > 1 ? ((currentSlide + 1) / totalSlides) * 100 : 100;
  const slides = Array.isArray(children) ? children : [children];
  return (
    <div ref={containerRef} className="deck-container">
      <div className="deck-progress" style={{ width: `${progress}%` }} />
      {slides.map((child, i) => (
        <div key={i} className="slide-wrapper" style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "var(--color-black)" }}>
          <div style={{ width: SLIDE_W, height: SLIDE_H, transform: `scale(${scale})`, transformOrigin: "center center", flexShrink: 0 }}>{child}</div>
        </div>
      ))}
      <div className="deck-nav">
        <a href={pdfPath} download aria-label="Download PDF" title="Download as PDF" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(10,17,24,0.7)", backdropFilter: "blur(8px)", cursor: "pointer", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2L7 9M7 9L4 6M7 9L10 6M2 11L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
        <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)" }} />
        <button onClick={() => scrollToSlide(currentSlide - 1)} aria-label="Previous slide"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 11L7 3M7 3L3 7M7 3L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
        <span>{currentSlide + 1} / {totalSlides}</span>
        <button onClick={() => scrollToSlide(currentSlide + 1)} aria-label="Next slide"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3L7 11M7 11L11 7M7 11L3 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
      </div>
    </div>
  );
}
