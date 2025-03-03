import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon_minus from '../../assets/icons/icon_minus.svg'
import icon_plus from '../../assets/icons/icon_plus.svg'

const AccordionItem = ({ title, children, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      // ovde možete dodati globalna podešavanja za AOS
      easing: 'linear',
      duration: 1500, // trajanje animacije
    });
  }, []);

  return (
    <div className="accordion-item" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} >
      <div className="accordion-title" onClick={toggleAccordion}>
        <span className='subtitle'>{title}</span>
        <img src={isOpen ? icon_minus : icon_plus} alt="toggle" />
      </div>
      {isOpen && <div className="accordion-content"><p>{children}</p></div>}
    </div>
  );
};

export default AccordionItem;