import React from "react";
import "./Styles/projects.css";
import projectimage1 from "../Assets/Aptech_Appliaction_Screens.png";
import projectimage2 from "../Assets/Car_Website.png";
import projectimage3 from "../Assets/Portfolio.png";

function Project() {
  const projects = [
    {
      id: 1,
      image: projectimage1,
      title: "Aptech Application",
      description: "A modern Flutter-based app with Firebase Authentication for secure login. It features a user-friendly UI with course listings, student dashboard, and easy navigation for IT learners.",
    },
    {
      id: 2,
      image: projectimage2,
      title: "Web Design Demo",
      description: "🚗💻 Excited to showcase my latest front-end web design for Pak Motor! From sleek car displays to user-friendly service options, this design aims to provide a seamless experience for automobile enthusiasts. 🚙✨",
    },
    {
      id: 2,
      image: projectimage3,
      title: "Portfolio",
      description: "I create modern, responsive, and high-performance applications using React. Passionate about delivering seamless user experiences with clean UI/UX and efficient functionality.",
    },
  ];
  return (
    <div className="Project-container">
      <h1 className="Project-heading">Projects</h1>
      <div className="Project-grid">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Project;
