import Footer from '../../components/Footer';
import { IMG_1, BRAND_NAME, BRIEF_DESCRIPTION, OWNER_JOHNWEST, OWNER_ROSEMARY } from '../../globals';
import { ScrollAnimation } from '../../components/animations/ScrollAnimation';
import { ArrowRight } from 'lucide-react';
import { GlowButton } from '../../components/ui/GlowButton';
import FloatingHeader from '../../components/ui/header/FloatingHeader';
import { useNavigation } from '../../utils/navigationUtils';


function About() {
const handleNavigation = useNavigation();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHeader hideInitially={false}/>
      
      <div className="relative w-full h-[300px]" style={{ maxWidth: '100%', height: '300px' }}>
        <img 
          src={IMG_1} 
          alt="Bar Area" 
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
              About Us
            </h2>
          </ScrollAnimation>
        </div>
      </div>

      <section className="relative bg-background py-16 overflow-visible">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">

            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-16">
              {/* John's Card */}
              <div className="bg-background-dark p-8 rounded-2xl shadow-lg">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <img 
                    src={OWNER_JOHNWEST} 
                    alt="JohnWest"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-content-white">
                    John West
                </h3>
                <ul className="space-y-2 text-content-offtone">
                  <li>• Founder of {BRAND_NAME}</li>
                </ul>
              </div>
              
              {/* Rosemary's Card */}
              <div className="bg-background-dark p-8 rounded-2xl shadow-lg">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-bl from-accent/20 to-primary/20 overflow-hidden">
                  <img 
                    src={OWNER_ROSEMARY} 
                    alt="Rosemary"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-content-white">
                    Rosemary
                </h3>
                <ul className="space-y-2 text-content-offtone">
                  <li>• Volunteer of {BRAND_NAME}</li>
                </ul>
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
            <ScrollAnimation direction="left">
              <h3 className="text-2xl font-bold mb-6 text-content-primary">
                Our Vision
              </h3>
            </ScrollAnimation>

              <ScrollAnimation direction="right">
              <p className="text-lg text-content-secondary max-w-2xl mx-auto mb-8">
                {BRIEF_DESCRIPTION}
              </p>
            </ScrollAnimation>

              <GlowButton 
                onClick={() => handleNavigation('#contact')}
                variant="darkblock"
                className="mt-8 w-full md:w-auto"
              >
                Get In Touch <ArrowRight className="w-6 h-6 ml-2" />
              </GlowButton>
            </div>
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  )
}

export default About;