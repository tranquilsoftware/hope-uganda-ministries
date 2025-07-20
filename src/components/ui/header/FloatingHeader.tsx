import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "../Button"
import { useLocation } from 'react-router-dom'
import { HREF_HOME_LINK, BRAND_NAME, SMALL_LOGO } from '../../../globals'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigation, menuItems } from '../../../utils/navigationUtils';

interface FloatingHeaderProps {
  hideInitially?: boolean;
  expandOnTopScroll?: boolean;
  hideOnDownScroll?: boolean;
}

export default function FloatingHeader({ 
  hideInitially = false, 
  expandOnTopScroll = false,
  hideOnDownScroll = false
}: FloatingHeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(!hideInitially)
  const [isMounted, setIsMounted] = useState(false)
  const location = useLocation()
  const [isIOS, setIsIOS] = useState(false)
  
  // Menu items are imported from navigationUtils

  const isActive = (href: string) => {
    // If it's the home page and href is home
    if (href === '/' && location.pathname === '/') return true;
    // If it's a hash link and we're on the home page
    if (href.startsWith('#') && location.pathname === '/') {
      return location.hash === href;
    }
    // For other pages
    return location.pathname === href;
  };


  const handleNavigation = useNavigation();

  useEffect(() => {
    setIsMounted(true);
    if (!hideInitially) {
      setIsVisible(true);
    }
    
    // Detect if the device is iOS
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    setIsIOS(/(iPad|iPhone|iPod)/gi.test(userAgent));

    let lastScrollY = window.scrollY;
    let ticking = false;

// Handle scroll effect
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrolled = currentScrollY > 10;
          
          if (hideOnDownScroll) {
            const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 100;
            
            if (isScrollingDown && isVisible) {
              // Scrolling down and header is visible - hide it
              setIsVisible(false);
            } else if (!isScrollingDown && !isVisible) {
              // Scrolling up and header is hidden - show it
              setIsVisible(true);
            }
          } else {
            // Original behavior if hideOnDownScroll is false
            setIsScrolled(scrolled);
            if (hideInitially && !isVisible && scrolled) {
              setIsVisible(true);
            }
          }
          
          lastScrollY = currentScrollY;
          setIsScrolled(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hideInitially, hideOnDownScroll, isVisible]);
  
  if (!isMounted) return null;

  return (
    <header 
      className={`
        fixed top-4 left-0 right-0 z-50
        transition-opacity duration-500 ease-in-out
        ${isScrolled || !expandOnTopScroll ? 'px-4' : 'px-0'}
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className={`container mx-auto max-w-6xl bg-background-dark/90 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 transition-all duration-300 ${
        isScrolled || !expandOnTopScroll ? 'py-2 px-6' : 'py-4 px-8'
      }`}>
        <div className="flex items-center justify-between">
          <a 
            href={HREF_HOME_LINK} 
            className="flex items-center group transition-transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/', true);
              setIsOpen(false);
            }}
          >
            <img 
              src={SMALL_LOGO}
              alt={BRAND_NAME} 
              className={`h-10 w-auto transition-all duration-300 ${(isScrolled || !expandOnTopScroll) ? 'h-8' : 'h-10'}`} 
            />
            <span className={`ml-3 font-bold text-content-offtone transition-all duration-300 ${(isScrolled || !expandOnTopScroll) ? 'text-xl' : 'text-2xl'}`} style={{ fontFamily: 'Montserrat' }}>
              {BRAND_NAME}
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  handleNavigation(item.href, item.scrollToTop);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.href) 
                    ? 'bg-primary/10 text-content-offtone/80' 
                    : 'text-content-offtone hover:bg-content/5 hover:text-content-offtone/80'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className={`${!isIOS ? 'md:hidden' : ''} text-content-offtone hover:bg-content/5`}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <AnimatePresence>
          <motion.div
            className="md:hidden overflow-hidden"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { 
                height: "auto",
                opacity: 1,
                transition: { 
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                  when: "beforeChildren"
                }
              },
              closed: { 
                height: 0,
                opacity: 0,
                transition: { 
                  duration: 0.2,
                  ease: [0.4, 0, 0.6, 1],
                  when: "afterChildren"
                }
              }
            }}
          >
            <nav className="py-4 space-y-2 border-t border-content/10 pt-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={isOpen ? { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: 0.05 * index,
                      duration: 0.3
                    }
                  } : { 
                    opacity: 0, 
                    y: -10,
                    transition: {
                      duration: 0.2
                    }
                  }}
                >
                  <button
                    onClick={() => {
                      handleNavigation(item.href, item.scrollToTop);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href) 
                        ? 'bg-primary/10 text-content-offtone/80' 
                        : 'text-content-offtone hover:bg-content/5 hover:text-content-offtone/80'
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </AnimatePresence>
      </div>
    </header>
  );
}