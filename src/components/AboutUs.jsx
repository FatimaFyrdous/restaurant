import React from 'react';
import '../styles/About-Us.css';
import step03Icon from '../assets/images/step03.png'; // Replace with the correct paths to your images
import step04Icon from '../assets/images/step04.png';
import step05Icon from '../assets/images/step05.png';
import step06Icon from '../assets/images/step06.png';
import step07Icon from '../assets/images/step07.png';

const AboutUs = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <h1 className="about-title">ABOUT US</h1>
                <section className="about-section">
                    <h2 className="section-title">Welcome to Hinckley Crumpet</h2>
                    <p>
                        Established in <strong>October 2017</strong>, Hinckley Crumpet is your go-to destination for delicious fast food in the heart of 
                        <strong> Priestpopple, Hexham, Northumberland, NE46 1PH</strong>. We pride ourselves on providing a cozy atmosphere and 
                        exceptional service to every customer who walks through our doors.
                    </p>
                    <p>
                        Under the ownership of <strong>Mr. Adrian Venoin</strong>, Hinckley Crumpet has been serving quality meals crafted with the 
                        finest ingredients. We are committed to offering a memorable dining experience for individuals and families alike.
                    </p>
                </section>

                <section className="about-section">
                    <h2 className="section-title">Our Tagline</h2>
                    <p><em>"The Tasty House"</em> - Where every bite is a treat!</p>
                </section>

                <section className="about-section">
                    <h2 className="section-title">Operating Hours</h2>
                    <p>
                        We're open <strong>7 days a week</strong> to satisfy your cravings:
                        <br />
                        <strong>1:00 PM to 11:00 PM</strong>
                    </p>
                </section>

                <section className="about-section">
                    <h2 className="section-title">Contact Us</h2>
                    <p>
                        <strong>Address:</strong> Priestpopple, Hexham, Northumberland, NE46 1PH <br />
                        <strong>Phone:</strong> <a href="tel:+441416112980">0141 611 2980</a> <br />
                        <strong>Email:</strong> <a href="mailto:clearbusinessbyadrian@gmail.com">clearbusinessbyadrian@gmail.com</a>
                    </p>
                </section>

                <section className="about-section">
                    <h2 className="section-title">Online Orders</h2>
                    <p>
                        For online orders, feel free to reach us at the same email: 
                        <a href="mailto:clearbusinessbyadrian@gmail.com">clearbusinessbyadrian@gmail.com</a>
                    </p>
                </section>

                <section className="about-section">
                    <h2 className="section-title">Why Choose Us?</h2>
                    <ul className="about-list">
                        <li>Delicious fast food with premium ingredients</li>
                        <li>Convenient location in Hexham</li>
                        <li>Family-friendly environment</li>
                        <li>Committed to exceptional customer service</li>
                    </ul>
                </section>

                {/* Steps Section */}
                <section className="about-section steps-section">
                    <h2 className="section-title">How It Works</h2>
                    <div className="steps-container">
                        <div className="step-item">
                            <img src={step03Icon} alt="Order your drink" className="step-icon" />
                            <div>
                                <h3 className="step-title">Step 03: Order your drink</h3>
                                <p className="step-description">We may ask your contact details.</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <img src={step04Icon} alt="Start your journey" className="step-icon" />
                            <div>
                                <h3 className="step-title">Step 04: Start your journey</h3>
                                <p className="step-description">
                                    <strong>Option 1:</strong> Self-service. Wear your mask and follow the queue to the buffet area.<br />
                                    <strong>Option 2:</strong> Table service. Scan the QR code to order food at your table (up to 5 dishes).
                                </p>
                            </div>
                        </div>
                        <div className="step-item">
                            <img src={step05Icon} alt="Still hungry" className="step-icon" />
                            <div>
                                <h3 className="step-title">Step 05: Still hungry</h3>
                                <p className="step-description">You can repeat Step 4.</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <img src={step06Icon} alt="Dessert" className="step-icon" />
                            <div>
                                <h3 className="step-title">Step 06: Dessert</h3>
                                <p className="step-description">Leave room for dessert!</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <img src={step07Icon} alt="Please pay at the bar" className="step-icon" />
                            <div>
                                <h3 className="step-title">Step 07: Please pay at the bar</h3>
                                <p className="step-description">Thank you, hope to see you again.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutUs;
