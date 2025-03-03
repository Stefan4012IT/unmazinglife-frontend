import React, { useState } from 'react';
import 'aos/dist/aos.css';
import BtnPrime from '../Buttons/BtnPrime';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isChecked, setIsChecked] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isChecked) {
            console.log(formData);
            setFormSubmitted(true);
        }
    }

    return (
            <form className='form' onSubmit={handleSubmit}>
                <div className='form--headline'>
                    <h3>Leave a message</h3>
                    <p>We will get back to you as soon as possible</p>
                </div>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <div className='checkbox-box'>
                    <input
                        type="checkbox"
                        id="terms"
                        checked={isChecked}
                        onChange={() => setIsChecked(prev => !prev)}
                    />
                    <label htmlFor="terms">I agree to the terms and conditions.</label>
                </div>
                <BtnPrime type="submit" text="Send Message"/>
                {/* <button type="submit" className='btn-prim'><span>Send Message</span></button> */}
                {!isChecked && formSubmitted && <p>Please agree to the terms and conditions to proceed.</p>}
            </form>
    );
};

export default ContactForm;
