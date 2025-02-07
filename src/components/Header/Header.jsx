// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  // Inicijalno stanje proverava trenutnu širinu prozora
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  const headerRef = useRef(null);

  useEffect(() => {
    // Funkcija koja ažurira stanje prilikom promene veličine prozora
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
    };

    if (headerRef.current) {
        const visina = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--visina-headera', `${visina}px`);
      }

    // Dodajemo event listener za resize
    window.addEventListener('resize', handleResize);

    // Cleanup: uklanjamo listener kada se komponenta demontira
    return () => {
      window.removeEventListener('resize', handleResize);
    };

    
  }, []);

  return (
    <nav className='navigation' id='home' ref={headerRef}>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
    </nav>
  );
};

export default Header;
