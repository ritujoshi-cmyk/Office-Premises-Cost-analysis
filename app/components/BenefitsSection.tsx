"use client";

interface Benefit {
  title: string;
  description: string;
  icon: string;
  color: string;
  highlight: boolean;
}

const iconMap: Record<string, string> = {
  rupee: "₹", tool: "🔧", building: "🏗️", car: "🚗",
  star: "⭐", shield: "🔒", scale: "📐", wifi: "📡", users: "👥",
};

const colorMap: Record<string, { bg: string; border: string; iconBg: string; title: string }> = {
  emerald: { bg: "#f0fdf4", border: "#bbf7d0", iconBg: "#dcfce7", title: "#065f46" },
  indigo:  { bg: "#eef2ff", border: "#c7d2fe", iconBg: "#e0e7ff", title: "#3730a3" },
  violet:  { bg: "#f5f3ff", border: "#ddd6fe", iconBg: "#ede9fe", title: "#4c1d95" },
  blue:    { bg: "#eff6ff", border: "#bfdbfe", iconBg: "#dbeafe", title: "#1e3a8a" },
  amber:   { bg: "#fffbeb", border: "#fde68a", iconBg: "#fef3c7", title: "#78350f" },
  rose:    { bg: "#fff1f2", border: "#fecdd3", iconBg: "#ffe4e6", title: "#881337" },
  teal:    { bg: "#f0fdfa", border: "#99f6e4", iconBg: "#ccfbf1", title: "#134e4a" },
  cyan:    { bg: "#ecfeff", border: "#a5f3fc", iconBg: "#cffafe", title: "#164e63" },
  orange:  { bg: "#fff7ed", border: "#fed7aa", iconBg: "#ffedd5", title: "#7c2d12" },
};

export default function BenefitsSection({ benefits }: { benefits: Benefit[] }) {
  return (
    <div style={{ background: "#ffffff", borderRadius: 16, padding: "28px", boxShadow: "0 1px 8px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" }}>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ color: "#0f172a", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>
          Why Move to Co-Working Space?
        </h2>
        <p style={{ color: "#64748b", fontSize: 14 }}>
          Financial and operational benefits of making the switch — beyond just cost savings
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {benefits.map((b) => {
          const c = colorMap[b.color] || colorMap.indigo;
          return (
            <div
              key={b.title}
              style={{
                background: b.highlight ? "linear-gradient(135deg, #052e16, #064e3b)" : c.bg,
                border: `1px solid ${b.highlight ? "rgba(52,211,153,0.3)" : c.border}`,
                borderRadius: 14,
                padding: "18px 20px",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: b.highlight ? "rgba(52,211,153,0.15)" : c.iconBg,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
              }}>
                {iconMap[b.icon] || "•"}
              </div>
              <div>
                <p style={{
                  fontWeight: 700, fontSize: 13, marginBottom: 4,
                  color: b.highlight ? "#34d399" : c.title,
                }}>
                  {b.title}
                </p>
                <p style={{ color: b.highlight ? "#6ee7b7" : "#64748b", fontSize: 12, lineHeight: 1.5 }}>
                  {b.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
