"use client";

import Slide from "@/components/deck/Slide";
import AnimateIn from "@/components/deck/AnimateIn";
import SectionLabel from "@/components/deck/SectionLabel";
import RevenueChart from "@/components/slides/RevenueChart";

const financials = [
  { metric: "Net Revenue", y2023: "414", y2024: "648", y2025: "1,023", bold: true, italic: false },
  { metric: "Gross Profit", y2023: "97", y2024: "134", y2025: "207", bold: false, italic: false },
  { metric: "Gross Margin", y2023: "23.4%", y2024: "20.7%", y2025: "20.3%", bold: false, italic: true },
  { metric: "EBITDA", y2023: "36", y2024: "42", y2025: "62", bold: true, italic: false },
  { metric: "EBITDA Margin", y2023: "8.8%", y2024: "6.5%", y2025: "6.0%", bold: false, italic: true },
];

const growthLevers = [
  {
    number: "01",
    title: "Deepen Key Accounts",
    desc: "Grow wallet share through upselling and bundled solutions",
  },
  {
    number: "02",
    title: "Expand Client Base",
    desc: "Acquire new hotel chains, restaurant groups, and institutions",
  },
  {
    number: "03",
    title: "Scale Operations",
    desc: "Larger processing facility and streamlined workflows",
  },
  {
    number: "04",
    title: "Launch Branded Products",
    desc: "Private-label meat products for higher-margin categories",
  },
  {
    number: "05",
    title: "Expand Infrastructure",
    desc: "New cold-chain hubs for broader regional coverage",
  },
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
      {/* Value Chain */}
      <AnimateIn delay={0.1}>
        <SectionLabel>Integrated Value Chain</SectionLabel>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "0.75rem",
          }}
        >
          {[
            { title: "Source", desc: "Import + local", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Intake", desc: "QA + cold store", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
            { title: "Process", desc: "Portion + pack", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
            { title: "Deliver", desc: "3PL + own fleet", icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" },
            { title: "Sell", desc: "Multi-channel", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
          ].map((step, i, arr) => (
            <div
              key={step.title}
              style={{
                display: "flex",
                alignItems: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: i === 0 ? "var(--color-orange)" : "rgba(255,255,255,0.06)",
                    border: i === 0 ? "none" : "1.5px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.375rem",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={i === 0 ? "white" : "var(--color-orange)"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={step.icon} />
                  </svg>
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.9)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontSize: "0.6875rem",
                    color: "rgba(255,255,255,0.7)",
                    textAlign: "center",
                    lineHeight: 1.3,
                    marginTop: "0.125rem",
                  }}
                >
                  {step.desc}
                </div>
              </div>
              {i < arr.length - 1 && (
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 16 12"
                  fill="none"
                  style={{ flexShrink: 0, margin: "0 -2px", marginBottom: "1.75rem" }}
                >
                  <path
                    d="M1 6h12M10 2l4 4-4 4"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Growth Levers */}
      <AnimateIn delay={0.2}>
        <SectionLabel>Growth Levers</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0.625rem",
            marginBottom: "0.75rem",
          }}
        >
          {growthLevers.map((lever) => (
            <div
              key={lever.number}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 6,
                padding: "0.625rem 0.75rem",
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "var(--color-orange)",
                  position: "absolute",
                  top: "0.375rem",
                  right: "0.625rem",
                  lineHeight: 1,
                }}
              >
                {lever.number}
              </span>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: "0.25rem",
                }}
              >
                {lever.title}
              </div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {lever.desc}
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Financial Summary: Table + Chart */}
      <AnimateIn delay={0.35}>
        <SectionLabel>Financial Summary</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginBottom: "0.75rem",
          }}
        >
          {/* Table */}
          <div
            style={{
              borderRadius: 6,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.75rem",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.5rem 0.625rem",
                      fontWeight: 600,
                      fontSize: "0.6875rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.7)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    &#8369; Millions
                  </th>
                  {["2023", "2024", "2025"].map((yr) => (
                    <th
                      key={yr}
                      style={{
                        textAlign: "right",
                        padding: "0.5rem 0.625rem",
                        fontWeight: 600,
                        fontSize: "0.6875rem",
                        letterSpacing: "0.06em",
                        color:
                          yr === "2025"
                            ? "var(--color-orange)"
                            : "rgba(255,255,255,0.7)",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {yr}
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
                        ? "rgba(247,118,53,0.08)"
                        : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.375rem 0.625rem",
                        fontWeight: row.bold ? 600 : 400,
                        fontStyle: row.italic ? "italic" : "normal",
                        color: row.bold
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.7)",
                      }}
                    >
                      {row.metric}
                    </td>
                    {[row.y2023, row.y2024, row.y2025].map((val, j) => (
                      <td
                        key={j}
                        style={{
                          textAlign: "right",
                          padding: "0.375rem 0.625rem",
                          fontFamily: "var(--font-serif)",
                          fontWeight: row.bold ? 600 : 400,
                          fontStyle: row.italic ? "italic" : "normal",
                          color:
                            j === 2
                              ? "var(--color-orange)"
                              : row.bold
                                ? "rgba(255,255,255,0.9)"
                                : "rgba(255,255,255,0.7)",
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Revenue chart */}
          <div
            style={{
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "0.625rem 0.75rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "0.375rem",
              }}
            >
              Revenue Trajectory (&#8369;M)
            </div>
            <div style={{ flex: 1 }}>
              <RevenueChart />
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* Transaction Overview */}
      <AnimateIn delay={0.5}>
        <SectionLabel>Transaction Overview</SectionLabel>
        <div
          style={{
            paddingLeft: "0",
            paddingTop: "0.375rem",
            paddingBottom: "0.375rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.78)",
              margin: 0,
              textAlign: "justify",
            }}
          >
            The shareholders are exploring a{" "}
            <strong style={{ color: "rgba(255,255,255,0.95)" }}>
              [strategic investment]
            </strong>{" "}
            to accelerate the company&rsquo;s next phase of growth, with a
            clear path to &#8369;2.5B+ in revenue and expanding EBITDA margins.
            Proceeds will be deployed toward working capital, infrastructure,
            and scaling the distribution network. Details and projections
            available upon execution of NDA.
          </p>
        </div>
      </AnimateIn>
    </Slide>
  );
}
