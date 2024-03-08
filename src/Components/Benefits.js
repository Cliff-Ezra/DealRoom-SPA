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
            <p className="primary-text">
              {" "}
              For Business{" "}
            </p>
            <button className="secondary-button">
              {" "}
              Get Started <FiArrowRight />{" "}
            </button>
          </div>
          <div className="benefit-item">
            <p className="primary-text">
              {" "}
              For Investment{" "}
            </p>
            <button className="secondary-button">
              {" "}
              Get Started <FiArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
