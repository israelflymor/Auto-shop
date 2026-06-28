/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PenTool, CheckCircle, AlertTriangle, ShieldCheck, Mail, Phone, MapPin, Globe, Palette, Type, CreditCard, FileText, Send } from 'lucide-react';
import { BRAND_STYLE_GUIDE, BUSINESS_INFO } from '../data/content';

export default function BrandStyleGuidePreview() {
  const [activeTab, setActiveTab] = useState<'identity' | 'colors' | 'typography' | 'components' | 'stationary'>('identity');

  // Interactive Email Signature generator state
  const [employeeName, setEmployeeName] = useState('John Crotteau');
  const [employeeTitle, setEmployeeTitle] = useState('Principal Parts Sourcing Consultant');

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-md overflow-hidden font-sans">
      
      {/* Brand Header */}
      <div className="bg-[#121214] text-white p-8 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <PenTool className="w-6 h-6 text-amber-500" />
          <h2 className="text-xl font-bold tracking-tight font-mono uppercase">
            Crotteau Auto Parts LLC Brand Style Guide
          </h2>
        </div>
        <p className="text-sm text-slate-400 mt-2 max-w-2xl">
          Visual parameters, content tone, typography hierarchies, and stationery models representing the professional identity of Punta Gorda's premier automotive consulting firm.
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-2 overflow-x-auto flex gap-1">
        <button
          onClick={() => setActiveTab('identity')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-md uppercase tracking-wider font-mono transition-all ${
            activeTab === 'identity' ? 'bg-[#121214] text-white shadow' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Corporate Identity
        </button>
        <button
          onClick={() => setActiveTab('colors')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-md uppercase tracking-wider font-mono transition-all ${
            activeTab === 'colors' ? 'bg-[#121214] text-white shadow' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Color Palette
        </button>
        <button
          onClick={() => setActiveTab('typography')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-md uppercase tracking-wider font-mono transition-all ${
            activeTab === 'typography' ? 'bg-[#121214] text-white shadow' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Typography &amp; Scale
        </button>
        <button
          onClick={() => setActiveTab('components')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-md uppercase tracking-wider font-mono transition-all ${
            activeTab === 'components' ? 'bg-[#121214] text-white shadow' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Design Tokens
        </button>
        <button
          onClick={() => setActiveTab('stationary')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-md uppercase tracking-wider font-mono transition-all ${
            activeTab === 'stationary' ? 'bg-[#121214] text-white shadow' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Stationery &amp; Signatures
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-8">
        
        {/* PANEL 1: IDENTITY */}
        {activeTab === 'identity' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono border-b border-slate-200 pb-2 mb-3">Corporate Mission</h3>
                <p className="text-sm text-slate-700 leading-relaxed italic">&ldquo;{BRAND_STYLE_GUIDE.mission}&rdquo;</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono border-b border-slate-200 pb-2 mb-3">Corporate Vision</h3>
                <p className="text-sm text-slate-700 leading-relaxed italic">&ldquo;{BRAND_STYLE_GUIDE.vision}&rdquo;</p>
              </div>
            </div>

            <div className="border border-slate-200 p-6 rounded-lg space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono border-b border-slate-200 pb-2">Brand Personality &amp; Voice</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {BRAND_STYLE_GUIDE.personality.map((trait) => (
                  <div key={trait} className="bg-slate-100 border border-slate-200 p-3 rounded text-center">
                    <span className="text-xs font-bold text-slate-800 font-mono">{trait}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <span className="text-xs text-slate-500 font-mono block uppercase mb-1">Brand Voice Definition</span>
                <p className="text-sm text-slate-700 leading-relaxed">{BRAND_STYLE_GUIDE.voice}</p>
              </div>
            </div>

            {/* Dos and Don'ts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-emerald-100 bg-emerald-50/20 p-6 rounded-lg space-y-3">
                <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-wider font-mono flex items-center gap-1.5 border-b border-emerald-100 pb-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Style Do&apos;s
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 list-disc list-inside">
                  {BRAND_STYLE_GUIDE.doDont.dos.map((doItem, idx) => (
                    <li key={idx} className="leading-relaxed">{doItem}</li>
                  ))}
                </ul>
              </div>

              <div className="border border-rose-100 bg-rose-50/20 p-6 rounded-lg space-y-3">
                <h4 className="text-sm font-bold text-rose-800 uppercase tracking-wider font-mono flex items-center gap-1.5 border-b border-rose-100 pb-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600" /> Style Don&apos;ts
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 list-disc list-inside">
                  {BRAND_STYLE_GUIDE.doDont.donts.map((dontItem, idx) => (
                    <li key={idx} className="leading-relaxed">{dontItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 2: COLORS */}
        {activeTab === 'colors' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Palette className="w-5 h-5 text-slate-700" />
              <h3 className="text-base font-bold text-slate-900 uppercase font-mono">Accessible Brand Palette</h3>
            </div>
            <p className="text-sm text-slate-600">
              All selected colors meet or exceed WCAG 2.2 contrast parameters to ensure text and critical components remain legible in any viewport.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {Object.entries(BRAND_STYLE_GUIDE.palette).map(([key, details]) => (
                <div key={key} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
                  <div className="h-24 w-full transition-all duration-300" style={{ backgroundColor: details.hex }}></div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 font-mono uppercase">{details.name}</h4>
                      <p className="text-[10px] text-slate-500 font-mono mt-1">HEX: {details.hex}</p>
                      <p className="text-[10px] text-slate-500 font-mono">RGB: {details.rgb}</p>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed border-t border-slate-100 pt-2 mt-2">
                      {details.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PANEL 3: TYPOGRAPHY */}
        {activeTab === 'typography' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Type className="w-5 h-5 text-slate-700" />
              <h3 className="text-base font-bold text-slate-900 uppercase font-mono">Typography Scaling Specs</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
                <span className="text-xs text-slate-400 font-mono block uppercase mb-1">Primary Header System (Inter Font)</span>
                <p className="text-[11px] font-mono text-slate-500 mb-4">{BRAND_STYLE_GUIDE.typography.headers.style}</p>
                
                <div className="space-y-4 border-t border-slate-200 pt-4">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400">Heading 1 (h1) | text-4xl font-bold tracking-tight</span>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-950 mt-1">
                      Need The Right Part? We&apos;ll Help You Sourced.
                    </h1>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400">Heading 2 (h2) | text-2xl font-semibold tracking-tight</span>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mt-1">
                      Commercial Fleet Parts Sourcing Management
                    </h2>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
                <span className="text-xs text-slate-400 font-mono block uppercase mb-1">Diagnostic &amp; Data Interface System (JetBrains Mono Font)</span>
                <p className="text-[11px] font-mono text-slate-500 mb-4">{BRAND_STYLE_GUIDE.typography.data.style}</p>
                
                <div className="space-y-3 border-t border-slate-200 pt-4">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400">Vehicle Identification Numbers (VIN)</span>
                    <p className="text-sm font-mono font-bold text-amber-600 tracking-wider mt-1 bg-slate-900 px-3 py-1.5 rounded inline-block">
                      1G1AW80H9HR239015
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400">Parts Identifiers / System Slugs</span>
                    <p className="text-xs font-mono text-slate-700 mt-1">
                      PART_NO: <span className="underline decoration-amber-500 font-semibold">GM-84915-OB</span> | REQ_TICKET: <span className="font-semibold text-slate-950">#PRQ-2026-9041</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 4: DESIGN TOKENS (COMPONENTS) */}
        {activeTab === 'components' && (
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono border-b border-slate-200 pb-2">
              Reusable Interaction Token Specimens
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Buttons Spec */}
              <div className="border border-slate-200 p-6 rounded-lg space-y-4">
                <h4 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Button Component Specifications</h4>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block mb-1">Primary Action (Amber theme)</span>
                    <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all shadow-sm">
                      Sourcing Request Form
                    </button>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block mb-1">Secondary Action (Dark Steel theme)</span>
                    <button className="bg-[#121214] hover:bg-slate-800 text-white px-5 py-2.5 text-sm font-semibold rounded-lg transition-all shadow-sm">
                      Consult with an Adviser
                    </button>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block mb-1">Minimal/Border Action</span>
                    <button className="border border-slate-300 hover:border-slate-400 text-slate-700 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all">
                      Browse FAQs
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Spec */}
              <div className="border border-slate-200 p-6 rounded-lg space-y-4">
                <h4 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Form Element Specifications</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-900 block mb-1.5">Vehicle VIN (17 Characters)</label>
                    <input
                      type="text"
                      placeholder="e.g. 1G1AW80H9HRXXXXXX"
                      disabled
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-mono text-slate-850"
                    />
                    <span className="text-[10px] text-slate-500 mt-1 block leading-relaxed">
                      VIN verification automates specific parts matching schemas across Florida supplier pools.
                    </span>
                  </div>
                  
                  <div>
                    <label className="text-xs font-semibold text-rose-700 block mb-1.5 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> Email Address
                    </label>
                    <input
                      type="email"
                      value="invalid-email-format"
                      disabled
                      className="w-full bg-white border border-rose-400 rounded-lg px-3 py-2 text-xs text-rose-950 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                    <span className="text-[10px] text-rose-600 mt-1 block font-semibold">
                      Please enter a valid email address so our sourcing desk can transmit quotes.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 5: STATIONERY & SIGNATURE GENERATOR */}
        {activeTab === 'stationary' && (
          <div className="space-y-8">
            
            {/* Business Card Section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-4 h-4 text-slate-700" />
                <h4 className="text-sm font-bold text-slate-900 uppercase font-mono">Corporate Business Card Concept</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Front */}
                <div className="bg-[#121214] text-white p-6 rounded-lg shadow-md border border-slate-800 min-h-[200px] flex flex-col justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold tracking-tight">CROTTEAU</span>
                    <span className="text-[9px] font-mono tracking-widest text-amber-500 font-semibold uppercase -mt-1.5">AUTO PARTS LLC</span>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 italic">Precision Sourcing &amp; Procurement Consulting</p>
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 mt-2">
                      <ShieldCheck className="w-3 h-3 text-amber-500" />
                      <span>Punta Gorda, FL | Sourcing Partner</span>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="bg-slate-50 p-6 rounded-lg shadow-md border border-slate-200 min-h-[200px] flex flex-col justify-between text-slate-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-sm font-bold text-slate-950">Arthur Crotteau</h5>
                      <p className="text-[10px] text-slate-500 font-mono">Principal Procurement Advisor</p>
                    </div>
                    <span className="text-[9px] font-mono text-amber-600 font-bold tracking-tight">CROTTEAU LLC</span>
                  </div>
                  <div className="space-y-1 text-[10px] font-mono text-slate-600">
                    <p className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-amber-500" /> {BUSINESS_INFO.phone}</p>
                    <p className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-amber-500" /> {BUSINESS_INFO.email}</p>
                    <p className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-amber-500" /> {BUSINESS_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Signature Generator */}
            <div className="border-t border-slate-200 pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Send className="w-4 h-4 text-slate-700" />
                <h4 className="text-sm font-bold text-slate-900 uppercase font-mono">Interactive Corporate Email Signature</h4>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                Input your name and corporate title to dynamically generate a valid HTML-compliant email signature layout.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Advisor Name</label>
                    <input
                      type="text"
                      value={employeeName}
                      onChange={(e) => setEmployeeName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Advisor Corporate Title</label>
                    <input
                      type="text"
                      value={employeeTitle}
                      onChange={(e) => setEmployeeTitle(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-900"
                    />
                  </div>
                </div>

                {/* Live Output */}
                <div className="md:col-span-2 border border-slate-200 p-4 rounded-lg bg-slate-50">
                  <span className="text-[10px] font-mono text-slate-400 block mb-2">Signature Live Preview</span>
                  <div className="bg-white p-4 border border-slate-150 rounded shadow-inner text-slate-800">
                    
                    <div className="flex items-start gap-3.5">
                      {/* Left Block Badge */}
                      <div className="border-r-4 border-amber-500 h-16"></div>
                      <div className="space-y-0.5">
                        <h6 className="text-sm font-bold text-slate-900">{employeeName}</h6>
                        <p className="text-[11px] text-slate-500 font-medium">{employeeTitle}</p>
                        
                        <div className="flex flex-col gap-0.5 text-[10px] text-slate-600 font-mono pt-2">
                          <span className="flex items-center gap-1">
                            <strong className="text-slate-800">Phone:</strong> {BUSINESS_INFO.phone}
                          </span>
                          <span className="flex items-center gap-1">
                            <strong className="text-slate-800">Email:</strong> {BUSINESS_INFO.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <strong className="text-slate-800">Web:</strong> www.crotteauautoparts.com
                          </span>
                          <span className="text-[9px] text-slate-400 mt-1 italic">
                            Headquarters: {BUSINESS_INFO.address}
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
