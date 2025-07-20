import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BubbleTransitionProps {
  className?: string;
  delay?: number;
  height?: number;
  color?: string;
}

export const BubbleTransition = ({
  className = '',
  delay = 0,
  height = 40,
  color = 'bg-background',
}: BubbleTransitionProps) => {
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
        marginTop: `-${height}px`,
      }}
    >
      <motion.div 
        className={`absolute w-full h-full ${color} rounded-b-full`}
        initial={{ 
          y: '100%',
          scaleX: 1.2,
          borderRadius: '60% 60% 0 0 / 100%',
        }}
        animate={{ 
          y: isVisible ? '0%' : '100%',
          scaleX: isVisible ? 1 : 1.2,
          borderRadius: isVisible ? '60% 60% 0 0 / 100%' : '50% 50% 0 0 / 100%',
        }}
        transition={{ 
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1,
        }}
      />
    </div>
  );
};
