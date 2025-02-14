import React from "react";
import "./Styles/About.css";
import profileImage from "../Assets/cool.jpg";

const About = () => {
  return (
    <div class="about-wrapper">
    <div className="about-container">
      <div className="about-image">
        <img src={profileImage} alt="Profile" />
        <div className="image-border"></div>
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat!
        </p>
        
        <div className="about-buttons">
          <button className="hire-me">Hire Me</button>
          <button className="download-cv">Download CV</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
