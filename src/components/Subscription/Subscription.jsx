import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BtnPrime from '../Buttons/BtnPrime';


const Subscription = () => {


    const [formData, setFormData] = useState({
        email: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Ovde biste dodali logiku za slanje forme, npr. POST zahtev na backend server
        setFormSubmitted(true);

    }

    useEffect(() => {
        AOS.init({
            // ovde možete dodati globalna podešavanja za AOS
            easing: 'linear',
            duration: 1500, // trajanje animacije
        });
    }, []);

    return (
        <div className='subscription'>
                    <div className="subscription-container">
                        <div className='left-side'>
                            <div className='headline'>
                                <h2>Subscribe to Newsletter</h2>
                                <p>Be the first to recieve all latest post in your inbox</p>
                            </div>
                        </div>
                        <div className='right-side'>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email-subs"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <BtnPrime text="Submit"/>
                            </form>
                        </div>
                    </div>
                    
            

        </div>
    );
};

export default Subscription;