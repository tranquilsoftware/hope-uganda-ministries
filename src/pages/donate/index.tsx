import Footer from '../../components/Footer';
import { IMG_1, BRAND_NAME, PAYPAL_LINK, WESTERN_UNION_INFO } from '../../globals';
import FloatingHeader from '../../components/ui/header/FloatingHeader';
import { ScrollAnimation } from '../../components/animations/ScrollAnimation';
import { ArrowRight, CreditCard, Globe } from 'lucide-react';
import { ReactNode } from 'react';

interface DonationCardProps {
  icon: ReactNode;
  title: string;
  description: string | ReactNode;
  buttonText: string;
  buttonHref: string;
  buttonColor: string;
  gradientFrom: string;
  gradientTo: string;
  className?: string;
}

const DonationCard = ({
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  buttonColor,
  gradientFrom,
  gradientTo,
  className = ''
}: DonationCardProps) => (
  <div className={`flex flex-col bg-background p-8 rounded-2xl shadow-lg h-full ${className}`}>
    <div className="flex-1">
      <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-content-white">
        {title}
      </h3>
      <div className="text-content-offtone mb-6">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description
        )}
      </div>
    </div>
    <div className="mt-auto pt-4">
      <a 
        href={buttonHref} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg ${buttonColor} hover:opacity-90 text-white transition-colors duration-200 font-medium`}
      >
        {buttonText} <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  </div>
);

function Donate() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHeader />

      {/* Hero Section */}
      <div className="relative w-full h-[300px]" style={{ maxWidth: '100%', height: '300px' }}>
        <img 
          src={IMG_1} 
          alt={BRAND_NAME}
          className="w-full h-full object-cover shadow-lg"
          style={{ maxWidth: '100%' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center px-4">
          <ScrollAnimation delay={0.2} direction="left">
            <h2 className="drop-shadow-lg text-6xl font-bold mb-4 text-content-offtone"
              style={{ 
                fontFamily: 'Montserrat', 
                textShadow: '0 8px 10px rgba(0,0,0,0.5)',
                width: 'fit-content',
                margin: '0 auto'
                  }}
                >
                  Support Our Mission
                </h2>
              </ScrollAnimation>

            </div>
          </div>

      {/* Donation Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-content-primary">
              Make a Donation
            </h2>
            <p className="text-lg text-content-secondary max-w-2xl mx-auto">
              Your generous donation will help us continue our mission to support communities in need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* PayPal Donation */}
            <DonationCard
              icon={<CreditCard className="w-10 h-10 text-blue-400" />}
              title="PayPal"
              description="Make a secure donation using your credit card or PayPal account."
              buttonText="Donate with PayPal"
              buttonHref={PAYPAL_LINK}
              buttonColor="bg-blue-600 hover:bg-blue-700"
              gradientFrom="from-blue-500/20"
              gradientTo="to-blue-600/20"
            />

            {/* Western Union */}
            <DonationCard
              icon={<Globe className="w-10 h-10 text-yellow-400" />}
              title="Western Union"
              description={
                <>
                  <p>Send your donation via Western Union to:</p>
                  <div className="bg-background rounded-lg p-4 font-mono text-sm mt-2 mb-2">
                    <p>Recipient: {WESTERN_UNION_INFO.recipient}</p>
                    <p>City: {WESTERN_UNION_INFO.city}</p>
                    <p>Country: {WESTERN_UNION_INFO.country}</p>
                  </div>
                  {WESTERN_UNION_INFO.contactAfterSending && (
                    <p className="text-sm text-content-offtone/70">
                      Please contact us after sending for confirmation.
                    </p>
                  )}
                </>
              }
              buttonText="Visit Western Union"
              buttonHref="https://www.westernunion.com/"
              buttonColor="bg-yellow-600 hover:bg-yellow-700"
              gradientFrom="from-yellow-500/20"
              gradientTo="to-yellow-600/20"
            />
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-content-primary">
              Other Ways to Support
            </h3>
            <p className="text-content-secondary mb-6">
              Interested in other ways to contribute? Contact us to discuss sponsorship opportunities,
              in-kind donations, or volunteer work.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
            >
              Contact Us <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Donate;