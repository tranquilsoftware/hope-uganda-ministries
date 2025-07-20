import { TrendingUp, Lightbulb, Users, HeartHandshake } from 'lucide-react';
import { GetInvolvedSectionProps } from '../types';

export default function Fundraising({ onNavigate }: GetInvolvedSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-2 rounded-full bg-green-100 text-green-600">
          <TrendingUp className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Fundraising</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">Start Your Own Fundraiser</h3>
          <p className="text-gray-600">
            Join us in making a difference by organizing your own fundraising campaign. Every effort counts!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fundraising Ideas</h4>
                  <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Birthday fundraiser on social media</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Community bake sale or car wash</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Fitness challenge with donation pledges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Virtual fundraising events</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Corporate Partnerships</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Does your company match donations or support employee fundraising? Let's work together to make an even greater impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-5 bg-yellow-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <HeartHandshake className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Get Started</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Ready to start your own fundraiser? We'll provide all the materials and support you need to make it a success.
                  </p>
                  <button
                    onClick={() => onNavigate?.('/contact')}
                    className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                  >
                    Contact Us to Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Fundraising Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Download our fundraising guide (PDF)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Use our social media templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Access our logo and brand assets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
