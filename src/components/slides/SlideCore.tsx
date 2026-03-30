"use client";

import Slide from "@/components/deck/Slide";
import AnimateIn from "@/components/deck/AnimateIn";
import SectionLabel from "@/components/deck/SectionLabel";

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

interface FinancialRow {
  metric: string;
  y2024: string;
  y2025: string;
  y2026: string;
  y2027: string;
  bold: boolean;
  italic: boolean;
}

const financials: FinancialRow[] = [
  { metric: "Net Sales", y2024: "647,702", y2025: "1,022,843", y2026: "2,512,495", y2027: "2,899,155", bold: true, italic: false },
  { metric: "Cost of Goods Sold", y2024: "513,680", y2025: "815,433", y2026: "2,010,147", y2027: "2,319,498", bold: false, italic: false },
  { metric: "Gross Profit", y2024: "134,022", y2025: "207,410", y2026: "502,348", y2027: "579,656", bold: true, italic: false },
  { metric: "Gross Margin %", y2024: "20.7%", y2025: "20.3%", y2026: "20.0%", y2027: "20.0%", bold: false, italic: true },
  { metric: "Operating Expenses", y2024: "92,236", y2025: "145,884", y2026: "326,499", y2027: "360,010", bold: false, italic: false },
  { metric: "EBITDA", y2024: "41,786", y2025: "61,526", y2026: "175,849", y2027: "219,646", bold: true, italic: false },
  { metric: "EBITDA %", y2024: "6.5%", y2025: "6.0%", y2026: "7.0%", y2027: "7.6%", bold: false, italic: true },
];

const years: { label: string; key: keyof FinancialRow }[] = [
  { label: "2024A", key: "y2024" },
  { label: "2025A", key: "y2025" },
  { label: "2026F", key: "y2026" },
  { label: "2027F", key: "y2027" },
];

const glanceFacts = [
  { label: "Operating History", value: "11+ Years", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Leadership", value: "5 Co-Founders", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Headquarters", value: "Philippines", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Core Channels", value: "B2B / Retail / B2C", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { label: "Products", value: "Meat, Poultry, Seafood", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { label: "Addressable Market", value: "US$10.5B", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
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
      {/* Two-column top section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginBottom: "0.5rem",
        }}
      >
        {/* Left: Market Context */}
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
              { value: "5.7%", label: "GDP Growth" },
              { value: "+20%", label: "Meat Imports YoY" },
              { value: "10-15%", label: "Cold-Chain Growth/Yr" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "white",
                  borderRadius: 5,
                  padding: "0.375rem",
                  textAlign: "center",
                  borderLeft: "3px solid var(--color-orange)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                    fontSize: "0.875rem",
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
                    marginTop: "0.125rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Right: Company Snapshot */}
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

      {/* Middle: Table left + Highlights right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "start",
          marginBottom: "0.5rem",
        }}
      >
        {/* Financial Summary Table */}
        <AnimateIn delay={0.3}>
          <SectionLabel>Financial Summary</SectionLabel>
          <div
            style={{
              borderRadius: 6,
              overflow: "hidden",
              border: "1px solid var(--color-warm-200)",
              background: "white",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.625rem",
              }}
            >
              <thead>
                <tr style={{ background: "var(--color-warm-50)" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.3125rem 0.625rem",
                      fontWeight: 600,
                      fontSize: "0.5625rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--color-warm-500)",
                      borderBottom: "1px solid var(--color-warm-200)",
                    }}
                  >
                    &#8369; Thousands
                  </th>
                  {years.map((yr) => (
                    <th
                      key={yr.label}
                      style={{
                        textAlign: "right",
                        padding: "0.3125rem 0.625rem",
                        fontWeight: 600,
                        fontSize: "0.5625rem",
                        letterSpacing: "0.06em",
                        color: yr.label.includes("F")
                          ? "var(--color-orange)"
                          : "var(--color-warm-500)",
                        borderBottom: "1px solid var(--color-warm-200)",
                      }}
                    >
                      {yr.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {financials.map((row, i) => (
                  <tr
                    key={row.metric}
                    style={{
                      borderBottom:
                        i < financials.length - 1
                          ? "1px solid var(--color-warm-100)"
                          : "none",
                      background: row.bold
                        ? "rgba(247,118,53,0.04)"
                        : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.25rem 0.625rem",
                        fontWeight: row.bold ? 600 : 400,
                        fontStyle: row.italic ? "italic" : "normal",
                        color: row.bold
                          ? "var(--color-slate)"
                          : "var(--color-warm-600)",
                      }}
                    >
                      {row.metric}
                    </td>
                    {years.map((yr) => (
                      <td
                        key={yr.key}
                        style={{
                          textAlign: "right",
                          padding: "0.25rem 0.625rem",
                          fontFamily: "var(--font-serif)",
                          fontWeight: row.bold ? 600 : 400,
                          fontStyle: row.italic ? "italic" : "normal",
                          color: yr.label.includes("F")
                            ? "var(--color-orange)"
                            : row.bold
                              ? "var(--color-slate)"
                              : "var(--color-warm-600)",
                        }}
                      >
                        {row[yr.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>

        {/* Investment Highlights */}
        <div>
          <AnimateIn delay={0.35}>
            <SectionLabel>Investment Highlights</SectionLabel>
          </AnimateIn>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {highlights.map((item, i) => (
              <AnimateIn key={item.number} delay={0.4 + i * 0.08}>
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

      {/* At A Glance — full width strip */}
      <AnimateIn delay={0.6}>
        <SectionLabel>At A Glance</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "0.375rem",
          }}
        >
          {glanceFacts.map((fact) => (
            <div
              key={fact.label}
              style={{
                background: "white",
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
                    fontSize: "0.75rem",
                    color: "var(--color-slate)",
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
                    color: "var(--color-warm-500)",
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
    </Slide>
  );
}
