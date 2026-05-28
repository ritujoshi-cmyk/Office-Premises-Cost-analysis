"use client";

function fmt(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)}L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

interface KpisProps {
  kpis: {
    currentMonthlyProjected: number;
    proposedTotal: number;
    monthlySavings: number;
    annualSavings: number;
    savingsPercent: number;
  };
}

const cardConfig = [
  {
    key: "current",
    label: "Current Cost — Urmil Gupta",
    sub: "Urmil Gupta Lease — Projected",
    note: "Full premises monthly total",
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
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    border: "rgba(129,140,248,0.3)",
    accent: "#a5b4fc",
    icon: "🏙️",
  },
  {
    key: "monthly",
    label: "Monthly Savings",
    sub: "Starting from Day One",
    note: "24.5% cost reduction",
    bg: "linear-gradient(135deg, #052e16 0%, #064e3b 100%)",
    border: "rgba(52,211,153,0.3)",
    accent: "#6ee7b7",
    icon: "📉",
  },
];

export default function KpiCards({ kpis }: KpisProps) {
  const values = [
    kpis.currentMonthlyProjected,
    kpis.proposedTotal,
    kpis.monthlySavings,
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      {cardConfig.map((card, i) => (
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
            <p style={{ color: card.accent, fontSize: 12, fontWeight: 500 }}>{card.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
