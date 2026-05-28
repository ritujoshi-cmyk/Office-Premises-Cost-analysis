export interface SummaryRow {
  gl: string;
  avgActual: number;
  projectedAvg: number;
  urmilGupta: number | null;
  coWorking: number | null;
  totalProjected: number | null;
  savings: number;
}

export const summaryTableData: SummaryRow[] = [
  { gl: "AC Repair",                        avgActual: 11562,   projectedAvg: 11562,   urmilGupta: 5781,   coWorking: null,   totalProjected: 5781,    savings: 5781 },
  { gl: "Admin Salary",                     avgActual: 103127,  projectedAvg: 103127,  urmilGupta: 51564,  coWorking: null,   totalProjected: 51564,   savings: 51564 },
  { gl: "Coffee Machine Rent",              avgActual: 46500,   projectedAvg: 46500,   urmilGupta: 23250,  coWorking: null,   totalProjected: 23250,   savings: 23250 },
  { gl: "Internet Charges",                 avgActual: 69167,   projectedAvg: 69167,   urmilGupta: 34583,  coWorking: null,   totalProjected: 34583,   savings: 34583 },
  { gl: "Dining Table Rent",                avgActual: 18317,   projectedAvg: 18317,   urmilGupta: 9159,   coWorking: null,   totalProjected: 9159,    savings: 9159 },
  { gl: "Electricity Expenses",             avgActual: 60361,   projectedAvg: 60361,   urmilGupta: 30181,  coWorking: null,   totalProjected: 30181,   savings: 30180 },
  { gl: "Generator Diesel",                 avgActual: 8106,    projectedAvg: 8916,    urmilGupta: 4458,   coWorking: null,   totalProjected: 4458,    savings: 4458 },
  { gl: "House Keeping",                    avgActual: 178326,  projectedAvg: 200115,  urmilGupta: 100058, coWorking: null,   totalProjected: 100058,  savings: 100058 },
  { gl: "Leasehold Improvements",           avgActual: 141432,  projectedAvg: 155575,  urmilGupta: 77788,  coWorking: null,   totalProjected: 77788,   savings: 77788 },
  { gl: "Office Expense",                   avgActual: 111376,  projectedAvg: 123812,  urmilGupta: 61906,  coWorking: null,   totalProjected: 61906,   savings: 61906 },
  { gl: "Basement Rent Cost",               avgActual: 300000,  projectedAvg: 300000,  urmilGupta: 300000, coWorking: null,   totalProjected: 300000,  savings: 0 },
  { gl: "Ground, 1st & 2nd Floor Rent",     avgActual: 1150000, projectedAvg: 1322500, urmilGupta: 440833, coWorking: 700000, totalProjected: 1140833, savings: 181667 },
  { gl: "Other Repairs",                    avgActual: 100000,  projectedAvg: 100000,  urmilGupta: 50000,  coWorking: null,   totalProjected: 50000,   savings: 50000 },
  { gl: "Petty Cash Expense",               avgActual: 8302,    projectedAvg: 8302,    urmilGupta: null,   coWorking: null,   totalProjected: 0,       savings: 8302 },
  { gl: "Ravindra CC (Pantry+Groceries)",   avgActual: 19117,   projectedAvg: 19117,   urmilGupta: 19117,  coWorking: null,   totalProjected: 19117,   savings: 0 },
  { gl: "Repairs & Maintenance – Others",   avgActual: 4418,    projectedAvg: 4860,    urmilGupta: 2430,   coWorking: null,   totalProjected: 2430,    savings: 2430 },
  { gl: "Security Expenses",                avgActual: 12800,   projectedAvg: 12800,   urmilGupta: 14080,  coWorking: null,   totalProjected: 14080,   savings: -1280 },
  { gl: "Suneel CC (Pantry+Groceries)",     avgActual: 35420,   projectedAvg: 35420,   urmilGupta: 35420,  coWorking: null,   totalProjected: 35420,   savings: 0 },
  { gl: "Vending Machine Rent",             avgActual: 9750,    projectedAvg: 9750,    urmilGupta: null,   coWorking: 9750,   totalProjected: 9750,    savings: 0 },
  { gl: "Water Charges",                    avgActual: 343,     projectedAvg: 343,     urmilGupta: 377,    coWorking: null,   totalProjected: 377,     savings: -34 },
];

export const summaryTotals = {
  avgActual: 2388425,
  projectedAvg: 2610546,
  urmilGupta: 1260984,
  coWorking: 709750,
  totalProjected: 1970734,
  savings: 639811,
};

