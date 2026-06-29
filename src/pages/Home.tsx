/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Sparkles, ArrowRight, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '../components/SEO';
import { SEO_BLUEPRINT } from '../data/content';
import ImageWithLoader from '../components/ImageWithLoader';
import Testimonials from '../components/Testimonials';
import { 
  fadeInUp as fadeInUpVariant, 
  staggerContainer as staggerContainerVariant 
} from '../lib/motion-variants';

// Import newly generated high-quality Hero slider images
import heroGlowingEngineImg from '../assets/images/hero_glowing_engine_1782618383226.jpg';
import heroPrecisionGearsImg from '../assets/images/hero_precision_gears_1782618399097.jpg';
import heroTunerWorkshopImg from '../assets/images/hero_tuner_workshop_1782618413570.jpg';

export default function Home() {
  // Hero slider slides data
  const slides = [
    {
      image: heroGlowingEngineImg,
      tag: "PERFORMANCE CORES",
      title: "Premium OEM Performance Powertrains",
      description: "Sourcing hard-to-find custom mechanical cores, vintage engine blocks, and high-tolerance carbon fiber components."
    },
    {
      image: heroPrecisionGearsImg,
      tag: "PRECISION TRANSMISSIONS",
      title: "Highly Calibrated Gear Systems",
      description: "Physical inspection and exact tolerance mapping of gears, pinions, and drive-axle assemblies before shipment."
    },
    {
      image: heroTunerWorkshopImg,
      tag: "ELITE SOURCING MATRIX",
      title: "Southwest Florida's Freight Leader",
      description: "Direct distribution connections bridging national distributors to regional independent repair and fleet centers."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isHovered, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="bg-zinc-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <SEO meta={SEO_BLUEPRINT.home} />

      {/* Hero Slider Section at the very start */}
      <section className="relative bg-[#121214] text-white overflow-hidden" id="homepage-hero">
        <div 
          className="relative w-full h-[320px] sm:h-[450px] lg:h-[550px] overflow-hidden bg-slate-950"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          id="hero-image-slider"
        >
          {/* Image Track */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.85, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <ImageWithLoader 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dark Vignette Overlay for maximum typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 z-10 pointer-events-none" />

          {/* Interactive Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-amber-500 hover:bg-slate-950 opacity-100 sm:opacity-0 sm:group-hover/slider:opacity-100 transition-all active:scale-90"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-amber-500 hover:bg-slate-950 opacity-100 sm:opacity-0 sm:group-hover/slider:opacity-100 transition-all active:scale-90"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-15 flex flex-col justify-end p-6 sm:p-12 lg:p-16 text-left max-w-7xl mx-auto pointer-events-none">
            <div className="max-w-2xl space-y-3">
              <span className="inline-block text-[10px] font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md mb-1 tracking-widest uppercase animate-pulse">
                {slides[currentSlide].tag}
              </span>
              <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-xl">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Slide Pagination Dots / Progress indicator */}
          <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex gap-2 items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => { e.preventDefault(); setCurrentSlide(index); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-6 bg-amber-500' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Hero Sourcing CTA Block placed directly beneath the Hero Slider */}
      <section className="bg-[#121214] text-white py-16 sm:py-20 border-b border-slate-800 relative z-10" id="main-hero-cta-block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.04),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.div 
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeInUpVariant} className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-xs font-mono text-amber-500 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Punta Gorda Sourcing Desk</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUpVariant} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-white">
              Need The Right Part? <br />
              <span className="text-amber-500">We&apos;ll Help You Find It.</span>
            </motion.h2>
            
            <motion.p variants={fadeInUpVariant} className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              OEM, aftermarket, and hard-to-find auto parts sourced and certified for vehicle owners, commercial fleets, and dealerships. 100% VIN-matched fitment guarantee.
            </motion.p>

            {/* Conversion Buttons */}
            <motion.div variants={fadeInUpVariant} className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
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
            <motion.div variants={fadeInUpVariant} className="pt-6 border-t border-slate-900/80 max-w-xl mx-auto grid grid-cols-3 gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>100% VIN Verified</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>2-4 Hr Quotes</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Truck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Nationwide Freight</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats / Bar */}
      <motion.section 
        variants={staggerContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="bg-zinc-200/40 dark:bg-slate-900/40 border-y border-zinc-200 dark:border-slate-900 py-8 relative z-20 transition-colors duration-300" 
        id="trust-indicator-strip"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-slate-800">
            <motion.div variants={fadeInUpVariant} className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-[#121214] dark:text-amber-500 font-mono">100%</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">VIN Compatibility Guarantee</p>
            </motion.div>
            <motion.div variants={fadeInUpVariant} className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-[#121214] dark:text-amber-500 font-mono">2-4 hr</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Average Sourcing Quote SLA</p>
            </motion.div>
            <motion.div variants={fadeInUpVariant} className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-[#121214] dark:text-amber-500 font-mono">0$</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Upfront Credit Card Fee</p>
            </motion.div>
            <motion.div variants={fadeInUpVariant} className="pt-4 md:pt-0">
              <p className="text-3xl font-extrabold text-[#121214] dark:text-amber-500 font-mono">Nationwide</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Specialized Freight Logistics</p>
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
        className="py-20 bg-zinc-100 dark:bg-slate-950/20 transition-colors duration-300" 
        id="how-we-help"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            variants={fadeInUpVariant}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-500 dark:border-amber-500/20 rounded-full px-3 py-1 uppercase tracking-wider">
              Procurement Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              How Our Auto Parts Sourcing Network Operates
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Forget scrolling endlessly through suspicious marketplace databases. We offer a high-touch, error-free consulting service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUpVariant}
              className="bg-zinc-200/50 dark:bg-slate-900 border border-zinc-200 dark:border-slate-800 p-8 rounded-xl relative shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#121214] dark:bg-amber-500 flex items-center justify-center text-amber-500 dark:text-slate-950 font-mono font-bold text-lg mb-6 shadow-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Submit Specifications &amp; VIN</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Provide us your vehicle make, model, year, and 17-character VIN along with a description of the desired component. Upload reference photos if available.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariant}
              className="bg-zinc-200/50 dark:bg-slate-900 border border-zinc-200 dark:border-slate-800 p-8 rounded-xl relative shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#121214] dark:bg-amber-500 flex items-center justify-center text-amber-500 dark:text-slate-950 font-mono font-bold text-lg mb-6 shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Network Sourcing &amp; Verification</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We query OEM-direct, aftermarket manufacturers, and private certified parts suppliers. We cross-verify build sheets to ensure 100% mechanical compatibility.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariant}
              className="bg-zinc-200/50 dark:bg-slate-900 border border-zinc-200 dark:border-slate-800 p-8 rounded-xl relative shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#121214] dark:bg-amber-500 flex items-center justify-center text-amber-500 dark:text-slate-950 font-mono font-bold text-lg mb-6 shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Receive Quote &amp; Dispatch</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We send a clear quote detailing condition, pricing, and freight timeline. Upon authorization, we ship the component immediately to your home, workplace, or repair shop.
              </p>
            </motion.div>
          </div>



        </div>
      </motion.section>

      {/* Testimonials touch-friendly carousel */}
      <Testimonials />

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
