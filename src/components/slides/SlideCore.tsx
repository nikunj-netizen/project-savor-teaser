"use client";

import Slide from "@/components/deck/Slide";
import AnimateIn from "@/components/deck/AnimateIn";
import SectionLabel from "@/components/deck/SectionLabel";
import RevenueGPChart from "@/components/slides/RevenueGPChart";

const highlights = [
  { number: "01", text: "Consolidation opportunity: positioned to capture share from informal operators lacking cold-chain infrastructure and logistics reach." },
  { number: "02", text: "Operational moat through end-to-end control, from import sourcing and processing through to last-mile delivery." },
  { number: "03", text: "Capital-constrained, not demand-constrained: investment directly accelerates revenue growth." },
  { number: "04", text: "Multi-layered diversification across products (beef, pork, poultry, seafood), client segments, and distribution channels reduces volatility and concentration risk." },
  { number: "05", text: "Clear, repeatable growth playbook across five levers: deepening key accounts, expanding client base, scaling operations, launching branded products, and building cold-chain infrastructure." },
];

const glanceFacts = [
  { label: "Operating History", value: "11+ Years", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Leadership", value: "5 Co-Founders", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Headquarters", value: "Philippines", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Products", value: "Meat, Poultry, Seafood", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { label: "Addressable Market", value: "US$10.5B", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const channels = [
  { label: "B2B Wholesale", pct: 90, color: "var(--color-slate)" },
  { label: "B2C / Partnerships", pct: 6, color: "var(--color-orange)" },
  { label: "Supermarket Butchery", pct: 4, color: "var(--color-warm-400)" },
];

const clientSegs = [
  { label: "Top 3 Clients", pct: 30, color: "var(--color-slate)" },
  { label: "Next 17", pct: 33, color: "var(--color-orange)" },
  { label: "Remaining", pct: 37, color: "var(--color-warm-400)" },
];

function StackedBar({ data }: { data: { label: string; pct: number; color: string }[] }) {
  return (
    <div>
      <div style={{ display: "flex", height: 23, borderRadius: 4, overflow: "hidden", marginBottom: "0.34rem" }}>
        {data.map((seg) => (<div key={seg.label} style={{ width: `${seg.pct}%`, background: seg.color, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontSize: seg.pct >= 15 ? "0.54rem" : "0.4375rem", fontWeight: 600, color: "white" }}>{seg.pct}%</span></div>))}
      </div>
      <div style={{ display: "flex", gap: "0.73rem", flexWrap: "wrap" }}>
        {data.map((seg) => (<div key={seg.label} style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><div style={{ width: 9, height: 9, borderRadius: 2, background: seg.color, flexShrink: 0 }} /><span style={{ fontSize: "0.67rem", fontWeight: 500, color: "var(--color-warm-700)" }}>{seg.label}</span></div>))}
      </div>
    </div>
  );
}

export default function SlideCore() {
  return (
    <Slide className="slide-light" style={{ background: "var(--color-surface-cream)", color: "var(--color-slate)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "0.4625rem" }}>
        <AnimateIn delay={0.1}>
          <SectionLabel>Market Context</SectionLabel>
          <p style={{ fontSize: "0.67rem", lineHeight: 1.585, color: "var(--color-warm-700)", margin: 0, marginBottom: "0.4625rem", textAlign: "justify" }}>
            The Philippines meat market is valued at{" "}<strong>US$10.5B (2023)</strong>, projected to reach{" "}<strong>US$12B by 2028</strong> at a <strong>2.7% CAGR</strong>. Highly fragmented, with most volume flowing through wet markets and small-scale distributors. Urbanization and rising incomes create a consolidation opportunity for cold-chain-enabled platforms.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.35rem" }}>
            {[{ value: "5.7%", label: "GDP Growth", accent: "var(--color-orange)" }, { value: "+20%", label: "Meat Imports YoY", accent: "var(--color-slate)" }, { value: "10-15%", label: "Cold-Chain Growth/Yr", accent: "var(--color-orange)" }].map((stat) => (
              <div key={stat.label} style={{ background: "white", borderRadius: 5, padding: "0.35rem", textAlign: "center", borderLeft: `3px solid ${stat.accent}` }}>
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "0.86rem", color: stat.accent, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: "0.49rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-warm-500)", marginTop: "0.125rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <SectionLabel>Company Snapshot</SectionLabel>
          <p style={{ fontSize: "0.67rem", lineHeight: 1.585, color: "var(--color-warm-700)", margin: 0, textAlign: "justify" }}>
            A vertically integrated food distribution platform with <strong>11+ years</strong> of operating history across the Philippines. The company controls the full value chain from import sourcing and cold-chain processing through to last-mile delivery, serving <strong>100+ B2B clients</strong> including hotels, restaurant chains, and institutional buyers. Revenue has grown <strong>7x over three years</strong> to surpass <strong>US$18M in 2025</strong>, driven by a repeatable, capital-efficient model.
          </p>
        </AnimateIn>
      </div>
      <AnimateIn delay={0.3}>
        <SectionLabel color="var(--color-slate)">At A Glance</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.35rem", marginBottom: "0.4625rem" }}>
          {glanceFacts.map((fact, i) => (
            <div key={fact.label} style={{ background: "var(--color-slate)", borderRadius: 5, padding: "0.35rem 0.47rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={i % 2 === 0 ? "var(--color-orange)" : "rgba(255,255,255,0.7)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d={fact.icon} /></svg>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "0.74rem", color: "white", lineHeight: 1.1 }}>{fact.value}</div>
                <div style={{ fontSize: "0.42rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginTop: "0.0625rem" }}>{fact.label}</div>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start", marginBottom: "0.4625rem" }}>
        <AnimateIn delay={0.4}>
          <SectionLabel>Revenue &amp; Gross Profit (US$M)</SectionLabel>
          <div style={{ borderRadius: 6, padding: "0.35rem", height: "237px" }}><RevenueGPChart /></div>
        </AnimateIn>
        <div>
          <AnimateIn delay={0.45}><SectionLabel>Investment Highlights</SectionLabel></AnimateIn>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {highlights.map((item, i) => (
              <AnimateIn key={item.number} delay={0.5 + i * 0.06}>
                <div style={{ display: "flex", gap: "0.72rem", paddingTop: "0.29rem", paddingBottom: "0.29rem", borderBottom: i < highlights.length - 1 ? "1px solid var(--color-warm-200)" : "none" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "0.79rem", color: "var(--color-orange)", flexShrink: 0, width: "1.46rem" }}>{item.number}</span>
                  <p style={{ fontSize: "0.67rem", lineHeight: 1.485, color: "var(--color-warm-700)", margin: 0, textAlign: "justify" }}>{item.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start", marginBottom: "0.4625rem" }}>
        <AnimateIn delay={0.7}><SectionLabel>Revenue by Channel</SectionLabel><StackedBar data={channels} /></AnimateIn>
        <AnimateIn delay={0.75}><SectionLabel>Client Diversification</SectionLabel><StackedBar data={clientSegs} /></AnimateIn>
      </div>
      <AnimateIn delay={0.8}>
        <SectionLabel>Transaction Overview</SectionLabel>
        <p style={{ fontSize: "0.67rem", lineHeight: 1.57, color: "var(--color-warm-700)", margin: 0, textAlign: "justify" }}>
          The shareholders are exploring a{" "}<strong style={{ color: "var(--color-slate)" }}>[strategic investment]</strong>{" "}to accelerate the company&#8217;s next phase of growth, with a clear path to US$45M+ in revenue and expanding EBITDA margins. Proceeds will be deployed toward working capital, infrastructure, and scaling the distribution network. Details and projections available upon execution of NDA.
        </p>
      </AnimateIn>
    </Slide>
  );
}
