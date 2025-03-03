import React, { useEffect, useRef, useState } from 'react';
import logoHeader from '../../assets/LogoUnmaze.svg';
import { Link as ScrollLink } from 'react-scroll';
import BtnPrime from '../Buttons/BtnPrime';

const DesktopHeader = () => {
  const headerRef = useRef(null);



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
        <div className='nav-links'>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>About</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>Features</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>F&Q</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>Blog</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>Contact</ScrollLink>
          <BtnPrime text="Sign Up"/>
          <BtnPrime text="Log In"/>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
