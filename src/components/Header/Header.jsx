// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  // Inicijalno stanje proverava trenutnu širinu prozora
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--visina-headera'), 10) || 100;

      if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
        // Skroluje na dole i prošao visinu headera -> sakrij header
        setIsVisible(false);
      } else if (currentScrollY > lastScrollY - 10 || currentScrollY > headerHeight) {
        // Skroluje na gore i prošao visinu headera -> prikaži header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navigation ${isVisible ? 'visible' : 'hidden'}`} id='home' ref={headerRef}>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
    </nav>
  );
};

export default Header;
