"use client";

import { Car, Building2, TrendingDown, Shield, Star } from "lucide-react";

interface Benefit {
  title: string;
  icon: string;
  description: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  car: Car,
  building: Building2,
  "trending-down": TrendingDown,
  shield: Shield,
  star: Star,
};

const colorMap = [
  { bg: "bg-indigo-50", border: "border-indigo-200", icon: "text-indigo-600", title: "text-indigo-800" },
  { bg: "bg-violet-50", border: "border-violet-200", icon: "text-violet-600", title: "text-violet-800" },
  { bg: "bg-emerald-50", border: "border-emerald-200", icon: "text-emerald-600", title: "text-emerald-800" },
  { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600", title: "text-blue-800" },
  { bg: "bg-amber-50", border: "border-amber-200", icon: "text-amber-600", title: "text-amber-800" },
];

export default function BenefitsSection({ benefits }: { benefits: Benefit[] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">Additional Benefits of Moving to Co-Working Space</h2>
        <p className="text-sm text-slate-500 mt-1">Non-financial advantages that improve employee and investor experience</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {benefits.map((benefit, i) => {
          const Icon = iconMap[benefit.icon] || Star;
          const colors = colorMap[i % colorMap.length];
          return (
            <div
              key={benefit.title}
              className={`${colors.bg} ${colors.border} border rounded-2xl p-4 flex flex-col items-center text-center gap-3`}
            >
              <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border}`}>
                <Icon className={`w-6 h-6 ${colors.icon}`} />
              </div>
              <div>
                <p className={`font-semibold text-sm ${colors.title}`}>{benefit.title}</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
