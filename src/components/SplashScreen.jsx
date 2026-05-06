import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  const [showSplash, setShowSplash] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubtitle(true), 1000);
    const timer2 = setTimeout(() => {
      setShowSplash(false);
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setShowSplash(false);
    onComplete();
  };

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#090807] text-[#f5efe8]"
        >
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="text-fluid-title font-light tracking-wider text-center"
            >
              Aatman Studios
            </motion.h1>
            <AnimatePresence>
              {showSubtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="mt-4 text-fluid-body text-center text-[#b99a70]/80"
                >
                  Capturing Souls, Not Just Moments
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-sm text-[#b99a70]/60 hover:text-[#b99a70] transition-colors"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}