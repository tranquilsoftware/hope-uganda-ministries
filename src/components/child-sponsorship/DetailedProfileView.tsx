import React from 'react';
import { ChildProfile } from './types';
import { Heart, MapPin, Calendar, Users, BookOpen, Gift } from 'lucide-react';

interface DetailedProfileViewProps {
  child: ChildProfile;
  onSponsorClick: () => void;
}

export const DetailedProfileView: React.FC<DetailedProfileViewProps> = ({
  child,
  onSponsorClick,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="md:flex">
        {/* Left Column - Image */}
        <div className="md:w-1/3 p-6 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden border-4 border-white shadow-lg">
              <img
                src={child.imageUrl || `https://placehold.co/400x400/3b82f6/ffffff?text=${child.name.charAt(0)}`}
                alt={`${child.name}, ${child.age} years old`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {child.isSponsored && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-md">
                <Heart className="w-5 h-5" />
              </div>
            )}
          </div>
          
          <button
            onClick={onSponsorClick}
            className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-colors ${
              child.isSponsored
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {child.isSponsored ? 'Already Sponsored' : 'Sponsor This Child'}
          </button>
        </div>

        {/* Right Column - Details */}
        <div className="md:w-2/3 p-6 md:border-l border-gray-100">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{child.name}</h2>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-4 h-4 mr-1 text-blue-500" />
              <span className="text-sm">{child.region}, {child.country}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center text-blue-700 mb-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Age</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">{child.age} years</div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center text-blue-700 mb-1">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Gender</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">{child.gender}</div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center text-blue-700 mb-1">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Interests</span>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {child.interests.slice(0, 2).join(', ')}
                  {child.interests.length > 2 && '...'}
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center text-blue-700 mb-1">
                  <Gift className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Needs</span>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {child.needs.slice(0, 2).join(', ')}
                  {child.needs.length > 2 && '...'}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">About {child.name.split(' ')[0]}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {child.story}
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                    <span className="text-xs font-bold">ID</span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Child ID: <span className="font-mono font-medium">{child.id}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
