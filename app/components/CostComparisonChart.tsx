"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Row { category: string; urmilGupta: number; coWorking: number; savings: number; }

function fmt(v: number) {
  if (v >= 100000) return `₹${(v / 100000).toFixed(1)}L`;
  if (v >= 1000) return `₹${(v / 1000).toFixed(0)}K`;
  return `₹${v}`;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 12, padding: "12px 16px", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
      <p style={{ color: "#e2e8f0", fontWeight: 700, marginBottom: 8, fontSize: 13 }}>{label}</p>
      {payload.map((p: any) => (
        <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: 2, background: p.fill }} />
          <span style={{ color: "#94a3b8", fontSize: 12 }}>{p.name}:</span>
          <span style={{ color: "#ffffff", fontWeight: 700, fontSize: 12 }}>{fmt(p.value)}</span>
        </div>
      ))}
    </div>
  );
};

export default function CostComparisonChart({ data }: { data: Row[] }) {
  const chartData = data
    .filter((d) => d.urmilGupta > 0 || d.coWorking > 0)
    .sort((a, b) => b.urmilGupta + b.coWorking - (a.urmilGupta + a.coWorking))
    .slice(0, 10)
    .map((d) => ({
      name: d.category.length > 16 ? d.category.slice(0, 14) + "…" : d.category,
      "Current (Lease)": d.urmilGupta,
      "Co-Working": d.coWorking,
    }));

  return (
    <div style={{ background: "#ffffff", borderRadius: 16, padding: "24px 24px 16px", boxShadow: "0 1px 8px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ color: "#0f172a", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Cost Comparison by Category</h2>
        <p style={{ color: "#64748b", fontSize: 13 }}>Monthly projected spend — Current lease vs Co-Working Space</p>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={chartData} margin={{ top: 4, right: 8, left: 0, bottom: 55 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748b", fontFamily: "inherit" }} angle={-35} textAnchor="end" interval={0} />
          <YAxis tickFormatter={fmt} tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: 10, fontSize: 12, fontFamily: "inherit" }} />
          <Bar dataKey="Current (Lease)" fill="#6366f1" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Co-Working" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
