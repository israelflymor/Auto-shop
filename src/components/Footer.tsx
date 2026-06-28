/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ExternalLink, HelpCircle, PenTool, ShieldCheck, ClipboardList, Sun, Moon } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { useTheme } from '../lib/ThemeContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer id="main-footer" className="bg-[#121214] text-slate-300 border-t border-slate-800 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col" id="footer-logo-link">
              <span className="text-xl font-bold tracking-tight text-white">
                CROTTEAU
              </span>
              <span className="text-[10px] font-mono tracking-widest text-amber-500 font-semibold uppercase -mt-1">
                AUTO PARTS LLC
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional automotive consulting, fleet management parts supply, and hard-to-find components sourcing headquartered in Punta Gorda, Florida.
            </p>
            <div className="flex items-center gap-1.5 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400">Direct Dealer Networks Connected</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 font-mono border-b border-slate-800 pb-2">
              Services & Sitemaps
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors inline-flex items-center gap-1.5">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors inline-flex items-center gap-1.5">
                  About Our Firm
                </Link>
              </li>
              <li>
                <Link to="/sourcing" className="hover:text-amber-500 transition-colors inline-flex items-center gap-1.5">
                  Parts Sourcing Engine
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-amber-500 transition-colors inline-flex items-center gap-1.5">
                  Fleet Solutions Portal
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-500 transition-colors inline-flex items-center gap-1.5">
                  FAQ Database
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 font-mono border-b border-slate-800 pb-2">
              Punta Gorda Headquarters
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {BUSINESS_INFO.address}<br />
                  <span className="text-xs font-mono text-slate-500">Charlotte County, Florida</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-slate-400 hover:text-amber-500 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-400 hover:text-amber-500 transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 border-t border-slate-800/60 pt-2.5 mt-2">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 leading-relaxed font-mono">
                  {BUSINESS_INFO.hours}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Legals and Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</span>
            
            {/* Premium Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 text-slate-400 hover:text-amber-500 transition-all active:scale-95 cursor-pointer"
              title="Toggle application style theme"
              id="theme-toggle-button"
            >
              {theme === 'dark' ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-500" />
                  <span>Dark Mode (Default)</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
                  <span>Light Mode (Blended Grey)</span>
                </>
              )}
            </button>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link to="/privacy" className="hover:text-amber-500 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-800">|</span>
            <Link to="/terms" className="hover:text-amber-500 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-800">|</span>
            <Link to="/contact" className="hover:text-amber-500 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
