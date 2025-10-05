import { AnalysisResponse } from './types';

export const mockApiResponse: AnalysisResponse = {
  companyName: "Infosys Ltd.",
  cin: "L85110KA1981PLC004346",
  integrityScore: 68,
  lastAnalyzed: new Date().toISOString(),
  summary: "Financials appear stable, but declining public perception and recent regulatory flags are a concern.",
  scores: {
    financialIntegrity: {
      score: 85,
      summary: "Benford's Law analysis shows no statistical anomalies."
    },
    publicPerception: {
      score: 60,
      summary: "High volume of negative news coverage regarding new projects."
    },
    internalHealth: {
      score: 45,
      summary: "Employee reviews dropped 20% in the last quarter citing management issues."
    },
    regulatoryRisk: {
      score: 82,
      summary: "One minor SEBI inquiry noted in the last 6 months."
    }
  },
  evidence: [
    { source: "Livemint", headline: "Infosys faces backlash over new campus plans...", sentiment: -0.8 },
    { source: "Glassdoor", headline: "'Intense pressure but good pay...' a former employee wrote.", sentiment: 0.1 },
    { source: "MCA Portal", headline: "Annual report filed on time.", sentiment: 0.5 }
  ]
};
