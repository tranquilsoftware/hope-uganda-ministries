import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface EclipseTransitionProps {
  className?: string;
  delay?: number;
  height?: number;
  circleSize?: number; // Diameter of the circle in pixels
}

export const EclipseTransition = ({
  className = '',
  delay = 0,
  height = 40,
  circleSize = 300, // Default diameter of the circle
}: EclipseTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`relative w-full overflow-hidden pointer-events-none ${className}`}
      style={{ 
        height: `${height}px`,
        marginTop: `-${height}px`
      }}
    >
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 bg-background"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize * 2}px`, // Double the height to show the curve
          borderRadius: '50%',
          bottom: '0',
          transformOrigin: 'center bottom',
        }}
        initial={{ 
          y: isVisible ? '0%' : '100%',
          opacity: 0,
        }}
        animate={{ 
          y: isVisible ? '0%' : '100%',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ 
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
          delay: 0.2
        }}
      />
    </div>
  );
};
