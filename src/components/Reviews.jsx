import React from "react";
import Slider from "react-slick";
import "../styles/Reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewsData = [
  {
    name: "Jenny Beattie",
    date: "21/12/2024",
    rating: 5,
    review: "Great service.",
  },
  {
    name: "Katie Coutts",
    date: "12/12/2024",
    rating: 5,
    review: "Lovely buffet, lots of different options. Everything was full, fresh, and tasty.",
  },
  {
    name: "Rafal Lewandowski",
    date: "04/12/2024",
    rating: 5,
    review: "All good 👍",
  },
  {
    name: "John Doe",
    date: "01/12/2024",
    rating: 4,
    review: "Good service, but a little crowded.",
  },
  {
    name: "Jane Smith",
    date: "25/11/2024",
    rating: 5,
    review: "Fantastic food and ambiance!",
  },
  {
    name: "Chris Evans",
    date: "15/11/2024",
    rating: 5,
    review: "The desserts were amazing!",
  },
  {
    name: "Natalie Portman",
    date: "10/11/2024",
    rating: 4,
    review: "Great experience but the parking lot was full.",
  },
  {
    name: "Robert Downey",
    date: "05/11/2024",
    rating: 5,
    review: "Absolutely loved it!",
  },
  {
    name: "Scarlett Johansson",
    date: "01/11/2024",
    rating: 5,
    review: "Will definitely come again!",
  },
];

const Reviews = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h2>REVIEWS</h2>
        <div className="review-rating">
          <h3>3.9</h3>
          <p className="review-rating-stars">⭐️⭐️⭐️⭐️</p>
          <p>Hinckley Crumpet</p>
          <p>724 Reviews</p>
        </div>
      </div>
      <Slider {...sliderSettings}>
        {Array.from({ length: Math.ceil(reviewsData.length / 3) }, (_, index) => (
          <div key={index} className="reviews-slide">
            <div className="reviews-cards">
              {reviewsData.slice(index * 3, index * 3 + 3).map((review, idx) => (
                <div key={idx} className="review-card">
                  <div className="review-avatar">{review.name.charAt(0)}</div>
                  <div className="review-content">
                    <p className="review-rating-stars">⭐️⭐️⭐️⭐️⭐️</p>
                    <p className="review-text">"{review.review}"</p>
                    <p className="review-author">
                      {review.name} - {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
