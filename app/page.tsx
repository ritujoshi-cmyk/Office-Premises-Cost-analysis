"use client";

import { useState } from "react";
import { versions } from "./versions";
import { fmt } from "./utils";
import KpiCards from "./components/KpiCards";
import CostComparisonChart from "./components/CostComparisonChart";
import MonthlyTrendChart from "./components/MonthlyTrendChart";
import BenefitsSection from "./components/BenefitsSection";
import TopExpensesChart from "./components/TopExpensesChart";
import SavingsBreakdown from "./components/SavingsBreakdown";
import VendorTable from "./components/VendorTable";
import SummaryTable from "./components/SummaryTable";
import CoworkingComparison from "./components/CoworkingComparison";

const tabs = [
  { id: "overview",   label: "📊 Executive Overview" },
  { id: "summary",    label: "📋 Cost Summary Table" },
  { id: "vendors",    label: "🏷️ Vendor-wise Details" },
  { id: "coworking",  label: "🏙️ Co-Working Options" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const v = versions.find(ver => ver.id === "v2")!;

  return (
    <div className="min-h-screen" style={{ background: "#f1f5f9", fontFamily: "var(--font-jakarta), sans-serif" }}>
      {/* Hero Header */}
      <header style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span style={{ background: "#312e81", color: "#a5b4fc", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", padding: "3px 10px", borderRadius: 999 }}>
                  CUELEARN PVT. LIMITED · GURGAON OFFICE
                </span>
              </div>
              <h1 style={{ color: "#ffffff", fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 8 }}>
                Gurgaon Corporate Office Relocation Analysis
              </h1>
              <p style={{ color: "#94a3b8", fontSize: 16, marginBottom: 20 }}>
                Urmil Gupta Lease Property vs Co-Working Space + Basement + Offline Centre
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 12, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 18 }}>✅</span>
                  <div>
                    <span style={{ color: "#34d399", fontWeight: 700, fontSize: 14 }}>RECOMMENDATION: </span>
                    <span style={{ color: "#6ee7b7", fontSize: 14 }}>Move to Co-Working Space — Save </span>
                    <span style={{ color: "#34d399", fontWeight: 800, fontSize: 14 }}>{fmt(v.kpis.annualSavings)} annually</span>
                  </div>
                </div>
                <div style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.35)", borderRadius: 12, padding: "10px 20px", display: "inline-flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 16 }}>📅</span>
                  <div>
                    <span style={{ color: "#fbbf24", fontWeight: 700, fontSize: 13 }}>2027 OUTLOOK: </span>
                    <span style={{ color: "#fde68a", fontSize: 13 }}>Savings will increase further once the basement lease lock-in period is released in 2027 - pushing annual savings beyond </span>
                    <span style={{ color: "#fbbf24", fontWeight: 800, fontSize: 13 }}>{fmt((v.kpis.monthlySavings + 300000) * 12)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0 }}>
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, padding: "16px 24px", textAlign: "right" }}>
                <p style={{ color: "#64748b", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Data Period</p>
                <p style={{ color: "#ffffff", fontWeight: 700, fontSize: 15 }}>Sep 2025 – May 2026</p>
                <p style={{ color: "#64748b", fontSize: 12, marginTop: 2 }}>9 months of actuals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="max-w-7xl mx-auto px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", gap: 2 }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "14px 22px",
                  fontSize: 13,
                  fontWeight: 600,
                  background: activeTab === tab.id ? "rgba(129,140,248,0.1)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  borderBottom: activeTab === tab.id ? "2.5px solid #818cf8" : "2.5px solid transparent",
                  color: activeTab === tab.id ? "#818cf8" : "#64748b",
                  transition: "all 0.15s",
                  fontFamily: "inherit",
                  borderRadius: "8px 8px 0 0",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <KpiCards kpis={v.kpis} />
            <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 20 }}>
              <CostComparisonChart data={v.summaryData} />
              <TopExpensesChart data={v.summaryData} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 20 }}>
              <MonthlyTrendChart data={v.monthlyActuals} />
              <SavingsBreakdown data={v.summaryData} kpis={v.kpis} />
            </div>
            <BenefitsSection benefits={v.benefits} />
          </div>
        )}
        {activeTab === "summary" && (
          <SummaryTable data={v.summaryTableData} totals={v.summaryTotals} benefits={v.summaryBenefits} />
        )}
        {activeTab === "vendors" && (
          <VendorTable data={v.vendorData} />
        )}
        {activeTab === "coworking" && (
          <CoworkingComparison />
        )}
      </main>

      <footer style={{ textAlign: "center", padding: "24px 0", color: "#94a3b8", fontSize: 12, borderTop: "1px solid #e2e8f0", marginTop: 16 }}>
        Cue Learn Pvt. Limited · Gurgaon Corporate Office Relocation Analysis · FY 2025–26 · Data: Sep 2025 – May 2026
      </footer>
    </div>
  );
}
