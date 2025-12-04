// components/AOSLayout.js
'use client'; 
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function AOSLayout({ children }) {
  useEffect(() => {
    // Initialize AOS once when the component mounts
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return <>{children}</>;
}