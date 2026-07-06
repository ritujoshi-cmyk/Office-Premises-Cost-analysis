import type { SummaryRow, VendorRow } from "./data";
import {
  summaryTableData as v1SummaryTableData,
  summaryTotals as v1SummaryTotals,
  summaryData as v1SummaryData,
  monthlyActuals,
  vendorData,
  summaryBenefits,
  benefits as v1Benefits,
} from "./data";

export interface VersionData {
  id: string;
  label: string;
  kpis: {
    avgActual: number;
    currentMonthlyProjected: number;
    urmilGuptaShare: number;
    proposedTotal: number;
    monthlySavings: number;
    annualSavings: number;
    savingsPercent: number;
  };
  summaryTableData: SummaryRow[];
  summaryTotals: {
    avgActual: number;
    projectedAvg: number;
    urmilGupta: number;
    coWorking: number;
    totalProjected: number;
    savings: number;
  };
  summaryData: { category: string; urmilGupta: number; coWorking: number; savings: number }[];
  monthlyActuals: { month: string; amount: number }[];
  vendorData: VendorRow[];
  benefits: {
    title: string;
    description: string;
    icon: string;
    color: string;
    highlight: boolean;
    caveat?: string;
  }[];
  summaryBenefits: string[];
}

const v2SummaryTableData: SummaryRow[] = v1SummaryTableData.map(row => {
  switch (row.gl) {
    case "Ground, 1st & 2nd Floor Rent":
      return { ...row, coWorking: 1200000, totalProjected: 1640833, savings: -318333 };
    default:
      return row;
  }
});

const v2SummaryData = v1SummaryData.map(row =>
  row.category === "Rent (Ground/1st/2nd Floor)"
    ? { ...row, coWorking: 1200000, savings: -318333 }
    : row
);

const v2Benefits = [
  {
    title: "₹85.28L Annual Savings",
    description: "₹7.11L/month savings directly improves the bottom line from day one.",
    icon: "rupee",
    color: "emerald",
    highlight: true,
  },
  {
    title: "₹1.21Cr+ Savings Post-2027",
    description: "Basement lock-in expires in 2027 — the ₹3L/month basement rent is also eliminated, pushing monthly savings to ₹10.11L and annual savings beyond ₹1.21Cr.",
    icon: "calendar",
    color: "emerald",
    highlight: true,
    caveat: "Subject to the requirement of additional space for storage for logistics and staff to manage it.",
  },
  ...v1Benefits.slice(2),
];

export const versions: VersionData[] = [
  {
    id: "v1",
    label: "V1 — Co-Working @ ₹7L/month",
    kpis: {
      avgActual: 2818778,
      currentMonthlyProjected: 3137581,
      urmilGuptaShare: 1192359,
      proposedTotal: 1926889,
      monthlySavings: 1210692,
      annualSavings: 14528304,
      savingsPercent: 39,
    },
    summaryTableData: v1SummaryTableData,
    summaryTotals: v1SummaryTotals,
    summaryData: v1SummaryData,
    monthlyActuals,
    vendorData,
    benefits: v1Benefits,
    summaryBenefits,
  },
  {
    id: "v2",
    label: "V2 — Co-Working @ ₹12L/month",
    kpis: {
      avgActual: 2818778,
      currentMonthlyProjected: 3137581,
      urmilGuptaShare: 1192359,
      proposedTotal: 2426889,
      monthlySavings: 710692,
      annualSavings: 8528304,
      savingsPercent: 23,
    },
    summaryTableData: v2SummaryTableData,
    summaryTotals: {
      avgActual: 2818778,
      projectedAvg: 3137581,
      urmilGupta: 1192359,
      coWorking: 1234530,
      totalProjected: 2426889,
      savings: 710692,
    },
    summaryData: v2SummaryData,
    monthlyActuals,
    vendorData,
    benefits: v2Benefits,
    summaryBenefits,
  },
];
