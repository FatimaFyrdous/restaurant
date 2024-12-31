import React from "react";
import "../styles/GiftVouchers.css";
import img1 from "../assets/images/man-dancing-with-woman-restaurant.png";

const GiftVouchers = () => {
  return (
    <div className="gift-vouchers-section">
      <div className="gift-vouchers-content">
        <img
          src={img1}
          alt="Gift Vouchers"
          className="gift-vouchers-image"
        />
        <div className="gift-vouchers-text">
          <h2>GIFT VOUCHERS</h2>
          <p>
            Send a gift voucher to friends and family or buy it now for your
            future use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftVouchers;
