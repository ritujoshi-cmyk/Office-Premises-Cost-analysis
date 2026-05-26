"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface Row { category: string; urmilGupta: number; coWorking: number; }

const COLORS = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#f43f5e", "#64748b"];

function fmt(v: number) {
  if (v >= 100000) return `₹${(v / 100000).toFixed(1)}L`;
  return `₹${v.toLocaleString("en-IN")}`;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 12, padding: "10px 14px" }}>
      <p style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 12, marginBottom: 4 }}>{d.name}</p>
      <p style={{ color: "#6ee7b7", fontWeight: 800, fontSize: 14 }}>{fmt(d.value)}</p>
      <p style={{ color: "#94a3b8", fontSize: 11 }}>{d.pct}% of total</p>
    </div>
  );
};

export default function TopExpensesChart({ data }: { data: Row[] }) {
  const total = data.reduce((s, d) => s + d.urmilGupta + d.coWorking, 0);
  const pieData = data
    .map((d) => ({ name: d.category, value: d.urmilGupta + d.coWorking }))
    .filter((d) => d.value > 0)
    .sort((a, b) => b.value - a.value)
    .slice(0, 7)
    .map((d) => ({ ...d, pct: ((d.value / total) * 100).toFixed(1) }));

  return (
    <div style={{ background: "#ffffff", borderRadius: 16, padding: "24px", boxShadow: "0 1px 8px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0", height: "100%" }}>
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ color: "#0f172a", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Expense Share</h2>
        <p style={{ color: "#64748b", fontSize: 13 }}>Top categories by total projected cost</p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={85} paddingAngle={2} dataKey="value">
            {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
        {pieData.map((d, i) => (
          <div key={d.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: COLORS[i % COLORS.length], flexShrink: 0 }} />
              <span style={{ color: "#475569", fontSize: 11, maxWidth: 130, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.name}</span>
            </div>
            <span style={{ color: "#0f172a", fontSize: 11, fontWeight: 700 }}>{d.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
