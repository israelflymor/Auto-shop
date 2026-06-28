/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ClipboardCheck, ArrowRight, RefreshCw, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import SEO from '../components/SEO';
import { SEO_BLUEPRINT } from '../data/content';

// Contact validation schema
const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number (min 10 digits)'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate API submit delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      reset();
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO meta={SEO_BLUEPRINT.contact} />

      {/* Page Header */}
      <section className="bg-[#121214] text-white py-16 text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-500 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full uppercase tracking-wider">
            Trade Relations
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Contact Crotteau Auto Parts LLC
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Get in touch with our Punta Gorda parts desk. We assist with bulk commercial setups, technical consulting, and obsolete parts orders.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Office Details */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-950 font-mono uppercase tracking-tight">Sourcing Headquarters</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our core sourcing desk coordinates logistics, shipping verification, and dealer networks directly from Punta Gorda, Florida.
                </p>
              </div>

              {/* Contact Information Blocks */}
              <div className="space-y-4">
                
                <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Location Address</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {BUSINESS_INFO.address}<br />
                      <span className="text-xs text-slate-400 font-mono">Punta Gorda, Charlotte County, Florida</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <Phone className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Sourcing Hotline</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="hover:underline text-amber-600 font-semibold font-mono">
                        {BUSINESS_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <Mail className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Email Inbox</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-all">
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:underline text-slate-800 font-mono">
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <Clock className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Operating Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-mono">
                      {BUSINESS_INFO.hours}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Inquiry Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-md text-left">
                
                {success ? (
                  <div className="space-y-6 text-center py-10">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                      <ClipboardCheck className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-slate-950">Message Sent Successfully</h4>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                        Thank you for contacting Crotteau Auto Parts LLC. Our procurement advisors will review your inquiry and respond within 2-4 business hours.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <button
                        onClick={() => setSuccess(false)}
                        className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 text-xs font-bold rounded-lg transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" id="contact-inquiry-form">
                    <div className="border-b border-slate-100 pb-2 mb-2">
                      <h4 className="text-sm font-bold text-slate-900 uppercase font-mono">Trade Inquiry Desk</h4>
                      <p className="text-xs text-slate-500">Please provide complete context regarding your commercial request or inquiry.</p>
                    </div>

                    {error && (
                      <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-lg text-xs font-semibold flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Full Name *</label>
                        <input
                          type="text"
                          {...register('fullName')}
                          placeholder="e.g. Marcus Brody"
                          className={`w-full bg-slate-50 border ${errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.fullName && <p className="text-[10px] text-rose-600 mt-1">{errors.fullName.message}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="e.g. (941) 555-7890"
                          className={`w-full bg-slate-50 border ${errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.phone && <p className="text-[10px] text-rose-600 mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-semibold text-slate-900 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="e.g. m.brody@company.com"
                        className={`w-full bg-slate-50 border ${errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                      />
                      {errors.email && <p className="text-[10px] text-rose-600 mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="text-xs font-semibold text-slate-900 block mb-1">Inquiry Subject *</label>
                      <input
                        type="text"
                        {...register('subject')}
                        placeholder="e.g. Net credit commercial account inquiry"
                        className={`w-full bg-slate-50 border ${errors.subject ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                      />
                      {errors.subject && <p className="text-[10px] text-rose-600 mt-1">{errors.subject.message}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs font-semibold text-slate-900 block mb-1">Message Details *</label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        placeholder="Please describe your trade procurement or consultation requirements here..."
                        className={`w-full bg-slate-50 border ${errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                      ></textarea>
                      {errors.message && <p className="text-[10px] text-rose-600 mt-1">{errors.message.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#121214] hover:bg-slate-900 disabled:bg-slate-700 text-white py-2.5 font-bold text-sm rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-amber-500" />
                          <span>Transmitting Sourcing Query...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Sourcing Query</span>
                          <ArrowRight className="w-4 h-4 text-amber-500" />
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
