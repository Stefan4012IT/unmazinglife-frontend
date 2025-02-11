import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header/Header'
import BtnPrime from '../components/Buttons/BtnPrime';
import img_1 from '../assets/content_img_1of4.jpg';
import img_2 from '../assets/content_img_2of4.jpg';
import img_3 from '../assets/content_img_3of4.jpg';
import img_4 from '../assets/content_img_4of4.jpg';

import img_phone from '../assets/iPhone_img_1.png'
import icon_calendar from '../assets/icons/icon_calendar.svg';
import icon_meditation from '../assets/icons/icon_meditation.svg';
import icon_journals from '../assets/icons/icon_notes.svg';
import icon_music from '../assets/icons/icon_music.svg';

import icon_bottle from '../assets/icons/icon_bottle.svg';
import icon_jar from '../assets/icons/icon_jar.svg';
import icon_treasure from '../assets/icons/icon_treasure.svg';

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
        <div className="section-2">
          <div className="container">
            <div className='headline wrapper' data-aos="zoom-in">
                <h2>Features that makes app different!</h2>
                <p>GLAVNI FEATURES of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
            </div>
            <div className='rich-content-box'>
                <div className='left-side'>
                    <div className='first-box' data-aos="fade-right">
                        <img src={icon_calendar} alt='icon_1' className='icon_pac-1' />
                        <h3 className='title'>Daily Routines</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                    </div>
                    <div className='second-box' data-aos="fade-right">
                        <img src={icon_meditation} alt='icon_2' className='icon_pac-1' />
                        <h3 className='title'>Meditation</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                    </div>

                </div>
                <div className='central-box-img '><img className='' src={img_phone} alt='img_phone' data-aos="zoom-in" /></div>
                <div className='right-side'>
                    <div className='third-box' data-aos="fade-left">
                        <img src={icon_journals} alt='icon_3' className='icon_pac-1' />
                        <h3 className='title'>Journals</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                    </div>
                    <div className='fourth-box' data-aos="fade-left">
                        <img src={icon_music} alt='icon_4' className='icon_pac-1' />
                        <h3 className='title'>Music</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                    </div>
                </div>

            </div>
            <div className='headline-1' data-aos="zoom-in">
                <h2>Features unseen until now!</h2>
                <p>Ovde je jasno sta treba da pises of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
            </div>
            <div className='ultimate-box wrapper'>
              <div className='' data-aos="flip-left">
                  <img src={icon_bottle} alt='icon_5' className='icon_pac-2' />
                  <h3 className='small-title'>Message in the Bottle</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
              </div>

              <div className='' data-aos="flip-up">
                  <img src={icon_jar} alt='icon_6' className='icon_pac-2' />
                  <h3 className='small-title'>Message in the Bottle</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
              </div>

              <div className='' data-aos="flip-right">
                  <img src={icon_treasure} alt='icon_7' className='icon_pac-2' />
                  <h3 className='small-title'>Message in the Bottle</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
              </div>
            </div>
          </div>
        </div>
    </>
    

  )
}

export default Home