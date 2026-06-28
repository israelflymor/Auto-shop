/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Lock, Eye, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  const meta = {
    title: 'Privacy Policy | Crotteau Auto Parts LLC',
    description: 'Privacy Policy for Crotteau Auto Parts LLC. Learn how we handle parts requests, vehicle VINs, and fleet data securely.',
    keywords: ['privacy policy Crotteau parts', 'auto parts data security', 'VIN privacy policies']
  };

  return (
    <div className="bg-slate-50 min-h-screen text-left">
      <SEO meta={meta} />

      {/* Page Header */}
      <section className="bg-[#121214] text-white py-12 text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Privacy Policy
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
            <Lock className="w-8 h-8 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-base font-bold text-slate-950 font-mono uppercase tracking-tight">Our Commitment to Sourcing Security</h2>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                At Crotteau Auto Parts LLC, we treat your contact details and vehicle specs with high confidentiality. We never sell, lease, or distribute private vehicle ownership rosters, corporate fleet compositions, or personal correspondence registries.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono">1. Information We Collect</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We collect information that you actively submit to our sourcing desk via parts request tickets, general contact forms, or fleet qualification sheets. This includes:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 pl-4 space-y-1">
              <li><strong>Contact Information:</strong> Name, Email, Corporate Titles, Phone Numbers.</li>
              <li><strong>Vehicle Specifications:</strong> Years, Makes, Models, and 17-character VIN inputs.</li>
              <li><strong>Logistics Details:</strong> Fleet volumes, delivery addresses, shipping notes, reference drawings, and photographs.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono">2. How We Utilize Your Specifications</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your data exists solely to help us physically locate, verify, and deliver exact replacement parts. Specifically, we use your specifications to:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 pl-4 space-y-1">
              <li>Query manufacturer databases and private trade exchanges.</li>
              <li>Generate accurate wholesale pricing and shipping quotes.</li>
              <li>Format webhook payload streams synchronized directly to our partner CRM interfaces (e.g. HubSpot, Salesforce).</li>
              <li>Comply with Florida commercial shipping audits and logistics regulations.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono">3. Security and Local Storage</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To support an excellent user experience, our website uses industry-standard client-side storage technologies (such as <code>localStorage</code>) to temporarily persist submitted request tickets in your browser workspace. All transmission streams directed to our backend servers utilize SSL (Secure Sockets Layer) encryption schemas to prevent intercept risks.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-950 uppercase font-mono">4. Contacting our Compliance Officer</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If you have any questions, regulatory requests, or auditing concerns regarding your parts request records or fleet data, please contact the Crotteau Compliance desk directly at:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs font-mono text-slate-700 space-y-1">
              <p><strong>Corporate Name:</strong> {BUSINESS_INFO.name}</p>
              <p><strong>Headquarters Address:</strong> {BUSINESS_INFO.address}</p>
              <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
              <p><strong>Phone:</strong> {BUSINESS_INFO.phone}</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
