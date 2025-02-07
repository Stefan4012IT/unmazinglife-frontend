import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header/Header'
import BtnPrime from '../components/Buttons/BtnPrime';

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
    </>
    

  )
}

export default Home