export const summaryBenefits = [
  "Ease of Parking",
  "Better Infrastructure",
  "Cost Effective",
  "Better Security",
  "Visually appealing for investor meetings",
];

export const kpis = {
  currentMonthlyProjected: 2610546,
  urmilGuptaShare: 1260984,
  proposedTotal: 1970734,
  monthlySavings: 639811,
  annualSavings: 7677732,
  savingsPercent: 51,
};

export const summaryData = [
  { category: "Rent (Ground/1st/2nd Floor)", urmilGupta: 440833, coWorking: 700000, savings: 181667 },
  { category: "Basement Rent", urmilGupta: 300000, coWorking: 0, savings: 0 },
  { category: "House Keeping", urmilGupta: 100058, coWorking: 0, savings: 100058 },
  { category: "Leasehold Improvements", urmilGupta: 77788, coWorking: 0, savings: 77788 },
  { category: "Office Expense", urmilGupta: 61906, coWorking: 0, savings: 61906 },
  { category: "Internet Charges", urmilGupta: 34583, coWorking: 0, savings: 34583 },
  { category: "Admin Salary", urmilGupta: 51564, coWorking: 0, savings: 51564 },
  { category: "Other Repairs", urmilGupta: 50000, coWorking: 0, savings: 50000 },
  { category: "Coffee Machine Rent", urmilGupta: 23250, coWorking: 0, savings: 23250 },
  { category: "Suneel CC (Pantry)", urmilGupta: 35420, coWorking: 0, savings: 0 },
  { category: "Ravindra CC (Pantry)", urmilGupta: 19117, coWorking: 0, savings: 0 },
  { category: "Electricity", urmilGupta: 30181, coWorking: 0, savings: 30181 },
  { category: "Vending Machine Rent", urmilGupta: 0, coWorking: 9750, savings: 0 },
  { category: "Security", urmilGupta: 14080, coWorking: 0, savings: 0 },
  { category: "Dining Table Rent", urmilGupta: 9159, coWorking: 0, savings: 9159 },
  { category: "Petty Cash", urmilGupta: 0, coWorking: 0, savings: 8302 },
  { category: "Generator Diesel", urmilGupta: 4458, coWorking: 0, savings: 4458 },
  { category: "AC Repair", urmilGupta: 5781, coWorking: 0, savings: 5781 },
  { category: "Repairs & Maintenance", urmilGupta: 2430, coWorking: 0, savings: 2430 },
  { category: "Water Charges", urmilGupta: 377, coWorking: 0, savings: 0 },
];

export const monthlyActuals = [
  { month: "Sep", amount: 1906698 },
  { month: "Oct", amount: 2120058 },
  { month: "Nov", amount: 2242607 },
  { month: "Dec", amount: 2862589 },
  { month: "Jan", amount: 2110361 },
  { month: "Feb", amount: 2482860 },
  { month: "Mar", amount: 2305821 },
];

export type VendorStatus = "eliminated" | "retained" | "reduced";

export interface VendorRow {
  gl: string;
  vendor: string;
  frequency: string;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
  jan: number;
  feb: number;
  mar: number;
  projected: number;
  remarks: string;
  status: VendorStatus;
  statusNote: string;
}

