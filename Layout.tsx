import { Outlet, Link, useLocation } from 'react-router';
import { Sparkles } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <Sparkles className="w-6 h-6 text-blue-600 group-hover:rotate-12 transition-transform" />
              <span className="text-xl font-medium text-slate-800">Clarity</span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link 
                to="/tool" 
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Decision Tool
              </Link>
              <Link 
                to="/pricing" 
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Pricing
              </Link>
              <Link 
                to="/tool" 
                className="px-5 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="border-t border-slate-200 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-800">Clarity</span>
              </div>
              <p className="text-slate-600 max-w-md">
                A calm, emotionally intelligent decision guide designed to help you navigate life's choices with confidence and clarity.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-800 mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/tool" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Decision Tool
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-800 mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
            2026 Clarity. A thoughtful space for better decisions.
          </div>
        </div>
      </footer>
    </div>
  );
}
