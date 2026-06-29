/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RouteProgressBar from './components/RouteProgressBar';
import PageLoader from './components/PageLoader';
import { ThemeProvider } from './lib/ThemeContext';
import { getLocalBusinessSchema } from './lib/seo-schema';

// Lazy-loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const PartsSourcing = lazy(() => import('./pages/PartsSourcing'));
const FleetSolutions = lazy(() => import('./pages/FleetSolutions'));
const RequestPart = lazy(() => import('./pages/RequestPart'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const BrandGuide = lazy(() => import('./pages/BrandGuide'));
const AdminCRM = lazy(() => import('./pages/AdminCRM'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top upon page navigation coordinator
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const businessSchema = getLocalBusinessSchema();

  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <RouteProgressBar />
        <div className="flex flex-col min-h-screen bg-zinc-100 text-slate-800 dark:bg-slate-950 dark:text-slate-100 antialiased font-sans transition-colors duration-300">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
          />
          <Header />
          
          {/* Main interactive stage */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sourcing" element={<PartsSourcing />} />
                <Route path="/fleet" element={<FleetSolutions />} />
                <Route path="/request" element={<RequestPart />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/brand-guide" element={<BrandGuide />} />
                <Route path="/crm-portal" element={<AdminCRM />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}
