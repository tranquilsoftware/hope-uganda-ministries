import { Users, Globe, Calendar, Briefcase, Heart } from 'lucide-react';
import { GetInvolvedSectionProps } from '../types';

export default function Volunteer({ onNavigate }: GetInvolvedSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-2 rounded-full bg-blue-100 text-blue-600">
          <Users className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Volunteer</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">Join Our Volunteer Team</h3>
          <p className="text-gray-600">
            Your time and skills can make a lasting impact in Uganda. Explore volunteer opportunities that match your interests and availability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="p-5 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mission Trips</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Join one of our organized mission trips to Uganda and experience the impact of our work firsthand.
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>1-2 week trips available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>No experience necessary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>All skill levels welcome</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 rounded-lg border border-yellow-100">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Upcoming Trips</h4>
                  <div className="mt-3 space-y-3">
                    <div className="p-3 bg-white rounded border border-gray-100">
                      <div className="font-medium">June 15-30, 2023</div>
                      <div className="text-sm text-gray-500">Medical Mission Trip</div>
                    </div>
                    <div className="p-3 bg-white rounded border border-gray-100">
                      <div className="font-medium">August 1-14, 2023</div>
                      <div className="text-sm text-gray-500">Construction & Education</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-5 bg-purple-50 rounded-lg border border-purple-100">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Skills-Based Volunteering</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Share your professional skills remotely or on-site in areas like:
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Healthcare
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Education
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Construction
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      IT Support
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-red-50 rounded-lg border border-red-100">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Heart className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Get Started</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Ready to make a difference? Fill out our volunteer application form and we'll help you find the perfect opportunity.
                  </p>
                  <button
                    onClick={() => onNavigate?.('/contact?interest=volunteer')}
                    className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                  >
                    Apply to Volunteer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
