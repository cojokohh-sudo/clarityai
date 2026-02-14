import { Link } from 'react-router';
import { Brain, Heart, TrendingUp, CheckCircle } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-slate-900 mb-6 max-w-4xl mx-auto">
          Make Better Decisions with Calm, Clear Guidance
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Clarity is your emotionally intelligent decision guide. We help you cut through confusion, understand your deeper motivations, and choose with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/tool" 
            className="px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-lg font-medium"
          >
            Try It Free
          </Link>
          <Link 
            to="/pricing" 
            className="px-8 py-4 bg-white text-slate-800 rounded-lg hover:bg-slate-50 transition-colors text-lg font-medium border-2 border-slate-200"
          >
            View Pricing
          </Link>
        </div>
        <p className="text-sm text-slate-500 mt-4">
          3 free analyses. No credit card required.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-center text-slate-900 mb-12">
          How Clarity Helps You Decide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-slate-800 mb-3">Logical Clarity</h3>
            <p className="text-slate-600 leading-relaxed">
              We break down the pros, cons, and trade-offs in a way that's clear and digestible. No fluff, just insight.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-slate-800 mb-3">Emotional Intelligence</h3>
            <p className="text-slate-600 leading-relaxed">
              We help you understand the fears and desires influencing your choice, so you can decide from a place of self-awareness.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-slate-800 mb-3">Risk Scenarios</h3>
            <p className="text-slate-600 leading-relaxed">
              Explore best case, worst case, and most likely outcomes. Walk into your decision with eyes wide open.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-slate-900 mb-12">
            Simple, Thoughtful Process
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Share Your Decision</h4>
                <p className="text-slate-600">
                  Tell us what you're facing. No judgment, just a safe space to think out loud.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Choose Your Analysis</h4>
                <p className="text-slate-600">
                  Pick a free analysis for quick clarity, or premium for deeper emotional insight and risk exploration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Receive Clear Guidance</h4>
                <p className="text-slate-600">
                  Get a thoughtful, balanced recommendation. No vague advice. No "it depends." Just calm, grounded direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 text-center text-white">
          <h2 className="text-white mb-6">
            Make Decisions You Can Trust
          </h2>
          <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto">
            Stop second-guessing yourself. Clarity gives you the structure and support to choose wisely, calmly, and confidently.
          </p>
          <Link 
            to="/tool" 
            className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors text-lg font-medium"
          >
            Start Your Free Analysis
          </Link>
        </div>
      </section>
    </div>
  );
}
