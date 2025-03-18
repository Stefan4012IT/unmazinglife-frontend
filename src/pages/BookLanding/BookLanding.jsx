import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/Header/Header'
import BtnPrime from '../../components/Buttons/BtnPrime';
import BookSlider from '../../components/Sliders/BookSlider';
import img_1 from '../../assets/book/book_sektion_1.png';
import img_2 from '../../assets/book/aboutAutor_book.jpg';
import img_3 from '../../assets/book/testimonials.jpg';
import ParallaxSlider from '../../components/Sliders/ParallaxSlider';
import AboutBookPopup from '../../components/Popups/BookLanding/AboutBookPopup';
import TestimonialSlider from '../../components/Sliders/TestimonialSlider';
import Footer from '../../components/Footer/Footer';

const BookLanding = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            // ovde možete dodati globalna podešavanja za AOS
            easing: 'linear',
            duration: 1500, // trajanje animacije
        });
        }, []);
  return (
    <>
        <AboutBookPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        <Header />
        {/* HERO-SECTION --- pocetak */}
        <div className="book-hero-section">
        
            <div className="opacity"></div>
            <div className="container">
                <div className="book-main-box wrapper">
                <div className='book-main-box--content' data-aos="fade-down">
                    <div className="heading">
                        <div className="subtitle">Unleash Your Potential, Redefine Your Path</div>
                        <h1>A transformative journey to personal growth and self-discovery by J.P. Taylor.</h1>
                    </div>
                    <p>Pellentesque mi sed amet ac arcu venenatis dignissim magnis. Est eget massa id urna arcu ac. Eget porttitor feugiat mauris tempus eget velit congue. Et eu diam fringilla a vitae.</p>
                </div>
                <BtnPrime text="Get Your Copy Now" />
                </div>
            </div>
        </div>
        {/* HERO-SECTION --- kraj */}

        {/* SECTION-1 --- pocetak */}
        <div id='about' className='book-section-1'>
          <div className="container">
            <div className="main-box wrapper">
              <div className="text-box">
                <div className='text-box--content' data-aos="fade-right">
                  <div className="heading">
                    <span className='subtitle'>About the Book</span>
                    <h2>What is <span className='mask'>Unmazing Life</span>?</h2>
                  </div>
                    <p>Unmazing Life is more than just a book—it’s an invitation to step beyond the ordinary and embrace the extraordinary within yourself. Written by J.P. Taylor, this transformational guide challenges conventional ideas of success, happiness, and personal growth. It offers a roadmap for breaking free from limiting beliefs, taking control of your journey, and creating a life filled with purpose, resilience, and authentic joy.</p>

                    <p>Through a combination of personal insights, psychological research, and practical exercises, Unmazing Life empowers you to redefine your path, make conscious choices, and awaken the limitless potential that already exists within you. Whether you're feeling stuck in routines that no longer serve you or searching for deeper fulfillment, this book provides the tools and mindset shifts to navigate life with confidence and intention.</p>
                </div>
                <BtnPrime text="Learn More" onClick={() => setIsPopupOpen(true)}/>
                
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
          <div className="slider no-select">
              <BookSlider />
          </div>
        </div>
        {/* SECTION-2 --- kraj */}

        {/* SECTION-3 --- pocetak */}
        <div id='author' className="book-section-3">
          <div className="container">
            <div className="book-section-3--content-box wrapper">
                <div className='img_box' data-aos="zoom-in">
                  <img className='' src={img_2} alt='img_phone' />
                </div>

                <div className='text-content-box' data-aos="fade-left">
                  <div className="heading">
                    <span className='subtitle'>About the Author</span>
                    <h2>Meet J.P. Taylor</h2>
                  </div>
                  <div className="text">
                    <p>J.P. Taylor is a passionate advocate for self-discovery, resilience, and authentic living. With a background in personal transformation and life coaching, she has dedicated her career to helping individuals break free from limiting beliefs and step into their full potential. Through years of research, mentorship, and real-life experiences, J.P. has developed a unique approach to navigating life’s complexities—one that blends mindset shifts, emotional intelligence, and actionable strategies for lasting fulfillment.</p>
                    <p>Her journey into self-growth began with a personal awakening—a realization that life should not be dictated by societal norms but by deeply rooted values and individual purpose. Through her writing, coaching, and speaking engagements, she empowers others to redefine success on their terms, embrace change with confidence, and cultivate a life filled with joy, meaning, and self-ownership.</p>
                    <p>As the author of Unmazing Life, J.P. Taylor offers a fresh perspective on breaking free from the traditional chase for happiness and instead choosing a path that aligns with authenticity and true fulfillment.</p>
                  </div>

                </div>
            </div>
          </div>
        </div>
        {/* SECTION-3 --- kraj */}

        {/* SECTION-4 --- pocetak */}
        <div id='content' className="book-section-4">
          <div className="container">
            <div className="content-box wrapper">
              <div className='text-content-box' data-aos="fade-right">
                      <div className="heading">
                        <span className='subtitle'>Content</span>
                        <h2>What You’ll Gain from <span className='mask'>Unmazing Life</span></h2>
                      </div>
                      <div className="text">
                      <p>Life isn’t about running towards an elusive finish line—it’s about making conscious choices that align with who you truly are. Unmazing Life challenges the traditional idea of success and happiness, offering a new way of thinking that prioritizes fulfillment, authenticity, and self-discovery.</p>

                      
                      
                      
                      </div>
                      <div className="list-items">
                          <p>In this book, you’ll explore powerful mindset shifts that will help you:</p>
                          <div className="like-list">
                            <p>🔹 Stop chasing happiness and start choosing a life that fulfills you.</p>
                            <p>🔹 Distinguish between fleeting happiness and lasting joy—and learn how to cultivate both.</p>
                            <p>🔹 Build resilience and develop an inner compass that guides you through challenges.</p>
                            <p>🔹 Let go of societal pressures and start living on your own terms.</p>
                            <p>🔹 Create daily habits that transform the way you experience life.</p>
                          </div>
                          
                        
                        <p>💡 Each slide to the right represents a key transformation that Unmazing Life will guide you through. Swipe through and see what resonates with you.</p>
                      </div>
                      
                      

              </div>
              <div className="slider no-select" data-aos="zoom-in">
                <ParallaxSlider />
              </div>
            </div>
            
          </div>
        </div>
        {/* SECTION-4 --- kraj */}
        {/* CTA --- pocetak */}
        <div id='buy-options' className="book-section-cta">
          <div className="container">
            <div className="wrapper">
              <div className="cta-container">
                <div className="heading">
                  <h2>Enjoy the Journey, Embrace the Change</h2>
                  <p>Your transformation starts with a single step. Dive into Unmazing Life and unlock the mindset shifts that will redefine your path. Are you ready?</p>
                </div>
                <BtnPrime text="Buy Now" />
              </div>
            </div>
          </div>
        </div>
        {/* CTA --- kraj */}

        {/* SECTION-5 --- pocetak */}
        <div id='testimonials' className="book-section-5">
          <div className="container">
            <div className="testimonials wrapper" >
              <div className="testimonials--img-box" data-aos="zoom-in">
                  <img src={img_3} alt="" className="" />
              </div>
              <div className="testimonials--content" data-aos="fade-left">
                <div className="heading">
                  <span className='subtitle'>Testimonials</span>
                  <h2>What Readers Are Saying</h2>
                </div>
                  <p><span className="mask">Unmazing Life</span> is more than just a book—it’s a catalyst for change. Through its powerful insights and practical wisdom, readers have discovered a new way of thinking about happiness, success, and fulfillment. No longer trapped by outdated beliefs or societal expectations, they’ve embraced the courage to redefine their lives on their own terms.<br/><br/>
                  From shifting their mindset about achievement to overcoming deep-rooted fears and self-doubt, each person who has applied these lessons has experienced profound transformation. They’ve learned to cultivate joy instead of chasing it, to align their daily actions with their true values, and to step into the future with confidence.<br/><br/>
                  Read what others are saying about how <span className="mask">Unmazing Life</span> has empowered them to break free, embrace change, and create a life that feels truly their own.</p>
                </div>
                
              </div>
              
          </div>
          <div className="slider no-select">
              <TestimonialSlider />
          </div>
        </div>
        {/* SECTION-5 --- kraj */}

        {/* FOOTER --- pocetak */}
        <Footer />
    </>
    
  )
}

export default BookLanding