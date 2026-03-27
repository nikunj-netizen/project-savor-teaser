"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CountUpMetricProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  label: string;
  sublabel?: string;
  dark?: boolean;
  fontSize?: string;
  numberColor?: string;
}

export default function CountUpMetric({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  label,
  sublabel,
  dark = false,
  fontSize,
  numberColor,
}: CountUpMetricProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div
        className="font-serif font-bold tracking-tight leading-none"
        style={{
          fontSize: fontSize || "clamp(2.5rem, 5vw, 4.5rem)",
          letterSpacing: "-0.03em",
          color: numberColor || (dark ? "white" : "var(--color-slate)"),
        }}
      >
        {inView ? (
          <CountUp
            start={0}
            end={end}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
            duration={duration}
            useEasing
          />
        ) : (
          <span style={{ opacity: 0 }}>
            {prefix}
            {end}
            {suffix}
          </span>
        )}
      </div>
      <div
        className="font-medium tracking-wide uppercase"
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.08em",
          color: dark ? "rgba(255,255,255,0.5)" : "var(--color-warm-500)",
        }}
      >
        {label}
      </div>
      {sublabel && (
        <div
          style={{
            fontSize: "0.875rem",
            color: dark ? "rgba(255,255,255,0.65)" : "var(--color-warm-600)",
            lineHeight: 1.5,
          }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}
