// Enhanced Types with Tiered Access

export type UserTier = 'retail' | 'institutional';

export interface User {
  id: string;
  email: string;
  tier: UserTier;
  name: string;
}

export interface ScoreDetails {
  score: number;
  summary: string;
  trend?: 'up' | 'down' | 'stable';
  percentile?: number;
}

export interface EvidenceItem {
  source: string;
  headline: string;
  sentiment: number;
  date?: string;
  category?: string;
}

export interface FinancialMetric {
  name: string;
  value: number;
  unit?: string;
  trend: number;
  industryAvg?: number;
  percentile?: number;
  rating?: 'excellent' | 'good' | 'fair' | 'poor';
}

export interface FinancialRatio {
  name: string;
  category: 'liquidity' | 'leverage' | 'profitability' | 'efficiency' | 'market';
  currentValue: number;
  previousValue: number;
  percentile: number;
  trend: number;
  rating: 'excellent' | 'good' | 'below-average' | 'poor';
  sparklineData: number[];
}

export interface FinancialStatementItem {
  lineItem: string;
  fy2019: number;
  fy2020: number;
  fy2021: number;
  fy2022: number;
  fy2023: number;
}

export interface HeatMapMetric {
  metric: 'growth' | 'zscore' | 'absolute';
  data: FinancialStatementItem[];
}

export interface BenfordAnalysis {
  dataset: 'revenue' | 'expense' | 'assets' | 'liabilities';
  period: '1year' | '3years' | '5years' | '10years';
  expectedDistribution: number[];
  actualDistribution: number[];
  chiSquare: number;
  pValue: number;
  riskLevel: 'low' | 'medium' | 'high';
  anomalyCount: number;
}

export interface RiskAlert {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: 'regulatory' | 'financial' | 'operational' | 'legal';
  title: string;
  description: string;
  date: string;
  confidence: number;
  eta?: string;
  source: string;
  recommendedActions?: string[];
  status?: 'pending' | 'in-progress' | 'escalated' | 'acknowledged';
}

export interface RiskCategory {
  name: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  score: number;
  maxScore: number;
  activeAlerts: number;
  lastUpdated: string;
}

export interface ComplianceItem {
  id: string;
  title: string;
  type: string;
  status: 'completed' | 'in-progress' | 'pending' | 'upcoming';
  date: string;
  daysInfo: string;
  documents?: string[];
  confidence?: number;
}

export interface DocumentReference {
  documentName: string;
  type: string;
  pageCount: number;
  size: string;
  totalReferences: number;
  highConfidence: number;
  discrepancies: number;
}

export interface AuditModulePerformance {
  moduleName: string;
  accuracy: number;
  avgTime: string;
  docsProcessed: number;
  status: 'active' | 'warning' | 'error';
}

export interface AnalysisResponse {
  companyName: string;
  cin: string;
  integrityScore: number;
  lastAnalyzed: string;
  summary: string;
  scores: {
    financialIntegrity: ScoreDetails;
    publicPerception: ScoreDetails;
    internalHealth: ScoreDetails;
    regulatoryRisk: ScoreDetails;
  };
  evidence: EvidenceItem[];
  // Institutional-only features
  financialMetrics?: FinancialMetric[];
  financialRatios?: FinancialRatio[];
  heatMapData?: HeatMapMetric[];
  benfordAnalysis?: BenfordAnalysis[];
  riskAlerts?: RiskAlert[];
  riskCategories?: RiskCategory[];
  complianceTimeline?: ComplianceItem[];
  documentReferences?: DocumentReference[];
  auditModules?: AuditModulePerformance[];
  dataQuality?: {
    highQuality: number;
    mediumQuality: number;
    lowQuality: number;
  };
  systemHealth?: {
    uptime: number;
    dataFreshness: string;
    resourceUsage: number;
  };
}

export interface PortfolioCompany {
  id: string;
  ticker: string;
  name: string;
  integrityScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  sector: string;
}
