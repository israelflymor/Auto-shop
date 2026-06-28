/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Clipboard, ShieldAlert, Award, Star, ArrowRight, Layers, Settings } from 'lucide-react';
import { SERVICES } from '../data/content';
import SEO from '../components/SEO';
import { SEO_BLUEPRINT } from '../data/content';
import { motion } from 'motion/react';
import ImageWithLoader from '../components/ImageWithLoader';
import { fadeInUp, staggerContainer } from '../lib/motion-variants';

import sourcingSpecialtyPartsImg from '../assets/images/sourcing_specialty_parts_1782617589764.jpg';

export default function PartsSourcing() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO meta={SEO_BLUEPRINT.sourcing} />

      {/* Page Header */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-[#121214] text-white py-16 text-center border-b border-slate-800"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <motion.span 
            variants={fadeInUp}
            className="text-xs font-mono font-bold text-amber-500 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full uppercase tracking-wider inline-block"
          >
            Procurement Expertise
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Auto Parts Sourcing Solutions
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            Eliminate national backorders. We identify, verify, and dispatch original equipment and certified aftermarket parts directly to you.
          </motion.p>
        </div>
      </motion.section>

      {/* Deep Dive: Sourcing Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug">
                VIN-Matched Sourcing Protocols: <br />
                <span className="text-amber-600">Eliminating Fitting Error Completely.</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Standard parts retailers depend on generic parts catalogs that only match general year, make, and model parameters. This results in an industry-wide return rate of over 25% for complex electronic and suspension components.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                Crotteau Auto Parts LLC enforces a strict 17-character VIN verification check for all powertrain, steering, electronic, and high-performance components.
              </p>
              <div className="bg-slate-100 p-5 rounded-lg border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 font-mono uppercase tracking-wider">Why we enforce VIN matching:</h4>
                <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
                  <li>Extracts precise mid-year factory engineering updates (split-years).</li>
                  <li>Identifies specific differential ratios and transmission models.</li>
                  <li>Ensures wiring harness and electrical sensor pinout compatibility.</li>
                  <li>Confirms original caliper size and suspension package trim.</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link
                  to="/request"
                  className="bg-[#121214] hover:bg-slate-800 text-white px-5 py-3 text-sm font-semibold rounded-lg transition-all inline-flex items-center gap-1.5"
                >
                  <span>Request a Part Sourcing Now</span>
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                </Link>
              </div>
            </div>

            {/* Sourcing Specializations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-3">
                <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center text-amber-500">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-950">Obsolete &amp; Vintage Sourcing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We maintain partnerships with classic warehouse salvages, specialty vintage distributors, and out-of-print manufacturing suppliers.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-3">
                <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center text-amber-500">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-950">CAPA Certified Aftermarket</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Avoid low-quality copies. We source CAPA (Certified Automotive Parts Association) sheet metal and lighting to ensure precise safety fits.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-3">
                <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center text-amber-500">
                  <Settings className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-950">Tier-1 OEM Components</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Acquire components directly from major global Tier-1 manufacturers who produce the parts for the auto builders themselves.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-3">
                <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center text-amber-500">
                  <Truck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-950">Specialized Freight Logistics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From critical individual modules to heavy palleted engine blocks, we coordinate specialized freight with major national carriers.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Physical Verification Showcase */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.05),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl group"
            >
              <ImageWithLoader
                src={sourcingSpecialtyPartsImg}
                alt="Pristine Custom Automotive Components"
                className="w-full h-80 object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-4 text-left font-mono text-[10px] text-slate-400 z-10">
                <span className="text-amber-500 font-bold block">SPECIALTY STORAGE ARCHIVE</span>
                <span>Physical matching against factory design criteria.</span>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-7 text-left space-y-6"
            >
              <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest block">
                Quality Verification Matrix
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Physical Inspection Prior to Regional Freight
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We maintain an ultra-exclusive inventory network mapping rare luxury, obsolete, and high-performance powertrain parts. Before dispatching any palletized components or electronic modules, our certified logistics technicians perform physical caliper measurements, connector pins audit, and casing leak inspections.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono text-slate-200">Optical Tolerances Check</h4>
                    <p className="text-[11px] text-slate-400 mt-1">High-resolution physical alignment analysis prevents mount mismatches.</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase font-mono text-slate-200">Electronic Pin Mapping</h4>
                    <p className="text-[11px] text-slate-400 mt-1">Resistance testing on complex sensor arrays ensures plug-and-play success.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sourcing Guarantee & Transparency Model (Trust System) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-white border-y border-slate-200 text-left"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block">Uncompromising Standards</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Our Professional Sourcing Guarantee
            </h2>
            <p className="text-sm text-slate-600">
              We operate under an absolute transparency model. Since we do not sell generic retail parts, our business model is completely aligned with your long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm uppercase font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Transparent Pricing Assurance
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We clearly break down part wholesale costs, shipping fees, and sourcing fees before dispatch. No hidden dealer markups, processing penalties, or handling markups.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm uppercase font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Physical Parts Inspection
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All vintage, salvaged, or out-of-stock rebuilds undergo an exhaustive physical quality inspection by our procurement experts prior to customer transit.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SLA Timeline Callout banner */}
      <section className="bg-[#121214] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider block">Rapid Turnaround SLA</span>
          <h3 className="text-2xl font-extrabold tracking-tight">Need a customized, professional sourcing quote?</h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Most standard quotes are formulated and delivered within 2-4 business hours. No credit cards or commitments required to query.
          </p>
          <div className="pt-4">
            <Link
              to="/request"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3 text-sm font-bold rounded-lg transition-all shadow inline-flex items-center gap-1.5"
            >
              <span>Submit Sourcing Request Ticket</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
