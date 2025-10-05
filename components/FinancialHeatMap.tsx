'use client';

import { useState } from 'react';
import { HeatMapMetric } from '@/lib/types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface FinancialHeatMapProps {
  data: HeatMapMetric[];
}

export default function FinancialHeatMap({ data }: FinancialHeatMapProps) {
  const [selectedMetric, setSelectedMetric] = useState<'growth' | 'zscore' | 'absolute'>('growth');

  const currentData = data.find(d => d.metric === selectedMetric);
  if (!currentData) return null;

  const getColor = (value: number, metric: string) => {
    if (metric === 'growth') {
      if (value > 20) return 'bg-emerald-500 text-white';
      if (value > 10) return 'bg-emerald-400/70 text-white';
      if (value > 0) return 'bg-emerald-300/50 text-emerald-900';
      if (value > -10) return 'bg-red-300/50 text-red-900';
      if (value > -30) return 'bg-red-400/70 text-white';
      return 'bg-red-500 text-white';
    }
    return 'bg-slate-700 text-slate-200';
  };

  const formatValue = (value: number, metric: string) => {
    if (metric === 'growth') {
      const sign = value > 0 ? '+' : '';
      return `${sign}${value.toFixed(1)}%`;
    }
    if (metric === 'absolute') {
      if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K Cr`;
      return `₹${value}K Cr`;
    }
    return value.toFixed(2);
  };

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Financial Statement Heat Map</h3>
          <p className="text-sm text-slate-400">Multi-year pattern analysis and outlier detection</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedMetric('growth')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              selectedMetric === 'growth'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Growth Rate (%)
          </button>
          <button
            onClick={() => setSelectedMetric('zscore')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              selectedMetric === 'zscore'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Z-Score Analysis
          </button>
          <button
            onClick={() => setSelectedMetric('absolute')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              selectedMetric === 'absolute'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Absolute Values
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-sm font-semibold text-slate-300">Line Item</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-slate-300">FY 2019</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-slate-300">FY 2020</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-slate-300">FY 2021</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-slate-300">FY 2022</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-slate-300">FY 2023</th>
            </tr>
          </thead>
          <tbody>
            {currentData.data.map((row, index) => (
              <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                <td className="py-3 px-4 text-sm font-medium text-slate-200">{row.lineItem}</td>
                <td className="py-2 px-2 text-center">
                  <span className={`inline-block px-3 py-1.5 rounded text-xs font-semibold ${getColor(row.fy2019, selectedMetric)}`}>
                    {formatValue(row.fy2019, selectedMetric)}
                  </span>
                </td>
                <td className="py-2 px-2 text-center">
                  <span className={`inline-block px-3 py-1.5 rounded text-xs font-semibold ${getColor(row.fy2020, selectedMetric)}`}>
                    {formatValue(row.fy2020, selectedMetric)}
                  </span>
                </td>
                <td className="py-2 px-2 text-center">
                  <span className={`inline-block px-3 py-1.5 rounded text-xs font-semibold ${getColor(row.fy2021, selectedMetric)}`}>
                    {formatValue(row.fy2021, selectedMetric)}
                  </span>
                </td>
                <td className="py-2 px-2 text-center">
                  <span className={`inline-block px-3 py-1.5 rounded text-xs font-semibold ${getColor(row.fy2022, selectedMetric)}`}>
                    {formatValue(row.fy2022, selectedMetric)}
                  </span>
                </td>
                <td className="py-2 px-2 text-center">
                  <span className={`inline-block px-3 py-1.5 rounded text-xs font-semibold ${getColor(row.fy2023, selectedMetric)}`}>
                    {formatValue(row.fy2023, selectedMetric)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center gap-6 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-emerald-500 rounded"></div>
          <span>Strong Growth (&gt;20%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-emerald-300/50 rounded"></div>
          <span>Positive (0-10%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-300/50 rounded"></div>
          <span>Decline (0 to -10%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span>Significant Decline (&lt;-30%)</span>
        </div>
      </div>
    </div>
  );
}
