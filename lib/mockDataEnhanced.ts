import { 
  AnalysisResponse, 
  FinancialRatio, 
  HeatMapMetric, 
  BenfordAnalysis,
  RiskAlert,
  RiskCategory,
  ComplianceItem,
  DocumentReference,
  AuditModulePerformance,
  PortfolioCompany
} from './types';

// Financial Ratios Data
export const mockFinancialRatios: FinancialRatio[] = [
  {
    name: 'Quick Ratio',
    category: 'liquidity',
    currentValue: 1.23,
    previousValue: 0.98,
    percentile: 78,
    trend: 25.5,
    rating: 'excellent',
    sparklineData: [0.85, 0.92, 0.98, 1.15, 1.23]
  },
  {
    name: 'Debt-to-Equity',
    category: 'leverage',
    currentValue: 0.42,
    previousValue: 0.58,
    percentile: 82,
    trend: -27.6,
    rating: 'excellent',
    sparklineData: [0.65, 0.58, 0.52, 0.45, 0.42]
  },
  {
    name: 'Interest Coverage',
    category: 'leverage',
    currentValue: 12.40,
    previousValue: 8.70,
    percentile: 85,
    trend: 42.5,
    rating: 'excellent',
    sparklineData: [7.5, 8.2, 8.7, 10.5, 12.4]
  },
  {
    name: 'Return on Assets',
    category: 'profitability',
    currentValue: 6.80,
    previousValue: 5.20,
    percentile: 71,
    trend: 30.8,
    rating: 'good',
    sparklineData: [4.8, 5.0, 5.2, 6.1, 6.8]
  },
  {
    name: 'Return on Equity',
    category: 'profitability',
    currentValue: 13.70,
    previousValue: 11.40,
    percentile: 73,
    trend: 20.2,
    rating: 'good',
    sparklineData: [10.2, 10.8, 11.4, 12.9, 13.7]
  },
  {
    name: 'Asset Turnover',
    category: 'efficiency',
    currentValue: 0.76,
    previousValue: 0.82,
    percentile: 45,
    trend: -7.3,
    rating: 'below-average',
    sparklineData: [0.88, 0.85, 0.82, 0.79, 0.76]
  },
  {
    name: 'Inventory Turnover',
    category: 'efficiency',
    currentValue: 4.20,
    previousValue: 5.80,
    percentile: 32,
    trend: -27.6,
    rating: 'poor',
    sparklineData: [6.2, 5.9, 5.8, 5.0, 4.2]
  },
  {
    name: 'Price-to-Earnings',
    category: 'market',
    currentValue: 18.50,
    previousValue: 22.30,
    percentile: 38,
    trend: -17.0,
    rating: 'below-average',
    sparklineData: [24.5, 23.2, 22.3, 20.1, 18.5]
  },
  {
    name: 'Price-to-Book',
    category: 'market',
    currentValue: 2.80,
    previousValue: 3.20,
    percentile: 42,
    trend: -12.5,
    rating: 'below-average',
    sparklineData: [3.5, 3.3, 3.2, 3.0, 2.8]
  }
];

