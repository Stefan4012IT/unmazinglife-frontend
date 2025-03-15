import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

import slide_1 from '../../assets/slides/choosing-over-chasing.jpg';
import slide_2 from '../../assets/slides/happiness-vs-joy.jpg';
import slide_3 from '../../assets/slides/embracing-change.jpg';
import slide_4 from '../../assets/slides/living-authentically.jpg';
import background_1 from '../../assets/book/parallaxSliderCover.jpg'

const slides = [
  {
    image:  slide_1,
    title: "The Power of Choosing Over Chasing",
    description: "Stop running toward an elusive idea of happiness and start making intentional choices that align with your true desires.",
  },
  {
    image:  slide_2,
    title: "Happiness vs. Joy",
    description: "Understand the key difference between temporary happiness and lasting joy, and learn how to cultivate both in your daily life.",
  },
  {
    image:  slide_3,
    title: "Embracing Change with Courage",
    description: "Fear is often the greatest barrier to transformation. Discover strategies to overcome hesitation and step boldly into the unknown.",
  },
  {
    image:  slide_4,
    title: "Living Authentically",
    description: "Break free from societal expectations and create a life that genuinely reflects your values, passions, and inner truth.",
  },
];

const ParallaxSlider = () => {
  return (
            <Swiper
                speed={600}
                parallax={true}
                loop={true}
                grabCursor={true}
                modules={[Autoplay, Parallax]}
                className="mySwiper"
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
            >
              <div
              slot="container-start"
              className="parallax-bg"
              style={{
                backgroundImage: `url(${background_1})`, // Correct way to use dynamic image
                backgroundSize: "cover",
              }}
              data-swiper-parallax="-23%"
            ></div>
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="content">
                  <h3 className="title" data-swiper-parallax="-300">
                    {slide.title}
                  </h3>
                  {/* <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                  </div> */}
                  <div className="text" data-swiper-parallax="-100">
                    <p>
                      {slide.description}
                    </p>
                  </div>
                  <div className="overlay"></div>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
  );
};

export default ParallaxSlider;
