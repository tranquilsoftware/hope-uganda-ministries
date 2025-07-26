import React from 'react';
import { ChildProfile } from './types';
import { Heart, Info } from 'lucide-react';

interface ChildProfileCardProps {
  child: ChildProfile;
  onSelect: (child: ChildProfile) => void;
  isSelected: boolean;
}

export const ChildProfileCard: React.FC<ChildProfileCardProps> = ({
  child,
  onSelect,
  isSelected,
}) => {
  return (
    <div 
      className={`relative flex flex-col items-center p-4 rounded-xl transition-all duration-300 cursor-pointer ${
        isSelected 
          ? 'bg-blue-50 ring-2 ring-blue-500 scale-105' 
          : 'bg-white hover:bg-blue-50 hover:shadow-md'
      }`}
      onClick={() => onSelect(child)}
      aria-label={`View ${child.name}'s profile`}
    >
      {/* Info Button */}
      <button 
        className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 text-blue-600 hover:bg-blue-100 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(child);
        }}
        aria-label={`More info about ${child.name}`}
      >
        <Info className="w-4 h-4" />
      </button>

      {/* Profile Image */}
      <div className="relative mb-3">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img
            src={child.imageUrl || `https://placehold.co/200x200/3b82f6/ffffff?text=${child.name.charAt(0)}`}
            alt={`${child.name}, ${child.age} years old`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {child.isSponsored && (
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full">
            <Heart className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Child Info */}
      <h3 className="font-semibold text-gray-900 text-center">{child.name}</h3>
      <p className="text-sm text-gray-600 mb-1">{child.age} years old</p>
      <div className="flex items-center text-xs text-gray-500">
        <svg
          className="w-3 h-3 mr-1 text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        {child.region}, {child.country}
      </div>

      {/* Sponsor Button */}
      <button
        className={`mt-3 w-full py-2 px-4 rounded-md text-sm font-medium transition-colors ${
          child.isSponsored
            ? 'bg-green-100 text-green-800 hover:bg-green-200'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(child);
        }}
      >
        {child.isSponsored ? 'Sponsored' : 'Sponsor Now'}
      </button>
    </div>
  );
};
