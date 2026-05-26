"use client";

import { SummaryRow } from "../data";

interface Props {
  data: SummaryRow[];
  totals: { avgActual: number; projectedAvg: number; urmilGupta: number; coWorking: number; totalProjected: number; savings: number };
  benefits: string[];
}

function r(v: number | null): string {
  if (v === null || v === undefined) return "—";
  if (v === 0) return "—";
  if (v >= 100000) return `₹${(v / 100000).toFixed(2)}L`;
  if (v >= 1000) return `₹${Math.round(v).toLocaleString("en-IN")}`;
  return `₹${Math.round(v)}`;
}

function fmtTotal(v: number): string {
  if (v >= 100000) return `₹${(v / 100000).toFixed(2)}L`;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}

const th: React.CSSProperties = {
  padding: "10px 14px",
  fontSize: 11,
  fontWeight: 700,
  textAlign: "right" as const,
  whiteSpace: "nowrap" as const,
  borderRight: "1px solid #e2e8f0",
};

const td: React.CSSProperties = {
  padding: "9px 14px",
  fontSize: 12,
  textAlign: "right" as const,
  whiteSpace: "nowrap" as const,
  borderRight: "1px solid #f1f5f9",
  color: "#334155",
};

export default function SummaryTable({ data, totals, benefits }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Title card */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)", borderRadius: 16, padding: "24px 28px", border: "1px solid rgba(129,140,248,0.2)" }}>
        <h2 style={{ color: "#ffffff", fontSize: 20, fontWeight: 800, marginBottom: 6 }}>
          Cost Analysis — Urmil Gupta Lease vs Co-Working Space
        </h2>
        <p style={{ color: "#94a3b8", fontSize: 14 }}>
          Monthly cost breakdown · Including Co-Working + Basement + Offline Centre
        </p>
        <div style={{ display: "flex", gap: 32, marginTop: 20 }}>
          {[
            { label: "Projected Monthly (Current)", value: fmtTotal(totals.projectedAvg), color: "#f87171" },
            { label: "Basement + Offline Centre", value: fmtTotal(totals.urmilGupta), color: "#fb923c" },
            { label: "Co-Working Total Cost", value: fmtTotal(totals.coWorking), color: "#34d399" },
            { label: "Monthly Savings", value: fmtTotal(totals.savings), color: "#818cf8" },
          ].map((k) => (
            <div key={k.label}>
              <p style={{ color: "#64748b", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{k.label}</p>
              <p style={{ color: k.color, fontSize: 22, fontWeight: 800 }}>{k.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Table */}
      <div style={{ background: "#ffffff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              {/* Group header row */}
              <tr>
                <th rowSpan={2} style={{ ...th, textAlign: "left", background: "#f8fafc", color: "#0f172a", fontSize: 12, width: 220, borderBottom: "2px solid #e2e8f0", verticalAlign: "middle" }}>
                  Expense GL
                </th>
                {/* Group 1: Urmil Gupta — only Avg Actual + Projected Avg */}
                <th colSpan={2} style={{ ...th, textAlign: "center", background: "#eff6ff", color: "#1e40af", borderBottom: "2px solid #bfdbfe", letterSpacing: "0.04em" }}>
                  📋 Monthly Cost — Urmil Gupta Lease
                </th>
                {/* Group 2: Co-Working + Basement + Offline Centre — 4 columns */}
                <th colSpan={4} style={{ ...th, textAlign: "center", background: "#f0fdf4", color: "#166534", borderBottom: "2px solid #bbf7d0", letterSpacing: "0.04em" }}>
                  🏙️ Monthly Cost — Co-Working + Basement + Offline Centre
                </th>
                {/* Monthly Savings */}
                <th rowSpan={2} style={{ ...th, textAlign: "center", background: "#fdf4ff", color: "#7e22ce", fontSize: 11, borderBottom: "2px solid #e9d5ff", verticalAlign: "middle", minWidth: 110 }}>
                  💰 Monthly Savings
                </th>
              </tr>
              {/* Sub-header row */}
              <tr style={{ borderBottom: "2px solid #e2e8f0" }}>
                <th style={{ ...th, background: "#eff6ff", color: "#1e40af", borderBottom: "2px solid #bfdbfe" }}>Avg Actual</th>
                <th style={{ ...th, background: "#eff6ff", color: "#1e40af", borderBottom: "2px solid #bfdbfe" }}>Projected Avg</th>
                <th style={{ ...th, background: "#dcfce7", color: "#14532d", borderBottom: "2px solid #bbf7d0" }}>Basement + Offline Centre Cost</th>
                <th style={{ ...th, background: "#dcfce7", color: "#14532d", borderBottom: "2px solid #bbf7d0" }}>Co-Working Space Cost</th>
                <th style={{ ...th, background: "#dcfce7", color: "#14532d", borderBottom: "2px solid #bbf7d0" }}>Included / Notes</th>
                <th style={{ ...th, background: "#bbf7d0", color: "#14532d", fontWeight: 800, borderBottom: "2px solid #bbf7d0" }}>Total Projected</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => {
                const hasSavings = row.savings > 100;
                const hasNegativeSavings = row.savings < -10;
                const hasCoWorking = row.coWorking !== null && row.coWorking > 0;
                const isRent = row.gl.toLowerCase().includes("rent") || row.gl.toLowerCase().includes("basement");

                return (
                  <tr
                    key={row.gl}
                    style={{
                      background: hasSavings ? "#f0fdf4" : hasNegativeSavings ? "#fff8f8" : i % 2 === 0 ? "#ffffff" : "#fafafa",
                      borderBottom: "1px solid #f1f5f9",
                    }}
                  >
                    {/* GL Name */}
                    <td style={{ ...td, textAlign: "left", fontWeight: 600, color: "#0f172a", paddingLeft: 16, display: "flex", alignItems: "center", gap: 8 }}>
                      {hasSavings && (
                        <div style={{ width: 3, height: 20, borderRadius: 2, background: "#10b981", flexShrink: 0 }} />
                      )}
                      {hasNegativeSavings && (
                        <div style={{ width: 3, height: 20, borderRadius: 2, background: "#ef4444", flexShrink: 0 }} />
                      )}
                      {!hasSavings && !hasNegativeSavings && (
                        <div style={{ width: 3, height: 20, borderRadius: 2, background: "#e2e8f0", flexShrink: 0 }} />
                      )}
                      <span style={{ fontSize: 12 }}>{row.gl}</span>
                    </td>

                    {/* Avg Actual */}
                    <td style={{ ...td, background: "#f8fbff" }}>{r(row.avgActual)}</td>

                    {/* Projected Avg */}
                    <td style={{ ...td, background: "#f8fbff", fontWeight: 600, color: "#1e40af" }}>{r(row.projectedAvg)}</td>

                    {/* Urmil Gupta Cost */}
                    <td style={{ ...td, background: "#f0f7ff", fontWeight: 600, color: row.urmilGupta ? "#1d4ed8" : "#94a3b8" }}>
                      {r(row.urmilGupta)}
                    </td>

                    {/* Co-Working Cost */}
                    <td style={{ ...td, background: hasCoWorking ? "#f0fdf9" : "#fafafa", fontWeight: hasCoWorking ? 600 : 400, color: hasCoWorking ? "#065f46" : "#94a3b8" }}>
                      {r(row.coWorking)}
                    </td>

                    {/* Basement+Offline (blank for most rows — part of total) */}
                    <td style={{ ...td, background: "#fafafa", color: "#94a3b8", fontSize: 11 }}>
                      {isRent ? "Included" : "—"}
                    </td>

                    {/* Total Projected */}
                    <td style={{ ...td, background: "#f0fdf4", fontWeight: 700, color: "#166534" }}>
                      {row.totalProjected !== null ? r(row.totalProjected) : "—"}
                    </td>

                    {/* Monthly Savings */}
                    <td style={{
                      ...td,
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: 13,
                      background: hasSavings ? "#fdf4ff" : hasNegativeSavings ? "#fff1f2" : "#fafafa",
                      color: hasSavings ? "#7e22ce" : hasNegativeSavings ? "#be123c" : "#cbd5e1",
                    }}>
                      {hasNegativeSavings
                        ? <span style={{ fontSize: 11 }}>▲ {r(Math.abs(row.savings))}</span>
                        : hasSavings ? r(row.savings) : "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {/* Totals row */}
            <tfoot>
              <tr style={{ background: "#0f172a", borderTop: "2px solid #334155" }}>
                <td style={{ ...td, textAlign: "left", color: "#ffffff", fontWeight: 800, fontSize: 13, paddingLeft: 16 }}>
                  TOTAL
                </td>
                <td style={{ ...td, color: "#94a3b8", fontWeight: 700 }}>{fmtTotal(totals.avgActual)}</td>
                <td style={{ ...td, color: "#f87171", fontWeight: 800, fontSize: 13 }}>{fmtTotal(totals.projectedAvg)}</td>
                <td style={{ ...td, color: "#93c5fd", fontWeight: 800, fontSize: 13 }}>{fmtTotal(totals.urmilGupta)}</td>
                <td style={{ ...td, color: "#6ee7b7", fontWeight: 800, fontSize: 13 }}>{fmtTotal(totals.coWorking)}</td>
                <td style={{ ...td, color: "#94a3b8" }}>—</td>
                <td style={{ ...td, color: "#34d399", fontWeight: 800, fontSize: 13 }}>{fmtTotal(totals.totalProjected)}</td>
                <td style={{ ...td, textAlign: "center", color: "#c4b5fd", fontWeight: 800, fontSize: 15 }}>{fmtTotal(totals.savings)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Benefits from Excel */}
      <div style={{ background: "#ffffff", borderRadius: 16, padding: "24px 28px", border: "1px solid #e2e8f0", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
        <h3 style={{ color: "#0f172a", fontSize: 16, fontWeight: 700, marginBottom: 16 }}>
          Additional Benefits if We Move to Co-Working Space
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {benefits.map((b, i) => (
            <div
              key={b}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "#f0fdf4", border: "1px solid #bbf7d0",
                borderRadius: 12, padding: "10px 16px",
              }}
            >
              <span style={{ background: "#dcfce7", color: "#166534", fontWeight: 800, fontSize: 12, width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {i + 1}
              </span>
              <span style={{ color: "#065f46", fontWeight: 600, fontSize: 13 }}>{b}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
