import React from "react";
import img_1 from '../../../assets/book/aboutBook_popupImg_1.1.jpg'
import BtnClose from "../../Buttons/BtnClose";

const AboutBookPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Ako popup nije otvoren, ne renderujemo ga

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <BtnClose className="close-btn" onClick={onClose} />
        <div className="popup-content">
            <div className="img-content">
                <img src={img_1} alt="" />
            </div>
            <div className="text-content">
                <h2>More About the Book</h2>
                <p>
                *Unmazing Life* is more than just a book—it’s a guide to breaking free from the 
                expectations that society, family, and even ourselves impose on us. It challenges 
                the traditional definitions of success, happiness, and fulfillment, urging readers 
                to create their own path.
                </p>
                <p>
                Throughout the book, J.P. Taylor shares insights on how we get trapped in the **cycle 
                of chasing instead of choosing**. Too often, people follow a pre-determined path, 
                believing that happiness lies in achievements, financial success, or societal validation. 
                But what happens when you reach those milestones and still feel unfulfilled? This book 
                provides the mindset shifts needed to reclaim your life.
                </p>
                <p>
                Drawing from personal experiences, research, and practical exercises, *Unmazing Life* 
                helps readers navigate **self-doubt, fear, and limiting beliefs**. It emphasizes the 
                importance of self-awareness, resilience, and making conscious decisions that align 
                with your values.
                </p>
                <p>
                One of the core themes is understanding the difference between **temporary happiness 
                and lasting joy**. While external achievements can bring fleeting moments of pleasure, 
                true fulfillment comes from living authentically and staying aligned with your deepest 
                aspirations. The book provides **real-life examples, thought-provoking questions, and 
                actionable steps** to help readers bridge that gap.
                </p>
                <p>
                Whether you are at a crossroads in life, looking for deeper meaning, or simply 
                questioning the conventional paths laid before you, *Unmazing Life* will serve as a 
                **compass for self-discovery**. It’s not about following someone else’s success formula—it’s 
                about defining your own.
                </p>
            </div>

        </div>

      </div>
    </div>
  );
};

export default AboutBookPopup;