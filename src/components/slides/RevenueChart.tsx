"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2023", revenue: 414, label: "\u20B1414M" },
  { year: "2024", revenue: 648, label: "\u20B1648M" },
  { year: "2025", revenue: 1023, label: "\u20B11.0B" },
  { year: "2026F", revenue: 2512, label: "\u20B12.5B" },
  { year: "2027F", revenue: 2899, label: "\u20B12.9B" },
  { year: "2028F", revenue: 3267, label: "\u20B13.3B" },
  { year: "2029F", revenue: 3595, label: "\u20B13.6B" },
];

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 18, right: 5, left: -15, bottom: 0 }}
        barCategoryGap="20%"
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(255,255,255,0.05)"
          vertical={false}
        />
        <XAxis
          dataKey="year"
          tick={{
            fill: "rgba(255,255,255,0.7)",
            fontSize: 9,
            fontWeight: 500,
          }}
          axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
          tickLine={false}
        />
        <YAxis
          tick={{
            fill: "rgba(255,255,255,0.5)",
            fontSize: 9,
          }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${v}`}
        />
        <Bar dataKey="revenue" radius={[3, 3, 0, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={entry.year}
              fill={
                entry.year.includes("F")
                  ? "var(--color-orange)"
                  : "rgba(255,255,255,0.25)"
              }
            />
          ))}
          <LabelList
            dataKey="label"
            position="top"
            style={{
              fill: "rgba(255,255,255,0.85)",
              fontSize: 8,
              fontWeight: 600,
              fontFamily: "var(--font-serif)",
            }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
