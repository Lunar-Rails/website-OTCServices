import React, { useEffect, useRef } from 'react';

const FloatingLogo = () => {
  const desktopLogoRef = useRef<HTMLDivElement>(null);
  const mobileLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 200; // Maximum scroll distance for the effect
      const translateY = Math.max(-scrollPosition * 0.3, -maxScroll);

      if (desktopLogoRef.current) {
        desktopLogoRef.current.style.transform = `translateY(${translateY}px)`;
      }
      if (mobileLogoRef.current) {
        mobileLogoRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        ref={desktopLogoRef}
        className="absolute right-0 z-10 transition-transform duration-300 hidden sm:block"
        style={{
          width: '366px',
          height: '366px',
          top: '-183px', // Half the height to position it between sections
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 68.22 68.22" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <linearGradient id="floating-gradient" x1="25.75" y1="-23.65" x2="88.75" y2="39.34" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#00e1ff"/>
              <stop offset=".11" stopColor="#09cffa"/>
              <stop offset=".34" stopColor="#22a0ed"/>
              <stop offset=".66" stopColor="#4a56d9"/>
              <stop offset="1" stopColor="#7800c2"/>
            </linearGradient>
          </defs>
          <g>
            <path fill="url(#floating-gradient)" d="M58.81,18.82c5.2,0,9.41-4.21,9.41-9.41C68.22,4.21,64.01,0,58.81,0c-5.2,0-9.41,4.21-9.41,9.41,0,5.2,4.21,9.41,9.41,9.41Z"/>
            <path fill="url(#floating-gradient)" d="M59.12,49.42h.01c-8.5-.29-15.33-7.12-15.61-15.62h0c-.16-4.94-4.14-8.92-9.09-9.08h0c-8.5-.29-15.33-7.12-15.61-15.62h0C18.64,4.05,14.51,0,9.41,0,4.21,0,0,4.21,0,9.41c0,5.09,4.05,9.23,9.11,9.4h-.01c8.5.3,15.33,7.12,15.61,15.62h.01c.16,4.94,4.14,8.92,9.09,9.08h-.01c8.5.3,15.33,7.12,15.61,15.62h.01c.16,5.04,4.3,9.1,9.4,9.1,5.2,0,9.41-4.21,9.41-9.41,0-5.09-4.05-9.23-9.1-9.4Z"/>
            <path fill="url(#floating-gradient)" d="M33.81,18.81h-.01c8.5.3,15.33,7.12,15.61,15.62h.01c.16,5.04,4.3,9.09,9.39,9.09,5.2,0,9.41-4.21,9.41-9.41,0-5.09-4.05-9.23-9.1-9.39h.01c-8.5-.3-15.33-7.12-15.61-15.62h-.01C43.35,4.05,39.21,0,34.11,0s-9.41,4.21-9.41,9.41c0,5.09,4.05,9.23,9.11,9.4Z"/>
            <path fill="url(#floating-gradient)" d="M34.42,49.42h0c-8.5-.3-15.33-7.12-15.61-15.62h-.01c-.16-5.04-4.3-9.09-9.4-9.1C4.21,24.7,0,28.92,0,34.11c0,5.09,4.05,9.23,9.1,9.39h0c8.5.3,15.33,7.12,15.61,15.62h0c.16,5.04,4.3,9.1,9.4,9.1,5.2,0,9.41-4.21,9.41-9.41,0-5.09-4.05-9.23-9.1-9.4Z"/>
            <path fill="url(#floating-gradient)" d="M9.41,49.4C4.21,49.4,0,53.62,0,58.81c0,5.2,4.21,9.41,9.41,9.41s9.41-4.21,9.41-9.41c0-5.2-4.21-9.41-9.41-9.41Z"/>
          </g>
        </svg>
      </div>

      <div 
        ref={mobileLogoRef}
        className="absolute right-0 z-10 transition-transform duration-300 block sm:hidden"
        style={{
          width: '200px',
          height: '200px',
          top: '-100px', // Half the height to position it between sections
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 68.22 68.22" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <linearGradient id="floating-gradient-mobile" x1="25.75" y1="-23.65" x2="88.75" y2="39.34" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#00e1ff"/>
              <stop offset=".11" stopColor="#09cffa"/>
              <stop offset=".34" stopColor="#22a0ed"/>
              <stop offset=".66" stopColor="#4a56d9"/>
              <stop offset="1" stopColor="#7800c2"/>
            </linearGradient>
          </defs>
          <g>
            <path fill="url(#floating-gradient-mobile)" d="M58.81,18.82c5.2,0,9.41-4.21,9.41-9.41C68.22,4.21,64.01,0,58.81,0c-5.2,0-9.41,4.21-9.41,9.41,0,5.2,4.21,9.41,9.41,9.41Z"/>
            <path fill="url(#floating-gradient-mobile)" d="M59.12,49.42h.01c-8.5-.29-15.33-7.12-15.61-15.62h0c-.16-4.94-4.14-8.92-9.09-9.08h0c-8.5-.29-15.33-7.12-15.61-15.62h0C18.64,4.05,14.51,0,9.41,0,4.21,0,0,4.21,0,9.41c0,5.09,4.05,9.23,9.11,9.4h-.01c8.5.3,15.33,7.12,15.61,15.62h.01c.16,4.94,4.14,8.92,9.09,9.08h-.01c8.5.3,15.33,7.12,15.61,15.62h.01c.16,5.04,4.3,9.1,9.4,9.1,5.2,0,9.41-4.21,9.41-9.41,0-5.09-4.05-9.23-9.1-9.4Z"/>
            <path fill="url(#floating-gradient-mobile)" d="M33.81,18.81h-.01c8.5.3,15.33,7.12,15.61,15.62h.01c.16,5.04,4.3,9.09,9.39,9.09,5.2,0,9.41-4.21,9.41-9.41,0-5.09-4.05-9.23-9.1-9.39h.01c-8.5-.3-15.33-7.12-15.61-15.62h-.01C43.35,4.05,39.21,0,34.11,0s-9.41,4.21-9.41,9.41c0,5.09,4.05,9.23,9.11,9.4Z"/>
            <path fill="url(#floating-gradient-mobile)" d="M34.42,49.42h0c-8.5-.3-15.33-7.12-15.61-15.62h-.01c-.16-5.04-4.3-9.09-9.4-9.1C4.21,24.7,0,28.92,0,34.11c0,5.09,4.05,9.23,9.1,9.39h0c8.5.3,15.33,7.12,15.61,15.62h0c.16,5.04,4.3,9.1,9.4,9.1,5.2,0,9.41-4.21,9.41-9.41,0-5.09-4.05-9.23-9.1-9.4Z"/>
            <path fill="url(#floating-gradient-mobile)" d="M9.41,49.4C4.21,49.4,0,53.62,0,58.81c0,5.2,4.21,9.41,9.41,9.41s9.41-4.21,9.41-9.41c0-5.2-4.21-9.41-9.41-9.41Z"/>
          </g>
        </svg>
      </div>
    </>
  );
};

export default FloatingLogo;