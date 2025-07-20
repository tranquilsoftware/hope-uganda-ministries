import React, { useState, useEffect, Suspense } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Users, Mail, TrendingUp, Menu as MenuIcon, Home } from 'lucide-react';
import { getInvolvedSections } from './config';
import Footer from "../../components/Footer";
import { ScrollAnimation } from '../../components/animations/ScrollAnimation';
// import { GlowButton } from '../../components/ui/GlowButton';
import { IMG_1 } from '../../globals';
import FloatingHeader from '../../components/ui/header/FloatingHeader';

// Define the type for icon names
type IconName = 'dollar-sign' | 'trending-up' | 'users' | 'mail' | 'menu' | 'home';

// Icon mapping for navigation items
const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  'dollar-sign': DollarSign,
  'trending-up': TrendingUp,
  'users': Users,
  'mail': Mail,
  'menu': MenuIcon,
  'home': Home
};

function GetInvolved() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('fund-distribution');

  // Update active section based on current route
  useEffect(() => {
    const currentPath = location.pathname.split('/').pop() || 'fund-distribution';
    setActiveSection(currentPath);
  }, [location]);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Render the navigation items
  const renderNavItems = () => (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {getInvolvedSections.map((item) => {
        if (item.id === 'home') return null; // Skip home from navigation
        const IconComponent = iconMap[item.icon as IconName];
        return (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.path)}
            className={`flex items-center px-4 py-2 rounded-full transition-all duration-200 ${
              activeSection === item.id.split('/').pop()
                ? "bg-primary/20 text-primary border border-primary/30"
                : "text-content-secondary hover:bg-primary/10 hover:text-content-primary"
            }`}
          >
            {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
            <span className="text-sm font-medium">{item.title}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">

      <FloatingHeader />

      {/* Hero Section */}
      <div className="relative w-full h-[300px]" style={{ maxWidth: '100%', height: '300px' }}>
        <img 
          src={IMG_1} 
          alt="Get Involved" 
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
              Get Involved
            </h2>
          </ScrollAnimation>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative bg-background py-16 overflow-visible">
        <div className="container mx-auto px-4">
          {/* Navigation */}
          <div className="max-w-5xl mx-auto mb-12">
            {renderNavItems()}
          </div>

          {/* Content */}
          {/* <div className="bg-background-light rounded-2xl shadow-lg p-8 max-w-5xl mx-auto"> */}
          <div className="bg-background-secondary rounded-2xl shadow-lg p-8 max-w-5xl mx-auto">

            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Suspense fallback={
                  <div className="flex items-center justify-center h-64">
                    <div className="animate-pulse text-content-secondary">Loading...</div>
                  </div>
                }>
                  <Outlet />
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          {/* <div className="text-center mt-12">
            <GlowButton 
              onClick={() => handleNavigation('/get-involved/contact')}
              variant="darkblock"
              className="mt-8 w-full md:w-auto"
            >
              Contact Us <ArrowRight className="w-6 h-6 ml-2" />
            </GlowButton>
          </div> */}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default GetInvolved;