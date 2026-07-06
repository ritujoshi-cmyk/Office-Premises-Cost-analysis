"use client";

import { useState } from "react";
import { VendorRow, VendorStatus } from "../data";

function fmt(v: number) {
  if (!v) return <span style={{ color: "#cbd5e1" }}>—</span>;
  if (v >= 100000) return `₹${(v / 100000).toFixed(1)}L`;
  if (v >= 1000) return `₹${(v / 1000).toFixed(0)}K`;
  return `₹${v.toLocaleString("en-IN")}`;
}

const statusConfig: Record<VendorStatus, { label: string; bg: string; color: string }> = {
  eliminated: { label: "✅ Eliminated",  bg: "#dcfce7", color: "#166534" },
  reduced:    { label: "⚡ Reduced",     bg: "#fef9c3", color: "#854d0e" },
  retained:   { label: "🔄 Retained",   bg: "#dbeafe", color: "#1e40af" },
};

const glColors: Record<string, string> = {
  "Communication": "#4f46e5",
  "Electricity": "#f59e0b",
  "House Keeping": "#06b6d4",
  "Leasehold Improvements": "#8b5cf6",
  "Office Expense": "#10b981",
  "Office Rent": "#f43f5e",
  "Security": "#64748b",
  "Generator Diesel": "#ea580c",
  "Admin Salary": "#0ea5e9",
  "Pantry (Ravindra CC)": "#84cc16",
  "Pantry (Suneel CC)": "#22c55e",
  "AC Repair": "#ec4899",
  "Other Repairs": "#94a3b8",
  "Petty Cash": "#a78bfa",
  "Dining Table Rent": "#fb923c",
  "Vending Machine Rent": "#34d399",
  "Coffee Machine Rent": "#fbbf24",
  "Repairs & Maintenance": "#6b7280",
  "Water Charges": "#38bdf8",
};

const ALL_GL = "All Categories";

