/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ClipboardCheck, Sparkles, Upload, FileText, X, ShieldAlert, ShieldCheck, RefreshCw, ArrowRight, Car } from 'lucide-react';
import { PartRequest } from '../types';
import SEO from '../components/SEO';
import { SEO_BLUEPRINT } from '../data/content';

// Zod Schema with full 17-char VIN validation and real-time rules
const requestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone must be a valid 10-digit number'),
  vehicleYear: z.coerce.number()
    .min(1900, 'Year must be after 1900')
    .max(new Date().getFullYear() + 2, 'Year cannot be that far in the future'),
  vehicleMake: z.string().min(1, 'Please enter vehicle make'),
  vehicleModel: z.string().min(1, 'Please enter vehicle model'),
  vin: z.string()
    .length(17, 'VIN must be exactly 17 characters')
    .regex(/^[A-HJ-NPR-Z0-9]+$/i, 'VIN contains invalid characters (no I, O, Q)'),
  partNeeded: z.string().min(3, 'Please specify what part is needed'),
  description: z.string().min(10, 'Please describe your request in details (minimum 10 characters)'),
  spamCheck: z.boolean().refine(val => val === true, {
    message: 'Please confirm that you are a human'
  })
});

type RequestFormData = z.infer<typeof requestSchema>;

