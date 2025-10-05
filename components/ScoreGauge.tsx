import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

interface ScoreGaugeProps {
  score: number;
}

const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score }) => {
  const getColor = (s: number) => {
    if (s >= 80) return "#10B981"; // Green
    if (s >= 60) return "#F59E0B"; // Yellow
    return "#EF4444"; // Red
  };

  const data = [{ name: 'score', value: score, fill: getColor(score) }];

  return (
    <div className="relative w-48 h-48 md:w-60 md:h-60">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={-270}
          barSize={20}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar background dataKey="value" cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-4xl md:text-5xl font-bold text-white">{score}</p>
        <p className="text-sm text-slate-400">/ 100</p>
      </div>
    </div>
  );
};

export default ScoreGauge;
