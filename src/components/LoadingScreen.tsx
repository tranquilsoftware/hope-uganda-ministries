import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { LOAD_IMAGES } from '../globals';

export const LoadingScreen = ({ onLoaded }: { onLoaded: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const loadingStartTime = useRef(0);
  const showProgressTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    loadingStartTime.current = Date.now();
    let isMounted = true;
    let loadedCount = 0;
    const images = [...LOAD_IMAGES];

    // Set timeout to show progress bar after 1 second if still loading
    showProgressTimeout.current = setTimeout(() => {
      if (isMounted && loadingProgress < 100) {
        setShowProgressBar(true);
      }
    }, 1000);

    const onImageLoad = () => {
      if (!isMounted) return;
      loadedCount++;
      const progress = Math.min(Math.round((loadedCount / images.length) * 100), 100);
      setLoadingProgress(progress);
    };

    const preloadImages = () => {
      if (images.length === 0) {
        return Promise.resolve();
      }

      return new Promise<void>((resolve) => {
        let loadedImages = 0;
        let hasError = false;
        const totalImages = images.length;

        const checkIfAllLoaded = () => {
          if (loadedImages + (hasError ? 1 : 0) >= totalImages) {
            resolve();
          }
        };

        images.forEach((src) => {
          const img = new Image();
          
          const onLoad = () => {
            if (!isMounted) return;
            loadedImages++;
            onImageLoad();
            checkIfAllLoaded();
          };

          const onError = () => {
            if (!isMounted) return;
            hasError = true;
            onImageLoad(); // Still count as loaded to continue progress
            checkIfAllLoaded();
          };

          img.onload = onLoad;
          img.onerror = onError;
          img.src = src;

          // If the image is already cached, the events won't fire
          if (img.complete) {
            onLoad();
          }
        });

        // Fallback timeout in case some images fail to load
        setTimeout(() => {
          if (isMounted) {
            resolve();
          }
        }, 1000);
      });
    };

    const checkIfLoaded = async () => {
      try {
        await Promise.all([
          document.fonts.ready,
          preloadImages()
        ]);

        if (!isMounted) return;

        // Clear the timeout since we're done loading
        if (showProgressTimeout.current) {
          clearTimeout(showProgressTimeout.current);
        }

        // Ensure we show 100% before hiding
        setLoadingProgress(100);
        
        // If loading was fast, hide immediately
        const loadingTime = Date.now() - loadingStartTime.current;
        if (loadingTime < 1000) {
          setIsVisible(false);
          if (isMounted) onLoaded();
          return;
        }

        // Otherwise, show 100% briefly before hiding
        setTimeout(() => {
          if (!isMounted) return;
          setIsVisible(false);
          setTimeout(() => {
            if (isMounted) onLoaded();
          }, 500);
        }, 300);
      } catch (error) {
        console.error('Error during loading:', error);
        if (isMounted) {
          setIsVisible(false);
          onLoaded();
        }
      }
    };

    // Start checking if everything is loaded
    if (document.readyState === 'complete') {
      checkIfLoaded();
    } else {
      window.addEventListener('load', checkIfLoaded);
    }

    return () => {
      isMounted = false;
      if (showProgressTimeout.current) {
        clearTimeout(showProgressTimeout.current);
      }
      window.removeEventListener('load', checkIfLoaded);
    };
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
        >
          {/* Progress bar - only shown after 1 second */}
          <AnimatePresence>
            {showProgressBar && (
              <>
                <motion.div 
                  className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.2 }
                  }}
                >
                  <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${loadingProgress}%`,
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.div>
                
                {/* Loading percentage */}
                <motion.div 
                  className="mt-4 text-sm text-content-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: { delay: 0.3 }
                  }}
                >
                  {loadingProgress}%
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