export default function RequestPart() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<PartRequest | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Custom File Upload States (Drag-and-Drop)
  const [file, setFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<any>({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      spamCheck: false
    }
  });

  const onSubmit = async (data: RequestFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate physical sourcing API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      const randomId = `PRQ-2026-${Math.floor(100 + Math.random() * 900)}`;
      
      // Lead Priority Classification based on vehicle year and part details
      let priority: 'Low' | 'Medium' | 'High' = 'Medium';
      if (data.vehicleYear < 1996) {
        priority = 'High'; // Vintage vehicles get prioritized routing due to sparse networks
      }

      const newRequest: PartRequest = {
        id: randomId,
        name: data.name,
        email: data.email,
        phone: data.phone,
        vehicleYear: data.vehicleYear,
        vehicleMake: data.vehicleMake,
        vehicleModel: data.vehicleModel,
        vin: data.vin.toUpperCase(),
        partNeeded: data.partNeeded,
        description: data.description,
        attachmentName: file ? file.name : undefined,
        submittedAt: new Date().toISOString(),
        status: 'Pending',
        priority: priority
      };

      // Store in localStorage to sync with LeadCRMInbox
      const existingLeadsStr = localStorage.getItem('crotteau_parts_leads');
      const existingLeads = existingLeadsStr ? JSON.parse(existingLeadsStr) : [];
      const updatedLeads = [newRequest, ...existingLeads];
      localStorage.setItem('crotteau_parts_leads', JSON.stringify(updatedLeads));

      setSuccessData(newRequest);
      setFile(null);
      reset();
    } catch (err) {
      setSubmitError('An error occurred while transmitting your sourcing ticket. Please verify your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Drag & Drop Handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (validTypes.includes(droppedFile.type)) {
        setFile(droppedFile);
      } else {
        alert("Invalid file format. Please upload JPEG, PNG, or PDF files.");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO meta={SEO_BLUEPRINT.request} />

      {/* Page Header */}
      <section className="bg-[#121214] text-white py-16 text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-500 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full uppercase tracking-wider">
            Sourcing Desk Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Request an Auto Part Quote
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Specify your vehicle details, VIN number, and components needed. Our sourcing team cross-references build sheets for absolute accuracy.
          </p>
        </div>
      </section>

      {/* Main Sourcing Layout grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Hand: Guidance & Instructions */}
            <div className="lg:col-span-5 text-left space-y-6">
              <h3 className="text-xl font-bold text-slate-950 font-mono uppercase tracking-tight">How our parts request works</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">1</div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Specification Analysis</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Our parts consultants verify your VIN input directly against original manufacturer build manifests to assure the target assembly will bolt on correctly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">2</div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Global Exchange Query</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We query licensed salvage portals, specialized private distributor networks, and overseas NOS (New Old Stock) warehouses to isolate your item.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-amber-500 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">3</div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">Custom Freight Assembly</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We negotiate competitive shipping and handle packaging audits. A detailed electronic quote is returned to your email in 2-4 business hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secure Transaction callout */}
              <div className="bg-white border border-slate-200 p-5 rounded-lg space-y-3 shadow-sm">
                <h4 className="text-xs font-bold font-mono text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Sourcing Security Protocols
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>No pre-payment or deposit required to query.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Automatic diagnostic classification routing.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Spam filtering protecting lead pipelines.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Hand: Lead Capture Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-md text-left">
                
                {successData ? (
                  /* Form Success State */
                  <div className="space-y-6 text-center py-8">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                      <ClipboardCheck className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-slate-950">Sourcing Request Submitted</h4>
                      <p className="text-xs font-mono text-amber-600 font-bold bg-slate-900 px-3 py-1.5 rounded inline-block tracking-wider">
                        TICKET ID: {successData.id}
                      </p>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed pt-2">
                        Your parts ticket has been securely routed to our <strong>{successData.priority === 'High' ? 'Classic & Vintage Sourcing Desk' : 'Rapid OEM / Aftermarket Team'}</strong>. An advisor will contact you within 2-4 hours.
                      </p>
                    </div>

                    <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => setSuccessData(null)}
                        className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2 text-xs font-semibold rounded-lg transition-colors"
                      >
                        Submit Another Request
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
                  /* Interactive Form with full Validation */
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" id="parts-request-form">
                    <div className="border-b border-slate-100 pb-2 mb-2 flex items-center gap-2">
                      <Car className="w-5 h-5 text-amber-500" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase font-mono">Precision Parts Request Ticket</h4>
                        <p className="text-xs text-slate-500">Provide complete vehicle details to ensure accurate parts verification.</p>
                      </div>
                    </div>

                    {submitError && (
                      <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-lg text-xs font-semibold flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    {/* Contact details row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          {...register('name')}
                          placeholder="e.g. Arthur Pendelton"
                          className={`w-full bg-white border ${errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.name && <p className="text-[10px] text-rose-600 mt-1">{errors.name.message as string}</p>}
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Email Address *</label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="e.g. arthur.p@outlook.com"
                          className={`w-full bg-white border ${errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.email && <p className="text-[10px] text-rose-600 mt-1">{errors.email.message as string}</p>}
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="e.g. (941) 555-4321"
                          className={`w-full bg-white border ${errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.phone && <p className="text-[10px] text-rose-600 mt-1">{errors.phone.message as string}</p>}
                      </div>
                    </div>

                    {/* Vehicle details row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Vehicle Year *</label>
                        <input
                          type="number"
                          {...register('vehicleYear')}
                          placeholder="e.g. 1987"
                          className={`w-full bg-white border ${errors.vehicleYear ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.vehicleYear && <p className="text-[10px] text-rose-600 mt-1">{errors.vehicleYear.message as string}</p>}
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Vehicle Make *</label>
                        <input
                          type="text"
                          {...register('vehicleMake')}
                          placeholder="e.g. Chevrolet"
                          className={`w-full bg-white border ${errors.vehicleMake ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.vehicleMake && <p className="text-[10px] text-rose-600 mt-1">{errors.vehicleMake.message as string}</p>}
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-900 block mb-1">Vehicle Model *</label>
                        <input
                          type="text"
                          {...register('vehicleModel')}
                          placeholder="e.g. El Camino"
                          className={`w-full bg-white border ${errors.vehicleModel ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                        />
                        {errors.vehicleModel && <p className="text-[10px] text-rose-600 mt-1">{errors.vehicleModel.message as string}</p>}
                      </div>
                    </div>

                    {/* VIN number */}
                    <div>
                      <label className="text-xs font-semibold text-slate-900 block mb-1">17-Character Vehicle VIN *</label>
                      <input
                        type="text"
                        {...register('vin')}
                        placeholder="e.g. 1G1AW80H9HRXXXXXX"
                        maxLength={17}
                        className={`w-full bg-white border font-mono ${errors.vin ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 uppercase tracking-wider`}
                      />
                      <span className="text-[10px] text-slate-400 mt-1 block">Exclude letters I, O, and Q. Must be exactly 17 characters.</span>
                      {errors.vin && <p className="text-[10px] text-rose-600 mt-1 font-semibold">{errors.vin.message as string}</p>}
                    </div>

                    {/* Part Needed */}
                    <div>
                      <label className="text-xs font-semibold text-slate-900 block mb-1">Part Needed *</label>
                      <input
                        type="text"
                        {...register('partNeeded')}
                        placeholder="e.g. OEM Rear Bed Chrome Molding Trim"
                        className={`w-full bg-white border ${errors.partNeeded ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                      />
                      {errors.partNeeded && <p className="text-[10px] text-rose-600 mt-1">{errors.partNeeded.message as string}</p>}
                    </div>

                    {/* Description */}
                    <div>
                      <label className="text-xs font-semibold text-slate-900 block mb-1">Detailed Description of Part / Condition *</label>
                      <textarea
                        {...register('description')}
                        rows={3}
                        placeholder="e.g. Need the complete 3-piece chrome trim surrounding the rear bed edge. Must be original GM New Old Stock (NOS) or absolute pristine original salvage. No replicas."
                        className={`w-full bg-white border ${errors.description ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-amber-500'} rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1`}
                      ></textarea>
                      {errors.description && <p className="text-[10px] text-rose-600 mt-1">{errors.description.message as string}</p>}
                    </div>

                    {/* Drag-and-drop File Upload */}
                    <div>
                      <span className="text-xs font-semibold text-slate-900 block mb-1.5">Upload Reference Photos or Documents (Optional)</span>
                      
                      <div
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        onClick={triggerFileInput}
                        className={`border-2 border-dashed rounded-lg p-5 text-center cursor-pointer transition-all ${
                          isDragActive 
                            ? 'border-amber-500 bg-amber-50/20' 
                            : 'border-slate-300 bg-slate-50 hover:bg-slate-100/60'
                        }`}
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept="image/jpeg,image/png,application/pdf"
                          className="hidden"
                        />
                        
                        {file ? (
                          <div className="flex items-center justify-between bg-white border border-slate-200 p-2 rounded-lg text-xs font-mono text-slate-700">
                            <div className="flex items-center gap-2 max-w-[80%] truncate">
                              <FileText className="w-4 h-4 text-amber-500 flex-shrink-0" />
                              <span className="truncate font-semibold">{file.name}</span>
                              <span className="text-[10px] text-slate-400">({(file.size / 1024).toFixed(1)} KB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); removeFile(); }}
                              className="text-slate-400 hover:text-rose-500 p-1 rounded transition-colors"
                              title="Remove file"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                            <p className="text-xs text-slate-700 font-semibold">
                              Drag and drop or <span className="text-amber-600 hover:underline">browse files</span>
                            </p>
                            <p className="text-[10px] text-slate-400">Supports JPEG, PNG, or PDF formats up to 5MB.</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Anti-spam Verification Security puzzle */}
                    <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg">
                      <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700 select-none">
                        <input
                          type="checkbox"
                          {...register('spamCheck')}
                          className="rounded text-amber-500 focus:ring-amber-500 mt-0.5 w-4 h-4"
                        />
                        <span className="leading-normal">
                          I verify that this is a legitimate parts sourcing inquiry and pass the client compliance anti-spam verification token check.
                        </span>
                      </label>
                      {errors.spamCheck && <p className="text-[10px] text-rose-600 mt-1 font-semibold">{errors.spamCheck.message as string}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#121214] hover:bg-slate-900 disabled:bg-slate-700 text-white py-3 font-bold text-sm rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-amber-500" />
                          <span>Generating Sourcing Ticket and Routing...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Sourcing Ticket</span>
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
