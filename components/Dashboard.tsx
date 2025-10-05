import { AnalysisResponse } from "@/lib/types";
import ScoreGauge from "./ScoreGauge";
import SubScoreCard from "./SubScoreCard";
import EvidenceSection from "./EvidenceSection";
import IntegrityScoreBreakdown from "./IntegrityScoreBreakdown";
import { Scale, Newspaper, Users, ShieldAlert } from 'lucide-react';

interface DashboardProps {
  data: AnalysisResponse;
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  return (
    <div className="w-full max-w-7xl mx-auto animate-fade-in space-y-8">
      <div className="flex flex-col items-center text-center">
        <ScoreGauge score={data.integrityScore} />
        <h1 className="text-3xl font-bold text-white mt-4">{data.companyName}</h1>
        <p className="text-slate-400 mt-1 italic">{`"${data.summary}"`}</p>
      </div>

      {/* New: Comprehensive Score Breakdown with Charts */}
      <IntegrityScoreBreakdown data={data} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SubScoreCard title="Financial Integrity" score={data.scores.financialIntegrity.score} summary={data.scores.financialIntegrity.summary} icon={<Scale />} />
        <SubScoreCard title="Public Perception" score={data.scores.publicPerception.score} summary={data.scores.publicPerception.summary} icon={<Newspaper />} />
        <SubScoreCard title="Internal Health" score={data.scores.internalHealth.score} summary={data.scores.internalHealth.summary} icon={<Users />} />
        <SubScoreCard title="Regulatory Risk" score={data.scores.regulatoryRisk.score} summary={data.scores.regulatoryRisk.summary} icon={<ShieldAlert />} />
      </div>

      <EvidenceSection evidence={data.evidence} />
    </div>
  );
};

export default Dashboard;
