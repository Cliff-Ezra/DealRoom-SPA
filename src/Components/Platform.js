import React from "react";
import PlatformBackground from "../Assets/platform-background.png";
import PlatformImage from "../Assets/platform.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Platform = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={PlatformBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={PlatformImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Platform</p>
        <h1 className="primary-heading-platform">
          Connecting Investors and Businesses
        </h1>
        <p className="primary-text-platform">
          Our platform is designed to be intuitive and easy to use. For both
          Businesses and Investors
        </p>
        <p className="primary-text-platform">
          Connecting Investors, Businesses seeking investments and investment
          advisors in one platform
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Platform;
