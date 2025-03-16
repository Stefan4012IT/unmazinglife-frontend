import React, { useEffect, useRef, useState } from 'react';
import logoHeader from '../../assets/LogoUnmaze.svg';
import { Link as ScrollLink } from 'react-scroll';
import BtnPrime from '../Buttons/BtnPrime';
import { useLocation } from "react-router-dom";
import NavLinks from './NavLinks';

const DesktopHeader = () => {
  const headerRef = useRef(null);
  const location = useLocation();
  const isBookLanding = location.pathname.includes("book-landing");

  useEffect(() => {
    if (headerRef.current) {
      const visina = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--visina-headera', `${visina}px`);
    }
  }, []);



  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`desktop-nav container`}
      id='home'
      ref={headerRef}
    >
      <div className="wrapper desktop-nav--content">
        <div className="logo-box">
          <img className='logoHeader' src={logoHeader} alt='logo unmaze' onClick={scrollToTop} />
        </div>
        <NavLinks />
      </div>
    </div>
  );
};

export default DesktopHeader;
