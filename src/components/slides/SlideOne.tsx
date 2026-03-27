"use client";

import Slide from "@/components/deck/Slide";
import AnimateIn from "@/components/deck/AnimateIn";
import SectionLabel from "@/components/deck/SectionLabel";
import ChannelMixBar from "@/components/slides/ChannelMixBar";

const highlights = [
  {
    number: "01",
    text: "Consolidation opportunity: positioned to capture share from informal operators who lack cold-chain infrastructure, sourcing scale, and logistics reach.",
  },
  {
    number: "02",
    text: "Operational moat through end-to-end control, from import sourcing and processing through to last-mile delivery, creating high barriers to replication.",
  },
  {
    number: "03",
    text: "Capital-constrained, not demand-constrained: growth is limited by working capital, not market access. Investment directly accelerates revenue.",
  },
  {
    number: "04",
    text: "Multi-layered diversification across products (beef, pork, poultry, seafood), client segments, and distribution channels reduces volatility and concentration risk.",
  },
];

export default function SlideOne() {
  return (
    <Slide
      className="slide-light"
      style={{
        background: "var(--color-surface-cream)",
        color: "var(--color-slate)",
      }}
    >
      {/* Two-column top section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2.5rem",
          marginBottom: "0.625rem",
        }}
      >
        {/* Left column: Market Context */}
        <AnimateIn delay={0.1}>
          <div>
            <SectionLabel>Market Context</SectionLabel>
            <p
              style={{
                fontSize: "0.8125rem",
                lineHeight: 1.65,
                color: "var(--color-warm-700)",
                margin: 0,
                marginBottom: "0.75rem",
                textAlign: "justify",
              }}
            >
              The Philippines meat market is valued at{" "}
              <strong>US$10.5B (2023)</strong>, projected to reach{" "}
              <strong>US$12B by 2028</strong> at a{" "}
              <strong>2.7% CAGR</strong>. The market is highly fragmented, with
              most volume flowing through wet markets and small-scale
              distributors without scale in sourcing, logistics, or cold-chain.
            </p>
            <p
              style={{
                fontSize: "0.8125rem",
                lineHeight: 1.65,
                color: "var(--color-warm-700)",
                margin: 0,
                marginBottom: "0.75rem",
                textAlign: "justify",
              }}
            >
              Growing urbanization, rising incomes, and the shift toward modern
              trade create a consolidation opportunity for scaled,
              cold-chain-enabled platforms.
            </p>

            {/* Tailwind stats as cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "0.5rem",
              }}
            >
              {[
                { value: "5.7%", label: "GDP Growth" },
                { value: "+20%", label: "Meat Imports YoY" },
                { value: "10-15%", label: "Cold-Chain Growth/Yr" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "white",
                    borderRadius: 6,
                    padding: "0.5rem 0.5rem",
                    textAlign: "center",
                    borderLeft: "3px solid var(--color-orange)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--color-orange)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.5625rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--color-warm-500)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Right column: Company Overview + Channel Mix */}
        <AnimateIn delay={0.2}>
          <div>
            <SectionLabel>Company Overview</SectionLabel>
            <p
              style={{
                fontSize: "0.8125rem",
                lineHeight: 1.65,
                color: "var(--color-warm-700)",
                margin: 0,
                marginBottom: "0.75rem",
                textAlign: "justify",
              }}
            >
              A vertically integrated food importer, processor, and distributor
              with 11+ years of operating history. The company serves hotels,
              restaurants, supermarkets, and institutional buyers through a
              B2B-dominant model. Revenue grew 56% to &#8369;648M in 2024 and
              surpassed &#8369;1B in 2025, confirming strong scale-up momentum.
            </p>

            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-slate-light)",
                marginBottom: "0.375rem",
              }}
            >
              Revenue by Channel
            </p>
            <ChannelMixBar />

            {/* Client Diversification */}
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-slate-light)",
                marginTop: "0.625rem",
                marginBottom: "0.375rem",
              }}
            >
              Client Diversification
            </p>
            <div
              style={{
                display: "flex",
                height: 28,
                borderRadius: 4,
                overflow: "hidden",
                marginBottom: "0.375rem",
              }}
            >
              {[
                { label: "Top 3", pct: 30, color: "var(--color-slate)" },
                { label: "Next 17", pct: 33, color: "var(--color-orange)" },
                { label: "Remaining", pct: 37, color: "var(--color-warm-400)" },
              ].map((seg) => (
                <div
                  key={seg.label}
                  style={{
                    width: `${seg.pct}%`,
                    background: seg.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.5625rem",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    {seg.pct}%
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { label: "Top 3 Clients", color: "var(--color-slate)" },
                { label: "Next 17", color: "var(--color-orange)" },
                { label: "Remaining", color: "var(--color-warm-400)" },
              ].map((leg) => (
                <div
                  key={leg.label}
                  style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 2,
                      background: leg.color,
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
                    {leg.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Bottom section: Highlights left + At A Glance right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2.5rem",
          flex: 1,
        }}
      >
        {/* Left: Investment Highlights stacked */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <AnimateIn delay={0.3}>
            <SectionLabel>Investment Highlights</SectionLabel>
          </AnimateIn>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
            {highlights.map((item, i) => (
              <AnimateIn key={item.number} delay={0.35 + i * 0.06}>
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    paddingTop: "0.375rem",
                    paddingBottom: "0.375rem",
                    borderBottom:
                      i < highlights.length - 1
                        ? "1px solid var(--color-warm-200)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "var(--color-orange)",
                      flexShrink: 0,
                      width: "1.5rem",
                    }}
                  >
                    {item.number}
                  </span>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      lineHeight: 1.5,
                      color: "var(--color-warm-700)",
                      margin: 0,
                      textAlign: "justify",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Right: At A Glance */}
        <AnimateIn delay={0.4} style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <SectionLabel>At A Glance</SectionLabel>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "1fr 1fr 1fr",
                  gap: "0.5rem",
                  marginTop: "0.25rem",
                  flex: 1,
                }}
              >
                {[
                  { label: "Operating History", value: "11+ Years", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Leadership", value: "5 Co-Founders", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
                  { label: "Headquarters", value: "Philippines", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
                  { label: "Core Channels", value: "B2B / Retail / B2C", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                  { label: "Products", value: "Meat, Poultry, Seafood", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
                  { label: "Addressable Market", value: "US$10.5B", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    style={{
                      background: "white",
                      borderRadius: 6,
                      padding: "0.5rem 0.625rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-orange)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <path d={fact.icon} />
                    </svg>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "var(--color-slate)",
                          lineHeight: 1.1,
                        }}
                      >
                        {fact.value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.5625rem",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--color-warm-500)",
                          marginTop: "0.1875rem",
                        }}
                      >
                        {fact.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </Slide>
  );
}
