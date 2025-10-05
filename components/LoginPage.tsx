'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { UserTier } from '@/lib/types';
import { Shield, Building2, Users, TrendingUp, Lock, Mail } from 'lucide-react';

export default function LoginPage() {
  const [step, setStep] = useState<'tier' | 'credentials'>('tier');
  const [selectedTier, setSelectedTier] = useState<UserTier | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleTierSelect = (tier: UserTier) => {
    setSelectedTier(tier);
    setStep('credentials');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTier) return;

    setIsLoading(true);
    try {
      await login(email, password, selectedTier);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      <div className="relative z-10 w-full max-w-6xl">
        {step === 'tier' ? (
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <img src="/corplens-logo.svg" alt="Corplens" className="w-48 h-48 object-contain" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Corplens</h1>
            <p className="text-xl text-slate-400">Intelligent Corporate Vision</p>
            <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
              AI-powered integrity analysis for corporate due diligence
            </p>

            <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Retail Tier */}
              <div 
                onClick={() => handleTierSelect('retail')}
                className="group relative bg-slate-800/50 backdrop-blur border-2 border-slate-700 hover:border-indigo-500 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                  <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm font-semibold">
                    ₹999/month
                  </span>
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🎁 3 Months Free
                  </span>
                </div>

                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <Users className="w-8 h-8 text-emerald-400" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">Retail Plan</h2>
                <p className="text-slate-400 mb-6">Perfect for individual investors and small businesses</p>

                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-slate-300">Basic Integrity Score (0-100)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-slate-300">4 Key Risk Categories</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-slate-300">Top Evidence Highlights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-slate-300">5 Company Searches/Day</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-600/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                    </div>
                    <span className="text-slate-500 line-through">Advanced Analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-600/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                    </div>
                    <span className="text-slate-500 line-through">Portfolio Monitoring</span>
                  </div>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Choose Retail Plan
                </button>
              </div>

              {/* Institutional Tier */}
              <div 
                onClick={() => handleTierSelect('institutional')}
                className="group relative bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur border-2 border-indigo-500 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    ⭐ RECOMMENDED
                  </span>
                </div>

                <div className="absolute top-6 right-6">
                  <span className="bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full text-sm font-semibold">
                    Custom Pricing
                  </span>
                </div>

                <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors">
                  <Building2 className="w-8 h-8 text-indigo-300" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">Institutional Plan</h2>
                <p className="text-slate-300 mb-6">For VCs, Private Equity, and Corporate Teams</p>

                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                    </div>
                    <span className="text-white font-semibold">Everything in Retail, plus:</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                    </div>
                    <span className="text-slate-200">Financial Heat Maps & Deep Analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                    </div>
                    <span className="text-slate-200">Benford&apos;s Law Fraud Detection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                    </div>
                    <span className="text-slate-200">Real-Time Risk Alerts & Monitoring</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                    </div>
                    <span className="text-slate-200">Portfolio Risk Heat Maps</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                    </div>
                    <span className="text-slate-200">Document Cross-Reference Analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                    </div>
                    <span className="text-slate-200">Unlimited Searches & API Access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                    </div>
                    <span className="text-slate-200">Priority Support & Custom Reports</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg">
                  Choose Institutional Plan
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto animate-fade-in">
            <button
              onClick={() => setStep('tier')}
              className="text-slate-400 hover:text-white mb-6 flex items-center gap-2 transition-colors"
            >
              ← Back to plans
            </button>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {selectedTier === 'retail' ? <Users className="w-6 h-6 text-white" /> : <Building2 className="w-6 h-6 text-white" />}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Sign in to {selectedTier === 'retail' ? 'Retail' : 'Institutional'} Plan
                </h2>
                <p className="text-slate-400">Access your corporate intelligence dashboard</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@company.com"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-600 bg-slate-900" />
                    Remember me
                  </label>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Signing in...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="w-5 h-5" />
                      Sign In
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-slate-400">
                  Don&apos;t have an account?{' '}
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    Request Demo
                  </a>
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
