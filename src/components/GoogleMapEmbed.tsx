import React, { useEffect, useRef, useState } from 'react';
import { BRAND_NAME, GOOGLE_MAPS_PLACE } from '../globals';

interface GoogleMapEmbedProps {
  /**
   * Width of the map in pixels or percentage
   * @default '100%'
   */
  width?: string | number;
  /**
   * Height of the map in pixels or percentage
   * @default '450px'
   */
  height?: string | number;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Enable preloading of the iframe
   * @default true
   */
  preload?: boolean;
}

/**
 * GoogleMapEmbed component that displays an embedded Google Map using the direct embed URL
 * The map will start loading immediately when the component mounts, even if not in view
 */
const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  width = '100%',
  height = '450px',
  className = 'rounded-lg shadow-xl overflow-hidden',
  preload = true,
}) => {
  const mapUrl = GOOGLE_MAPS_PLACE;
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Start loading the map immediately when component mounts
  useEffect(() => {
    if (preload) {
      // Create a hidden iframe to preload the map
      const preloadIframe = document.createElement('iframe');
      preloadIframe.src = mapUrl;
      preloadIframe.style.display = 'none';
      document.body.appendChild(preloadIframe);
      
      // Clean up the preload iframe when component unmounts
      return () => {
        document.body.removeChild(preloadIframe);
      };
    }
  }, [preload]);

  // Set up intersection observer to show the map when it comes into view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Start loading when within 200px of viewport
        threshold: 0.01
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`google-map-embed ${className}`} 
      style={{ width: '100%', overflow: 'hidden' }}
    >
      {isVisible && (
        <iframe
          title={`${BRAND_NAME} Location on Google Maps`}
          width={width}
          height={height}
          style={{ border: 0 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
          allowFullScreen
          aria-label={`Interactive map showing the location of ${BRAND_NAME}`}
        />
      )}
    </div>
  );
};

export default GoogleMapEmbed;
