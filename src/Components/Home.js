import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/laptop-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Welcome to DealRoom</h1>
          <p className="primary-text">
            Your one-stop platform for business development and investment
            opportunities.
          </p>
          <a href="https://deal-room-live.vercel.app/auth/register">
            <button className="secondary-button">
              Get Started <FiArrowRight />{" "}
            </button>
          </a>
          <p className="primary-text2">
            Join us and explore the world of opportunities.
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
