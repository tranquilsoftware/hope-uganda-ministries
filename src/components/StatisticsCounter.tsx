import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Users, Calendar, Utensils } from 'lucide-react';
import { CHILDREN_FED_DAILY, getDaysOperating, getTotalMealsServed } from '../globals';

interface StatItem {
  id: string;
  icon: React.ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatisticsCounter: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const daysOperating = getDaysOperating();
  const childrenAmount = CHILDREN_FED_DAILY;
  const mealsAmount = getTotalMealsServed();

  const stats: StatItem[] = [
    {
      id: 'children',
      icon: <Users className="w-12 h-12 text-primary group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 ease-out" />,
      value: childrenAmount,
      label: 'Children Fed Daily',
      suffix: '+'
    },
    {
      id: 'days',
      icon: <Calendar className="w-12 h-12 text-primary group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 ease-out" />,
      value: daysOperating,
      label: 'Days Operating',
      suffix: ''
    },
    {
      id: 'meals',
      icon: <Utensils className="w-12 h-12 text-primary group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 ease-out" />,
      value: mealsAmount,
      label: 'Meals Served',
      prefix: '',
      suffix: '+' 
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="w-full bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="group relative overflow-hidden rounded-2xl p-6 h-48 transition-all duration-300 ease-out cursor-default bg-background-secondary hover:bg-accent-light/50"
              variants={item}
            >

              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="relative">
                    {stat.icon}
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <div className="text-3xl font-bold text-content mb-2">
                    {stat.prefix}
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix}
                  </div>
                  <p className="text-sm text-content-muted">
                    {stat.label}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl bg-primary" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Helper component for smooth number animation
const AnimatedCounter: React.FC<{ value: number }> = ({ value }) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const duration = 2000; // 2 seconds
      const start = 0;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Ease out function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOut * (value - start) + start);
        
        setDisplayValue(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [value, isInView, hasAnimated]);

  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
};

export default StatisticsCounter;
