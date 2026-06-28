/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ShieldCheck, ClipboardCheck, Clock, Building2, HelpCircle, Star, AlertTriangle, ArrowRight, RefreshCw } from 'lucide-react';
import { FLEET_SOLUTIONS } from '../data/content';
import { FleetInquiry } from '../types';
import SEO from '../components/SEO';
import { SEO_BLUEPRINT } from '../data/content';
import { motion } from 'motion/react';
import ImageWithLoader from '../components/ImageWithLoader';
import { fadeInUp, staggerContainer } from '../lib/motion-variants';

import fleetLogisticsHubImg from '../assets/images/fleet_logistics_hub_1782617605817.jpg';

// Zod schema for Fleet Inquiry
const fleetSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  contactName: z.string().min(2, 'Contact name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number (at least 10 digits)'),
  fleetSize: z.coerce.number().min(1, 'Fleet size must be at least 1 vehicle'),
  vehicleTypes: z.array(z.string()).min(1, 'Please select at least one vehicle type'),
  currentChallenges: z.string().min(10, 'Please provide more details on your operational challenges (min 10 characters)'),
  partsRequirements: z.string().min(10, 'Please describe your parts requirements (min 10 characters)'),
  notes: z.string().optional()
});

type FleetFormData = z.infer<typeof fleetSchema>;

