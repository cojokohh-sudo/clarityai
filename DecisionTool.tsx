import { useState } from 'react';
import { DecisionInput } from '../components/DecisionInput';
import { AnalysisDisplay } from '../components/AnalysisDisplay';

export type AnalysisMode = 'free' | 'premium';

export interface Analysis {
  mode: AnalysisMode;
  content: string;
}

export function DecisionTool() {
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [freeUsesRemaining, setFreeUsesRemaining] = useState(3);

  const handleAnalyze = (decision: string, mode: AnalysisMode) => {
    const mockAnalysis = generateMockAnalysis(decision, mode);
    setAnalysis({ mode, content: mockAnalysis });
    
    if (mode === 'free' && freeUsesRemaining > 0) {
      setFreeUsesRemaining(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnalysis(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-slate-800 mb-3">Decision Guide</h1>
        <p className="text-slate-600 text-lg">Share what's on your mind, and receive calm, thoughtful guidance.</p>
      </header>

      {!analysis ? (
        <DecisionInput 
          onAnalyze={handleAnalyze} 
          freeUsesRemaining={freeUsesRemaining}
        />
      ) : (
        <AnalysisDisplay 
          analysis={analysis} 
          onReset={handleReset}
          freeUsesRemaining={freeUsesRemaining}
        />
      )}
    </div>
  );
}

function generateMockAnalysis(decision: string, mode: AnalysisMode): string {
  if (mode === 'free') {
    return `1. GENTLE LOGICAL OVERVIEW

Pros:
- This path offers you the opportunity to explore new possibilities and step outside your current comfort zone.
- There's potential for personal growth and learning experiences that could serve you well in the future.

Cons:
- You may face uncertainty and challenges that require time and energy to navigate.
- There's a risk of disrupting the stability and familiarity you currently have.

2. CALM VERDICT

After considering both sides, I'd gently encourage you to move forward with this decision. The growth potential outweighs the temporary discomfort of change. Trust that you have the resilience to handle whatever comes, and remember that staying stagnant often carries its own quiet cost. Take a small first step, and allow yourself to adjust as you go.`;
  } else {
    return `1. LOGICAL CLARITY

Pros:
- This decision aligns with your stated values and long-term vision for your life.
- It creates opportunities for meaningful experiences and connections.
- The timing appears favorable based on your current circumstances.

Cons:
- You'll need to let go of certain comforts and certainties you've grown accustomed to.
- There will be an adjustment period that may feel uncomfortable or challenging.
- Some relationships or routines may need to shift to accommodate this change.

Long-term Consequences:
Looking ahead, this choice is likely to compound positively over time. What feels difficult now often becomes the foundation for future resilience and capability.

2. EMOTIONAL UNDERCURRENTS

Possible Fears:
You may be carrying a quiet fear of disappointing others or of discovering that you're not capable of handling what comes next. There's also the fear of regret—both of acting and of not acting.

Underlying Desires:
Beneath the surface, you're seeking authenticity and alignment. You want to feel alive and purposeful, not just comfortable. There's a desire to prove to yourself that you can navigate uncertainty with grace.

Emotional Bias:
Your hesitation may be rooted more in the fear of the unknown than in actual evidence that this is the wrong path. Notice if you're giving more weight to imagined catastrophes than to realistic outcomes.

3. RISK LANDSCAPE

Best Case Scenario:
You make this change and discover a renewed sense of purpose and energy. The challenges you encounter become sources of strength, and within six months to a year, you look back with gratitude for having trusted yourself.

Worst Case Scenario:
The transition is harder than expected, and you face setbacks that test your resolve. You may need to course-correct or adapt your approach, which requires humility and flexibility.

Most Likely Outcome:
You'll experience a mix of growth and discomfort. The first few weeks or months will feel uncertain, but as you settle in, you'll find your rhythm. You'll encounter obstacles, but none that are insurmountable, and you'll emerge more confident in your ability to navigate change.

4. GROUNDED RECOMMENDATION

Move forward with this decision, but do so with intention and self-compassion. Don't expect perfection or immediate clarity—allow yourself the grace of a learning curve. Trust that you have the inner resources to handle whatever unfolds, and remember that growth rarely feels comfortable in the moment. This is your life to shape, and choosing courage over comfort is rarely the wrong choice.

One question to sit with: What would you tell a dear friend who came to you with this exact decision?`;
  }
}
