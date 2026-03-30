"use client";

import Slide from "@/components/deck/Slide";
import AnimateIn from "@/components/deck/AnimateIn";
import SectionLabel from "@/components/deck/SectionLabel";
import RevenueChart from "@/components/slides/RevenueChart";

const highlights = [
  {
    number: "01",
    text: "Consolidation opportunity in a highly fragmented market — positioned to capture share from informal operators who lack cold-chain infrastructure, sourcing scale, and logistics reach.",
  },
  {
    number: "02",
    text: "Operational moat through end-to-end control, from import sourcing and processing through to last-mile delivery, creating high barriers to replication.",
  },
  {
    number: "03",
    text: "Capital-constrained, not demand-constrained: growth is limited by working capital, not market access. Investment directly accelerates revenue.",
  },
];

export default function SlideCore() {
  return (
    <Slide
      className="slide-light"
      style={{
        background: "var(--color-surface-cream)",
        color: "var(--color-slate)",
      }}
    >
      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          flex: 1,
        }}
      >
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Market Context */}
          <AnimateIn delay={0.1}>
            <SectionLabel>Market Context</SectionLabel>
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.7,
                color: "var(--color-warm-700)",
                margin: 0,
                marginBottom: "0.875rem",
                textAlign: "justify",
              }}
            >
              The Philippines meat market is valued at{" "}
              <strong>US$10.5B (2023)</strong>, projected to reach{" "}
              <strong>US$12B by 2028</strong> at a <strong>2.7% CAGR</strong>.
              The market is highly fragmented, with most volume flowing through
              wet markets and small-scale distributors. Growing urbanization
              and rising incomes create a consolidation opportunity for scaled,
              cold-chain-enabled platforms.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "0.5rem",
                marginBottom: "1.25rem",
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
                    padding: "0.5rem",
                    textAlign: "center",
                    borderLeft: "3px solid var(--color-orange)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: "var(--color-orange)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.5rem",
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
          </AnimateIn>

          {/* Investment Highlights */}
          <AnimateIn delay={0.3}>
            <SectionLabel>Investment Highlights</SectionLabel>
          </AnimateIn>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            {highlights.map((item, i) => (
              <AnimateIn key={item.number} delay={0.35 + i * 0.08}>
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
                      fontSize: "0.8125rem",
                      color: "var(--color-orange)",
                      flexShrink: 0,
                      width: "1.5rem",
                    }}
                  >
                    {item.number}
                  </span>
                  <p
                    style={{
                      fontSize: "0.6875rem",
                      lineHeight: 1.55,
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

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Company Snapshot */}
          <AnimateIn delay={0.2}>
            <SectionLabel>Company Snapshot</SectionLabel>
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.7,
                color: "var(--color-warm-700)",
                margin: 0,
                marginBottom: "0.875rem",
                textAlign: "justify",
              }}
            >
              The Target is a vertically integrated food importer, processor,
              and distributor with <strong>11+ years</strong> of operating
              history in the Philippines. The company serves hotels, restaurants,
              supermarkets, and institutional buyers across multiple protein
              categories through a B2B-dominant model.
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.7,
                color: "var(--color-warm-700)",
                margin: 0,
                marginBottom: "1.25rem",
                textAlign: "justify",
              }}
            >
              Revenue has grown at a strong trajectory, surpassing{" "}
              <strong>&#8369;1B in 2025</strong>, confirming scale-up momentum.
              The shareholders are exploring a strategic investment to
              accelerate the next phase of growth.
            </p>
          </AnimateIn>

          {/* Revenue Chart */}
          <AnimateIn delay={0.4}>
            <SectionLabel>Revenue Trajectory</SectionLabel>
            <div
              style={{
                background: "white",
                borderRadius: 8,
                border: "1px solid var(--color-warm-200)",
                padding: "0.75rem",
                flex: 1,
                minHeight: "200px",
              }}
            >
              <RevenueChart />
            </div>
          </AnimateIn>
        </div>
      </div>
    </Slide>
  );
}
