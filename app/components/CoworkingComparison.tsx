"use client";

const withinBudget = [
  {
    name: "alt.f – JMD Empire Square",
    address: "3rd Floor, JMD Empire Square, MG Road",
    sector: "Sec 28",
    metro: "Sikanderpur (Yellow Line)",
    walk: "~2 min",
    priceRange: "₹6,500 – 7,000",
    totalMonth: "₹6.5L – 7L/mo",
    hours: "Mon–Sun: 8:30 AM – 10 PM",
    seats100: "✅ Confirmed",
    managed: "Enquire",
    amenities: ["Open 7 days", "Private cabins", "Meeting rooms", "Power backup", "Large floor space"],
    best: true,
  },
  {
    name: "AltF CoWorking – MGF Megacity Mall",
    address: "2nd Floor, MGF Mega City Mall, MG Road",
    sector: "Sec 28",
    metro: "Sikanderpur (Yellow Line)",
    walk: "~1 min",
    priceRange: "₹6,000 – 7,000",
    totalMonth: "₹6L – 7L/mo",
    hours: "Mon–Sat: 8 AM – 9 PM | Sun: 8 AM – 6 PM",
    seats100: "Multi-floor",
    managed: "Enquire",
    amenities: ["Modern interiors", "Ergonomic seating", "Meeting rooms", "WiFi", "7-day access", "Near Cyber Hub"],
    best: true,
  },
  {
    name: "Spring House – DLF Grand Mall",
    address: "DLF Grand Mall, MG Road",
    sector: "Sec 28",
    metro: "Sikanderpur (Yellow Line)",
    walk: "~3 min",
    priceRange: "₹6,500 – 7,000",
    totalMonth: "₹6.5L – 7L/mo",
    hours: "Mon–Sat: 9 AM – 9 PM",
    seats100: "Check availability",
    managed: "Enquire",
    amenities: ["30,000 sq ft", "Power backup", "Pantry", "Meeting rooms", "Community manager on site"],
    best: false,
  },
  {
    name: "alt.f Coworking – MPD Tower",
    address: "MPD Tower, Golf Course Rd",
    sector: "Sec 43",
    metro: "Sector 42-43 Rapid Metro",
    walk: "~3 min",
    priceRange: "₹6,500 – 7,000",
    totalMonth: "₹6.5L – 7L/mo",
    hours: "Mon–Sat: 9 AM – 9 PM",
    seats100: "Multi-floor",
    managed: "Enquire",
    amenities: ["Private cabins", "Cafeteria", "Community", "Meeting rooms", "Power backup"],
    best: false,
  },
  {
    name: "Guftagu Coworking",
    address: "Opp. DLF City Court, MG Road, Sec 24",
    sector: "Sec 24",
    metro: "Sikanderpur (Yellow Line)",
    walk: "~5 min",
    priceRange: "₹6,499 – 7,000",
    totalMonth: "₹6.5L – 7L/mo",
    hours: "Mon–Sat: 9 AM – 7 PM",
    seats100: "Check availability",
    managed: "Not managed",
    amenities: ["Budget-friendly", "Female-friendly", "Meeting rooms", "Pantry", "Power backup"],
    best: false,
  },
  {
    name: "Truworx – The Coworking Space",
    address: "A-14/15, DLF Phase 1, Sec 26A",
    sector: "Sec 26A",
    metro: "Sikanderpur (Yellow Line)",
    walk: "~7 min",
    priceRange: "₹6,500 – 7,000",
    totalMonth: "₹6.5L – 7L/mo",
    hours: "Mon–Sat: 9 AM – 8 PM",
    seats100: "Check availability",
    managed: "Enquire",
    amenities: ["Clean & quiet", "Good hygiene", "Pantry", "Meeting rooms", "Cooperative staff"],
    best: false,
  },
];

