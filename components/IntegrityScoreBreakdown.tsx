'use client';

import { AnalysisResponse } from '@/lib/types';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Shield, BarChart3, Users, Newspaper } from 'lucide-react';

interface IntegrityScoreBreakdownProps {
  data: AnalysisResponse;
}

export default function IntegrityScoreBreakdown({ data }: IntegrityScoreBreakdownProps) {
  // Calculate weighted contributions
  const weights = {
    financial: 0.30,
    regulatory: 0.30,
    internal: 0.25,
    public: 0.15
  };

  const contributions = {
    financial: (data.scores.financialIntegrity.score * weights.financial),
    regulatory: (data.scores.regulatoryRisk.score * weights.regulatory),
    internal: (data.scores.internalHealth.score * weights.internal),
    public: (data.scores.publicPerception.score * weights.public)
  };

  // Pie chart data for weight distribution
  const weightData = [
    { name: 'Financial Integrity', value: 30, score: data.scores.financialIntegrity.score, color: '#3b82f6' },
    { name: 'Regulatory Risk', value: 30, score: data.scores.regulatoryRisk.score, color: '#8b5cf6' },
    { name: 'Internal Health', value: 25, score: data.scores.internalHealth.score, color: '#ec4899' },
    { name: 'Public Perception', value: 15, score: data.scores.publicPerception.score, color: '#14b8a6' }
  ];

  // Bar chart data for actual scores
  const scoreData = [
    {
      name: 'Financial Integrity',
      score: data.scores.financialIntegrity.score,
      weight: 30,
      contribution: contributions.financial.toFixed(1),
      color: '#3b82f6'
    },
    {
      name: 'Regulatory Risk',
      score: data.scores.regulatoryRisk.score,
      weight: 30,
      contribution: contributions.regulatory.toFixed(1),
      color: '#8b5cf6'
    },
    {
      name: 'Internal Health',
      score: data.scores.internalHealth.score,
      weight: 25,
      contribution: contributions.internal.toFixed(1),
      color: '#ec4899'
    },
    {
      name: 'Public Perception',
      score: data.scores.publicPerception.score,
      weight: 15,
      contribution: contributions.public.toFixed(1),
      color: '#14b8a6'
    }
  ];

  // Radar chart data
  const radarData = [
    {
      subject: 'Financial',
      score: data.scores.financialIntegrity.score,
      fullMark: 100
    },
    {
      subject: 'Regulatory',
      score: data.scores.regulatoryRisk.score,
      fullMark: 100
    },
    {
      subject: 'Internal',
      score: data.scores.internalHealth.score,
      fullMark: 100
    },
    {
      subject: 'Public',
      score: data.scores.publicPerception.score,
      fullMark: 100
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-500/10 border-green-500/30';
    if (score >= 60) return 'bg-yellow-500/10 border-yellow-500/30';
    return 'bg-red-500/10 border-red-500/30';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= 60) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };

  return (
    <div className="space-y-6">
      {/* Overall Score Card */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Overall Integrity Score</h2>
            <p className="text-slate-400">Weighted analysis across 4 key dimensions</p>
          </div>
          <div className="text-right">
            <div className={`text-6xl font-bold ${getScoreColor(data.integrityScore)}`}>
              {data.integrityScore}
            </div>
            <div className="text-slate-400 text-sm">/ 100</div>
          </div>
        </div>

        {/* Score Formula */}
        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
          <p className="text-slate-300 text-sm mb-2 font-mono">
            Integrity Score = (Financial × 0.30) + (Regulatory × 0.30) + (Internal × 0.25) + (Public × 0.15)
          </p>
          <p className="text-slate-400 text-xs">
            = ({data.scores.financialIntegrity.score} × 0.30) + ({data.scores.regulatoryRisk.score} × 0.30) + ({data.scores.internalHealth.score} × 0.25) + ({data.scores.publicPerception.score} × 0.15)
          </p>
          <p className="text-cyan-400 text-sm mt-2 font-semibold">
            = {contributions.financial.toFixed(1)} + {contributions.regulatory.toFixed(1)} + {contributions.internal.toFixed(1)} + {contributions.public.toFixed(1)} = {data.integrityScore}
          </p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weight Distribution Pie Chart */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-bold text-white mb-4">Score Weight Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={weightData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name.split(' ')[0]}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {weightData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                formatter={(value: any) => `${value}% weight`}
              />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-400 text-center mt-2">
            Financial & Regulatory factors carry the highest weight (30% each)
          </p>
        </div>

        {/* Radar Chart */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-bold text-white mb-4">Multi-Dimensional Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#475569" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#64748b' }} />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#06b6d4"
                fill="#06b6d4"
                fillOpacity={0.6}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-400 text-center mt-2">
            Visual comparison across all scoring dimensions
          </p>
        </div>

        {/* Score Comparison Bar Chart */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 lg:col-span-2">
          <h3 className="text-lg font-bold text-white mb-4">Component Scores & Contributions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={scoreData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                angle={-15}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fill: '#94a3b8' }} domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                formatter={(value: any, name: string) => {
                  if (name === 'score') return [value, 'Raw Score'];
                  return [value, name];
                }}
              />
              <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                {scoreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {scoreData.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xs text-slate-400 mb-1">{item.name.split(' ')[0]}</div>
                <div className="text-lg font-bold" style={{ color: item.color }}>
                  {item.contribution}
                </div>
                <div className="text-xs text-slate-500">Weighted pts</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Financial Integrity */}
        <div className={`rounded-xl p-6 border ${getScoreBgColor(data.scores.financialIntegrity.score)}`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Financial Integrity</h3>
                <p className="text-xs text-slate-400">Weight: 30%</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${getScoreColor(data.scores.financialIntegrity.score)}`}>
                {data.scores.financialIntegrity.score}
              </div>
              <div className="text-xs text-slate-400">
                +{contributions.financial.toFixed(1)} pts
              </div>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">{data.scores.financialIntegrity.summary}</p>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              {getScoreIcon(data.scores.financialIntegrity.score)}
              <span>Benford's Law Analysis: Statistical anomaly detection</span>
            </div>
            <div className="flex items-center gap-2">
              {getScoreIcon(data.scores.financialIntegrity.score)}
              <span>Beneish M-Score: Earnings manipulation probability</span>
            </div>
          </div>
        </div>

        {/* Regulatory Risk */}
        <div className={`rounded-xl p-6 border ${getScoreBgColor(data.scores.regulatoryRisk.score)}`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Regulatory Risk</h3>
                <p className="text-xs text-slate-400">Weight: 30%</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${getScoreColor(data.scores.regulatoryRisk.score)}`}>
                {data.scores.regulatoryRisk.score}
              </div>
              <div className="text-xs text-slate-400">
                +{contributions.regulatory.toFixed(1)} pts
              </div>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">{data.scores.regulatoryRisk.summary}</p>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              {getScoreIcon(data.scores.regulatoryRisk.score)}
              <span>SEBI/ED/NCLT monitoring: Entity recognition</span>
            </div>
            <div className="flex items-center gap-2">
              {getScoreIcon(data.scores.regulatoryRisk.score)}
              <span>Classification model: Risk context analysis</span>
            </div>
          </div>
        </div>

        {/* Internal Health */}
        <div className={`rounded-xl p-6 border ${getScoreBgColor(data.scores.internalHealth.score)}`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Internal Health</h3>
                <p className="text-xs text-slate-400">Weight: 25%</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${getScoreColor(data.scores.internalHealth.score)}`}>
                {data.scores.internalHealth.score}
              </div>
              <div className="text-xs text-slate-400">
                +{contributions.internal.toFixed(1)} pts
              </div>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">{data.scores.internalHealth.summary}</p>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              {getScoreIcon(data.scores.internalHealth.score)}
              <span>Sentiment analysis: Employee morale scoring</span>
            </div>
            <div className="flex items-center gap-2">
              {getScoreIcon(data.scores.internalHealth.score)}
              <span>Topic modeling (LDA): Culture red flags</span>
            </div>
          </div>
        </div>

        {/* Public Perception */}
        <div className={`rounded-xl p-6 border ${getScoreBgColor(data.scores.publicPerception.score)}`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Public Perception</h3>
                <p className="text-xs text-slate-400">Weight: 15%</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${getScoreColor(data.scores.publicPerception.score)}`}>
                {data.scores.publicPerception.score}
              </div>
              <div className="text-xs text-slate-400">
                +{contributions.public.toFixed(1)} pts
              </div>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">{data.scores.publicPerception.summary}</p>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              {getScoreIcon(data.scores.publicPerception.score)}
              <span>News sentiment: Financial media analysis</span>
            </div>
            <div className="flex items-center gap-2">
              {getScoreIcon(data.scores.publicPerception.score)}
              <span>Weighted sources: Verified {'>'} Unverified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Note */}
      <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <BarChart3 className="w-5 h-5 text-blue-400 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-blue-300 mb-2">AI-Powered Methodology</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              This integrity score combines <span className="text-white font-semibold">forensic accounting</span> (Benford's Law, Beneish M-Score), 
              <span className="text-white font-semibold"> regulatory monitoring</span> (NER for SEBI/ED/NCLT), 
              <span className="text-white font-semibold"> sentiment analysis</span> (employee reviews, news), 
              and <span className="text-white font-semibold">topic modeling</span> (LDA for culture assessment). 
              The weighted formula ensures hard data (financial & regulatory) carries 60% of the total score, 
              while softer signals (internal culture & public sentiment) contribute 40%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
