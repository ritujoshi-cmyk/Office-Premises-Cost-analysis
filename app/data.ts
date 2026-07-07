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
  { gl: "AC Repair",                        avgActual: 11562,   projectedAvg: 15000,   urmilGupta: 5000,   coWorking: null,   totalProjected: 5000,    savings: 10000 },
  { gl: "Admin Salary",                     avgActual: 247931,  projectedAvg: 247931,  urmilGupta: 71517,  coWorking: 24780,  totalProjected: 96297,   savings: 151634 },
  { gl: "Coffee Machine Rent",              avgActual: 46500,   projectedAvg: 46500,   urmilGupta: 11625,  coWorking: null,   totalProjected: 11625,   savings: 34875 },
  { gl: "Internet Charges",                 avgActual: 94167,   projectedAvg: 100000,  urmilGupta: 50000,  coWorking: null,   totalProjected: 50000,   savings: 50000 },
  { gl: "Dining Table Rent",                avgActual: 12211,   projectedAvg: 15000,   urmilGupta: 7500,   coWorking: null,   totalProjected: 7500,    savings: 7500 },
  { gl: "Electricity Expenses",             avgActual: 75359,   projectedAvg: 80000,   urmilGupta: 26667,  coWorking: null,   totalProjected: 26667,   savings: 53333 },
  { gl: "Generator Diesel",                 avgActual: 6304,    projectedAvg: 10000,   urmilGupta: 3333,   coWorking: null,   totalProjected: 3333,    savings: 6667 },
  { gl: "House Keeping",                    avgActual: 267906,  projectedAvg: 240000,  urmilGupta: 80000,  coWorking: null,   totalProjected: 80000,   savings: 160000 },
  { gl: "Leasehold Improvements",           avgActual: 132284,  projectedAvg: 190000,  urmilGupta: 63333,  coWorking: null,   totalProjected: 63333,   savings: 126667 },
  { gl: "Office Expense",                   avgActual: 112053,  projectedAvg: 132600,  urmilGupta: 33150,  coWorking: null,   totalProjected: 33150,   savings: 99450 },
  { gl: "Basement Rent Cost",               avgActual: 300000,  projectedAvg: 300000,  urmilGupta: 300000, coWorking: null,   totalProjected: 300000,  savings: 0 },
  { gl: "Ground, 1st & 2nd Floor Rent",     avgActual: 1150000, projectedAvg: 1322500, urmilGupta: 440833, coWorking: 700000, totalProjected: 1140833, savings: 181667 },
  { gl: "Cab Charges",                      avgActual: 118637,  projectedAvg: 150000,  urmilGupta: 0,      coWorking: 100000, totalProjected: 100000,  savings: 50000 },
  { gl: "Petty Cash Expense",               avgActual: 15556,   projectedAvg: 20000,   urmilGupta: 10000,  coWorking: null,   totalProjected: 10000,   savings: 10000 },
  { gl: "Other Repairs & CC Spends",        avgActual: 200000,  projectedAvg: 240000,  urmilGupta: 80000,  coWorking: null,   totalProjected: 80000,   savings: 160000 },
  { gl: "Security Expenses",                avgActual: 12800,   projectedAvg: 12800,   urmilGupta: 6400,   coWorking: null,   totalProjected: 6400,    savings: 6400 },
  { gl: "Lift Maintenance",                 avgActual: 4418,    projectedAvg: 5000,    urmilGupta: 2500,   coWorking: null,   totalProjected: 2500,    savings: 2500 },
  { gl: "Vending Machine Rent",             avgActual: 9250,    projectedAvg: 9750,    urmilGupta: null,   coWorking: 9750,   totalProjected: 9750,    savings: 0 },
  { gl: "Water Charges",                    avgActual: 1841,    projectedAvg: 500,     urmilGupta: 500,    coWorking: null,   totalProjected: 500,     savings: 0 },
];

export const summaryTotals = {
  avgActual: 2818778,
  projectedAvg: 3137581,
  urmilGupta: 1192359,
  coWorking: 834530,
  totalProjected: 2026889,
  savings: 1110692,
};

export const summaryBenefits = [
  "Ease of Parking",
  "Better Infrastructure",
  "Cost Effective",
  "Better Security",
  "Visually appealing for investor meetings",
];