export default function VendorTable({ data }: { data: VendorRow[] }) {
  const [filter, setFilter] = useState<string>(ALL_GL);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const glCategories = [ALL_GL, ...Array.from(new Set(data.map((d) => d.gl)))];

  const filtered = data.filter((d) => {
    const glMatch = filter === ALL_GL || d.gl === filter;
    const statusMatch = statusFilter === "all" || d.status === statusFilter;
    return glMatch && statusMatch;
  });

  const eliminated = data.filter((d) => d.status === "eliminated").reduce((s, d) => s + d.projected, 0);
  const retained   = data.filter((d) => d.status === "retained").reduce((s, d) => s + d.projected, 0);
  const reduced    = data.filter((d) => d.status === "reduced").reduce((s, d) => s + d.projected, 0);

  function fmtNum(v: number) {
    if (v >= 100000) return `₹${(v / 100000).toFixed(2)}L`;
    return `₹${v.toLocaleString("en-IN")}`;
  }

  const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
  const monthKeys: (keyof VendorRow)[] = ["sep", "oct", "nov", "dec", "jan", "feb", "mar", "apr", "may"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { label: "Costs Eliminated", value: fmtNum(eliminated), note: "Included in co-working fee", bg: "linear-gradient(135deg, #052e16, #064e3b)", border: "rgba(52,211,153,0.25)", accent: "#6ee7b7", count: data.filter(d => d.status === "eliminated").length },
          { label: "Costs Reduced", value: fmtNum(reduced), note: "Partially offset by co-working", bg: "linear-gradient(135deg, #422006, #78350f)", border: "rgba(253,230,138,0.25)", accent: "#fde68a", count: data.filter(d => d.status === "reduced").length },
          { label: "Costs Retained", value: fmtNum(retained), note: "Continue in co-working space", bg: "linear-gradient(135deg, #1e1b4b, #312e81)", border: "rgba(165,180,252,0.25)", accent: "#a5b4fc", count: data.filter(d => d.status === "retained").length },
        ].map((c) => (
          <div key={c.label} style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 14, padding: "18px 22px", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <p style={{ color: c.accent, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.label}</p>
              <span style={{ background: "rgba(255,255,255,0.1)", color: c.accent, fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>{c.count} vendors</span>
            </div>
            <p style={{ color: "#ffffff", fontSize: 26, fontWeight: 800, marginBottom: 4 }}>{c.value}</p>
            <p style={{ color: c.accent, fontSize: 11 }}>{c.note}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ background: "#ffffff", borderRadius: 16, padding: "16px 20px", border: "1px solid #e2e8f0", display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", flex: 1 }}>
          <span style={{ color: "#64748b", fontSize: 12, fontWeight: 600, alignSelf: "center" }}>Category:</span>
          {glCategories.map((gl) => (
            <button
              key={gl}
              onClick={() => setFilter(gl)}
              style={{
                padding: "5px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "none",
                background: filter === gl ? "#4f46e5" : "#f1f5f9",
                color: filter === gl ? "#ffffff" : "#475569",
                fontFamily: "inherit",
              }}
            >
              {gl === ALL_GL ? "All" : gl}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {["all", "eliminated", "reduced", "retained"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              style={{
                padding: "5px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "none", fontFamily: "inherit",
                background: statusFilter === s
                  ? s === "eliminated" ? "#dcfce7" : s === "reduced" ? "#fef9c3" : s === "retained" ? "#dbeafe" : "#0f172a"
                  : "#f1f5f9",
                color: statusFilter === s
                  ? s === "eliminated" ? "#166534" : s === "reduced" ? "#854d0e" : s === "retained" ? "#1e40af" : "#ffffff"
                  : "#475569",
              }}
            >
              {s === "all" ? "All Status" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{ background: "#ffffff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                {["GL Category", "Vendor", "Freq", ...months, "Projected/mo", "Status", "Note"].map((h) => (
                  <th key={h} style={{
                    padding: "12px 14px", textAlign: "left", color: "#475569", fontWeight: 700,
                    fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap",
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => {
                const sc = statusConfig[row.status];
                const glColor = glColors[row.gl] || "#64748b";
                return (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid #f1f5f9",
                      background: i % 2 === 0 ? "#ffffff" : "#fafafa",
                    }}
                  >
                    <td style={{ padding: "11px 14px", whiteSpace: "nowrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 3, height: 28, borderRadius: 2, background: glColor, flexShrink: 0 }} />
                        <span style={{ color: "#0f172a", fontWeight: 600, fontSize: 12 }}>{row.gl}</span>
                      </div>
                    </td>
                    <td style={{ padding: "11px 14px", color: "#334155", maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.vendor}</td>
                    <td style={{ padding: "11px 14px", whiteSpace: "nowrap" }}>
                      <span style={{ background: "#f1f5f9", color: "#64748b", fontSize: 10, fontWeight: 600, padding: "2px 7px", borderRadius: 999 }}>{row.frequency}</span>
                    </td>
                    {monthKeys.map((mk) => (
                      <td key={mk} style={{ padding: "11px 14px", color: "#475569", whiteSpace: "nowrap", textAlign: "right" }}>
                        {fmt(row[mk] as number)}
                      </td>
                    ))}
                    <td style={{ padding: "11px 14px", whiteSpace: "nowrap", fontWeight: 700, color: "#0f172a", textAlign: "right" }}>
                      {fmt(row.projected)}
                    </td>
                    <td style={{ padding: "11px 14px", whiteSpace: "nowrap" }}>
                      <span style={{ background: sc.bg, color: sc.color, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999 }}>
                        {sc.label}
                      </span>
                    </td>
                    <td style={{ padding: "11px 14px", color: "#64748b", fontSize: 11, maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {row.statusNote}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div style={{ padding: "12px 16px", background: "#f8fafc", borderTop: "1px solid #e2e8f0", color: "#64748b", fontSize: 12 }}>
          Showing {filtered.length} of {data.length} vendors
        </div>
      </div>
    </div>
  );
}
