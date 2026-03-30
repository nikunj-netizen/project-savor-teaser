"use client";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { year: "FY23", revenue: 7.4, gp: 1.7, gm: 23.4, forecast: false },
  { year: "FY24", revenue: 11.6, gp: 2.4, gm: 20.7, forecast: false },
  { year: "FY25", revenue: 18.3, gp: 3.7, gm: 20.3, forecast: false },
  { year: "FY26F", revenue: 44.9, gp: 9.0, gm: 20.0, forecast: true },
  { year: "FY27F", revenue: 51.8, gp: 10.4, gm: 20.0, forecast: true },
];

/* eslint-disable @typescript-eslint/no-explicit-any */
function RevenueLabel(props: any) {
  const { x, y, width, value } = props;
  if (!value) return null;
  return (
    <text
      x={x + width / 2}
      y={y - 5}
      fill="var(--color-slate)"
      fontSize={8}
      fontWeight={600}
      fontFamily="var(--font-serif)"
      textAnchor="middle"
    >
      ${value}M
    </text>
  );
}

function GPLabel(props: any) {
  const { x, y, width, value } = props;
  if (!value) return null;
  return (
    <text
      x={x + width / 2}
      y={y - 5}
      fill="var(--color-warm-600)"
      fontSize={7}
      fontWeight={600}
      fontFamily="var(--font-serif)"
      textAnchor="middle"
    >
      ${value}M
    </text>
  );
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export default function RevenueGPChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 30, left: -5, bottom: 0 }}
        barCategoryGap="25%"
        barGap={2}
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
            fontSize: 10,
            fontWeight: 500,
          }}
          axisLine={{ stroke: "var(--color-warm-300)" }}
          tickLine={false}
        />
        {/* Left Y-axis: USD millions */}
        <YAxis
          yAxisId="left"
          tick={{
            fill: "var(--color-warm-500)",
            fontSize: 9,
          }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `$${v}M`}
        />
        {/* Right Y-axis: GM% */}
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[0, 30]}
          tick={{
            fill: "var(--color-orange)",
            fontSize: 9,
            fontWeight: 500,
          }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${v}%`}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconSize={8}
          wrapperStyle={{
            fontSize: "0.5rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            paddingBottom: "0.125rem",
          }}
          formatter={(value: string) => (
            <span style={{ color: "var(--color-warm-500)", fontSize: "0.5rem" }}>{value}</span>
          )}
        />
        {/* Revenue bars */}
        <Bar yAxisId="left" dataKey="revenue" name="Revenue" radius={[3, 3, 0, 0]}>
          {data.map((entry) => (
            <Cell
              key={entry.year}
              fill={entry.forecast ? "var(--color-orange)" : "var(--color-slate)"}
            />
          ))}
          <LabelList
            dataKey="revenue"
            position="top"
            content={<RevenueLabel />}
          />
        </Bar>
        {/* Gross Profit bars */}
        <Bar yAxisId="left" dataKey="gp" name="Gross Profit" radius={[3, 3, 0, 0]}>
          {data.map((entry) => (
            <Cell
              key={entry.year}
              fill={entry.forecast ? "rgba(247,118,53,0.4)" : "rgba(43,59,70,0.4)"}
            />
          ))}
          <LabelList
            dataKey="gp"
            position="top"
            content={<GPLabel />}
          />
        </Bar>
        {/* GM% line */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="gm"
          name="GM %"
          stroke="var(--color-orange)"
          strokeWidth={2}
          strokeDasharray="5 3"
          dot={{
            r: 3,
            fill: "var(--color-orange)",
            stroke: "white",
            strokeWidth: 1.5,
          }}
          activeDot={{
            r: 4,
            fill: "var(--color-orange)",
            stroke: "white",
            strokeWidth: 2,
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