const overBudget = [
  {
    name: "DLF Corporate Park – 100-seat unit",
    address: "DLF Corporate Park, MG Road, Sec 24",
    sector: "Sec 24",
    metro: "Guru Dronacharya Metro",
    walk: "~5 min",
    priceRange: "₹9,000 – 11,000",
    totalMonth: "₹9L – 11L/mo",
    seats100: "✅ Ready to move",
    managed: "✅ Managed",
    amenities: ["7,500 sq ft", "100 workstations", "6 cabins", "4 meeting rooms", "Conference room", "Pantry"],
    tier: "slight",
  },
  {
    name: "UrbanWrk @ Baani The Statement",
    address: "The Statement, Golf Course Rd",
    sector: "Sec 43",
    metro: "Sector 42-43 Rapid Metro",
    walk: "~8 min",
    priceRange: "₹8,000 – 10,000",
    totalMonth: "₹8L – 10L/mo",
    seats100: "Check availability",
    managed: "Enquire",
    amenities: ["Modern interiors", "Gym", "Conference rooms", "Flexible layouts"],
    tier: "slight",
  },
  {
    name: "91Springboard – Vatika Triangle",
    address: "4th Floor, Vatika Triangle, MG Road",
    sector: "Sec 28",
    metro: "Sikanderpur (Yellow Line)",
    walk: "~4 min",
    priceRange: "₹10,000 – 13,000",
    totalMonth: "₹10L – 13L/mo",
    seats100: "✅ Yes",
    managed: "✅ Managed",
    amenities: ["Soundproofed cabins", "Ergonomic", "Visitor mgmt", "Parking"],
    tier: "slight",
  },
  {
    name: "alt.f – Global Business Park",
    address: "Tower D, Global Business Park, Sec 26",
    sector: "Sec 26",
    metro: "Guru Dronacharya Metro",
    walk: "~4 min",
    priceRange: "₹10,000 – 14,000",
    totalMonth: "₹10L – 14L/mo",
    seats100: "✅ Yes",
    managed: "Enquire",
    amenities: ["Premium interiors", "Lounge", "City views", "Meeting rooms"],
    tier: "slight",
  },
  {
    name: "Smartworks – Golf View Towers",
    address: "Golf View Corporate Tower B",
    sector: "Sec 42",
    metro: "Sector 42-43 Rapid Metro",
    walk: "~1 min",
    priceRange: "₹15,000 – 16,000",
    totalMonth: "₹15L – 16L/mo",
    seats100: "✅ Yes",
    managed: "✅ Managed",
    amenities: ["MNC-grade", "Managed office"],
    tier: "over",
  },
  {
    name: "CorporatEdge – Godrej GCR",
    address: "Level 11, Godrej GCR, Golf Course Rd",
    sector: "Sec 42",
    metro: "Sector 42-43 Rapid Metro",
    walk: "~5 min",
    priceRange: "₹12,000 – 15,000",
    totalMonth: "₹12L – 15L/mo",
    seats100: "✅ Yes",
    managed: "✅ Managed",
    amenities: ["Enterprise-grade", "Hospitality services"],
    tier: "over",
  },
  {
    name: "WeWork – Platina Tower",
    address: "Platina Tower, MG Road, Sector 28",
    sector: "Sec 28",
    metro: "Sikanderpur (Yellow Line)",
    walk: "~1 min",
    priceRange: "₹18,000 – 20,000",
    totalMonth: "₹18L – 20L/mo",
    seats100: "✅ Yes (1,429 capacity)",
    managed: "✅ Managed",
    amenities: ["Premium enterprise", "Doorstep metro"],
    tier: "over",
  },
];

const tips = [
  "AltF JMD Empire Square & MGF Megacity Mall are your BEST OPTIONS — both within ₹7,000/seat, at Sikanderpur Metro, and can accommodate 100 seats across floors.",
  "For slightly over-budget spaces (91Springboard, DLF Corporate Park), request an annual contract bulk quote — 100-seat deals often get 15–25% discount, potentially bringing them into ₹7,000–8,000 range.",
  "Always ask for: (a) Managed Office floor pricing, (b) 100-seat enterprise rate, (c) lock-in discount for 12–24 month contracts.",
  "Sikanderpur Metro (Yellow Line) connects directly to Cyber City, DLF Cyber Hub, and New Delhi — best metro for employee catchment across the NCR.",
];

function MetroBadge({ walk }: { walk: string }) {
  const min = parseInt(walk);
  const color = min <= 2 ? "#10b981" : min <= 5 ? "#f59e0b" : "#94a3b8";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(0,0,0,0.08)", borderRadius: 999, padding: "2px 8px", fontSize: 11, fontWeight: 700, color }}>
      🚇 {walk}
    </span>
  );
}

