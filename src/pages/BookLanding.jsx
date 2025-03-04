import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header/Header'
import BtnPrime from '../components/Buttons/BtnPrime';
import BookSlider from '../components/Sliders/BookSlider';
import img_1 from '../assets/book/book_sektion_1.png';

const BookLanding = () => {

    useEffect(() => {
        AOS.init({
            // ovde možete dodati globalna podešavanja za AOS
            easing: 'linear',
            duration: 1500, // trajanje animacije
        });
        }, []);
  return (
    <>
        <Header />
        {/* HERO-SECTION --- pocetak */}
        <div className="book-hero-section">
            <div className="opacity"></div>
            <div className="container">
                <div className="book-main-box wrapper">
                <div className='book-main-box--content' data-aos="fade-right">
                    <div className="heading">
                        <div className="subtitle">Unleash Your Potential, Redefine Your Path</div>
                        <h1>A transformative journey to personal growth and self-discovery by J.P. Taylor.</h1>
                    </div>
                    <p>Pellentesque mi sed amet ac arcu venenatis dignissim magnis. Est eget massa id urna arcu ac. Eget porttitor feugiat mauris tempus eget velit congue. Et eu diam fringilla a vitae.</p>
                </div>
                <BtnPrime text="Get Your Copy Now"/>
                </div>
            </div>
        </div>
        {/* HERO-SECTION --- kraj */}

        {/* SECTION-1 --- pocetak */}
        <div className='book-section-1'>
          <div className="container">
            <div className="main-box wrapper">
              <div className="text-box">
                <div className='text-box--content' data-aos="fade-down">
                  <div className="heading">
                    <span className='subtitle'>About the Book</span>
                    <h2>What is <span className='mask'>Unmazing Life</span>?</h2>
                  </div>
                    <p>Unmazing Life is more than just a book—it’s an invitation to step beyond the ordinary and embrace the extraordinary within yourself. Written by J.P. Taylor, this transformational guide challenges conventional ideas of success, happiness, and personal growth. It offers a roadmap for breaking free from limiting beliefs, taking control of your journey, and creating a life filled with purpose, resilience, and authentic joy.</p>

                    <p>Through a combination of personal insights, psychological research, and practical exercises, Unmazing Life empowers you to redefine your path, make conscious choices, and awaken the limitless potential that already exists within you. Whether you're feeling stuck in routines that no longer serve you or searching for deeper fulfillment, this book provides the tools and mindset shifts to navigate life with confidence and intention.</p>
                </div>
                <BtnPrime text="Learn More"/>
              </div>
              
              
              <div className='img-box-container' data-aos="zoom-in">
                  <img className='img-box-container--img img_1' src={img_1} alt='img_1' />
              </div>
            </div>
          </div>
        </div>
        {/* SECTION-1 --- kraj */}

        {/* SECTION-2 --- pocetak */}
        <div className="book-section-2">
            <div className="container">
                <div className="wrapper">
                    <div className="slider">
                        <BookSlider />
                    </div>
                </div>
            </div>
        </div>
        {/* SECTION-2 --- kraj */}

        {/* SECTION-3 --- pocetak */}
        <div className="book-section-3">
          <div className="container">
            <div className="wrapper">
              
            </div>
          </div>
        </div>
        {/* SECTION-3 --- kraj */}
    </>
    
  )
}

export default BookLanding