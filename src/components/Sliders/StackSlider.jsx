import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

import slide_1 from '../../assets/slides/choosing-over-chasing.jpg';
import slide_2 from '../../assets/slides/happiness-vs-joy.jpg';
import slide_3 from '../../assets/slides/embracing-change.jpg';
import slide_4 from '../../assets/slides/living-authentically.jpg';

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

const StackSlider = () => {
  return (
              <Swiper
                direction={'vertical'}
                effect="creative"
                grabCursor={true}
                loop={true}
                modules={[EffectCreative]}
                slidesPerView={1.2} // Slightly overlapping slides
                spaceBetween={0} // No space between slides
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, "-100%", -300], // Moves up
                    scale: 0.9, // Makes previous slide slightly smaller
                  },
                  next: {
                    translate: [0, "100%", -300], // Moves down
                    scale: 1.1, // Makes next slide slightly larger
                  },
                }}
              >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <img src={slide.image} alt={slide.title} className="slide-image" />
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
  );
};

export default StackSlider;
