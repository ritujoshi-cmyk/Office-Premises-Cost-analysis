"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface Row {
  category: string;
  urmilGupta: number;
  coWorking: number;
}

const COLORS = [
  "#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd",
  "#ddd6fe", "#3b82f6", "#60a5fa", "#93c5fd",
];

function fmt(v: number) {
  if (v >= 100000) return `₹${(v / 100000).toFixed(1)}L`;
  return `₹${v.toLocaleString("en-IN")}`;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-lg text-sm">
        <p className="font-semibold text-slate-700 mb-1">{d.name}</p>
        <p className="text-indigo-600 font-bold">{fmt(d.value)}</p>
        <p className="text-slate-400">{d.pct}% of total</p>
      </div>
    );
  }
  return null;
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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800">Top Expense Categories</h2>
        <p className="text-sm text-slate-500 mt-1">Share of total projected monthly cost</p>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="45%"
            innerRadius={55}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
          >
            {pieData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            iconSize={8}
            formatter={(value) => (
              <span className="text-xs text-slate-600">
                {value.length > 20 ? value.slice(0, 18) + "…" : value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
