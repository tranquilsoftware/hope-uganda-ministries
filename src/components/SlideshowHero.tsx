import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BRAND_NAME, HERO_IMAGES } from '../globals' //, LOGO 

// Using HERO_IMAGES from globals for centralized image management

const variants = {
  enter: (/*direction: number*/) => ({
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: (/*direction: number*/) => ({
    zIndex: 0,
    opacity: 0,
  })
}

export default function Hero() {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = page % HERO_IMAGES.length

  useEffect(() => {
    const timer = setInterval(() => {
      setPage(([prevPage, prevDirection]) => [
        prevPage + 1,
        prevDirection >= 0 ? 1 : -1,
      ])
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Image preloading effect
  useEffect(() => {
    // Preload next image when current image changes
    const preloadNextImage = () => {
      const nextImageIndex = (imageIndex + 1) % HERO_IMAGES.length;
      const img = new Image();
      img.src = HERO_IMAGES[nextImageIndex];
      img.onerror = () => console.error(`Failed to load image: ${HERO_IMAGES[nextImageIndex]}`);
    };

    preloadNextImage();
  }, [imageIndex]); // Only re-run when imageIndex changes

  return (
    //  OG
    // <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    
    // NEEDED FOR BEAUTIFUL BUBBLE TRANSITION!!! NEEDS TO BE PUSHED DOWN FURTHER INTO THE SECTION SO WE CAN HAVE A BUBBLE OVERLAP IT!
    <section id="hero" className="relative w-full 
     min-h-[120vh]
     flex items-center justify-center overflow-hidden">

    {/* Background Slideshow with Blur */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            className="absolute inset-0 w-full h-full"
            custom={direction}
            variants={variants}
            initial={{ ...variants.enter(), scale: 1 }}
            animate={{ opacity: 1, scale: 1.25 }} // slowly zoom in
            exit={{ ...variants.exit(), scale: 1 }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 15, ease: 'linear' }
            }}
            style={{
              backgroundImage: `url(${HERO_IMAGES[imageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              willChange: 'transform',
            }}
          >
            {/* Blur overlay */}
            <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content with higher z-index to stay on top */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-5 text-center">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* LOGO *-/}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 w-16 h-16 md:w-32 md:h-32"
            >
              <img 
                src={LOGO} 
                alt={`${BRAND_NAME} Logo`}
                className="w-full h-full object-contain"
              />
            </motion.div>
            */}
            <motion.div 
              className="w-full overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h1 
                className="mb-4 text-5xl xs:text-6xl sm:text-7xl md:text-8xl text-content-offtone font-bold drop-shadow-lg text-center px-4"
                style={{ 
                  fontFamily: 'Montserrat', 
                  textShadow: '0 8px 10px rgba(0,0,0,0.5)',
                  lineHeight: '1.1',
                  wordBreak: 'break-word'
                }}
              >
                {BRAND_NAME}
              </h1>
            </motion.div>

            {/* DESCRIPTION *-/}
            <motion.p 
              className="text-lg md:text-xl text-content-offtone max-w-2xl mx-auto px-4 backdrop-blur-sm bg-black/20 py-2 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              {/* {BRIEF_DESCRIPTION} *-/}
              {COOL_PITCH}
            </motion.p>*/}


          </motion.div>
        </div>
      </div>
    </section>
  )
}