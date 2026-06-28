/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Sparkles, HelpCircle, ArrowRight, Star, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, FAQS } from '../data/content';
import SEO from '../components/SEO';
import { SEO_BLUEPRINT } from '../data/content';
import ImageWithLoader from '../components/ImageWithLoader';
import { 
  fadeInUp as fadeInUpVariant, 
  staggerContainer as staggerContainerVariant 
} from '../lib/motion-variants';

// Import newly generated high-quality images
import heroPartsImg from '../assets/images/hero_automotive_parts_1782616626369.jpg';
import sourcingWarehouseImg from '../assets/images/sourcing_warehouse_1782616642114.jpg';
import fleetTrucksImg from '../assets/images/commercial_fleet_trucks_1782616657095.jpg';

export default function Home() {
  const previewServices = SERVICES.slice(0, 3);
  const previewFaqs = FAQS.slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO meta={SEO_BLUEPRINT.home} />

      {/* Hero Section */}
      <section className="relative bg-[#121214] text-white pt-24 pb-28 overflow-hidden" id="homepage-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.06),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy block with premium sequential stagger */}
            <motion.div 
              variants={staggerContainerVariant}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6 text-left"
            >
              <motion.div variants={fadeInUpVariant} className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-xs font-mono text-amber-500 font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Punta Gorda Sourcing Desk</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUpVariant} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                Need The Right Part? <br />
                <span className="text-amber-500">We&apos;ll Help You Find It.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUpVariant} className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                OEM, aftermarket, and hard-to-find auto parts sourced and certified for vehicle owners, commercial fleets, and dealerships. 100% VIN-matched fitment guarantee.
              </motion.p>

              {/* Conversion Buttons */}
              <motion.div variants={fadeInUpVariant} className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/request"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3.5 text-base font-bold rounded-lg transition-all shadow-md hover:shadow-lg active:scale-[0.98] inline-flex items-center justify-center gap-2 group"
                  id="hero-primary-cta"
                >
                  <span>Submit Sourcing Request</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/fleet"
                  className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 px-6 py-3.5 text-base font-semibold rounded-lg transition-all hover:border-slate-750 inline-flex items-center justify-center gap-2"
                >
                  <span>Commercial Fleet Solutions</span>
                </Link>
              </motion.div>

              {/* Instant Trust Badges */}
              <motion.div variants={fadeInUpVariant} className="pt-6 border-t border-slate-900/80 grid grid-cols-3 gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>100% VIN Verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>2-4 Hr Quotes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Nationwide Freight</span>
                </div>
              </motion.div>

            </motion.div>

            {/* Right Interactive Mock card / UI Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-5 relative space-y-6"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 opacity-20 blur-xl"></div>
              
              {/* VIN Mock Card */}
              <div className="relative bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl text-left text-slate-300 font-mono text-xs">
                
                <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-4">
                  <span className="text-amber-500 font-bold uppercase tracking-wider text-[11px]">Sourcing Protocol #C-432</span>
                  <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-900 px-2 py-0.5 rounded text-[10px] font-semibold">Active Engine</span>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <span className="text-slate-500 block text-[10px]">VERIFIED VEHICLE TARGET</span>
                    <span className="text-white text-sm font-bold">1991 Porsche 911 Carrera 4 (964)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">17-CHARACTER VIN INPUT</span>
                    <span className="text-amber-500 tracking-wider">WP0AB2967MSXXXXXX</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">OBSTRUCTED/BACKORDERED COMPONENT REQUESTED</span>
                    <span className="text-white">OEM Front Right Wheel Hub Assembly</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-850 text-[11px] leading-relaxed">
                    <span className="text-emerald-400 font-bold block mb-1">✓ Sourced Successfully:</span>
                    Found NOS (New Old Stock) in Stuttgart distributor hub. Transit cleared for express local delivery.
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-900 pt-4 flex justify-between items-center">
                  <span className="text-slate-500">Consultation Rating:</span>
                  <div className="flex gap-1 text-amber-500">
                    <Star className="w-3 h-3 fill-amber-500" />
                    <Star className="w-3 h-3 fill-amber-500" />
                    <Star className="w-3 h-3 fill-amber-500" />
                    <Star className="w-3 h-3 fill-amber-500" />
                    <Star className="w-3 h-3 fill-amber-500" />
                  </div>
                </div>

              </div>

              {/* Photo Card showing pristine performance parts */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-900 bg-slate-950 shadow-2xl group">
                <ImageWithLoader 
                  src={heroPartsImg} 
                  alt="Premium OEM Sourced Automobile Parts" 
                  className="w-full h-44 object-cover opacity-85 group-hover:scale-105 transition-all duration-500"
                  priority={true}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 text-left font-mono text-[10px] text-slate-400 z-10">
                  <span className="text-amber-500 font-bold block">PRECISION-MAPPED FITMENTS</span>
                  <span>Physical verification of rare powertrain, engine, and electrical parts prior to local freight dispatch.</span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust Stats / Bar */}
      <motion.section 
        variants={staggerContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="bg-white border-y border-slate-200 py-8 relative z-20" 
        id="trust-indicator-strip"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <motion.div variants={fadeInUpVariant} className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-[#121214] font-mono">100%</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">VIN Compatibility Guarantee</p>
            </motion.div>
            <motion.div variants={fadeInUpVariant} className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-[#121214] font-mono">2-4 hr</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Average Sourcing Quote SLA</p>
            </motion.div>
            <motion.div variants={fadeInUpVariant} className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-[#121214] font-mono">0$</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Upfront Credit Card Fee</p>
            </motion.div>
            <motion.div variants={fadeInUpVariant} className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-[#121214] font-mono">Nationwide</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Specialized Freight Logistics</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sourcing Process: How We Help */}
      <motion.section 
        variants={staggerContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 bg-slate-50" 
        id="how-we-help"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            variants={fadeInUpVariant}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 uppercase tracking-wider">
              Procurement Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              How Our Auto Parts Sourcing Network Operates
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Forget scrolling endlessly through suspicious marketplace databases. We offer a high-touch, error-free consulting service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUpVariant}
              className="bg-white border border-slate-200 p-8 rounded-xl relative shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[#121214] flex items-center justify-center text-amber-500 font-mono font-bold text-lg mb-6 shadow-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Submit Specifications &amp; VIN</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Provide us your vehicle make, model, year, and 17-character VIN along with a description of the desired component. Upload reference photos if available.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariant}
              className="bg-white border border-slate-200 p-8 rounded-xl relative shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[#121214] flex items-center justify-center text-amber-500 font-mono font-bold text-lg mb-6 shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Network Sourcing &amp; Verification</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We query OEM-direct, aftermarket manufacturers, and private certified parts suppliers. We cross-verify build sheets to ensure 100% mechanical compatibility.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariant}
              className="bg-white border border-slate-200 p-8 rounded-xl relative shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[#121214] flex items-center justify-center text-amber-500 font-mono font-bold text-lg mb-6 shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Receive Quote &amp; Dispatch</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We send a clear quote detailing condition, pricing, and freight timeline. Upon authorization, we ship the component immediately to your home, workplace, or repair shop.
              </p>
            </motion.div>
          </div>

          {/* Warehouse Visual & Sourcing Network section */}
          <motion.div 
            variants={fadeInUpVariant}
            className="mt-16 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full">
              <ImageWithLoader 
                src={sourcingWarehouseImg} 
                alt="State of the art parts warehouse logistics center" 
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="lg:col-span-7 p-8 sm:p-10 text-left flex flex-col justify-center space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Punta Gorda's Ultimate Parts Procurement Network
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We operate far beyond standard retail auto parts counters. Our dedicated staff utilizes exclusive factory feeds, certified distributor warehouses, and physical salvage pipelines to track down components that others declare permanently out of stock or completely backordered.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Authorized Partner Channels
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Pristine Warehouse Audits
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Services Grid (Who We Serve & Services Breakdown) */}
      <motion.section 
        variants={staggerContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 bg-white border-y border-slate-200" 
        id="services-breakdown"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            variants={fadeInUpVariant}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 uppercase tracking-wider">
              Service Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Expert Sourcing &amp; Automotive Logistics
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Providing customized consulting solutions for vehicle owners, commercial fleets, repair shops, and restorations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {previewServices.map((service) => (
              <motion.div 
                variants={fadeInUpVariant}
                key={service.id} 
                className="border border-slate-200 p-8 rounded-xl bg-slate-50 hover:bg-white hover:border-amber-400 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3">{service.title}</h3>
                  <p className="text-xs text-slate-500 font-mono mb-4">{service.shortDesc}</p>
                  <p className="text-sm text-slate-700 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>
                  <ul className="space-y-2.5 mb-8 border-t border-slate-200 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/request"
                  className="w-full text-center bg-[#121214] hover:bg-slate-900 text-white py-2.5 text-xs font-semibold rounded-lg transition-colors inline-block"
                >
                  {service.cta}
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* Commercial Fleet Preview Module */}
      <motion.section 
        variants={staggerContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 bg-[#121214] text-white overflow-hidden" 
        id="fleet-preview"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              variants={fadeInUpVariant}
              className="lg:col-span-6 space-y-6 text-left"
            >
              <span className="text-xs font-mono font-bold text-amber-500 border border-slate-800 bg-slate-900 px-3 py-1 rounded-full uppercase tracking-wider">
                Fleet Logistics Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">
                Minimize Commercial Downtime.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                For commercial fleet operations, out-of-service trucks translate directly to compromised revenue. Crotteau Auto Parts LLC delivers high-priority parts acquisition, custom billing setups, and dedicated logistics pipelines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-400 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <span>Dedicated Commercial Sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <span>Expedited local hot-shot delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <span>Flexible consolidated billing terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <span>Tiered high-volume fleet discounts</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/fleet"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-3 text-sm font-bold rounded-lg transition-all shadow-sm inline-flex items-center gap-1.5"
                >
                  <span>Access Fleet Solutions Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariant}
              className="lg:col-span-6 space-y-6"
            >
              {/* Premium Fleet Visual Thumbnail */}
              <div className="relative overflow-hidden rounded-xl border border-slate-900 bg-slate-950 shadow-2xl group">
                <ImageWithLoader 
                  src={fleetTrucksImg} 
                  alt="Commercial Fleet Support Vehicles" 
                  className="w-full h-44 object-cover opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 text-left font-mono text-[10px] text-slate-400 z-10">
                  <span className="text-amber-500 font-bold block">COMMERCIAL INVENTORY MATRIX</span>
                  <span>Sourcing transits, hauling pickups, and municipal specialized equipment parts.</span>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-900 rounded-xl p-8 space-y-6 text-left shadow-2xl">
                <h3 className="text-sm font-bold tracking-wider text-slate-450 font-mono uppercase">
                  ✓ Enterprise Fleet Coverage Matrix
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-slate-900 pb-3">
                    <span className="text-xs text-amber-500 font-mono block mb-1">LIGHT-DUTY TRANSITS &amp; UTILITIES</span>
                    <p className="text-xs text-slate-300">Ford Transit, Ram ProMaster, Chevrolet Express. Fast sourcing of brake packages, emissions parts, and HVAC kits.</p>
                  </div>
                  <div className="border-b border-slate-900 pb-3">
                    <span className="text-xs text-amber-500 font-mono block mb-1">CONTRACTOR HAULERS &amp; HD TRUCKS</span>
                    <p className="text-xs text-slate-300">Ford Super Duty F-250/350, Ram 3500, GM Duramax. Immediate access to heavy-duty steering racks, turbochargers, and transfer cases.</p>
                  </div>
                  <div>
                    <span className="text-xs text-amber-500 font-mono block mb-1">SPECIALTY MUNICIPAL CARRIERS</span>
                    <p className="text-xs text-slate-300">Maintenance utilities, refuse trucks, bucket loaders. Custom sourcing for specialized hydraulics, pumps, and suspension parts.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* FAQ Preview Strip */}
      <motion.section 
        variants={staggerContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 bg-slate-50 border-t border-slate-200" 
        id="faq-preview-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            variants={fadeInUpVariant}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 uppercase tracking-wider">
              FAQ Help
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Sourcing Questions
            </h2>
            <p className="text-sm text-slate-600">
              Clear, transparent information on quote times, VIN matching, shipping policies, and payment terms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewFaqs.map((faq, idx) => (
              <motion.div 
                variants={fadeInUpVariant}
                key={idx} 
                className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm text-left"
              >
                <div className="flex items-start gap-2.5 mb-3 text-slate-900">
                  <HelpCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <h4 className="font-bold text-sm text-slate-900 leading-snug">{faq.question}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7 border-l-2 border-slate-100">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={fadeInUpVariant}
            className="text-center mt-10"
          >
            <Link
              to="/faq"
              className="border border-slate-300 hover:border-slate-400 text-slate-700 px-5 py-2.5 text-xs font-semibold rounded-lg transition-all inline-block hover:bg-white"
            >
              Browse Complete FAQ Database
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Final Sourcing Conversion Section (CTA) */}
      <motion.section 
        variants={staggerContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="bg-gradient-to-br from-[#121214] to-slate-950 text-white py-16 text-center border-t border-slate-900 relative overflow-hidden" 
        id="final-cta"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.03),transparent_60%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <motion.h2 variants={fadeInUpVariant} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Ready to secure the exact parts you need?
          </motion.h2>
          <motion.p variants={fadeInUpVariant} className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Eliminate fitment errors, unverified supplier risks, and dealer pricing markups. Consult directly with the Crotteau procurement team today.
          </motion.p>
          <motion.div variants={fadeInUpVariant} className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              to="/request"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3 text-sm font-bold rounded-lg transition-all shadow-md inline-flex items-center justify-center gap-1.5"
            >
              <span>Submit Sourcing Request</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="border border-slate-800 hover:border-slate-700 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 text-sm font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-1.5"
            >
              <span>Contact Sourcing Hotline</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
}
