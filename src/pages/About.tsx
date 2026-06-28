/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldAlert, Compass, Target, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, BRAND_STYLE_GUIDE } from '../data/content';
import SEO from '../components/SEO';
import { SEO_BLUEPRINT } from '../data/content';

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO meta={SEO_BLUEPRINT.about} />

      {/* Page Header */}
      <section className="bg-[#121214] text-white py-16 text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-500 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full uppercase tracking-wider">
            Our Corporate Profile
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Crotteau Auto Parts LLC
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Headquartered in Punta Gorda, Florida, providing specialized automotive consultation and elite commercial parts logistics.
          </p>
        </div>
      </section>

      {/* Core Company Identity & Story Placeholder */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm space-y-6 text-left">
            <h2 className="text-xl font-bold text-slate-950 border-b border-slate-200 pb-3 font-mono uppercase tracking-tight flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-500" />
              Corporate Background &amp; Origins
            </h2>
            
            <p className="text-sm text-slate-700 leading-relaxed">
              Crotteau Auto Parts LLC is a licensed, professional automotive parts procurement and consulting firm serving Southwest Florida and client networks nationwide. Unlike standard parts stores, we do not stock generic, high-margin retail inventory. We operate as an elite advisory service that leverages custom-built private supplier systems to source exact VIN-matched components.
            </p>

            {/* Clearly marked placeholder as instructed */}
            <div className="bg-slate-50 border-l-4 border-amber-500 p-5 rounded-r-lg space-y-2 font-mono text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-amber-700 uppercase flex items-center gap-1">
                <ShieldAlert className="w-4 h-4" /> [Company Story Placeholder]
              </span>
              <p>
                The client will supply their specific company founding story, years of experience, and historical milestones here. Crotteau Auto Parts LLC maintains a strict commitment to compliance and authenticity, and does not invent operational facts.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-200/60 mt-2 text-[10px]">
                <div>
                  <span className="text-slate-400 block">FOUNDING YEAR:</span>
                  <span className="text-slate-800 font-bold">{BUSINESS_INFO.foundingYear} (Registered LLC)</span>
                </div>
                <div>
                  <span className="text-slate-400 block">YEARS IN BUSINESS:</span>
                  <span className="text-slate-800 font-bold">[Years in Business Placeholder]</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              Our core strategy centers on technical expertise and deep diagnostics. Every component we source undergoes structured fitment verification against the vehicle&apos;s physical chassis parameters and manufacture build sheet, reducing parts return rates to absolute zero.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Systems */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-amber-500">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 uppercase tracking-tight font-mono">Our Sourcing Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To eliminate automotive downtime and mechanical fitment errors through precision parts engineering consulting and dedicated procurement logistics. We believe in providing absolute clarity and technical accountability in an industry often plagued by generic, low-quality catalog matches.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-amber-500">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 uppercase tracking-tight font-mono">Our Professional Values</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We operate under three primary pillars: absolute transparency in pricing, uncompromising VIN-matched accuracy, and rapid communication responsiveness. Crotteau Auto Parts LLC maintains direct commercial relationships with Tier 1 manufacturers and certified national exchanges to guarantee component integrity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Case Studies / Future Testimonials Placeholder */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-10 shadow-lg text-left space-y-6">
            <h3 className="text-lg font-bold tracking-wider text-slate-400 font-mono uppercase">
              ★ Client Success Records &amp; Endorsements
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We compile and maintain verified documentation of fleet contracts, vintage vehicle restorations, and heavy mechanical sourcing solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <div className="bg-slate-950 p-5 rounded border border-slate-850 space-y-2 text-xs">
                <span className="text-amber-500 font-bold font-mono uppercase block">[Future Customer Testimonial #1]</span>
                <p className="text-slate-400 italic">
                  &ldquo;A verified commercial or individual customer testimonial discussing Crotteau Auto Parts LLC sourcing speed and VIN accuracy will go here once collected.&rdquo;
                </p>
                <span className="text-slate-500 block text-[10px] pt-1 border-t border-slate-900">— Punta Gorda Yacht/Marine Services</span>
              </div>

              <div className="bg-slate-950 p-5 rounded border border-slate-850 space-y-2 text-xs">
                <span className="text-amber-500 font-bold font-mono uppercase block">[Future Customer Testimonial #2]</span>
                <p className="text-slate-400 italic">
                  &ldquo;A verified commercial fleet or restoration workshop quote highlighting hard-to-find part procurement success and direct freight dispatch parameters.&rdquo;
                </p>
                <span className="text-slate-500 block text-[10px] pt-1 border-t border-slate-900">— Obsolete Restoration Workshop client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Link strip */}
      <section className="bg-amber-500 text-slate-950 py-12 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl font-extrabold tracking-tight">Need technical consultation on a specific build?</h3>
          <p className="text-sm text-slate-800 max-w-xl mx-auto">
            Our principal Parts Advisers are available to assist with diagnostic verification and material tracking.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="bg-slate-950 hover:bg-slate-850 text-white px-5 py-2.5 text-xs font-bold rounded-lg transition-all inline-flex items-center gap-1.5"
            >
              <span>Consult with our Advisors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
