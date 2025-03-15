import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import profilePic_1 from '../../assets/slides/profilePic-1.jpg';
import profilePic_2 from '../../assets/slides/profilePic-2.jpg';
import profilePic_3 from '../../assets/slides/profilePic-3.jpg';
import profilePic_4 from '../../assets/slides/profilePic-4.jpg';
import slide_1 from '../../assets/slides/choosing-over-chasing.jpg';
import slide_2 from '../../assets/slides/happiness-vs-joy.jpg';
import slide_3 from '../../assets/slides/embracing-change.jpg';
import slide_4 from '../../assets/slides/living-authentically.jpg';


const slides = [
    {
      image: profilePic_1,
      mainQuote: "“This book completely changed how I see success.”",
      description: "I used to think that happiness was something to chase, but *Unmazing Life* showed me that real fulfillment comes from making conscious choices. Every page felt like a revelation.",
    },
    {
      image: profilePic_2,
      mainQuote: "“I finally understand the difference between happiness and joy.”",
      description: "Reading this book helped me realize why fleeting happiness never lasted. Now, I focus on creating deep, lasting joy in my daily life. A truly eye-opening read!",
    },
    {
      image: profilePic_3,
      mainQuote: "“It gave me the courage to embrace change.”",
      description: "Fear held me back for years, but *Unmazing Life* made me see that change isn’t something to be afraid of—it’s something to step into with confidence. This book felt like a personal guide through transformation.",
    },
    {
      image: profilePic_4,
      mainQuote: "“I feel free to live life on my own terms now.”",
      description: "For so long, I followed what I thought I 'should' be doing. *Unmazing Life* helped me break away from that mindset and start living authentically. It’s a must-read for anyone who feels stuck!",
    },
  ];

const TestimonialSlider = () => {
  return (
    <>
        <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={"auto"}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={75}
            pagination={{
            clickable: true,
            }}
            className="mySwiper"
            >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                <div className="testimonial-profile-picture">
                    <img src={slide.image} alt={slide.title} className="slide-profile" />
                </div>
                <div className="slide-content">
                    <img src={slide.image} alt={slide.title} className="slide-image" />
                    <h4>{slide.mainQuote}</h4>
                    <p>{slide.description}</p>
                    <div className="slider-overlay"></div>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>

        
    </>
 
  );
};

export default TestimonialSlider;