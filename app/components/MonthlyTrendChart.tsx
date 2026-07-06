"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

interface MonthData { month: string; amount: number; }

function fmt(v: number) {
  if (v >= 100000) return `₹${(v / 100000).toFixed(1)}L`;
  return `₹${v.toLocaleString("en-IN")}`;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 12, padding: "12px 16px", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
      <p style={{ color: "#94a3b8", fontSize: 12, marginBottom: 4 }}>{label} 2025–26</p>
      <p style={{ color: "#ffffff", fontWeight: 800, fontSize: 18 }}>{fmt(payload[0].value)}</p>
    </div>
  );
};

export default function MonthlyTrendChart({ data }: { data: MonthData[] }) {
  const avg = Math.round(data.reduce((s, d) => s + d.amount, 0) / data.length);

  return (
    <div style={{ background: "#ffffff", borderRadius: 16, padding: "24px 24px 16px", boxShadow: "0 1px 8px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ color: "#0f172a", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Monthly Actual Spend Trend</h2>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <p style={{ color: "#64748b", fontSize: 13 }}>Total office expenses · Sep 2025 – May 2026</p>
          <span style={{ background: "#fef3c7", color: "#92400e", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>
            Avg: {fmt(avg)}/mo
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b", fontFamily: "inherit" }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={fmt} tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={avg} stroke="#f59e0b" strokeDasharray="5 3" label={{ value: "Avg", position: "right", fontSize: 10, fill: "#f59e0b" }} />
          <Area type="monotone" dataKey="amount" stroke="#6366f1" strokeWidth={2.5} fill="url(#areaGrad)" dot={{ fill: "#6366f1", r: 4, strokeWidth: 0 }} activeDot={{ r: 6, fill: "#818cf8" }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
