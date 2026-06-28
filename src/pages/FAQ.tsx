/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, Layers, HelpCircle as HelpIcon } from 'lucide-react';
import { FAQS } from '../data/content';
import { FaqItem } from '../types';
import SEO from '../components/SEO';
import { SEO_BLUEPRINT } from '../data/content';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'General' | 'Sourcing' | 'Fleet' | 'Shipping'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = ['All', 'General', 'Sourcing', 'Fleet', 'Shipping'] as const;

  // Filter and search logic
  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO meta={SEO_BLUEPRINT.faq} />

      {/* Page Header */}
      <section className="bg-[#121214] text-white py-16 text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-500 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full uppercase tracking-wider">
            Sourcing Help Center
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Get immediate technical insight on our parts procurement processes, shipping standards, and local Southwest Florida logistics.
          </p>
        </div>
      </section>

      {/* Search and Categories bar */}
      <section className="py-12 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setExpandedIndex(null); }}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold font-mono uppercase rounded-md transition-all ${
                  activeCategory === cat ? 'bg-[#121214] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search FAQ database..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-9 pr-4 text-xs text-slate-850 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
            />
          </div>

        </div>
      </section>

      {/* Accordion List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-slate-200">
              <Layers className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-semibold">No FAQs Found</p>
              <p className="text-xs mt-1">Try refining your search query or selecting a different category.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:border-slate-300">
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                    >
                      <div className="flex items-start gap-3">
                        <HelpIcon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{faq.question}</span>
                      </div>
                      <span className="text-slate-400 mt-1 flex-shrink-0">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </span>
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? 'max-h-96 border-t border-slate-100 bg-slate-50/50' : 'max-h-0'
                      }`}
                    >
                      <div className="p-6 text-xs sm:text-sm text-slate-600 leading-relaxed pl-14 pr-10">
                        {faq.answer}
                        <div className="mt-4 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                          <span>CATEGORY: {faq.category.toUpperCase()}</span>
                          <span>✓ Verified Procurement SLA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
