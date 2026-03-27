"use client";

const channels = [
  { label: "B2B Wholesale", pct: 90, color: "var(--color-slate)" },
  { label: "B2C / Partnerships", pct: 6, color: "var(--color-orange)" },
  { label: "Supermarket Butchery", pct: 4, color: "var(--color-warm-400)" },
];

export default function ChannelMixBar() {
  return (
    <div>
      {/* Stacked bar */}
      <div
        style={{
          display: "flex",
          height: 28,
          borderRadius: 4,
          overflow: "hidden",
          marginBottom: "0.5rem",
        }}
      >
        {channels.map((ch) => (
          <div
            key={ch.label}
            style={{
              width: `${ch.pct}%`,
              background: ch.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "width 0.6s ease",
            }}
          >
            <span
              style={{
                fontSize: ch.pct >= 15 ? "0.6875rem" : "0.5rem",
                fontWeight: 600,
                color: "white",
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
              }}
            >
              {ch.pct}%
            </span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {channels.map((ch) => (
          <div
            key={ch.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: ch.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "var(--color-warm-600)",
              }}
            >
              {ch.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
