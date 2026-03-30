"use client";

import Slide from "@/components/deck/Slide";
import AnimateIn from "@/components/deck/AnimateIn";
import SectionLabel from "@/components/deck/SectionLabel";
import RevenueGPChart from "@/components/slides/RevenueGPChart";

const highlights = [
  {
    number: "01",
    text: "Consolidation opportunity \u2014 positioned to capture share from informal operators lacking cold-chain infrastructure and logistics reach.",
  },
  {
    number: "02",
    text: "Operational moat through end-to-end control, from import sourcing and processing through to last-mile delivery.",
  },
  {
    number: "03",
    text: "Capital-constrained, not demand-constrained: investment directly accelerates revenue growth.",
  },
  {
    number: "04",
    text: "Multi-layered diversification across products (beef, pork, poultry, seafood), client segments, and distribution channels reduces volatility and concentration risk.",
  },
];

const glanceFacts = [
  { label: "Operating History", value: "11+ Years", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Leadership", value: "5 Co-Founders", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Headquarters", value: "Philippines", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Core Channels", value: "B2B / Retail / B2C", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { label: "Products", value: "Meat, Poultry, Seafood", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { label: "Addressable Market", value: "US$10.5B", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const growthLevers = [
  { title: "Deepen Key Accounts", desc: "Upselling & bundled solutions", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
  { title: "Expand Client Base", desc: "Hotels, restaurants, institutions", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { title: "Scale Operations", desc: "Larger facility & workflows", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "Launch Branded Products", desc: "Private-label, higher margins", icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" },
  { title: "Expand Infrastructure", desc: "New cold-chain hubs", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
];

function SlateSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "0.8125rem",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase" as const,
        color: "var(--color-slate)",
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </div>
  );
}

export default function SlideCore() {
  return (
    <Slide
      className="slide-light"
      style={{
        background: "var(--color-surface-cream)",
        color: "var(--color-slate)",
      }}
    >
      {/* Top: Market Context (left) + Company Snapshot (right) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginBottom: "0.5rem",
        }}
      >
        <AnimateIn delay={0.1}>
          <SectionLabel>Market Context</SectionLabel>
          <p
            style={{
              fontSize: "0.6875rem",
              lineHeight: 1.6,
              color: "var(--color-warm-700)",
              margin: 0,
              marginBottom: "0.5rem",
              textAlign: "justify",
            }}
          >
            The Philippines meat market is valued at{" "}
            <strong>US$10.5B (2023)</strong>, projected to reach{" "}
            <strong>US$12B by 2028</strong> at a <strong>2.7% CAGR</strong>.
            Highly fragmented, with most volume flowing through wet markets
            and small-scale distributors. Urbanization and rising incomes
            create a consolidation opportunity for cold-chain-enabled platforms.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "0.375rem",
            }}
          >
            {[
              { value: "5.7%", label: "GDP Growth", accent: "var(--color-orange)" },
              { value: "+20%", label: "Meat Imports YoY", accent: "var(--color-slate)" },
              { value: "10-15%", label: "Cold-Chain Growth/Yr", accent: "var(--color-orange)" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "white",
                  borderRadius: 5,
                  padding: "0.375rem",
                  textAlign: "center",
                  borderLeft: `3px solid ${stat.accent}`,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: stat.accent,
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
                    marginTop: "0.125rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <SectionLabel>Company Snapshot</SectionLabel>
          <p
            style={{
              fontSize: "0.6875rem",
              lineHeight: 1.6,
              color: "var(--color-warm-700)",
              margin: 0,
              marginBottom: "0.375rem",
              textAlign: "justify",
            }}
          >
            The Target is a vertically integrated food importer, processor,
            and distributor with <strong>11+ years</strong> of operating
            history in the Philippines. Serves hotels, restaurants,
            supermarkets, and institutional buyers across multiple protein
            categories through a B2B-dominant model.
          </p>
          <p
            style={{
              fontSize: "0.6875rem",
              lineHeight: 1.6,
              color: "var(--color-warm-700)",
              margin: 0,
              textAlign: "justify",
            }}
          >
            Revenue surpassed <strong>&#8369;1B in 2025</strong>, confirming
            strong scale-up momentum. The shareholders are exploring a
            strategic investment to accelerate the next phase of growth.
          </p>
        </AnimateIn>
      </div>

      {/* At A Glance */}
      <AnimateIn delay={0.3}>
        <SlateSectionLabel>At A Glance</SlateSectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "0.375rem",
            marginBottom: "0.5rem",
          }}
        >
          {glanceFacts.map((fact, i) => (
            <div
              key={fact.label}
              style={{
                background: "var(--color-slate)",
                borderRadius: 5,
                padding: "0.375rem 0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={i % 2 === 0 ? "var(--color-orange)" : "rgba(255,255,255,0.7)"}
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
                    fontSize: "0.75rem",
                    color: "white",
                    lineHeight: 1.1,
                  }}
                >
                  {fact.value}
                </div>
                <div
                  style={{
                    fontSize: "0.4375rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    marginTop: "0.0625rem",
                  }}
                >
                  {fact.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Revenue & GP Chart (left) + Investment Highlights (right) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "start",
          marginBottom: "0.5rem",
        }}
      >
        <AnimateIn delay={0.4}>
          <SectionLabel>Revenue &amp; Gross Profit (US$M)</SectionLabel>
          <div
            style={{
              background: "white",
              borderRadius: 6,
              border: "1px solid var(--color-warm-200)",
              padding: "0.375rem",
              height: "195px",
            }}
          >
            <RevenueGPChart />
          </div>
        </AnimateIn>

        <div>
          <AnimateIn delay={0.45}>
            <SectionLabel>Investment Highlights</SectionLabel>
          </AnimateIn>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {highlights.map((item, i) => (
              <AnimateIn key={item.number} delay={0.5 + i * 0.08}>
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
      </div>

      {/* Growth Levers \u2014 timeline with icons */}
      <AnimateIn delay={0.7}>
        <SectionLabel>Growth Levers</SectionLabel>
        <div style={{ position: "relative", marginBottom: "0.5rem" }}>
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "10%",
              right: "10%",
              height: "2px",
              background: "rgba(43, 59, 70, 0.5)",
              zIndex: 0,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 1,
            }}
          >
            {growthLevers.map((lever, i) => {
              const isOrange = i % 2 === 0 || i === growthLevers.length - 1;
              const bg = isOrange ? "var(--color-orange)" : "var(--color-slate)";
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.375rem",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={lever.icon} />
                    </svg>
                  </div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.5625rem",
                      color: "var(--color-slate)",
                      textAlign: "center",
                      lineHeight: 1.2,
                      marginBottom: "0.125rem",
                    }}
                  >
                    {lever.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.5rem",
                      color: "var(--color-warm-500)",
                      textAlign: "center",
                      lineHeight: 1.3,
                    }}
                  >
                    {lever.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimateIn>

      {/* Transaction Overview */}
      <AnimateIn delay={0.8}>
        <SectionLabel>Transaction Overview</SectionLabel>
        <p
          style={{
            fontSize: "0.6875rem",
            lineHeight: 1.6,
            color: "var(--color-warm-700)",
            margin: 0,
            textAlign: "justify",
          }}
        >
          The shareholders are exploring a{" "}
          <strong style={{ color: "var(--color-slate)" }}>
            [strategic investment]
          </strong>{" "}
          to accelerate the company&#8217;s next phase of growth, with a
          clear path to &#8369;2.5B+ in revenue and expanding EBITDA margins.
          Proceeds will be deployed toward working capital, infrastructure,
          and scaling the distribution network. Details and projections
          available upon execution of NDA.
        </p>
      </AnimateIn>
    </Slide>
  );
}
