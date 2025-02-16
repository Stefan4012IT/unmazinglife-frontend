import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header/Header'
import BtnPrime from '../components/Buttons/BtnPrime';
import img_1 from '../assets/content_img_1of4.jpg';
import img_2 from '../assets/content_img_2of4.jpg';
import img_3 from '../assets/content_img_3of4.jpg';
import img_4 from '../assets/content_img_4of4.jpg';

import img_phone_1 from '../assets/iPhone_img_1.png'
import icon_calendar from '../assets/icons/icon_calendar.svg';
import icon_meditation from '../assets/icons/icon_meditation.svg';
import icon_journals from '../assets/icons/icon_notes.svg';
import icon_music from '../assets/icons/icon_music.svg';

import icon_bottle from '../assets/icons/icon_bottle.svg';
import icon_jar from '../assets/icons/icon_jar.svg';
import icon_treasure from '../assets/icons/icon_treasure.svg';

import img_phone_2 from '../assets/iPhone_img_2.png'

import icon_download from '../assets/icons/icon_download.svg';
import icon_profile from '../assets/icons/icon_profile.svg';
import icon_like from '../assets/icons/icon_like.svg';

import icon_btn_video from '../assets/icons/icon_btn_play.svg';
import Accordion from '../components/Accordion/Accordion';
import RecentPosts from '../components/posts/RecentPosts';
import ContactForm from '../components/Forms/ContactForm';

const data = [
  {
    title: 'Why do I need Unmaze App?',
    content: 'Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.',
    isOpen: true,
  },
  {
    title: 'Lorem ipsum dollor set?',
    content: 'Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.',
    isOpen: false,
  },
  {
    title: 'Lorem ipsum dollor set?',
    content: 'Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.',
    isOpen: false,
  },
  {
    title: 'Lorem ipsum dollor set?',
    content: 'Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy. Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.',
    isOpen: false,
  },

];

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
        {/* HERO-SECTION --- pocetak */}
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
        {/* HERO-SECTION --- kraj */}

        {/* SECTION-1 --- pocetak */}
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
        {/* SECTION-1 --- kraj */}

        {/* SECTION-2 --- pocetak */}
        <div className="section-2 container">
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
                <div className='central-box-img '><img className='' src={img_phone_1} alt='img_phone' data-aos="zoom-in" /></div>
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
        {/* SECTION-2 --- kraj */}

        {/* SECTION-3 --- pocetak */}
        <div className='section-3'>
          <div className="container">
            <div className='section-3--content-box wrapper'>

              <div className='img_box' data-aos="zoom-in">
                <img className='' src={img_phone_2} alt='img_phone' />
              </div>

              <div className='text-content-box' data-aos="fade-left">
                <h2>Challenge tortor quam ante purus auctor opelle mi sed amet ac arcu.</h2>
                <p>Pellentesque mi sed amet ac arcu venenatis dignissim magnis. Est eget massa id urna arcu ac. Eget porttitor feugiat mauris tempus eget velit congue. Et eu diam fringilla a vitae. Pellentesque mi sed amet ac arcu venenatis dignissim magnis.

                  Est eget massa id urna arcu ac. Eget porttitor feugiat mauris tempus eget velit congue. Et eu diam fringilla a vitae.Pellentesque mi sed amet ac arcu venenatis dignissim magnis.</p>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION-3 --- kraj */}

        {/* SECTION-4 --- pocetak */}
        <div className='section-4'>
            <div className='container'>
              <div className="wrapper">
                <div className='headline' data-aos="zoom-in">
                    <h2>How it works - 3 easy steps</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                </div>
                  <div className='icon-set' data-aos="zoom-in">
                    <div className='first-box'>
                        <img src={icon_download} alt='icon_1' className='icon_pac-3' />
                        <h3 className='title'>Download app</h3>
                        <p>Download App either for Windows, Mac or Android.</p>
                    </div>

                    <div className='second-box'>
                        <img src={icon_profile} alt='icon_1' className='icon_pac-3' />
                        <h3 className='title'>Create account</h3>
                        <p>Sign up free for App account. One account for all devices.</p>
                    </div>

                    <div className='third-box'>
                        <img src={icon_like} alt='icon_1' className='icon_pac-3' />
                        <h3 className='title'>It’s done, enjoy the app</h3>
                        <p>Have any questions check our FAQs Explore and share the app.</p>
                    </div>
                  </div>
              </div>
            </div>

        </div>
        {/* SECTION-4 --- kraj */}

        {/* SECTION-5 --- pocetak */}
        <div className="section-5">
          <div className="container">
            <div className="wrapper">
              <div className='video-box' data-aos="fade-up">
              <img className='video_btn' src={icon_btn_video} alt='icon_btn_video' />
              <p>Let’s see a promo video</p>
              <span className='subtitle'>Watch video</span>
            </div>
            </div>
          </div>
        </div>
        {/* SECTION-5 --- kraj */}

        {/* SECTION-6 --- pocetak */}     
        <div className="section-6">
          <div className="container">
            <div className="wrapper">
              <div className='headline' data-aos="fade-down">
                <h2>FAQ - Frequently Asked Questions</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
              </div>

              <div className='accordion-box'>
                <Accordion data={data} />
              </div>

              <p className='quest' data-aos="fade-up" >Still have questions? <a href="#">Contact us.</a></p>
            </div>
          </div>
        </div>
        {/* SECTION-6 --- kraj */}

        {/* SECTION-7 --- pocetak */}
        <div className="section-7">
          <div className="container">
            <div className="wrapper">
              <div className='headline' data-aos="zoom-in">
                  <h2>Blog</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="recent-posts-container">
              <RecentPosts />
            </div>
          </div>
        </div>
        {/* SECTION-7 --- kraj */}

        {/* SECTION-8 --- pocetak */}
        <div className="section-8">
          <div className="container">
            <div className="wrapper">
              <div className='headline' data-aos="zoom-in">
                  <h2>Contact Us</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
              </div>
              <div className="contact-form" data-aos="fade-up">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        {/* SECTION-8 --- kraj */}
    </>
    

  )
}

export default Home