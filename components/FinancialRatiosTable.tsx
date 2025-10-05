'use client';

import { FinancialRatio } from '@/lib/types';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface FinancialRatiosTableProps {
  ratios: FinancialRatio[];
}

export default function FinancialRatiosTable({ ratios }: FinancialRatiosTableProps) {
  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'excellent': return 'text-green-500';
      case 'good': return 'text-emerald-500';
      case 'below-average': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-slate-400';
    }
  };

  const getRatingBadge = (rating: string) => {
    switch (rating) {
      case 'excellent': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'good': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'below-average': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'poor': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const getPercentileColor = (percentile: number) => {
    if (percentile >= 80) return 'text-green-500';
    if (percentile >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-1">Financial Ratios Analysis</h3>
        <p className="text-sm text-slate-400">Liquidity, Profitability, and Efficiency Metrics</p>
      </div>

      <div className="space-y-2">
        {ratios.map((ratio, index) => (
          <div
            key={index}
            className="bg-slate-900/30 rounded-lg p-4 border border-slate-700/50 hover:border-slate-600 transition-all"
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Name & Category */}
              <div className="col-span-3">
                <h4 className="text-sm font-semibold text-slate-200">{ratio.name}</h4>
                <p className="text-xs text-slate-500 capitalize">{ratio.category}</p>
              </div>

              {/* Current Value */}
              <div className="col-span-2 text-center">
                <p className="text-xl font-bold text-white">{ratio.currentValue.toFixed(2)}</p>
                <p className="text-xs text-slate-500">Current</p>
              </div>

              {/* Previous Value */}
              <div className="col-span-2 text-center">
                <p className="text-sm font-semibold text-slate-400">{ratio.previousValue.toFixed(2)}</p>
                <p className="text-xs text-slate-500">Previous</p>
              </div>

              {/* Percentile */}
              <div className="col-span-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className={`text-sm font-bold ${getPercentileColor(ratio.percentile)}`}>
                    {ratio.percentile}th
                  </div>
                  <div className="h-2 w-16 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${ratio.percentile >= 80 ? 'bg-green-500' : ratio.percentile >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${ratio.percentile}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">Percentile</p>
              </div>

              {/* Trend */}
              <div className="col-span-1 text-center">
                {ratio.trend > 0 ? (
                  <TrendingUp className="w-5 h-5 text-green-500 mx-auto" />
                ) : ratio.trend < 0 ? (
                  <TrendingDown className="w-5 h-5 text-red-500 mx-auto" />
                ) : (
                  <Minus className="w-5 h-5 text-yellow-500 mx-auto" />
                )}
              </div>

              {/* Rating Badge */}
              <div className="col-span-2 flex justify-end">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getRatingBadge(ratio.rating)} capitalize`}>
                  {ratio.rating === 'below-average' ? 'Below Avg' : ratio.rating}
                </span>
              </div>
            </div>

            {/* Sparkline */}
            <div className="mt-3 h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ratio.sparklineData.map((value, i) => ({ value, index: i }))}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={ratio.trend > 0 ? '#10b981' : ratio.trend < 0 ? '#ef4444' : '#f59e0b'}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">6</div>
          <div className="text-xs text-slate-400">Strong Ratios</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-500">1</div>
          <div className="text-xs text-slate-400">Warning Alerts</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-500">1</div>
          <div className="text-xs text-slate-400">Critical Issues</div>
        </div>
      </div>
    </div>
  );
}
