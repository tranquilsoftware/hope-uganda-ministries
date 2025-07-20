import { Mail, Instagram, Facebook } from 'lucide-react';
import { CONTACT_EMAIL, INSTAGRAM_LINK, FACEBOOK_LINK, INSTAGRAM_USERNAME, FACEBOOK_USERNAME } from '../globals';
import { ScrollAnimation } from './animations/ScrollAnimation';

export const SocialSection = () => {
  return (
    <section id="contact" className="relative py-16 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold mb-4 text-content-primary">
            Contact the Ministry
          </h2>

        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollAnimation delay={0.1} direction="up">
              <div className="group relative overflow-hidden rounded-xl h-48 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-background-dark border border-border hover:border-border/50">
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                >
                  <Mail className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-content-secondary">
                    {CONTACT_EMAIL}
                  </p>
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2} direction="up">
              <div className="group relative overflow-hidden rounded-xl h-48 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-background-dark border border-border hover:border-border-400/50">
                <a 
                  href={INSTAGRAM_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                >
                  <Instagram className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Instagram</h3>
                  <p className="text-content-secondary">@{INSTAGRAM_USERNAME}</p>
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3} direction="up">
              <div className="group relative overflow-hidden rounded-xl h-48 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-background-dark border border-border hover:border-border-400/50">
                <a 
                  href={FACEBOOK_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                >
                  <Facebook className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Facebook</h3>
                  <p className="text-content-secondary">@{FACEBOOK_USERNAME}</p>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;