export const vendorData: VendorRow[] = [
  {
    gl: "Internet Charges", vendor: "TATA Teleservices Limited", frequency: "Quarterly",
    sep: 0, oct: 207500, nov: 0, dec: 207500, jan: 0, feb: 0, mar: 207500, projected: 69167,
    remarks: "Considered last 3 months average",
    status: "eliminated", statusNote: "Internet included in co-working package",
  },
  {
    gl: "Electricity", vendor: "Urmil Gupta", frequency: "Monthly",
    sep: 85090, oct: 54150, nov: 48390, dec: 76580, jan: 53020, feb: 58280, mar: 47020, projected: 60361,
    remarks: "Mar cost + 10% increase",
    status: "eliminated", statusNote: "Electricity included in co-working fee",
  },
  {
    gl: "House Keeping", vendor: "ASM Facility Management", frequency: "Monthly",
    sep: 89387, oct: 86209, nov: 95763, dec: 107113, jan: 167713, feb: 202083, mar: 200115, projected: 200115,
    remarks: "Mar cost + 10% increase",
    status: "eliminated", statusNote: "Housekeeping managed by co-working space",
  },
  {
    gl: "Leasehold Improvements", vendor: "Mahek Kraft", frequency: "As required",
    sep: 0, oct: 0, nov: 80110, dec: 493618, jan: 0, feb: 0, mar: 0, projected: 90157,
    remarks: "7-month avg + 10% increase",
    status: "eliminated", statusNote: "No capital expenditure in co-working",
  },
  {
    gl: "Leasehold Improvements", vendor: "A.S. Interior", frequency: "As required",
    sep: 0, oct: 0, nov: 133251, dec: 0, jan: 0, feb: 0, mar: 0, projected: 20939,
    remarks: "7-month avg + 10% increase",
    status: "eliminated", statusNote: "No capital expenditure in co-working",
  },
  {
    gl: "Leasehold Improvements", vendor: "Phool Chandra Electrician", frequency: "As required",
    sep: 0, oct: 25375, nov: 108361, dec: 104285, jan: 14702, feb: 30324, mar: 0, projected: 44479,
    remarks: "7-month avg + 10% increase",
    status: "eliminated", statusNote: "No capital expenditure in co-working",
  },
  {
    gl: "Office Expense", vendor: "Sai Lucky General Store", frequency: "Monthly",
    sep: 37723, oct: 28665, nov: 41566, dec: 64099, jan: 60881, feb: 42066, mar: 41630, projected: 49756,
    remarks: "7-month avg + 10% increase",
    status: "reduced", statusNote: "Partially covered by co-working amenities",
  },
  {
    gl: "Office Expense", vendor: "Providers MSME", frequency: "Monthly",
    sep: 0, oct: 32156, nov: 43378, dec: 26420, jan: 30688, feb: 30358, mar: 30300, projected: 30376,
    remarks: "7-month avg + 10% increase",
    status: "reduced", statusNote: "Partially covered by co-working amenities",
  },
  {
    gl: "Office Expense", vendor: "Supermarket Grocery Suppliers", frequency: "Monthly",
    sep: 33474, oct: 27660, nov: 0, dec: 0, jan: 17995, feb: 8300, mar: 0, projected: 13739,
    remarks: "7-month avg + 10% increase",
    status: "reduced", statusNote: "Reduced with pantry services available",
  },
  {
    gl: "Dining Table Rent", vendor: "Furlenco", frequency: "Monthly",
    sep: 0, oct: 0, nov: 0, dec: 18317, jan: 18317, feb: 18317, mar: 18317, projected: 18317,
    remarks: "Same as Dec (advance paid)",
    status: "eliminated", statusNote: "Furniture provided by co-working space",
  },
  {
    gl: "Vending Machine Rent", vendor: "Innovative Retail Concepts", frequency: "Monthly",
    sep: 9750, oct: 9750, nov: 9750, dec: 9750, jan: 9750, feb: 9750, mar: 9750, projected: 9750,
    remarks: "Same as Mar cost",
    status: "retained", statusNote: "Continued in co-working space",
  },
  {
    gl: "Coffee Machine Rent", vendor: "Muhavra Enterprises", frequency: "Monthly",
    sep: 0, oct: 0, nov: 0, dec: 0, jan: 0, feb: 46500, mar: 46500, projected: 46500,
    remarks: "Same as Mar cost",
    status: "retained", statusNote: "Continued in co-working space",
  },
  {
    gl: "Office Rent", vendor: "Urmil Gupta (Basement)", frequency: "Monthly",
    sep: 300000, oct: 300000, nov: 300000, dec: 300000, jan: 300000, feb: 300000, mar: 300000, projected: 300000,
    remarks: "Same as Mar cost",
    status: "retained", statusNote: "Basement continues as-is",
  },
  {
    gl: "Office Rent", vendor: "Urmil Gupta (Floors)", frequency: "Monthly",
    sep: 1150000, oct: 1150000, nov: 1150000, dec: 1150000, jan: 1150000, feb: 1150000, mar: 1150000, projected: 1322500,
    remarks: "Mar cost + 15% increase",
    status: "reduced", statusNote: "Replaced by co-working rent ₹7,00,000/month",
  },
  {
    gl: "Security", vendor: "Urmil Gupta", frequency: "Monthly",
    sep: 12800, oct: 12800, nov: 12800, dec: 12800, jan: 12800, feb: 12800, mar: 12800, projected: 12800,
    remarks: "7-month avg + 10% increase",
    status: "eliminated", statusNote: "Security included in co-working fee",
  },
  {
    gl: "Generator Diesel", vendor: "Urmil Gupta", frequency: "Monthly",
    sep: 12000, oct: 14400, nov: 5640, dec: 7200, jan: 0, feb: 8750, mar: 8750, projected: 8916,
    remarks: "7-month avg + 10% increase",
    status: "eliminated", statusNote: "Power backup included in co-working",
  },
  {
    gl: "Repairs & Maintenance", vendor: "Urmil Gupta", frequency: "Annually",
    sep: 0, oct: 0, nov: 0, dec: 0, jan: 0, feb: 53020, mar: 0, projected: 4860,
    remarks: "Annual cost + 10% increase",
    status: "eliminated", statusNote: "Maintenance handled by co-working provider",
  },
  {
    gl: "Admin Salary", vendor: "Sudhama+Sarita+Guddi+Poonam", frequency: "Monthly",
    sep: 0, oct: 0, nov: 0, dec: 0, jan: 0, feb: 103127, mar: 0, projected: 103127,
    remarks: "Based on Apr figures",
    status: "reduced", statusNote: "Reduced admin overhead with managed facilities",
  },
  {
    gl: "Petty Cash", vendor: "Petty Cash", frequency: "Monthly",
    sep: 7910, oct: 8714, nov: 7970, dec: 9656, jan: 7100, feb: 6325, mar: 10440, projected: 8302,
    remarks: "7-month avg + 10% increase",
    status: "reduced", statusNote: "Reduced operational petty expenses",
  },
  {
    gl: "AC Repair", vendor: "Shanti Engineering Service", frequency: "Annually",
    sep: 0, oct: 0, nov: 0, dec: 0, jan: 0, feb: 138739, mar: 0, projected: 11562,
    remarks: "Annual cost",
    status: "eliminated", statusNote: "HVAC maintained by co-working provider",
  },
  {
    gl: "Other Repairs", vendor: "Other Repairs", frequency: "Monthly",
    sep: 100000, oct: 100000, nov: 100000, dec: 100000, jan: 100000, feb: 100000, mar: 100000, projected: 100000,
    remarks: "7-month average",
    status: "eliminated", statusNote: "All repairs covered by co-working provider",
  },
  {
    gl: "Pantry (Ravindra CC)", vendor: "Ravindra CC", frequency: "Monthly",
    sep: 0, oct: 9357, nov: 13001, dec: 26243, jan: 12867, feb: 27420, mar: 44934, projected: 19117,
    remarks: "7-month avg + 10% increase",
    status: "retained", statusNote: "Pantry costs continue",
  },
  {
    gl: "Pantry (Suneel CC)", vendor: "Suneel CC", frequency: "Monthly",
    sep: 17263, oct: 14472, nov: 22277, dec: 50744, jan: 54058, feb: 41461, mar: 47665, projected: 35420,
    remarks: "7-month avg + 10% increase",
    status: "retained", statusNote: "Pantry costs continue",
  },
  {
    gl: "Water Charges", vendor: "Urmil Gupta", frequency: "Monthly",
    sep: 800, oct: 1600, nov: 0, dec: 0, jan: 0, feb: 0, mar: 0, projected: 343,
    remarks: "7-month avg + 10% increase",
    status: "eliminated", statusNote: "Water included in co-working fee",
  },
];

