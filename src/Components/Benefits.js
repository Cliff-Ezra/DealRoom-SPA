import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Benefits = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Benefits</p>
        <h1 className="primary-heading-platform">
          {" "}
          Benefits of DealRoom Platform{" "}
        </h1>
        <p className="primary-text">
          {" "}
          Explore more features that make DealRoom the best platform for your
          investment needs.{" "}
        </p>
        <div className="benefits-container">
          <div className="benefit-item">
            <p className="primary-text"> For Business </p>
            <a href="https://deal-room-live.vercel.app/auth/register">
              <button className="secondary-button">
                {" "}
                Get Started <FiArrowRight />{" "}
              </button>
            </a>
          </div>
          <div className="benefit-item">
            <p className="primary-text"> For Investment </p>
            <a href="https://deal-room-live.vercel.app/auth/register">
              <button className="secondary-button">
                {" "}
                Get Started <FiArrowRight />{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
