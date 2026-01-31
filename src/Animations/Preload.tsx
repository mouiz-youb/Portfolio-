import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  // Progress bar width based on count (0% to 100%)
  const width = useTransform(count, (latest) => `${latest}%`);

  useEffect(() => {
    // Animate from 0 to 100 over 3 seconds
    const controls = animate(count, 100, {
      duration: 5,
      ease: "easeInOut",
      onComplete: () => {
        // Delay slightly for visual "closure" before opening site
        setTimeout(() => setIsLoading(false), 500);
      }
    });
    return controls.stop;
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f172a] text-white"
          >
            {/* Counter Number */}
            <motion.h1 className="text-8xl font-bold mb-8 tabular-nums">
              {rounded}
            </motion.h1>

            {/* Progress Bar Container */}
            <div className="w-64 h-[2px] bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                style={{ width }} 
                className="h-full bg-blue-500"
              />
            </div>
            
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
              Loading Experience
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Content */}
      <main className={isLoading ? "hidden" : "block"}>
        {children}
      </main>
    </>
  );
}