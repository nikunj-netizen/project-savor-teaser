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
  { year: "2025", revenue: 1023, label: "\u20B11.02B" },
];

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
        barCategoryGap="30%"
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="var(--color-warm-200)"
          vertical={false}
        />
        <XAxis
          dataKey="year"
          tick={{
            fill: "var(--color-slate)",
            fontSize: 11,
            fontWeight: 500,
          }}
          axisLine={{ stroke: "var(--color-warm-300)" }}
          tickLine={false}
        />
        <YAxis
          tick={{
            fill: "var(--color-warm-500)",
            fontSize: 10,
          }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${v}`}
        />
        <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={entry.year}
              fill={
                index === data.length - 1
                  ? "var(--color-orange)"
                  : "var(--color-warm-300)"
              }
            />
          ))}
          <LabelList
            dataKey="label"
            position="top"
            style={{
              fill: "var(--color-slate)",
              fontSize: 11,
              fontWeight: 600,
              fontFamily: "var(--font-serif)",
            }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
