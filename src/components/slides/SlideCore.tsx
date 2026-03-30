"use client";

import Slide from "@/components/deck/Slide";
import AnimateIn from "@/components/deck/AnimateIn";
import SectionLabel from "@/components/deck/SectionLabel";

const highlights = [
  {
    number: "01",
    text: "Consolidation opportunity in a highly fragmented market \u2014 positioned to capture share from informal operators who lack cold-chain infrastructure, sourcing scale, and logistics reach.",
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

const financials = [
  { metric: "Net Sales", y2024: "647,702", y2025: "1,022,843", y2026: "2,512,495", y2027: "2,899,155", bold: true, italic: false },
  { metric: "Cost of Goods Sold", y2024: "513,680", y2025: "815,433", y2026: "2,010,147", y2027: "2,319,498", bold: false, italic: false },
  { metric: "Gross Profit", y2024: "134,022", y2025: "207,410", y2026: "502,348", y2027: "579,656", bold: true, italic: false },
  { metric: "Gross Margin %", y2024: "20.7%", y2025: "20.3%", y2026: "20.0%", y2027: "20.0%", bold: false, italic: true },
  { metric: "Operating Expenses", y2024: "92,236", y2025: "145,884", y2026: "326,499", y2027: "360,010", bold: false, italic: false },
  { metric: "EBITDA", y2024: "41,786", y2025: "61,526", y2026: "175,849", y2027: "219,646", bold: true, italic: false },
  { metric: "EBITDA %", y2024: "6.5%", y2025: "6.0%", y2026: "7.0%", y2027: "7.6%", bold: false, italic: true },
];

const years = [
  { label: "2024A", key: "y2024" },
  { label: "2025A", key: "y2025" },
  { label: "2026F", key: "y2026" },
  { label: "2027F", key: "y2027" },
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
          marginBottom: "1rem",
        }}
      >
        {/* Left column */}
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

        {/* Right column */}
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
              textAlign: "justify",
            }}
          >
            Revenue has grown at a strong trajectory, surpassing{" "}
            <strong>&#8369;1B in 2025</strong>, confirming scale-up momentum.
            The shareholders are exploring a strategic investment to
            accelerate the next phase of growth.
          </p>
        </AnimateIn>
      </div>

      {/* Financial Summary Table */}
      <AnimateIn delay={0.3}>
        <SectionLabel>Financial Summary</SectionLabel>
        <div
          style={{
            borderRadius: 8,
            overflow: "hidden",
            border: "1px solid var(--color-warm-200)",
            background: "white",
            marginBottom: "1rem",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.6875rem",
            }}
          >
            <thead>
              <tr style={{ background: "var(--color-warm-50)" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.5rem 0.75rem",
                    fontWeight: 600,
                    fontSize: "0.625rem",
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
                      padding: "0.5rem 0.75rem",
                      fontWeight: 600,
                      fontSize: "0.625rem",
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
                      padding: "0.375rem 0.75rem",
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
                        padding: "0.375rem 0.75rem",
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
                      {(row as Record<string, string>)[yr.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateIn>

      {/* Investment Highlights */}
      <AnimateIn delay={0.4}>
        <SectionLabel>Investment Highlights</SectionLabel>
      </AnimateIn>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
          flex: 1,
        }}
      >
        {highlights.map((item, i) => (
          <AnimateIn key={item.number} delay={0.45 + i * 0.08}>
            <div
              style={{
                display: "flex",
                gap: "0.625rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  fontSize: "0.8125rem",
                  color: "var(--color-orange)",
                  flexShrink: 0,
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
    </Slide>
  );
}
