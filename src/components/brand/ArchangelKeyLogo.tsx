import { motion } from 'framer-motion';
import logoImage from '@/assets/archangel-key-logo.png';

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
    sm: { img: 40, text: 'text-sm' },
    md: { img: 56, text: 'text-lg' },
    lg: { img: 80, text: 'text-xl' },
    xl: { img: 120, text: 'text-3xl' },
  };

  const { img: imgSize, text: textSize } = sizes[size];

  const LogoImage = (
    <img
      src={logoImage}
      alt="Archangel Key Logo"
      width={imgSize}
      height={imgSize}
      className="drop-shadow-lg object-contain"
    />
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
            {LogoImage}
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
      {LogoImage}
      {showText && (
        <h1 className={`font-heading text-manuscript-gold ${textSize} tracking-wider`}>
          Archangel Key
        </h1>
      )}
    </div>
  );
};