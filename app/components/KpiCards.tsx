"use client";

import { fmt } from "../utils";

interface KpisProps {
  kpis: {
    avgActual: number;
    currentMonthlyProjected: number;
    proposedTotal: number;
    monthlySavings: number;
    annualSavings: number;
    savingsPercent: number;
  };
}

const cardConfig: {
  key: string; label: string; sub: string; note: string;
  bg: string; border: string; accent: string; icon: string;
  dateNote?: string;
}[] = [
  {
    key: "actual",
    label: "Avg. Actual Cost — Urmil Gupta",
    sub: "Urmil Gupta Lease — Avg. Actual",
    note: "9-month average (Sep 2024–May 2025)",
    bg: "linear-gradient(135deg, #1c1917 0%, #292524 100%)",
    border: "rgba(251,191,36,0.3)",
    accent: "#fbbf24",
    icon: "📊",
  },
  {
    key: "current",
    label: "Projected Cost — Urmil Gupta",
    sub: "Urmil Gupta Lease — Projected",
    note: "Full premises monthly total",
    dateNote: "Projected from Nov 2026",
    bg: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
    border: "rgba(148,163,184,0.2)",
    accent: "#94a3b8",
    icon: "🏢",
  },
  {
    key: "proposed",
    label: "Proposed Cost",
    sub: "Co-Working + Basement + Offline Centre",
    note: "All-inclusive monthly total",
    dateNote: "Proposed from Nov 2026",
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    border: "rgba(129,140,248,0.3)",
    accent: "#a5b4fc",
    icon: "🏙️",
  },
  {
    key: "monthly",
    label: "Monthly Savings",
    sub: "Starting from Day One",
    note: "",
    bg: "linear-gradient(135deg, #052e16 0%, #064e3b 100%)",
    border: "rgba(52,211,153,0.3)",
    accent: "#6ee7b7",
    icon: "📉",
  },
];

export default function KpiCards({ kpis }: KpisProps) {
  const values = [
    kpis.avgActual,
    kpis.currentMonthlyProjected,
    kpis.proposedTotal,
    kpis.monthlySavings,
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
      {cardConfig.map((card, i) => {
        const note = card.key === "monthly" ? `${kpis.savingsPercent}% cost reduction` : card.note;
        return (
        <div
          key={card.key}
          style={{
            background: card.bg,
            border: `1px solid ${card.border}`,
            borderRadius: 16,
            padding: "22px 24px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div>
              <p style={{ color: card.accent, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>
                {card.sub}
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, fontWeight: 500 }}>
                {card.label}
              </p>
            </div>
            <span style={{ fontSize: 24, lineHeight: 1 }}>{card.icon}</span>
          </div>
          <p style={{ color: "#ffffff", fontSize: 32, fontWeight: 800, lineHeight: 1, marginBottom: 8, letterSpacing: "-0.02em" }}>
            {fmt(values[i])}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: card.accent }} />
            <p style={{ color: card.accent, fontSize: 12, fontWeight: 500 }}>{note}</p>
          </div>
          {card.dateNote && (
            <div style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 5,
              background: "rgba(255,255,255,0.08)", border: `1px solid ${card.border}`,
              borderRadius: 6, padding: "3px 8px" }}>
              <span style={{ fontSize: 11 }}>📅</span>
              <p style={{ color: card.accent, fontSize: 11, fontWeight: 600 }}>{card.dateNote}</p>
            </div>
          )}
        </div>
        );
      })}
    </div>
  );
}
