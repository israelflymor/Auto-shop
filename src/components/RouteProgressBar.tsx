import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function RouteProgressBar() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing progress timers
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Reset progress and make the progress bar visible
    setVisible(true);
    setProgress(10);

    // Simulate progressive loading increments to mimic genuine network retrieval
    const steps = [
      { delay: 50, val: 30 },
      { delay: 150, val: 55 },
      { delay: 280, val: 78 },
      { delay: 420, val: 92 },
      { delay: 550, val: 100 },
    ];

    let currentStep = 0;

    const runSteps = () => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        timerRef.current = setTimeout(() => {
          setProgress(step.val);
          currentStep++;
          runSteps();
        }, step.delay);
      } else {
        // Hide the progress bar shortly after completing
        timerRef.current = setTimeout(() => {
          setVisible(false);
        }, 180);
      }
    };

    runSteps();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [location.pathname, location.search]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="global-route-progress-bar-container"
          className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[9999] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Main animated progress fill line */}
          <motion.div
            id="global-route-progress-bar-fill"
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{
              type: 'spring',
              stiffness: 70,
              damping: 14,
              mass: 0.4
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
