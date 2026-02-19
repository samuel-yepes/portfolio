import { motion } from "framer-motion";

const LightningBolt = ({ className = "", size = 200 }: { className?: string; size?: number }) => {
  return (
    <motion.svg
      width={size}
      height={size * 1.6}
      viewBox="0 0 120 192"
      fill="none"
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <defs>
        <linearGradient id="bolt-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="hsl(45, 100%, 70%)" />
          <stop offset="50%" stopColor="hsl(43, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(43, 80%, 35%)" />
        </linearGradient>
        <filter id="bolt-glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bolt-glow-intense">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Outer glow layer */}
      <motion.polygon
        points="70,0 30,80 55,80 20,192 95,95 65,95 100,0"
        fill="hsl(43, 100%, 50%)"
        opacity="0.15"
        filter="url(#bolt-glow-intense)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0.15, 0.25, 0.15] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />
      {/* Main bolt */}
      <motion.polygon
        points="70,0 30,80 55,80 20,192 95,95 65,95 100,0"
        fill="url(#bolt-gradient)"
        filter="url(#bolt-glow)"
        initial={{ pathLength: 0 }}
        animate={{ opacity: [1, 0.85, 1, 0.9, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
      {/* Inner bright core */}
      <polygon
        points="73,12 38,76 58,76 30,178 88,100 67,100 94,12"
        fill="hsl(45, 100%, 85%)"
        opacity="0.5"
      />
    </motion.svg>
  );
};

/** Small decorative lightning for section dividers */
export const LightningDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-primary/60" />
    <svg width="24" height="38" viewBox="0 0 120 192" fill="none" className="text-primary drop-shadow-[0_0_8px_hsl(43,100%,50%,0.6)]">
      <polygon
        points="70,0 30,80 55,80 20,192 95,95 65,95 100,0"
        fill="currentColor"
      />
    </svg>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/40 to-primary/60" />
  </div>
);

/** Floating mini lightning bolts for background decoration */
export const FloatingLightning = ({ className = "" }: { className?: string }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    {[...Array(5)].map((_, i) => (
      <motion.svg
        key={i}
        width="16"
        height="26"
        viewBox="0 0 120 192"
        fill="none"
        className="absolute text-primary/20"
        style={{
          left: `${15 + i * 20}%`,
          top: `${10 + (i % 3) * 30}%`,
        }}
        animate={{
          opacity: [0, 0.4, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.7,
        }}
      >
        <polygon
          points="70,0 30,80 55,80 20,192 95,95 65,95 100,0"
          fill="currentColor"
        />
      </motion.svg>
    ))}
  </div>
);

export default LightningBolt;
