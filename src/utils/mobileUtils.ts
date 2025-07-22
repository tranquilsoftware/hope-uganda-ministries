export const isMobile = () => {

    // Check for touch device and mobile OS
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const MIN_WINDOW_SIZE = 900;
    const isMobileWidth = window.innerWidth < MIN_WINDOW_SIZE;
  
    const isMobile = isIOS || isAndroid || isMobileWidth;
    
    return isMobile;
  };
  