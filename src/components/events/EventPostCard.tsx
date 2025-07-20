import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { GlowButton } from '../ui/GlowButton';

export interface EventPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  category: string;
}

export const EventPostCard = ({ 
  title, 
  excerpt, 
  date, 
  image, 
  slug, 
  category 
}: EventPostCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const excerptRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if the excerpt content is overflowing
    if (excerptRef.current) {
      setIsOverflowing(
        excerptRef.current.scrollHeight > excerptRef.current.clientHeight ||
        excerptRef.current.scrollWidth > excerptRef.current.clientWidth
      );
    }
  }, [excerpt]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background-dark rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col"
    >
      {image ? (
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="h-4 bg-background"></div> // Spacer when no image
      )}
      
      <div className="p-6 flex-grow flex flex-col h-full">
        <div className="flex items-center justify-between text-sm text-content-offtone mb-3">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span className="ml-1">{date}</span>
          </div>
          <span className="bg-primary/10 text-content-offtone text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        
        <div className={`flex-grow flex flex-col ${!image ? 'justify-center' : ''}`}>
          <h3 className="text-xl font-bold text-content-offtone mb-3">{title}</h3>
          <div className="relative">
            <p 
              ref={excerptRef}
              className={`text-content-white transition-all duration-300 overflow-hidden ${
                isExpanded ? 'max-h-full' : 'max-h-20 line-clamp-3'
              }`}
            >
              {excerpt}
            </p>
            {isOverflowing && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary hover:text-primary/80 text-sm font-medium mt-1 focus:outline-none"
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>
        </div>
        
        <GlowButton 
          onClick={() => navigate(slug)}
          variant="block"
          className="mt-4 w-full md:w-auto"
        >
          View Details <ArrowRight className="w-4 h-4 ml-2" />
        </GlowButton>
      </div>
    </motion.div>
  );
};
