import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CurtainAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 1300);
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex">
          <motion.div
            className="w-1/2 h-full bg-background flex items-center justify-end pr-4 border-r border-primary/20"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          >
            <motion.div
              className="text-right"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="font-display text-4xl md:text-6xl font-bold text-gradient-gold tracking-wider">
                PORTA
              </div>
              <div className="h-px w-full bg-gradient-to-l from-primary to-transparent mt-2" />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-1/2 h-full bg-background flex items-center justify-start pl-4 border-l border-primary/20"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="font-display text-4xl md:text-6xl font-bold text-gradient-gold tracking-wider">
                FOLIO
              </div>
              <div className="h-px w-full bg-gradient-to-r from-primary to-transparent mt-2" />
            </motion.div>
          </motion.div>

          {/* Center line */}
          <motion.div
            className="absolute top-0 left-1/2 w-px h-full bg-primary/50 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          />

          {/* Scanning line */}
          <motion.div
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 1.5, ease: "linear" }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default CurtainAnimation;
