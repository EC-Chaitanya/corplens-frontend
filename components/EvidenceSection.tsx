import { EvidenceItem } from '@/lib/types';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface EvidenceSectionProps {
  evidence: EvidenceItem[];
}

const EvidenceSection: React.FC<EvidenceSectionProps> = ({ evidence }) => {
  const getSentimentIcon = (sentiment: number) => {
    if (sentiment > 0.3) return <ArrowUpRight className="text-green-500 w-4 h-4" />;
    if (sentiment < -0.3) return <ArrowDownRight className="text-red-500 w-4 h-4" />;
    return <Minus className="text-yellow-500 w-4 h-4" />;
  }

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-white mb-4">Key Evidence</h2>
      <div className="space-y-3">
        {evidence.map((item, index) => (
          <div key={index} className="bg-slate-800 p-3 rounded-lg flex items-center justify-between gap-4 border border-slate-700">
            <div className="flex items-center gap-3">
               {getSentimentIcon(item.sentiment)}
               <div>
                  <p className="text-sm font-semibold text-slate-200">{item.headline}</p>
                  <p className="text-xs text-slate-500">{item.source}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvidenceSection;