export default function FleetSolutions() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<FleetInquiry | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<any>({
    resolver: zodResolver(fleetSchema),
    defaultValues: {
      vehicleTypes: []
    }
  });

  const onSubmit = async (data: FleetFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Calculate priority based on fleet size (Lead Qualification metric)
      let priority: 'Low' | 'Medium' | 'High' = 'Medium';
      if (data.fleetSize >= 10) {
        priority = 'High';
      } else if (data.fleetSize < 3) {
        priority = 'Low';
      }

      const randomId = `FLT-2026-${Math.floor(100 + Math.random() * 900)}`;
      const newInquiry: FleetInquiry = {
        id: randomId,
        ...data,
        submittedAt: new Date().toISOString(),
        status: 'New',
        priority: priority
      };

      // Store in localStorage to sync with LeadCRMInbox
      const existingLeadsStr = localStorage.getItem('crotteau_fleet_leads');
      const existingLeads = existingLeadsStr ? JSON.parse(existingLeadsStr) : [];
      const updatedLeads = [newInquiry, ...existingLeads];
      localStorage.setItem('crotteau_fleet_leads', JSON.stringify(updatedLeads));

      setSuccessData(newInquiry);
      reset();
    } catch (err) {
      setSubmitError('An error occurred while submitting your commercial inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableVehicleTypes = FLEET_SOLUTIONS.vehicleTypes;

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO meta={SEO_BLUEPRINT.fleet} />

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
            Enterprise Logistics
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Commercial Fleet Parts Sourcing
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            Eliminate downtime. Customized procurement pipelines, emergency shipping, and consolidated billing agreements for professional fleets.
          </motion.p>
        </div>
      </motion.section>

      {/* Benefits breakdown */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight font-mono uppercase">
              Corporate Support Infrastructure
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our structured fleet program provides Southwest Florida business operators with direct advantages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET_SOLUTIONS.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm text-left">
                <span className="text-xs font-mono font-bold text-amber-600 block mb-1">PROGRAM PILLAR 0{idx + 1}</span>
                <h3 className="font-bold text-slate-950 mb-2">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core split layout: Information vs Inquiry Form */}
      <section className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: General Info & Context */}
            <div className="lg:col-span-5 text-left space-y-6">
              <h3 className="text-xl font-bold text-slate-950 font-mono uppercase">Commercial Fleet Support Services</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {FLEET_SOLUTIONS.overview}
              </p>

              <div className="relative overflow-hidden rounded-xl border border-slate-900 bg-slate-950 shadow-lg group">
                <ImageWithLoader
                  src={fleetLogisticsHubImg}
                  alt="Enterprise Fleet Logistics Vehicles"
                  className="w-full h-48 object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-3 text-left font-mono text-[9px] text-slate-400 z-10">
                  <span className="text-amber-500 font-bold block">SOUTHWEST FLORIDA NETWORK</span>
                  <span>Dedicated logistics pathways supporting regional freight dispatch.</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg space-y-4">
                <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase font-mono border-b border-slate-200 pb-2">
                  ✓ Priority Commercial Routing Criteria
                </h4>
                <div className="space-y-3 text-xs text-slate-600">
                  <p>
                    <strong>Enterprise Tier (Fleet Size 10+):</strong> Mapped directly to our Senior Corporate Parts Sourcing Engineers for 2-hour SLA response guarantees and net credit setup.
                  </p>
                  <p>
                    <strong>SME Local Tier (Fleet Size 1-9):</strong> Routed to local advisors specializing in Southwest Florida trade networks and fast regional freight coordinates.
                  </p>
                </div>
              </div>

              {/* Spam/Secured verification badge */}
              <div className="border border-slate-200 p-4 rounded-lg flex gap-3 bg-slate-50">
                <ShieldCheck className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="text-xs leading-relaxed text-slate-500">
                  <strong className="text-slate-800 block">Lead Security &amp; Encryption</strong>
                  All corporate information submitted is stored in compliance with local privacy frameworks and synced strictly to mapped corporate CRMs.
                </div>
              </div>
            </div>

            {/* Right: Fleet Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm text-left">
                
                {successData ? (
                  /* Form Success State */
                  <div className="space-y-6 text-center py-8">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                      <ClipboardCheck className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-slate-950">Fleet Inquiry Ticket Formed</h4>
                      <p className="text-xs font-mono text-amber-600 font-bold bg-slate-900 px-3 py-1.5 rounded inline-block tracking-wider">
                        TICKET ID: {successData.id}
                      </p>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed pt-2">
                        Thank you. Your commercial inquiry has been mapped to our <strong>{successData.priority === 'High' ? 'Commercial Fleet Account Hub' : 'Local SME Commercial Desk'}</strong>. An advisor will contact you within 2 business hours.
                      </p>
                    </div>

                    <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => setSuccessData(null)}
                        className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2 text-xs font-semibold rounded-lg transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                      <a
                        href="/#/crm-portal"
                        className="border border-slate-300 hover:border-slate-400 text-slate-700 px-4 py-2 text-xs font-semibold rounded-lg transition-colors inline-block text-center"
                      >
                        Inspect Lead in CRM Portal
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Active Form State */
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" id="fleet-inquiry-form">
                    <div className="border-b border-slate-200 pb-2 mb-2">
                      <h4 className="text-sm font-bold text-slate-900 uppercase font-mono flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-amber-500" /> Commercial Account Sourcing Setup
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">Please provide accurate corporate logistics details to qualify for net term benefits.</p>
                    </div>

                    {submitError && (
                      <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-lg text-xs font-semibold flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company Name */}
                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Company Name *</label>
                        <input
                          type="text"
                          {...register('companyName')}
                          placeholder="e.g. Southwest Marine Logistics"
                          className={`w-full bg-white border ${errors.companyName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.companyName && <p className="text-[10px] text-rose-600 mt-1">{errors.companyName.message}</p>}
                      </div>

                      {/* Contact Name */}
                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Contact Name *</label>
                        <input
                          type="text"
                          {...register('contactName')}
                          placeholder="e.g. Marcus Brody"
                          className={`w-full bg-white border ${errors.contactName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.contactName && <p className="text-[10px] text-rose-600 mt-1">{errors.contactName.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email Address */}
                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Email Address *</label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="e.g. m.brody@company.com"
                          className={`w-full bg-white border ${errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.email && <p className="text-[10px] text-rose-600 mt-1">{errors.email.message}</p>}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="e.g. (941) 555-7890"
                          className={`w-full bg-white border ${errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.phone && <p className="text-[10px] text-rose-600 mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Fleet Size */}
                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Active Fleet Size *</label>
                        <input
                          type="number"
                          {...register('fleetSize')}
                          placeholder="e.g. 15"
                          className={`w-full bg-white border ${errors.fleetSize ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.fleetSize && <p className="text-[10px] text-rose-600 mt-1">{errors.fleetSize.message}</p>}
                      </div>

                      {/* Vehicle types (Checkbox Matrix) */}
                      <div>
                        <span className="text-xs font-semibold text-slate-900 block mb-1.5">Vehicle Types *</span>
                        <div className="space-y-1 bg-white p-2.5 rounded-lg border border-slate-300 max-h-[110px] overflow-y-auto">
                          {availableVehicleTypes.map((type) => (
                            <label key={type} className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:bg-slate-50 p-0.5 rounded">
                              <input
                                type="checkbox"
                                value={type}
                                {...register('vehicleTypes')}
                                className="rounded text-amber-500 focus:ring-amber-500 w-3.5 h-3.5"
                              />
                              <span>{type}</span>
                            </label>
                          ))}
                        </div>
                        {errors.vehicleTypes && <p className="text-[10px] text-rose-600 mt-1">{errors.vehicleTypes.message}</p>}
                      </div>
                    </div>

                    {/* Challenges */}
                    <div>
                      <label className="text-xs font-semibold text-slate-900 block mb-1">Current Parts Sourcing Challenges *</label>
                      <textarea
                        {...register('currentChallenges')}
                        rows={2}
                        placeholder="e.g. Local stores do not stock heavy suspension components, leading to excessive service vehicle downtime."
                        className={`w-full bg-white border ${errors.currentChallenges ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                      ></textarea>
                      {errors.currentChallenges && <p className="text-[10px] text-rose-600 mt-1">{errors.currentChallenges.message}</p>}
                    </div>

                    {/* Requirements */}
                    <div>
                      <label className="text-xs font-semibold text-slate-900 block mb-1">Sourcing &amp; Parts Requirements *</label>
                      <textarea
                        {...register('partsRequirements')}
                        rows={2}
                        placeholder="e.g. We require consolidated monthly billing, custom hot-shot parts staging, and 4-hour local parts logistics dispatch."
                        className={`w-full bg-white border ${errors.partsRequirements ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                      ></textarea>
                      {errors.partsRequirements && <p className="text-[10px] text-rose-600 mt-1">{errors.partsRequirements.message}</p>}
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Additional Notes / Logistics Requests (Optional)</label>
                      <textarea
                        {...register('notes')}
                        rows={2}
                        placeholder="Provide any specific shipping codes, local warehouses, or special vehicle serial ranges here."
                        className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 text-slate-950 py-2.5 font-bold text-sm rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Processing Commercial Sourcing Ticket...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Fleet Sourcing Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
