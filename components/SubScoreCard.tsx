interface SubScoreCardProps {
  title: string;
  score: number;
  summary: string;
  icon: React.ReactNode;
}

const SubScoreCard: React.FC<SubScoreCardProps> = ({ title, score, summary, icon }) => {
  const getScoreColor = (s: number) => {
    if (s >= 80) return "text-green-500";
    if (s >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-slate-500 transition-all">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <div className="text-slate-400">{icon}</div>
          <h3 className="text-md font-semibold text-slate-200">{title}</h3>
        </div>
        <p className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</p>
      </div>
      <p className="text-sm text-slate-400">{summary}</p>
    </div>
  );
};

export default SubScoreCard;