// Heat Map Data
export const mockHeatMapData: HeatMapMetric[] = [
  {
    metric: 'growth',
    data: [
      { lineItem: 'Revenue', fy2019: 8.2, fy2020: -18.2, fy2021: 33.8, fy2022: 9.8, fy2023: 12.9 },
      { lineItem: 'Gross Profit', fy2019: 12.5, fy2020: -12.5, fy2021: 26.2, fy2022: 13.8, fy2023: 11.9 },
      { lineItem: 'Operating Expenses', fy2019: 15.2, fy2020: 14.6, fy2021: 12.7, fy2022: 10.9, fy2023: 8.9 },
      { lineItem: 'EBITDA', fy2019: 9.8, fy2020: -40.8, fy2021: 53.7, fy2022: 17.9, fy2023: 16.1 },
      { lineItem: 'Net Income', fy2019: 5.2, fy2020: -61.0, fy2021: 125.4, fy2022: 21.6, fy2023: 16.1 },
      { lineItem: 'Total Assets', fy2019: 12.3, fy2020: 4.6, fy2021: 10.7, fy2022: 8.7, fy2023: 8.3 },
      { lineItem: 'Total Liabilities', fy2019: 8.9, fy2020: 5.4, fy2021: 7.0, fy2022: 4.7, fy2023: 5.1 },
      { lineItem: 'Shareholders Equity', fy2019: 18.2, fy2020: 3.4, fy2021: 16.6, fy2022: 14.4, fy2023: 12.5 },
      { lineItem: 'Cash Flow from Operations', fy2019: 22.1, fy2020: -14.8, fy2021: 29.5, fy2022: 6.8, fy2023: 17.1 }
    ]
  },
  {
    metric: 'absolute',
    data: [
      { lineItem: 'Revenue', fy2019: 6592, fy2020: 5392, fy2021: 7216, fy2022: 7925, fy2023: 8946 },
      { lineItem: 'Gross Profit', fy2019: 895, fy2020: 782, fy2021: 988, fy2022: 1123, fy2023: 1257 },
      { lineItem: 'Operating Expenses', fy2019: 457, fy2020: 523, fy2021: 590, fy2022: 654, fy2023: 712 },
      { lineItem: 'EBITDA', fy2019: 438, fy2020: 259, fy2021: 398, fy2022: 469, fy2023: 544 },
      { lineItem: 'Net Income', fy2019: 396, fy2020: 155, fy2021: 348, fy2022: 422, fy2023: 489 },
      { lineItem: 'Total Assets', fy2019: 14568, fy2020: 15235, fy2021: 16872, fy2022: 18346, fy2023: 19877 },
      { lineItem: 'Total Liabilities', fy2019: 8765, fy2020: 9235, fy2021: 9877, fy2022: 10346, fy2023: 10877 },
      { lineItem: 'Shareholders Equity', fy2019: 5802, fy2020: 6000, fy2021: 6996, fy2022: 8000, fy2023: 9000 },
      { lineItem: 'Cash Flow from Operations', fy2019: 895, fy2020: 762, fy2021: 988, fy2022: 1054, fy2023: 1235 }
    ]
  }
];

// Benford's Law Analysis
export const mockBenfordAnalysis: BenfordAnalysis[] = [
  {
    dataset: 'revenue',
    period: '5years',
    expectedDistribution: [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6],
    actualDistribution: [28.5, 19.2, 13.1, 8.9, 7.5, 6.9, 5.6, 5.3, 5.0],
    chiSquare: 2.34,
    pValue: 0.97,
    riskLevel: 'low',
    anomalyCount: 0
  },
  {
    dataset: 'expense',
    period: '5years',
    expectedDistribution: [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6],
    actualDistribution: [31.2, 16.8, 12.9, 9.3, 8.1, 6.5, 5.9, 4.8, 4.5],
    chiSquare: 1.89,
    pValue: 0.98,
    riskLevel: 'low',
    anomalyCount: 0
  }
];

// Risk Alerts
export const mockRiskAlerts: RiskAlert[] = [
  {
    id: '1',
    severity: 'critical',
    category: 'regulatory',
    title: 'SEBI Compliance Violation Detected',
    description: 'Potential insider trading activity identified in recent transactions. Requires immediate investigation and regulatory response.',
    date: '9/30/2025',
    confidence: 92,
    eta: '2h',
    source: 'SEBI Monitoring System',
    recommendedActions: [
      'Initiate internal investigation immediately',
      'Prepare regulatory response documentation'
    ],
    status: 'pending'
  },
  {
    id: '2',
    severity: 'high',
    category: 'financial',
    title: 'Financial Anomaly in Quarterly Results',
    description: "Benford's Law analysis indicates potential irregularities in reported revenue figures for Q2 2025.",
    date: '9/30/2025',
    confidence: 87,
    source: 'Financial Analysis Module',
    status: 'in-progress'
  }
];

