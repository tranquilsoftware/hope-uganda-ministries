import React, { useState } from 'react';
import { ChildProfile, DonationFormData } from './types';
import { ChildCarousel } from './ChildCarousel';
import { DetailedProfileView } from './DetailedProfileView';
import { DonationInterface } from './DonationInterface';

// Mock data - replace with actual API call in production
const mockChildren: ChildProfile[] = [
  {
    id: 'CHILD-001',
    name: 'Amina K.',
    age: 8,
    gender: 'Female',
    country: 'Uganda',
    region: 'Kampala',
    story: 'Amina is a bright young girl who loves going to school and dreams of becoming a doctor. She lives with her grandmother after losing both parents to illness. Despite the challenges, she remains at the top of her class and is known for her kindness to other children.',
    isSponsored: false,
    imageUrl: 'https://placehold.co/400x400/3b82f6/ffffff?text=AK',
    interests: ['Reading', 'Soccer', 'Drawing'],
    needs: ['School supplies', 'Healthcare', 'Nutrition']
  },
  {
    id: 'CHILD-002',
    name: 'David M.',
    age: 6,
    gender: 'Male',
    country: 'Uganda',
    region: 'Gulu',
    story: 'David is an energetic boy who loves playing football with his friends. He lives in a small village with his aunt and three cousins. Your sponsorship will help provide him with education, healthcare, and proper nutrition to support his growth and development.',
    isSponsored: true,
    imageUrl: 'https://placehold.co/400x400/3b82f6/ffffff?text=DM',
    interests: ['Football', 'Singing', 'Animals'],
    needs: ['School fees', 'Clothing', 'Mentorship']
  },
  {
    id: 'CHILD-003',
    name: 'Sarah N.',
    age: 10,
    gender: 'Female',
    country: 'Uganda',
    region: 'Mbarara',
    story: 'Sarah is a responsible big sister who helps take care of her younger siblings. She excels in mathematics and dreams of becoming a teacher. Her family struggles to make ends meet, and your support would make a significant difference in her life.',
    isSponsored: false,
    imageUrl: 'https://placehold.co/400x400/3b82f6/ffffff?text=SN',
    interests: ['Mathematics', 'Teaching', 'Dancing'],
    needs: ['Educational materials', 'School uniform', 'Shoes']
  },
  {
    id: 'CHILD-004',
    name: 'James O.',
    age: 7,
    gender: 'Male',
    country: 'Uganda',
    region: 'Jinja',
    story: 'James is a curious and playful boy who loves learning new things. He lives with his elderly grandfather who finds it difficult to provide for all his needs. James dreams of becoming a pilot one day and exploring the world.',
    isSponsored: false,
    imageUrl: 'https://placehold.co/400x400/3b82f6/ffffff?text=JO',
    interests: ['Aviation', 'Drawing', 'Running'],
    needs: ['School fees', 'Warm clothing', 'Nutrition']
  }
];

interface ChildSponsorshipProps {
  onDonationSuccess?: (data: DonationFormData) => void;
}

export const ChildSponsorship: React.FC<ChildSponsorshipProps> = ({
  onDonationSuccess,
}) => {
  const [selectedChild, setSelectedChild] = useState<ChildProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<'browse' | 'donate'>('browse');

  const handleSelectChild = (child: ChildProfile) => {
    setSelectedChild(child);
  };

  const handleDonateClick = () => {
    setView('donate');
    // Scroll to donation section
    setTimeout(() => {
      const element = document.getElementById('donation-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleDonationSubmit = async (data: DonationFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call TODO paypal ?
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would make an API call here
      // await api.submitDonation(data);
      
      if (onDonationSuccess) {
        onDonationSuccess(data);
      }
      
      return true;
    } catch (err) {
      console.error('Donation failed:', err);
      setError('Failed to process donation. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToBrowse = () => {
    setView('browse');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
          Sponsor a Child in Uganda
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Change a child's life and your own through the power of sponsorship. Your support provides 
          education, healthcare, and hope for a brighter future.
        </p>
      </div>

      {/* Child Carousel */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Children Waiting for Sponsors</h2>
        <ChildCarousel 
          children={mockChildren} 
          selectedChild={selectedChild}
          onSelectChild={handleSelectChild}
        />
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Profile View */}
        <div className="md:col-span-2">
          {selectedChild ? (
            <DetailedProfileView 
              child={selectedChild} 
              onSponsorClick={handleDonateClick}
            />
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-blue-100 mb-4">
                <svg
                  className="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Child</h3>
              <p className="text-gray-600">
                Click on a child's profile to learn more about them and how you can make a difference in their life.
              </p>
            </div>
          )}
        </div>

        {/* Right Column - Donation Interface */}
        <div id="donation-section">
          {view === 'donate' && selectedChild ? (
            <DonationInterface
              selectedChildId={selectedChild.id}
              onSubmit={handleDonationSubmit}
              isLoading={isLoading}
              error={error}
            />
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Make a Difference</h3>
                <p className="text-gray-600 mb-6">
                  Select a child to begin the sponsorship process or make a general donation to support our mission.
                </p>
                <button
                  onClick={() => setView('donate')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Make a General Donation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Impact Stats */}
      <div className="mt-16 bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Your Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-gray-700">of donations go directly to program services</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <p className="text-gray-700">children's lives changed through sponsorship</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
            <p className="text-gray-700">years of transforming lives in Uganda</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              question: 'How does child sponsorship work?',
              answer: 'When you sponsor a child, your monthly donation provides them with access to education, healthcare, nutrition, and other essential services. You\'ll receive updates about your sponsored child and can exchange letters to build a meaningful connection.'
            },
            {
              question: 'Can I choose the child I want to sponsor?',
              answer: 'Yes! You can browse through profiles of children waiting for sponsors and select the child you feel a connection with. Each profile includes information about the child\'s background, interests, and needs.'
            },
            {
              question: 'How long does sponsorship last?',
              answer: 'Child sponsorship typically continues until the child completes their education or reaches the age of 18. However, you can choose to end your sponsorship at any time if your circumstances change.'
            },
            {
              question: 'Is my donation tax-deductible?',
              answer: 'Yes, all donations to our organization are tax-deductible to the full extent allowed by law. You will receive a receipt for tax purposes for all donations made.'
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-blue-600 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChildSponsorship;
