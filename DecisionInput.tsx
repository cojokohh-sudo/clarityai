import { useState } from 'react';
import { AnalysisMode } from '../App';
import { Sparkles, Lock } from 'lucide-react';

interface DecisionInputProps {
  onAnalyze: (decision: string, mode: AnalysisMode) => void;
  freeUsesRemaining: number;
}

export function DecisionInput({ onAnalyze, freeUsesRemaining }: DecisionInputProps) {
  const [decision, setDecision] = useState('');
  const [selectedMode, setSelectedMode] = useState<AnalysisMode>('free');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (decision.trim()) {
      onAnalyze(decision, selectedMode);
    }
  };

  const canUseFree = freeUsesRemaining > 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="decision" className="block text-slate-700 mb-3">
            What decision are you facing?
          </label>
          <textarea
            id="decision"
            value={decision}
            onChange={(e) => setDecision(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
            rows={6}
            placeholder="Share what's on your mind. I'm here to help you think through it..."
            required
          />
        </div>

        <div>
          <p className="text-slate-700 mb-3">Choose your analysis mode</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setSelectedMode('free')}
              disabled={!canUseFree}
              className={`p-5 rounded-lg border-2 transition-all text-left ${
                selectedMode === 'free' && canUseFree
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              } ${!canUseFree ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-slate-800">Free Analysis</span>
                </div>
                <span className="text-sm text-slate-500">
                  {freeUsesRemaining}/3 remaining
                </span>
              </div>
              <p className="text-sm text-slate-600">
                Clear pros and cons with a thoughtful recommendation
              </p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMode('premium')}
              className={`p-5 rounded-lg border-2 transition-all text-left cursor-pointer ${
                selectedMode === 'premium'
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-slate-800">Premium Analysis</span>
                </div>
                <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                  Full Depth
                </span>
              </div>
              <p className="text-sm text-slate-600">
                Complete emotional insight, risk scenarios, and deeper guidance
              </p>
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!decision.trim() || (selectedMode === 'free' && !canUseFree)}
          className="w-full py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          Receive Clarity
        </button>
      </form>

      {selectedMode === 'free' && !canUseFree && (
        <p className="text-center text-sm text-slate-500 mt-4">
          You've used all your free analyses. Switch to Premium for unlimited access.
        </p>
      )}
    </div>
  );
}
