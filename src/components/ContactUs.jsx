import React from 'react';
import '../styles/Contact-Us.css';

const ContactUs = () => {
    return (
        <div className="contact-us-page">
            <h1 className="contact-us-title">CONTACT US</h1>
            <div className="contact-info">
                <h2 className="restaurant-name">Hinckley Crumpet</h2>
                <p className="tagline-contact">"The Tasty House"</p>
                <p><strong>Contact No:</strong> <a href="tel:+441416112980"> 0141 611 2980 </a></p>
                <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:clearbusinessbyadrian@gmail.com">clearbusinessbyadrian@gmail.com</a>
                </p>
            </div>
        </div>
    );
};

export default ContactUs;
