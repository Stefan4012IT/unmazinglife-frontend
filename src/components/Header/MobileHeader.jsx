import React, { useEffect, useState, useRef } from 'react';
import logoHeader from '../../assets/LogoUnmaze.svg';
import BurgerButton from '../Buttons/BurgerButton';

const MobileHeader = () => {

  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);


  const changeStatus = () => {
    setIsOpen(!isOpen);
    setClicked(true);
  }

  useEffect(() => {
    if (headerRef.current) {
      const visina = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--visina-headera', `${visina}px`);
    }
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();

    // Glatki skrol na vrh stranice
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  };


  return (
    <nav className='mobile-nav container' id='home' ref={headerRef}>
        <div className="logo-box">
            <img className='logoHeader' src={logoHeader} alt='logo unmaze' onClick={scrollToTop} />
        </div>

        <div className="btnBurger-regular" onClick={() => changeStatus()}>
          <BurgerButton isOpen={isOpen} clicked={clicked} />
        </div>


    </nav>
  );
};

export default MobileHeader;