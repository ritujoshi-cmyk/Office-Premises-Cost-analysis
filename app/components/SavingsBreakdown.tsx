"use client";

interface Row { category: string; urmilGupta: number; coWorking: number; savings: number; }

function fmt(v: number) {
  if (v >= 100000) return `₹${(v / 100000).toFixed(1)}L`;
  if (v >= 1000) return `₹${(v / 1000).toFixed(0)}K`;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}

export default function SavingsBreakdown({ data, kpis }: { data: Row[]; kpis: { monthlySavings: number; annualSavings: number } }) {
  const rows = data.filter((d) => d.savings > 500).sort((a, b) => b.savings - a.savings).slice(0, 8);

  return (
    <div style={{ background: "#ffffff", borderRadius: 16, padding: "24px", boxShadow: "0 1px 8px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ color: "#0f172a", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Where We Save</h2>
        <p style={{ color: "#64748b", fontSize: 13 }}>Monthly savings by eliminated cost category</p>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        {rows.map((row) => {
          const pct = Math.min(100, Math.round((row.savings / kpis.monthlySavings) * 100));
          return (
            <div key={row.category}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ color: "#475569", fontSize: 12 }}>{row.category}</span>
                <span style={{ color: "#059669", fontSize: 12, fontWeight: 700 }}>{fmt(row.savings)}</span>
              </div>
              <div style={{ height: 6, background: "#f1f5f9", borderRadius: 999 }}>
                <div style={{ height: 6, width: `${pct}%`, background: "linear-gradient(90deg, #10b981, #059669)", borderRadius: 999 }} />
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ background: "linear-gradient(135deg, #052e16, #064e3b)", borderRadius: 12, padding: "16px 20px", marginTop: 16, border: "1px solid rgba(52,211,153,0.2)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ color: "#6ee7b7", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Monthly Savings</p>
            <p style={{ color: "#ffffff", fontSize: 24, fontWeight: 800 }}>{fmt(kpis.monthlySavings)}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ color: "#6ee7b7", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Annual Savings</p>
            <p style={{ color: "#ffffff", fontSize: 24, fontWeight: 800 }}>{fmt(kpis.annualSavings)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
