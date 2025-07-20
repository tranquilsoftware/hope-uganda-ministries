import { DollarSign } from 'lucide-react';
import { GetInvolvedSectionProps } from '../types';

export default function FundDistribution({ onNavigate }: GetInvolvedSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
          <DollarSign className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Fund Distribution</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">How Your Donation is Used</h3>
          <p className="text-gray-600">
            Your generous contributions directly impact lives in Uganda. Here's how we allocate every dollar:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-yellow-800">95% - Food and Basic Needs</h4>
              <p className="text-sm text-yellow-700 mt-1">
                The majority of funds go directly to providing meals, clean water, and essential supplies to those in need.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-800">5% - Bibles and Spiritual Materials</h4>
              <p className="text-sm text-blue-700 mt-1">
                A small portion is allocated to providing spiritual nourishment through Bibles and Christian literature.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h4 className="font-semibold text-green-800">100% - Direct Impact</h4>
              <p className="text-sm text-green-700 mt-1">
                Every dollar goes directly to our mission in Uganda. We maintain minimal administrative costs.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-purple-800">Transparent Reporting</h4>
              <p className="text-sm text-purple-700 mt-1">
                We provide regular updates and financial reports to show the impact of your donations.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-6 border-t border-gray-100">
          <button
            onClick={() => onNavigate?.('/donate')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
          >
            Make a Donation
          </button>
        </div>
      </div>
    </div>
  );
}
