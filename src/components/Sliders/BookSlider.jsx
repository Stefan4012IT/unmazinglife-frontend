import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import slide_1 from '../../assets/slides/choosing-over-chasing.jpg';
import slide_2 from '../../assets/slides/happiness-vs-joy.jpg';
import slide_3 from '../../assets/slides/embracing-change.jpg';
import slide_4 from '../../assets/slides/living-authentically.jpg';

const slides = [
  {
    image: slide_1,
    title: "The Power of Choosing Over Chasing",
    description: "Stop running toward an elusive idea of happiness and start making intentional choices that align with your true desires.",
  },
  {
    image: slide_2,
    title: "Happiness vs. Joy",
    description: "Understand the key difference between temporary happiness and lasting joy, and learn how to cultivate both in your daily life.",
  },
  {
    image: slide_3,
    title: "Embracing Change with Courage",
    description: "Fear is often the greatest barrier to transformation. Discover strategies to overcome hesitation and step boldly into the unknown.",
  },
  {
    image: slide_4,
    title: "Living Authentically",
    description: "Break free from societal expectations and create a life that genuinely reflects your values, passions, and inner truth.",
  },
];

const BookSlider = () => {
  return (
    <>
        <Swiper
            modules={[Autoplay, Navigation]}
            // navigation={{
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            // }}
            spaceBetween={50}
            slidesPerView={"auto"}
            loop={true}
            grabCursor={true}
            breakpoints={{
              992: {
                slidesPerView: 1, // Ako ovde nije 1, menja širinu slajda
                spaceBetween: 50,  // Ovo dodaje margin-right: 50px
                
              },
              0:{slidesPerView: 1, spaceBetween: 0,lazy: {loadPrevNext: true, loadPrevNextAmount: 1}, allowTouchMove: true,}
            }}  
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
            >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                <div className="slide-content">
                    <img src={slide.image} alt={slide.title} className="slide-image" />
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                    <div className="slider-overlay"></div>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>

        
    </>
 
  );
};

export default BookSlider;