"use client";

import Slide from "@/components/deck/Slide";
import AnimateIn from "@/components/deck/AnimateIn";
import SectionLabel from "@/components/deck/SectionLabel";
import CountUpMetric from "@/components/deck/CountUpMetric";
import RevenueChart from "@/components/slides/RevenueChart";

interface FinancialRow {
  metric: string;
  y2024: string;
  y2025: string;
  y2026: string;
  y2027: string;
  y2028: string;
  y2029: string;
  bold: boolean;
  italic: boolean;
}

const financials: FinancialRow[] = [
  { metric: "Net Sales", y2024: "648", y2025: "1,023", y2026: "2,512", y2027: "2,899", y2028: "3,267", y2029: "3,595", bold: true, italic: false },
  { metric: "Gross Profit", y2024: "134", y2025: "207", y2026: "502", y2027: "580", y2028: "653", y2029: "719", bold: true, italic: false },
  { metric: "GP %", y2024: "20.7%", y2025: "20.3%", y2026: "20.0%", y2027: "20.0%", y2028: "20.0%", y2029: "20.0%", bold: false, italic: true },
  { metric: "EBITDA", y2024: "42", y2025: "62", y2026: "176", y2027: "220", y2028: "265", y2029: "308", bold: true, italic: false },
  { metric: "EBITDA %", y2024: "6.5%", y2025: "6.0%", y2026: "7.0%", y2027: "7.6%", y2028: "8.1%", y2029: "8.6%", bold: false, italic: true },
];

const years: { label: string; key: keyof FinancialRow }[] = [
  { label: "2024A", key: "y2024" },
  { label: "2025A", key: "y2025" },
  { label: "2026F", key: "y2026" },
  { label: "2027F", key: "y2027" },
  { label: "2028F", key: "y2028" },
  { label: "2029F", key: "y2029" },
];

