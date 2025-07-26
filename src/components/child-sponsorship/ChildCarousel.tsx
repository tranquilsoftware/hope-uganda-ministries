import React, { useRef } from 'react';
import { ChildProfile } from './types';
import { ChildProfileCard } from './ChildProfileCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ChildCarouselProps {
  children: ChildProfile[];
  selectedChild: ChildProfile | null;
  onSelectChild: (child: ChildProfile) => void;
}

export const ChildCarousel: React.FC<ChildCarouselProps> = ({
  children: childProfiles,
  selectedChild,
  onSelectChild,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  if (childProfiles.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No children available for sponsorship at this time.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Left Navigation Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-auto py-4 px-2 scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {childProfiles.map((child) => (
          <div
            key={child.id}
            className="flex-shrink-0 w-40"
            style={{ scrollSnapAlign: 'start' }}
          >
            <ChildProfileCard
              child={child}
              onSelect={onSelectChild}
              isSelected={selectedChild?.id === child.id}
            />
          </div>
        ))}
      </div>

      {/* Right Navigation Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-white shadow-md text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Hide scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
