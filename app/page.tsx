"use client";

import { kpis, benefits, monthlyActuals, summaryData } from "./data";
import KpiCards from "./components/KpiCards";
import CostComparisonChart from "./components/CostComparisonChart";
import MonthlyTrendChart from "./components/MonthlyTrendChart";
import BenefitsSection from "./components/BenefitsSection";
import TopExpensesChart from "./components/TopExpensesChart";
import SavingsBreakdown from "./components/SavingsBreakdown";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-indigo-300 text-sm font-medium uppercase tracking-widest mb-2">
                Cue Learn Pvt. Limited — Gurgaon Office
              </p>
              <h1 className="text-4xl font-bold mb-3">
                Office Premises Cost Analysis
              </h1>
              <p className="text-indigo-200 text-lg">
                Urmil Gupta Lease Property vs Co-Working Space
              </p>
            </div>
            <div className="text-right hidden md:block">
              <div className="bg-white/10 rounded-2xl px-6 py-4 border border-white/20">
                <p className="text-indigo-300 text-xs uppercase tracking-wider mb-1">Data Period</p>
                <p className="text-white font-semibold">Sep 2024 – Mar 2025</p>
                <p className="text-indigo-300 text-xs mt-1">7 months actuals</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* KPI Cards */}
        <KpiCards kpis={kpis} />

        {/* Cost Comparison + Top Expenses */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <CostComparisonChart data={summaryData} />
          </div>
          <div className="lg:col-span-2">
            <TopExpensesChart data={summaryData} />
          </div>
        </div>

        {/* Monthly Trend + Savings Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <MonthlyTrendChart data={monthlyActuals} />
          </div>
          <div className="lg:col-span-2">
            <SavingsBreakdown data={summaryData} kpis={kpis} />
          </div>
        </div>

        {/* Benefits */}
        <BenefitsSection benefits={benefits} />

        {/* Footer */}
        <footer className="text-center py-6 text-slate-400 text-sm border-t border-slate-200">
          Cue Learn Pvt. Limited · Office Premises Cost Analysis · FY 2024–25
        </footer>
      </main>
    </div>
  );
}
