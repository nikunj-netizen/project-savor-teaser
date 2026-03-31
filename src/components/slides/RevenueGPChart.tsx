"use client";

import {
  BarChart, Bar, XAxis,
  Cell, LabelList, ResponsiveContainer,
} from "recharts";

const SLATE = "#2b3b46";
const ORANGE = "#f77635";
const GP_SLATE = "#8a9dad";
const GP_ORANGE = "#f7a882";

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
  return <text x={x+width/2} y={y-5} fill={SLATE} fontSize={8} fontWeight={600} fontFamily="var(--font-serif)" textAnchor="middle">${value}M</text>;
}
function GpLabel(props: any) {
  const { x, y, width, value } = props;
  if (!value) return null;
  return <text x={x+width/2} y={y-5} fill="#6b6b6b" fontSize={7} fontWeight={600} fontFamily="var(--font-serif)" textAnchor="middle">${value}M</text>;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const legend = [
  { label: "Revenue (Actual)", color: SLATE },
  { label: "Revenue (Forecast)", color: ORANGE },
  { label: "GP (Actual)", color: GP_SLATE },
  { label: "GP (Forecast)", color: GP_ORANGE },
];

export default function RevenueGPChart() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 0 }} barCategoryGap="12%" barGap={1}>
            <XAxis dataKey="year" tick={{ fill: SLATE, fontSize: 10, fontWeight: 500 }} axisLine={false} tickLine={false} />
            <Bar dataKey="revenue" radius={[3, 3, 0, 0]}>
              {data.map((e) => <Cell key={e.year} fill={e.forecast ? ORANGE : SLATE} />)}
              <LabelList dataKey="revenue" position="top" content={<RevLabel />} />
            </Bar>
            <Bar dataKey="gp" radius={[3, 3, 0, 0]}>
              {data.map((e) => <Cell key={e.year} fill={e.forecast ? GP_ORANGE : GP_SLATE} />)}
              <LabelList dataKey="gp" position="top" content={<GpLabel />} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "0.5rem", marginTop: "0.25rem", flexShrink: 0 }}>
        {legend.map((it) => (
          <div key={it.label} style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <div style={{ width: 8, height: 8, borderRadius: 1, background: it.color }} />
            <span style={{ fontSize: "7px", fontWeight: 600, color: "#8a8a8a" }}>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
