import { Analysis } from '../App';
import { ArrowLeft, Sparkles, Lock } from 'lucide-react';

interface AnalysisDisplayProps {
  analysis: Analysis;
  onReset: () => void;
  freeUsesRemaining: number;
}

export function AnalysisDisplay({ analysis, onReset, freeUsesRemaining }: AnalysisDisplayProps) {
  const formatAnalysisContent = (content: string) => {
    const sections = content.split(/(?=\d+\.\s)/);
    
    return sections.map((section, index) => {
      if (!section.trim()) return null;
      
      const lines = section.split('\n').filter(line => line.trim());
      const title = lines[0];
      const body = lines.slice(1);
      
      return (
        <div key={index} className="mb-8 last:mb-0">
          <h3 className="text-slate-800 mb-4">{title}</h3>
          <div className="space-y-2">
            {body.map((line, lineIndex) => {
              const trimmedLine = line.trim();
              if (!trimmedLine) return null;
              
              // Check if it's a subsection header
              if (trimmedLine.endsWith(':') && !trimmedLine.startsWith('-')) {
                return (
                  <p key={lineIndex} className="font-medium text-slate-700 mt-4 mb-2">
                    {trimmedLine}
                  </p>
                );
              }
              
              // Check if it's a bullet point
              if (trimmedLine.startsWith('-')) {
                return (
                  <p key={lineIndex} className="text-slate-600 pl-4">
                    {trimmedLine}
                  </p>
                );
              }
              
              // Regular paragraph
              return (
                <p key={lineIndex} className="text-slate-600 leading-relaxed">
                  {trimmedLine}
                </p>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
          {analysis.mode === 'free' ? (
            <>
              <Sparkles className="w-6 h-6 text-blue-600" />
              <div className="flex-1">
                <h2 className="text-slate-800">Free Analysis</h2>
                <p className="text-sm text-slate-500">{freeUsesRemaining} remaining</p>
              </div>
            </>
          ) : (
            <>
              <Lock className="w-6 h-6 text-purple-600" />
              <div className="flex-1">
                <h2 className="text-slate-800">Premium Analysis</h2>
                <p className="text-sm text-slate-500">Complete depth and insight</p>
              </div>
            </>
          )}
        </div>

        <div className="prose prose-slate max-w-none">
          {formatAnalysisContent(analysis.content)}
        </div>
      </div>

      <button
        onClick={onReset}
        className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-md mx-auto"
      >
        <ArrowLeft className="w-4 h-4" />
        Ask Another Question
      </button>
    </div>
  );
}
