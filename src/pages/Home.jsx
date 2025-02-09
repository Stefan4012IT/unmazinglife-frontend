import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header/Header'
import BtnPrime from '../components/Buttons/BtnPrime';
import img_1 from '../assets/content_img_1of4.jpg';
import img_2 from '../assets/content_img_2of4.jpg';
import img_3 from '../assets/content_img_3of4.jpg';
import img_4 from '../assets/content_img_4of4.jpg';

const Home = () => {

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
        <div className="hero-section">
            <div className="container">
                <div className="main-box wrapper">
                <div className='main-box--content' data-aos="fade-right">
                    <h1>Main slogan goes here lorem ipsum</h1>
                    <p>Pellentesque mi sed amet ac arcu venenatis dignissim magnis. Est eget massa id urna arcu ac. Eget porttitor feugiat mauris tempus eget velit congue. Et eu diam fringilla a vitae.</p>
                </div>
                <BtnPrime text="Join Today"/>
                </div>
            </div>
        </div>
        <div className='section-1'>
          <div className="container">
            <div className="main-box wrapper">
              <div className="text-box">
                <div className='text-box--content' data-aos="fade-down">
                  <div className="heading">
                    <span className='subtitle'>About App</span>
                    <h2>Segment stranice sa generalnim opisom <span className='mask'>Unmaze</span> aplikacije</h2>
                  </div>
                  <p>Pellentesque mi sed amet ac arcu venenatis dignissim magnis. Est eget massa id urna arcu ac. Eget porttitor feugiat mauris tempus eget velit congue. Et eu diam fringilla a vitae. Pellentesque mi sed amet ac arcu venenatis dignissim magnis. Est eget massa id urna arcu ac. Eget porttitor feugiat mauris tempus eget velit congue. Et eu diam fringilla a vitae.Pellentesque mi sed amet ac arcu venenatis dignissim magnis.</p>
                </div>
                <BtnPrime text="Learn More"/>
              </div>
              
              
              <div className='img-box-container' data-aos="zoom-in">
                <div className="img-group-1">
                  <img className='logoHeader img_1' src={img_1} alt='img_1' />
                </div>

                <div className="img-group-2">
                  <img className='logoHeader img_3' src={img_3} alt='img_3' />
                  <img className='logoHeader img_2' src={img_2} alt='img_2' />

                  <img className='logoHeader img_4' src={img_4} alt='img_4' />
                </div>

              </div>
            </div>
            
          </div>


        </div>
    </>
    

  )
}

export default Home