export default function SlideTwo() {
  return (
    <Slide
      style={{
        background: "var(--color-black)",
        color: "white",
      }}
      background={
        <>
          <div className="glow-orange-tr" />
          <div className="glow-slate-center" />
        </>
      }
    >
      {/* Hero Stats */}
      <AnimateIn delay={0.1}>
        <SectionLabel>Why This Opportunity Stands Out</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "1.5rem",
            marginBottom: "0.75rem",
          }}
        >
          <CountUpMetric
            end={3.8}
            suffix=" MMT"
            decimals={1}
            label="Meat Consumed Annually"
            sublabel="Philippines nationwide"
            dark
            fontSize="clamp(1.5rem, 3vw, 2.5rem)"
            numberColor="var(--color-orange)"
          />
          <CountUpMetric
            end={90}
            suffix="%"
            label="Recurring B2B Revenue"
            sublabel="Repeat orders from key accounts"
            dark
            fontSize="clamp(1.5rem, 3vw, 2.5rem)"
            numberColor="white"
          />
          <CountUpMetric
            end={56}
            suffix="%"
            label="YoY Revenue Growth"
            sublabel="2024 vs 2023"
            dark
            fontSize="clamp(1.5rem, 3vw, 2.5rem)"
            numberColor="var(--color-orange)"
          />
          <CountUpMetric
            end={5}
            label="Co-Founders"
            sublabel="Including former Big Four experience"
            dark
            fontSize="clamp(1.5rem, 3vw, 2.5rem)"
            numberColor="white"
          />
        </div>
      </AnimateIn>

      {/* Revenue Chart + Client Diversification */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          marginBottom: "0.75rem",
        }}
      >
        {/* Revenue Trajectory Chart */}
        <AnimateIn delay={0.3}>
          <SectionLabel>Revenue Trajectory (&#8369;M)</SectionLabel>
          <div
            style={{
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "0.5rem 0.625rem",
              height: "160px",
            }}
          >
            <RevenueChart />
          </div>
        </AnimateIn>

        {/* Client Diversification + Margin Expansion */}
        <AnimateIn delay={0.4}>
          <SectionLabel>Client Diversification</SectionLabel>
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
              { label: "Top 3", pct: 30, color: "var(--color-slate-light)" },
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
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
            {[
              { label: "Top 3 Clients", color: "var(--color-slate-light)" },
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
                    fontSize: "0.625rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {leg.label}
                </span>
              </div>
            ))}
          </div>

          <SectionLabel>EBITDA Margin Expansion</SectionLabel>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "0.375rem",
              height: "70px",
            }}
          >
            {[
              { year: "2024A", pct: 6.5 },
              { year: "2025A", pct: 6.0 },
              { year: "2026F", pct: 7.0 },
              { year: "2027F", pct: 7.6 },
              { year: "2028F", pct: 8.1 },
              { year: "2029F", pct: 8.6 },
            ].map((item, i, arr) => {
              const maxPct = 10;
              const heightPct = (item.pct / maxPct) * 100;
              const isForcast = item.year.includes("F");
              return (
                <div
                  key={item.year}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.5625rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-serif)",
                      color: i === arr.length - 1 ? "var(--color-orange)" : "rgba(255,255,255,0.8)",
                      marginBottom: "0.125rem",
                    }}
                  >
                    {item.pct}%
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: `${heightPct}%`,
                      background: isForcast ? "var(--color-orange)" : "rgba(255,255,255,0.25)",
                      borderRadius: "3px 3px 0 0",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "0.4375rem",
                      color: "rgba(255,255,255,0.5)",
                      marginTop: "0.125rem",
                      fontWeight: 500,
                    }}
                  >
                    {item.year}
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateIn>
      </div>

      {/* Extended Financial Table */}
      <AnimateIn delay={0.5}>
        <SectionLabel>Financial Outlook</SectionLabel>
        <div
          style={{
            borderRadius: 6,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "0.75rem",
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
              <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "0.3125rem 0.625rem",
                    fontWeight: 600,
                    fontSize: "0.5625rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  &#8369; Millions
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
                        : "rgba(255,255,255,0.7)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
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
                        ? "1px solid rgba(255,255,255,0.05)"
                        : "none",
                    background: row.bold
                      ? "rgba(247,118,53,0.06)"
                      : "transparent",
                  }}
                >
                  <td
                    style={{
                      padding: "0.25rem 0.625rem",
                      fontWeight: row.bold ? 600 : 400,
                      fontStyle: row.italic ? "italic" : "normal",
                      color: row.bold
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,255,255,0.6)",
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
                            ? "rgba(255,255,255,0.9)"
                            : "rgba(255,255,255,0.6)",
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

      {/* Team + New Channels */}
      <AnimateIn delay={0.6}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          <div>
            <SectionLabel>Leadership</SectionLabel>
            <p
              style={{
                fontSize: "0.6875rem",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.75)",
                margin: 0,
              }}
            >
              Led by <strong style={{ color: "rgba(255,255,255,0.95)" }}>5 co-founders</strong> with
              11\u201313 years of experience each across food distribution, logistics, supply chain,
              and corporate finance (including former{" "}
              <strong style={{ color: "rgba(255,255,255,0.95)" }}>Big Four</strong> experience).
              Hands-on, function-led ownership ensures strong day-to-day execution.
            </p>
          </div>
          <div>
            <SectionLabel>New Channel Expansion</SectionLabel>
            <p
              style={{
                fontSize: "0.6875rem",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.75)",
                margin: 0,
              }}
            >
              Recently launched a <strong style={{ color: "rgba(255,255,255,0.95)" }}>supermarket partnership</strong> managing
              in-store meat counters, contributing{" "}
              <strong style={{ color: "var(--color-orange)" }}>5.1% of 2025 revenue</strong> within
              its first year \u2014 demonstrating the ability to create new revenue streams
              beyond core B2B distribution.
            </p>
          </div>
        </div>
      </AnimateIn>
    </Slide>
  );
}
