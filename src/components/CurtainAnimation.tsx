import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LightningBolt, { ArcReactorCore } from "./LightningBolt";

interface CurtainAnimationProps {
  onComplete: () => void;
}

const CHARGE_DURATION = 1.4; // seconds

const CurtainAnimation = ({ onComplete }: CurtainAnimationProps) => {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<"charging" | "discharging" | "opening">("charging");
  const [isSkipped, setIsSkipped] = useState(false);

  const handleSkip = useCallback(() => {
    if (isSkipped) return;
    setIsSkipped(true);
    setShow(false);
    setTimeout(onComplete, 300);
  }, [isSkipped, onComplete]);

  // Keyboard shortcut listener (ESC or Space to skip)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSkip]);

  // High-performance phase sequencer without interval re-rendering
  useEffect(() => {
    if (isSkipped) return;

    // 1. Discharge phase after charging
    const dischargeTimer = setTimeout(() => {
      setPhase("discharging");

      // 2. Open bulkheads phase
      const openTimer = setTimeout(() => {
        setPhase("opening");

        // 3. Complete and unmount
        const completeTimer = setTimeout(() => {
          setShow(false);
          setTimeout(onComplete, 700);
        }, 550);

        return () => clearTimeout(completeTimer);
      }, 300);

      return () => clearTimeout(openTimer);
    }, CHARGE_DURATION * 1000);

    return () => clearTimeout(dischargeTimer);
  }, [handleSkip, isSkipped, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          onClick={handleSkip}
          onTouchStart={handleSkip}
          className="fixed inset-0 z-[100] overflow-hidden select-none bg-black cursor-pointer touch-none overscroll-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          title="Click or tap to skip"
        >
          {/* ========================================================================= */}
          {/* KINETIC CYBER BULKHEAD DOORS (Hardware-Accelerated GPU Panels) */}
          {/* ========================================================================= */}
          <div className="absolute inset-0 flex w-full h-full pointer-events-none">
            {/* Left Bulkhead Door */}
            <motion.div
              className="relative w-1/2 h-full bg-[#08080a] border-r border-primary/40 cyber-hex-pattern shadow-2xl flex flex-col justify-between p-4 sm:p-10 overflow-hidden will-change-transform transform-gpu [backface-visibility:hidden]"
              initial={{ x: 0 }}
              animate={phase === "opening" ? { x: "-105%" } : { x: 0 }}
              transition={{
                duration: 1.0,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {/* Brushed Metallic Texture Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-primary/5 pointer-events-none" />

              {/* High-tech conduit circuit lines */}
              <div className="absolute top-0 bottom-0 right-8 sm:right-12 w-px bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />
              <div className="absolute top-1/4 right-0 w-8 sm:w-12 h-px bg-primary/40" />
              <div className="absolute top-1/3 right-0 w-4 sm:w-6 h-px bg-primary/25" />
              <div className="absolute bottom-1/3 right-0 w-4 sm:w-6 h-px bg-primary/25" />
              <div className="absolute bottom-1/4 right-0 w-8 sm:w-12 h-px bg-primary/40" />

              {/* Left Top Geometric Nodes */}
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <span className="inline-block w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(43,100%,50%)]" />
                <span className="inline-block w-1 h-1 rounded-full bg-primary/40" />
                <span className="inline-block w-1 h-1 rounded-full bg-primary/20" />
                <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-primary/40 to-transparent ml-1" />
              </div>

              {/* Left Mid Geometric Framing */}
              <div className="relative z-10 flex items-center gap-1 sm:gap-1.5 opacity-30">
                <div className="w-1 h-6 sm:h-8 bg-primary/50" />
                <div className="w-0.5 h-4 sm:h-6 bg-primary/30" />
                <div className="w-0.5 h-3 sm:h-4 bg-primary/20" />
              </div>

              {/* Left Bottom HUD Corner */}
              <div className="relative z-10 flex items-center gap-1.5 opacity-50">
                <div className="w-6 sm:w-8 h-px bg-primary/40" />
                <div className="w-1.5 h-1.5 border border-primary/50 rotate-45" />
              </div>
            </motion.div>

            {/* Right Bulkhead Door */}
            <motion.div
              className="relative w-1/2 h-full bg-[#08080a] border-l border-primary/40 cyber-hex-pattern shadow-2xl flex flex-col justify-between items-end p-4 sm:p-10 overflow-hidden will-change-transform transform-gpu [backface-visibility:hidden]"
              initial={{ x: 0 }}
              animate={phase === "opening" ? { x: "105%" } : { x: 0 }}
              transition={{
                duration: 1.0,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {/* Brushed Metallic Texture Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-transparent to-primary/5 pointer-events-none" />

              {/* High-tech conduit circuit lines */}
              <div className="absolute top-0 bottom-0 left-8 sm:left-12 w-px bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />
              <div className="absolute top-1/4 left-0 w-8 sm:w-12 h-px bg-primary/40" />
              <div className="absolute top-1/3 left-0 w-4 sm:w-6 h-px bg-primary/25" />
              <div className="absolute bottom-1/3 left-0 w-4 sm:w-6 h-px bg-primary/25" />
              <div className="absolute bottom-1/4 left-0 w-8 sm:w-12 h-px bg-primary/40" />

              {/* Right Top Geometric Nodes */}
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-primary/40 to-transparent mr-1" />
                <span className="inline-block w-1 h-1 rounded-full bg-primary/20" />
                <span className="inline-block w-1 h-1 rounded-full bg-primary/40" />
                <span className="inline-block w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(43,100%,50%)]" />
              </div>

              {/* Right Mid Geometric Framing */}
              <div className="relative z-10 flex items-center gap-1 sm:gap-1.5 opacity-30">
                <div className="w-0.5 h-3 sm:h-4 bg-primary/20" />
                <div className="w-0.5 h-4 sm:h-6 bg-primary/30" />
                <div className="w-1 h-6 sm:h-8 bg-primary/50" />
              </div>

              {/* Right Bottom HUD Corner */}
              <div className="relative z-10 flex items-center gap-1.5 opacity-50">
                <div className="w-1.5 h-1.5 border border-primary/50 rotate-45" />
                <div className="w-6 sm:w-8 h-px bg-primary/40" />
              </div>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* CENTRAL LASER SEAM & FISSURE PARTICLES */}
          {/* ========================================================================= */}
          {phase !== "opening" && (
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 sm:w-8 pointer-events-none flex items-center justify-center z-20 will-change-transform transform-gpu">
              {/* Laser Core Seam */}
              <motion.div
                className="w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent"
                animate={{
                  opacity: [0.4, 1, 0.6, 1],
                  boxShadow: [
                    "0 0 4px hsl(43 100% 50% / 0.5)",
                    "0 0 14px hsl(43 100% 50% / 0.9)",
                    "0 0 6px hsl(43 100% 50% / 0.6)",
                  ],
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />

              {/* Interlocking Hazard Teeth Markers */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 sm:w-4 h-1 border-t border-b border-primary/50 bg-primary/20"
                  style={{ top: `${15 + i * 14}%` }}
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 0.8, delay: i * 0.12, repeat: Infinity }}
                />
              ))}
            </div>
          )}

          {/* ========================================================================= */}
          {/* CENTER ARC REACTOR & PLASMA LIGHTNING CORE */}
          {/* ========================================================================= */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none p-4">
            {/* Main Holographic HUD & Lightning Core Assembly */}
            <motion.div
              className="relative flex items-center justify-center will-change-transform transform-gpu"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={
                phase === "opening"
                  ? { scale: 1.5, opacity: 0, filter: "blur(6px)" }
                  : { scale: 1, opacity: 1, filter: "blur(0px)" }
              }
              transition={{
                duration: phase === "opening" ? 0.6 : 0.4,
                ease: "easeOut",
              }}
            >
              {/* Responsive Concentric Gyroscope Rings */}
              <ArcReactorCore progressDuration={CHARGE_DURATION} />

              {/* Central Realistic Lightning Bolt */}
              <div className="absolute inset-0 flex items-center justify-center">
                <LightningBolt
                  size={85}
                  intensity={phase === "discharging" ? "overcharge" : "high"}
                  showArcs={true}
                />
              </div>

              {/* Volumetric Radial Aura */}
              <motion.div
                className="absolute -inset-12 sm:-inset-16 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, hsl(43 100% 50% / 0.25) 0%, transparent 65%)",
                }}
                animate={{
                  scale: [0.85, 1.15, 0.9],
                  opacity: [0.3, 0.7, 0.4],
                }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Minimalist Energy Capacitor Bar (Hardware Animated) */}
            <motion.div
              className="mt-6 sm:mt-8 flex flex-col items-center z-40 max-w-[140px] sm:max-w-[180px] w-full px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={phase === "opening" ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-1 bg-black/60 border border-primary/30 rounded-full overflow-hidden p-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 via-primary to-yellow-200 rounded-full shadow-[0_0_8px_hsl(43,100%,50%)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: CHARGE_DURATION, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* CRITICAL OVERLOAD ANAMORPHIC FLARE & SHOCKWAVE (Discharge Peak) */}
          {/* ========================================================================= */}
          {phase === "discharging" && (
            <>
              {/* Anamorphic Horizontal Beam */}
              <motion.div
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 sm:h-16 anamorphic-flare z-40 pointer-events-none will-change-transform transform-gpu"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: [0, 1.6, 0.3], opacity: [0, 1, 0.8] }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Central White-Hot Energy Burst */}
              <motion.div
                className="absolute inset-0 bg-primary/20 z-35 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.3 }}
              />

              {/* Expanding Shockwave Ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary z-40 pointer-events-none will-change-transform transform-gpu"
                initial={{ width: 30, height: 30, opacity: 1 }}
                animate={{ width: 800, height: 800, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </>
          )}

          {/* ========================================================================= */}
          {/* CYBER SCANLINE & ATMOSPHERIC GRID OVERLAY */}
          {/* ========================================================================= */}
          <div className="absolute inset-0 pointer-events-none cyber-scanlines opacity-30 z-40" />

          {/* Vertical Moving Radar Laser Scanner */}
          <motion.div
            className="absolute left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0 pointer-events-none z-30 will-change-transform transform-gpu"
            initial={{ top: "-15%" }}
            animate={{ top: "115%" }}
            transition={{ duration: 2.0, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(CurtainAnimation);
