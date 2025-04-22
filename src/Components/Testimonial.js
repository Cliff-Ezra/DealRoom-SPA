import React from "react";
import TestimonialPic from "../Assets/Testimonial.jpeg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="home-bannerImage-container">
      </div>
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">Hear from our satisfied users.</p>
      </div>
      <div className="testimonial-section-bottom">
          <img 
            src={TestimonialPic} 
            alt="" 
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />
        <p>
          DealRoom has been a game changer for us. We were able to secure
          funding for our business in a matter of weeks. The platform is easy to
          use and the support team is very responsive. I would highly recommend
          DealRoom to any business looking for investment.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Cliff Ezra</h2>
      </div>
    </div>
  );
};

export default Testimonial;
