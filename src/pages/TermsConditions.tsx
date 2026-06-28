/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, FileText, AlertTriangle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import SEO from '../components/SEO';

export default function TermsConditions() {
  const currentYear = new Date().getFullYear();

  const meta = {
    title: 'Terms & Conditions | Crotteau Auto Parts LLC',
    description: 'Terms and Conditions of service for Crotteau Auto Parts LLC. Learn about quote expiration, parts fitment policies, and commercial terms.',
    keywords: ['terms and conditions Crotteau parts', 'parts procurement terms', 'auto parts quote expiry']
  };

  return (
    <div className="bg-slate-50 min-h-screen text-left">
      <SEO meta={meta} />

      {/* Page Header */}
      <section className="bg-[#121214] text-white py-12 text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Last Updated: June 2026 | Crotteau Auto Parts LLC
          </p>
        </div>
      </section>

      {/* Content Container */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm space-y-8">
          
          <div className="flex gap-4 border-b border-slate-100 pb-4">
            <FileText className="w-8 h-8 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-base font-bold text-slate-950 font-mono uppercase tracking-tight">Terms of Sourcing &amp; Procurement</h2>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Please review our official trade terms. By submitting parts request tickets or fleet setup files to Crotteau Auto Parts LLC, you authorize our consultants to perform supplier queries and agree to the guidelines specified below.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-500" /> 1. Sourcing Quote Expiration
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Automotive supplier exchange pricing and logistics container freight rates fluctuate rapidly. All parts sourcing quotes delivered by Crotteau Auto Parts LLC are valid for exactly <strong>14 calendar days</strong> from the date of ticket formulation. After 14 days, we reserve the right to perform a fresh query and revise parts or logistics pricing accordingly.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-500" /> 2. Fitment &amp; VIN Compatibility Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Crotteau Auto Parts LLC guarantees 100% mechanical fitment only if the client provides a correct 17-digit VIN during the initial parts request. If a part sourced under a verified VIN fails to fit due to catalog matching errors, Crotteau Auto Parts LLC will coordinate a free return and replacement. We do not accept responsibility for fitment errors on parts ordered without a verified VIN.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> 3. Special Obsolete &amp; Salvage Orders
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Specialized vintage castings, obsolete electrical modules, and custom salvaged panels sourced from international exchanges are purchased on a non-refundable basis once shipped by the primary supplier. Such limitations will always be clearly noted on your parts quote ticket before procurement is authorized.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono">4. Commercial Fleet Net Terms</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Net billing terms, corporate credit approvals, and custom local hot-shot shipping SLAs are subject to formal underwriting audits and signed corporate trade contracts. Submission of a fleet inquiry does not automatically constitute credit approval or guarantee credit eligibility.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono">5. Governing Law</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the State of Florida. Any legal proceedings arising from transactions with Crotteau Auto Parts LLC must be filed in Charlotte County, Florida.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
