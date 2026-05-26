"use client";

import { TrendingDown, IndianRupee, Building2, PiggyBank } from "lucide-react";

function fmt(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

interface KpisProps {
  kpis: {
    currentMonthlyProjected: number;
    urmilGuptaShare: number;
    coWorkingTotal: number;
    monthlySavings: number;
    annualSavings: number;
    savingsPercent: number;
  };
}

export default function KpiCards({ kpis }: KpisProps) {
  const cards = [
    {
      label: "Current Monthly Cost",
      sublabel: "Urmil Gupta Lease (Projected)",
      value: fmt(kpis.currentMonthlyProjected),
      sub: "Full premises total",
      icon: Building2,
      color: "from-slate-700 to-slate-800",
      textColor: "text-slate-100",
      subColor: "text-slate-400",
    },
    {
      label: "Co-Working Space Cost",
      sublabel: "Proposed monthly outflow",
      value: fmt(kpis.coWorkingTotal),
      sub: "Rent + pantry included",
      icon: IndianRupee,
      color: "from-indigo-600 to-indigo-700",
      textColor: "text-indigo-100",
      subColor: "text-indigo-300",
    },
    {
      label: "Monthly Savings",
      sublabel: "If we move to co-working",
      value: fmt(kpis.monthlySavings),
      sub: `${kpis.savingsPercent}% cost reduction`,
      icon: TrendingDown,
      color: "from-emerald-600 to-emerald-700",
      textColor: "text-emerald-100",
      subColor: "text-emerald-300",
    },
    {
      label: "Annual Savings",
      sublabel: "Projected over 12 months",
      value: fmt(kpis.annualSavings),
      sub: "Straight-line projection",
      icon: PiggyBank,
      color: "from-violet-600 to-violet-700",
      textColor: "text-violet-100",
      subColor: "text-violet-300",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className={`bg-gradient-to-br ${card.color} rounded-2xl p-5 shadow-lg`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className={`text-xs font-semibold uppercase tracking-wider ${card.subColor}`}>
                  {card.sublabel}
                </p>
                <p className={`text-sm font-medium mt-0.5 ${card.textColor}`}>
                  {card.label}
                </p>
              </div>
              <div className="bg-white/15 rounded-xl p-2">
                <Icon className={`w-5 h-5 ${card.textColor}`} />
              </div>
            </div>
            <p className={`text-3xl font-bold ${card.textColor} mb-1`}>
              {card.value}
            </p>
            <p className={`text-xs ${card.subColor}`}>{card.sub}</p>
          </div>
        );
      })}
    </div>
  );
}
