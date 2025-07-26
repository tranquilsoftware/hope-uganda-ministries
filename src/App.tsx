import './App.css'
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import SlideshowHero from './components/SlideshowHero'
import LanderAbout from './components/LanderAbout'
import Footer from './components/Footer'
import StatisticsCounter from './components/StatisticsCounter';

import DonateCTA from './components/DonateCTA'
import SocialSection from './components/SocialSection'
import GoogleMapEmbed from './components/GoogleMapEmbed'

// import Header from './components/ui/header/Header'
import FloatingHeader from './components/ui/header/FloatingHeader'
import SlickSlide from './components/ui/SlickSlide';
import { BubbleTransition } from './components/transitions/BubbleTransition';

import ChildSponsorship from './components/child-sponsorship/ChildSponsorship';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3
};

function App() {
  const location = useLocation();

  // Handle scroll to element when navigating with hash or state
  useLayoutEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Clear the state after scrolling to prevent re-triggering
        window.history.replaceState({}, document.title);
      }
    } else {
      // Scroll to top when navigating to a new page
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-background relative overflow-hidden"
    >
      {/* <Header/> */}
      {/* <FloatingHeader hideInitially={location.pathname === '/'}/> */}
      <FloatingHeader 
            hideInitially={true}
            expandOnTopScroll={false}
            hideOnDownScroll={false}
          />
      {/* <ModernFloatingHeader/> */}
      {/* <SimplisticFloatingHeader/> */}

      <SlideshowHero/>
      
      <BubbleTransition 
        className="absolute z-10"
        height={50}
      />
      <StatisticsCounter />

      <LanderAbout/>

      <SlickSlide/>
      

      <div className="h-20"/>

      <ChildSponsorship onDonationSuccess={(data) => {
        console.log('Donation successful!', data);
      }} />
      <DonateCTA/>


      {/*  Doesnt want testimonials
      <div className="h-40"/>
      <Testimonials/> 
      */}

      {/* <div className="h-40"/>
      <Team/> */}

      {/* <div className="h-40"/> */}
      {/* <FAQ/> */}

      <div className="h-20"/>
      <SocialSection/>
       
      {/* <GoogleMapEmbed 
        className="shadow-xl overflow-hidden"
        height="400px"
      /> */}


      <Footer/>
    </motion.div>
  )
}

export default App