export default function CoworkingComparison() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)", borderRadius: 16, padding: "24px 28px", border: "1px solid rgba(129,140,248,0.2)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <span style={{ background: "#312e81", color: "#a5b4fc", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", padding: "3px 10px", borderRadius: 999 }}>
              SIKANDERPUR METRO &amp; SECTOR 42 · GURGAON
            </span>
            <h2 style={{ color: "#ffffff", fontSize: 20, fontWeight: 800, marginTop: 10, marginBottom: 6 }}>
              Co-Working Space Comparison — 100 Seats
            </h2>
            <p style={{ color: "#94a3b8", fontSize: 14 }}>Budget: ₹7,000/seat/month</p>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[
              { label: "Budget/Seat", value: "₹7,000", color: "#34d399" },
              { label: "Total Budget/Month", value: "₹7,00,000", color: "#818cf8" },
              { label: "Within-Budget Options", value: "6 spaces", color: "#f59e0b" },
            ].map(k => (
              <div key={k.label} style={{ textAlign: "right" }}>
                <p style={{ color: "#64748b", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{k.label}</p>
                <p style={{ color: k.color, fontSize: 18, fontWeight: 800 }}>{k.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Within Budget Section */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: 999, padding: "4px 14px", fontSize: 12, fontWeight: 800, color: "#166534" }}>
            ✅ WITHIN BUDGET — ≤ ₹7,000/seat
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
          {withinBudget.map((space) => (
            <div
              key={space.name}
              style={{
                background: space.best ? "linear-gradient(135deg, #052e16 0%, #064e3b 100%)" : "#ffffff",
                border: space.best ? "2px solid #10b981" : "1px solid #e2e8f0",
                borderRadius: 16,
                padding: "20px 22px",
                boxShadow: space.best ? "0 8px 32px rgba(16,185,129,0.15)" : "0 1px 8px rgba(0,0,0,0.06)",
                position: "relative",
              }}
            >
              {space.best && (
                <div style={{ position: "absolute", top: -1, right: 16, background: "#10b981", color: "#ffffff", fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: "0 0 8px 8px", letterSpacing: "0.06em" }}>
                  ⭐ BEST OPTION
                </div>
              )}

              <div style={{ marginBottom: 12 }}>
                <p style={{ color: space.best ? "#34d399" : "#0f172a", fontSize: 14, fontWeight: 800, lineHeight: 1.3, marginBottom: 4, paddingRight: space.best ? 60 : 0 }}>
                  {space.name}
                </p>
                <p style={{ color: space.best ? "#6ee7b7" : "#64748b", fontSize: 12 }}>{space.address}</p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                <MetroBadge walk={space.walk} />
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: space.best ? "rgba(255,255,255,0.08)" : "#f1f5f9", borderRadius: 999, padding: "2px 8px", fontSize: 11, fontWeight: 600, color: space.best ? "#a5b4fc" : "#475569" }}>
                  📍 {space.metro}
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 14 }}>
                <div>
                  <p style={{ color: space.best ? "#6ee7b7" : "#94a3b8", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Per Seat/Month</p>
                  <p style={{ color: space.best ? "#34d399" : "#059669", fontSize: 22, fontWeight: 800 }}>{space.priceRange}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ color: space.best ? "#6ee7b7" : "#94a3b8", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>100 Seats Total</p>
                  <p style={{ color: space.best ? "#a7f3d0" : "#334155", fontSize: 14, fontWeight: 700 }}>{space.totalMonth}</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999,
                  background: space.seats100.includes("✅") ? (space.best ? "rgba(16,185,129,0.2)" : "#dcfce7") : (space.best ? "rgba(255,255,255,0.08)" : "#f8fafc"),
                  color: space.seats100.includes("✅") ? (space.best ? "#34d399" : "#166534") : (space.best ? "#94a3b8" : "#64748b"),
                  border: space.seats100.includes("✅") ? "1px solid rgba(16,185,129,0.3)" : "1px solid #e2e8f0",
                }}>
                  100 seats: {space.seats100}
                </span>
                {space.hours && (
                  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 999, background: space.best ? "rgba(255,255,255,0.06)" : "#f8fafc", color: space.best ? "#94a3b8" : "#64748b", border: "1px solid " + (space.best ? "rgba(255,255,255,0.1)" : "#e2e8f0") }}>
                    🕐 {space.hours.split("\n")[0]}
                  </span>
                )}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {space.amenities.map(a => (
                  <span key={a} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: space.best ? "rgba(255,255,255,0.06)" : "#f1f5f9", color: space.best ? "#a7f3d0" : "#475569" }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Over Budget — Slight */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ background: "#fef9c3", border: "1px solid #fde047", borderRadius: 999, padding: "4px 14px", fontSize: 12, fontWeight: 800, color: "#854d0e" }}>
            ⚠️ SLIGHTLY OVER BUDGET — ₹8,000–14,000/seat
          </div>
          <span style={{ color: "#64748b", fontSize: 12 }}>Negotiate 15–25% discount for 100-seat annual contract</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 14 }}>
          {overBudget.filter(s => s.tier === "slight").map((space) => (
            <div key={space.name} style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 14, padding: "18px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <p style={{ color: "#0f172a", fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{space.name}</p>
              <p style={{ color: "#64748b", fontSize: 12, marginBottom: 10 }}>{space.address}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                <MetroBadge walk={space.walk} />
                <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 999, background: "#fef3c7", color: "#92400e" }}>📍 {space.metro}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 10 }}>
                <div>
                  <p style={{ color: "#92400e", fontSize: 10, fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>Per Seat/Month</p>
                  <p style={{ color: "#b45309", fontSize: 18, fontWeight: 800 }}>{space.priceRange}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ color: "#92400e", fontSize: 10, fontWeight: 700, textTransform: "uppercase", marginBottom: 2 }}>100 Seats</p>
                  <p style={{ color: "#78350f", fontSize: 13, fontWeight: 700 }}>{space.totalMonth}</p>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {[space.seats100, space.managed].filter(s => s.includes("✅")).map(s => (
                  <span key={s} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: "#fef9c3", color: "#854d0e" }}>{s}</span>
                ))}
                {space.amenities.slice(0, 3).map(a => (
                  <span key={a} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: "#fef9c3", color: "#78350f" }}>{a}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Over Budget — Far over */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ background: "#fee2e2", border: "1px solid #fca5a5", borderRadius: 999, padding: "4px 14px", fontSize: 12, fontWeight: 800, color: "#7f1d1d" }}>
            ❌ OVER BUDGET — ₹12,000+/seat
          </div>
          <span style={{ color: "#64748b", fontSize: 12 }}>Listed for reference only — 2–3× over budget</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
          {overBudget.filter(s => s.tier === "over").map((space) => (
            <div key={space.name} style={{ background: "#fff5f5", border: "1px solid #fecaca", borderRadius: 12, padding: "16px 18px", opacity: 0.85 }}>
              <p style={{ color: "#374151", fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{space.name}</p>
              <p style={{ color: "#9ca3af", fontSize: 12, marginBottom: 8 }}>{space.address}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ color: "#be123c", fontSize: 15, fontWeight: 800 }}>{space.priceRange}<span style={{ fontSize: 11, fontWeight: 500, color: "#9ca3af" }}>/seat</span></p>
                  <p style={{ color: "#9ca3af", fontSize: 11 }}>{space.totalMonth} total</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <MetroBadge walk={space.walk} />
                  <p style={{ color: "#9ca3af", fontSize: 11, marginTop: 4 }}>{space.metro}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Negotiation Tips */}
      <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", borderRadius: 16, padding: "24px 28px", border: "1px solid rgba(129,140,248,0.2)" }}>
        <h3 style={{ color: "#c4b5fd", fontSize: 15, fontWeight: 800, marginBottom: 16, letterSpacing: "0.04em" }}>
          💡 NEGOTIATION TIPS — Getting 100 Seats at ₹7,000/seat
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {tips.map((tip, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ background: "rgba(129,140,248,0.2)", color: "#a5b4fc", fontWeight: 800, fontSize: 12, width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {i + 1}
              </span>
              <p style={{ color: "#cbd5e1", fontSize: 13, lineHeight: 1.6 }}>{tip}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
