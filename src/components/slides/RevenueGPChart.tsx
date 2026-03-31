"use client";

import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Cell, LabelList, ResponsiveContainer,
} from "recharts";

const TEAL = "#3d8b7a";
const SLATE = "#2b3b46";
const ORANGE = "#f77635";
const GP_SLATE = "#8a9dad";
const GP_ORANGE = "#f7a882";

const data = [
  { year: "FY23", revenue: 7.4, gp: 1.7, gm: 23.4, forecast: false },
  { year: "FY24", revenue: 11.6, gp: 2.4, gm: 20.7, forecast: false },
  { year: "FY25", revenue: 18.3, gp: 3.7, gm: 20.3, forecast: false },
  { year: "FY26F", revenue: 44.9, gp: 9.0, gm: 20.0, forecast: true },
  { year: "FY27F", revenue: 51.8, gp: 10.4, gm: 20.0, forecast: true },
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
function GmDotLabel(props: any) {
  const { x, y, value } = props;
  if (value === undefined || value === null) return null;
  return <text x={x} y={y + 16} fill={TEAL} fontSize={8} fontWeight={600} fontStyle="italic" textAnchor="middle">{value}%</text>;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const legend = [
  { label: "Revenue (Actual)", color: SLATE },
  { label: "Revenue (Forecast)", color: ORANGE },
  { label: "GP (Actual)", color: GP_SLATE },
  { label: "GP (Forecast)", color: GP_ORANGE },
  { label: "GM %", color: TEAL, line: true },
];

export default function RevenueGPChart() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem", marginBottom: "0.125rem", flexShrink: 0 }}>
        {legend.map((it) => (
          <div key={it.label} style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            {it.line ? (
              <svg width="12" height="8"><line x1="0" y1="4" x2="12" y2="4" stroke={it.color} strokeWidth="2" strokeOpacity="0.6" /></svg>
            ) : (
              <div style={{ width: 8, height: 8, borderRadius: 1, background: it.color }} />
            )}
            <span style={{ fontSize: "7px", fontWeight: 600, color: "#8a8a8a" }}>{it.label}</span>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: -5, bottom: 0 }} barCategoryGap="25%" barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ede8e2" vertical={false} />
            <XAxis dataKey="year" tick={{ fill: SLATE, fontSize: 10, fontWeight: 500 }} axisLine={{ stroke: "#d4d0cb" }} tickLine={false} />
            <YAxis yAxisId="left" tick={{ fill: "#8a8a8a", fontSize: 9 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${v}M`} />
            <YAxis yAxisId="right" orientation="right" domain={[0, 30]} tick={{ fill: TEAL, fontSize: 9, fontWeight: 500 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${v}%`} />
            <Bar yAxisId="left" dataKey="revenue" radius={[3, 3, 0, 0]}>
              {data.map((e) => <Cell key={e.year} fill={e.forecast ? ORANGE : SLATE} />)}
              <LabelList dataKey="revenue" position="top" content={<RevLabel />} />
            </Bar>
            <Bar yAxisId="left" dataKey="gp" radius={[3, 3, 0, 0]}>
              {data.map((e) => <Cell key={e.year} fill={e.forecast ? GP_ORANGE : GP_SLATE} />)}
              <LabelList dataKey="gp" position="top" content={<GpLabel />} />
            </Bar>
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="gm"
              stroke={TEAL}
              strokeWidth={2}
              strokeOpacity={0.6}
              dot={{ r: 4, fill: TEAL, stroke: "white", strokeWidth: 2 }}
            >
              <LabelList dataKey="gm" content={<GmDotLabel />} />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