export const benefits = [
  {
    title: "₹76L+ Annual Savings",
    description: "₹6.40L/month savings directly improves the bottom line from day one.",
    icon: "rupee",
    color: "emerald",
    highlight: true,
  },
  {
    title: "Zero Maintenance Cost",
    description: "Housekeeping, AC, generator, plumbing — all managed by the provider.",
    icon: "tool",
    color: "indigo",
    highlight: false,
  },
  {
    title: "No Capital Expenditure",
    description: "₹1.56L/month in leasehold improvements eliminated. All fitouts provided.",
    icon: "building",
    color: "violet",
    highlight: false,
  },
  {
    title: "Ease of Parking",
    description: "Dedicated managed parking for employees and visitors at no extra cost.",
    icon: "car",
    color: "blue",
    highlight: false,
  },
  {
    title: "Investor-Ready",
    description: "Modern, professionally designed spaces — ideal for investor & board meetings.",
    icon: "star",
    color: "amber",
    highlight: false,
  },
  {
    title: "Better Security",
    description: "24×7 professional security, CCTV & access control included in the fee.",
    icon: "shield",
    color: "rose",
    highlight: false,
  },
  {
    title: "Flexible & Scalable",
    description: "Month-to-month contracts. Scale seats up or down with zero penalties.",
    icon: "scale",
    color: "teal",
    highlight: false,
  },
  {
    title: "Modern Infrastructure",
    description: "High-speed fibre, premium meeting rooms, and video-conferencing included.",
    icon: "wifi",
    color: "cyan",
    highlight: false,
  },
  {
    title: "Reduced Admin Burden",
    description: "Facilities fully managed — your admin team focuses on business, not building ops.",
    icon: "users",
    color: "orange",
    highlight: false,
  },
];
