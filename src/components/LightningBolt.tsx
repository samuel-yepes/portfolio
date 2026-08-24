import React, { memo } from "react";
import { motion } from "framer-motion";

interface LightningBoltProps {
  className?: string;
  size?: number;
  intensity?: "normal" | "high" | "overcharge";
  showArcs?: boolean;
}

const LightningBoltComponent: React.FC<LightningBoltProps> = ({
  className = "",
  size = 200,
  intensity = "high",
  showArcs = true,
}) => {
  const uniqueId = React.useId().replace(/:/g, "");

  // Coordinates for main lightning bolt
  const points = "70,0 30,80 56,80 20,192 98,92 66,92 102,0";
  // Inner white-hot filament points
  const innerPoints = "71,6 36,78 57,78 28,178 90,95 66,95 97,6";

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      <motion.svg
        width={size}
        height={size * 1.6}
        viewBox="0 0 120 192"
        fill="none"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          scale: [1, 1.03, 0.99, 1.02, 1],
        }}
        transition={{
          opacity: { duration: 0.35, ease: "easeOut" },
          scale: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10 overflow-visible will-change-transform transform-gpu"
      >
        <defs>
          {/* Main plasma gradient */}
          <linearGradient id={`bolt-grad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff8db" />
            <stop offset="30%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          {/* Intense Core Gradient */}
          <linearGradient id={`bolt-core-${uniqueId}`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#fffbeb" />
            <stop offset="85%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>

          {/* Lightweight GPU-friendly Glow Filter */}
          <filter id={`plasma-glow-${uniqueId}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Plasma Aura (Hardware-accelerated) */}
        <motion.polygon
          points={points}
          fill="hsl(43, 100%, 50%)"
          opacity={intensity === "overcharge" ? 0.45 : 0.25}
          filter={`url(#plasma-glow-${uniqueId})`}
          animate={{
            opacity: intensity === "overcharge" ? [0.35, 0.6, 0.4] : [0.2, 0.35, 0.25],
            scale: [0.98, 1.04, 0.99],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "center" }}
        />

        {/* Secondary High-Voltage Body */}
        <motion.polygon
          points={points}
          fill={`url(#bolt-grad-${uniqueId})`}
          filter={`url(#plasma-glow-${uniqueId})`}
          stroke="hsl(45, 100%, 75%)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          animate={{
            opacity: [0.92, 1, 0.88, 1],
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Inner White-Hot Superconducting Core */}
        <polygon
          points={innerPoints}
          fill={`url(#bolt-core-${uniqueId})`}
          style={{
            filter: "drop-shadow(0 0 3px #ffffff)",
          }}
        />

        {/* Precision Laser Spine Highlight */}
        <line
          x1="70"
          y1="5"
          x2="45"
          y2="78"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <line
          x1="53"
          y1="82"
          x2="28"
          y2="175"
          stroke="#ffffff"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.75"
        />
        <line
          x1="90"
          y1="94"
          x2="68"
          y2="94"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.9"
        />
      </motion.svg>

      {/* Procedural Tesla Arcs */}
      {showArcs && (
        <div className="absolute inset-0 pointer-events-none overflow-visible will-change-transform transform-gpu">
          {[
            { d: "M-10,30 Q10,20 15,45 T30,55", delay: 0 },
            { d: "M90,40 Q110,60 95,80 T115,100", delay: 0.15 },
            { d: "M10,110 Q-5,130 15,145 T5,170", delay: 0.3 },
            { d: "M75,120 Q100,135 85,160 T95,185", delay: 0.2 },
          ].map((arc, i) => (
            <motion.svg
              key={i}
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="0 0 120 192"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.9, 0, 0.7, 0],
                strokeDashoffset: [20, 0, -20],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: arc.delay,
                repeatDelay: 0.4,
              }}
            >
              <path
                d={arc.d}
                stroke="#fef08a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="8 4"
                style={{
                  filter: "drop-shadow(0 0 4px hsl(43, 100%, 50%))",
                }}
              />
            </motion.svg>
          ))}
        </div>
      )}
    </div>
  );
};

export const LightningBolt = memo(LightningBoltComponent);

/**
 * ArcReactorCore - Futuristic Cybernetic Gyro HUD & Energy Matrix (Fully Responsive & Hardware-Accelerated)
 */
