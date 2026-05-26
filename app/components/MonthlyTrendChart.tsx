"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface MonthData {
  month: string;
  amount: number;
}

function fmt(v: number) {
  if (v >= 100000) return `₹${(v / 100000).toFixed(1)}L`;
  return `₹${v.toLocaleString("en-IN")}`;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-lg text-sm">
        <p className="font-semibold text-slate-700 mb-1">{label} 2024–25</p>
        <p className="text-indigo-600 font-bold">{fmt(payload[0].value)}</p>
      </div>
    );
  }
  return null;
};

export default function MonthlyTrendChart({ data }: { data: MonthData[] }) {
  const avg = Math.round(data.reduce((s, d) => s + d.amount, 0) / data.length);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-800">Monthly Actual Spend Trend</h2>
        <p className="text-sm text-slate-500 mt-1">
          Total office expenses — Sep 2024 to Mar 2025 &nbsp;·&nbsp;
          <span className="text-indigo-600 font-medium">Avg: {fmt(avg)}/month</span>
        </p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 4, right: 8, left: 8, bottom: 0 }}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} />
          <YAxis tickFormatter={fmt} tick={{ fontSize: 11, fill: "#64748b" }} />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            y={avg}
            stroke="#f59e0b"
            strokeDasharray="6 3"
            label={{ value: "Avg", position: "right", fontSize: 11, fill: "#f59e0b" }}
          />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#6366f1"
            strokeWidth={2.5}
            fill="url(#colorAmount)"
            dot={{ fill: "#6366f1", r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