// Risk Categories
export const mockRiskCategories: RiskCategory[] = [
  {
    name: 'SEBI Compliance',
    riskLevel: 'critical',
    score: 8.2,
    maxScore: 10,
    activeAlerts: 3,
    lastUpdated: '9/30/2025'
  },
  {
    name: 'MCA Filings',
    riskLevel: 'medium',
    score: 4.1,
    maxScore: 10,
    activeAlerts: 1,
    lastUpdated: '9/30/2025'
  },
  {
    name: 'Labor Compliance',
    riskLevel: 'low',
    score: 3.5,
    maxScore: 10,
    activeAlerts: 0,
    lastUpdated: '9/30/2025'
  },
  {
    name: 'Environmental',
    riskLevel: 'medium',
    score: 5.8,
    maxScore: 10,
    activeAlerts: 2,
    lastUpdated: '9/30/2025'
  }
];

// Compliance Timeline
export const mockComplianceTimeline: ComplianceItem[] = [
  {
    id: '1',
    title: '10-Q Quarterly Report Filed',
    type: 'SEC Filing',
    status: 'completed',
    date: 'Sep 15, 2024',
    daysInfo: '5 days early',
    documents: ['10-Q_Q3_2024.pdf', 'Management_Discussion.pdf'],
    confidence: 98
  },
  {
    id: '2',
    title: 'Annual Compliance Assessment',
    type: 'Internal Audit',
    status: 'in-progress',
    date: 'Active',
    daysInfo: 'Active assessments',
    confidence: 85
  },
  {
    id: '3',
    title: 'Tax Return Filing',
    type: 'Tax Compliance',
    status: 'pending',
    date: 'Oct 15, 2024',
    daysInfo: 'Requires attention'
  },
  {
    id: '4',
    title: 'Board Meeting Minutes',
    type: 'Governance',
    status: 'upcoming',
    date: 'Next 30 days',
    daysInfo: 'Scheduled'
  }
];

// Document References
export const mockDocumentReferences: DocumentReference[] = [
  {
    documentName: '10-K Annual Report 2023',
    type: 'SEC Filing',
    pageCount: 156,
    size: '2.4 MB',
    totalReferences: 5,
    highConfidence: 2,
    discrepancies: 3
  }
];

// Audit Module Performance
export const mockAuditModules: AuditModulePerformance[] = [
  {
    moduleName: 'Financial Analysis',
    accuracy: 96.6,
    avgTime: '1.8 min',
    docsProcessed: 3420,
    status: 'active'
  },
  {
    moduleName: 'Compliance Check',
    accuracy: 94.2,
    avgTime: '2.4 min',
    docsProcessed: 2180,
    status: 'active'
  },
  {
    moduleName: 'Risk Assessment',
    accuracy: 95.7,
    avgTime: '2.1 min',
    docsProcessed: 2890,
    status: 'active'
  },
  {
    moduleName: 'Document Analysis',
    accuracy: 93.1,
    avgTime: '3.2 min',
    docsProcessed: 1650,
    status: 'active'
  },
  {
    moduleName: 'Anomaly Detection',
    accuracy: 97.3,
    avgTime: '1.5 min',
    docsProcessed: 4120,
    status: 'active'
  }
];