export const kpis = {
  avgActual: 2818778,
  currentMonthlyProjected: 3137581,
  urmilGuptaShare: 1192359,
  proposedTotal: 2026889,
  monthlySavings: 1110692,
  annualSavings: 13328304,
  savingsPercent: 35,
};

export const summaryData = [
  { category: "Rent (Ground/1st/2nd Floor)", urmilGupta: 440833, coWorking: 700000, savings: 181667 },
  { category: "Basement Rent",              urmilGupta: 300000, coWorking: 0,      savings: 0 },
  { category: "House Keeping",              urmilGupta: 80000,  coWorking: 0,      savings: 160000 },
  { category: "Other Repairs & CC Spends",  urmilGupta: 80000,  coWorking: 0,      savings: 160000 },
  { category: "Leasehold Improvements",     urmilGupta: 63333,  coWorking: 0,      savings: 126667 },
  { category: "Cab Charges",                urmilGupta: 150000, coWorking: 100000, savings: 50000 },
  { category: "Office Expense",             urmilGupta: 33150,  coWorking: 0,      savings: 99450 },
  { category: "Admin Salary",               urmilGupta: 71517,  coWorking: 24780,  savings: 151634 },
  { category: "Internet Charges",           urmilGupta: 50000,  coWorking: 0,      savings: 50000 },
  { category: "Electricity",                urmilGupta: 26667,  coWorking: 0,      savings: 53333 },
  { category: "Vending Machine Rent",       urmilGupta: 0,      coWorking: 9750,   savings: 0 },
  { category: "Coffee Machine Rent",        urmilGupta: 11625,  coWorking: 0,      savings: 34875 },
  { category: "Dining Table Rent",          urmilGupta: 7500,   coWorking: 0,      savings: 7500 },
  { category: "Petty Cash",                 urmilGupta: 10000,  coWorking: 0,      savings: 10000 },
  { category: "Security",                   urmilGupta: 6400,   coWorking: 0,      savings: 6400 },
  { category: "Generator Diesel",           urmilGupta: 3333,   coWorking: 0,      savings: 6667 },
  { category: "AC Repair",                  urmilGupta: 5000,   coWorking: 0,      savings: 10000 },
  { category: "Lift Maintenance",           urmilGupta: 2500,   coWorking: 0,      savings: 2500 },
  { category: "Water Charges",              urmilGupta: 500,    coWorking: 0,      savings: 0 },
];

export const monthlyActuals = [
  { month: "Sep", amount: 2121525 },
  { month: "Oct", amount: 2402515 },
  { month: "Nov", amount: 2439359 },
  { month: "Dec", amount: 3015945 },
  { month: "Jan", amount: 2351336 },
  { month: "Feb", amount: 2792458 },
  { month: "Mar", amount: 2690713 },
  { month: "Apr", amount: 2776251 },
  { month: "May", amount: 2589878 },
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
  apr: number;
  may: number;
  projected: number;
  remarks: string;
  status: VendorStatus;
  statusNote: string;
}

