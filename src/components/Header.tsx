/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck, ClipboardList, PenTool } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Auto Parts Sourcing', path: '/sourcing' },
    { label: 'Fleet Solutions', path: '/fleet' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Banner with Direct Sourcing Line */}
      <div className="bg-[#121214] text-white text-xs border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
            <span>VIN-Matched Sourcing & Consulting | Punta Gorda, FL</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Sourcing Hotline: {BUSINESS_INFO.phone}</span>
            </a>
            <Link to="/brand-guide" className="hidden md:flex items-center gap-1 hover:text-white text-[11px] border border-slate-700 rounded px-1.5 py-0.5 bg-slate-900 transition-colors">
              <PenTool className="w-3 h-3 text-amber-500" />
              <span>Brand Guidelines</span>
            </Link>
            <Link to="/crm-portal" className="hidden lg:flex items-center gap-1 hover:text-white text-[11px] border border-slate-700 rounded px-1.5 py-0.5 bg-slate-900 transition-colors">
              <ClipboardList className="w-3 h-3 text-amber-500" />
              <span>Leads CRM</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav id="main-navigation" className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/50 py-3' 
          : 'bg-white border-b border-slate-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Group */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex flex-col group" id="header-logo-link">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">
                  CROTTEAU
                </span>
                <span className="text-[10px] font-mono tracking-widest text-amber-500 font-semibold uppercase -mt-1">
                  AUTO PARTS LLC
                </span>
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                    isActive(link.path)
                      ? 'text-slate-900 bg-slate-50 font-semibold border-b-2 border-amber-500 rounded-b-none'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Header Right Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/request"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2 text-sm font-semibold rounded-lg transition-all shadow-sm hover:shadow active:scale-[0.98] inline-flex items-center gap-1.5"
                id="header-cta-button"
              >
                <span>Request a Part</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu full-screen drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-0 z-50 bg-slate-950/98 text-white flex flex-col justify-between pt-24 pb-12 px-6 overflow-y-auto md:hidden"
              id="mobile-drawer"
            >
              {/* Close button inside drawer top corner */}
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 transition-all active:scale-95"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links inside drawer */}
              <div className="flex flex-col space-y-6 my-auto pt-6">
                <span className="text-xs font-mono tracking-widest text-amber-500 uppercase font-bold border-b border-slate-900 pb-2">
                  Navigation Menu
                </span>
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-3xl font-extrabold tracking-tight transition-all ${
                        isActive(link.path)
                          ? 'text-amber-500 border-l-4 border-amber-500 pl-4'
                          : 'text-slate-300 hover:text-white hover:translate-x-2'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Drawer Actions */}
              <div className="space-y-4 border-t border-slate-900 pt-6 mt-8">
                <Link
                  to="/request"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-slate-950 py-4 text-base font-bold rounded-xl transition-all shadow-lg shadow-amber-500/10 active:scale-[0.98]"
                >
                  Request a Part
                </Link>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <Link
                    to="/brand-guide"
                    onClick={() => setIsOpen(false)}
                    className="block text-[11px] font-mono font-semibold text-slate-400 hover:text-white border border-slate-800 py-3 rounded-lg hover:bg-slate-900 transition-all"
                  >
                    Style Guide
                  </Link>
                  <Link
                    to="/crm-portal"
                    onClick={() => setIsOpen(false)}
                    className="block text-[11px] font-mono font-semibold text-slate-400 hover:text-white border border-slate-800 py-3 rounded-lg hover:bg-slate-900 transition-all"
                  >
                    Leads CRM
                  </Link>
                </div>

                <div className="text-center font-mono text-[9px] text-slate-500 tracking-wider">
                  © {new Date().getFullYear()} CROTTEAU AUTO PARTS LLC
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