const ArcReactorCoreComponent: React.FC<{
  progressDuration?: number; // seconds
  sizeClass?: string;
}> = ({ progressDuration = 1.5, sizeClass = "w-[240px] h-[240px] sm:w-[290px] sm:h-[290px]" }) => {
  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none will-change-transform transform-gpu ${sizeClass}`}
    >
      {/* Outer Telemetry Compass Ring (Counter-Clockwise - CSS GPU Driven) */}
      <div
        className="absolute inset-0 rounded-full border border-dashed border-primary/20 will-change-transform"
        style={{
          animation: "rotate-counter 24s linear infinite",
        }}
      />

      {/* Segmented HUD Ring (Clockwise - CSS GPU Driven) */}
      <div
        className="absolute inset-3 sm:inset-4 rounded-full border border-primary/30 will-change-transform"
        style={{
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          boxShadow: "0 0 12px hsl(43 100% 50% / 0.15)",
          animation: "rotate-clockwise 16s linear infinite",
        }}
      />

      {/* Precision Calibrated Ticks Ring */}
      <div className="absolute inset-6 sm:inset-8 rounded-full border border-primary/15 flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px flex justify-between px-1"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            <div className={`h-1.5 w-0.5 ${i % 3 === 0 ? "bg-primary/80 h-2" : "bg-primary/30"}`} />
            <div className={`h-1.5 w-0.5 ${i % 3 === 0 ? "bg-primary/80 h-2" : "bg-primary/30"}`} />
          </div>
        ))}
      </div>

      {/* Energy Capacity Progress Arc */}
      <svg
        className="absolute inset-8 sm:inset-10 w-[calc(100%-4rem)] sm:w-[calc(100%-5rem)] h-[calc(100%-4rem)] sm:h-[calc(100%-5rem)] -rotate-90"
        viewBox="0 0 100 100"
      >
        {/* Track */}
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="hsl(43 100% 50% / 0.1)"
          strokeWidth="2"
          fill="none"
        />
        {/* Hardware-accelerated Fill */}
        <motion.circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#arc-progress-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="264"
          initial={{ strokeDashoffset: 264 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: progressDuration, ease: "linear" }}
          style={{
            filter: "drop-shadow(0 0 6px hsl(43 100% 50% / 0.8))",
          }}
        />
        <defs>
          <linearGradient id="arc-progress-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>

      {/* Inner Pulsing Arc Core Glow */}
      <motion.div
        className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(43 100% 50% / 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [0.9, 1.2, 0.95],
          opacity: [0.4, 0.8, 0.5],
        }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cyber Crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Tech Corner Brackets */}
      <div className="absolute -inset-1 sm:-inset-2 border border-primary/20 rounded-2xl pointer-events-none [clip-path:polygon(0_0,16px_0,16px_100%,0_100%,0_0,100%_0,100%_16px,0_16px,0_0,100%_0,100%_100%,calc(100%-16px)_100%,calc(100%-16px)_0,100%_0)]" />
    </div>
  );
};

export const ArcReactorCore = memo(ArcReactorCoreComponent);

/** Small decorative lightning for section dividers */
export const LightningDivider: React.FC<{ className?: string }> = memo(({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/80" />
    <div className="relative flex items-center justify-center p-1">
      <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full" />
      <svg
        width="22"
        height="36"
        viewBox="0 0 120 192"
        fill="none"
        className="relative z-10 text-primary drop-shadow-[0_0_8px_hsl(43,100%,50%,0.8)]"
      >
        <polygon
          points="70,0 30,80 56,80 20,192 98,92 66,92 102,0"
          fill="currentColor"
        />
        <polygon
          points="71,6 36,78 57,78 28,178 90,95 66,95 97,6"
          fill="#fffbeb"
          opacity="0.8"
        />
      </svg>
    </div>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/80" />
  </div>
));
LightningDivider.displayName = "LightningDivider";

/** Floating mini lightning bolts for ambient background decoration */
export const FloatingLightning: React.FC<{ className?: string }> = memo(({ className = "" }) => (
  <div className={`absolute pointer-events-none overflow-hidden inset-0 ${className}`}>
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute will-change-transform transform-gpu"
        style={{
          left: `${12 + i * 18}%`,
          top: `${15 + (i % 3) * 25}%`,
        }}
        animate={{
          opacity: [0, 0.4, 0.1, 0.45, 0],
          y: [0, -14, -6, -18, 0],
        }}
        transition={{
          duration: 2.6 + i * 0.4,
          repeat: Infinity,
          delay: i * 0.6,
          ease: "easeInOut",
        }}
      >
        <svg
          width="16"
          height="26"
          viewBox="0 0 120 192"
          fill="none"
          className="text-primary/40 drop-shadow-[0_0_6px_hsl(43,100%,50%,0.4)]"
        >
          <polygon
            points="70,0 30,80 56,80 20,192 98,92 66,92 102,0"
            fill="currentColor"
          />
        </svg>
      </motion.div>
    ))}
  </div>
));
FloatingLightning.displayName = "FloatingLightning";

export default LightningBolt;