export const vendorData: VendorRow[] = [
  {
    gl: "Internet Charges", vendor: "Bharti Airtel Ltd", frequency: "Quarterly",
    sep: 0, oct: 75000, nov: 0, dec: 0, jan: 75000, feb: 0, mar: 0, apr: 75000, may: 0, projected: 25000,
    remarks: "Quarterly avg (3 payments/year)",
    status: "eliminated", statusNote: "Internet included in co-working package",
  },
  {
    gl: "Internet Charges", vendor: "TATA Teleservices Limited", frequency: "Quarterly",
    sep: 0, oct: 207500, nov: 0, dec: 207500, jan: 0, feb: 0, mar: 207500, apr: 0, may: 0, projected: 75000,
    remarks: "Quarterly avg (3 payments/year)",
    status: "eliminated", statusNote: "Internet included in co-working package",
  },
  {
    gl: "Electricity", vendor: "Urmil Gupta", frequency: "Monthly",
    sep: 85090, oct: 54150, nov: 48390, dec: 76580, jan: 53020, feb: 58280, mar: 47020, apr: 105300, may: 150400, projected: 80000,
    remarks: "9-month avg + buffer",
    status: "eliminated", statusNote: "Electricity included in co-working fee",
  },
  {
    gl: "House Keeping", vendor: "ASM Facility Management", frequency: "Monthly",
    sep: 89387, oct: 86209, nov: 95763, dec: 107113, jan: 167713, feb: 202083, mar: 200115, apr: 200115, may: 234584, projected: 240000,
    remarks: "Latest cost + buffer",
    status: "eliminated", statusNote: "Housekeeping managed by co-working space",
  },
  {
    gl: "House Keeping", vendor: "Fulmani Hansda", frequency: "Monthly",
    sep: 16500, oct: 16500, nov: 16500, dec: 16500, jan: 16500, feb: 18500, mar: 0, apr: 0, may: 0, projected: 0,
    remarks: "No longer active",
    status: "eliminated", statusNote: "Housekeeping managed by co-working space",
  },
  {
    gl: "House Keeping", vendor: "Manish", frequency: "Monthly",
    sep: 18500, oct: 18500, nov: 18500, dec: 18500, jan: 18500, feb: 0, mar: 0, apr: 0, may: 0, projected: 0,
    remarks: "No longer active",
    status: "eliminated", statusNote: "Housekeeping managed by co-working space",
  },
  {
    gl: "House Keeping", vendor: "Shikha Tiwari", frequency: "Monthly",
    sep: 0, oct: 0, nov: 22000, dec: 22000, jan: 22000, feb: 20200, mar: 20200, apr: 0, may: 0, projected: 0,
    remarks: "No longer active",
    status: "eliminated", statusNote: "Housekeeping managed by co-working space",
  },
  {
    gl: "Leasehold Improvements", vendor: "A.S. Interior", frequency: "As required",
    sep: 0, oct: 0, nov: 133251, dec: 0, jan: 0, feb: 0, mar: 0, apr: 7627, may: 0, projected: 25000,
    remarks: "As-required basis",
    status: "eliminated", statusNote: "No capital expenditure in co-working",
  },
  {
    gl: "Leasehold Improvements", vendor: "Mahek Kraft", frequency: "As required",
    sep: 0, oct: 0, nov: 80110, dec: 493618, jan: 0, feb: 0, mar: 0, apr: 0, may: 0, projected: 100000,
    remarks: "As-required basis",
    status: "eliminated", statusNote: "No capital expenditure in co-working",
  },
  {
    gl: "Leasehold Improvements", vendor: "Santi Engineering Service", frequency: "As required",
    sep: 0, oct: 0, nov: 0, dec: 0, jan: 0, feb: 0, mar: 0, apr: 117575, may: 0, projected: 15000,
    remarks: "As-required basis",
    status: "eliminated", statusNote: "No capital expenditure in co-working",
  },
  {
    gl: "Leasehold Improvements", vendor: "Phool Chandra Electrician", frequency: "As required",
    sep: 0, oct: 25375, nov: 108361, dec: 104285, jan: 14702, feb: 30324, mar: 0, apr: 0, may: 75325, projected: 50000,
    remarks: "As-required basis",
    status: "eliminated", statusNote: "No capital expenditure in co-working",
  },
  {
    gl: "Office Expense", vendor: "A.S. Interior", frequency: "As required",
    sep: 0, oct: 0, nov: 0, dec: 27463, jan: 0, feb: 0, mar: 0, apr: 0, may: 0, projected: 5000,
    remarks: "As-required basis",
    status: "reduced", statusNote: "Partially covered by co-working amenities",
  },
  {
    gl: "Office Expense", vendor: "Plants House", frequency: "Monthly",
    sep: 0, oct: 0, nov: 0, dec: 13800, jan: 0, feb: 39740, mar: 0, apr: 0, may: 6000, projected: 10000,
    remarks: "9-month avg",
    status: "retained", statusNote: "Continued in co-working space",
  },
  {
    gl: "Office Expense", vendor: "Saral Pest Management", frequency: "As required",
    sep: 2000, oct: 0, nov: 0, dec: 0, jan: 0, feb: 0, mar: 0, apr: 0, may: 0, projected: 350,
    remarks: "As-required basis",
    status: "eliminated", statusNote: "Pest control included in co-working",
  },
  {
    gl: "Office Expense", vendor: "Sai Lucky General Store", frequency: "Monthly",
    sep: 37723, oct: 28665, nov: 41566, dec: 64099, jan: 60881, feb: 42066, mar: 41630, apr: 82437, may: 14383, projected: 50000,
    remarks: "9-month avg + buffer",
    status: "reduced", statusNote: "Partially covered by co-working amenities",
  },
  {
    gl: "Office Expense", vendor: "Resident Welfare Association", frequency: "Quarterly",
    sep: 0, oct: 2250, nov: 0, dec: 0, jan: 2250, feb: 0, mar: 0, apr: 2250, may: 0, projected: 750,
    remarks: "Quarterly avg",
    status: "retained", statusNote: "Continued in co-working space",
  },
  {
    gl: "Office Expense", vendor: "Sonheri Enterprise MSME", frequency: "As required",
    sep: 13500, oct: 0, nov: 13350, dec: 0, jan: 7950, feb: 16800, mar: 9900, apr: 12364, may: 10395, projected: 10000,
    remarks: "9-month avg",
    status: "reduced", statusNote: "Partially covered by co-working amenities",
  },
  {
    gl: "Office Expense", vendor: "Supermarket Grocery Suppliers", frequency: "Monthly",
    sep: 33474, oct: 27660, nov: 0, dec: 0, jan: 17995, feb: 8300, mar: 0, apr: 0, may: 0, projected: 15000,
    remarks: "9-month avg + buffer",
    status: "reduced", statusNote: "Reduced with pantry services available",
  },
  {
    gl: "Office Expense", vendor: "Providers MSME", frequency: "Monthly",
    sep: 0, oct: 32156, nov: 43378, dec: 26420, jan: 30688, feb: 30358, mar: 30300, apr: 55271, may: 32047, projected: 35000,
    remarks: "9-month avg + buffer",
    status: "reduced", statusNote: "Partially covered by co-working amenities",
  },
  {
    gl: "Office Expense", vendor: "Technomirasis Security Systems", frequency: "Yearly",
    sep: 0, oct: 0, nov: 0, dec: 0, jan: 0, feb: 0, mar: 0, apr: 13700, may: 0, projected: 1500,
    remarks: "Annual contract",
    status: "eliminated", statusNote: "Security systems managed by co-working",
  },
  {
    gl: "Office Expense", vendor: "Securemate Global Solutions", frequency: "As required",
    sep: 0, oct: 0, nov: 0, dec: 0, jan: 33270, feb: 0, mar: 0, apr: 0, may: 0, projected: 5000,
    remarks: "As-required basis",
    status: "eliminated", statusNote: "Security managed by co-working provider",
  },
  {
    gl: "Dining Table Rent", vendor: "Furlenco", frequency: "Monthly",
    sep: 0, oct: 0, nov: 0, dec: 18317, jan: 18317, feb: 18317, mar: 18317, apr: 0, may: 0, projected: 15000,
    remarks: "Latest cost + buffer",
    status: "eliminated", statusNote: "Furniture provided by co-working space",
  },
  {
    gl: "Vending Machine Rent", vendor: "Innovative Retail Concepts", frequency: "Monthly",
    sep: 9750, oct: 9750, nov: 9750, dec: 9750, jan: 9750, feb: 9750, mar: 9750, apr: 15000, may: 0, projected: 9750,
    remarks: "Same as actuals",
    status: "retained", statusNote: "Continued in co-working space",
  },
  {
    gl: "Coffee Machine Rent", vendor: "Muhavra Enterprises", frequency: "Monthly",
    sep: 0, oct: 0, nov: 0, dec: 0, jan: 0, feb: 46500, mar: 46500, apr: 46500, may: 46500, projected: 46500,
    remarks: "Same as latest cost",
    status: "retained", statusNote: "Continued in co-working space",
  },
  {
    gl: "Office Rent", vendor: "Urmil Gupta (Basement)", frequency: "Monthly",
    sep: 300000, oct: 300000, nov: 300000, dec: 300000, jan: 300000, feb: 300000, mar: 300000, apr: 300000, may: 300000, projected: 300000,
    remarks: "Fixed monthly rent",
    status: "retained", statusNote: "Basement continues as-is",
  },
  {
    gl: "Office Rent", vendor: "Urmil Gupta (Floors)", frequency: "Monthly",
    sep: 1150000, oct: 1150000, nov: 1150000, dec: 1150000, jan: 1150000, feb: 1150000, mar: 1150000, apr: 1150000, may: 1150000, projected: 1322500,
    remarks: "Current rent + 15% escalation",
    status: "reduced", statusNote: "Replaced by co-working rent ₹12,00,000/month",
  },
  {
    gl: "Lift Maintenance", vendor: "Urmil Gupta", frequency: "Annually",
    sep: 0, oct: 0, nov: 0, dec: 0, jan: 0, feb: 53020, mar: 0, apr: 0, may: 0, projected: 5000,
    remarks: "Annual cost amortised",
    status: "eliminated", statusNote: "Maintenance handled by co-working provider",
  },
  {
    gl: "Security Expenses", vendor: "Urmil Gupta", frequency: "Monthly",
    sep: 12800, oct: 12800, nov: 12800, dec: 12800, jan: 12800, feb: 12800, mar: 12800, apr: 12800, may: 12800, projected: 12800,
    remarks: "Fixed monthly",
    status: "eliminated", statusNote: "Security included in co-working fee",
  },
  {
    gl: "Water Charges", vendor: "Urmil Gupta", frequency: "Monthly",
    sep: 800, oct: 1600, nov: 0, dec: 0, jan: 0, feb: 0, mar: 0, apr: 10000, may: 4165, projected: 500,
    remarks: "9-month avg + buffer",
    status: "eliminated", statusNote: "Water included in co-working fee",
  },
  {
    gl: "Petty Cash Expense", vendor: "Petty Cash", frequency: "Monthly",
    sep: 20000, oct: 20000, nov: 20000, dec: 20000, jan: 20000, feb: 20000, mar: 20000, apr: 0, may: 0, projected: 20000,
    remarks: "Fixed monthly allocation",
    status: "reduced", statusNote: "Reduced operational petty expenses",
  },
  {
    gl: "Admin Salary", vendor: "Sudhama+Sarita+Guddi+Poonam", frequency: "Monthly",
    sep: 0, oct: 0, nov: 0, dec: 0, jan: 0, feb: 247931, mar: 247931, apr: 247931, may: 247931, projected: 247931,
    remarks: "Based on actuals",
    status: "reduced", statusNote: "Reduced admin overhead with managed facilities",
  },
  {
    gl: "Generator Diesel", vendor: "Urmil Gupta", frequency: "Monthly",
    sep: 12000, oct: 14400, nov: 5640, dec: 7200, jan: 0, feb: 8750, mar: 8750, apr: 0, may: 0, projected: 10000,
    remarks: "9-month avg + buffer",
    status: "eliminated", statusNote: "Power backup included in co-working",
  },
  {
    gl: "AC Repair", vendor: "Shanti Engineering Service", frequency: "Annually",
    sep: 0, oct: 0, nov: 0, dec: 0, jan: 0, feb: 138739, mar: 0, apr: 0, may: 0, projected: 15000,
    remarks: "Annual cost amortised",
    status: "eliminated", statusNote: "HVAC maintained by co-working provider",
  },
  {
    gl: "Other Repairs & CC Spends", vendor: "Other Repairs + Ravindra & Suneel CC (Pantry/Groceries)", frequency: "Monthly",
    sep: 200000, oct: 200000, nov: 200000, dec: 200000, jan: 200000, feb: 200000, mar: 200000, apr: 200000, may: 200000, projected: 240000,
    remarks: "9-month avg + buffer",
    status: "reduced", statusNote: "Partial pantry costs continue at co-working",
  },
  {
    gl: "Cab Charges", vendor: "Sewak Cab", frequency: "Monthly",
    sep: 120000, oct: 120000, nov: 120000, dec: 120000, jan: 120000, feb: 120000, mar: 120000, apr: 122382, may: 105348, projected: 150000,
    remarks: "Current spend + buffer",
    status: "reduced", statusNote: "Reduced cab service (₹1L/month) still required at co-working location",
  },
];

export const benefits = [
  {
    title: "₹1.33Cr+ Annual Savings",
    description: "₹11.11L/month savings directly improves the bottom line from day one.",
    icon: "rupee",
    color: "emerald",
    highlight: true,
  },
  {
    title: "₹1.69Cr+ Savings Post-2027",
    description: "Basement lock-in expires in 2027 — the ₹3L/month basement rent is also eliminated, pushing monthly savings to ₹14.11L and annual savings beyond ₹1.69Cr.",
    icon: "calendar",
    color: "emerald",
    highlight: true,
    caveat: "Subject to the requirement of additional space for storage for logistics and staff to manage it.",
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
    description: "₹1.27L/month in leasehold improvements eliminated. All fitouts provided.",
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
