"use client";

import {
  BarChart, Bar, XAxis,
  Cell, LabelList, ResponsiveContainer,
} from "recharts";

const ORANGE = "#f77635";

const data = [
  { year: "FY23", revenue: 7.4, gp: 1.7, forecast: false },
  { year: "FY24", revenue: 11.6, gp: 2.4, forecast: false },
  { year: "FY25", revenue: 18.3, gp: 3.7, forecast: false },
  { year: "FY26F", revenue: 44.9, gp: 9.0, forecast: true },
  { year: "FY27F", revenue: 51.8, gp: 10.4, forecast: true },
];

/* eslint-disable @typescript-eslint/no-explicit-any */
function RevLabel(props: any) {
  const { x, y, width, value } = props;
  if (!value) return null;
  return <text x={x+width/2} y={y-5} fill="rgba(255,255,255,0.85)" fontSize={8} fontWeight={600} fontFamily="var(--font-serif)" textAnchor="middle">${value}M</text>;
}
function GpLabel(props: any) {
  const { x, y, width, value } = props;
  if (!value) return null;
  return <text x={x+width/2} y={y-5} fill="rgba(255,255,255,0.55)" fontSize={7} fontWeight={600} fontFamily="var(--font-serif)" textAnchor="middle">${value}M</text>;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const legend = [
  { label: "Revenue (Actual)", color: "rgba(255,255,255,0.3)" },
  { label: "Revenue (Forecast)", color: ORANGE },
  { label: "GP (Actual)", color: "rgba(255,255,255,0.15)" },
  { label: "GP (Forecast)", color: "rgba(247,118,53,0.4)" },
];

export default function RevenueGPChartDark() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 0 }} barCategoryGap="12%" barGap={1}>
            <XAxis dataKey="year" tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 10, fontWeight: 500 }} axisLine={false} tickLine={false} />
            <Bar dataKey="revenue" radius={[3, 3, 0, 0]}>
              {data.map((e) => <Cell key={e.year} fill={e.forecast ? ORANGE : "rgba(255,255,255,0.3)"} />)}
              <LabelList dataKey="revenue" position="top" content={<RevLabel />} />
            </Bar>
            <Bar dataKey="gp" radius={[3, 3, 0, 0]}>
              {data.map((e) => <Cell key={e.year} fill={e.forecast ? "rgba(247,118,53,0.4)" : "rgba(255,255,255,0.15)"} />)}
              <LabelList dataKey="gp" position="top" content={<GpLabel />} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "0.5rem", marginTop: "0.25rem", flexShrink: 0 }}>
        {legend.map((it) => (
          <div key={it.label} style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <div style={{ width: 8, height: 8, borderRadius: 1, background: it.color }} />
            <span style={{ fontSize: "7px", fontWeight: 600, color: "rgba(255,255,255,0.45)" }}>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
