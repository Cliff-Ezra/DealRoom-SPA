import React from "react";
import Business from "../Assets/business.png";
import Investor from "../Assets/investor.png";
import Algorithm from "../Assets/algorithm.png";
import Kanban from "../Assets/kanban.png";
import Analytics from "../Assets/dashboard.png";

const About = () => {
  const workInfoData = [
    {
      image: Business,
      title: "Business Listing Module",
      text: "A comprehensive listing of businesses looking for investment.",
    },
    {
      image: Investor,
      title: "Investor Onboarding Module",
      text: "A streamlined process for investors to join our platform.",
    },
    {
      image: Algorithm,
      title: "Matchmaking Algorithm",
      text: "Our proprietary algorithm matches businesses with the right investors.",
    },
    {
      image: Kanban,
      title: "Pipeline Management",
      text: "Manage your investment pipeline with ease.",
    },
    {
      image: Analytics,
      title: "Reporting and Analytics",
      text: "Get insights into your investments with our detailed reports and analytics.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Our Key Features</h1>
        <p className="primary-text">Explore modules that make us unique</p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
