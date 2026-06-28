import { motion } from 'motion/react';

export default function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 text-center">
      <div className="relative flex flex-col items-center space-y-4">
        {/* Pulsing and spinning high-quality amber loader */}
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-slate-200 border-t-amber-500"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-2 rounded-full bg-amber-500/10 border border-amber-500/20"
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.9, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </div>
        
        {/* Subtle status label and brand indicator */}
        <div className="space-y-1">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            Crotteau Parts Network
          </p>
          <motion.p
            className="text-[10px] font-mono text-slate-500"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            Securing OEM logistics matrix...
          </motion.p>
        </div>
      </div>
    </div>
  );
}
