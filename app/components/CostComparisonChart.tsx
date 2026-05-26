"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Row {
  category: string;
  urmilGupta: number;
  coWorking: number;
  savings: number;
}

function fmt(v: number) {
  if (v >= 100000) return `₹${(v / 100000).toFixed(1)}L`;
  if (v >= 1000) return `₹${(v / 1000).toFixed(0)}K`;
  return `₹${v}`;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-lg text-sm">
        <p className="font-semibold text-slate-700 mb-2">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.fill }} className="mb-1">
            {p.name}: <span className="font-bold">{fmt(p.value)}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function CostComparisonChart({ data }: { data: Row[] }) {
  const chartData = data
    .filter((d) => d.urmilGupta > 0 || d.coWorking > 0)
    .sort((a, b) => b.urmilGupta + b.coWorking - (a.urmilGupta + a.coWorking))
    .slice(0, 12)
    .map((d) => ({
      name: d.category.length > 18 ? d.category.slice(0, 16) + "…" : d.category,
      fullName: d.category,
      "Urmil Gupta": d.urmilGupta,
      "Co-Working": d.coWorking,
    }));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-800">Cost Comparison by Category</h2>
        <p className="text-sm text-slate-500 mt-1">Monthly projected cost — Urmil Gupta vs Co-Working Space</p>
      </div>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={chartData} margin={{ top: 4, right: 8, left: 8, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#64748b" }}
            angle={-35}
            textAnchor="end"
            interval={0}
          />
          <YAxis tickFormatter={fmt} tick={{ fontSize: 11, fill: "#64748b" }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: 8, fontSize: 13 }}
          />
          <Bar dataKey="Urmil Gupta" fill="#6366f1" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Co-Working" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
