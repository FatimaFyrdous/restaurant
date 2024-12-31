import React from "react";
import "../styles/MapSection.css";

const MapSection = () => {
  const googleMapsLink = "https://www.google.com/maps/place/Priestpopple,+Hexham,+Northumberland,+NE46+1PH";

  return (
    <div className="map-section">
      <div className="map-container">
        <iframe
          title="Map to Priestpopple, Hexham"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9489.136480362326!2d-2.102272777126314!3d54.97235481841944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487cf1587f5cc3f1%3A0x979f8bb4daee6f49!2sPriestpopple%2C%20Hexham%2C%20Northumberland%20NE46%201PH%2C%20UK!5e0!3m2!1sen!2suk!4v1697654438791!5m2!1sen!2suk"
          className="map-frame"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="directions-button-container">
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="directions-button">
            <span className="button-icon">📍</span> Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
