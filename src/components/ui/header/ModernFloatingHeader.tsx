import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "../Button";
import { useLocation, useNavigate } from 'react-router-dom';
import { SMALL_LOGO } from '../../../globals';

export default function ModernFloatingHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Split menu items into left and right
  const leftMenuItems = [
    { name: 'Reserve', href: '/reserve' },
    { name: 'Events', href: '/events' },
  ];

  const rightMenuItems = [
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '#contact' },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('#')) return location.hash === href;
    if (href.startsWith('/')) return location.pathname === href;
    return false;
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative container mx-auto max-w-6xl">
        {/* Logo - Absolutely positioned in the center */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <button 
            onClick={() => handleNavigation('/')}
            className="group transition-all duration-300 hover:scale-105"
          >
            <img 
              src={SMALL_LOGO}
              alt="Home" 
              className={`w-16 h-16 transition-all duration-300 ${isScrolled ? 'w-32 h-32' : 'w-24 h-24'}`} 
            />
          </button>
        </div>

        {/* Navigation Container */}
        <div className={`relative bg-background/90 backdrop-blur-lg rounded-b-xl shadow-lg border-x border-b border-white/10 transition-all duration-300 ${
          isScrolled ? 'pt-2 pb-2 px-8' : 'pt-8 pb-6 px-10'
        }`}>
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {leftMenuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.href) 
                      ? 'bg-primary/10 text-content-secondary' 
                      : 'text-content-primary hover:bg-content/5 hover:text-content-secondary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Center Spacer - Matches logo width to keep items balanced */}
            <div className="w-16 flex-shrink-0" />

            {/* Right Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {rightMenuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.href) 
                      ? 'bg-primary/10 text-content-secondary' 
                      : 'text-content-primary hover:bg-content/5 hover:text-content-secondary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-content-primary hover:bg-content/5 ml-auto"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <nav className="md:hidden py-4 space-y-2 mt-4 border-t border-content/10 pt-4">
              {[...leftMenuItems, ...rightMenuItems].map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`block w-full text-center px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.href) 
                      ? 'bg-primary/10 text-content-secondary' 
                      : 'text-content-primary hover:bg-content/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}