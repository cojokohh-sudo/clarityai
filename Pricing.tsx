import { Link } from 'react-router';
import { Check, Sparkles, Lock } from 'lucide-react';

export function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-slate-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Start with free analyses, then upgrade when you need deeper insight.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h3 className="text-slate-800">Free</h3>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-medium text-slate-900">$0</span>
            <span className="text-slate-600 ml-2">/ 3 analyses</span>
          </div>
          <p className="text-slate-600 mb-6">
            Perfect for trying out Clarity and getting quick, balanced guidance.
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">3 free decision analyses</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Clear pros and cons breakdown</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Thoughtful recommendation</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">No credit card required</span>
            </li>
          </ul>

          <Link 
            to="/tool" 
            className="block w-full py-3 text-center bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 transition-colors font-medium"
          >
            Start Free
          </Link>
        </div>

        {/* Premium Plan */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-8 border-2 border-slate-700 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
            Most Popular
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-6 h-6 text-purple-400" />
            <h3 className="text-white">Premium</h3>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-medium text-white">$12</span>
            <span className="text-slate-300 ml-2">/ month</span>
          </div>
          <p className="text-slate-300 mb-6">
            For anyone making important decisions and seeking deeper clarity.
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200">Unlimited decision analyses</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200">Everything in Free, plus:</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200">Emotional undercurrents analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200">Best/worst/likely outcome scenarios</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200">Long-term consequence mapping</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200">Reflective questions for deeper insight</span>
            </li>
          </ul>

          <Link 
            to="/tool" 
            className="block w-full py-3 text-center bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium"
          >
            Upgrade to Premium
          </Link>
        </div>
      </div>

      {/* FAQ or Additional Info */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-center text-slate-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-medium text-slate-800 mb-2">Can I cancel anytime?</h4>
            <p className="text-slate-600">
              Yes. Premium is billed monthly and you can cancel anytime with no penalties or commitments.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-medium text-slate-800 mb-2">How does Clarity work?</h4>
            <p className="text-slate-600">
              You share your decision, choose your analysis mode, and receive structured guidance that includes logical clarity, emotional insight, and practical recommendations.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-medium text-slate-800 mb-2">Is my information private?</h4>
            <p className="text-slate-600">
              Absolutely. Your decisions and analyses are completely private and never shared with anyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
