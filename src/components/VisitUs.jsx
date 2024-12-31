import React, { useState } from "react";
import "../styles/VisitUs.css";

const VisitUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with the following details:\n${JSON.stringify(formData, null, 2)}`);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="visit-us-section">
      <h2>VISIT US</h2>
      <div className="visit-us-content">
        <form onSubmit={handleSubmit} className="visit-us-form">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we serve you?"
              required
            ></textarea>

          <button type="submit" className="visit-us-submit">
            SEND
          </button>
        </form>
        <div className="visit-us-info">
          <h3>SPECIAL REQUESTS?</h3>
          <p>
            Do you have dietary concerns? Questions about an upcoming event? Drop us a line, and we'll get back to you soon!
          </p>
          <h3>Hinckley Crumpet</h3>
          <p>Priestpopple, Hexham, Northumberland, NE46 1PH</p>
          <p>01416112980</p>
          <p> clearbusinessbyadrian@gmail.com</p>
          <h3>OPENING HOURS</h3>
          <p>1:00 PM to 11:00 PM (7 days a week)</p>
        </div>
      </div>
      <p className="recaptcha-note">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </p>
    </div>
  );
};


export default VisitUs;
