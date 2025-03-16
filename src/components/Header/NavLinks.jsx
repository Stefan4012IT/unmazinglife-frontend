import React from "react";
import { Link as ScrollLink } from "react-scroll";
import BtnPrime from "../Buttons/BtnPrime";
import { useLocation } from "react-router-dom"; // For checking the current route

const NavLinks = () => {
  const location = useLocation(); // Get current path

  const isBookLanding = location.pathname.includes("book-landing"); // Adjust based on your route

  return (
    <div className="nav-links">
      {isBookLanding ? (
        <>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
            About
          </ScrollLink>
          <ScrollLink to="author" smooth={true} duration={500} offset={-70}>
            Author
          </ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={500} offset={-70}>
            Testimonials
          </ScrollLink>
          <ScrollLink to="buy-options" smooth={true} duration={500} offset={-70}>
            Get the Book
          </ScrollLink>
            <BtnPrime text="Buy Now" />
          
        </>
      ) : (
        <>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
            About
          </ScrollLink>
          <ScrollLink to="features" smooth={true} duration={500} offset={-70}>
            Features
          </ScrollLink>
          <ScrollLink to="faq" smooth={true} duration={500} offset={-70}>
            F&Q
          </ScrollLink>
          <ScrollLink to="blog" smooth={true} duration={500} offset={-70}>
            Blog
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            Contact
          </ScrollLink>
          <BtnPrime text="Sign Up" />
          <BtnPrime text="Log In" />
        </>
      )}
    </div>
  );
};

export default NavLinks;
