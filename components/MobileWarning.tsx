"use client";

import React, { useState, useEffect } from 'react';

const MobileWarning = () => {
  const [windowWidth, setWindowWidth] = useState(1920);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      setWindowWidth(window.innerWidth);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  if (windowWidth < 768) {
    return (
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#c2e4ff] text-black font-bold flex flex-col items-center justify-center text-center text-2xl">
        Ce site web est destiné aux appareils de bureau et ne peut pas être affiché correctement sur un écran de téléphone.
      </div>
    );
  }

  return null;
};

export default MobileWarning;
