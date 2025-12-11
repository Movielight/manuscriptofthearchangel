import { motion } from 'framer-motion';

interface ArchangelKeyLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  animate?: boolean;
  className?: string;
}

export const ArchangelKeyLogo = ({ 
  size = 'md', 
  showText = false, 
  animate = true,
  className = '' 
}: ArchangelKeyLogoProps) => {
  const sizes = {
    sm: { svg: 32, text: 'text-sm' },
    md: { svg: 48, text: 'text-lg' },
    lg: { svg: 64, text: 'text-xl' },
    xl: { svg: 96, text: 'text-3xl' },
  };

  const { svg: svgSize, text: textSize } = sizes[size];

  const LogoSVG = (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Glow effect */}
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(43, 74%, 60%)" />
          <stop offset="50%" stopColor="hsl(43, 74%, 49%)" />
          <stop offset="100%" stopColor="hsl(43, 74%, 35%)" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Left Wing */}
      <path
        d="M10 50 Q5 45 8 35 Q12 25 20 22 Q28 19 35 25 Q38 30 38 40 Q38 45 35 48 L38 50 L35 52 Q38 55 38 60 Q38 70 35 75 Q28 81 20 78 Q12 75 8 65 Q5 55 10 50"
        fill="url(#goldGradient)"
        filter="url(#glow)"
        opacity="0.9"
      />
      
      {/* Right Wing */}
      <path
        d="M90 50 Q95 45 92 35 Q88 25 80 22 Q72 19 65 25 Q62 30 62 40 Q62 45 65 48 L62 50 L65 52 Q62 55 62 60 Q62 70 65 75 Q72 81 80 78 Q88 75 92 65 Q95 55 90 50"
        fill="url(#goldGradient)"
        filter="url(#glow)"
        opacity="0.9"
      />

      {/* Cross - Vertical */}
      <rect
        x="46"
        y="15"
        width="8"
        height="70"
        rx="2"
        fill="url(#goldGradient)"
        filter="url(#glow)"
      />

      {/* Cross - Horizontal */}
      <rect
        x="35"
        y="30"
        width="30"
        height="8"
        rx="2"
        fill="url(#goldGradient)"
        filter="url(#glow)"
      />

      {/* Center Jewel */}
      <circle
        cx="50"
        cy="34"
        r="4"
        fill="hsl(43, 74%, 65%)"
        filter="url(#glow)"
      />
    </svg>
  );

  if (animate) {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 12 }}
          className="relative"
        >
          <motion.div
            animate={{ 
              filter: ['drop-shadow(0 0 8px hsl(43, 74%, 49%))', 'drop-shadow(0 0 16px hsl(43, 74%, 49%))', 'drop-shadow(0 0 8px hsl(43, 74%, 49%))']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {LogoSVG}
          </motion.div>
        </motion.div>
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className={`font-heading text-manuscript-gold ${textSize} tracking-wider`}>
              Archangel Key
            </h1>
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {LogoSVG}
      {showText && (
        <h1 className={`font-heading text-manuscript-gold ${textSize} tracking-wider`}>
          Archangel Key
        </h1>
      )}
    </div>
  );
};