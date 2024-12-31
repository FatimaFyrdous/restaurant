import React from 'react';
import '../styles/Opening-Hours.css';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';

const OpeningHours = () => {
    return (
        <div className="opening-hours-page">
            <h1 className="opening-hours-title">OPENING HOURS</h1>
            <div className="opening-hours-info">
                <p>We are open 7 days a week!</p>
                <p><strong>1:00 PM to 11:00 PM <br />Priestpopple, Hexham, Northumberland, NE46 1PH</strong></p>
            </div>

            <h2 className="gallery-title">Photo Gallery</h2>
            <div className="photo-gallery">
                <img src={img1} alt="Restaurant 1" />
                <img src={img2} alt="Restaurant 2" />
                <img src={img3} alt="Restaurant 3" />
                <img src={img4} alt="Restaurant 4" />
                <img src={img5} alt="Restaurant 5" />
                <img src={img6} alt="Restaurant 6" />
                <img src={img7} alt="Restaurant 7" />
                <img src={img8} alt="Restaurant 8" />
                <img src={img9} alt="Restaurant 9" />
                <img src={img10} alt="Restaurant 10" />
                <img src={img11} alt="Restaurant 11" />
                <img src={img12} alt="Restaurant 12" />
            </div>
        </div>
    );
}

export default OpeningHours;
