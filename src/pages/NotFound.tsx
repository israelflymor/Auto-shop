/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Home, Wrench } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  const meta = {
    title: '404 - Parts Sourcing Blocked | Crotteau Auto Parts LLC',
    description: 'The requested page was not located. Return to the home page or submit a parts request to Crotteau Auto Parts LLC.',
    keywords: ['404 page not found', 'auto parts error code']
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4">
      <SEO meta={meta} />
      
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-xl p-8 text-center shadow-lg space-y-6">
        
        <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto border border-amber-200 text-amber-500">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-950 font-mono uppercase tracking-tight">PAGE NOT LOCATED</h1>
          <p className="text-xs font-mono text-slate-400">STATUS_CODE: 404_VEHICLE_ROUTE_BLOCKED</p>
          <p className="text-sm text-slate-600 leading-relaxed pt-2">
            The page path you are attempting to visit does not map to any active parts sourcing database directories or commercial sitemaps.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
          <Link
            to="/"
            className="w-full bg-[#121214] hover:bg-slate-900 text-white py-2.5 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow"
          >
            <Home className="w-4 h-4 text-amber-500" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/request"
            className="w-full border border-slate-300 hover:border-slate-400 text-slate-700 py-2.5 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 hover:bg-slate-50"
          >
            <Wrench className="w-4 h-4 text-amber-500" />
            <span>Submit a Sourcing Ticket</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
