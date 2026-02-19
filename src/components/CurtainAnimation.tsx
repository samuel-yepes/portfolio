import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LightningBolt from "./LightningBolt";

const CurtainAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);
  const [showBolt, setShowBolt] = useState(false);

  useEffect(() => {
    // Show lightning bolt after a short delay
    const boltTimer = setTimeout(() => setShowBolt(true), 400);
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 1300);
    }, 2200);
    return () => {
      clearTimeout(boltTimer);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Left curtain */}
          <motion.div
            className="w-1/2 h-full bg-background border-r border-primary/20"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Right curtain */}
          <motion.div
            className="w-1/2 h-full bg-background border-l border-primary/20"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Center lightning bolt */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {showBolt && (
              <>
                <LightningBolt size={100} />
                {/* Electric arcs around bolt */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-px bg-gradient-to-b from-transparent via-primary to-transparent"
                    style={{
                      height: `${40 + Math.random() * 60}px`,
                      left: `calc(50% + ${(Math.random() - 0.5) * 120}px)`,
                      top: `calc(50% + ${(Math.random() - 0.5) * 150}px)`,
                      rotate: `${Math.random() * 360}deg`,
                    }}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0, 0.6, 0],
                      scaleY: [0, 1, 0.5, 1, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
                {/* Flash effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/5"
                  animate={{ opacity: [0, 0.15, 0, 0.1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </>
            )}
          </div>

          {/* Scanning line */}
          <motion.div
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 1.8, ease: "linear" }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default CurtainAnimation;
