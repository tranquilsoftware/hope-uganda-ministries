// src/utils/navigationUtils.ts
import { useEffect } from 'react';
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom';

export const menuItems = [
  { name: 'Home', href: '/', scrollToTop: true },
  { name: 'Get Involved', href: '/get-involved', scrollToTop: true },
  { name: 'Donate', href: '/donate', scrollToTop: true },
  { name: 'About', href: '/about', scrollToTop: true },
  { name: 'Contact', href: '#contact', scrollToTop: false },
] as const;

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigationType = useNavigationType();

  // Handle scroll restoration after navigation
  useEffect(() => {
    if (navigationType === 'POP') {
      // Don't scroll on back/forward navigation
      return;
    }

    // Handle hash-based scrolling after navigation
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.state?.shouldScrollToTop !== false) {

      /// SEEMS TO WORK EVERY TIME.
      // Scroll to top for new navigations unless explicitly told not to
      window.scrollTo(0, 0);

    }
  }, [location, navigationType]);

  const handleNavigation = (href: string, scrollToTop: boolean = true) => {
    // If it's an external link
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    
    // If it's a hash link
    if (href.startsWith('#')) {
      const hash = href.substring(1);
      if (location.pathname !== '/') {
        // Navigate to home page with hash
        navigate({
          pathname: '/',
          hash: hash
        }, { 
          state: { shouldScrollToTop: false }
        });
      } else {
        // Already on home page, just scroll to section
        const element = document.getElementById(hash);
        if (element) {
          // Small timeout to ensure any pending renders complete
          requestAnimationFrame(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          });
        } else {
          // If element not found, update URL hash and let the browser handle it
          window.location.hash = hash;
        }
      }
      return;
    }
    
    // For all other internal links
    navigate(href, { 
      state: { shouldScrollToTop: scrollToTop } 
    });
  };

  return handleNavigation;
};