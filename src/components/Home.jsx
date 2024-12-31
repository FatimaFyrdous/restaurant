import React, { useState } from "react";
import "../styles/Home.css";
import Carousel from "react-bootstrap/Carousel";
import Reviews from "./Reviews.jsx";
import GiftVouchers from "./GiftVouchers.jsx";
import VisitUs from "./VisitUs.jsx";
import MapSection from "./MapSection.jsx";
import MOdalForm from "./MOdalForm.jsx";
import Modal from "react-bootstrap/Modal";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="home-carousel">
            <div className="overlay">
              <h1 className="tagline-main">The Tasty House</h1>
              <div className="circle">
                <h2>BOOK NOW!!</h2>
                <button className="reserve-btn" onClick={handleShow}>
                  RESERVE NOW
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Modal for reservation */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body style={{ backgroundColor: "#6b4e36", position: "relative" }}>
          {/* Close Button inside the body */}
          <button
            onClick={handleClose}
            className="close-btn"
          >
            &times;
          </button>
          <MOdalForm />
        </Modal.Body>
      </Modal>

      <Reviews />
      <GiftVouchers />
      <VisitUs />
      <MapSection />
    </>
  );
};

export default Home;
