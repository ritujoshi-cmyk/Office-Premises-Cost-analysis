"use client";

interface Row {
  category: string;
  urmilGupta: number;
  coWorking: number;
  savings: number;
}

interface KpisProps {
  kpis: {
    monthlySavings: number;
    annualSavings: number;
  };
}

function fmt(v: number) {
  if (v >= 100000) return `₹${(v / 100000).toFixed(2)}L`;
  if (v >= 1000) return `₹${(v / 1000).toFixed(0)}K`;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}

export default function SavingsBreakdown({ data, kpis }: { data: Row[]; kpis: KpisProps["kpis"] }) {
  const savingsRows = data
    .filter((d) => d.savings > 500)
    .sort((a, b) => b.savings - a.savings)
    .slice(0, 8);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800">Savings Breakdown</h2>
        <p className="text-sm text-slate-500 mt-1">Categories where co-working saves money</p>
      </div>

      <div className="space-y-2 mb-5">
        {savingsRows.map((row) => {
          const pct = Math.min(100, Math.round((row.savings / kpis.monthlySavings) * 100));
          return (
            <div key={row.category}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-slate-600 truncate max-w-[65%]">{row.category}</span>
                <span className="text-xs font-semibold text-emerald-600">{fmt(row.savings)}</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full">
                <div
                  className="h-1.5 bg-emerald-500 rounded-full"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-emerald-600 font-medium uppercase tracking-wider">Total Monthly</p>
            <p className="text-2xl font-bold text-emerald-700">{fmt(kpis.monthlySavings)}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-emerald-600 font-medium uppercase tracking-wider">Annual</p>
            <p className="text-2xl font-bold text-emerald-700">{fmt(kpis.annualSavings)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