// Portfolio Companies
export const mockPortfolioCompanies: PortfolioCompany[] = [
  { id: '1', ticker: 'AJ', name: 'Acme Corp', integrityScore: 85, riskLevel: 'low', sector: 'Technology' },
  { id: '2', ticker: 'MC', name: 'MegaCorp', integrityScore: 88, riskLevel: 'low', sector: 'Finance' },
  { id: '3', ticker: 'AI', name: 'Alpha Inc', integrityScore: 82, riskLevel: 'low', sector: 'Manufacturing' },
  { id: '4', ticker: 'JB', name: 'Jupiter Bank', integrityScore: 91, riskLevel: 'low', sector: 'Banking' },
  { id: '5', ticker: 'PI', name: 'Phoenix Ltd', integrityScore: 87, riskLevel: 'low', sector: 'Healthcare' },
  { id: '6', ticker: 'JC', name: 'Jupiter Co', integrityScore: 76, riskLevel: 'medium', sector: 'Retail' },
  { id: '7', ticker: 'Bo', name: 'Bright Oil', integrityScore: 72, riskLevel: 'medium', sector: 'Energy' },
  { id: '8', ticker: 'EM', name: 'Eagle Motors', integrityScore: 45, riskLevel: 'high', sector: 'Automotive' },
  { id: '9', ticker: 'CC', name: 'Cosmos Co', integrityScore: 52, riskLevel: 'medium', sector: 'Aerospace' },
  { id: '10', ticker: 'AI', name: 'Atlas Inc', integrityScore: 68, riskLevel: 'medium', sector: 'Construction' },
  { id: '11', ticker: 'GE', name: 'Green Energy', integrityScore: 71, riskLevel: 'medium', sector: 'Renewable' },
  { id: '12', ticker: 'TI', name: 'Tech Innovations', integrityScore: 68, riskLevel: 'medium', sector: 'Technology' },
  { id: '13', ticker: 'NC', name: 'Nova Corp', integrityScore: 83, riskLevel: 'low', sector: 'Pharma' },
  { id: '14', ticker: 'VI', name: 'Vision Inc', integrityScore: 89, riskLevel: 'low', sector: 'Telecom' }
];

// Retail user mock data (limited features)
export const mockApiResponseRetail: AnalysisResponse = {
  companyName: "Reliance Industries Limited",
  cin: "L17110MH1973PLC019786",
  integrityScore: 87,
  lastAnalyzed: new Date().toISOString(),
  summary: "Overall strong financial position with excellent governance practices. Minor concerns in employee satisfaction metrics.",
  scores: {
    financialIntegrity: {
      score: 85,
      summary: "Benford's Law analysis shows no statistical anomalies.",
      trend: 'stable',
      percentile: 78
    },
    publicPerception: {
      score: 92,
      summary: "Consistently positive media coverage and strong brand reputation.",
      trend: 'up',
      percentile: 85
    },
    internalHealth: {
      score: 78,
      summary: "Generally positive employee sentiment with room for improvement in work-life balance.",
      trend: 'stable',
      percentile: 65
    },
    regulatoryRisk: {
      score: 94,
      summary: "Excellent compliance record with no major regulatory issues.",
      trend: 'up',
      percentile: 92
    }
  },
  evidence: [
    { source: "Economic Times", headline: "Reliance reports strong Q3 earnings, beats estimates", sentiment: 0.8, date: "9/28/2025", category: "financial" },
    { source: "Glassdoor", headline: "Employees praise competitive compensation but cite work pressure", sentiment: 0.2, date: "9/25/2025", category: "internal" },
    { source: "SEBI", headline: "All compliance requirements met for FY 2024-25", sentiment: 0.9, date: "9/20/2025", category: "regulatory" }
  ]
};

// Institutional user mock data (full features)
export const mockApiResponseInstitutional: AnalysisResponse = {
  ...mockApiResponseRetail,
  financialRatios: mockFinancialRatios,
  heatMapData: mockHeatMapData,
  benfordAnalysis: mockBenfordAnalysis,
  riskAlerts: mockRiskAlerts,
  riskCategories: mockRiskCategories,
  complianceTimeline: mockComplianceTimeline,
  documentReferences: mockDocumentReferences,
  auditModules: mockAuditModules,
  dataQuality: {
    highQuality: 85,
    mediumQuality: 12,
    lowQuality: 3
  },
  systemHealth: {
    uptime: 99.8,
    dataFreshness: 'Updated 5 min ago',
    resourceUsage: 57
  }
};
