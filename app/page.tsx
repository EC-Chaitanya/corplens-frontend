"use client";

import { useAuth } from '@/lib/auth-context';
import LoginPage from '@/components/LoginPage';
import { useState } from 'react';
import { Search, LogOut } from 'lucide-react';
import { AnalysisResponse } from '@/lib/types';
import { mockApiResponseRetail, mockApiResponseInstitutional } from '@/lib/mockDataEnhanced';
import Dashboard from '@/components/Dashboard';
import FinancialHeatMap from '@/components/FinancialHeatMap';
import FinancialRatiosTable from '@/components/FinancialRatiosTable';

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();
  const [companyName, setCompanyName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState<AnalysisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'financial' | 'risk'>('overview');

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const handleAnalysis = async () => {
    if (!companyName.trim()) {
      setError("Please enter a company name.");
      return;
    }
    setIsLoading(true);
    setAnalysisData(null);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Return data based on user tier
      const data = user?.tier === 'institutional' 
        ? { ...mockApiResponseInstitutional, companyName }
        : { ...mockApiResponseRetail, companyName };
      
      setAnalysisData(data);
    } catch (err) {
      setError("Failed to fetch analysis. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/corplens-logo.svg" alt="Corplens" className="w-20 h-20 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-white">Corplens</h1>
              <p className="text-xs text-slate-400">
                {user?.tier === 'institutional' ? 'Institutional Plan' : 'Retail Plan'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-300">Welcome, {user?.email}</span>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Search Section */}
      {!analysisData && !isLoading && (
        <div className="max-w-4xl mx-auto px-6 py-20 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Corporate Intelligence at Your Fingertips
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Enter a company name to begin comprehensive integrity analysis
          </p>

          <div className="flex max-w-2xl mx-auto">
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAnalysis()}
              placeholder="Enter Company Name or CIN..."
              className="flex-grow p-4 bg-slate-800 border border-slate-700 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white text-lg"
            />
            <button
              onClick={handleAnalysis}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 rounded-r-xl flex items-center justify-center transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>

          {user?.tier === 'retail' && (
            <p className="mt-6 text-sm text-slate-500">
              Searches remaining today: 5/5
            </p>
          )}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 mb-2">Analyzing Corporate Data...</p>
          <p className="text-sm text-slate-500">
            Processing financial statements, news, and regulatory filings
          </p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      )}

      {/* Results */}
      {analysisData && !isLoading && (
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Company Header */}
          <div className="bg-slate-800/30 rounded-xl p-6 mb-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{analysisData.companyName}</h2>
                <p className="text-slate-400">CIN: {analysisData.cin} • Last analyzed: {new Date(analysisData.lastAnalyzed).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-400 mb-1">Integrity Score</div>
                <div className="text-5xl font-bold text-white">{analysisData.integrityScore}<span className="text-2xl text-slate-500">/10</span></div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-slate-700">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-semibold transition-colors relative ${
                activeTab === 'overview'
                  ? 'text-indigo-400'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              Overview
              {activeTab === 'overview' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('financial')}
              className={`px-6 py-3 font-semibold transition-colors relative ${
                activeTab === 'financial'
                  ? 'text-indigo-400'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              Financial
              {activeTab === 'financial' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"></div>
              )}
              {user?.tier === 'retail' && (
                <span className="ml-2 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">Pro</span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('risk')}
              className={`px-6 py-3 font-semibold transition-colors relative ${
                activeTab === 'risk'
                  ? 'text-indigo-400'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              Risk
              {activeTab === 'risk' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"></div>
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === 'overview' && (
              <Dashboard data={analysisData} />
            )}

            {activeTab === 'financial' && (
              <>
                {user?.tier === 'institutional' ? (
                  <>
                    {analysisData.heatMapData && <FinancialHeatMap data={analysisData.heatMapData} />}
                    {analysisData.financialRatios && <FinancialRatiosTable ratios={analysisData.financialRatios} />}
                  </>
                ) : (
                  <div className="bg-slate-800/30 rounded-xl p-12 text-center border border-slate-700">
                    <div className="text-6xl mb-4">🔒</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Upgrade to Institutional Plan</h3>
                    <p className="text-slate-400 mb-6">Access advanced financial analysis, heat maps, and Benford's Law detection</p>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                      Upgrade Now
                    </button>
                  </div>
                )}
              </>
            )}

            {activeTab === 'risk' && (
              <div className="bg-slate-800/30 rounded-xl p-12 text-center border border-slate-700">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-2xl font-bold text-white mb-2">Risk Monitoring Coming Soon</h3>
                <p className="text-slate-400">Real-time risk alerts, compliance tracking, and trend analysis</p>
              </div>
            )}
          </div>

          {/* New Search Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setAnalysisData(null);
                setCompanyName("");
              }}
              className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Analyze Another Company
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
