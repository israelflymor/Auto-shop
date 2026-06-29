/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star, ShieldCheck } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  quote: string;
  type: 'Fleet' | 'Repair Shop' | 'Individual Rebuild';
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'Fleet Operations Manager',
    company: 'Suncoast Logistics',
    location: 'Fort Myers, FL',
    rating: 5,
    quote: 'Crotteau Auto Parts has completely transformed our fleet maintenance pipeline. When two of our delivery vans had backordered engine components, they sourced and verified them in under 3 hours, saving us thousands in downtime.',
    type: 'Fleet'
  },
  {
    id: 2,
    name: 'Alejandro Diaz',
    role: 'Shop Owner & Lead Tech',
    company: 'Diaz Precision Auto Care',
    location: 'Punta Gorda, FL',
    rating: 5,
    quote: 'The VIN verification service is what sets them apart. Other parts locators send us the wrong chassis match half the time, but Crotteau has a 100% accuracy rate with us. Highly recommended for commercial garages!',
    type: 'Repair Shop'
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Classic Car Rebuilder',
    company: 'Sarah\'s Custom Restorations',
    location: 'Sarasota, FL',
    rating: 5,
    quote: 'I spent months searching for an obsolete steering gear assembly for my classic rebuild. Crotteau sourced an OEM-certified surplus unit from their international salvage pipeline in 24 hours. Their technical expertise is unmatched.',
    type: 'Individual Rebuild'
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Transit Maintenance Lead',
    company: 'Charlotte County Fleet Transit',
    location: 'Port Charlotte, FL',
    rating: 5,
    quote: 'With consolidated billing and prioritized dispatch, Crotteau keeps our public service trucks running 24/7. Their parts advisors are fast, knowledgeable, and extremely professional with delivery windows.',
    type: 'Fleet'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const selectSlide = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Slide transition animation config
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0
    })
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section 
      id="testimonials-section" 
      className="py-20 bg-zinc-100 dark:bg-slate-950/40 border-y border-zinc-200 dark:border-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-500 dark:border-amber-500/20 rounded-full px-3 py-1 uppercase tracking-wider inline-block">
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Trusted by Commercial Fleets &amp; Garages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 max-w-xl mx-auto">
            See how our high-touch procurement consultants keep mechanics running and minimize commercial vehicle downtime.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[360px] sm:min-h-[280px] flex items-center justify-center">
          
          {/* Decorative Big Quote Icon */}
          <div className="absolute top-0 left-4 text-zinc-300/40 dark:text-slate-800/40 z-0 select-none">
            <Quote className="w-20 h-20 sm:w-28 sm:h-28" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x > 80) {
                  setIsAutoPlaying(false);
                  handlePrev();
                } else if (info.offset.x < -80) {
                  setIsAutoPlaying(false);
                  handleNext();
                }
              }}
              className="w-full relative z-10 px-4 sm:px-12 select-none cursor-grab active:cursor-grabbing"
            >
              <div className="bg-zinc-200/50 dark:bg-slate-900 border border-zinc-300/60 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-sm text-left relative transition-colors duration-300">
                
                {/* Meta details tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono bg-amber-500/15 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 px-2.5 py-1 rounded-md uppercase font-bold tracking-wider">
                    {currentTestimonial.type}
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed italic mb-6">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>

                {/* Author profile block */}
                <div className="flex items-center justify-between border-t border-zinc-300/60 dark:border-slate-800 pt-5">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {currentTestimonial.role} &middot; <span className="text-amber-600 dark:text-amber-500 font-semibold">{currentTestimonial.company}</span>
                    </p>
                  </div>

                  <div className="text-right hidden sm:block">
                    <span className="text-[10px] font-mono text-slate-400 block">LOCATION</span>
                    <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1 justify-end">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      {currentTestimonial.location}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-zinc-300 dark:border-slate-800 bg-zinc-200/70 hover:bg-zinc-200 dark:bg-slate-900/60 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all z-20 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-zinc-300 dark:border-slate-800 bg-zinc-200/70 hover:bg-zinc-200 dark:bg-slate-900/60 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all z-20 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => selectSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-6 bg-amber-500' 
                  : 'w-2 bg-zinc-450 hover:bg-zinc-400 dark:bg-slate-700 dark:hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Swipe prompt for touch screens */}
        <p className="text-[10px] font-mono text-slate-450 dark:text-slate-550 mt-4 sm:hidden">
          ← Swipe left or right to browse testimonials →
        </p>

      </div>
    </section>
  );
}
